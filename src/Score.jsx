import { useState } from "react"

const Score = (props) => {
  const [currScore, setCurrScore] = useState(props.score.score)


  function handleIncrease() {
    setCurrScore(currScore + 1)
  }

  return (
    <>
    <button onClick={handleIncrease}>+1</button>
    <div>{ currScore} on { props.score.date }</div>
    </>
  )
}

export default Score