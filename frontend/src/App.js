import { useState } from "react"
import axios from "axios"

function App() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (email) {
      axios
        .post("http://localhost:8000/api/mail/forgotten", { email })
        .then((res) => {
          console.log(res)
        })
        .catch((err) => console.log(err))
    } else {
      alert("Please specify email and password")
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ width: "18rem" }}
      className="m-auto mt-5"
    >
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="form-control"
          id="email"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Envoyer
      </button>
    </form>
  )
}

export default App
