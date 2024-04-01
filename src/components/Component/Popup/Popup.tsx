"use client"
import React, { useEffect, useRef } from 'react'
import styles from './Popup.module.scss'
import { classnames } from '@/lib/helper/utils'
import CloseIconSvg from '@/lib/svg/CloseIconSvg'
interface IPopUp {
    title: string
    size?: 'auto' | 'large'
    closePopUp: () => void
    children: React.ReactNode
}

const PopUp = ({ title, children, closePopUp, size = 'large' }: IPopUp) => {
    const popUpRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (popUpRef.current && !popUpRef.current.contains(event.target as Node)) {
                closePopUp();
            }
        };
        const handleEscapeKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closePopUp();
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        document.addEventListener('keydown', handleEscapeKey);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [closePopUp, popUpRef])

    const classNames = {
        popUpRoot: classnames([
            styles.popUpRoot,
            styles[size]
        ])
    }
    return (
        <div className={styles.popUpWrapper}>
            <div ref={popUpRef} className={classNames.popUpRoot}>
                <div className={styles.popUpHead}>
                    <p className={styles.title}>{title}</p>
                    <CloseIconSvg className={styles.icon} onClick={() => closePopUp()} />
                </div>
                <div className={styles.popUpBody}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default PopUp