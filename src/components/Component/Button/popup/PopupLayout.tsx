import React from 'react'
import styles from './PopupLayout.module.scss'
interface IPopupLayout {
    title: string
    closePopUp: () => void
    children: React.ReactNode
    footer?: React.ReactNode
}

const PopupLayout = ({ title, children, footer, closePopUp }: IPopupLayout) => {
    return (
        <div className={styles.popUpWrapper}>
            <div className={styles.popUpRoot}>
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

export default PopupLayout