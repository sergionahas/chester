//Auction Spawner
// SPDX-License-Identifier: MIT

import '../interfaces/englishInterface.sol';
import './english.sol';
import './multibid.sol';


pragma solidity ^0.8.0;

contract auctionSpawner{

    uint256 public genesis = block.timestamp;
    address public mostRecentListing;

    function createAuction(uint256 minimumBid, uint256 duration, address payable admin) external returns(address){
        require(duration <= 604800, "Auctions cannot run for more than a week");
        EnglishAuction newAuction = new EnglishAuction(minimumBid, duration, admin);
        emit auctionCreated(minimumBid, duration, admin);
        mostRecentListing = address(newAuction);
        return address(newAuction);
    }

    event auctionCreated(uint256 minimumBid, uint256 duration, address payable admin);
}

