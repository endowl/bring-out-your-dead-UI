import React from 'react';

export default class UserRole extends React.Component {
  constructor(props){
    super(props)
  }


  render(){
      let role = "";

      if(!this.props.role){
        role = "Executor"
      } else {
        role = this.props.role
      }

    return(
      <div className="userRole" style={{
        backgroundColor: "white",
        width: "80vw",
        margin: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <div className="userRole_title">Your Role</div>
        <div className="userRole_role">{role}</div>
      </div>
    )
  }
}
