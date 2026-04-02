import "./ContainerHeader.css"

const ContainerHeader = (props) => {
    return (
        <div className="container-header">
            {props.children}
        </div>
    )
}

export default ContainerHeader