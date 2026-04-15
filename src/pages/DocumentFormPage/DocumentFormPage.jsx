import "./DocumentFormPage.css"

import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"

import AuthorsList from "../../components/AuthorsList/AuthorsList"
import AuthorSelector from "../../components/AuthorSelector/AuthorSelector"
import FileInput from "../../components/FileInput/FileInput"

const DocumentFormPage = ({formTitle, getDocument, onAddDocument, onEditDocument, lawyers}) => {
    const {id} = useParams()
    const navigate = useNavigate()

    const [doc, setDoc] = useState(null)
    const [docTitle, setDocTitle] = useState("")
    const [docAuthors, setDocAuthors] = useState([])

    const onSubmitForm = (e) => {
        e.preventDefault()
        
        if(docTitle == "" || docAuthors.length == 0)
            return

        if(doc) {
            const updatedDoc = {...doc, title: docTitle, authors: docAuthors}
            onEditDocument(updatedDoc)
        } else {
            const newDoc = {
                id: Date.now(),
                title: docTitle,
                authors:[...docAuthors],
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

    const getLawyerById = (lawyerId) => {
        const foundLawyer = lawyers.find((lawyer) => lawyer.lawyerId == lawyerId)
        return foundLawyer
    }

    const onAddAuthor = (authorId) => {
        if(authorId == "")
            return

        const newAuthor = getLawyerById(authorId)

        setDocAuthors([...docAuthors, newAuthor])
    }

    const onRemoveAuthor = (removedAuthor) => {
        setDocAuthors(docAuthors.filter(author => author.lawyerId != removedAuthor.lawyerId))
    }

    useEffect(() => {
        if(id != null){
            const foundDoc = getDocument(id)
            setDoc(foundDoc)
            setDocTitle(foundDoc.title)
            setDocAuthors(foundDoc.authors)
        }
    }, [id, getDocument])

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

                <div className="authors-container">
                    <AuthorSelector authors={lawyers} onAddAuthor={onAddAuthor}/>

                    <AuthorsList authors={docAuthors} onRemoveAuthor={onRemoveAuthor}/>
                </div>

                {doc == null && <FileInput text="Загрузить файл документа" />}
                <button type="submit" className="submit-button">Сохранить документ</button>
                <button type="button" className="cancel-button" onClick={onCancel}>Отмена</button>
            </form> 
            <div className="doc-viewer">
                Текст документа
            </div>
        </div>
    )
}

export default DocumentFormPage