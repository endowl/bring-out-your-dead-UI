import React from 'react';
import { trackedTokens } from '../utils/trackedTokens'
import { checkLiveliness } from '../utils/checkLiveliness'

let tokenAddresses = []

export default class EstateDetails extends React.Component {
  constructor(props){
    super(props)
    this.state={
      liveliness: null,
    }
  }

  componentDidMount(){

    checkLiveliness().then((res)=>{
      console.log(res)
      if(res == 0){
        this.setState({
          liveliness: "LIVING"
        })
      } else if (res == 1) {
        this.setState({
          liveliness: "DECEASED"
        })
      } else {
        this.setState({
          liveliness: 'UNCERTAIN - Eligible for Verification of Death'
        })
      }
    }).catch(err=>alert(err.message))
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
        {this.state.liveliness
          ? <div>{this.state.liveliness}</div>
          : <div>Consulting the life oracle...</div>
        }
        <div className="estateDetails_posessions">Registered assets in estate</div>
        {this.props.trackedTokens && this.props.trackedTokens.map((e,i)=><div key={i}>{e}</div>)}
        {/* <div className="estateDetails_defiDebts">DeFi Debts</div> */}
      </div>
    )
  }
}
