import React from 'react'
import styles from "./Projects.module.scss"
import ProjectCard from '../Card/ProjectCard/ProjectCard'
import HomeSectionLayout from '../Layout/HomeSectionLayout/HomeSectionLayout'
import { NavButtonIDEnum } from '@/lib/Enum/id'
import { ProjectData } from '@/lib/data/data'

const Project = () => {
  return (
    <HomeSectionLayout heading={NavButtonIDEnum.PROJECTS} background='primary'>
      <div className={styles.projectCardContainer}>
        {ProjectData.map((project, index) => {
          return (
            <React.Fragment key={index}>
              <ProjectCard key={index} {...project} />
              <div style={{ width: "100%" }} key={index + 'hr'}>
                {index !== ProjectData.length - 1 && <hr style={{ borderColor: '#dfdfdf' }} />}
              </div>
            </React.Fragment>
          )
        }
        )}
      </div>
    </HomeSectionLayout>
  )
}

export default Project