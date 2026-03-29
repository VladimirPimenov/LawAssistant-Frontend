import "./ItemCard.css"

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
        </div>
    )
}

export default ItemCard
