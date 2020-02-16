import { ethers, Contract, Wallet, getDefaultProvider } from 'ethers'
import assert from 'assert'
import abi from '../abi/abi'
import contractAddress from '../abi/address'

let provider = new ethers.providers.Web3Provider(window.web3.currentProvider)
const contract = new ethers.Contract(contractAddress, abi, provider)
// const signer = provider.getSigner();
// const overrides = {
//     gasLimit: 750000
// };

export async function trackedTokens(){
    let tokenAddress = ''
    let trackedAddresses = []
    try{
        for(let i = 0; tokenAddress !== '0x0000000000000000000000000000000000000000'; i++){
            tokenAddress = await contract.trackedTokens(i)
            console.log("tokenAddress in trackedTokens.js", tokenAddress)
            if (tokenAddress === '0x0000000000000000000000000000000000000000'){break;}
            trackedAddresses.push(tokenAddress)
        }
    }catch{
        return trackedAddresses
    }
    return trackedAddresses;
}
