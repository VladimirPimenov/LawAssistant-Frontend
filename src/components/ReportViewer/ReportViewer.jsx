import "./ReportViewer.css"

import ReportParagraphField from "./ReportParagraphField";

const ReportViewer = ({report}) => {

    return (
        <div className="report-viewer">
            { !report
                ? <div className="no-doc-message">Отчёт не загружен!</div>
                : <div className="report-text-container" style={{ overflow: 'visible', maxHeight: 'none' }}>
                    { report.results.map(p => 
                            <ReportParagraphField reportParagraph={p} />
                        )
                    }
                </div>
            }
        </div>
    )
}

export default ReportViewer