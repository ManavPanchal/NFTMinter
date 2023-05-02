import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../App";
import { NFTData } from "../../Data/NFTData";

function NFTInstance() {
    const { id } = useParams();
    const Nft = NFTData[id];
    const { setOpenWalletBox, walletConnection, currentConfiguration } = useContext(AppContext);

    useEffect(()=>{
        document.getElementsByClassName("address_input")[0].value = currentConfiguration.address;
    },[currentConfiguration])

    const middleware = async()=>{
        if(!walletConnection){
            setOpenWalletBox(true);
            return;
        }
        if(document.getElementsByClassName("address_input")[0].value === ""){
            window.alert("please add receiver address"); return;
        }
        console.log("minted successfully");
    }

    return (
        <div className="nftInstance my-12 flex m-4 justify-center gap-14 items-center p-4">
            <div className="NFTImage">
                <img src={Nft.image} alt="NFT" className="h-128 rounded-sm" />
            </div>
            <div className="nft_instance_info h-full flex flex-col justify-evenly gap-6">
                <div className="instance_metadata rounded-lg flex flex-col gap-3">
                    <h3 className="text-4xl font-bold relative">{Nft.name} <span className="absolute text-xs">*name</span></h3>
                    <h5 className="text-2xl">{Nft.description}  <span className="absolute text-xs">*description</span></h5>
                </div>
                <div className="minting_proccess rounded-lg w-full flex flex-col">
                    <div className="nft_receiver_address w-full">
                        <p> -- Receiver Address --</p>
                        <input type="text" placeholder="address" className="address_input px-3 w-full rounded-lg focus:outline-none" />
                    </div>
                    <div className="flex justify-between px-1 text-sm mt-5">
                        <p>Minting Cost</p>
                        <p className="mintingCost">0.005 ether</p>
                    </div>
                    <button
                        type="submit"
                        className="text-xl hover:text-blue-600 w-full border border-blue-600 rounded-lg py-2 mt-2"
                        onClick={middleware}
                    >
                        Mint
                    </button>
                </div>
            </div>
        </div>
    );
}

export default NFTInstance;
