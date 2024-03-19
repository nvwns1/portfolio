import React from 'react'
import styles from './HomeSectionLayout.module.scss'
import { classnames } from '@/lib/helper/utils';

interface IHomeSectionLayout {
  heading: string;
  background: 'primary' | 'secondary';
  children: React.ReactNode;
}

const HomeSectionLayout = ({
  heading,
  background = "secondary",
  children
}: IHomeSectionLayout) => {
  const classNames = {
    sectionRoot: classnames([styles.sectionWrapper, styles[background]]),
  }

  return (
    <section id={heading} className={classNames.sectionRoot}>
      <p className="heading">{heading}</p>
      {children}
    </section>
  )
}

export default HomeSectionLayout