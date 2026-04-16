import "./FileInput.css"

import { useState } from "react"

const FileInput = ({text, onFileSelected, accept}) => {
    const [selectedFileName, setSelectedFileName] = useState("")

    const handleFileSelected = (e) => {
        const selectedFile = e.target.files[0]

        setSelectedFileName(selectedFile ? selectedFile.name : "")
        onFileSelected(e)
    }

    return (
        <div className="file-input">
            <input type="file" id="file" onChange={handleFileSelected} accept={accept} />
            <label htmlFor="file" className="file-label">{text}</label>
            <div className="file-name">
                {selectedFileName  
                || <div id="none-file">Файл не выбран</div>}
            </div>
        </div>
    )
}

export default FileInput