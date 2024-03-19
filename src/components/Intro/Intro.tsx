"use client"
import Image from 'next/image'
import React from 'react'
import styles from "./Intro.module.scss"
import Button from '../Component/Button/Button'
const Intro = () => {
    const handleResumeClick = () => {
        console.log('first')
    }
    const handleHireMeClick = () => {
        console.log('first')
    }
    return (
        <section className={styles.main}>
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