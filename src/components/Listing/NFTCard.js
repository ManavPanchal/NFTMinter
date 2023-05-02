import React from "react";
import { Link } from "react-router-dom";

function NFTCard({ id, name, image, description, type }) {
  return (
    <Link to={`/nft-instance/${id}`}>
      <div className="nft_box min-w-fit h-fit relative rounded-lg shadow-lg text-black text-xs flex flex-col gap-3 pb-4">
        <div className="nft_img rounded-lg">
          <img
            src={image}
            alt="nftImage"
            className="rounded-lg w-80 border-blue-600"
          />
        </div>
        <div className="nft_metadata px-3">
          <p className="nft_name text-base font-bold">{name}</p>
          <p>{description}</p>
        </div>
        <div className="nftType absolute top-2 left-2 p-2 px-8 rounded-2xl text-base ">
          <p>{type}</p>
        </div>
      </div>
    </Link>
  );
}

export default NFTCard;
