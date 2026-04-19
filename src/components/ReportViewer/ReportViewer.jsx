import "./ReportViewer.css"

const ReportViewer = ({report}) => {
    return (
        <div className="report-viewer">
            { !report
                ? <div className="no-doc-message">Отчёт не загружен!</div>
                : <div className="report-text">
                    {report.comparisonResults.map(result => (
                        <div dangerouslySetInnerHTML={
                            { __html: `<p>${result.text} <span style="color:red">Статья: ${result.articleId}</span></p>` }
                        } />
                    ))}
                </div>
            }
        </div>
    )
}

export default ReportViewer