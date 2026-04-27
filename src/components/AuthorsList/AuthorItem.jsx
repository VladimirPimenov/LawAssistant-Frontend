import "./AuthorItem.css"

const AuthorItem = ({author, onRemoveAuthor}) => {
    return (
        <div className="author-row">
            <div className="author-info">
                <div className="author-name">{author.firstName} {author.lastName}</div>
                <div className="author-email">{author.email}</div>
            </div>

            <button type="button" onClick={() => onRemoveAuthor(author)}>Удалить</button>
        </div>
    )
}

export default AuthorItem