import { createContext, useState } from "react";
import "./App.css";
import AppRoutes from "./AppRoutes";
import NavBar from "./components/NavBar";
import WalletBox from "./components/configuration/WalletBox";

export const AppContext = createContext();

function App() {
  const [openWalletBox, setOpenWalletBox] = useState(false);
  const [walletConnection, setWalletConnection] = useState(false);
  const [currentConfiguration, setConfigurations] = useState({
      address:"",
      chain:"",
      networkId:""
  });

  return (
    <div id="minting_box">
      <AppContext.Provider
        value={{ setOpenWalletBox, walletConnection, setWalletConnection, currentConfiguration, setConfigurations }}
      >
        <div className="main">
          <NavBar />
          <AppRoutes />
        </div>
        {openWalletBox && <WalletBox/>}
      </AppContext.Provider>
    </div>
  );
}

export default App;