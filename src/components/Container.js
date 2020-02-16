import React from 'react'
import Actions from './Actions'
import EstateDetails from './EstateDetails'
import UserRole from './UserRole'


export default class Container extends React.Component {

  render(){
    return(
      <div
        className="container"
        style={{
        backgroundColor: "blue",
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
        <EstateDetails/>
        <UserRole/>
        <Actions/>
      </div>
    )
  }
}
