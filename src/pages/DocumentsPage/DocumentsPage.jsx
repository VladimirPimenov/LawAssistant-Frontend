import React from "react";
import "./DocumentsPage.css"
import FilterOptionsList from "../../components/FilterOptionsList/FilterOptionsList"
import DocumentsContainer from "../../components/DocumentsContainer/DocumentsContainer"
import PageHeader from "../../components/PageHeader/PageHeader"
import FilterOption from "../../components/FilterOptionsList/FilterOption";

const DocumentsPage = ({docs}) => {
    return (
        <div className="docs-page">
            <PageHeader>Коллективные договоры</PageHeader>
            <div className="docs-container">
                <FilterOptionsList>
                    <FilterOption>По названию</FilterOption>
                    <FilterOption>По дате создания</FilterOption>
                    <FilterOption>Сначала непроверенные</FilterOption>
                </FilterOptionsList>
                <DocumentsContainer docs={docs} />
            </div>
        </div>
    )
}

export default DocumentsPage