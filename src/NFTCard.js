import React from 'react'
import { applogo, homeImage } from './images/images'

function NFTCard() {
  return (
    <div className="nft_box slide min-w-fit h-fit rounded-lg shadow-lg text-black text-xs flex flex-col gap-3 pb-4">
        <div className="nft_img rounded-lg">
          <img src={homeImage} alt="nftImage" className='rounded-lg w-80 border-blue-600' />
        </div>
        <div className="nft_metadata px-3">
          <p>#03</p>
          <p className="nft_name text-base font-bold">Minted NFT Card</p>
          <p>NFT of a person Minting the nft</p>
        </div>
        <div className="nft_price px-3 text-base font-medium">$23.11</div>
        <div className="nft_owner_info px-3 flex items-center gap-3">
          <img src={applogo} alt="" className="owner_profile rounded-full w-9 h-9"/>
          <div className="owner_address text-base">0xbcc878...02f8</div>
        </div>
      </div>
  )
}

export default NFTCard
