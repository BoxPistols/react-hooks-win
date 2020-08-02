import React, { useState } from "react"

function CounterHook() {
  // {　[配列 0:ステート, 1:ステートを更新する関数] }  useState(初期値)
  const [count, setCount] = useState(0)
  // 関数
  const incCount = () => {
    // ステート関数（実行内容）
    // setCount(count + 1)
    setCount((countNum) => countNum + 1)
  }

  const incCount10 = () => {
    // Bad Pattern
    setCount(count + 10)
  }

  const incCount10For = () => {
    // 10回して10にする
    for (let index = 0; index < 10; index++) {
      // setCount(count + 1)
      setCount((prevCount) => prevCount + 1)
    }
  }
  function Hello(props) {
    return <h1>Hello{props.name}さん</h1>
  }

  return (
    <>
      <h1>{count}</h1>

      <Hello name="おれ" />

      <button onClick={incCount}> Add Hook </button>
      <button onClick={incCount10}> Add Hook </button>
      <button onClick={incCount10For}> Add Hook10 </button>
    </>
  )
}
export default CounterHook
