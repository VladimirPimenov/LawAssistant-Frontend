import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import "./DocumentFormPage.css"

const DocumentFormPage = ({formTitle, getDocument, onAddDocument, onEditDocument}) => {
    const {id} = useParams()
    const navigate = useNavigate()

    const [doc, setDoc] = useState(null)
    const [docTitle, setDocTitle] = useState("")

    const onSubmitForm = (e) => {
        e.preventDefault()
        
        if(doc) {
            const updatedDoc = {...doc, title: docTitle}
            onEditDocument(updatedDoc)
        } else {
            const newDoc = {
                id: Date.now(),
                title: docTitle,
                authors:[],
                createdDate: new Date().toLocaleDateString(),
                hasFile: false
            }
            onAddDocument(newDoc)
        }

        navigate("/docs")
    }

    const onCancel = () => {
        navigate("/docs")
    }

    useEffect(() => {
        if(id != null){
            const foundDoc = getDocument(id)
            setDoc(foundDoc)
            setDocTitle(foundDoc.title)
        }
    }, [id])

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
                    <input type="file" id="file"/>
                    <label for="file" className="file-label">Загрузить файл документа</label>
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