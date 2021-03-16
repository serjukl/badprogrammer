import React from 'react'
import PropTypes from 'prop-types'
import styles from './Navigation.module.sass'
import Logo from '../Logo/Logo'
import Lang from '../Lang/Lang'
import NavLink from '../NavLink/NavLink'
import LinkButton from '../LinkButton/LinkButton'

const Navigation = ({userIslogged}) => {
    const routes = [
        {
            name: 'Posts',
            route: '/posts'
        },
        {
            name: 'Collection',
            route: '/collection'
        },
        {
            name: 'Questions',
            route: '/questions'
        }
    ]
    return (
        <nav className={styles.container}>
            <div className={styles.leftPart}>
                <Logo />
                <Lang />
            </div>
            <ul>
                {
                    routes.map(({name, route}, key) => (
                        <NavLink name={name} route={route} key={key} />
                    ))
                }
                <LinkButton name="Cabinet" link="/auth"/>
            </ul>
        </nav>
    )
}

Navigation.propTypes = {
    userIslogged: PropTypes.bool
}

export default Navigation
