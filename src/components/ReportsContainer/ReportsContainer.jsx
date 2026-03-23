import React from "react";
import "./ReportsContainer.css"
import ReportItem from "./ReportItem";

const ReportsContainer = ({reports}) => {
    return (
        <div className="reports-container">
            {reports.map(report => <ReportItem report={report} />)}
        </div>
    )
}

export default ReportsContainer