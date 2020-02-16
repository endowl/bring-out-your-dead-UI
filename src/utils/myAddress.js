import { ethers, Contract, Wallet, getDefaultProvider } from 'ethers'
import assert from 'assert'
import abi from '../abi/abi'
import contractAddress from '../abi/address'

let provider = new ethers.providers.Web3Provider(window.web3.currentProvider);

const contract = new ethers.Contract(contractAddress, abi, provider)
let selectedAddress = provider._web3Provider.selectedAddress

export function myAddress(){

  return selectedAddress

}
