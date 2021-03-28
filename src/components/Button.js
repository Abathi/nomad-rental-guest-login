import PropTypes from 'prop-types'

const Button = ({ classes, text }) => {
    return (
        <button className={classes} >
            {text}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    classes: PropTypes.string,
}

export default Button
