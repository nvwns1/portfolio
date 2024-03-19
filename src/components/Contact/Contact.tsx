import React from 'react'
import styles from "./Contact.module.scss"
import HomeSectionLayout from '../Layout/HomeSectionLayout/HomeSectionLayout'
import SkillCard from '../Card/SkillsCard/SkillCard'
import { NavButtonIDEnum } from '@/lib/Enum/id'
import { ContactData } from '@/lib/data/data'

const Contact = () => {
    return (
        <HomeSectionLayout heading={NavButtonIDEnum.CONTACT} background='secondary'>
            <div className={styles.contactContainer}>
                {ContactData.map((contact, index) => {
                    return <SkillCard key={index} size='sm' title={contact.title} image={contact.image} src={contact.src} />
                })}
            </div>
        </HomeSectionLayout>
    )
}

export default Contact