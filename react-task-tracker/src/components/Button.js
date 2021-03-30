
const Button = (prop) => {
    return (
        <div >
            <button className="btn" >{prop.text}</button>
        </div>
    )
}

Button.defaultProps = {
    text: "Add",
}

export default Button
