import "./ReportTitle.css"

const ReportTitle = (props) => {
    return (
        <div className="report-title">
            <img src={props.icon} />
            {props.children}
        </div>
    )
}

export default ReportTitle