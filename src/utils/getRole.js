import { ethers, Contract, Wallet, getDefaultProvider } from 'ethers'
import assert from 'assert'
import abi from '../abi/abi'

// const provider = getDefaultProvider('ropsten')
let provider = new ethers.providers.Web3Provider(window.web3.currentProvider);

// const wallet = new Wallet(privateKey, provider)

const contractAddress = "0xdac3794d1644D7cE73d098C19f33E7e10271b2bC"

const contract = new ethers.Contract(contractAddress, abi, provider)

// async function increment() {
export async function getRole(){
    console.log("Is abi an array?", Array.isArray(abi))

    // Call the contract, getting back the transaction
    // let tx = await contract.increment()
    let tx = await contract.executor()

    // Wait for the transaction to have 2 confirmations.
    // See the note below on "Economic Value" for considerations
    // regarding the number of suggested confirmations
    // let receipt = await tx.wait(2)

    // The receipt will have an "events" Array, which will have
    // the emitted event from the Contract. The "Return(uint256)"
    // call is the last event.
    // let sumEvent = receipt.events.pop()

    // Not necessary; these are just for the purpose of this
    // example
    // assert.equal(sumEvent.event, 'Return')
    // assert.equal(sumEvent.eventSignature, 'Return(uint256)')

    // The sum is the first (and in this case only) parameter
    // in the "Return(uint256 sum)" event
    // let sum = sumEvent.args[0]

    // return sum
    return tx;
}
