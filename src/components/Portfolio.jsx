function Portfolio() {
  const projects = [
    {
      title: "Salesforce UI",
      image: "/salesforce.jpg",
      description: "A Salesforce-inspired user interface project.",
      link: "https://github.com/harsheen2515/saleforce"
    },
    {
      title: "Shape Hover",
      image: "/shape-hover.jpg",
      description: "A web project demonstrating shape hover effects.",
      link: "https://github.com/harsheen2515/shape_hover"
    }
  ]

  return (
    <section className="portfolio" id="work">
      <h2>Here's what I've done so far</h2>

      <div>
        {projects.map((project) => (
          <div className="project" key={project.title}>
            <img src={project.image} alt={project.title} />

            <h3>{project.title}</h3>

            <p>{project.description}</p>

          <a href={project.link} target="_blank">
  view on GitHub
</a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Portfolio