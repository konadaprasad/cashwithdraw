import './index.css'

import {Component} from 'react'

import DenominationItem from '../DenominationItem'

const denominationsList = [
  {
    id: 1,
    value: 50,
  },
  {
    id: 2,
    value: 100,
  },
  {
    id: 3,
    value: 200,
  },
  {
    id: 4,
    value: 500,
  },
]

class CashWithdrawal extends Component {
  state = {count: 2000, list: denominationsList}

  cashwithdraw = value => {
    const {count, list} = this.state
    this.setState({count: count - value})
  }

  render() {
    const {count, list} = this.state

    return (
      <div className="container">
        <div className="inner-container">
          <div className="para-container">
            <p className="para">S</p>
            <p className="para2">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="balance">Your Balance</p>
            <div className="amount-container">
              <p className="amount">{count}</p>
              <p className="rupees">In Rupees</p>
            </div>
          </div>
          <h1 className="amount">Withdraw</h1>
          <p className="balance">CHOOSE SUM(IN RUPEES)</p>
          <ul className="button-container">
            {list.map(eachitem => (
              <DenominationItem
                list1={eachitem}
                key={eachitem.id}
                cashwithdraw={this.cashwithdraw}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
