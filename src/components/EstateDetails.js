import React from 'react';
import { trackedTokens } from '../utils/trackedTokens'
import { checkLiveliness } from '../utils/checkLiveliness'

let tokenAddresses = []

export default class EstateDetails extends React.Component {
  constructor(props){
    super(props)
    this.state={
      trackedTokens: null,
      liveliness: null,
    }
  }

  componentDidMount(){
    trackedTokens().then((res)=>{

      console.log("tokenAddresses", res)
      this.setState({
        trackedTokens: res
      })
    }).catch((err)=>alert(err.message))

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
          liveliness: 'WELLBEING UNCERTAIN'
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
        {this.state.trackedTokens && this.state.trackedTokens.map((e,i)=><div key={i}>{e}</div>)}
        {/* <div className="estateDetails_defiDebts">DeFi Debts</div> */}
      </div>
    )
  }
}
