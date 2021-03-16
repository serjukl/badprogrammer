import React from 'react'
import PropTypes from 'prop-types'
import styles from './NavLink.module.sass'
import Link from 'next/link'
import {useRouter} from 'next/router'

const NavLink = ({route, name}) => {
    const router = useRouter()
    return (
        <li 
            className={router.route === route 
                ? `${styles.navLink} ${styles.navLinkActive}` 
                : styles.navLink
            }
        >
            <Link href={route} >
                <a>
                    {name}
                </a>
            </Link>
            <div />
        </li>
    )
}

NavLink.propTypes = {
    route: PropTypes.string,
    name: PropTypes.string
}

export default NavLink
