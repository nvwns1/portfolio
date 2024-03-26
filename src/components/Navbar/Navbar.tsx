import React from 'react'
import styles from './Navbar.module.scss'
import Link from 'next/link'
import { NavButtonIDEnum } from '@/lib/Enum/id'

const links = [
    { name: 'Intro', href: NavButtonIDEnum.INTRO },
    { name: 'Skills', href: NavButtonIDEnum.SKILLS },
    { name: 'Projects', href: NavButtonIDEnum.PROJECTS },
    { name: 'Contact', href: NavButtonIDEnum.CONTACT },
]

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Link href={'#' + NavButtonIDEnum.INTRO}>
                <div className={styles.logo}>Suman</div>
            </Link>
            <ul className={styles.ul}>
                {links.map((link, index) => {
                    return (
                        <Link href={'#' + link.href} key={index}>
                            <li key={index + 'li'} className={styles.li}>{link.name}</li>
                        </Link>
                    );
                })}
            </ul>
        </nav>
    )
}

export default Navbar