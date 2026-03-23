import documentIcon from '../../assets/icons/document.png';
import "./DocumentItem.css"
import DocumentTitle from "./DocumentTitle";

const DocumentItem = ({doc}) => {
    return (
        <div className="doc-item">
            <DocumentTitle icon={documentIcon}>{doc.title}</DocumentTitle>
            <div>
                <div style={{textAlign:'right'}}>{doc.createdDate}</div>
                {!doc.hasFile && <div style={{color:"red"}}>Файл не загружен!</div>}
            </div>
        </div>
    )
}

export default DocumentItem