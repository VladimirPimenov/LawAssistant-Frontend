import { useState } from "react"
import "./AuthorSelector.css"

const AuthorSelector = ({authors, onAddAuthor}) => {
    const [selectedState, setSelectedState] = useState("")

    const changeState = (e) => {
        onAddAuthor(e.target.value)
        setSelectedState("")
    }

    return (
        <div className="author-selector">
            <select value={selectedState} onChange={(e) => changeState(e)}>
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