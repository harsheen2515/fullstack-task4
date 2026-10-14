function ArticleCard({ article }) {
  return (
    <article className="article-card">
      <img
        className="article-image"
        src={article.image}
        alt={article.title}
      />

      <h3>{article.title}</h3>

      <p>{article.description}</p>

      <p>By {article.author}</p>

      <button>Read More</button>
    </article>
  )
}

export default ArticleCard