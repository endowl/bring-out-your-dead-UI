import { ethers, Contract, Wallet, getDefaultProvider } from 'ethers'
import assert from 'assert'
import abi from '../abi/abi'
import contractAddress from '../abi/address'

let provider = new ethers.providers.Web3Provider(window.web3.currentProvider);
const signer = provider.getSigner();
const overrides = {
    gasLimit: 750000
};

const contract = new ethers.Contract(contractAddress, abi, signer)

export async function claimTokenShares(tokenAddress){
    console.log("tokenAddress", typeof tokenAddress, tokenAddress)
    const tx = await contract.claimTokenShares(tokenAddress, overrides)

    return tx;
}
