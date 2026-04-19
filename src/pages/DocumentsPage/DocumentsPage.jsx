import "./DocumentsPage.css"

import addButton from "../../assets/icons/items_container/add.png"

import ContainerHeader from "../../components/ItemsContainer/ContainerHeader/ContainerHeader"
import FilterOptionsList from "../../components/FilterOptionsList/FilterOptionsList"
import FilterOption from "../../components/FilterOptionsList/FilterOption";
import ItemsContainer from "../../components/ItemsContainer/ItemsContainer"
import DocumentItem from "../../components/DocumentItem/DocumentItem";
import LinkButton from "../../components/LinkButton/LinkButton";

import { useEffect, useState } from "react";

const DocumentsPage = ({docs, onRemoveDoc}) => {
    return (
        <div className="docs-page">
            <div className="docs-container">
                <FilterOptionsList>
                    <FilterOption>По названию</FilterOption>
                    <FilterOption>По дате создания</FilterOption>
                    <FilterOption>Сначала непроверенные</FilterOption>
                </FilterOptionsList>
                
                <ItemsContainer>
                    <ContainerHeader>
                        Коллективные договоры
                        <LinkButton icon={addButton} title="Добавить документ" ref="/docs/create-doc"/>
                    </ContainerHeader>
                    {docs == null
                        ? <div className="container-message">Ошибка при загрузке документов!</div>
                        : (docs.length == 0 
                            ? <div className="container-message">Документы не найдены</div>
                            : docs.map(doc => 
                                <DocumentItem doc={doc} key={doc.contractId} onRemoveDoc={onRemoveDoc}/>)
                        )
                    }
                </ItemsContainer>
            </div>
        </div>
    )
}

export default DocumentsPage