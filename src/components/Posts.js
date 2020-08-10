// import 　コンポネント読み込み React本体から
import React, { Component } from "react"
import Form from "./PostsForm"

// Post class Component
class Posts extends Component {
  // constructor
  constructor(props) {
    super(props)
    // state
    this.state = {
      posts: this.props.posts,
    }

    this.add = this.add.bind(this)
  }

  add(title, body) {
    console.log("Add call")
    console.log("title:" + title)
    console.log("body:" + body)
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
        <Form addPost={this.add} />
      </section>
    )
  }
}

export default Posts
