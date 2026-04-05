import "./ItemCard.css"

import editIcon from "../../../assets/icons/items_container/edit.png"
import removeIcon from "../../../assets/icons/items_container/remove.png"

import LinkButton from "../../LinkButton/LinkButton"

const ItemCard = ({doc}) => {
    return (
        <div className="panel">
            <div className="authors-list">
                Авторы:&nbsp;
                {
                    doc.authors.map((author, i) => <div>{author}{i != doc.authors.length-1 && ","}&nbsp;</div>)
                }
            </div>
            <div>Дата составления: {doc.createdDate}</div>
            <div className="options-list">
                <LinkButton icon={editIcon} ref="/update-doc" title="Редактировать документ" />
                <LinkButton icon={removeIcon} title="Удалить документ"  />
            </div>
        </div>
    )
}

export default ItemCard
