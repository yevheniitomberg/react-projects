import { useState } from "react"

function Login() {
  const [data, setData] = useState({ username: "", password: "" })

  const handleFormSubmit = (event) => {
    event.preventDefault()
    alert(JSON.stringify(data))
  }

  function handleInputChange(text, name) {
    setData({ ...data, [name]: text })
  }

  return (
    <>
      <h1>Login form</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username
          <input
            type="text"
            value={data.username}
            onChange={(event) =>
              handleInputChange(event.target.value, "username")
            }
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={data.password}
            onChange={(event) =>
              handleInputChange(event.target.value, "password")
            }
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default Login
