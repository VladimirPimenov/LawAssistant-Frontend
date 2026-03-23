import React from "react";
import "./DocumentsContainer.css"
import DocumentItem from "./DocumentItem";

const DocumentsContainer = ({docs}) => {
    return (
        <div className="documents-container">
            {docs.map(doc => <DocumentItem doc={doc} />)}
        </div>
    )
}

export default DocumentsContainer