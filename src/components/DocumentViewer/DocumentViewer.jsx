import "./DocumentViewer.css"

import { useEffect, useState } from "react"
import mammoth from "mammoth"

const DocumentViewer = ({docFile}) => {
    const [docHtml, setDocHtml] = useState(null)

    const convertFileToHtml = async (docFile) => {
            if(!docFile) {
                setDocHtml(null)
                return;
            }
            const buffer = await docFile.arrayBuffer()
            const htmlConverted = await mammoth.convertToHtml({arrayBuffer: buffer})
            setDocHtml(htmlConverted.value)
        }

    useEffect(() => {
        convertFileToHtml(docFile)
    }, [docFile])

    return (
        <div className="document-viewer">
            {docHtml 
                ? <div dangerouslySetInnerHTML={{ __html: docHtml }} /> 
                : <div className="no-doc-message">Файл не загружен!</div>
            }
        </div>
    )
}

export default DocumentViewer