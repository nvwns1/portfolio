import React from 'react'
import styles from "./Projects.module.scss"
import ProjectCard from '../Card/ProjectCard/ProjectCard'
import HomeSectionLayout from '../Layout/HomeSectionLayout/HomeSectionLayout'
import { NavButtonIDEnum } from '@/lib/Enum/id'
import { ProjectData } from '@/lib/data/data'
import HorizontalLine from '../Component/HorizontalLine/HorizontalLine'
const Project = () => {
  return (
    <HomeSectionLayout heading={NavButtonIDEnum.PROJECTS} background='primary'>
      <div className={styles.projectCardContainer}>
        {ProjectData.map((project, index) => {
          return (
            <>
              <ProjectCard key={index} {...project} />
              <div style={{ width: "100%" }}>
                {index !== ProjectData.length - 1 && <hr style={{ borderColor: '#dfdfdf' }} />}
              </div>
            </>)
        }
        )}
      </div>
    </HomeSectionLayout>
  )
}

export default Project