import React, { useState, useEffect } from 'react'
import Preview from '../Preview/Preview'
import styles from './DNDImage.module.sass'

const DNDImage = ({item}) => {
    const [imgPreview, imgPreviewHandler] = useState({status: false, data: null})

    const getInputValue = e => {
        const output = e.target
        output.src = URL.createObjectURL(e.target.files[0])
        console.log(e.target.files)
        imgPreviewHandler({
            status: true, 
            data: output.src,
            name: output.files[0].name
        })
    }

    const removeImg = () => {
        imgPreviewHandler({status: false, data: null})
    }

    useEffect(() => {
        console.log(imgPreview)
        console.log(item)
    }, [imgPreview])

    return (
        <div className={styles.container}>
            {
                imgPreview.status
                    ? <Preview deleteHandler={removeImg} url={imgPreview.data} name={imgPreview.name}/>
                    : <label className={styles.DNDContainer}>
                        <input type="file" onChange={getInputValue}/>
                        <div className={styles.Placeholder}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0)">
                                    <path d="M14 13V17H10V13H7L12 8L17 13H14ZM19.35 10.03C19.0121 8.32956 18.0947 6.79901 16.7543 5.69938C15.414 4.59975 13.7337 3.99915 12 4C9.11 4 6.6 5.64 5.35 8.03C3.87938 8.19115 2.52004 8.88959 1.53271 9.99134C0.545374 11.0931 -0.000424928 12.5206 2.48222e-07 14C2.48222e-07 15.5913 0.632141 17.1174 1.75736 18.2426C2.88258 19.3679 4.4087 20 6 20H19C19.6566 20 20.3068 19.8707 20.9134 19.6194C21.52 19.3681 22.0712 18.9998 22.5355 18.5355C22.9998 18.0712 23.3681 17.52 23.6194 16.9134C23.8707 16.3068 24 15.6566 24 15C24 12.36 21.95 10.22 19.35 10.03Z" fill="#9E9E9E"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0">
                                        <rect width="24" height="24" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <p>
                                Перетяните файл с изображением либо кликните сюда
                            </p>
                        </div>
                    </label>
            }
            <textarea placeholder="Несколько слов"/>
        </div>
        
    )
}

export default DNDImage
