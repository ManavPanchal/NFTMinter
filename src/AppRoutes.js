import React from "react";
import { Route, Routes } from "react-router-dom";
import CreatNftConstant from "./CreatNftConstant";
import Home from "./Home";
import WalletBox from "./WalletBox";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mint-nft" element={<CreatNftConstant />} />
    </Routes>
  );
}

export default AppRoutes;
