import { useEffect, useState } from "react"
import Post from "./Post"

function Posts() {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState("")
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false))
  }, [])

  if (error) {
    return <h1>Error: {error}</h1>
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <h1 style={{ width: "100%" }}>Posts</h1>
      <hr />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        posts &&
        posts.map((post) => {
          return <Post {...post} key={post.id} />
        })
      )}
      <div></div>
    </div>
  )
}

export default Posts
