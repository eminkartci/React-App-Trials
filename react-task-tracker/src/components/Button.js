import PropTypes from 'prop-types'


const Button = ({text,color,onClick}) => {

    return (
        <div >
            <button 
            onClick={onClick}
            className="btn" 
            style={{background: color}} >
                {text}
            </button>
        </div>
    )
}

Button.defaultProps = {
    text: "Add",
    color: "light-blue"
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

export default Button
