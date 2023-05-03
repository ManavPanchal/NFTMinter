import { ethers } from "ethers";
import {address,Abi} from '../../Data/ContractData';

export const MintNft = async(to,setOpenWalletBox,
    walletConnection)=>{


    if(!walletConnection){
        setOpenWalletBox(true);
        return;
    }
    if(window.ethereum != "undefined"){
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = await provider.getSigner();
        const contractInastance = new ethers.Contract(address,Abi,signer);
        console.log(true, to);
        const tx = await contractInastance.mintNft(to,"ipfs://QmQHkpbGaTSzGwToqXJbHZbd8iPtV7gGa7gsacsKVeZbV8","0xf32D14b896935Ec05F08A27B16495DF367f0eEC5",{value: ethers.utils.parseEther("0.05")});
        console.log(tx);
    }
}