import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      position: "absolute",
      margin: "5vw",
      left: "0px",
      bottom: 0,
      width: "90vw",
      height: "70vh",
      display: "flex",
      flexDirection: "column",
    },
  },
  input: {
    border: "1px solid grey",
    backgroundColor: "white",
  }
}));

export default function ClaimEthShares(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <label>
          Available Ether you can claim
        </label>

        <button onClick={()=>{
          // call AddBeneficiary on contract, notify of success, then hide modal
          props.hide()
        }}>
          Claim your inheritance
        </button>
      </Paper>
    </div>
  );
}
