// this page is currently in use of our web flow but will be useful in future

import { Tooltip } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { useRef } from "react";
import { useState } from "react";
import { AppContext } from "../App";
import ConfigureDropdown from "./configuration/ConfigureDropdown";
import { infoIcon } from "../Data/images/images";

function CreatNftConstant() {
  const [tokenAddress, setTokenAddress] = useState(0x0);
  const [tokenMetadata, setTokenMetadata] = useState({});
  const [tokenImage, setTokenImage] = useState();
  const {setOpenWalletBox, walletConnection} = useContext(AppContext)

  const fileInputRef = useRef();

  if(!walletConnection) setOpenWalletBox(true);

  return (
    <div className="main flex justify-center items-center h-full">
      <div className="header text-7xl font-bold text-center py-8 mx-20 border-b border-b-black ">
        Mint NFT
      </div>
      <div className="mint_box mx-16 p-10 flex flex-col gap-9">
        <div className="configuration_box flex items-center justify-between">
          <ConfigureDropdown/>
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
              <Tooltip title=" This refers to the address location of the actual token contract that manages the logic to creat NFT." placement="right-end">
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
            onChange={(event) => setTokenMetadata((prevVal)=>{
              return {
                ...prevVal,
                name:event.target.value
              }
            })}
          />
        </div>
        <div className="flex flex-col gap-3 token_id">
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
            onChange={(event) => setTokenMetadata((prevVal)=>{
              return {
                ...prevVal,
                id:event.target.value
              }
            })}
          />
        </div>
        <div className = "flex flex-col gap-3 token_image">
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
            onChange={(event) => setTokenImage(event.target.files)}
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
        <div className="flex flex-col gap-3 extra_metadata">
          <label htmlFor="tokeId_input" className="flex gap-1 text-xl">
            data name
            <span>*</span>
          </label>
          <input
            className="rounded px-3"
            type="number"
            name="extraMetadata"
          />
        </div>
        <button className='mint_btn w-full h-14 text-x text-gray-700 font-bold rounded-xl text-center border border-blue-600'>Mint NFT</button>
      </div>
    </div>
  );
}

export default CreatNftConstant;
