// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {det, onChange} = props
  const {id, emojiName, emojiUrl} = det

  const Afnan = () => {
    onChange(id)
  }

  return (
    <li className="list">
      <button type="button" onClick={Afnan}>
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}
export default EmojiCard
