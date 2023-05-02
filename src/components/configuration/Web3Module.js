import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, polygon } from 'wagmi/chains'

const chains = [arbitrum, mainnet, polygon]
const projectId = 'YOUR_PROJECT_ID'

const { provider } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  provider
})
const ethereumClient = new EthereumClient(wagmiClient, chains)

function App() {
  return (
    <>
      <WagmiConfig client={wagmiClient}>
       
      </WagmiConfig>

      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  )
}
















// import { ethers } from "ethers";
// import Web3Modal from "web3modal";

// const providerOptions = {
//   /* See Provider Options Section */
// };

// const web3Modal = new Web3Modal({
//   network: "mainnet", // optional
//   cacheProvider: true, // optional
//   providerOptions // required
// });

// const instance = await web3Modal.connect();

// const provider = new ethers.providers.Web3Provider(instance);
// const signer = provider.getSigner();











// // useEffect(() => {
//   //   // const tempTrial = async () => {
//   //   //   const providerOptions = {
//   //   //     coinbasewallet: {
//   //   //       package: CoinbaseWalletSDK, // Required
//   //   //       options: {
//   //   //         appName: "My Awesome App",
//   //   //         rpc: "https://eth-mainnet.g.alchemy.com/v2/q6eEDERf1sqFi2--zlvwsTnLGXAzy24C", // Optional if `infuraId` is provided; otherwise it's required
//   //   //         chainId: 1, // Optional. It defaults to 1 if not provided
//   //   //         darkMode: false, // Optional. Use dark theme, defaults to false
//   //   //       },
//   //   //     },
//   //   //     // walletconnect: {
//   //   //     //   package: WalletConnectProvider, // required
//   //   //     //   options: {
//   //   //     //     infuraId: "INFURA_ID", // required
//   //   //     //   },
//   //   //     // },
//   //   //   };

//   //   //   const web3Modal = new Web3Modal({
//   //   //     network: "mainnet", // optional
//   //   //     cacheProvider: true, // optional
//   //   //     providerOptions, // required
//   //   //   });

//   //   //   const instance = await web3Modal.connect();

//   //   //   const provider = new ethers.WebSocketProvider(instance);
//   //   //   const signer = provider.getSigner();
//   //   // };
//   //   // tempTrial();
//   // }, []);















// // import Web3Modal from 'web3modal';

// // import WalletConnectProvider from '@walletconnect/web3-provider';

// // import CoinbaseWalletSDK from '@coinbase/wallet-sdk';
// // import { ethers } from 'ethers';

// // let web3Modal;

// // const customNetworkOptions = {

// //   rpcUrl: 'https://rpc-mainnet.maticvigil.com',

// //   chainId: 137,

// // };

// // const providerOptions = {

// // //   coinbasewallet: {

// // //     package: CoinbaseWalletSDK, // Required
// // //     options: {

// // //       appName: 'uniswap', // Required
// // //       infuraId: process.env.REACT_APP_INFURA_API_KEY, // Required
// // //       rpc: '', // Optional if `infuraId` is provided; otherwise it's required
// // //       chainId: 1, // Optional. It defaults to 1 if not provided
// // //       darkMode: false, // Optional. Use dark theme, defaults to false
// // //     },

// // //   },

// // //   walletconnect: {

// // //     package: WalletConnectProvider, // required
// // //     options: {

// // //       rpc: { 42: process.env.NEXT_PUBLIC_RPC_URL }, // required
// // //     },

// // //   },

// // };

// // if (typeof window !== 'undefined') {

// //   web3Modal = new Web3Modal({

// //     // theme: "dark",
// //     cacheProvider: false,

// //     providerOptions, // required
// //   });

// // }

// // export const getWalletData = async () => {

// //   try {

// //     const web3ModalProvider = await web3Modal.connect();

// //     const provider = new ethers.providers.Web3Provider(web3ModalProvider);

// //     if (typeof window.ethereum !== 'undefined') {

// //       const [account] = await window.ethereum.request({

// //         method: 'eth_requestAccounts',

// //       });

// //       let balance = await provider.getBalance(account);

// //       balance = ethers.utils.formatEther(balance);

// //       const signer = provider.getSigner();

// //       const data = {

// //         currentAccount: account,

// //         accountBalance: balance,

// //         isConnected: account && true,

// //         provider: provider,

// //         signer: signer,

// //       };

// //       return data;

// //     }

// //   } catch (e) {}

// // };