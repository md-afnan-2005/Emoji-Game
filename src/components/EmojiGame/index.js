import './index.css'

import {Component} from 'react'

import EmojiCard from '../EmojiCard'

import NavBar from '../NavBar'

import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {x: [], y: [], a: 0, b: 0, active: false}

  constructor(props) {
    super(props)
    this.state = {x: props.emojisList, y: [], a: 0, b: 0, active: false}
  }

  onRender = id => {
    const {y} = this.state
    if (y.includes(id)) {
      this.setState({y: [], active: true})
    } else {
      const {a, b, x} = this.state
      if (a + 1 === 12) {
        this.setState({a: 12, b: 12, active: true})
      } else {
        const newY = [...y, id]
        const sorted = x.sort(() => Math.random() - 0.5)
        this.setState({
          a: a + 1,
          x: sorted,
          b: Math.max(b, a + 1),
          y: newY,
        })
      }
    }
  }

  onPlay = () => {
    const {x} = this.state
    const sorted = x.sort(() => Math.random() - 0.5)
    this.setState({x: sorted, active: false, a: 0})
  }

  onAfnan = () => {
    const {active, x, a, b} = this.state
    if (active) {
      return (
        <>
          <WinOrLoseCard score={a} topScore={b} onChange={this.onPlay} />
        </>
      )
    }
    return (
      <ul className="card">
        {x.map(each => (
          <EmojiCard det={each} key={each.id} onChange={this.onRender} />
        ))}
      </ul>
    )
  }

  render() {
    const {a, b, active} = this.state
    return (
      <div className="bg">
        <NavBar score={a} topScore={b} act={active} />
        <>{this.onAfnan()}</>
      </div>
    )
  }
}
export default EmojiGame
