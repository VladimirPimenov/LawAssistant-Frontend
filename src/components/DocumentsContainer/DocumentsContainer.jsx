import "./DocumentsContainer.css"

const DocumentsContainer = (props) => {
    return (
        <div className="documents-container">
            {props.children}
        </div>
    )
}

export default DocumentsContainer