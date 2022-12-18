// sets up web3.js
const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

// =============================================================================
//         ABIs and Contract Addresses: Paste Your ABIs/Addresses Here
// =============================================================================

const multi_spawner_address = '0x25BD53158Cd6bE9BfB2C43305E087E49d1aE79E3';
const multi_spawner_abi = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "auction",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "contract MultiBid",
				"name": "multi",
				"type": "address"
			}
		],
		"name": "multiBidCreated",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "auction",
				"type": "address"
			}
		],
		"name": "createMultiBid",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "genesis",
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
		"name": "getMostRecentMultiBid",
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
		"name": "mostRecentMultiBid",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];  

const multi_spawner_contract = new web3.eth.Contract(multi_spawner_abi, multi_spawner_address);        

// This sets the default account on load and displays the total owed to that
// account.
web3.eth.getAccounts().then((response)=> {
    web3.eth.defaultAccount = response[0];
});
// Allows switching between accounts in 'My Account'
web3.eth.getAccounts().then((response)=>{
    var opts = response.map(function (a) { return '<option value="'+
            a.toLowerCase()+'">'+a.toLowerCase()+'</option>' });
    $(".account").html(opts);
});

async function create_new(english_pointer,address){
	console.log(address)
    await multi_spawner_contract.methods.createMultiBid(english_pointer).send({from:address, gas:5000000});
    let multi_address = await multi_spawner_contract.methods.getMostRecentMultiBid().call({from:address})
    // alert(multi_address)
    return multi_address;
}

$("#submit-auction").click(async function() {
	web3.eth.defaultAccount = $("#myaccount").val(); //sets the default account
    let auction_address = $("#auction-address").val();
    let multi_address = await create_new(auction_address, web3.eth.defaultAccount);
    //english_address = english_spawner_contract.methods.call
    let params = new URLSearchParams();
    params.append("address", multi_address);
    let url = 'multibid.html?' + params.toString();
	console.log(url)
    location.href = url;
})
