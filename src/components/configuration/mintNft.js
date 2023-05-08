import { ethers } from "ethers";
import { address, Abi } from '../../Data/ContractData';

export const MintNft = async (to, ipfsUri, walletConnection, setOpenWalletBox) => {
    console.log(ipfsUri);
    if (!walletConnection) {
        setOpenWalletBox(true);
        return;
    }
    if (window.ethereum !== "undefined") {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = await provider.getSigner();
        const contractInastance = new ethers.Contract(address, Abi, signer);
        const tx = await contractInastance.mintNft(to, ipfsUri, "0x46efD46188Ba03C515dcC84aBd935Ba34008c10C", { value: ethers.utils.parseEther("0.05") });
        await tx.wait();
    }
}