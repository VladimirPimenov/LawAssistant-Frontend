import "./ItemCard.css"

import editIcon from "../../../assets/icons/items_container/edit.png"
import removeIcon from "../../../assets/icons/items_container/remove.png"

import LinkButton from "../../LinkButton/LinkButton"

const ItemCard = ({doc, onRemoveDoc}) => {
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
                <LinkButton icon={editIcon} ref={`/docs/update-doc/${doc.contractId}`} title="Редактировать документ" />
                <LinkButton icon={removeIcon} onClick={onRemoveDoc} id={doc.contractId} title="Удалить документ"  />
            </div>
        </div>
    )
}

export default ItemCard
