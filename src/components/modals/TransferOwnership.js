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

export default function TransferOwnership(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <label>
          Transfer Ownership of this Estate Contract
        </label>
        <input className={classes.input} type="text" name="New Owner Address"/>

        <button onClick={()=>{
          // call AddBeneficiary on contract, notify of success, then hide modal
          props.hide()
        }}>
          Transfer to new owner
        </button>
      </Paper>
    </div>
  );
}
