"use client"
import React, { useEffect, useRef } from 'react'
import styles from './Popup.module.scss'
interface IPopUp {
    title: string
    closePopUp: () => void
    children: React.ReactNode
}

const PopUp = ({ title, children, closePopUp }: IPopUp) => {
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

    return (
        <div className={styles.popUpWrapper}>
            <div ref={popUpRef} className={styles.popUpRoot}>
                <div className={styles.popUpHead}>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.icon} onClick={() => closePopUp()}>X</p>
                </div>
                <div className={styles.popUpBody}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default PopUp