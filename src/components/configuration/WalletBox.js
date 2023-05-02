import React, {useContext } from "react";
import { AppContext } from "../../App";
import Cookies from "js-cookie";
import {
  coinbaseWalletImage,
  metamaskWalletImage,
  exodusWalletImage,
  trustWalletImage,
} from "../../images/images";


function WalletBox() {
  const {
    setOpenWalletBox,
    setWalletConnection,
    setConfigurations,
  } = useContext(AppContext);

  const wallets = [
    {
      name: "Meta Mask",
      image: metamaskWalletImage,
    },
    {
      name: "CoinBase ",
      image: coinbaseWalletImage,
    },
    {
      name: "Trust Wallet",
      image: trustWalletImage,
    },
    {
      name: "Exodus Wallet",
      image: exodusWalletImage,
    },
  ];

  const setStates = (accounts) => {
    setWalletConnection(true);
    setConfigurations((prevdata) => {
      return {
        ...prevdata,
        address: accounts[0],
      };
    });
    setOpenWalletBox(false);
  };

  const connectWallet = async () => {
    if (window.ethereum !== "undefined") {
      try {
        let accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setStates(accounts);

        window.ethereum.on("accountsChanged", (accounts) => {
            setConfigurations( (prevdata)=> {
              return {...prevdata, address:accounts[0]}
            })
        });

        window.ethereum.on("chainChanged", (chainId) => {
              setConfigurations((prevdata)=>{
                return {...prevdata, netWorkId:chainId}
              })
          })

        Cookies.set("MetamaskConnection", "true");
      } catch (err) {
        if (err.message === "User rejected the request.") {
          window.alert("User rejected the request to connect wallet");
        }
      }
    }
  };

  return (
    <div className="w-full h-full absolute top-0 bg-slate-950 bg-opacity-60">
      <div className="wallet_box bg-white rounded-lg min-w-fit h-fit p-8 flex gap-5 justify-center items-center">
        <div className="wallet_info max-w-2xl w-96 mx-8">
          <h2 className=" text-4xl text-center font-bold">Connect Wallet</h2>
          <p className=" text-lg text-center tracking-wider mt-4 text-slate-500">
            Link your wallet and account to continue what you are doing
          </p>
        </div>
        <div className="wallets p-3 py-10 rounded-xl">
          {wallets &&
            wallets.map((ele) => {
              return (
                <div
                  className="web3_wallet p-8 flex items-center w-96 h-24 rounded-xl justify-start hover:border hover:cursor-pointer hover:border-blue-600"
                  onClick={connectWallet}
                >
                  <div className="wallet_img ">
                    <img
                      src={ele.image}
                      alt="wallet Icon"
                      className=" w-16 h-16 rounded"
                    />
                  </div>
                  <div className="wallet_name ml-5">
                    <p className="text-2xl">{ele.name}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default WalletBox;
