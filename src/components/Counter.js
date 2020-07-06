import React, { useState, useEffect } from 'react'

function Counter() {
  const [counter, setCounter] = useState(0)

  const increment = number => {
    setCounter(counter + number)
  }

  useEffect(() => {
    console.log('mount lần đầu tiên, và duy nhất 1 lần')

    return () => {
      console.log('---- Counter sẽ bị xóa khỏi DOM')
    }
  }, [])

  useEffect(() => {
    console.log(counter)
  }, [counter])

  return (
    <>
      <button onClick={() => increment(1)}>INCREMENT +1</button>
      <button onClick={() => increment(2)}>INCREMENT +2</button>
      <p>{ counter }</p>
    </>
  )
}

export default Counter
