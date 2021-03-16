import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Navigation from '../components/Navigation/Navigation'
import DNDImage from '../components/DNDImage/DNDImage'
import styles from '../styles/Home.module.sass'

const Home = () => {
    const [dndImages, setDndImages] = useState([''])
    const [flag, flagHandler] = useState(false)
    const add = () => {
        const old = dndImages
        dndImages.push('')
        setDndImages(old)
        console.log(dndImages)
    }

    useEffect(() => {
        add()
    })
    return (
        <div>
            <Head>
                <title>Bad Programmer | Home</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* <Navigation userIslogged={false}/> */}
            {
                dndImages
                    ? dndImages.map((item, key) => (
                        <DNDImage 
                            key={key}
                            item={item}
                        />
                    ))
                    : null
            }
            

            <button className={styles.btn} onClick={() => flagHandler(!flag)}>Добавить</button>
        </div>
    )
}

export default Home

