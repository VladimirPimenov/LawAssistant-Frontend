import "./DocumentTitle.css"

const DocumentTitle = (props) => {
    return (
        <div className="doc-title">
            <img src={props.icon} />
            {props.children}
        </div>
    )
}

export default DocumentTitle