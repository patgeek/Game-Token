
//vient de l'api https://cdn.jsdelivr.net/gh/ethereum/web3.js@1.0.0-beta.36/dist/web3.min.js
//web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));//pour ganache blockchain locale
//web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));


//pour Ropsten network
web3 = new Web3(web3.currentProvider);//call  metamask
//web3 = new Web3(web3.providers.HttpProvider("http://localhost:7545"));
//7545 port de la blockchain locale ganache
//9545 pour une autre blockchain locale
ethereum.enable();//affiche le popup metamask


var NFTAbi = [
  {
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x06fdde03"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "spender",
        "type": "address"
      },
      {
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x095ea7b3"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x18160ddd"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "sender",
        "type": "address"
      },
      {
        "name": "recipient",
        "type": "address"
      },
      {
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x23b872dd"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "name": "",
        "type": "uint8"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x313ce567"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "spender",
        "type": "address"
      },
      {
        "name": "addedValue",
        "type": "uint256"
      }
    ],
    "name": "increaseAllowance",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x39509351"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "account",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x70a08231"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x95d89b41"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "spender",
        "type": "address"
      },
      {
        "name": "subtractedValue",
        "type": "uint256"
      }
    ],
    "name": "decreaseAllowance",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0xa457c2d7"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "recipient",
        "type": "address"
      },
      {
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0xa9059cbb"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "owner",
        "type": "address"
      },
      {
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xdd62ed3e"
  },
  {
    "inputs": [
      {
        "name": "_name",
        "type": "string"
      },
      {
        "name": "_symbol",
        "type": "string"
      },
      {
        "name": "_decimals",
        "type": "uint8"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor",
    "signature": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event",
    "signature": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "spender",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event",
    "signature": "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "to",
        "type": "address"
      },
      {
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "mint",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x40c10f19"
  }
];
////////////////////////////////////////////
var marketplaceAbi =  [
    {
      "inputs": [
        {
          "name": "token",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor",
      "signature": "constructor"
    },
    {
      "payable": true,
      "stateMutability": "payable",
      "type": "fallback"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "buyToken",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function",
      "signature": "0x2d296bf1"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_operator",
          "type": "address"
        },
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_id",
          "type": "uint256"
        },
        {
          "name": "_value",
          "type": "uint256"
        },
        {
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "onERC1155Received",
      "outputs": [
        {
          "name": "",
          "type": "bytes4"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xf23a6e61"
    }
  ];


////////////////////////////////////////////
var tokenAbi =[
   {
     "constant": true,
     "inputs": [
       {
         "name": "_owner",
         "type": "address"
       },
       {
         "name": "_id",
         "type": "uint256"
       }
     ],
     "name": "balanceOf",
     "outputs": [
       {
         "name": "",
         "type": "uint256"
       }
     ],
     "payable": false,
     "stateMutability": "view",
     "type": "function",
     "signature": "0x00fdd58e"
   },
   {
     "constant": false,
     "inputs": [
       {
         "name": "_initialSupply",
         "type": "uint256"
       },
       {
         "name": "_uri",
         "type": "string"
       }
     ],
     "name": "create",
     "outputs": [
       {
         "name": "_id",
         "type": "uint256"
       }
     ],
     "payable": false,
     "stateMutability": "nonpayable",
     "type": "function",
     "signature": "0x0118fa49"
   },
   {
     "constant": true,
     "inputs": [
       {
         "name": "_interfaceId",
         "type": "bytes4"
       }
     ],
     "name": "supportsInterface",
     "outputs": [
       {
         "name": "",
         "type": "bool"
       }
     ],
     "payable": false,
     "stateMutability": "view",
     "type": "function",
     "signature": "0x01ffc9a7"
   },
   {
     "constant": false,
     "inputs": [
       {
         "name": "_from",
         "type": "address"
       },
       {
         "name": "_to",
         "type": "address"
       },
       {
         "name": "_ids",
         "type": "uint256[]"
       },
       {
         "name": "_values",
         "type": "uint256[]"
       },
       {
         "name": "_data",
         "type": "bytes"
       }
     ],
     "name": "safeBatchTransferFrom",
     "outputs": [],
     "payable": false,
     "stateMutability": "nonpayable",
     "type": "function",
     "signature": "0x2eb2c2d6"
   },
   {
     "constant": true,
     "inputs": [
       {
         "name": "_owners",
         "type": "address[]"
       },
       {
         "name": "_ids",
         "type": "uint256[]"
       }
     ],
     "name": "balanceOfBatch",
     "outputs": [
       {
         "name": "",
         "type": "uint256[]"
       }
     ],
     "payable": false,
     "stateMutability": "view",
     "type": "function",
     "signature": "0x4e1273f4"
   },
   {
     "constant": false,
     "inputs": [
       {
         "name": "_uri",
         "type": "string"
       },
       {
         "name": "_id",
         "type": "uint256"
       }
     ],
     "name": "setURI",
     "outputs": [],
     "payable": false,
     "stateMutability": "nonpayable",
     "type": "function",
     "signature": "0x67db3b8f"
   },
   {
     "constant": false,
     "inputs": [
       {
         "name": "_operator",
         "type": "address"
       },
       {
         "name": "_approved",
         "type": "bool"
       }
     ],
     "name": "setApprovalForAll",
     "outputs": [],
     "payable": false,
     "stateMutability": "nonpayable",
     "type": "function",
     "signature": "0xa22cb465"
   },
   {
     "constant": true,
     "inputs": [],
     "name": "nonce",
     "outputs": [
       {
         "name": "",
         "type": "uint256"
       }
     ],
     "payable": false,
     "stateMutability": "view",
     "type": "function",
     "signature": "0xaffed0e0"
   },
   {
     "constant": true,
     "inputs": [
       {
         "name": "",
         "type": "uint256"
       }
     ],
     "name": "creators",
     "outputs": [
       {
         "name": "",
         "type": "address"
       }
     ],
     "payable": false,
     "stateMutability": "view",
     "type": "function",
     "signature": "0xcd53d08e"
   },
   {
     "constant": false,
     "inputs": [
       {
         "name": "_id",
         "type": "uint256"
       },
       {
         "name": "_to",
         "type": "address[]"
       },
       {
         "name": "_quantities",
         "type": "uint256[]"
       }
     ],
     "name": "mint",
     "outputs": [],
     "payable": false,
     "stateMutability": "nonpayable",
     "type": "function",
     "signature": "0xcfa84fc1"
   },
   {
     "constant": true,
     "inputs": [
       {
         "name": "_owner",
         "type": "address"
       },
       {
         "name": "_operator",
         "type": "address"
       }
     ],
     "name": "isApprovedForAll",
     "outputs": [
       {
         "name": "",
         "type": "bool"
       }
     ],
     "payable": false,
     "stateMutability": "view",
     "type": "function",
     "signature": "0xe985e9c5"
   },
   {
     "constant": false,
     "inputs": [
       {
         "name": "_from",
         "type": "address"
       },
       {
         "name": "_to",
         "type": "address"
       },
       {
         "name": "_id",
         "type": "uint256"
       },
       {
         "name": "_value",
         "type": "uint256"
       },
       {
         "name": "_data",
         "type": "bytes"
       }
     ],
     "name": "safeTransferFrom",
     "outputs": [],
     "payable": false,
     "stateMutability": "nonpayable",
     "type": "function",
     "signature": "0xf242432a"
   },
   {
     "inputs": [],
     "payable": false,
     "stateMutability": "nonpayable",
     "type": "constructor",
     "signature": "constructor"
   },
   {
     "anonymous": false,
     "inputs": [
       {
         "indexed": true,
         "name": "_operator",
         "type": "address"
       },
       {
         "indexed": true,
         "name": "_from",
         "type": "address"
       },
       {
         "indexed": true,
         "name": "_to",
         "type": "address"
       },
       {
         "indexed": false,
         "name": "_id",
         "type": "uint256"
       },
       {
         "indexed": false,
         "name": "_value",
         "type": "uint256"
       }
     ],
     "name": "TransferSingle",
     "type": "event",
     "signature": "0xc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62"
   },
   {
     "anonymous": false,
     "inputs": [
       {
         "indexed": true,
         "name": "_operator",
         "type": "address"
       },
       {
         "indexed": true,
         "name": "_from",
         "type": "address"
       },
       {
         "indexed": true,
         "name": "_to",
         "type": "address"
       },
       {
         "indexed": false,
         "name": "_ids",
         "type": "uint256[]"
       },
       {
         "indexed": false,
         "name": "_values",
         "type": "uint256[]"
       }
     ],
     "name": "TransferBatch",
     "type": "event",
     "signature": "0x4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb"
   },
   {
     "anonymous": false,
     "inputs": [
       {
         "indexed": true,
         "name": "_owner",
         "type": "address"
       },
       {
         "indexed": true,
         "name": "_operator",
         "type": "address"
       },
       {
         "indexed": false,
         "name": "_approved",
         "type": "bool"
       }
     ],
     "name": "ApprovalForAll",
     "type": "event",
     "signature": "0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31"
   },
   {
     "anonymous": false,
     "inputs": [
       {
         "indexed": false,
         "name": "_value",
         "type": "string"
       },
       {
         "indexed": true,
         "name": "_id",
         "type": "uint256"
       }
     ],
     "name": "URI",
     "type": "event",
     "signature": "0x6bb7ff708619ba0610cba295a58592e0451dee2622938c8755667688daf3529b"
   }
 ];

var NFTtoken =  new web3.eth.Contract(NFTAbi, "0xC5c2db343E0e52beCace9E0E879FD633B4Fe463A");

  var token = new web3.eth.Contract(tokenAbi, "0x6d41e3Da1F72840e9B0Ff7D3adeC718BBBCb75A2");
  //vient de l'api https://cdn.jsdelivr.net/gh/ethereum/web3.js@1.0.0-beta.36/dist/web3.min.js ===> adresse du contrat apres truffle migrate
  //0xC5c2db343E0e52beCace9E0E879FD633B4Fe463A ===> adresse du contrat apres truffle migrate
  // on peut trouver 0xC5c2db343E0e52beCace9E0E879FD633B4Fe463A dans buil/contracts/GameToken.json ==> address
  var marketplace = new web3.eth.Contract(marketplaceAbi, "0xD893842417CB9928eD4f27A702a2310cF1fF004a");

   //function mintAfterGame(address, nrOfTokens){
  function mintAfterGame(nrOfTokens){
    web3.eth.getAccounts().then(accountArray => {
      var account = accountArray[0];//accountArray[0] ==> address compte metamask connecté
    NFTtoken.methods.mint(account, nrOfTokens).send({from: account})
      // token.methods.mint(4, [account], [nrOfTokens]).send({from: account, gasPrice: 200000, gas:5500000})
      .on('receipt', receipt => {
        alert("Transaction Complete");
      })
    });

  }


  function getUserItems(callback){
      web3.eth.getAccounts().then(accountArray => {
        var account = accountArray[0];
        //accountArray[0] ===> connected adress on metmask wallet
      var tokenPromise1 =  token.methods.balanceOf(account, 1).call();
        //account ===> address of account that owns Tokens
        //1 ==>   token number 1
      var tokenPromise2 =  token.methods.balanceOf(account, 2).call();
        //2 ==>   token number 2
      var tokenPromise3 =  token.methods.balanceOf(account, 3).call();
        //3 ==>   token number 3

         Promise.all([tokenPromise1, tokenPromise2, tokenPromise3]).then( values => {

           //console.log("Fetched User Items !!");
           console.log(values);
            //values is an array with the result of tokenPromise1, tokenPromise2, tokenPromise3

            var numberOfTalismans = values[0];
            var numberOfBoots = values[1];
            var numberOfCapes = values[2];

            if(numberOfTalismans > 0){
              //console.log("User has Item 1");
              COIN_GENERATION_INTERVAL = COIN_GENERATION_INTERVAL * Math.pow(0.75, numberOfTalismans);
              //l'intervalle de temps pour créer les coins DIMINUE
            }
          if(numberOfBoots> 0)
             //console.log("User has Item 2");
             PLAYER_SPEED =  PLAYER_SPEED * Math.pow(1.3, numberOfBoots);
             //la rapidité du player AUGMENTE
           if(numberOfCapes > 0)
             //console.log("User has Item 3");
             GAME_SECONDS = GAME_SECONDS * Math.pow(1.5, numberOfCapes);


             callback();
        })
      });
  }

  function buy(id){
    web3.eth.getAccounts().then(accountArray => {
        var options = {
            from: accountArray[0],
            value:0,

        };

        if(id == 1)
          options.value = 100000000000000;

        else if(id == 2)
            options.value = 200000000000000;

        else if(id == 3)
                options.value = 300000000000000;

      marketplace.methods.buyToken(id).send(options)
      .on('receipt', receipt => {
        alert("Transaction Complete");
      })
    });

  }
