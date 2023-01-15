import styles from "./Todo.module.css"
import { RiDeleteBin2Line, RiTodoFill } from "react-icons/ri"
import { FaCheck } from "react-icons/fa"

function Todo({ todo, removeTodo, completeTodo }) {
  return (
    <div
      className={`${styles.todo} ${
        todo.isCompleted ? styles.completedTodo : ""
      }`}
    >
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo.text}</div>
      <RiDeleteBin2Line
        className={styles.deleteIcon}
        onClick={() => removeTodo(todo.id)}
      />
      <FaCheck
        className={styles.checkIcon}
        onClick={() => completeTodo(todo.id)}
      />
    </div>
  )
}

export default Todo
