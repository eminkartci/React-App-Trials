
import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {

    const onClick = () => {
        console.log("Clicked Another Method")
    }

    return (
        <header>
            <h1 style={HeadingStyle}>{props.title}</h1>

            <Button color="red" text= "Click Here !" onClick={onClick}/>

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
