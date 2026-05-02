import "./ArticleField.css"

const ArticleField = ({article}) => {
    return (
        <div className="article-field">
            <div className="article-title">Статья №{article.number} «{article.title}»</div>
            <div className="article-text" dangerouslySetInnerHTML={{ __html: article.text }} />
        </div>
    )
}

export default ArticleField