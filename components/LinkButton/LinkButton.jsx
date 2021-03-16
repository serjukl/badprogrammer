import React from 'react'
import styles from './LinkButton.module.sass'
import Link from 'next/link'
import PropTypes from 'prop-types'

const LinkButton = ({link, name}) => {
    return (
        <Link href={link}>
            <a className={styles.linkBtn}>
                {name}
            </a>
        </Link>
    )
}

LinkButton.propTypes = {
    link: PropTypes.string,
    name: PropTypes.string

}

export default LinkButton
