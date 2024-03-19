import React from 'react'
import styles from "./Skills.module.scss"
import SkillCard from '../Card/SkillsCard/SkillCard'
import HomeSectionLayout from '../Layout/HomeSectionLayout/HomeSectionLayout'
import { SkillsData } from '@/lib/data/data'
import { NavButtonIDEnum } from '@/lib/Enum/id'

const Skills = () => {
    return (
        <HomeSectionLayout heading={NavButtonIDEnum.SKILLS} background='secondary'>
            <div className={styles.skillCardContainer}>
                {SkillsData.map((skills, index) => {
                    return <SkillCard key={index} title={skills.title} image={skills.image} />
                })}
            </div>
        </HomeSectionLayout>
    )
}

export default Skills