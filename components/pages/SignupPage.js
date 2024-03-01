import classes from './SignupPage.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
function SignupPage(){

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [createPassword, setCreatePassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

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
                <div className={classes.big_title}>Sign up</div>
                <div className={classes.sep}></div>
                <input type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)} className={classes.input} placeholder='First name' />
                <input type='text' value={lastName} onChange={(e) => setLastName(e.target.value)} className={classes.input} placeholder='Last name'/>
                <input type='emaıl' value={email} onChange={(e) => setEmail(e.target.value)} className={classes.input} placeholder='Email'/>
                <input type='password' value={createPassword} onChange={(e) => setCreatePassword(e.target.value)} className={classes.input} placeholder='Create password' />
                <input type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className={classes.input} placeholder='Confirm Password' />
                <div className={classes.button}>Sign up</div>
                <div className={classes.redirection}>Already have an account? <Link href={"/login"}><span className={classes.link}>Log in</span></Link></div>
            </div>
        </div>
    )
} export default SignupPage;