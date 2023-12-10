// Write your code here
import './index.css'

const DenominationItem = props => {
  const {list1, cashwithdraw} = props
  const {id, value} = list1

  const amount = () => {
    cashwithdraw(value)
  }
  return (
    <li>
      <button className="button1" type="button" onClick={amount}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
