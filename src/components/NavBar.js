import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../App";
import { applogo } from "../Data/images/images";


function NavBar() {

  const {setOpenWalletBox, currentConfiguration, walletConnection, setWalletConnection} = useContext(AppContext);

  return (
    <div className="navbar flex justify-between p-8 px-14">
      <div className="home_navigator flex gap-4 items-center">
        <div className="app_logo">
          <NavLink to={"/"}>
            <img src={applogo} alt="AL" className="w-10 h-10 rounded" />
          </NavLink>
        </div>
        <div className="app_name text-4xl text-center font-extrabold">
          NFT Minter
        </div>
      </div>
      <div className="wallet_connector">
        <button
          className="ConnectWallet_btn rounded-xl w-60 h-12 text-center text-gray-700 border border-blue-600 "
          onClick={()=>
            (walletConnection) ? null : setOpenWalletBox(true)
          }
        >
          { currentConfiguration && function(){
                if(currentConfiguration.address !== ""){
                  try {
                    let address = currentConfiguration.address
                    address = `${address.substring(0,4)}...${address.substring(address.length-4)}`
                    return address
                  } catch (error) {
                    console.log(true);
                    localStorage.setItem("metamaskConnection","false");
                    setWalletConnection(false)
                    console.log(error);
                  }
                }
                return "Connect Wallet"
          }()}
        </button>
      </div>
    </div>
  );
}

export default NavBar;
