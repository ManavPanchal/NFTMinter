import React from "react";
import { Route, Routes } from "react-router-dom";
import CreatNftConstant from "./components/CreatNftConstant";
import Home from "./components/Home";
import NFTInstance from "./components/Listing/NFTInstance";
import NFTListing from "./components/Listing/NFTListing";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nft-listing" element={<NFTListing/>}/>
      <Route path="/mint-nft" element={<CreatNftConstant />} />
      <Route path="/nft-instance/:id" element={<NFTInstance/>}/>
    </Routes>
  );
}

export default AppRoutes;
