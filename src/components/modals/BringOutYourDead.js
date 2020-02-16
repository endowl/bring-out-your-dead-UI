import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { checkLiveliness } from '../../utils/checkLiveliness'
import { bringOutYourDead } from '../../utils/bringOutYourDead'
import axios from 'axios'

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

export default class BringOutYourDead extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      liveliness: null
    }
  }

  componentDidMount(){
    checkLiveliness().then((res)=>{
      this.setState({
        liveliness: res
      })
    })
  }

  render(){
    return (
      <div>
        <Paper elevation={3} style={styles.root}>
          <label>
            Declare the owner of this estate as deceased
          </label>

          <button onClick={()=>{
            // call AddBeneficiary on contract, notify of success, then hide modal
            if(this.state.liveliness === 0){
              alert("The oracle believes your loved one is still with us.")
            }
            if(this.state.liveliness === 1){
              alert("Your loved one's passing has already been declared")
            }
            if(this.state.liveliness === 2){
              bringOutYourDead().then((res)=>{
                console.log("bringOutYourDead",res)

              }).catch((err)=>{
                  console.log(err.message)
              })
            }

            this.props.hide()
          }}>
            They will be missed
          </button>
        </Paper>
      </div>
    );
  }
}
