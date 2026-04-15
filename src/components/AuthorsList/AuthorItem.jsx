import "./AuthorItem.css"

const AuthorItem = ({author, onRemoveAuthor}) => {
    return (
        <div className="author-row">
            <div className="author-info">{author.firstName} {author.lastName}</div>
            <button type="button" onClick={() => onRemoveAuthor(author)}>Удалить</button>
        </div>
    )
}

export default AuthorItem