// import 　コンポネント読み込み React本体から
import React, { Component } from "react"

// class Name ex Com
class Counter extends Component {
  // コンストラクタ(props) { xxx }
  constructor(props) {
    // super
    super(props)
    // this.state これの状態 = { xxx }
    this.state = {
      // キー: 値
      count: 0,
    }
  }
  // function arrow
  incrementCounter = () => {
    // このステートの状態管理
    this.setState({
      // キー： この状態.キー 制御
      count: this.state.count + 1,
    })
  }
  // レンダー 書きだし
  render() {
    // 返り値
    return (
      <>
        {/* このキーの状態 */}
        <h1>{this.state.count}</h1>
        {/* 機能を持たせる 別途作成した関数 */}
        <button onClick={this.incrementCounter}> Add </button>
      </>
    )
  }
}

export default Counter
