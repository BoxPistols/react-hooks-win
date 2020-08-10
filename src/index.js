import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
// import App from "./App"
import * as serviceWorker from "./serviceWorker"
import Posts from "./components//Posts"

// local path on moving postman
const url = "http://localhost:8888/posts"

// get data from url
fetch(url)
  .then(function (res) {
    return res.json() // from json function
  })
  .then(function (json) {
    console.log(json)
    ReactDOM.render(
      <React.StrictMode>
        {/* <App /> */}
        <Posts posts={json} />
      </React.StrictMode>,
      document.getElementById("root")
    )
  })

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
