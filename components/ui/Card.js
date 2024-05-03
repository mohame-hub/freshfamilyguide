import { useState } from 'react';
import classes from './Card.module.css';
import Image from 'next/image';
function Card({ img, title, description, content }){

    const [modalIsOpen, setModalIsOpen] = useState(false);

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

    console.log(img)


    return (
        <>
            <div className={modalIsOpen ? classes.modal_container : classes.none} onClick={() => setModalIsOpen(false)}></div>
            <div className={modalIsOpen ? classes.modal : classes.none}>
                <div className={classes.modalimage}>
                    <Image src={images[img]} alt='an image' fill objectFit='cover'/>
                </div>
                <div className={classes.modal_content}>
                    <div className={classes.title}>
                        {title}
                    </div>
                    <div className={classes.sep}></div>
                    <div className={classes.description}>
                        {description}
                    </div>
                    <div className={classes.content}>
                        {content}
                    </div>
                </div>
            </div>
            <div className={classes.container} onClick={() => setModalIsOpen(true)}>
                <div className={classes.image}>
                    <Image src={images[img]} alt='an image' fill objectFit='cover' />
                </div>
                <div className={classes.title}>
                    {title}
                </div>
                <div className={classes.sep}></div>
                <div className={classes.description}>
                    {description}
                </div>
            </div>
        </>
    )
} export default Card;