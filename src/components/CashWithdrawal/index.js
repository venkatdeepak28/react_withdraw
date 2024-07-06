// Write your code here
import {Component} from 'react'
import EachValue from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {value: 2000}

  changeValue = removeValue => {
    this.setState(prevState => ({value: prevState.value - removeValue}))
  }

  render() {
    const {value} = this.state
    const {denominationsList} = this.props
    return (
      <div className="bg-container">
        <div className="inner-container">
          <div className="profile-container">
            <div className="img-container">
              <p className="profile-para">S</p>
            </div>
            <h1 className="main-heading">Sarah Willams</h1>
          </div>
          <div className="balance-container">
            <p className="balance-heading">Your Balance</p>
            <div className="inner-balance-container">
              <p className="balance-para">{value}</p>
              <p className="rupees-para">In rupees</p>
            </div>
          </div>
          <p className="withdraw-heading">Withdraw</p>
          <p className="withdraw-para">CHOOSE SUM (IN RUPEES)</p>
          <ul className="list-prop">
            <div className="btn-container">
              <EachValue
                userDetails={denominationsList[0]}
                removeRupee={this.changeValue}
                key={denominationsList[0].id}
              />
              <EachValue
                userDetails={denominationsList[1]}
                removeRupee={this.changeValue}
                key={denominationsList[1].id}
              />
            </div>
            <div className="btn-container">
              <EachValue
                userDetails={denominationsList[2]}
                removeRupee={this.changeValue}
                key={denominationsList[2].id}
              />
              <EachValue
                userDetails={denominationsList[3]}
                removeRupee={this.changeValue}
                key={denominationsList[3].id}
              />
            </div>
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
