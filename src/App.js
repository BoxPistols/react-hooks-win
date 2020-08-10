import React from "react"
import "./App.css"
// import Counter from "./components/Counter"
import CounterHook from "./components/CounterHook"
import Message from "./components/message"

function App() {
  return (
    <div className="App">
      <CounterHook />
      <Message />
    </div>
  )
}

export default App
