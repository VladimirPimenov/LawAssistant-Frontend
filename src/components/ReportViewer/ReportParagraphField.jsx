import { useState } from "react"
import "./ReportParagraphField.css"

const ReportParagraphField = ({reportParagraph}) => {
    const paragraphVariants = reportParagraph.comparisonResults
    const variantsCount = reportParagraph.comparisonResults.length

    const [currentVariant, setCurrentVariant] = useState(0)

    const prevVariant = () => {
        if(currentVariant - 1 >= 0)
            setCurrentVariant(currentVariant - 1)
    }

    const nextVariant = () => {
        if(currentVariant + 1 <= variantsCount - 1)
            setCurrentVariant(currentVariant + 1)
    }

    return (
        <div className="report-paragraph-form">
            <div className="report-paragraph-actions">
                <div className="variants-counter">{currentVariant + 1}/{variantsCount}</div>
                <div className="report-paragraph-buttons">
                    <button onClick={prevVariant}>/\</button>
                    <button onClick={nextVariant}>\/</button>
                </div>
            </div>
            <div className="report-paragraph-text" >
                <div dangerouslySetInnerHTML={{ __html: reportParagraph.comparisonResults[currentVariant].text }} />
            </div>
            <div className="report-paragraph-article">
                <div>
                    Статья:
                    «{reportParagraph.comparisonResults[currentVariant].article.title}»
                </div>
                <div>
                    Совпадение:
                    {reportParagraph.comparisonResults[currentVariant].matchValue.toFixed(4)}
                </div>
            </div>
        </div>
    )
}

export default ReportParagraphField