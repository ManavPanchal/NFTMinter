import { useState } from 'react';
import { Routes } from 'react-router-dom';
import './App.css';
import AppRoutes from './AppRoutes';
import CreatNftConstant from './CreatNftConstant';
import NavBar from './NavBar';

function App() {
  
  const [tokenMetaData, setTokenMetaData] = useState({});
  const [openWalletBox, setOpenWalletBox] = useState(false)

  const popUpWalletBox = ()=>{}
  
  return (
    <div id="minting_box">
      <div className="main">
      <NavBar/>
      <AppRoutes/>
      </div>
      {
        openWalletBox && popUpWalletBox()
      }
    </div>
  );
}

export default App;
