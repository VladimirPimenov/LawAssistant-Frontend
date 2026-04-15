import "./AuthorSelector.css"

const AuthorSelector = ({authors, onAddAuthor}) => {
    return (
        <div className="author-selector">
            <select onChange={(e) => onAddAuthor(e.target.value)}>
                <option value="">Выбрать автора</option>
                {authors.map(lawyer =>
                    <option value={lawyer.lawyerId} key={lawyer.lawyerId}>
                        {lawyer.firstName} {lawyer.lastName}
                    </option>
                )}
            </select>
        </div>
    )
}

export default AuthorSelector