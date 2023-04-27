import React from 'react'
import { NavLink } from 'react-router-dom'
import { applogo } from "./images/images"


function NavBar() {
  return (
    <div className='navbar flex justify-between p-8 px-14'>
      <div className="home_navigator flex gap-4 items-center">
        <div className="app_logo">
          <NavLink to={"/"}>
            <img src={applogo} alt="AL" className=" w-10 h-10 rounded" />
          </NavLink>
        </div>
        <div className="app_name text-4xl text-center font-extrabold">NFT Minter</div>
      </div>
      <div className="wallet_connector">
        <button className='ConnectWallet_btn rounded-xl w-60 h-12 text-center border border-blue-600 '>Connect Wallet</button>
      </div>
    </div>
  )
}

export default NavBar
