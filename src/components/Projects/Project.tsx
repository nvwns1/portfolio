import React from 'react'
import styles from "./Projects.module.scss"
import ProjectCard from '../Card/ProjectCard/ProjectCard'
import HomeSectionLayout from '../Layout/HomeSectionLayout/HomeSectionLayout'
import { NavButtonIDEnum } from '@/lib/Enum/id'
const Project = () => {
  return (
    <HomeSectionLayout heading={NavButtonIDEnum.PROJECTS} background='primary'>
      <div className={styles.projectCardContainer}>
        <ProjectCard
          image='./next.svg'
          title='Online Art Gallery'
          description='An online art gallery where users can view and purchase art.'
          technologyUsed={['React', 'Node', 'Express', 'MongoDB']}
          sourceCode='https://github.com'
          viewProject='https://github.com'
        />
        <ProjectCard
          image='./next.svg'
          title='Online Art Gallery'
          description='An online art gallery where users can view and purchase art.'
          technologyUsed={['React', 'Node', 'Express', 'MongoDB']}
          sourceCode='https://github.com'
          viewProject='https://github.com'
        />
      </div>
    </HomeSectionLayout>
  )
}

export default Project