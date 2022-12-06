 // sets up web3.js
const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

// =============================================================================
//         ABIs and Contract Addresses: Paste Your ABIs/Addresses Here
// =============================================================================

///THESE ARE HARDCODED FOR NOW
// const english_address = '0xBd1945E5e7f0Db91dcFbb4b48813b11694D3e008';
const english_abi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_minimumBid",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_duration",
				"type": "uint256"
			},
			{
				"internalType": "address payable",
				"name": "_admin",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "admin",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "approveThirdParty",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "_thirdParty",
				"type": "address"
			}
		],
		"name": "bid",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "cashOut",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "currentHighestBid",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "duration",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "endAuction",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "highestBid",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "minimumBid",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "signToPay",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "signToWithdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "startTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "thirdParty",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "winner",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdrawBid",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	}
];
const multibid_address = '0x1987Fef2384e56C1cb9206Dc32993A59765BC500'
const multibid_abi =  [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "auction",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "_currentAuction",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "addValue",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "auctionOptions",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "auctions",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "listingIds",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "listingOptions",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "listings",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "format",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "minPrice",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "duration",
				"type": "uint256"
			}
		],
		"name": "proposeNewListing",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "thirdParty",
				"type": "address"
			}
		],
		"name": "proposeThirdParty",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "listingID",
				"type": "uint256"
			}
		],
		"name": "retractNewVoteListing",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "retractVoteApproveSubmittedThirdParty",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "thirdParty",
				"type": "address"
			}
		],
		"name": "retractVoteThirdParty",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "retractVoteToPay",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "retractVoteToWithdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "seeMyStake",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "submitApprovalThirdParty",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "thirdParty",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "submitBid",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "submitCashOut",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "submitSigPay",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "submitSigWithdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "submitWithdrawBid",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "thirdParties",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "thirdPartyOptions",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalVotingPower",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "viewListingAtIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "viewThirdPartyAtIndex",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "voteApproveSubmittedThirdParty",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "listingID",
				"type": "uint256"
			}
		],
		"name": "voteNewListing",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "thirdParty",
				"type": "address"
			}
		],
		"name": "voteThirdParty",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "voteToPay",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "voteToWithdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "votedApprove",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "votedAuctions",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "votedListings",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "votedSigPay",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "votedSigWithdraw",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "votedThirdParty",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "votesToPay",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "votesToWithdraw",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "votingPower",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdrawValue",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
];

async function update_balance(address){
	web3.eth.getBalance(address, function(err, result){
		if (err){
			console.log(err)
		} else {
			let b = web3.utils.fromWei(result, "ether")
			$("#account-balance").html("Balance: " + b + " ETH");
		}
	});
}

async function update_info(){
	address = $("#myaccount").val();
	update_balance(address);
	get_auction_info();
	get_multibid_info();
	get_listing_proposals();
}

async function get_auction_info(){
	auction_address = await multibid_contract.methods._currentAuction().call({from:web3.eth.defaultAccount});
	console.log(auction_address);
	$("#auction-address").html(auction_address);
	english_contract = new web3.eth.Contract(english_abi, auction_address);
	curr_highest_bid = await english_contract.methods.highestBid().call({from:web3.eth.defaultAccount});
	$("#curr-high-bid").html(curr_highest_bid);
	winner = await english_contract.methods.winner().call({from:web3.eth.defaultAccount});
	$("#winner").html(winner);
	let duration = await english_contract.methods.duration().call({from:web3.eth.defaultAccount});
    let begin = await english_contract.methods.startTime().call({from:web3.eth.defaultAccount});
    const d = new Date();
    let time = Math.floor(d.getTime()/ 1000);
    let time_passed = time - begin;
    let time_left = duration - time_passed;
	hours = Math.floor(time_left/(60*60))
	minutes = Math.floor((time_left % (60*60)) / 60)
    if (time_left < 0){
       $("#duration").html(0);
    } else {
       $("#duration").html(hours + "H " + minutes + "M");
    }
}

async function get_multibid_info(){
	web3.eth.defaultAccount = $("#myaccount").val(); //sets the default account
	multibid_balance = await web3.eth.getBalance(multibid_address);
	console.log(multibid_balance);
	$("#multibid-balance").html("Multibid Contract Balance: "+multibid_balance+" Wei");
	stake = await multibid_contract.methods.seeMyStake().call({from:web3.eth.defaultAccount});
	totalVotingPower = await multibid_contract.methods.totalVotingPower().call({from:web3.eth.defaultAccount})
	percent_ownership = stake/totalVotingPower*100;
	$("#stake").html("Stake: "+percent_ownership+"%");
}

async function get_listing_proposals(){
	web3.eth.defaultAccount = $("#myaccount").val(); //sets the default account
	for(let i = 0; i<5; i++){
		res = await multibid_contract.methods.viewListingAtIndex(i).call({from:web3.eth.defaultAccount});
		//id = res[0];
		min_bid = res[1];
		duration=res[2];
		votes = res[3];
		totalVotingPower = await multibid_contract.methods.totalVotingPower().call({from:web3.eth.defaultAccount});
		percentOfVote = votes/totalVotingPower*100;
		elt_id = "#listing-info-"+i;
		$(elt_id).html("id: "+ i +" Minimum Bid: "+ min_bid +" duration: "+ duration +" Vote %: "+ percentOfVote);
	}
}

$(document).ready(function(){
	web3.eth.defaultAccount = $("#myaccount").val(); //sets the default account
	multibid_contract = new web3.eth.Contract(multibid_abi, multibid_address);
	get_multibid_info();
	get_auction_info();

	web3.eth.getAccounts().then((response)=> {
		web3.eth.defaultAccount = response[0];
		update_balance(response[0]);
	});
	// Allows switching between accounts in 'My Account'
	web3.eth.getAccounts().then((response)=>{
		var opts = response.map(function (a) { return '<option value="'+
				a.toLowerCase()+'">'+a.toLowerCase()+'</option>' });
		$(".account").html(opts);
		web3.eth.defaultAccount = $("#myaccount").val();
	});

	var denominations = {
		Ether : 'Ether',
		Finny : 'Finney',
		Gwei : 'Gwei',
		Wei : 'Wei'
	};
	
	var select = document.getElementById("units");
	for(index in denominations) {
		select.options[select.options.length] = new Option(denominations[index], index);
	}
	$("#submit-bid").click(async function() {
		
		web3.eth.defaultAccount = $("#myaccount").val(); //sets the default account
		let third_address = $("#third-address").val()
		console.log(duration);
		if (duration == 0){
			alert("This auction is over!")
		} else if (web3.eth.defaultAccount.toLocaleLowerCase() == third_address.toLocaleLowerCase()) {
			alert("You cannot name yourself as the third party!")
		} else {
			let unit = $("#units").val();
			//alert(unit)
			if (unit == "Ether") {
				scale = 10**(18)
			} else if (unit == "Finney") {
				scale = 10**(15)
			} else if (unit == "Gwei") {
				scale = 10**(9)
			} else {
				scale = 1
			}
			amount = $("#bid").val() * scale;
			await multibid_contract.methods.submitBid($("#third-address").val(), web3.utils.toBN(amount)).send({from:web3.eth.defaultAccount})
			update_balance($("#myaccount").val());
			update_info();
		}
	})



	$("#addValue").click(async function() {
		web3.eth.defaultAccount = $("#myaccount").val(); //sets the default account
		let unit = $("#units").val();
		//alert(unit);
		if (unit == "Ether") {
			scale = 10**(18)
		} else if (unit == "Finney") {
			scale = 10**(15)
		} else if (unit == "Gwei") {
			scale = 10**(9)
		} else {
			scale = 1
		}
		amount = $("#valueToAdd").val() * scale;
		await multibid_contract.methods.addValue().send({from:web3.eth.defaultAccount, value:amount});
		update_info()
	})


	$("#withdrawValue").click(async function() {
		web3.eth.defaultAccount = $("#myaccount").val(); //sets the default account
		await multibid_contract.methods.withdrawValue().send({from:web3.eth.defaultAccount});
		update_info()
	})

	$("#voteToPay").click(async function() {
		web3.eth.defaultAccount = $("#myaccount").val(); //sets the default account
		await multibid_contract.methods.voteToPay().send({from:web3.eth.defaultAccount});
		update_info()
	})

	$("#retractVoteToPay").click(async function() {
		web3.eth.defaultAccount = $("#myaccount").val(); //sets the default account
		await multibid_contract.methods.retractVoteToPay().send({from:web3.eth.defaultAccount});
		update_info()
	})

	$("#voteToWithdraw").click(async function() {
		web3.eth.defaultAccount = $("#myaccount").val(); //sets the default account
		await multibid_contract.methods.voteToWithdraw().send({from:web3.eth.defaultAccount});
		update_info()
	})

	$("#retractVoteToWithdraw").click(async function() {
		web3.eth.defaultAccount = $("#myaccount").val(); //sets the default account
		await multibid_contract.methods.retractVoteToWithdraw().send({from:web3.eth.defaultAccount});
		update_info()
	})
	
	$("#proposeThirdParty").click(async function() {
		web3.eth.defaultAccount = $("#myaccount").val(); //sets the default account
		third_party_prop = $("#third-address-proposal").val()
		await multibid_contract.methods.proposeThirdParty(third_party_prop).send({from:web3.eth.defaultAccount});
		update_info()
	})

	$("#voteThirdParty").click(async function() {
		web3.eth.defaultAccount = $("#myaccount").val(); //sets the default account
		third_party_vote = $("#third-address-vote").val()
		await multibid_contract.methods.voteThirdParty(third_party_vote).send({from:web3.eth.defaultAccount});
		update_info()
	})

	$("#retractVoteThirdParty").click(async function() {
		web3.eth.defaultAccount = $("#myaccount").val(); //sets the default account
		third_party_retract = $("#third-address-retract").val()
		await multibid_contract.methods.retractVoteThirdParty(third_party_retract).send({from:web3.eth.defaultAccount});
		update_info()
	})

	// $("#proposeNewListing").click(async function() {
	// 	web3.eth.defaultAccount = $("#myaccount").val(); //sets the default account
	// 	min_price = $("#new-listing-minPrice").val();
	// 	duration = $("#new-listing-duration").val();
	// 	await multibid_contract.methods.proposeNewListing(0, min_price, duration).send({from:web3.eth.defaultAccount});
	// 	update_info()
	// })

	// $("#voteNewListing").click(async function() {
	// 	web3.eth.defaultAccount = $("#myaccount").val(); //sets the default account
	// 	listing_id = $("#vote-listing-id").val()
	// 	await multibid_contract.methods.voteNewListing(listing_id).send({from:web3.eth.defaultAccount});
	// 	update_info()
	// })

	// $("#retractNewVoteListing").click(async function() {
	// 	web3.eth.defaultAccount = $("#myaccount").val(); //sets the default account
	// 	listing_id = $("#retract-listing-id").val()
	// 	await multibid_contract.methods.retractNewVoteListing(listing_id).send({from:web3.eth.defaultAccount});
	// 	update_info()
	// })

	$("#voteApproveSubmittedThirdParty").click(async function() {
		web3.eth.defaultAccount = $("#myaccount").val(); //sets the default account
		await multibid_contract.methods.voteApproveSubmittedThirdParty().send({from:web3.eth.defaultAccount});
		update_info()
	})

	$("#retractVoteApproveSubmittedThirdParty").click(async function() {
		web3.eth.defaultAccount = $("#myaccount").val(); //sets the default account
		await multibid_contract.methods.retractVoteApproveSubmittedThirdParty().send({from:web3.eth.defaultAccount});
		update_info()
	})

})