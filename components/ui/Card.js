import { useState } from 'react';
import classes from './Card.module.css';
import Image from 'next/image';
function Card({ img, title, description, content }){

    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <>
            <div className={modalIsOpen ? classes.modal_container : classes.none} onClick={() => setModalIsOpen(false)}></div>
            <div className={modalIsOpen ? classes.modal : classes.none}>
                <div className={classes.modalimage}>
                    <Image src={img} alt='an image' fill objectFit='cover'/>
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
                    <Image src={img} alt='an image' fill objectFit='cover' />
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