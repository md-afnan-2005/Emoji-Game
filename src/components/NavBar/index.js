// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, act} = props
  const onActive = () => {
    switch (act) {
      case false:
        return (
          <div className="nav">
            <div className="c1">
              <img
                className="emo"
                src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
                alt="emoji logo"
              />
              <h1 className="head">Emoji Game</h1>
            </div>
            <div className="c1">
              <p className="head">Score: {score}</p>
              <p className="head">Top Score: {topScore}</p>
            </div>
          </div>
        )
      case true:
        return (
          <div className="nav">
            <div className="c1">
              <img
                src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
                alt="emoji logo"
              />
              <h1 className="head">Emoji Game</h1>
            </div>
          </div>
        )
      default:
        return ''
    }
  }
  return <div>{onActive()}</div>
}
export default NavBar
