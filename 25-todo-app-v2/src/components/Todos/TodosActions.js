import Button from "../UI/Button"
import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri"
import styles from "./TodosActions.module.css"

function TodosActions({ removeAll, removeCompleted, completedTodosExist }) {
  return (
    <div className={styles.todosActionsContainer}>
      <Button title="Reset todos" onClick={removeAll}>
        <RiRefreshLine />
      </Button>
      <Button
        title="Clear Completed Todos"
        onClick={removeCompleted}
        disabled={!completedTodosExist}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  )
}

export default TodosActions
