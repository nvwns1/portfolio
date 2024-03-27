"use client"
import React, { useState } from 'react'
import styles from "./Intro.module.scss"
import Button from '../Component/Button/Button'
import { NavButtonIDEnum } from '@/lib/Enum/id'
import PopUp from '../Component/Popup/Popup'

const Intro = () => {
    const handleResumeClick = () => {
        setPopUp(true)
    }
    const handleHireMeClick = () => {
        console.log('first')
    }
    const [popUp, setPopUp] = useState<Boolean>(false)
    return (
        <section className={styles.main} id={NavButtonIDEnum.INTRO}>
            {popUp &&
                <PopUp title='Resume' closePopUp={() => setPopUp(false)}>
                    <div className={styles.resumePopUpWrapper}>
                        <iframe src="/pdf/SumanMaharjanCV.pdf" width="100%" height="100%" frameBorder="0" />
                    </div>
                </PopUp>}
            <div className={styles.textContent}>
                <p>Hey!</p>
                <p className={styles.title}>I&apos;m <span className={styles.subText}>Suman Maharjan</span></p>
                <p>I am a React/ Next.js Developer</p>
            </div>
            <div className={styles.buttonSection}>
                <Button onClick={handleResumeClick}>Resume</Button>
                <Button background='secondary' onClick={handleHireMeClick}>Hire Me</Button>
            </div>
        </section>
    )
}

export default Intro