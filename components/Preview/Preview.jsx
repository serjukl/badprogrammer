import React from 'react'
import PropTypes from 'prop-types'
import styles from './Preview.module.sass'

const Preview = ({url, name, deleteHandler}) => {
    return (
        <div className={styles.container}>
            <div>
                <img src={url} alt=""/>
                <p>{name}</p>
            </div>
            <svg title="delete" onClick={deleteHandler} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M19 6.4L17.6 5L12 10.6L6.4 5L5 6.4L10.6 12L5 17.6L6.4 19L12 13.4L17.6 19L19 17.6L13.4 12L19 6.4Z" fill="black" fillOpacity="0.54"/>
            </svg>
        </div>
    )
}

Preview.propTypes = {
    url: PropTypes.string,
    name: PropTypes.string,
    deleteHandler: PropTypes.func
}

export default Preview
