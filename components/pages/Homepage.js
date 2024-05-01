import classes from './Hompage.module.css';
import Header from '../ui/Header';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Card from '../ui/Card';
function Homepage(){
    const [signedIn, setSignedIn] = useState(false);
    const [links, setLinks] = useState([
        "Gesundheit & Ernährung",
        "Schlaf",
        "Sicherheit",
        "Hygiene",
        "Lernspielzeuge",
        "Unterhaltung für Kinder/Babies",
    ])

    const [selectedLink, setSelectedLink] = useState(links[0])

    const [posts, setPosts] = useState([
        {
            category: "Gesundheit & Ernährung",
            img: "/images/img1.png",
            title: "Die Reise des kleinen Wunders",
            description: "Ein Leitfaden für die Gesundheit eures Kindes",
            content: `In der Welt der Ernährung gilt Reis als eines der vielseitigsten und nahrhaftesten Lebensmittel. Seit Jahrhunderten wird Reis in verschiedenen Kulturen auf der ganzen Welt angebaut und genossen. Hier sind einige zufällig generierte Vorteile von Reis:
            Ernährungsreichtum: Reis ist reich an Kohlenhydraten, die eine wichtige Energiequelle für den Körper darstellen. Darüber hinaus enthält er auch Proteine, Ballaststoffe und wichtige Vitamine und Mineralien wie Vitamin B, Eisen und Magnesium.
            Leichte Verdaulichkeit: Reis ist leicht verdaulich und eignet sich daher gut für Menschen mit empfindlichem Magen oder Verdauungsproblemen. Es ist auch ein beliebtes Nahrungsmittel für Babys und Kleinkinder.
            Glutenfrei: Im Gegensatz zu Getreidesorten wie Weizen ist Reis von Natur aus glutenfrei, was es zu einer hervorragenden Wahl für Menschen mit Zöliakie oder Glutenunverträglichkeit macht.`
        }
    ])

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <div className={classes.logo}>
                    <Image src={"/ui_images/logo.png"} alt='Logo' fill/>
                </div>
                <div className={classes.links}>
                    <div className={`${classes.link} ${selectedLink == links[0] && classes.selected_link}`} onClick={() => setSelectedLink(links[0])}>Gesundheit & Ernährung</div>
                    <div className={`${classes.link} ${selectedLink == links[1]  && classes.selected_link}`} onClick={() => setSelectedLink(links[1])}>Schlaf</div>
                    <div className={`${classes.link} ${selectedLink == links[2] && classes.selected_link}`} onClick={() => setSelectedLink(links[2])}>Sicherheit</div>
                    <div className={`${classes.link} ${selectedLink == links[3] && classes.selected_link}`} onClick={() => setSelectedLink(links[3])}>Hygiene</div>
                    <div className={`${classes.link} ${selectedLink == links[4] && classes.selected_link}`} onClick={() => setSelectedLink(links[4])}>Lernspielzeuge</div>
                    <div className={`${classes.link} ${selectedLink == links[5] && classes.selected_link}`} onClick={() => setSelectedLink(links[5])}>Unterhaltung für Kinder/Babies</div>
                </div>
                {signedIn ? <Link href={"create_post"}>
                    <div className={classes.button}>
                    Eigenen Beitrag veröffentlichen
                </div></Link> : <div className={classes.sign}>
                    <Link href={"/login"}><div className={classes.signup}>Sign Up</div></Link>
                    <div className={classes.sep}>OR</div>
                    <Link href={"/signup"}><div className={classes.signin}>Log in</div></Link>
                </div>}
            </div>
            <div className={classes.content}>
                <div className={classes.title}>{selectedLink}</div>
                <div className={classes.grid}>
                    {posts.map((post, index) => {
                        return post.category == selectedLink && <Card key={index} img={post.img} title={post.title} description={post.description} content={post.content} />
                    })}
                </div>
            </div>
        </div>
    )
} export default Homepage;