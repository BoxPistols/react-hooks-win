import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
// import App from "./App"
import * as serviceWorker from "./serviceWorker"

// local path on moving postman
const url = "http://localhost:8888/posts"

// Post class Component
class Posts extends React.Component {
  // constructor
  constructor(props) {
    super(props)
    // state
    this.state = {
      posts: this.props.posts,
    }
  }

  render() {
    return (
      <section>
        {/* in map posts obj include -> post, index */}
        {this.state.posts.map((post, index) => {
          return (
            // set key
            <section key={post.id}>
              {/* set obj val */}
              <h1>
                {index + 1}: {post.title}
              </h1>
              <p>{post.body}</p>
            </section>
          )
        })}
      </section>
    )
  }
}

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
