import styles from "./Todo.module.css"
import { RiTodoFill } from "react-icons/ri"

function Todo({ text, removeTodo, index }) {
  return (
    <div onDoubleClick={() => removeTodo(index)} className={styles.todo}>
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{text}</div>
    </div>
  )
}

export default Todo
