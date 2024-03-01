import classes from './SignupPage.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
function LoginPage(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className={classes.container}>
            <div className={classes.left}>
                <div className={classes.logo}>
                    <Image src={"/ui_images/logo.png"} alt='Logo' fill objectFit='cover' />
                </div>
                <div className={classes.big_title}>WELCOME TO</div>
                <div className={classes.bigger_title}>Fresh Family Guide</div>
                <div className={classes.title}>where families find guidance!</div>
                <div className={classes.access}>Log in to access more features!</div>
            </div>
            <div className={classes.right}>
                <div className={classes.big_title}>Log in</div>
                <div className={classes.sep}></div>
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} className={classes.input} placeholder='Email'/>
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} className={classes.input} placeholder='Password' />
                <div className={classes.button}>Log in</div>
                <div className={classes.redirection}>Dont have an account? <Link href={"/signup"}><span className={classes.link}>Register</span></Link></div>
            </div>
        </div>
    )
} export default LoginPage;