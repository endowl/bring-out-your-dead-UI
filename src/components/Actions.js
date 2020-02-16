import React from 'react';
import AddBeneficiary from './modals/AddBeneficiary'

export default class Actions extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      modal: null
    }
  }

  render(){
    return(
      <div className="actions" style={{
        backgroundColor: "white",
        width: "80vw",
        margin: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>

        <div className="actions_title">Possible Actions</div>
        <div className="actions_buttons" style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
        >
          <button onClick={()=>{
            if(this.state.modal !== "AddBeneficiary"){
              this.setState({modal:"AddBeneficiary"})
            } else { this.setState({modal:null})}
            }}>
            Add Beneficiary
          </button>
          {this.state.modal === "AddBeneficiary" && <AddBeneficiary/>}
          <button onClick={()=>alert("Change Beneficiary")}>Change Beneficiary</button>
          <button onClick={()=>alert("Change Oracle")}>Change Oracle</button>
          <button onClick={()=>alert("I'm not dead yet!")}>I'm not dead yet!</button>
          <button onClick={()=>alert("Remove Beneficiary")}>Remove Beneficiary</button>
          <button onClick={()=>alert("Appoint Executor")}>Appoint Executor</button>
          <button onClick={()=>alert("Transfer Executorship")}>Transfer Executorship</button>
          <button onClick={()=>alert("Settle Debts")}>Settle Debts</button>
          <button onClick={()=>alert("Distribute Inheritance")}>Distribute Inheritance</button>
          <button onClick={()=>alert("Register a new asset")}>Register a new asset</button>

        </div>
      </div>
    )
  }
}
