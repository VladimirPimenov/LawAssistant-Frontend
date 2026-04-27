import "./ReportViewer.css"

import ReportParagraphField from "./ReportParagraphField";

const ReportViewer = ({report}) => {

    return (
        <div className="report-viewer">
            { !report
                ? <div className="no-doc-message">Отчёт не загружен!</div>
                : <div className="report-text-container">
                    { report.results.map(p => 
                            <ReportParagraphField reportParagraph={p} />
                            //<div dangerouslySetInnerHTML={{ __html: r.paragraph.text }} />
                            //<div dangerouslySetInnerHTML={ __html: {r.paragraph.text} } />
                        )
                    }
                    {/* {report.comparisonResults.map(result => (
                        <div dangerouslySetInnerHTML={
                            { __html: `<p>${result.text} <span style="color:red">
                                ${result.matchValue <= 0.000001 
                                    ? "Нет совпадений"
                                    : `Статья: ${result.articleId}`
                                }</span></p>` }
                        } />
                    ))} */}
                </div>
            }
        </div>
    )
}

export default ReportViewer