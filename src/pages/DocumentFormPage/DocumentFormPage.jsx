import { useState } from "react"
import { useNavigate } from "react-router"
import "./DocumentFormPage.css"

const DocumentFormPage = ({formTitle, doc, onSubmit}) => {
    const [docTitle, setDocTitle] = useState("")
    const navigate = useNavigate()

    const onSubmitForm = (e) => {
        e.preventDefault()
        console.log("форма")
        navigate("/docs")
    }

    const onCancel = () => {
        navigate("/docs")
    }

    return (
        <div className="doc-form-page">
            <form onSubmit={onSubmitForm} className="doc-form">
                <h1>{formTitle}</h1>

                <input 
                    type="text" 
                    id="title" 
                    placeholder="Название документа" 
                    value={docTitle}
                    onChange={(e) => setDocTitle(e.target.value)}
                />
                {doc == null 
                && <div className="file-field">
                    <input type="file" id="file"  placeholder="Файл документа" />
                    <label for="file" className="file-label">Файл</label>
                </div>}
                <button type="submit" className="submit-button">Сохранить документ</button>
                <button type="button" className="cancel-button" onClick={onCancel}>Отмена</button>
            </form> 
            <div className="doc-text">
                Текст документа
            </div>
        </div>
    )
}

export default DocumentFormPage