import reportIcon from '../../assets/icons/report.png';
import "./ReportItem.css"
import ReportTitle from "./ReportTitle";

const ReportItem = ({report}) => {
    return (
        <div className="report-item">
            <ReportTitle icon={reportIcon}>{report.title}</ReportTitle>
            <div>{report.createdDate}</div>
        </div>
    )
}

export default ReportItem