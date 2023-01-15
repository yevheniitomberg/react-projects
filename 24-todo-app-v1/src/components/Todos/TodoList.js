import Todo from "./Todo"
import { useState } from "react"
import styles from "./TodoList.module.css"

function TodoList({ todos, removeTodo }) {
  return (
    <div className={styles.todoListContainer}>
      {!todos.length ? (
        <h2>Todo list is empty</h2>
      ) : (
        todos.map((todo, index) => {
          return (
            <Todo
              text={todo}
              key={index}
              removeTodo={removeTodo}
              index={index}
            />
          )
        })
      )}
    </div>
  )
}

export default TodoList
