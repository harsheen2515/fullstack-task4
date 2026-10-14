import { useState } from "react"

function Subscribe() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault()

    const response = await fetch("/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: email })
    })

    const data = await response.json()
    setMessage(data.message)
  }

  return (
    <section className="subscribe">
      <h2>Subscribe to DEV@Deakin</h2>

      <p>Get the latest articles and technology news in your inbox.</p>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <button type="submit">Subscribe</button>
      </form>

      <p className="subscribe-message">{message}</p>
    </section>
  )
}

export default Subscribe