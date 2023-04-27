import { Tooltip } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { infoIcon } from "./images/images";
import { Blockchain } from "./walletConfigure";

function CreatNftConstant() {
  const [tokenAddress, setTokenAddress] = useState(0x0);
  const [tokenName, setTokenName] = useState("");
  const [tokenImage, setTokenImage] = useState();

  const fileInputRef = useRef();

  useEffect(() => {
    console.log(tokenImage);
  }, [tokenImage]);

  return (
    <div className="main flex justify-center items-center h-full">
      <div className="header text-7xl font-bold text-center py-8 mx-20 border-b border-b-black ">
        Mint NFT
      </div>
      <div className="mint_box mx-16 p-10 flex flex-col gap-9">
        <div className="wallet_network_box">
          <div className="configuration_box">
            <div className="">
              <div className="inital_selector w-44 text-center border border-blue-600 p-3 cursor-pointer rounded-lg">--select Blockchain--</div>
              <div className="blockchain_selector max-w-fit rounded-lg">
                {Blockchain && Blockchain.map((ele, index) => {
                  return <p className="blockchains w-44 text-center p-3 cursor-pointer hover:border-blue-600 hover:border hover:rounded-xl" onClick={() => { console.log(ele.name) }}>{ele.name}</p>
                })}
              </div>
            </div>

          </div>
          {/* <select name="" id="" className="blockchain_selector bg-transparent w-32 text-center rounded-xl p-2">
            <option value="eth">Ethereum</option>
            <option value="poly">Polygon</option>
            <option value="Bin">Binance</option>
          </select> */}
        </div>
        <div className="minting_note">
          * Please fill the Input fields and choose image carefully as it is
          immutable after succesfully minted and the field with
          <span className=" text-red-500 text-lg"> * </span> is mendatory feilds
        </div>
        <div className="flex flex-col gap-3 token_address">
          <label htmlFor="tokenAddress_input" className="flex gap-1 text-xl">
            Token Address
            <span>*</span>
            <sub>
              <Tooltip title="Add" placement="right-end">
                {infoIcon()}
              </Tooltip>
            </sub>
          </label>
          <input
            className="rounded px-3"
            type="text"
            name="tokenAddress"
            onChange={(event) => setTokenAddress(event.target.value)}
          />
        </div>
        <div className="flex flex-col gap-3 token_name">
          <label htmlFor="tokenName_input_input" className="flex gap-1 text-xl">
            Token Name
            <span>*</span>
            <sub>
              <Tooltip title="Add" placement="right-end">
                {infoIcon()}
              </Tooltip>
            </sub>
          </label>
          <input
            className="rounded px-3"
            type="text"
            name="tokenName_input"
            onChange={(event) => setTokenAddress(event.target.value)}
          />
        </div>
        <div className="flex flex-col gap-3 toke_id">
          <label htmlFor="tokeId_input" className="flex gap-1 text-xl">
            Token Id
            <span>*</span>
            <sub>
              <Tooltip title="Add" placement="right-end">
                {infoIcon()}
              </Tooltip>
            </sub>
          </label>
          <input
            className="rounded px-3"
            type="number"
            name="tokenId_input"
            onChange={(event) => setTokenImage(event.target.value)}
          />
        </div>
        <div className="flex flex-col gap-3 token_image">
          <label htmlFor="tokenImage_input" className="flex gap-1 text-xl">
            Token Image
            <span>*</span>
            <sub>
              <Tooltip title="Add" placement="right-end">
                {infoIcon()}
              </Tooltip>
            </sub>
          </label>
          <input
            ref={fileInputRef}
            className="rounded px-3"
            type="file"
            name="tokenImage_input"
            onChange={(event) => setTokenImage(event.target.files[0].name)}
            hidden
          />
          <button
            className="file_input w-28 h-28 rounded-xl flex justify-center items-center text-3xl"
            onClick={() => {
              fileInputRef.current.click();
            }}
          >
            {" "}
            +{" "}
          </button>
          <div className="image_name">{tokenImage && tokenImage}</div>
        </div>
      </div>
    </div>
  );
}

export default CreatNftConstant;
