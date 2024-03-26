import React from 'react'
import styles from './HomeSectionLayout.module.scss'
import { classnames } from '@/lib/helper/utils';
import HorizontalLine from '@/components/Component/HorizontalLine/HorizontalLine';

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
    <>
      <HorizontalLine marginBottom={20} marginTop={20} id={heading} />
      <section className={classNames.sectionRoot}>
        <p className={styles.heading}>{heading}</p>
        {children}
      </section>
    </>
  )
}

export default HomeSectionLayout