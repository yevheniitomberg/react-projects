import { useEffect, useState } from "react"
import Post from "./Post"

const API_URL = "https://jsonplaceholder.typicode.com/posts"

function Posts() {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState("")
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(API_URL)
        const posts = await res.json()
        setPosts(posts)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  // useEffect(() => {
  //   fetch(API_URL)
  //     .then((response) => response.json())
  //     .then((json) => setPosts(json))
  //     .catch((error) => setError(error.message))
  //     .finally(() => setLoading(false))
  // }, [])

  if (error) {
    return <h1>Error: {error}</h1>
  }

  return (
    <>
      <h1>Posts</h1>
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
    </>
  )
}

export default Posts
