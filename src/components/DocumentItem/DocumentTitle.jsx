import "./DocumentTitle.css"

import { Link } from "react-router"

const DocumentTitle = (props) => {
    return (
        <div className="doc-title">
            <img src={props.icon} />
            <Link to={`/docs/${props.children.contractId}`} style={{color:"royalblue"}}>
                Документ №{props.children.contractId} «{props.children.title}»
            </Link>
        </div>
    )
}

export default DocumentTitle