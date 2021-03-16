import React from 'react'
import Link from 'next/link'
import styles from './Logo.module.sass'

const Logo = () => {
    return (
        <Link href={'/'}>
            <a className={styles.container} title="Bad Programmer">
                <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.8155 4.00493L9.9024 0.0918563L9.81055 0V0.0918563V15.0461C10.0861 18.2978 11.1516 20.0798 14.0359 21.1086C16.9202 22.1374 20.1903 20.4288 21.1824 18.6652C22.1744 16.9016 22.9093 14.2561 20.7966 11.4269C19.1064 9.16358 16.4058 8.96517 15.2668 9.14888V13.3743C17.2068 12.7717 17.998 14.2377 18.1511 15.0461C18.2246 15.7687 17.9159 17.2763 16.0935 17.5262C14.2711 17.776 13.8155 15.9769 13.8155 15.0461V4.00493Z" fill="#A3A3A3"/>
                    <path d="M9.14937 15.4318V11.3718C8.0471 12.7827 7.80827 14.6663 7.82664 15.4318V30.1288L11.8683 26.0871V20.7962C9.81074 19.4 9.19836 16.6382 9.14937 15.4318Z" fill="#A3A3A3"/>
                </svg>
                <strong>Bad Programmer</strong>
            </a>
        </Link>
    )
}

export default Logo
