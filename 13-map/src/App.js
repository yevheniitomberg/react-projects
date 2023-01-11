import { useState } from "react"
import "./App.css"
import Button from "./components/Button"
import Counter from "./components/Counter"

function App() {
  const [count, setCount] = useState(0)

  const arr = ["Click", "Click me", "Click me please", "Press", "Hit"]

  const incrementCount = () => {
    setCount(count + 1)
  }

  return (
    <div className="App">
      <Counter count={count} />
      {arr.map((item, index) => {
        return <Button onClick={incrementCount} text={item} key={index} />
      })}
    </div>
  )
}

export default App
