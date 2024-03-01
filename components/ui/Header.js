import Link from 'next/link';
import classes from './Header.module.css'
import Image from 'next/image';
import { useState } from 'react';
function Header({ signedIn }){

    return (
        <div className={classes.header}>
            <div className={classes.logo}>
                <Image src={"/ui_images/logo.png"} alt='Logo' fill/>
            </div>
            <div className={classes.links}>
                <Link href={"/health_and_nutrition"}><div className={classes.link}>Gesundheit & Ernährung</div></Link>
                <Link href={"/sleep"}><div className={classes.link}>Schlaf</div></Link>
                <Link href={"/safety"}><div className={classes.link}>Sicherheit</div></Link>
                <Link href={"/hygiene"}><div className={classes.link}>Hygiene</div></Link>
                <Link href={"/educational_toys"}><div className={classes.link}>Lernspielzeuge</div></Link>
                <Link href={"/entertainment_for_kids_and_babies"}><div className={classes.link}>Unterhaltung für Kinder/Babies</div></Link>
                <Link href={"/health_and_nutrition"}><div className={classes.link}>Gesundheit & Ernährung</div></Link>
            </div>
            {signedIn ? <Link href={"create_post"}>
                <div className={classes.button}>
                Eigenen Beitrag veröffentlichen
            </div></Link> : <div className={classes.sign}>
                <div className={classes.signup}>Sign Up</div>
                <div className={classes.sep}>OR</div>
                <div className={classes.signin}>Log in</div>
            </div>}
        </div>
    )
} export default Header;