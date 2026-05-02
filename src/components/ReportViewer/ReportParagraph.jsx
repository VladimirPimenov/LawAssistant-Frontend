import { useState } from "react"
import "./ReportParagraph.css"

import ArticleField from "./ArticleField/ArticleField"

const ReportParagraph = ({reportParagraph}) => {
    const [currentVariant, setCurrentVariant] = useState(0)
    const [isArticleVisible, setArticleVisible] = useState(false)

    const paragraphVariants = reportParagraph.comparisonResults
    const variantsCount = reportParagraph.comparisonResults.length

    const article = reportParagraph.comparisonResults[currentVariant].article
    const matchValue = (reportParagraph.comparisonResults[currentVariant].matchValue * 100).toFixed(2)

    const prevVariant = () => {
        if(currentVariant - 1 >= 0)
            setCurrentVariant(currentVariant - 1)
    }

    const nextVariant = () => {
        if(currentVariant + 1 <= variantsCount - 1)
            setCurrentVariant(currentVariant + 1)
    }

    return (
        <div className="report-paragraph">
            <div className="paragraph-field">
                <div className="paragraph-actions">
                    <div className="variants-counter">{currentVariant + 1}/{variantsCount}</div>
                    <div className="paragraph-buttons">
                        <button onClick={prevVariant}>/\</button>
                        <button onClick={nextVariant}>\/</button>
                    </div>
                </div>
                <div className="paragraph-text" >
                    <div dangerouslySetInnerHTML={{ __html: reportParagraph.comparisonResults[currentVariant].text }} />
                </div>
                <div className="paragraph-article">
                    <div className="paragraph-articleinfo">
                    <div>
                        Статья №{article.number}
                    </div>
                    <div>
                        Совпадение:
                        {matchValue}%
                    </div>
                    </div>
                    <button onClick={() => setArticleVisible(!isArticleVisible)}>Открыть статью</button>
                </div>
            </div>
            {isArticleVisible &&
                <ArticleField article={article} />
            }
        </div>
    )
}

export default ReportParagraph