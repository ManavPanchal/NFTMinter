import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import { Blockchain } from "./walletConfigure"

function ConfigureDropdown() {

    const [currentBlockchain, setCurrentBlockchain] = useState("Ethereum");
    const [currentNetwork, setCurrentNetwork] = useState("Ethereum");
    const { currentConfiguration } = useContext(AppContext);

    const requestToChangeChain = async (chainId) => {
        if (window.ethereum) {
            try {
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: chainId }]
                });
            } catch (error) {
                if (error.code === 4902) {
                    try {
                        await window.ethereum.request({
                            method: 'wallet_addEthereumChain',
                            params: [
                                {
                                    chainId: chainId,
                                    rpcUrl: 'https://polygon-mumbai.infura.io/v3/4458cf4d1689497b9a38b1d6bbf05e78',
                                },
                            ],
                        });
                    } catch (addError) {
                        console.error(addError);
                    }
                }
                console.error(error);
            }
        } else {
            alert('MetaMask is not installed. Please consider installing it: https://metamask.io/download.html');
        }
    }

    useEffect(() => {
        let chainId;
        Blockchain.forEach((ele) => {
            if(ele.name === currentBlockchain){
                ele.networks.forEach((ele) => { 
                    if (ele.name === currentNetwork)chainId = ele.id;
                })
            }
        })
        requestToChangeChain(chainId)
    }, [currentNetwork])

    useEffect(() => {
        if (currentConfiguration.networkId !== "") {
            let index
            const tempBlockchain = Blockchain.filter((ele, i) => {
                let tempele = ele.networks.filter((ele) => {
                    return ele.id === currentConfiguration.networkId;
                })
                if (ele.networks.includes(tempele[0])) index = i;
                return ele.networks.includes(tempele[0]);
            })
            setCurrentBlockchain(tempBlockchain[0].name);
            document.getElementById("blockchainSelector").selectedIndex = index;
        }
    }, [currentConfiguration.networkId])

    const renderNetworkBox = () => {

        let tempBlockchainNetworks = Blockchain.filter(ele => ele.name === currentBlockchain)[0].networks
        return (
            <>
                <select
                    name="networkSelector"
                    id="networkSelector"
                    className="network_selector bg-transparent w-44  h-9 text-center rounded-xl p-2 cursor-pointer"
                    onChange={(event) => { setCurrentNetwork(event.target.value) }}
                >
                    <option value="selectNetwork" className="text-black text-center rounded">
                        -- select network --
                    </option>
                    {tempBlockchainNetworks.map((ele, index) => {
                        try{
                            if (ele.id === currentConfiguration.networkId)
                            document.getElementById("networkSelector").selectedIndex = index + 1
                            return (
                                <option value={ele.name} className="text-black text-center rounded">
                                    {ele.name}
                                </option>
                            )
                        }catch(err){};
                    })}
                </select>
            </>
        )
    }

    return (
        <>
            <select
                name="blockchainSelector"
                id="blockchainSelector"
                className="blockchain_selector bg-transparent w-32  h-9 text-center rounded-xl p-2 cursor-pointer"
                onChange={(event) => {
                    setCurrentBlockchain(event.target.value)
                }}

            >
                <option value="Ethereum" className="text-black text-center rounded">
                    Ethereum
                </option>
                <option value="Polygon" className="text-black text-center">
                    Polygon
                </option>
                <option value="Binance" className="text-black text-center">
                    Binance
                </option>
            </select>
            {currentBlockchain && renderNetworkBox()}
        </>
    );
}

export default ConfigureDropdown;
