import classes from './CreatePostPage.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
function CreatePostPage(){

    const session = useSession();
    const router = useRouter();

    const [links] = useState([
        "Gesundheit & Ernährung",
        "Schlaf",
        "Sicherheit",
        "Hygiene",
        "Lernspielzeuge",
        "Unterhaltung für Kinder/Babies",
    ]);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [content, setContent] = useState("");

    const [openImageSelector, setOpenImageSelector] = useState(false);

    const [images, setImages] = useState([
        "/images/img2.png",
        "/images/img1.png",
        "/images/img3.png",
        "/images/img4.png",
        "/images/img5.png",
        "/images/img6.png",
        "/images/img7.png",
        "/images/img8.png",
    ])

    const [selectedImage, setSelectedImage] = useState(-1)
    const [selectedLink, setSelectedLink] = useState(links[0]);

    async function handleSubmit(e) {
        e.preventDefault();
        const response = await fetch("/api/auth/post", {
            method: "POST",
            body: JSON.stringify({
                title: title,
                description: description,
                text: content,
                imageLink: selectedImage,
                category: selectedLink,
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (response.ok) {
            router.replace("/");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
        <div className={openImageSelector ? classes.modal_closer : classes.none} onClick={() => setOpenImageSelector(false)}></div>
        <div className={openImageSelector ? classes.modal_container : classes.none}>
            <div className={classes.head}>Bild auswählen...</div>
            <div className={classes.grid}>
                {images.map((image, index) => {
                    return <div key={index} className={classes.selectable_image} onClick={() => setSelectedImage(index)}>
                        <Image src={image} alt='selectable image' fill />
                    </div>
                })}
            </div>
        </div>
        <div className={classes.container}>
            <div className={classes.left}>
                <div className={classes.title}>Veröffentliche einen Beitrag für deine Mitmenschen!</div>
                <label className={classes.label}>Thema</label>
            <select className={classes.select} value={selectedLink} onChange={(e) => setSelectedLink(e.target.value)}>
                {links.map((link, index) => (
                    <option key={index} value={link}>{link}</option>
                ))}
            </select>
                <label className={classes.label}>Titel</label>
                <input type='text' placeholder='Schreibe hier...' className={classes.input} value={title} onChange={(e) => setTitle(e.target.value)} />
                <label className={classes.label}>Beschreibung</label>
                <input type='text' placeholder='Schreibe hier...' className={classes.input} value={description} onChange={(e) => setDescription(e.target.value)} />
                <label className={classes.label}>Text</label>
                <textarea typeof='text' placeholder='Schreibe hier...' className={classes.textarea} value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                <div className={classes.buttons}>
                    <Link href={"/"}><div className={classes.delete}>Entwurf löschen</div></Link>
                    <button className={classes.post} type='submit' >Beitrag posten</button>
                </div>
            </div>
            <div className={classes.right}>
                <div className={classes.image_selector} onClick={() => setOpenImageSelector(true)}>
                    <div className={classes.top}>
                        <div className={selectedImage == -1 ? classes.selector_image : classes.none}>
                            <Image src={"/ui_images/select_image.png"} alt='selector_image' fill />
                        </div>
                        <div className={selectedImage != -1 ? classes.selector_image_full : classes.none}>
                            <Image src={images[selectedImage]} alt='selector_image' fill objectFit='cover' />
                        </div>
                    </div>
                    <div className={classes.bottom}>Bild auswählen...</div>
                </div>
            </div>
        </div>
        </form>
    )
} export default CreatePostPage;