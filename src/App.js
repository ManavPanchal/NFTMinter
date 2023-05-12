import { createContext, useEffect, useState } from "react";
import AppRoutes from "./AppRoutes";
import NavBar from "./components/NavBar";
import WalletBox from "./components/configuration/WalletBox";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";

export const AppContext = createContext();

function App() {
  const [openWalletBox, setOpenWalletBox] = useState(false);
  const [walletConnection, setWalletConnection] = useState(false);
  const [currentConfiguration, setConfigurations] = useState({
    address: "",
    chain: "",
    networkId: ""
  });


  useEffect(() => {
    const setState = async () => {
      if (window.ethereum) {
        window.ethereum.on("accountsChanged", (accounts) => {
          if(accounts === []) {
            localStorage.setItem("metamaskConnection","false");
            setWalletConnection(false);
            setConfigurations({ address: "",chain: "",networkId: ""});
            return;
          }
          setConfigurations((prevdata) => { return { ...prevdata, address: accounts[0] } })
        });
        window.ethereum.on("chainChanged", (chainId) => {
          setConfigurations((prevdata) => { return { ...prevdata, networkId: chainId } })
        });
      }

      if (localStorage.getItem("metamaskConnection") === "true") {
        setWalletConnection(true);
        let account = await window.ethereum.request({ method: "eth_requestAccounts" });
        let provider = window.ethereum;
        setConfigurations((prevVal) => { return { ...prevVal, address: `${account[0]}`, networkId: provider.chainId } });
      }
    }
    setState()
  }, [])

  return (
    <div id="minting_box">
      <ToastContainer />
      <AppContext.Provider
        value={{ setOpenWalletBox, walletConnection, setWalletConnection, currentConfiguration, setConfigurations }}
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