import React from 'react'
import { ethers } from 'ethers'

import Actions from './Actions'
import EstateDetails from './EstateDetails'
import UserRole from './UserRole'

import { getOwner } from '../utils/getOwner'
import { getRole } from '../utils/getRole'
import { myAddress } from '../utils/myAddress'
import { trackedTokens } from '../utils/trackedTokens'


export default class Container extends React.Component {
  constructor(props){
    super(props)
    this.state={
      data: [],
      owner: null,
      address: null,
      role: null,
      trackedTokens: null,
      error: null,
    }
  }

  componentDidMount(){
    const provider = new ethers.providers.Web3Provider(window.web3.currentProvider);
    const signer = provider.getSigner();

    console.log("provider:", provider)
    console.log("signer:", signer)

    let selectedAddress = myAddress()
    this.setState({
      address: selectedAddress
    })
    trackedTokens().then((res)=>{

      console.log("tokenAddresses", res)
      this.setState({
        trackedTokens: res
      })
    }).catch((err)=>alert(err.message))

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
        <EstateDetails owner={this.state.owner} trackedTokens={this.state.trackedTokens}/>
        <UserRole role={this.state.role}/>
        <Actions role={this.state.role} address={this.state.address} trackedTokens={this.state.trackedTokens}/>
      </div>
    )
  }
}
