import "./ReportTitle.css"

import { Link } from "react-router"

const ReportTitle = (props) => {
    return (
        <div className="report-title">
            <img src={props.icon} />
            <Link to={`/reports/${props.children.reportId}`} style={{color:"royalblue"}}>
                Отчёт по документу «{props.children.contract.title}»
            </Link>
        </div>
    )
}

export default ReportTitle