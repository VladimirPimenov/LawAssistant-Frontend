import AuthorItem from "./AuthorItem"
import "./AuthorsList.css"

const AuthorsList = ({authors, onRemoveAuthor}) => {
    return (
        <div className="authors-list">
            {authors == null || authors.length == 0 
                ? "Авторы не добавлены"
                : authors.map(author => 
                    <AuthorItem 
                    key={author.lawyerId}
                    author={author} 
                    onRemoveAuthor={onRemoveAuthor}/>)
            }
        </div>
    )
}

export default AuthorsList