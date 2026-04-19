import "./ReportsPage.css"

import ContainerHeader from "../../components/ItemsContainer/ContainerHeader/ContainerHeader"
import FilterOptionsList from "../../components/FilterOptionsList/FilterOptionsList"
import FilterOption from "../../components/FilterOptionsList/FilterOption"
import ItemsContainer from "../../components/ItemsContainer/ItemsContainer";
import ReportItem from "../../components/ReportItem/ReportItem";

const ReportsPage = ({reports, onRemoveReport}) => {
    return (
        <div className="docs-page">
            <div className="docs-container">
                <FilterOptionsList>
                    <FilterOption>По дате проверки</FilterOption>
                    <FilterOption>По проценту совпадения</FilterOption>
                </FilterOptionsList>
                
                <ItemsContainer>
                    <ContainerHeader>Отчёты</ContainerHeader>
                    {reports == null
                        ? <div className="container-message">Ошибка при загрузке отчётов!</div>
                        : (reports.length == 0 
                            ? <div className="container-message">Отчёты не найдены</div>
                            : reports.map(report => 
                                <ReportItem 
                                    report={report} 
                                    key={report.reportId} 
                                    onRemoveReport={onRemoveReport}
                                />)
                        )
                    }
                </ItemsContainer>
            </div>
        </div>
    )
}

export default ReportsPage