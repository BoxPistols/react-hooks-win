import React, { Component } from "react"

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "",
      body: "",
    }

    this.handleTitle = this.handleTitle.bind(this)
    this.handleBody = this.handleBody.bind(this)
  }

  handleTitle(event) {
    console.log("title:", this.state.title)
    this.setState({ title: event.target.value })
  }
  handleBody(event) {
    console.log("body:", this.state.body)
    this.setState({ body: event.target.value })
  }

  render() {
    return (
      <section>
        <form>
          <div>
            <label>
              タイトル：
              <input
                type="text"
                name="title"
                value={this.state.title}
                onChange={this.handleTitle}
              />
            </label>
          </div>
          <div>
            <label>
              本文：
              <input
                type="text"
                name="body"
                value={this.state.body}
                onChange={this.handleBody}
              />
            </label>
          </div>
          <div>
            <button type="submit" value="登録">
              送信
            </button>
          </div>
        </form>
      </section>
    )
  }
}

export default Form
