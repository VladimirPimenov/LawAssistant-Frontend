import "./DocumentFormPage.css"

import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"

import AuthorsList from "../../components/AuthorsList/AuthorsList"
import AuthorSelector from "../../components/AuthorSelector/AuthorSelector"
import FileInput from "../../components/FileInput/FileInput"
import DocumentViewer from "../../components/DocumentViewer/DocumentViewer"

const DocumentFormPage = ({formTitle, getDoc, getDocFile, onAddDoc, onEditDoc, lawyers}) => {
    const {id} = useParams()
    const navigate = useNavigate()

    const [doc, setDoc] = useState(null)
    const [docTitle, setDocTitle] = useState("")
    const [docAuthors, setDocAuthors] = useState([])
    const [docFile, setDocFile] = useState(null)

    const onSubmitForm = (e) => {
        e.preventDefault()
        
        if(docTitle == "" || docAuthors.length == 0)
            return

        if(doc) {
            const updatedDoc = {...doc, title: docTitle, authors: docAuthors}
            onEditDoc(updatedDoc)
        } else {
            if(!docFile)
                return
                
            const newDoc = {
                title: docTitle,
                authorsId: docAuthors.map(a => a.lawyerId),
                contractFile: docFile
            }
            onAddDoc(newDoc)
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

        let authorsId = docAuthors.map(author => author.lawyerId)
        if(authorsId.includes(Number(authorId)))
            return

        const newAuthor = getLawyerById(authorId)

        setDocAuthors([...docAuthors, newAuthor])
    }

    const onRemoveAuthor = (removedAuthor) => {
        setDocAuthors(docAuthors.filter(author => author.lawyerId != removedAuthor.lawyerId))
    }

    const onFileSelected = async (e) => {
        const file = e.target.files[0]
        
        setDocFile(file)
    }

    useEffect(() => {
        const getDocument = async () => {
            if(id != null) {
                const foundDoc = await getDoc(id)
                const foundDocFile = await getDocFile(id)
                setDoc(foundDoc)
                setDocTitle(foundDoc.title)
                setDocAuthors(foundDoc.authors)
                setDocFile(foundDocFile)
            }
        }
        getDocument()
    }, [id, getDoc])

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

                {doc == null && <FileInput onFileSelected={onFileSelected} text="Загрузить файл документа" accept=".docx"/>}
                <button type="submit" className="submit-button">Сохранить документ</button>
                <button type="button" className="cancel-button" onClick={onCancel}>Отмена</button>
            </form> 
            <div className="doc-viewer">
                <DocumentViewer docFile={docFile}/>
            </div>
        </div>
    )
}

export default DocumentFormPage