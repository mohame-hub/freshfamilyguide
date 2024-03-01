import classes from './CreatePostPage.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
function CreatePostPage(){

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [content, setContent] = useState("");

    const [openImageSelector, setOpenImageSelector] = useState(false);

    const [images, setImages] = useState([
        "/images/img1.png",
        "/images/img2.png",
        "/images/img3.png",
        "/images/img4.png",
        "/images/img5.png",
        "/images/img6.png",
        "/images/img7.png",
        "/images/img8.png",
    ])

    const [selectedImage, setSelectedImage] = useState(-1)

    return (
        <>
        <div className={openImageSelector ? classes.modal_closer : classes.none} onClick={() => setOpenImageSelector(false)}></div>
        <div className={openImageSelector ? classes.modal_container : classes.none}>
            <div className={classes.head}>Bild auswählen...</div>
            <div className={classes.grid}>
                {images.map((image, index) => {
                    return <div key={index} className={classes.selectable_image} onClick={() => setSelectedImage(index)}>
                        <Image src={image} alt='selectable image' fill />
                        <div className={classes.radius}>
                            <div className={selectedImage == index && classes.selected}></div>
                        </div>
                    </div>
                })}
            </div>
            <div className={classes.chooser}>
                <div className={classes.close} onClick={() => setOpenImageSelector(false)}>Schließen</div>
                <div className={classes.select}>Auswählen</div>
            </div>
        </div>
        <div className={classes.container}>
            <div className={classes.left}>
                <div className={classes.title}>Veröffentliche einen Beitrag für deine Mitmenschen!</div>
                <label className={classes.label}>Titel</label>
                <input type='text' placeholder='Schreibe hier...' className={classes.input} value={title} onChange={(e) => setTitle(e.target.value)} />
                <label className={classes.label}>Beschreibung</label>
                <input type='text' placeholder='Schreibe hier...' className={classes.input} value={description} onChange={(e) => setDescription(e.target.value)} />
                <label className={classes.label}>Text</label>
                <textarea typeof='text' placeholder='Schreibe hier...' className={classes.textarea} value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                <div className={classes.buttons}>
                    <div className={classes.delete}>Entwurf löschen</div>
                    <div className={classes.post}>Beitrag posten</div>
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
        </>
    )
} export default CreatePostPage;