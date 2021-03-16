import React from 'react'
import PropTypes from 'prop-types'
import '../styles/global.css'

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />

MyApp.propTypes = {
    Component: PropTypes.elementType,
    pageProps: PropTypes.any
}

export default MyApp
