import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { getBeneficiaryDetails } from '../../utils/getBeneficiaryDetails'
import { amIBeneficiary } from '../../utils/amIBeneficiary'
import { myAddress } from '../../utils/myAddress'
import { changeBeneficiaryAddress } from '../../utils/changeBeneficiaryAddress'

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

let newAddress = null;
// 0x131F6B10Aa5FA888abd2e77CfEDb349978A8ca59

export default class ChangeBeneficiaryAddress extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }



  componentDidMount(){

  }

  render(){

    return (
      <div>
        <Paper elevation={3} style={styles.root}>
          <div>Select beneficiary</div>
          {this.props.role === "Beneficiary"
            ? <div>{this.props.address}</div>
            : <div>false</div>
          }
          <label>
            New Address
          </label>
          <input
            style={styles.input}
            type="text"
            name="Beneficiary Address"
            value={newAddress}
            onChange={(e: any) => newAddress = e.target.value}
          />

          <button onClick={()=>{
            changeBeneficiaryAddress(this.props.address, newAddress)
              .then((res)=>{
                console.log(res)
                alert(res.message)
              }).catch((err)=>{
                alert(err.message)
              })

            this.props.hide()
          }}>
            Submit this change
          </button>
        </Paper>
      </div>
    );
  }
}
