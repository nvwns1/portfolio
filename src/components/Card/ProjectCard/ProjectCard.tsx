"use client"
import React from 'react'
import styles from './ProjectCard.module.scss'
import Image from 'next/image'
import Button from '@/components/Component/Button/Button'
import { ProjectStatusEnum } from '@/lib/Enum/id'
import { openURLInNewTab } from '@/lib/helper/openUrl'

export interface IProjectCardProps {
    image: string
    title: string
    description: string
    technologyUsed: string[]
    sourceCode: string
    viewProject?: string
    status?: ProjectStatusEnum
}
const ProjectCard = ({
    image,
    title,
    description,
    status,
    technologyUsed,
    sourceCode,
    viewProject
}: IProjectCardProps) => {
    return (
        <main className={styles.wrapper}>
            <div className={styles.image}>
                <Image className={styles.projectImage} src={image} alt={title} width={400} height={400} />
            </div>
            <div className={styles.content}>
                <div className={styles.head}>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.description}>{description}</p>
                    <p className={styles.status}> {status ? status : ' '}</p>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.bottomHead}>
                        {technologyUsed.map((tech, index) => (
                            <span key={index} className={styles.tech}>{tech}</span>
                        ))}
                    </div>
                    <div className={styles.buttonSection}>
                        {viewProject &&
                            <Button label="View Project" onClick={() => openURLInNewTab(viewProject)} />
                        }
                        {
                            sourceCode &&
                            <Button label="Source Code" background='secondary' onClick={() => openURLInNewTab(sourceCode)} />
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ProjectCard