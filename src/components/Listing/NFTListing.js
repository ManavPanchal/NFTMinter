import React from "react";
import { categories, NFTData } from "../../Data/NFTData";
import NFTCard from "./NFTCard";
import "./Listing.css";

function NFTListing() {
  //0x38eC372182812091ca1E270f02bcA995707D0B21
  

  return (
    <div className="listing_box m-9">
        <div className="category_box flex justify-around mb-9">
          {categories.map((ele) => {
              return <div className="categories flex p-3 w-56 gap-5 items-center rounded-xl border hover:border-blue-600 border-transparent">
                <img src={ele.image} alt="" className="w-10" />
                <h3 className="category_name text-xl font-medium">{ele.name}</h3>
              </div>;
            })}
        </div>
      <div className="nft_listing gap-7 px-7 overflow-x-scroll scrollbar-hide">
        {NFTData &&
          NFTData.map((ele, index) => {
            return (
              <NFTCard
                key={index}
                id={index}
                name={ele.name}
                image={ele.image}
                description={ele.description}
                type={ele.type}
              />
            );
          })}
      </div>
    </div>
  );
}

export default NFTListing;
