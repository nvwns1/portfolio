"use client"
import React from 'react'
import styles from './ProjectCard.module.scss'
import Image from 'next/image'
import Button from '@/components/Component/Button/Button'

interface IProjectCardProps {
    image: string
    title: string
    description: string
    technologyUsed: string[]
    sourceCode: string
    viewProject: string
}
const ProjectCard = ({
    image,
    title,
    description,
    technologyUsed,
    sourceCode,
    viewProject
}: IProjectCardProps) => {
    return (
        <main className={styles.wrapper}>
            <div className={styles.image}>
                {/* <Image src={image} alt={title} width={200} height={200} /> */}
            </div>
            <div className={styles.content}>
                <div className={styles.head}>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.description}>{description}</p>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.bottomHead}>
                        {technologyUsed.map((tech, index) => (
                            <span key={index} className={styles.tech}>{tech}</span>
                        ))}
                    </div>
                    <div className={styles.buttonSection}>
                        <Button label="View Project" onClick={() => console.log('first')} />
                        <Button label="Source Code" background='secondary' onClick={() => console.log('first')} />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ProjectCard