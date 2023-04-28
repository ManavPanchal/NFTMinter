import React, { useEffect, useState } from "react";
import { Blockchain } from "./walletConfigure"

function ConfigureDropdown() {

    const [currentBlockchain, setCurrentBlockchain] = useState("Ethereum");

    const renderNetworkBox = () => {

        let tempBlockchainNetworks = Blockchain.filter((ele) => { return ele.name == currentBlockchain })[0].networks
        return (
            <>
                <select
                    name="networkSelector"
                    id=""
                    className="network_selector bg-transparent w-32  h-9 text-center rounded-xl p-2 cursor-pointer"
                >
                    {currentBlockchain && tempBlockchainNetworks.map((ele) => {
                        return (
                            <option value={ele.name} className="text-black text-center rounded">
                                {ele.name}
                            </option>
                        )
                    })}
                </select>
            </>
        )
    }

    return (
        <>
            <select
                name="blockchainSelector"
                id=""
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
