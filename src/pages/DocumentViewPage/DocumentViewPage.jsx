import "./DocumentViewPage.css"

import { Link, useParams } from "react-router"
import { useState, useEffect } from "react"

import { getContract, getContractFile } from "../../services/contract"
import ContainerHeader from "../../components/ItemsContainer/ContainerHeader/ContainerHeader"
import DocumentViewer from "../../components/DocumentViewer/DocumentViewer"
import LinkButton from "../../components/LinkButton/LinkButton"

const DocumentViewPage = () => {
    const {id} = useParams()

    const [docTitle, setDocTitle] = useState("")
    const [docFile, setDocFile] = useState(null)

    useEffect(() => {
            const getDoc = async () => {
                if(id != null) {
                    const foundDoc = await getContract(id)
                    const foundDocFile = await getContractFile(id)
                    setDocTitle(foundDoc.title)
                    setDocFile(foundDocFile)
                }
            }
            getDoc()
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