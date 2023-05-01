import React from "react";
import { Route, Routes } from "react-router-dom";
import CreatNftConstant from "./CreatNftConstant";
import Home from "./Home";
import NFTListing from "./NFTListing";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nft-listing" element={<NFTListing/>}/>
      <Route path="/mint-nft" element={<CreatNftConstant />} />
    </Routes>
  );
}

export default AppRoutes;
