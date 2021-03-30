
import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
    return (
        <header>
            <h1 style={HeadingStyle}>{props.title}</h1>

            <Button />
        </header>
    )
}

Header.defaultProps = {
    title: "A-MEAN Danışmanlık"
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

const HeadingStyle = {
    color: 'blue',
}

export default Header
