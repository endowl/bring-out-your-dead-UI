import React from 'react'
import Actions from './Actions'
import EstateDetails from './EstateDetails'
import UserRole from './UserRole'

import { ethers } from 'ethers'

import { getRole } from '../utils/getRole'

export default class Container extends React.Component {
  constructor(props){
    super(props)
    this.state={
      data: [],
      role: null,
      error: null,
    }
  }

  componentDidMount(){
    const provider = new ethers.providers.Web3Provider(window.web3.currentProvider);
    const signer = provider.getSigner();

    console.log("provider:", provider)
    console.log("signer:", signer)

    getRole().then((value) => {
        console.log(value);
    });
  }

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
