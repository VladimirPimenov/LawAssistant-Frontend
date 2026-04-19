import "./ItemCard.css"

import editIcon from "../../../assets/icons/items_container/edit.png"
import removeIcon from "../../../assets/icons/items_container/remove.png"
import createReportIcon from "../../../assets/icons/items_container/create-report.png"

import LinkButton from "../../LinkButton/LinkButton"
import { Link } from "react-router"

const ItemCard = ({doc, onRemoveDoc, onCreateReport}) => {
    return (
        <div className="panel">
            <div className="authors-list">
                Авторы:&nbsp;
                {
                    doc.authors.map((author, i) => <div key={i}>{author.firstName} {author.lastName}{i != doc.authors.length-1 && ","}&nbsp;</div>)
                }
            </div>
            <div>Дата создания: {doc.createdDate.replace('T', ' ')}</div>
            <div className="options-list">
                <LinkButton 
                    icon={createReportIcon} 
                    onClick={onCreateReport} 
                    id={doc.contractId} 
                    title="Составить отчёт" 
                />
                <LinkButton 
                    icon={editIcon} 
                    ref={`/docs/update-doc/${doc.contractId}`} 
                    title="Редактировать документ" 
                />
                <LinkButton 
                    icon={removeIcon} 
                    onClick={onRemoveDoc} 
                    id={doc.contractId} 
                    title="Удалить документ"  
                />
            </div>
        </div>
    )
}

export default ItemCard
