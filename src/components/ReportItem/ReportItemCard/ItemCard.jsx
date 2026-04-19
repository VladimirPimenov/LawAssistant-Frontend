import "./ItemCard.css"

import editIcon from "../../../assets/icons/items_container/edit.png"
import removeIcon from "../../../assets/icons/items_container/remove.png"

import LinkButton from "../../LinkButton/LinkButton"

const ItemCard = ({report, onRemoveReport}) => {
    return (
        <div className="panel">
            <div>Дата создания: {report.reportedDate.replace('T', ' ')}</div>
            <div className="options-list">
                <LinkButton 
                    icon={removeIcon} 
                    onClick={onRemoveReport} 
                    id={report.reportId} 
                    title="Удалить отчёт" 
                />
            </div>
        </div>
    )
}

export default ItemCard
