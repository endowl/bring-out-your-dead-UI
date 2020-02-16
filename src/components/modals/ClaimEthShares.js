import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { claimEthShares } from '../../utils/claimEthShares'

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

export default class ClaimEthShares extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <Paper elevation={3} style={styles.root}>
          <label>
            Available Ether you can claim
          </label>

          <button onClick={()=>{
            // call AddBeneficiary on contract, notify of success, then hide modal
            claimEthShares()
              .then((res)=>{
                console.log("res", res)
                alert("withdrawl successful")
              })
              .catch(
                alert("There isn't any ETH to claim")
              )
            this.props.hide()
          }}>
            Claim your inheritance
          </button>
        </Paper>
      </div>
    );
  }
}
