import ArticleCard from "./ArticleCard"
import TutorialCard from "./TutorialCard"

function Articles() {
  const articles = [
    {
      id: 1,
      title: "Introduction to React",
      description: "Learn the basics of React and how components make web development easier.",
      author: "DEV@Deakin",
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg"
    },
    {
      id: 2,
      title: "Getting Started with JavaScript",
      description: "Explore the fundamentals of JavaScript and build interactive websites.",
      author: "DEV@Deakin",
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg"
    },
    {
      id: 3,
      title: "Web Development Tips",
      description: "Useful tips and practices for creating better modern websites.",
      author: "DEV@Deakin",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg"
    }
  ]

  const tutorials = [
  {
    id: 1,
    title: "Learn React Components",
    description: "Learn how to create and use components in React.",
    author: "DEV@Deakin",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
    technology: "React",
    rating: 5
  },
  {
    id: 2,
    title: "JavaScript for Beginners",
    description: "Understand the basics of JavaScript step by step.",
    author: "DEV@Deakin",
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg",
    technology: "JavaScript",
    rating: 4
  },
  {
    id: 3,
    title: "Web Development Basics",
    description: "Learn the fundamentals of modern web development.",
    author: "DEV@Deakin",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    technology: "Web Development",
    rating: 5
  }
]

  return (
  <>
    <section className="articles" id="articles">
      <h2>Featured Articles</h2>

      <div className="articles-container">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

<button>See all articles</button>
    </section>

  <section className="tutorials" id="tutorials">
  <h2>Featured Tutorials</h2>

  <div className="tutorials-container">
    {tutorials.map((tutorial) => (
      <TutorialCard key={tutorial.id} tutorial={tutorial} />
    ))}
  </div>

  <button>See all tutorials</button>
</section>
  </>
)
}

export default Articles
