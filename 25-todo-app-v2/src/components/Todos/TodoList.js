import Todo from "./Todo"
import { useState } from "react"
import styles from "./TodoList.module.css"

function TodoList({ todos, removeTodo, completeTodo }) {
  return (
    <div className={styles.todoListContainer}>
      {!todos.length ? (
        <h2>Todo list is empty</h2>
      ) : (
        todos.map((todo) => {
          return (
            <Todo
              todo={todo}
              key={todo.id}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
            />
          )
        })
      )}
    </div>
  )
}

export default TodoList
