// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, onChange} = props
  const Chandu = () => {
    onChange()
  }
  const onQuick = () => {
    switch (score) {
      case 12:
        return (
          <div className="lost">
            <div>
              <h1 className="head">You Won</h1>
              <p className="head">Best Score</p>
              <p className="para">12/12</p>
              <button type="button" onClick={Chandu} className="btn">
                Play Again
              </button>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
              alt="win or lose"
            />
          </div>
        )
      default:
        return (
          <div className="lost">
            <div>
              <h1 className="head">You Lose</h1>
              <p className="head">Score</p>
              <p className="para">{score}/12</p>
              <button type="button" onClick={Chandu} className="btn">
                Play Again
              </button>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
              alt="win or lose"
            />
          </div>
        )
    }
  }
  return <div>{onQuick()}</div>
}
export default WinOrLoseCard
