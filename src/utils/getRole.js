import { ethers, Contract, Wallet, getDefaultProvider } from 'ethers'
import assert from 'assert'
import abi from '../abi/abi'

// const provider = getDefaultProvider('ropsten')
let provider = new ethers.providers.Web3Provider(window.web3.currentProvider);

// const wallet = new Wallet(privateKey, provider)

const contractAddress = "0xdac3794d1644D7cE73d098C19f33E7e10271b2bC"

const contract = new ethers.Contract(contractAddress, abi, provider)

export async function getRole(){
    let role

    let executor = await contract.executor()

    console.log(executor)
    console.log(provider._web3Provider.selectedAddress)
    executor.toLowerCase() === provider._web3Provider.selectedAddress.toLowerCase()
    ? role = "Executor"
    : role = "none"

    return role;
}
