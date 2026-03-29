import "./DocumentsPage.css"

import PageHeader from "../../components/PageHeader/PageHeader"
import FilterOptionsList from "../../components/FilterOptionsList/FilterOptionsList"
import FilterOption from "../../components/FilterOptionsList/FilterOption";
import DocumentsContainer from "../../components/DocumentsContainer/DocumentsContainer"
import DocumentItem from "../../components/DocumentItem/DocumentItem";

const DocumentsPage = ({docs}) => {
    return (
        <div className="docs-page">
            <div className="docs-container">
                <FilterOptionsList>
                    <FilterOption>По названию</FilterOption>
                    <FilterOption>По дате создания</FilterOption>
                    <FilterOption>Сначала непроверенные</FilterOption>
                </FilterOptionsList>
                
                <DocumentsContainer>
                    <PageHeader>Коллективные договоры</PageHeader>
                    {docs.map(doc => <DocumentItem doc={doc}/>)}
                </DocumentsContainer>
                
            </div>
        </div>
    )
}

export default DocumentsPage