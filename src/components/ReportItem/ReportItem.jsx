import "./ReportItem.css"

import { useState } from "react";

import reportIcon from '../../assets/icons/report_icons/report.png';
import ReportTitle from "./ReportTitle";

import ItemCard from './ReportItemCard/ItemCard';
import ItemCardButton from './ReportItemCard/ItemCardButton';

const ReportItem = ({report, onRemoveReport}) => {
    const [isPanelVisible, setPanelVisible] = useState(false)

    return (
        <div className="report-item">
            <div className="report-item-panel">
                <ReportTitle icon={reportIcon}>{report}</ReportTitle>
                <div className="report-item-buttons">
                    <ItemCardButton 
                        onClick={() => setPanelVisible(!isPanelVisible)}
                        isPanelOpened={isPanelVisible}/>
                </div>
            </div>
            {isPanelVisible && <ItemCard report={report} onRemoveReport={onRemoveReport}/>}
        </div>
    )
}

export default ReportItem