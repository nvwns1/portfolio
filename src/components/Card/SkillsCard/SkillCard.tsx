import React from 'react'
import styles from './SkillCard.module.scss'
import Image from 'next/image'
import { classnames } from '@/lib/helper/utils'

export interface ISkillCard {
    title: string
    image: string
    src?: string
    size?: 'sm' | 'md'
}

interface ISizeData {
    sm: number
    md: number
    lg: number
}
const sizeData: ISizeData = {
    sm: 50,
    md: 150,
    lg: 200
}

const SkillCard = ({ title, image, src, size = 'md' }: ISkillCard) => {
    const classNames = {
        root: classnames([
            styles.root,
            styles[size]
        ])
    }
    const sizeValue = sizeData[size]
    return (
        <div className={classNames.root}>
            <div className={styles.image}>
                <Image src={image} alt={title} width={sizeValue} height={sizeValue} />
            </div>
            <p className={styles.title}>{title}</p>
        </div >
    )
}

export default SkillCard