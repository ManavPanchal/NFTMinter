import { createContext, useEffect, useState } from "react";
import "./App.css";
import AppRoutes from "./AppRoutes";
import NavBar from "./components/NavBar";
import WalletBox from "./components/configuration/WalletBox";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AppContext = createContext();

function App() {
  const [openWalletBox, setOpenWalletBox] = useState(false);
  const [walletConnection, setWalletConnection] = useState(false);
  const [currentConfiguration, setConfigurations] = useState({
    address: "",
    chain: "",
    networkId: ""
  });
  const [alert, setAlert] = useState();


  useEffect(() => {
    const setState = async () => {
      if (window.ethereum) {
        window.ethereum.on("accountsChanged", (accounts) => {
          setConfigurations((prevdata) => {return { ...prevdata, address: accounts[0] }})
        });
        window.ethereum.on("chainChanged", (chainId) => {
          setConfigurations((prevdata) => {return { ...prevdata, networkId: chainId }})
        });
      }
      
      if (localStorage.getItem("metamaskConnection") === "true") {
        setWalletConnection(true);
        let account = await window.ethereum.request({ method: "eth_requestAccounts" });
        let temp = window.ethereum;
        setConfigurations((prevVal) => { return { ...prevVal, address: `${account[0]}`, networkId: temp.chainId }});
      }
    }
    setState()
  }, [])

  return (
    <div id="minting_box">
      {alert && <ToastContainer />}
      <AppContext.Provider
        value={{ setOpenWalletBox, walletConnection, setWalletConnection, currentConfiguration, setConfigurations, setAlert }}
      >
        <div className="main">
          <NavBar />
          <AppRoutes />
        </div>
        {openWalletBox && <WalletBox />}
      </AppContext.Provider>
    </div>
  );
}

export default App;