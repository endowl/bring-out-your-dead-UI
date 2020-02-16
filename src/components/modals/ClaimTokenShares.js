import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import { claimTokenShares } from '../../utils/claimTokenShares'
import { getTrackedTokens } from '../../utils/getTrackedTokens'
import { claimTokenSharesAsEth } from '../../utils/claimTokenSharesAsEth'

const styles = {
  root: {
      position: "absolute",
      margin: "5vw",
      left: "0px",
      bottom: 0,
      width: "90vw",
      height: "70vh",
      display: "flex",
      flexDirection: "column",
  },
  input: {
    border: "1px solid grey",
    backgroundColor: "white",
  }
};

export default class ClaimTokenShares extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      tokenAddresses: null,
    }
  }

  componentDidMount(){

  }

  render(){
    return (
      <div>
        <Paper elevation={3} style={styles.root}>
          <label>
            Available tokens you can claim
          </label>
          <select>
          {this.props.trackedTokens && this.props.trackedTokens.map((e,i)=> <option key={i} value={e}>{e}</option>)}
          </select>

          <button onClick={()=>{
            // call AddBeneficiary on contract, notify of success, then hide modal
            claimTokenShares(this.props.trackedTokens[0]).then((res)=>{
              console.log("res",res)
              alert("Your claim is being processed.")
            })
            this.props.hide()
          }}>
            Claim Token Shares
          </button>
          <div>-OR-</div>
          <button onClick={()=>{
            // call AddBeneficiary on contract, notify of success, then hide modal
            claimTokenSharesAsEth(this.props.trackedTokens[0]).then((res)=>{
              console.log("res",res)
              alert("Your claim is being processed.")
            })
            this.props.hide()
          }}>
            Convert to Eth through Kyber
          </button>
        </Paper>
      </div>
    );
  }
}
