"use client"
import React, { useState } from 'react'
import styles from "./Intro.module.scss"
import Button from '../Component/Button/Button'
import { NavButtonIDEnum } from '@/lib/Enum/id'
import PopUp from '../Component/Popup/Popup'
import { validateFormData } from '@/lib/helper/validateHireMe'

export interface IFormdata {
    name: string;
    email: string;
    description: string;
}
const initialFormData: IFormdata = {
    name: '',
    email: '',
    description: ''
}

const Intro = () => {
    const [popUp, setPopUp] = useState<Boolean>(false)
    const [hireMePopUp, setHireMePopUp] = useState<Boolean>(false)

    const [formData, setFormData] = useState<IFormdata>(initialFormData)
    const [error, setErrors] = useState<Partial<IFormdata>>({})
    const handleChange = (updatedValue: Partial<IFormdata>) => {
        setFormData((prev) => ({ ...prev, ...updatedValue }))
    }
    const handleResumeClick = () => {
        setPopUp(true)
    }
    const handleHireMeClick = () => {
        setHireMePopUp(true)
    }
    const handleFormSubmit = () => {
        const errors = validateFormData(formData)

        if (errors && Object.keys(errors) && Object.keys(errors).length > 0) {
            setErrors(errors)
        }
        console.log({ error })
        if (Object.keys(errors).length === 0) {
            const mailtoLink = `mailto:nvwns12345@gmail.com?subject=Hire Me&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ADescription: ${formData.description}`;
            window.location.href = mailtoLink;
            handleCloseHireMePopUp()
        }
    }
    const handleCloseHireMePopUp = () => {
        setErrors({})
        setFormData(initialFormData)
        setHireMePopUp(false)
    }
    return (
        <section className={styles.main} id={NavButtonIDEnum.INTRO}>
            {popUp &&
                <PopUp title='Resume' closePopUp={() => setPopUp(false)}>
                    <div className={styles.resumePopUpWrapper}>
                        <iframe src="/pdf/SumanMaharjanCV.pdf" width="100%" height="100%" frameBorder="0" />
                    </div>
                </PopUp>}
            {hireMePopUp &&
                <PopUp title='Hire Me' size='auto' closePopUp={handleCloseHireMePopUp}>
                    <div className={styles.hireMePopUpWrapper}>
                        <div className={styles.hireMeForm}>
                            <div className={styles.column}>
                                <label htmlFor="HireMeName">Name</label>
                                <input
                                    type="text"
                                    id='HireMeName'
                                    value={formData.name}
                                    placeholder="Name"
                                    onChange={(e) => {
                                        handleChange({ name: e.target.value })
                                    }}
                                    style={{ border: error.name && '2px solid red' }}
                                />
                            </div>
                            <div className={styles.column}>
                                <label htmlFor="HireMeEmail">Email</label>
                                <input type="text" id='HireMeEmail' value={formData.email} placeholder="Email"
                                    onChange={(e) => handleChange({ email: e.target.value })}
                                    style={{ border: error.email && '2px solid red' }}
                                />
                            </div>
                            <div className={styles.column}>
                                <label htmlFor="HireMeDesc">Your Description Here:</label>
                                <textarea name="" id="HireMeDesc" value={formData.description}
                                    onChange={(e) => handleChange({ description: e.target.value })}
                                    style={{ border: error.description && '2px solid red' }}

                                ></textarea>
                            </div>
                            <div className={styles.bottom}>
                                <Button onClick={() => handleFormSubmit()}>Submit</Button>
                            </div>
                        </div>
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
        </section >
    )
}

export default Intro