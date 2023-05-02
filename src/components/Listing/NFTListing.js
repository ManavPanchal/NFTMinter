import React from "react";
import { NFTData } from "../../Data/NFTData";
import NFTCard from "./NFTCard";
import "./Listing.css"

function NFTListing() {


    return (
        <div className="listing_box m-9">
            <div className="nft_listing flex flex-wrap overflow-y-scroll scrollbar-hide gap-7 justify-start">
                {NFTData && NFTData.map((ele,index)=>{
                    return <NFTCard key={index} 
                                id={index} 
                                name={ele.name} 
                                image={ele.image} 
                                description={ele.description}
                                type = {ele.type}
                            />
                })}
            </div>
        </div>
    );
}

export default NFTListing;
