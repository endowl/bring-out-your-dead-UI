import { ethers, Contract, Wallet, getDefaultProvider } from 'ethers'
import assert from 'assert'
import abi from '../abi/abi'
import contractAddress from '../abi/address'

let provider = new ethers.providers.Web3Provider(window.web3.currentProvider);

const contract = new ethers.Contract(contractAddress, abi, provider)

export async function getRole(){
    let role

    let executor = await contract.executor()
    let owner = await contract.owner()
    let selectedAddress = provider._web3Provider.selectedAddress
    let beneficiaryShares = await contract.beneficiaryShares(selectedAddress)

    switch(true){
        case executor.toLowerCase() === selectedAddress.toLowerCase():
            role = "Executor"
            break;
        case beneficiaryShares > 0:
            role = "Beneficiary"
            break;
        case owner.toLowerCase() === selectedAddress.toLowerCase():
            role = "Owner"
            break;
        default:
            role = "No role detected"
    }

    return role;
}
