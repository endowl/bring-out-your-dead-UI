import { ethers, Contract, Wallet, getDefaultProvider } from 'ethers'
import assert from 'assert'
import abi from '../abi/abi'
import contractAddress from '../abi/address'

let provider = new ethers.providers.Web3Provider(window.web3.currentProvider);

const contract = new ethers.Contract(contractAddress, abi, provider)

export async function getOwner(){
    const owner = await contract.owner()

    return owner;
}
