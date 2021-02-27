import Head from 'next/head'
import styles from '../styles/Home.module.sass'

import React, { useEffect } from 'react'

const Home = () => {

    useEffect(() => {
        console.log('works')
        console.log('x')
    }, [])
  
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <p>main</p>
        </div>
    )
}

export default Home

