import "./ReportTitle.css"

const ReportTitle = (props) => {
    return (
        <div className="report-title">
            <img src={props.icon} />
            Отчёт по документу «{props.children.contract.title}»
        </div>
    )
}

export default ReportTitle