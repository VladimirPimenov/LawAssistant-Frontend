import "./ItemsContainer.css"

const ItemsContainer = (props) => {
    return (
        <div className="container">
            {props.children}
        </div>
    )
}

export default ItemsContainer