import "./Post.css"

function Post({ id, userId, title, body }) {
  return (
    <div className="post">
      <small>{id}</small>
      <h2>{title}</h2>
      <p>{body}</p>
      <h3>User id: {userId}</h3>
    </div>
  )
}

export default Post
