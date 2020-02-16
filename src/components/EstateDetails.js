import React from 'react';
import { trackedTokens } from '../utils/trackedTokens'

let tokenAddresses = []

export default class EstateDetails extends React.Component {
  constructor(props){
    super(props)
    this.state={
      trackedTokens: null
    }
  }

  async componentDidMount(){
    tokenAddresses = await trackedTokens()
    console.log("tokenAddresses", tokenAddresses)
    this.setState({
      trackedTokens: tokenAddresses
    })
  }

  render(){
    return(
      <div className="estateDetails" style={{
        backgroundColor: "white",
        width: "80vw",
        margin: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between"

      }}>
        <div className="estateDetails_title">Estate Details</div>
        <div className="estateDetails_decedantName">
          {!this.props.owner
            ? "loading..."
            : this.props.owner.substr(0,6) + "..." + this.props.owner.substr(38)
          }
        </div>
        <div className="estateDetails_posessions">Registered assets in estate</div>
        {this.state.trackedTokens && this.state.trackedTokens.map((e,i)=><div key={i}>{e}</div>)}
        <div className="estateDetails_defiDebts">DeFi Debts</div>
      </div>
    )
  }
}
