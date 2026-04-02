import "./DocumentsPage.css"

import ContainerHeader from "../../components/ItemsContainer/ContainerHeader/ContainerHeader"
import FilterOptionsList from "../../components/FilterOptionsList/FilterOptionsList"
import FilterOption from "../../components/FilterOptionsList/FilterOption";
import ItemsContainer from "../../components/ItemsContainer/ItemsContainer"
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
                
                <ItemsContainer>
                    <ContainerHeader>Коллективные договоры</ContainerHeader>
                    {docs.map(doc => <DocumentItem doc={doc}/>)}
                </ItemsContainer>
                
            </div>
        </div>
    )
}

export default DocumentsPage