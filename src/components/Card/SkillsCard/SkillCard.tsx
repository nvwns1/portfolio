"use client"
import React from 'react'
import styles from './SkillCard.module.scss'
import Image from 'next/image'
import { classnames } from '@/lib/helper/utils'
import { openURLInNewTab } from '@/lib/helper/openUrl'
import useWindowWidth, { WindowScreenEnum } from '@/lib/hook/windowWidth'

export interface ISkillCard {
    title: string
    image: string
    src?: string
    size?: 'sm' | 'md'
    hover?: boolean
}

interface ISizeData {
    sm: number
    md: number
    lg: number
}
interface IWindowSize {
    [WindowScreenEnum.Desktop]: ISizeData;
    [WindowScreenEnum.Tablet]: ISizeData;
}
const sizeData: IWindowSize = {
    [WindowScreenEnum.Desktop]: {
        sm: 80,
        md: 150,
        lg: 200
    },
    [WindowScreenEnum.Tablet]: {
        sm: 60,
        md: 100,
        lg: 120,
    }
}

const SkillCard = ({ title, image, src, size = 'md', hover = false }: ISkillCard) => {
    const classNames = {
        root: classnames([
            styles.root,
            styles[size],
            src && styles.hover
        ])
    }
    const { windowScreen } = useWindowWidth()
    const sizeValue = sizeData[windowScreen][size]
    return (
        <div className={classNames.root} onClick={() => src && openURLInNewTab(src)}>
            <div className={styles.image}>
                <Image src={image} alt={title} width={sizeValue} height={sizeValue} />
            </div>
            <p className={styles.title}>{title}</p>
        </div >
    )
}

export default SkillCard