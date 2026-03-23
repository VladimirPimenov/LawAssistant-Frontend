import React from "react";
import "./ReportsPage.css"
import FilterOptionsList from "../../components/FilterOptionsList/FilterOptionsList"
import FilterOption from "../../components/FilterOptionsList/FilterOption"
import ReportsContainer from "../../components/ReportsContainer/ReportsContainer"
import PageHeader from "../../components/PageHeader/PageHeader"

const ReportsPage = ({reports}) => {
    return (
        <div className="docs-page">
            <PageHeader>Отчёты</PageHeader>
            <div className="docs-container">
                <FilterOptionsList>
                    <FilterOption>По дате проверки</FilterOption>
                    <FilterOption>По проценту совпадения</FilterOption>
                </FilterOptionsList>
                <ReportsContainer reports={reports} />
            </div>
        </div>
    )
}

export default ReportsPage