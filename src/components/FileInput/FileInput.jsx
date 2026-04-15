import "./FileInput.css"

import { useState } from "react"

const FileInput = ({text}) => {
    const [selectedFileName, setSelectedFileName] = useState("")

    const onFileSelected = (e) => {
        const selectedFile = e.target.files[0]
        setSelectedFileName(selectedFile ? selectedFile.name : "")
    }

    return (
        <div className="file-input">
            <input type="file" id="file" onChange={onFileSelected} />
            <label htmlFor="file" className="file-label">{text}</label>
            <div className="file-name">
                {selectedFileName  
                || <div id="none-file">Файл не выбран</div>}
            </div>
        </div>
    )
}

export default FileInput