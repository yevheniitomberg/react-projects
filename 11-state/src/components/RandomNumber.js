import { useState } from "react"
import generateRandomNum from "../utils/generateRandomNumber"

function RandomNumber({ maxNumber }) {
  const [randomNumber, setRandomNumber] = useState(generateRandomNum(maxNumber))

  const changeRandomNumber = () => {
    setRandomNumber(generateRandomNum(maxNumber))
  }

  return (
    <div>
      <h1>{randomNumber}</h1>
      <button onClick={changeRandomNumber}>Generate new random number</button>
    </div>
  )
}

export default RandomNumber
