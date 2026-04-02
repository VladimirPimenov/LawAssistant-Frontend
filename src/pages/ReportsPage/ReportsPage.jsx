import "./ReportsPage.css"

import ContainerHeader from "../../components/ItemsContainer/ContainerHeader/ContainerHeader"
import FilterOptionsList from "../../components/FilterOptionsList/FilterOptionsList"
import FilterOption from "../../components/FilterOptionsList/FilterOption"
import ItemsContainer from "../../components/ItemsContainer/ItemsContainer";
import ReportItem from "../../components/ReportItem/ReportItem";

const ReportsPage = ({reports}) => {
    return (
        <div className="docs-page">
            <div className="docs-container">
                <FilterOptionsList>
                    <FilterOption>По дате проверки</FilterOption>
                    <FilterOption>По проценту совпадения</FilterOption>
                </FilterOptionsList>
                
                <ItemsContainer>
                    <ContainerHeader>Отчёты</ContainerHeader>
                    {reports.map(report => <ReportItem report={report} />)}
                </ItemsContainer>
            </div>
        </div>
    )
}

export default ReportsPage