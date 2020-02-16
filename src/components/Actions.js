import React from 'react';
import AddBeneficiary from './modals/AddBeneficiary'
import ChangeBeneficiaryAddress from './modals/ChangeBeneficiaryAddress'
import ChangeOracle from './modals/ChangeOracle'
import ImNotDead from './modals/ImNotDead'
import RemoveBeneficiary from './modals/RemoveBeneficiary'
import AppointExecutor from './modals/AppointExecutor'
import TransferExecutorship from './modals/TransferExecutorship'
import SettleDebts from './modals/SettleDebts'
import DistributeInheritance from './modals/DistributeInheritance'
import AddTrackedToken from './modals/AddTrackedToken'
import RemoveTrackedToken from './modals/RemoveTrackedToken'
import TransferOwnership from './modals/TransferOwnership'
import ClaimEthShares from './modals/ClaimEthShares'
import ClaimTokenShares from './modals/ClaimTokenShares'
import BringOutYourDead from './modals/BringOutYourDead'
import ChangeBeneficiaryShares from './modals/ChangeBeneficiaryShares'

export default class Actions extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      modal: null
    }
    this.hide = this.hide.bind(this)
  }

  hide = () => {
    this.setState({modal: null})
  }

  render(){
    return(
      <div className="actions" style={{
        backgroundColor: "white",
        width: "80vw",
        margin: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
        <div className="actions_title">Possible Actions</div>
        <div className="actions_buttons" style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
        >
          {/* Add Beneficiary Button */}
          {(this.props.role === "Owner" || this.props.role === "Executor") &&
            <button onClick={()=>{
              if(this.state.modal !== "AddBeneficiary"){
                this.setState({modal:"AddBeneficiary"})
              } else { this.setState({modal:null})}
              }}>
              Add Beneficiary
            </button>
          }
          {this.state.modal === "AddBeneficiary" && <AddBeneficiary hide={this.hide}/>}

          {/* Change Beneficiary Button */}
          <button onClick={()=>{
            if(this.state.modal !== "ChangeBeneficiaryAddress"){
              this.setState({modal:"ChangeBeneficiaryAddress"})
            } else { this.setState({modal:null})}
          }}>
            Change Beneficiary Address
          </button>
          {this.state.modal === "ChangeBeneficiaryAddress" && <ChangeBeneficiaryAddress hide={this.hide}/>}


          {/* Change Oracle Button */}
          {this.props.role === "Owner" &&
            <button onClick={()=>{
              if(this.state.modal !== "ChangeOracle"){
                this.setState({modal:"ChangeOracle"})
              } else { this.setState({modal:null})}
            }}>
              Change Oracle
            </button>
          }
          {this.state.modal === "ChangeOracle" && <ChangeOracle hide={this.hide}/>}

          {/* I'm Not Dead Yet Button */}
          {this.props.role === "Owner" &&
            <button onClick={()=>{
              if(this.state.modal !== "ImNotDead"){
                this.setState({modal:"ImNotDead"})
              } else { this.setState({modal:null})}
            }}>
              I'm Not Dead Yet!
            </button>
          }
          {this.state.modal === "ImNotDead" && <ImNotDead hide={this.hide}/>}

          {/* Remove Beneficiary Button */}
          {(this.props.role === "Owner" || this.props.role === "Executor") &&
            <button onClick={()=>{
              if(this.state.modal !== "RemoveBeneficiary"){
                this.setState({modal:"RemoveBeneficiary"})
              } else { this.setState({modal:null})}
            }}>
              Remove Beneficiary
            </button>
          }
          {this.state.modal === "RemoveBeneficiary" && <RemoveBeneficiary hide={this.hide}/>}

          {/* Appoint Executor Button */}
          {this.props.role === "Owner" &&
            <button onClick={()=>{
              if(this.state.modal !== "AppointExecutor"){
                this.setState({modal:"AppointExecutor"})
              } else { this.setState({modal:null})}
            }}>
              Appoint Executor
            </button>
          }
          {this.state.modal === "AppointExecutor" && <AppointExecutor hide={this.hide}/>}

          {/* Transfer Executorship Button */}
          {(this.props.role === "Owner" || this.props.role === "Executor") &&
            <button onClick={()=>{
              if(this.state.modal !== "TransferExecutorship"){
                this.setState({modal:"TransferExecutorship"})
              } else { this.setState({modal:null})}
            }}>
              Transfer Executorship
            </button>
          }
          {this.state.modal === "TransferExecutorship" && <TransferExecutorship hide={this.hide}/>}


          {/* Settle Debts Button */}
          {(this.props.role === "Owner" || this.props.role === "Executor") &&
            <button onClick={()=>{
              if(this.state.modal !== "SettleDebts"){
                this.setState({modal:"SettleDebts"})
              } else { this.setState({modal:null})}
            }}>
              Settle Debts
            </button>
          }
          {this.state.modal === "SettleDebts" && <SettleDebts hide={this.hide}/>}


          {/* Distribute Inheritance Button */}
          {this.props.role === "Executor" &&
            <button onClick={()=>{
              if(this.state.modal !== "DistributeInheritance"){
                this.setState({modal:"DistributeInheritance"})
              } else { this.setState({modal:null})}
            }}>
              Distribute Inheritance
            </button>
          }
          {this.state.modal === "DistributeInheritance" && <DistributeInheritance hide={this.hide}/>}

          {/* Add Tracked Token Button */}
          {(this.props.role === "Owner" || this.props.role === "Executor") &&
            <button onClick={()=>{
              if(this.state.modal !== "AddTrackedToken"){
                this.setState({modal:"AddTrackedToken"})
              } else { this.setState({modal:null})}
              }}>
              Track a token
            </button>
          }
          {this.state.modal === "AddTrackedToken" && <AddTrackedToken hide={this.hide}/>}

          {/* Remove Tracked Token Button */}
          {(this.props.role === "Owner" || this.props.role === "Executor") &&
            <button onClick={()=>{
              if(this.state.modal !== "RemoveTrackedToken"){
                this.setState({modal:"RemoveTrackedToken"})
              } else { this.setState({modal:null})}
              }}>
              Stop tracking a token
            </button>
          }
          {this.state.modal === "RemoveTrackedToken" && <RemoveTrackedToken hide={this.hide}/>}

          {/* Claim Eth Shares Button */}
          {this.props.role === "Beneficiary" &&
            <button onClick={()=>{
              if(this.state.modal !== "ClaimEthShares"){
                this.setState({modal:"ClaimEthShares"})
              } else { this.setState({modal:null})}
              }}>
              Claim Ether Shares
            </button>
          }
          {this.state.modal === "ClaimEthShares" && <ClaimEthShares hide={this.hide}/>}


          {/* Claim Token Shares Button */}
          {this.props.role === "Beneficiary" &&
            <button onClick={()=>{
              if(this.state.modal !== "ClaimTokenShares"){
                this.setState({modal:"ClaimTokenShares"})
              } else { this.setState({modal:null})}
              }}>
              Claim Token Shares
            </button>
          }
          {this.state.modal === "ClaimTokenShares" && <ClaimTokenShares hide={this.hide}/>}


          {/* Transfer Ownership Button */}
          {this.props.role === "Owner" &&
            <button onClick={()=>{
              if(this.state.modal !== "TransferOwnership"){
                this.setState({modal:"TransferOwnership"})
              } else { this.setState({modal:null})}
              }}>
              Transfer Ownership
            </button>
          }
          {this.state.modal === "TransferOwnership" && <TransferOwnership hide={this.hide}/>}

          {/* Bring Out Your Dead Button */}
          <button onClick={()=>{
            if(this.state.modal !== "BringOutYourDead"){
              this.setState({modal:"BringOutYourDead"})
            } else { this.setState({modal:null})}
            }}>
            Bring Out Your Dead
          </button>
          {this.state.modal === "BringOutYourDead" && <BringOutYourDead hide={this.hide}/>}

          {/* Change Benneficiary Shares Button */}
          {(this.props.role === "Owner" || this.props.role === "Executor") &&
            <button onClick={()=>{
              if(this.state.modal !== "ChangeBeneficiaryShares"){
                this.setState({modal:"ChangeBeneficiaryShares"})
              } else { this.setState({modal:null})}
              }}>
              Change Beneficiary Shares
            </button>
          }
          {this.state.modal === "ChangeBeneficiaryShares" && <ChangeBeneficiaryShares hide={this.hide}/>}


        </div>
      </div>
    )
  }
}
