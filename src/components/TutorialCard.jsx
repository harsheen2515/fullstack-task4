function TutorialCard({ tutorial }) {
  return (
    <article className="tutorial-card">
      <img
        className="tutorial-image"
        src={tutorial.image}
        alt={tutorial.title}
      />

      <h3>{tutorial.title}</h3>

      <p>{tutorial.description}</p>

      <p>{tutorial.technology}</p>

      <p>⭐ {tutorial.rating}</p>

      <p>By {tutorial.author}</p>

      <button>View Tutorial</button>
    </article>
  )
}

export default TutorialCard