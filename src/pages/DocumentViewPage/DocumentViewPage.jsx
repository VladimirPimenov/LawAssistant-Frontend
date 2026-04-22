import "./DocumentViewPage.css"

import { Link, useParams } from "react-router"
import { useState, useEffect } from "react"

import ContainerHeader from "../../components/ItemsContainer/ContainerHeader/ContainerHeader"
import DocumentViewer from "../../components/DocumentViewer/DocumentViewer"
import LinkButton from "../../components/LinkButton/LinkButton"

const DocumentViewPage = ({getDoc, getDocFile}) => {
    const {id} = useParams()

    const [docTitle, setDocTitle] = useState("")
    const [docFile, setDocFile] = useState(null)

    useEffect(() => {
            const getDocument = async () => {
                if(id != null) {
                    const foundDoc = await getDoc(id)
                    const foundDocFile = await getDocFile(id)
                    setDocTitle(foundDoc.title)
                    setDocFile(foundDocFile)
                }
            }
            getDocument()
        }, [id])

    return (
        <div className="doc-view-page">
            <div className="page-header">
                <LinkButton ref="/docs" title="Вернуться"></LinkButton>
                <div className="doc-title">{docTitle}</div>
            </div>
            <DocumentViewer docFile={docFile}></DocumentViewer>
        </div>
    )
}

export default DocumentViewPage