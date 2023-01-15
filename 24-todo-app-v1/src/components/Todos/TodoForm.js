import { useState } from "react"
import styles from "./TodoForm.module.css"

function TodoForm({ addTodo }) {
  const [inputText, setInputText] = useState("")

  const onSubmitHandler = (event) => {
    event.preventDefault()
    addTodo(inputText)
    setInputText("")
  }

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="Enter new todo"
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default TodoForm
