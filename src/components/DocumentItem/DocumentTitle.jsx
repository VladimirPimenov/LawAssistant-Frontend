import "./DocumentTitle.css"

const DocumentTitle = (props) => {
    return (
        <div className="doc-title">
            <img src={props.icon} />
            Документ №{props.children.contractId} «{props.children.title}»
        </div>
    )
}

export default DocumentTitle