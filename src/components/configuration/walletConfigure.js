import {
    coinbaseWalletImage,
    metamaskWalletImage,
    exodusWalletImage,
    trustWalletImage,
  } from "../../Data/images/images";

export const Blockchain = [
    {
        name:"Ethereum",
        networks:[
            {
                name:"mainnet",
                id:"0x1"
            },
            {
                name:"goerli",
                id:"0x5"
            },
            {
                name:"Sepolia",
                id:"0xaa36a7"
            }
        ]
    },
    {
        name:"Polygon",
        networks:[
            {
                name:"mainnet",
                id:"0x89"
            },
            {
                name: "mumbai",
                id:"0x13881"
            }
        ]
    },
    {
        name:"Binance",
        networks:[
            {
                name:"mainnet",
                id:"0x38"
            },
            {
                name:"BNB testnet",
                id:"0x61"
            }
        ]
    }
]

export const wallets = [
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