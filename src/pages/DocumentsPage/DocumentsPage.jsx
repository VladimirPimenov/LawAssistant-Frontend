import "./DocumentsPage.css"

import addButton from "../../assets/icons/items_container/add.png"

import ContainerHeader from "../../components/ItemsContainer/ContainerHeader/ContainerHeader"
import FilterOptionsList from "../../components/FilterOptionsList/FilterOptionsList"
import FilterOption from "../../components/FilterOptionsList/FilterOption";
import ItemsContainer from "../../components/ItemsContainer/ItemsContainer"
import DocumentItem from "../../components/DocumentItem/DocumentItem";
import LinkButton from "../../components/LinkButton/LinkButton";

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
                    <ContainerHeader>
                        Коллективные договоры
                        <LinkButton icon={addButton} title="Добавить документ" ref="/create-doc"/>
                        </ContainerHeader>
                    {docs.map(doc => <DocumentItem doc={doc}/>)}
                </ItemsContainer>
            </div>
        </div>
    )
}

export default DocumentsPage