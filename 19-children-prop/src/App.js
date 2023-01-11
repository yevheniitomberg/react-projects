import "./App.css"
import Wrapper from "./components/Wrapper"

function App() {
  return (
    <div className="App">
      <Wrapper color="lightblue">
        <h1>Text in wrap</h1>
      </Wrapper>
      <Wrapper color="lightgreen">
        <h1>Another text</h1>
      </Wrapper>
    </div>
  )
}

export default App
