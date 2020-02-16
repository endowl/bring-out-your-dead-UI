import React from 'react';

export default class Actions extends React.Component {

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
          <button onClick={()=>alert("Add Beneficiary")}>Add Beneficiary</button>
          <button onClick={()=>alert("Change Beneficiary")}>Change Beneficiary</button>
          <button onClick={()=>alert("Change Oracle")}>Change Oracle</button>
          <button onClick={()=>alert("I'm not dead yet!")}>I'm not dead yet!</button>
          <button onClick={()=>alert("Remove Beneficiary")}>Remove Beneficiary</button>
          <button onClick={()=>alert("Appoint Executor")}>Appoint Executor</button>
          <button onClick={()=>alert("Transfer Executorship")}>Transfer Executorship</button>
          <button onClick={()=>alert("Settle Debts")}>Settle Debts</button>
          <button onClick={()=>alert("Distribute Inheritance")}>Distribute Inheritance</button>
        </div>
      </div>
    )
  }
}
