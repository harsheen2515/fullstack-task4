function Gallery() {
  const images = [
    "/gallery1.jpg",
    "/gallery2.jpg",
    "/gallery3.jpg",
    "/gallery4.jpg"
  ]

  return (
    <section className="gallery">
      <h2>Gallery</h2>

      <div className="gallery-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Gallery