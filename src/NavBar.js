import Cookies from "js-cookie";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "./App";
import { applogo } from "./images/images";


function NavBar() {

  const {setOpenWalletBox, setWalletConnection} = useContext(AppContext)
  
  const connectWallet = async () => {
    if (window.ethereum != "undefined") {
      try {
        let accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletConnection(true);
        setOpenWalletBox(false);
        Cookies.set("MetamaskConnection", "true");
      } catch (err) {
        if (err.message == "User rejected the request.") {
          window.alert("User rejected the request to connect wallet");
        }
      }
    }
  };
  return (
    <div className="navbar flex justify-between p-8 px-14">
      <div className="home_navigator flex gap-4 items-center">
        <div className="app_logo">
          <NavLink to={"/"}>
            <img src={applogo} alt="AL" className=" w-10 h-10 rounded" />
          </NavLink>
        </div>
        <div className="app_name text-4xl text-center font-extrabold">
          NFT Minter
        </div>
      </div>
      <div className="wallet_connector">
        <button
          className="ConnectWallet_btn rounded-xl w-60 h-12 text-center text-gray-700 border border-blue-600 "
          onClick={connectWallet}
        >
          Connect Wallet
        </button>
      </div>
    </div>
  );
}

export default NavBar;
