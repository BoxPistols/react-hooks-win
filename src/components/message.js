import React, { PureComponent } from "react"

function Hello(props) {
  return <h1>こんちにわ</h1>
}

class Message extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
    }
    this.updateName = this.updateName.bind(this)
  }

  // bind event
  updateName(event) {
    console.log("updateName Call")
    this.setState({
      name: event.target.value,
    })
  }

  render() {
    return (
      <div>
        {/* bind result */}
        <Hello></Hello>
        <p>{this.state.name}</p>
        <p>
          <input type="text" onChange={this.updateName} />
        </p>
      </div>
    )
  }
}

export default Message
