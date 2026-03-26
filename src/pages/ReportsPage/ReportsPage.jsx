import "./ReportsPage.css"

import PageHeader from "../../components/PageHeader/PageHeader"
import FilterOptionsList from "../../components/FilterOptionsList/FilterOptionsList"
import FilterOption from "../../components/FilterOptionsList/FilterOption"
import DocumentsContainer from "../../components/DocumentsContainer/DocumentsContainer";
import ReportItem from "../../components/ReportItem/ReportItem";

const ReportsPage = ({reports}) => {
    return (
        <div className="docs-page">
            <PageHeader>Отчёты</PageHeader>
            <div className="docs-container">
                <FilterOptionsList>
                    <FilterOption>По дате проверки</FilterOption>
                    <FilterOption>По проценту совпадения</FilterOption>
                </FilterOptionsList>
                
                <DocumentsContainer>
                    {reports.map(report => <ReportItem report={report} />)}
                </DocumentsContainer>
            </div>
        </div>
    )
}

export default ReportsPage