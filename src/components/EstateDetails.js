import React from 'react';

export default class EstateDetails extends React.Component {

  render(){
    return(
      <div className="estateDetails" style={{
        backgroundColor: "white",
        width: "80vw",
        margin: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between"

      }}>
        <div className="estateDetails_title">Estate Details</div>
        <div className="estateDetails_decedantName">
          {!this.props.owner
            ? "loading..."
            : this.props.owner.substr(0,6) + "..." + this.props.owner.substr(38)
          }
        </div>
        <div className="estateDetails_posessions">Registered assets in estate</div>
        <div className="estateDetails_defiDebts">DeFi Debts</div>
      </div>
    )
  }
}
