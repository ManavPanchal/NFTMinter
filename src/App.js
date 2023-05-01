import { createContext, useEffect, useState } from "react";
import "./App.css";
import AppRoutes from "./AppRoutes";
import NavBar from "./NavBar";
import WalletBox from "./WalletBox";

export const AppContext = createContext();

function App() {
  const [tokenMetaData, setTokenMetaData] = useState({});
  const [openWalletBox, setOpenWalletBox] = useState(false);
  const [walletConnection, setWalletConnection] = useState(false);


  const popUpWalletBox = () => {
    return <WalletBox />;
  };

  return (
    <div id="minting_box">
      <AppContext.Provider
        value={{ setOpenWalletBox, walletConnection, setWalletConnection }}
      >
        <div className="main">
          <NavBar />
          <AppRoutes />
        </div>
        {openWalletBox && popUpWalletBox()}
      </AppContext.Provider>
    </div>
  );
}

export default App;
















    // if(Cookies.get("MetamaskConnection") == "true"){
    //   setOpenWalletBox(false);
    //   setWalletConnection(true);
    // }
    // if(window) console.log(window.ethereum);
    // console.log(getWalletData());