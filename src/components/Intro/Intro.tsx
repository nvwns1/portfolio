"use client"
import styles from "./Intro.module.scss"
import Button from '../Component/Button/Button'
import { NavButtonIDEnum } from '@/lib/Enum/id'
import React, { useState } from 'react'
import PopupLayout from '../Component/Button/popup/PopupLayout'

const Intro = () => {
    const [popup, setPopup] = useState<Boolean>(false)
    const handleResumeClick = () => {
        setPopup(true)
    }
    const handleHireMeClick = () => {
        console.log('first')
    }
    return (

        <section className={styles.main} id={NavButtonIDEnum.INTRO}>
            <div className={styles.textContent}>
                <p>Hey!</p>
                <p className={styles.title}>I&apos;m <span className={styles.subText}>Suman Maharjan</span></p>
                <p>I am a React/ Next.js Developer</p>
            </div>
            <div className={styles.buttonSection}>
                <Button onClick={handleResumeClick}>Resume</Button>
                <Button background='secondary' onClick={handleHireMeClick}>Hire Me</Button>
            </div>
        <section className={styles.main}>
            {popup && <PopupLayout title='Resume'
                closePopUp={() => setPopup(false)}
            >
                Hello</PopupLayout>}
            {/* {popup && <div className={styles.popup}>
                <div className={styles.layoutRoot}>
                    <div className={styles.popupHead}>
                        <p className={styles.title}>Resume</p>
                        <p className={styles.icon} onClick={() => setPopup(false)}>X</p>
                    </div>
                    <div className={styles.popupBody}></div>
                    <div className={styles.popupFooter}>
                        <Button onClick={() => setPopup(true)}>Download</Button>
                    </div>
                </div>
            </div>} */}
            <article className={styles.leftSide}>
                <div className={styles.imageContainer}>
                    {/* <Animation /> */}
                    {/* <Image src="/animation/animation.svg" alt="Suman Maharjan" width={300} height={300} /> */}
                </div>
            </article>
            <article className={styles.rightSide}>
                <div className={styles.textContent}>
                    <p>Hello, I&apos;m,</p>
                    <p className={styles.title}>Suman Maharjan</p>
                    <p>I am a React/ Next.js Developer</p>
                </div>
                <div className={styles.buttonSection}>
                    <Button onClick={handleResumeClick}>Resume</Button>
                    <Button background='secondary' onClick={handleHireMeClick}>Hire Me</Button>
                </div>
            </article>
        </section>
    )
}

export default Intro