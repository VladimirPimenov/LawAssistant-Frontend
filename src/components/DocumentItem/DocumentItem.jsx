import { useState } from 'react';
import documentIcon from '../../assets/icons/document.png';
import warningIcon from "../../assets/icons/no-doc-warn.png"

import "./DocumentItem.css"
import ItemCard from './DocumentItemCard/ItemCard';

import ItemCardButton from './DocumentItemCard/ItemCardButton';
import DocumentTitle from "./DocumentTitle";

const DocumentItem = ({doc}) => {
    const [isPanelVisible, setPanelVisible] = useState(false)

    return (
        <div className="doc-item">
            <div className="doc-item-panel">
                <DocumentTitle icon={documentIcon}>{doc.title}</DocumentTitle>
                <div className="doc-item-buttons">
                    {!doc.hasFile && <img title='Файл документа не загружен' src={warningIcon}/>}
                    <ItemCardButton 
                        onClick={() => setPanelVisible(!isPanelVisible)}
                        isPanelOpened={isPanelVisible}/>
                </div>
            </div>
            {isPanelVisible && <ItemCard doc={doc}/>}
        </div>
    )
}

export default DocumentItem