// Write your code here
import './index.css'

const EachValue = props => {
  const {userDetails, removeRupee} = props
  const {value} = userDetails
  const onRemove = () => {
    removeRupee(value)
  }
  return (
    <li>
      <button className="custom-btn" type="submit" onClick={onRemove}>
        {value}
      </button>
    </li>
  )
}

export default EachValue
