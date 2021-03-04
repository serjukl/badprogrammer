import React from 'react'
import PropTypes from 'prop-types'

const Button = ({
    btnName, btnType, btnClickHandler,
    btnFocusHandler, btnBlurHandler,
    btnUniqueStyle='default', isIcon
}) => {
    return (
        <button
            type={btnType || 'button'}
            onClick={btnClickHandler || null}
            onBlur={btnBlurHandler || null}
            onFocus={btnFocusHandler || null}
            className={btnUniqueStyle}
        >
            { btnName || null }
            { isIcon || null }
        </button>
    )
}

Button.propTypes = {
    btnName: PropTypes.string,
    btnType: PropTypes.string,
    btnClickHandler: PropTypes.func,
    btnBlurHandler: PropTypes.func,
    btnFocusHandler: PropTypes.func,
    isIcon: PropTypes.element,
    btnUniqueStyle: PropTypes.string
}

export default Button
