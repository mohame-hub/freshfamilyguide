import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Card from '../ui/Card';
import { signIn, signOut, useSession } from 'next-auth/react';
import classes from './Hompage.module.css';
import axios from 'axios';
import Logout from '@/pages/logout';

function Homepage() {
    const {data: session} = useSession();
    const signedin = session?.user;
    const [links] = useState([
        "Gesundheit & Ernährung",
        "Schlaf",
        "Sicherheit",
        "Hygiene",
        "Lernspielzeuge",
        "Unterhaltung für Kinder/Babies",
    ]);
    const [selectedLink, setSelectedLink] = useState(links[0]);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await axios.get('/api/auth/getposts'); // Make GET request to fetch posts
                setPosts(response.data); // Set posts state with data from response
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        }

        fetchPosts(); // Call the fetchPosts function when the component mounts
    }, []); // Empty dependency array ensures the effect runs only once after initial render
    console.log(signedin)

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <div className={classes.logo}>
                    <Image src={"/ui_images/logo.png"} alt='Logo' fill/>
                </div>
                <div className={classes.links}>
                    {links.map((link, index) => (
                        <div
                            key={index}
                            className={`${classes.link} ${selectedLink === link && classes.selected_link}`}
                            onClick={() => setSelectedLink(link)}
                        >
                            {link}
                        </div>
                    ))}
                </div>
                {signedin ? (
                    <>
                    <div className={classes.flex}>
                        <Link href={"create_post"}>
                        <div className={classes.button}>Eigenen Beitrag veröffentlichen</div>
                        </Link>
                        <button onClick={() => signOut()}>Sign Out</button>
                    </div>
                    </>
                ) : (
                    <div className={classes.sign}>
                        <Link href={"/signup"}>
                            <div className={classes.signup}>Sign Up</div>
                        </Link>
                        <div className={classes.sep}>OR</div>
                        <Link href={"/login"}>
                            <div className={classes.signin} onClick={() => signIn()}>Log in</div>
                        </Link>
                    </div>
                )}
            </div>
            <div className={classes.content}>
                <div className={classes.title}>{selectedLink}</div>
                <div className={classes.grid}>
                    {posts.map((post, index) => (
                        post.category === selectedLink && <div key={index} className={classes.grid_item}><Card  img={post.imageLink} title={post.title} description={post.description} content={post.text} /></div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Homepage;
