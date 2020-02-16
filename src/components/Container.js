import React from 'react'
import { ethers } from 'ethers'

import Actions from './Actions'
import EstateDetails from './EstateDetails'
import UserRole from './UserRole'

import { getOwner } from '../utils/getOwner'
import { getRole } from '../utils/getRole'


export default class Container extends React.Component {
  constructor(props){
    super(props)
    this.state={
      data: [],
      owner: null,
      role: null,
      error: null,
    }
  }

  componentDidMount(){
    const provider = new ethers.providers.Web3Provider(window.web3.currentProvider);
    const signer = provider.getSigner();

    console.log("provider:", provider)
    console.log("signer:", signer)

    getOwner().then((res) => {
      this.setState({
        owner: res
      })
    })

    getRole().then((res) => {
        this.setState({
          role: res
        })
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
        <EstateDetails owner={this.state.owner}/>
        <UserRole role={this.state.role}/>
        <Actions role={this.state.role}/>
      </div>
    )
  }
}
