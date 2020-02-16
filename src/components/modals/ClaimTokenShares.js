import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import { claimTokenShares } from '../../utils/claimTokenShares'
import { getTrackedTokens } from '../../utils/getTrackedTokens'

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
    // get trackedTokens
    getTrackedTokens().then((res)=>{
      console.log("trackedTokens:", res)
      this.setState({tokenAddresses: res})
    }).catch(alert("No tokens have been registered"))
  }

  render(){
    return (
      <div>
        <Paper elevation={3} style={styles.root}>
          <label>
            Available tokens you can claim
          </label>
          <select>
          {this.state.tokenAddress && this.state.tokenAddresses.map(e=> <option value={e}>e</option>)}
          </select>

          <button onClick={()=>{
            // call AddBeneficiary on contract, notify of success, then hide modal
            this.props.hide()
          }}>
            Claim your inheritance
          </button>
        </Paper>
      </div>
    );
  }
}
