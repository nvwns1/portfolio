"use client"
import React from 'react'
import styles from "./Intro.module.scss"
import Button from '../Component/Button/Button'
import { NavButtonIDEnum } from '@/lib/Enum/id'

const Intro = () => {
    const handleResumeClick = () => {
        console.log('first')
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
        </section>
    )
}

export default Intro