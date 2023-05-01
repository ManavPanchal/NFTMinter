import React from "react";
import NFTCard from "./NFTCard";

function NFTListing() {


    const slide = document.querySelectorAll(".slide");
    let count = 0;
    slide.forEach((ele, index) => {
        // ele.style.left = `${index * 25}%`
    })

    const transform = () => {
        slide.forEach((ele) => {
            ele.style.transform = `translateX(-${count * 25}%)`
        })
    }

    function goPrev() {
        count--;
        transform();
    }

    function goNext() {
        count++;
        transform();
    }

    return (
        <div className="listing_box">
            <div className="nft_listing slider flex items-center gap-6 m-11">
                <button onClick={goPrev} id="pre_btn" className="nav_btn">
                    <svg width="14.6" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="">
                        <path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
                            className="FXox6K"></path>
                    </svg>
                </button>
                <NFTCard />
                <NFTCard />
                <NFTCard />
                <NFTCard />
                <NFTCard />
                <NFTCard />
                <NFTCard />
                <NFTCard />
                <NFTCard />
                <button onClick={goNext} id="next_btn" className="nav_btn">
                    <svg width="14.6" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg"
                        className="_2-wzdc">
                        <path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
                            className="FXox6K"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default NFTListing;
