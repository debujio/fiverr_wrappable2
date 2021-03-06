(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.bundle = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports=[
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
			"type": "function"
	},
	{
			"constant": false,
			"inputs": [
					{
							"name": "_spender",
							"type": "address"
					},
					{
							"name": "_value",
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
			"type": "function"
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
			"type": "function"
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
							"name": "_value",
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
			"type": "function"
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
			"type": "function"
	},
	{
			"constant": true,
			"inputs": [
					{
							"name": "_owner",
							"type": "address"
					}
			],
			"name": "balanceOf",
			"outputs": [
					{
							"name": "balance",
							"type": "uint256"
					}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
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
			"type": "function"
	},
	{
			"constant": false,
			"inputs": [
					{
							"name": "_to",
							"type": "address"
					},
					{
							"name": "_value",
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
			"type": "function"
	},
	{
			"constant": true,
			"inputs": [
					{
							"name": "_owner",
							"type": "address"
					},
					{
							"name": "_spender",
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
			"type": "function"
	},
	{
			"payable": true,
			"stateMutability": "payable",
			"type": "fallback"
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
			"type": "event"
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
			"type": "event"
	}
]
},{}],2:[function(require,module,exports){
module.exports={
  "myTokenAddress": "0x286FEa5F8c14F90136306b14340ECf6041767e8A",
  "otherTokenAddress": "0xfe4F5145f6e09952a5ba9e956ED0C25e3Fa4c7F1"
}
},{}],3:[function(require,module,exports){
module.exports={
  "contractName": "MyToken",
  "abi": [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "tokenHolder",
          "type": "address"
        }
      ],
      "name": "AuthorizedOperator",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "operatorData",
          "type": "bytes"
        }
      ],
      "name": "Burned",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "operatorData",
          "type": "bytes"
        }
      ],
      "name": "Minted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "tokenHolder",
          "type": "address"
        }
      ],
      "name": "RevokedOperator",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "operatorData",
          "type": "bytes"
        }
      ],
      "name": "Sent",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "holder",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "authorizeOperator",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "tokenHolder",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "burn",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "pure",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "defaultOperators",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "granularity",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "tokenHolder",
          "type": "address"
        }
      ],
      "name": "isOperatorFor",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        },
        {
          "internalType": "bytes",
          "name": "operatorData",
          "type": "bytes"
        }
      ],
      "name": "operatorBurn",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        },
        {
          "internalType": "bytes",
          "name": "operatorData",
          "type": "bytes"
        }
      ],
      "name": "operatorSend",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "revokeOperator",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "send",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "holder",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "swap",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "withdraw",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "withdrawAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "burnTokens",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getBurnPrice",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.8.10+commit.fc410830\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"tokenHolder\",\"type\":\"address\"}],\"name\":\"AuthorizedOperator\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"operatorData\",\"type\":\"bytes\"}],\"name\":\"Burned\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"operatorData\",\"type\":\"bytes\"}],\"name\":\"Minted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"tokenHolder\",\"type\":\"address\"}],\"name\":\"RevokedOperator\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"operatorData\",\"type\":\"bytes\"}],\"name\":\"Sent\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"holder\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"authorizeOperator\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"tokenHolder\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"burn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"burnTokens\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"defaultOperators\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getBurnPrice\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"granularity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"tokenHolder\",\"type\":\"address\"}],\"name\":\"isOperatorFor\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"},{\"internalType\":\"bytes\",\"name\":\"operatorData\",\"type\":\"bytes\"}],\"name\":\"operatorBurn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"},{\"internalType\":\"bytes\",\"name\":\"operatorData\",\"type\":\"bytes\"}],\"name\":\"operatorSend\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"revokeOperator\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"send\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"swap\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"holder\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"withdraw\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"withdrawAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"allowance(address,address)\":{\"details\":\"See {IERC20-allowance}. Note that operator and allowance concepts are orthogonal: operators may not have allowance, and accounts with allowance may not be operators themselves.\"},\"approve(address,uint256)\":{\"details\":\"See {IERC20-approve}. NOTE: If `value` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Note that accounts cannot have allowance issued by their operators.\"},\"authorizeOperator(address)\":{\"details\":\"See {IERC777-authorizeOperator}.\"},\"balanceOf(address)\":{\"details\":\"Returns the amount of tokens owned by an account (`tokenHolder`).\"},\"burn(uint256,bytes)\":{\"details\":\"See {IERC777-burn}. Also emits a {IERC20-Transfer} event for ERC20 compatibility.\"},\"decimals()\":{\"details\":\"See {ERC20-decimals}. Always returns 18, as per the [ERC777 EIP](https://eips.ethereum.org/EIPS/eip-777#backward-compatibility).\"},\"defaultOperators()\":{\"details\":\"See {IERC777-defaultOperators}.\"},\"granularity()\":{\"details\":\"See {IERC777-granularity}. This implementation always returns `1`.\"},\"isOperatorFor(address,address)\":{\"details\":\"See {IERC777-isOperatorFor}.\"},\"name()\":{\"details\":\"See {IERC777-name}.\"},\"operatorBurn(address,uint256,bytes,bytes)\":{\"details\":\"See {IERC777-operatorBurn}. Emits {Burned} and {IERC20-Transfer} events.\"},\"operatorSend(address,address,uint256,bytes,bytes)\":{\"details\":\"See {IERC777-operatorSend}. Emits {Sent} and {IERC20-Transfer} events.\"},\"revokeOperator(address)\":{\"details\":\"See {IERC777-revokeOperator}.\"},\"send(address,uint256,bytes)\":{\"details\":\"See {IERC777-send}. Also emits a {IERC20-Transfer} event for ERC20 compatibility.\"},\"symbol()\":{\"details\":\"See {IERC777-symbol}.\"},\"totalSupply()\":{\"details\":\"See {IERC777-totalSupply}.\"},\"transfer(address,uint256)\":{\"details\":\"See {IERC20-transfer}. Unlike `send`, `recipient` is _not_ required to implement the {IERC777Recipient} interface if it is a contract. Also emits a {Sent} event.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC20-transferFrom}. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Note that operator and allowance concepts are orthogonal: operators cannot call `transferFrom` (unless they have allowance), and accounts with allowance cannot call `operatorSend` (unless they are operators). Emits {Sent}, {IERC20-Transfer} and {IERC20-Approval} events.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/MyToken.sol\":\"MyToken\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol\":{\"keccak256\":\"0xf2b6c9adb3552254df1445b73563cf014434ff5e78663e9b961b6c059506ceb5\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6c1f59e0c7334c22fb54288728fc32546bdc9c8133d6db0d60223e3c28f52120\",\"dweb:/ipfs/QmeuxawUVBhMWQJXaEhhnubCTc4Jwn5wYK8gbhq6NjrpfG\"]},\"@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xbbc8ac883ac3c0078ce5ad3e288fbb3ffcc8a30c3a98c0fda0114d64fc44fca2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://87a7a5d2f6f63f84598af02b8c50ca2df2631cb8ba2453e8d95fcb17e4be9824\",\"dweb:/ipfs/QmR76hqtAcRqoFj33tmNjcWTLrgNsAaakYwnKZ8zoJtKei\"]},\"@openzeppelin/contracts/token/ERC777/ERC777.sol\":{\"keccak256\":\"0xde0850147a4e21a95b3ad42e700d859135858da3ca7deb840d44e5162287502e\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://768d7b6a63317a0c0fb4e5ca377a4f1c966575fb0b06dfb2b38cdbf2ea12046a\",\"dweb:/ipfs/QmVdmMNwGwpgatStceUGbziCiGrnos87gcXJurUweL9utn\"]},\"@openzeppelin/contracts/token/ERC777/IERC777.sol\":{\"keccak256\":\"0xe4e0b7e3f0265ffaa565d26acd2d45f2633f19127ed625e5a05a9f201a87a667\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1762b5bc15a009b5f092ccf547b81e0827c8705884f18e0623e497658514a7ed\",\"dweb:/ipfs/QmTtmVQYuynan3j2uVjdjjRJS1mr7LPRgxSZNnfqC7oxkz\"]},\"@openzeppelin/contracts/token/ERC777/IERC777Recipient.sol\":{\"keccak256\":\"0x1a5d61db2733202ba361e6d6741cd2e662380e22b80e987eacfc91973f2267dc\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://04c0cd697050a6516b7779aa2343ad2d0e5217d8915ac2382681dfdf4e445be3\",\"dweb:/ipfs/QmPCBCZgm7pHBwwogE2F9NCN3UfTdLNhqc8UDEvw8kDzyA\"]},\"@openzeppelin/contracts/token/ERC777/IERC777Sender.sol\":{\"keccak256\":\"0x742e51d63b108240759794360637468d9fcbf072cbd357744790d356a87bb382\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://23912910ce2bb68e49ff83f43fcfa864210ee44580491e876db14922f8aecc18\",\"dweb:/ipfs/QmU6GnRQ51xvY8D57kPCV47oGeYozaz5AQZUCHxFfXdFZ4\"]},\"@openzeppelin/contracts/utils/Address.sol\":{\"keccak256\":\"0x2ccf9d2313a313d41a791505f2b5abfdc62191b5d4334f7f7a82691c088a1c87\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b3a57d0854b2fdce6ebff933a48dca2445643d1eccfc27f00292e937f26c6a58\",\"dweb:/ipfs/QmW45rZooS9TqR4YXUbjRbtf2Bpb5ouSarBvfW1LdGprvV\"]},\"@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92\",\"dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3\"]},\"@openzeppelin/contracts/utils/introspection/IERC1820Registry.sol\":{\"keccak256\":\"0x6e306f9ab28416a9e5931f0b6e264676e8ac68fad184f9a9d8bb125c6ec23bc3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://bd7fe961c914caa1fcc8223d446c1582aec4f2a32d2f06cf09c938b72cf8ce11\",\"dweb:/ipfs/QmPfEfqtUh9SA86br28HfmMyVSBe22B3oPwF8iACCF4evY\"]},\"project:/contracts/MyToken.sol\":{\"keccak256\":\"0x753293750cecc215d1900ac930df59f5f1495287fb51a463a6f2090c52bf317d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://941545667d7022a05312365c21680e8b05f528ba481be8dda2b79c54daca1717\",\"dweb:/ipfs/QmY4jh69gQwKeWocS3X7TdZepTRrnt4ThWkMsuEZ9hUiSj\"]}},\"version\":1}",
  "bytecode": "0x608060405260098054600160a060020a03191673fe4f5145f6e09952a5ba9e956ed0c25e3fa4c7f11790553480156200003757600080fd5b50604080518082018252600f81527f4d79546f6b656e56657273696f6e32000000000000000000000000000000000060208083019182528351808501909452600584527f4d545f56320000000000000000000000000000000000000000000000000000009084015281519192913091620000b59160029190620002ad565b508151620000cb906003906020850190620002ad565b506040805160208101909152600160a060020a0382168152620000f39060049060016200033c565b50600160a060020a03811660009081526005602052604090819020805460ff19166001179055517f29965a1d00000000000000000000000000000000000000000000000000000000815230600482018190527fac7fbab5f54a3ca8194167523c6753bfeb96a445279294b6125b68cce217705460248301526044820152731820a4b7618bde71dce8cdc73aab6c95905fad24906329965a1d90606401600060405180830381600087803b158015620001aa57600080fd5b505af1158015620001bf573d6000803e3d6000fd5b50506040517f29965a1d00000000000000000000000000000000000000000000000000000000815230600482018190527faea199e31a596269b42cdafd93407f14436db6e4cad65417994c2eb37381e05a60248301526044820152731820a4b7618bde71dce8cdc73aab6c95905fad2492506329965a1d9150606401600060405180830381600087803b1580156200025657600080fd5b505af11580156200026b573d6000803e3d6000fd5b5050600a8054600160a060020a03199081163317909155600b805490911673d0d5e3db44de05e9f294bb0a3beeaf030de24ada17905550620004019350505050565b828054620002bb90620003ab565b90600052602060002090601f016020900481019282620002df57600085556200032a565b82601f10620002fa57805160ff19168380011785556200032a565b828001600101855582156200032a579182015b828111156200032a5782518255916020019190600101906200030d565b506200033892915062000394565b5090565b8280548282559060005260206000209081019282156200032a579160200282015b828111156200032a5782518254600160a060020a031916600160a060020a039091161782556020909201916001909101906200035d565b5b8082111562000338576000815560010162000395565b600281046001821680620003c057607f821691505b60208210811415620003fb577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b6121c180620004116000396000f3fe608060405234801561001057600080fd5b50600436106101515760003560e060020a9004806370a08231116100c7578063a9059cbb11610080578063a9059cbb1461029c578063d95b6371146102af578063dd62ed3e146102c2578063fad8b32a146102fb578063fc673c4f1461030e578063fe9d93031461032157600080fd5b806370a082311461022a578063853828b61461025357806394b918de1461025b578063959b8c3f1461026e57806395d89b41146102815780639bd9bbc61461028957600080fd5b80632ae6218d116101195780632ae6218d146101d15780632e1a7d4d146101d9578063313ce567146101ee578063556f0dc7146101fd57806362ad1b83146102045780636d1b229d1461021757600080fd5b806306e485381461015657806306fdde0314610174578063095ea7b31461018957806318160ddd146101ac57806323b872dd146101be575b600080fd5b61015e610334565b60405161016b9190611abb565b60405180910390f35b61017c610396565b60405161016b9190611b55565b61019c610197366004611b7d565b61041f565b604051901515815260200161016b565b6001545b60405190815260200161016b565b61019c6101cc366004611ba9565b610437565b6101b061058b565b6101ec6101e7366004611bea565b6105e3565b005b6040516012815260200161016b565b60016101b0565b6101ec610212366004611ca9565b6106d6565b6101ec610225366004611bea565b610715565b6101b0610238366004611d3c565b600160a060020a031660009081526020819052604090205490565b6101ec610868565b6101ec610269366004611bea565b6109c7565b6101ec61027c366004611d3c565b610ac2565b61017c610bfc565b6101ec610297366004611d59565b610c0b565b61019c6102aa366004611b7d565b610c2e565b61019c6102bd366004611db2565b610ce4565b6101b06102d0366004611db2565b600160a060020a03918216600090815260086020908152604080832093909416825291909152205490565b6101ec610309366004611d3c565b610d85565b6101ec61031c366004611deb565b610ec0565b6101ec61032f366004611e6b565b610efb565b6060600480548060200260200160405190810160405280929190818152602001828054801561038c57602002820191906000526020600020905b8154600160a060020a0316815260019091019060200180831161036e575b5050505050905090565b6060600280546103a590611eb2565b80601f01602080910402602001604051908101604052809291908181526020018280546103d190611eb2565b801561038c5780601f106103f35761010080835404028352916020019161038c565b820191906000526020600020905b81548152906001019060200180831161040157509395945050505050565b60003361042d818585610f16565b5060019392505050565b6000600160a060020a03831661046b5760405160e560020a62461bcd02815260040161046290611ef0565b60405180910390fd5b600160a060020a0384166104ea5760405160e560020a62461bcd02815260206004820152602660248201527f4552433737373a207472616e736665722066726f6d20746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610462565b600033905061051b818686866040518060200160405280600081525060405180602001604052806000815250611075565b6105268582856111cf565b61055281868686604051806020016040528060008152506040518060200160405280600081525061125e565b61058081868686604051806020016040528060008152506040518060200160405280600081525060006113dd565b506001949350505050565b600080600d5461059a60015490565b6105a49190611f66565b9050806105b357600091505090565b6000600e54600c546105c59190611f66565b6105d283620f4240611f7d565b6105dc9190611f9c565b9392505050565b600a54600160a060020a031633146106405760405160e560020a62461bcd02815260206004820152600d60248201527f4163636573732044656e696564000000000000000000000000000000000000006044820152606401610462565b600954600a546040517fa9059cbb000000000000000000000000000000000000000000000000000000008152600160a060020a0391821660048201526024810184905291169063a9059cbb906044016020604051808303816000875af11580156106ae573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106d29190611fc1565b5050565b6106e03386610ce4565b6106ff5760405160e560020a62461bcd02815260040161046290611fe3565b61070e858585858560016115e7565b5050505050565b6107423361dead8360405180602001604052806000815250604051806020016040528060008152506106d6565b6000600d5461075060015490565b61075a9190611f66565b90506000600e54600c5461076e9190611f66565b61077c836305f5e100611f7d565b6107869190611f9c565b905060006107948285611f9c565b6107a2906305f5e100611f7d565b6009546040517fa9059cbb00000000000000000000000000000000000000000000000000000000815233600482015260248101839052919250600160a060020a03169063a9059cbb906044016020604051808303816000875af115801561080d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108319190611fc1565b5083600d60008282546108449190612040565b9250508190555080600e600082825461085d9190612040565b909155505050505050565b600a54600160a060020a031633146108c55760405160e560020a62461bcd02815260206004820152600d60248201527f4163636573732044656e696564000000000000000000000000000000000000006044820152606401610462565b600954600a546040517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152600160a060020a039283169263a9059cbb92169083906370a0823190602401602060405180830381865afa158015610933573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109579190612058565b60405160e060020a63ffffffff8516028152600160a060020a03909216600483015260248201526044016020604051808303816000875af11580156109a0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109c49190611fc1565b50565b6009546040517f23b872dd00000000000000000000000000000000000000000000000000000000815233600482015230602482015260448101839052600160a060020a03909116906323b872dd906064016020604051808303816000875af1158015610a37573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a5b9190611fc1565b5080600c6000828254610a6e9190612040565b9091555060009050610a7e6116eb565b610a8c836305f5e100611f7d565b610a969190611f9c565b90506106d23382604051806020016040528060008152506040518060200160405280600081525061177d565b33600160a060020a0382161415610b435760405160e560020a62461bcd028152602060048201526024808201527f4552433737373a20617574686f72697a696e672073656c66206173206f70657260448201527f61746f72000000000000000000000000000000000000000000000000000000006064820152608401610462565b600160a060020a03811660009081526005602052604090205460ff1615610b9457336000908152600760209081526040808320600160a060020a03851684529091529020805460ff19169055610bc3565b336000908152600660209081526040808320600160a060020a03851684529091529020805460ff191660011790555b6040513390600160a060020a038316907ff4caeb2d6ca8932a215a353d0703c326ec2d81fc68170f320eb2ab49e9df61f990600090a350565b6060600380546103a590611eb2565b610c29338484846040518060200160405280600081525060016115e7565b505050565b6000600160a060020a038316610c595760405160e560020a62461bcd02815260040161046290611ef0565b6000339050610c8a818286866040518060200160405280600081525060405180602001604052806000815250611075565b610cb681828686604051806020016040528060008152506040518060200160405280600081525061125e565b61042d81828686604051806020016040528060008152506040518060200160405280600081525060006113dd565b600081600160a060020a031683600160a060020a03161480610d4f5750600160a060020a03831660009081526005602052604090205460ff168015610d4f5750600160a060020a0380831660009081526007602090815260408083209387168352929052205460ff16155b806105dc5750600160a060020a0380831660009081526006602090815260408083209387168352929052205460ff169392505050565b600160a060020a038116331415610e075760405160e560020a62461bcd02815260206004820152602160248201527f4552433737373a207265766f6b696e672073656c66206173206f70657261746f60448201527f72000000000000000000000000000000000000000000000000000000000000006064820152608401610462565b600160a060020a03811660009081526005602052604090205460ff1615610e5b57336000908152600760209081526040808320600160a060020a03851684529091529020805460ff19166001179055610e87565b336000908152600660209081526040808320600160a060020a03851684529091529020805460ff191690555b6040513390600160a060020a038316907f50546e66e5f44d728365dc3908c63bc5cfeeab470722c1677e3073a6ac294aa190600090a350565b610eca3385610ce4565b610ee95760405160e560020a62461bcd02815260040161046290611fe3565b610ef58484848461178b565b50505050565b6106d23383836040518060200160405280600081525061178b565b600160a060020a038316610f955760405160e560020a62461bcd02815260206004820152602560248201527f4552433737373a20617070726f76652066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610462565b600160a060020a0382166110145760405160e560020a62461bcd02815260206004820152602360248201527f4552433737373a20617070726f766520746f20746865207a65726f206164647260448201527f65737300000000000000000000000000000000000000000000000000000000006064820152608401610462565b600160a060020a0383811660008181526008602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6040517faabbb8ca000000000000000000000000000000000000000000000000000000008152600160a060020a03861660048201527f29ddb589b1fb5fc7cf394961c1adf5f8c6454761adf795e67fe149f658abe8956024820152600090731820a4b7618bde71dce8cdc73aab6c95905fad249063aabbb8ca90604401602060405180830381865afa15801561110f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111339190612071565b9050600160a060020a038116156111c6576040517f75ab9782000000000000000000000000000000000000000000000000000000008152600160a060020a038216906375ab978290611193908a908a908a908a908a908a9060040161208e565b600060405180830381600087803b1580156111ad57600080fd5b505af11580156111c1573d6000803e3d6000fd5b505050505b50505050505050565b600160a060020a038381166000908152600860209081526040808320938616835292905220546000198114610ef557818110156112515760405160e560020a62461bcd02815260206004820152601e60248201527f4552433737373a20696e73756666696369656e7420616c6c6f77616e636500006044820152606401610462565b610ef58484848403610f16565b600160a060020a038516600090815260208190526040902054838110156112f05760405160e560020a62461bcd02815260206004820152602760248201527f4552433737373a207472616e7366657220616d6f756e7420657863656564732060448201527f62616c616e6365000000000000000000000000000000000000000000000000006064820152608401610462565b600160a060020a03808716600090815260208190526040808220878503905591871681529081208054869290611327908490612040565b9250508190555084600160a060020a031686600160a060020a031688600160a060020a03167f06b541ddaa720db2b10a4d0cdac39b8d360425fc073085fac19bc8261467798787878760405161137f939291906120e7565b60405180910390a484600160a060020a031686600160a060020a03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef866040516113cc91815260200190565b60405180910390a350505050505050565b6040517faabbb8ca000000000000000000000000000000000000000000000000000000008152600160a060020a03861660048201527fb281fc8c12954d22544db45de3159a39272895b169a852b314f9cc762e44c53b6024820152600090731820a4b7618bde71dce8cdc73aab6c95905fad249063aabbb8ca90604401602060405180830381865afa158015611477573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061149b9190612071565b9050600160a060020a03811615611530576040517e23de29000000000000000000000000000000000000000000000000000000008152600160a060020a038216906223de29906114f9908b908b908b908b908b908b9060040161208e565b600060405180830381600087803b15801561151357600080fd5b505af1158015611527573d6000803e3d6000fd5b505050506115dd565b81156115dd57600160a060020a0386163b156115dd5760405160e560020a62461bcd02815260206004820152604d60248201527f4552433737373a20746f6b656e20726563697069656e7420636f6e747261637460448201527f20686173206e6f20696d706c656d656e74657220666f7220455243373737546f60648201527f6b656e73526563697069656e7400000000000000000000000000000000000000608482015260a401610462565b5050505050505050565b600160a060020a0386166116665760405160e560020a62461bcd02815260206004820152602260248201527f4552433737373a2073656e642066726f6d20746865207a65726f20616464726560448201527f73730000000000000000000000000000000000000000000000000000000000006064820152608401610462565b600160a060020a0385166116bf5760405160e560020a62461bcd02815260206004820181905260248201527f4552433737373a2073656e6420746f20746865207a65726f20616464726573736044820152606401610462565b336116ce818888888888611075565b6116dc81888888888861125e565b6111c6818888888888886113dd565b600080600080600080600b60009054906101000a9004600160a060020a0316600160a060020a031663feaf968c6040518163ffffffff1660e060020a02815260040160a060405180830381865afa15801561174a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061176e919061213b565b50919998505050505050505050565b610ef584848484600161197b565b600160a060020a03841661180a5760405160e560020a62461bcd02815260206004820152602260248201527f4552433737373a206275726e2066726f6d20746865207a65726f20616464726560448201527f73730000000000000000000000000000000000000000000000000000000000006064820152608401610462565b3361181a81866000878787611075565b600160a060020a038516600090815260208190526040902054848110156118ac5760405160e560020a62461bcd02815260206004820152602360248201527f4552433737373a206275726e20616d6f756e7420657863656564732062616c6160448201527f6e636500000000000000000000000000000000000000000000000000000000006064820152608401610462565b600160a060020a03861660009081526020819052604081208683039055600180548792906118db908490611f66565b9250508190555085600160a060020a031682600160a060020a03167fa78a9be3a7b862d26933ad85fb11d80ef66b8f972d7cbba06621d583943a4098878787604051611929939291906120e7565b60405180910390a3604051858152600090600160a060020a038816907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020015b60405180910390a3505050505050565b600160a060020a0385166119d45760405160e560020a62461bcd02815260206004820181905260248201527f4552433737373a206d696e7420746f20746865207a65726f20616464726573736044820152606401610462565b600033905084600160008282546119eb9190612040565b9091555050600160a060020a03861660009081526020819052604081208054879290611a18908490612040565b90915550611a2e905081600088888888886113dd565b85600160a060020a031681600160a060020a03167f2fe5be0146f74c5bce36c0b80911af6c7d86ff27e89d5cfa61fc681327954e5d878787604051611a75939291906120e7565b60405180910390a3604051858152600160a060020a038716906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200161196b565b6020808252825182820181905260009190848201906040850190845b81811015611afc578351600160a060020a031683529284019291840191600101611ad7565b50909695505050505050565b6000815180845260005b81811015611b2e57602081850181015186830182015201611b12565b81811115611b40576000602083870101525b50601f01601f19169290920160200192915050565b6020815260006105dc6020830184611b08565b600160a060020a03811681146109c457600080fd5b60008060408385031215611b9057600080fd5b8235611b9b81611b68565b946020939093013593505050565b600080600060608486031215611bbe57600080fd5b8335611bc981611b68565b92506020840135611bd981611b68565b929592945050506040919091013590565b600060208284031215611bfc57600080fd5b5035919050565b60e060020a634e487b7102600052604160045260246000fd5b600082601f830112611c2d57600080fd5b813567ffffffffffffffff80821115611c4857611c48611c03565b604051601f8301601f19908116603f01168101908282118183101715611c7057611c70611c03565b81604052838152866020858801011115611c8957600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080600080600060a08688031215611cc157600080fd5b8535611ccc81611b68565b94506020860135611cdc81611b68565b935060408601359250606086013567ffffffffffffffff80821115611d0057600080fd5b611d0c89838a01611c1c565b93506080880135915080821115611d2257600080fd5b50611d2f88828901611c1c565b9150509295509295909350565b600060208284031215611d4e57600080fd5b81356105dc81611b68565b600080600060608486031215611d6e57600080fd5b8335611d7981611b68565b925060208401359150604084013567ffffffffffffffff811115611d9c57600080fd5b611da886828701611c1c565b9150509250925092565b60008060408385031215611dc557600080fd5b8235611dd081611b68565b91506020830135611de081611b68565b809150509250929050565b60008060008060808587031215611e0157600080fd5b8435611e0c81611b68565b935060208501359250604085013567ffffffffffffffff80821115611e3057600080fd5b611e3c88838901611c1c565b93506060870135915080821115611e5257600080fd5b50611e5f87828801611c1c565b91505092959194509250565b60008060408385031215611e7e57600080fd5b82359150602083013567ffffffffffffffff811115611e9c57600080fd5b611ea885828601611c1c565b9150509250929050565b600281046001821680611ec657607f821691505b60208210811415611eea5760e060020a634e487b7102600052602260045260246000fd5b50919050565b60208082526024908201527f4552433737373a207472616e7366657220746f20746865207a65726f2061646460408201527f7265737300000000000000000000000000000000000000000000000000000000606082015260800190565b60e060020a634e487b7102600052601160045260246000fd5b600082821015611f7857611f78611f4d565b500390565b6000816000190483118215151615611f9757611f97611f4d565b500290565b600082611fbc5760e060020a634e487b7102600052601260045260246000fd5b500490565b600060208284031215611fd357600080fd5b815180151581146105dc57600080fd5b6020808252602c908201527f4552433737373a2063616c6c6572206973206e6f7420616e206f70657261746f60408201527f7220666f7220686f6c6465720000000000000000000000000000000000000000606082015260800190565b6000821982111561205357612053611f4d565b500190565b60006020828403121561206a57600080fd5b5051919050565b60006020828403121561208357600080fd5b81516105dc81611b68565b6000600160a060020a038089168352808816602084015280871660408401525084606083015260c060808301526120c860c0830185611b08565b82810360a08401526120da8185611b08565b9998505050505050505050565b8381526060602082015260006121006060830185611b08565b82810360408401526121128185611b08565b9695505050505050565b805169ffffffffffffffffffff8116811461213657600080fd5b919050565b600080600080600060a0868803121561215357600080fd5b61215c8661211c565b945060208601519350604086015192506060860151915061217f6080870161211c565b9050929550929590935056fea2646970667358221220b5724b9ed800300eb2cfcb57fb6c419410c461736bcc0ea88495fd592f18c75e64736f6c634300080a0033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106101515760003560e060020a9004806370a08231116100c7578063a9059cbb11610080578063a9059cbb1461029c578063d95b6371146102af578063dd62ed3e146102c2578063fad8b32a146102fb578063fc673c4f1461030e578063fe9d93031461032157600080fd5b806370a082311461022a578063853828b61461025357806394b918de1461025b578063959b8c3f1461026e57806395d89b41146102815780639bd9bbc61461028957600080fd5b80632ae6218d116101195780632ae6218d146101d15780632e1a7d4d146101d9578063313ce567146101ee578063556f0dc7146101fd57806362ad1b83146102045780636d1b229d1461021757600080fd5b806306e485381461015657806306fdde0314610174578063095ea7b31461018957806318160ddd146101ac57806323b872dd146101be575b600080fd5b61015e610334565b60405161016b9190611abb565b60405180910390f35b61017c610396565b60405161016b9190611b55565b61019c610197366004611b7d565b61041f565b604051901515815260200161016b565b6001545b60405190815260200161016b565b61019c6101cc366004611ba9565b610437565b6101b061058b565b6101ec6101e7366004611bea565b6105e3565b005b6040516012815260200161016b565b60016101b0565b6101ec610212366004611ca9565b6106d6565b6101ec610225366004611bea565b610715565b6101b0610238366004611d3c565b600160a060020a031660009081526020819052604090205490565b6101ec610868565b6101ec610269366004611bea565b6109c7565b6101ec61027c366004611d3c565b610ac2565b61017c610bfc565b6101ec610297366004611d59565b610c0b565b61019c6102aa366004611b7d565b610c2e565b61019c6102bd366004611db2565b610ce4565b6101b06102d0366004611db2565b600160a060020a03918216600090815260086020908152604080832093909416825291909152205490565b6101ec610309366004611d3c565b610d85565b6101ec61031c366004611deb565b610ec0565b6101ec61032f366004611e6b565b610efb565b6060600480548060200260200160405190810160405280929190818152602001828054801561038c57602002820191906000526020600020905b8154600160a060020a0316815260019091019060200180831161036e575b5050505050905090565b6060600280546103a590611eb2565b80601f01602080910402602001604051908101604052809291908181526020018280546103d190611eb2565b801561038c5780601f106103f35761010080835404028352916020019161038c565b820191906000526020600020905b81548152906001019060200180831161040157509395945050505050565b60003361042d818585610f16565b5060019392505050565b6000600160a060020a03831661046b5760405160e560020a62461bcd02815260040161046290611ef0565b60405180910390fd5b600160a060020a0384166104ea5760405160e560020a62461bcd02815260206004820152602660248201527f4552433737373a207472616e736665722066726f6d20746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610462565b600033905061051b818686866040518060200160405280600081525060405180602001604052806000815250611075565b6105268582856111cf565b61055281868686604051806020016040528060008152506040518060200160405280600081525061125e565b61058081868686604051806020016040528060008152506040518060200160405280600081525060006113dd565b506001949350505050565b600080600d5461059a60015490565b6105a49190611f66565b9050806105b357600091505090565b6000600e54600c546105c59190611f66565b6105d283620f4240611f7d565b6105dc9190611f9c565b9392505050565b600a54600160a060020a031633146106405760405160e560020a62461bcd02815260206004820152600d60248201527f4163636573732044656e696564000000000000000000000000000000000000006044820152606401610462565b600954600a546040517fa9059cbb000000000000000000000000000000000000000000000000000000008152600160a060020a0391821660048201526024810184905291169063a9059cbb906044016020604051808303816000875af11580156106ae573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106d29190611fc1565b5050565b6106e03386610ce4565b6106ff5760405160e560020a62461bcd02815260040161046290611fe3565b61070e858585858560016115e7565b5050505050565b6107423361dead8360405180602001604052806000815250604051806020016040528060008152506106d6565b6000600d5461075060015490565b61075a9190611f66565b90506000600e54600c5461076e9190611f66565b61077c836305f5e100611f7d565b6107869190611f9c565b905060006107948285611f9c565b6107a2906305f5e100611f7d565b6009546040517fa9059cbb00000000000000000000000000000000000000000000000000000000815233600482015260248101839052919250600160a060020a03169063a9059cbb906044016020604051808303816000875af115801561080d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108319190611fc1565b5083600d60008282546108449190612040565b9250508190555080600e600082825461085d9190612040565b909155505050505050565b600a54600160a060020a031633146108c55760405160e560020a62461bcd02815260206004820152600d60248201527f4163636573732044656e696564000000000000000000000000000000000000006044820152606401610462565b600954600a546040517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152600160a060020a039283169263a9059cbb92169083906370a0823190602401602060405180830381865afa158015610933573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109579190612058565b60405160e060020a63ffffffff8516028152600160a060020a03909216600483015260248201526044016020604051808303816000875af11580156109a0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109c49190611fc1565b50565b6009546040517f23b872dd00000000000000000000000000000000000000000000000000000000815233600482015230602482015260448101839052600160a060020a03909116906323b872dd906064016020604051808303816000875af1158015610a37573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a5b9190611fc1565b5080600c6000828254610a6e9190612040565b9091555060009050610a7e6116eb565b610a8c836305f5e100611f7d565b610a969190611f9c565b90506106d23382604051806020016040528060008152506040518060200160405280600081525061177d565b33600160a060020a0382161415610b435760405160e560020a62461bcd028152602060048201526024808201527f4552433737373a20617574686f72697a696e672073656c66206173206f70657260448201527f61746f72000000000000000000000000000000000000000000000000000000006064820152608401610462565b600160a060020a03811660009081526005602052604090205460ff1615610b9457336000908152600760209081526040808320600160a060020a03851684529091529020805460ff19169055610bc3565b336000908152600660209081526040808320600160a060020a03851684529091529020805460ff191660011790555b6040513390600160a060020a038316907ff4caeb2d6ca8932a215a353d0703c326ec2d81fc68170f320eb2ab49e9df61f990600090a350565b6060600380546103a590611eb2565b610c29338484846040518060200160405280600081525060016115e7565b505050565b6000600160a060020a038316610c595760405160e560020a62461bcd02815260040161046290611ef0565b6000339050610c8a818286866040518060200160405280600081525060405180602001604052806000815250611075565b610cb681828686604051806020016040528060008152506040518060200160405280600081525061125e565b61042d81828686604051806020016040528060008152506040518060200160405280600081525060006113dd565b600081600160a060020a031683600160a060020a03161480610d4f5750600160a060020a03831660009081526005602052604090205460ff168015610d4f5750600160a060020a0380831660009081526007602090815260408083209387168352929052205460ff16155b806105dc5750600160a060020a0380831660009081526006602090815260408083209387168352929052205460ff169392505050565b600160a060020a038116331415610e075760405160e560020a62461bcd02815260206004820152602160248201527f4552433737373a207265766f6b696e672073656c66206173206f70657261746f60448201527f72000000000000000000000000000000000000000000000000000000000000006064820152608401610462565b600160a060020a03811660009081526005602052604090205460ff1615610e5b57336000908152600760209081526040808320600160a060020a03851684529091529020805460ff19166001179055610e87565b336000908152600660209081526040808320600160a060020a03851684529091529020805460ff191690555b6040513390600160a060020a038316907f50546e66e5f44d728365dc3908c63bc5cfeeab470722c1677e3073a6ac294aa190600090a350565b610eca3385610ce4565b610ee95760405160e560020a62461bcd02815260040161046290611fe3565b610ef58484848461178b565b50505050565b6106d23383836040518060200160405280600081525061178b565b600160a060020a038316610f955760405160e560020a62461bcd02815260206004820152602560248201527f4552433737373a20617070726f76652066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610462565b600160a060020a0382166110145760405160e560020a62461bcd02815260206004820152602360248201527f4552433737373a20617070726f766520746f20746865207a65726f206164647260448201527f65737300000000000000000000000000000000000000000000000000000000006064820152608401610462565b600160a060020a0383811660008181526008602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6040517faabbb8ca000000000000000000000000000000000000000000000000000000008152600160a060020a03861660048201527f29ddb589b1fb5fc7cf394961c1adf5f8c6454761adf795e67fe149f658abe8956024820152600090731820a4b7618bde71dce8cdc73aab6c95905fad249063aabbb8ca90604401602060405180830381865afa15801561110f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111339190612071565b9050600160a060020a038116156111c6576040517f75ab9782000000000000000000000000000000000000000000000000000000008152600160a060020a038216906375ab978290611193908a908a908a908a908a908a9060040161208e565b600060405180830381600087803b1580156111ad57600080fd5b505af11580156111c1573d6000803e3d6000fd5b505050505b50505050505050565b600160a060020a038381166000908152600860209081526040808320938616835292905220546000198114610ef557818110156112515760405160e560020a62461bcd02815260206004820152601e60248201527f4552433737373a20696e73756666696369656e7420616c6c6f77616e636500006044820152606401610462565b610ef58484848403610f16565b600160a060020a038516600090815260208190526040902054838110156112f05760405160e560020a62461bcd02815260206004820152602760248201527f4552433737373a207472616e7366657220616d6f756e7420657863656564732060448201527f62616c616e6365000000000000000000000000000000000000000000000000006064820152608401610462565b600160a060020a03808716600090815260208190526040808220878503905591871681529081208054869290611327908490612040565b9250508190555084600160a060020a031686600160a060020a031688600160a060020a03167f06b541ddaa720db2b10a4d0cdac39b8d360425fc073085fac19bc8261467798787878760405161137f939291906120e7565b60405180910390a484600160a060020a031686600160a060020a03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef866040516113cc91815260200190565b60405180910390a350505050505050565b6040517faabbb8ca000000000000000000000000000000000000000000000000000000008152600160a060020a03861660048201527fb281fc8c12954d22544db45de3159a39272895b169a852b314f9cc762e44c53b6024820152600090731820a4b7618bde71dce8cdc73aab6c95905fad249063aabbb8ca90604401602060405180830381865afa158015611477573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061149b9190612071565b9050600160a060020a03811615611530576040517e23de29000000000000000000000000000000000000000000000000000000008152600160a060020a038216906223de29906114f9908b908b908b908b908b908b9060040161208e565b600060405180830381600087803b15801561151357600080fd5b505af1158015611527573d6000803e3d6000fd5b505050506115dd565b81156115dd57600160a060020a0386163b156115dd5760405160e560020a62461bcd02815260206004820152604d60248201527f4552433737373a20746f6b656e20726563697069656e7420636f6e747261637460448201527f20686173206e6f20696d706c656d656e74657220666f7220455243373737546f60648201527f6b656e73526563697069656e7400000000000000000000000000000000000000608482015260a401610462565b5050505050505050565b600160a060020a0386166116665760405160e560020a62461bcd02815260206004820152602260248201527f4552433737373a2073656e642066726f6d20746865207a65726f20616464726560448201527f73730000000000000000000000000000000000000000000000000000000000006064820152608401610462565b600160a060020a0385166116bf5760405160e560020a62461bcd02815260206004820181905260248201527f4552433737373a2073656e6420746f20746865207a65726f20616464726573736044820152606401610462565b336116ce818888888888611075565b6116dc81888888888861125e565b6111c6818888888888886113dd565b600080600080600080600b60009054906101000a9004600160a060020a0316600160a060020a031663feaf968c6040518163ffffffff1660e060020a02815260040160a060405180830381865afa15801561174a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061176e919061213b565b50919998505050505050505050565b610ef584848484600161197b565b600160a060020a03841661180a5760405160e560020a62461bcd02815260206004820152602260248201527f4552433737373a206275726e2066726f6d20746865207a65726f20616464726560448201527f73730000000000000000000000000000000000000000000000000000000000006064820152608401610462565b3361181a81866000878787611075565b600160a060020a038516600090815260208190526040902054848110156118ac5760405160e560020a62461bcd02815260206004820152602360248201527f4552433737373a206275726e20616d6f756e7420657863656564732062616c6160448201527f6e636500000000000000000000000000000000000000000000000000000000006064820152608401610462565b600160a060020a03861660009081526020819052604081208683039055600180548792906118db908490611f66565b9250508190555085600160a060020a031682600160a060020a03167fa78a9be3a7b862d26933ad85fb11d80ef66b8f972d7cbba06621d583943a4098878787604051611929939291906120e7565b60405180910390a3604051858152600090600160a060020a038816907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020015b60405180910390a3505050505050565b600160a060020a0385166119d45760405160e560020a62461bcd02815260206004820181905260248201527f4552433737373a206d696e7420746f20746865207a65726f20616464726573736044820152606401610462565b600033905084600160008282546119eb9190612040565b9091555050600160a060020a03861660009081526020819052604081208054879290611a18908490612040565b90915550611a2e905081600088888888886113dd565b85600160a060020a031681600160a060020a03167f2fe5be0146f74c5bce36c0b80911af6c7d86ff27e89d5cfa61fc681327954e5d878787604051611a75939291906120e7565b60405180910390a3604051858152600160a060020a038716906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200161196b565b6020808252825182820181905260009190848201906040850190845b81811015611afc578351600160a060020a031683529284019291840191600101611ad7565b50909695505050505050565b6000815180845260005b81811015611b2e57602081850181015186830182015201611b12565b81811115611b40576000602083870101525b50601f01601f19169290920160200192915050565b6020815260006105dc6020830184611b08565b600160a060020a03811681146109c457600080fd5b60008060408385031215611b9057600080fd5b8235611b9b81611b68565b946020939093013593505050565b600080600060608486031215611bbe57600080fd5b8335611bc981611b68565b92506020840135611bd981611b68565b929592945050506040919091013590565b600060208284031215611bfc57600080fd5b5035919050565b60e060020a634e487b7102600052604160045260246000fd5b600082601f830112611c2d57600080fd5b813567ffffffffffffffff80821115611c4857611c48611c03565b604051601f8301601f19908116603f01168101908282118183101715611c7057611c70611c03565b81604052838152866020858801011115611c8957600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080600080600060a08688031215611cc157600080fd5b8535611ccc81611b68565b94506020860135611cdc81611b68565b935060408601359250606086013567ffffffffffffffff80821115611d0057600080fd5b611d0c89838a01611c1c565b93506080880135915080821115611d2257600080fd5b50611d2f88828901611c1c565b9150509295509295909350565b600060208284031215611d4e57600080fd5b81356105dc81611b68565b600080600060608486031215611d6e57600080fd5b8335611d7981611b68565b925060208401359150604084013567ffffffffffffffff811115611d9c57600080fd5b611da886828701611c1c565b9150509250925092565b60008060408385031215611dc557600080fd5b8235611dd081611b68565b91506020830135611de081611b68565b809150509250929050565b60008060008060808587031215611e0157600080fd5b8435611e0c81611b68565b935060208501359250604085013567ffffffffffffffff80821115611e3057600080fd5b611e3c88838901611c1c565b93506060870135915080821115611e5257600080fd5b50611e5f87828801611c1c565b91505092959194509250565b60008060408385031215611e7e57600080fd5b82359150602083013567ffffffffffffffff811115611e9c57600080fd5b611ea885828601611c1c565b9150509250929050565b600281046001821680611ec657607f821691505b60208210811415611eea5760e060020a634e487b7102600052602260045260246000fd5b50919050565b60208082526024908201527f4552433737373a207472616e7366657220746f20746865207a65726f2061646460408201527f7265737300000000000000000000000000000000000000000000000000000000606082015260800190565b60e060020a634e487b7102600052601160045260246000fd5b600082821015611f7857611f78611f4d565b500390565b6000816000190483118215151615611f9757611f97611f4d565b500290565b600082611fbc5760e060020a634e487b7102600052601260045260246000fd5b500490565b600060208284031215611fd357600080fd5b815180151581146105dc57600080fd5b6020808252602c908201527f4552433737373a2063616c6c6572206973206e6f7420616e206f70657261746f60408201527f7220666f7220686f6c6465720000000000000000000000000000000000000000606082015260800190565b6000821982111561205357612053611f4d565b500190565b60006020828403121561206a57600080fd5b5051919050565b60006020828403121561208357600080fd5b81516105dc81611b68565b6000600160a060020a038089168352808816602084015280871660408401525084606083015260c060808301526120c860c0830185611b08565b82810360a08401526120da8185611b08565b9998505050505050505050565b8381526060602082015260006121006060830185611b08565b82810360408401526121128185611b08565b9695505050505050565b805169ffffffffffffffffffff8116811461213657600080fd5b919050565b600080600080600060a0868803121561215357600080fd5b61215c8661211c565b945060208601519350604086015192506060860151915061217f6080870161211c565b9050929550929590935056fea2646970667358221220b5724b9ed800300eb2cfcb57fb6c419410c461736bcc0ea88495fd592f18c75e64736f6c634300080a0033",
  "immutableReferences": {},
  "generatedSources": [
    {
      "ast": {
        "nodeType": "YulBlock",
        "src": "0:833:11",
        "statements": [
          {
            "nodeType": "YulBlock",
            "src": "6:3:11",
            "statements": []
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "171:218:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "181:26:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "193:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "204:2:11",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "189:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "189:18:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "181:4:11"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "216:29:11",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "234:1:11",
                            "type": "",
                            "value": "2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "237:3:11",
                            "type": "",
                            "value": "160"
                          }
                        ],
                        "functionName": {
                          "name": "exp",
                          "nodeType": "YulIdentifier",
                          "src": "230:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "230:11:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "243:1:11",
                        "type": "",
                        "value": "1"
                      }
                    ],
                    "functionName": {
                      "name": "sub",
                      "nodeType": "YulIdentifier",
                      "src": "226:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "226:19:11"
                  },
                  "variables": [
                    {
                      "name": "_1",
                      "nodeType": "YulTypedName",
                      "src": "220:2:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "261:9:11"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "276:6:11"
                          },
                          {
                            "name": "_1",
                            "nodeType": "YulIdentifier",
                            "src": "284:2:11"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "272:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "272:15:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "254:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "254:34:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "254:34:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "308:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "319:2:11",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "304:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "304:18:11"
                      },
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "324:6:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "297:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "297:34:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "297:34:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "351:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "362:2:11",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "347:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "347:18:11"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value2",
                            "nodeType": "YulIdentifier",
                            "src": "371:6:11"
                          },
                          {
                            "name": "_1",
                            "nodeType": "YulIdentifier",
                            "src": "379:2:11"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "367:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "367:15:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "340:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "340:43:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "340:43:11"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address_t_bytes32_t_address__to_t_address_t_bytes32_t_address__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "124:9:11",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "135:6:11",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "143:6:11",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "151:6:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "162:4:11",
                "type": ""
              }
            ],
            "src": "14:375:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "449:382:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "459:22:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "473:4:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "479:1:11",
                        "type": "",
                        "value": "2"
                      }
                    ],
                    "functionName": {
                      "name": "div",
                      "nodeType": "YulIdentifier",
                      "src": "469:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "469:12:11"
                  },
                  "variableNames": [
                    {
                      "name": "length",
                      "nodeType": "YulIdentifier",
                      "src": "459:6:11"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "490:38:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "520:4:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "526:1:11",
                        "type": "",
                        "value": "1"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "516:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "516:12:11"
                  },
                  "variables": [
                    {
                      "name": "outOfPlaceEncoding",
                      "nodeType": "YulTypedName",
                      "src": "494:18:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "567:31:11",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "569:27:11",
                        "value": {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "583:6:11"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "591:4:11",
                              "type": "",
                              "value": "0x7f"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "579:3:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "579:17:11"
                        },
                        "variableNames": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "569:6:11"
                          }
                        ]
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulIdentifier",
                        "src": "547:18:11"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "540:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "540:26:11"
                  },
                  "nodeType": "YulIf",
                  "src": "537:61:11"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "657:168:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "678:1:11",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "681:77:11",
                              "type": "",
                              "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "671:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "671:88:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "671:88:11"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "779:1:11",
                              "type": "",
                              "value": "4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "782:4:11",
                              "type": "",
                              "value": "0x22"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "772:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "772:15:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "772:15:11"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "807:1:11",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "810:4:11",
                              "type": "",
                              "value": "0x24"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "800:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "800:15:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "800:15:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulIdentifier",
                        "src": "613:18:11"
                      },
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "636:6:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "644:2:11",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "lt",
                          "nodeType": "YulIdentifier",
                          "src": "633:2:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "633:14:11"
                      }
                    ],
                    "functionName": {
                      "name": "eq",
                      "nodeType": "YulIdentifier",
                      "src": "610:2:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "610:38:11"
                  },
                  "nodeType": "YulIf",
                  "src": "607:218:11"
                }
              ]
            },
            "name": "extract_byte_array_length",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "data",
                "nodeType": "YulTypedName",
                "src": "429:4:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "438:6:11",
                "type": ""
              }
            ],
            "src": "394:437:11"
          }
        ]
      },
      "contents": "{\n    { }\n    function abi_encode_tuple_t_address_t_bytes32_t_address__to_t_address_t_bytes32_t_address__fromStack_reversed(headStart, value2, value1, value0) -> tail\n    {\n        tail := add(headStart, 96)\n        let _1 := sub(exp(2, 160), 1)\n        mstore(headStart, and(value0, _1))\n        mstore(add(headStart, 32), value1)\n        mstore(add(headStart, 64), and(value2, _1))\n    }\n    function extract_byte_array_length(data) -> length\n    {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) { length := and(length, 0x7f) }\n        if eq(outOfPlaceEncoding, lt(length, 32))\n        {\n            mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n            mstore(4, 0x22)\n            revert(0, 0x24)\n        }\n    }\n}",
      "id": 11,
      "language": "Yul",
      "name": "#utility.yul"
    }
  ],
  "deployedGeneratedSources": [
    {
      "ast": {
        "nodeType": "YulBlock",
        "src": "0:18760:11",
        "statements": [
          {
            "nodeType": "YulBlock",
            "src": "6:3:11",
            "statements": []
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "165:530:11",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "175:12:11",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "185:2:11",
                    "type": "",
                    "value": "32"
                  },
                  "variables": [
                    {
                      "name": "_1",
                      "nodeType": "YulTypedName",
                      "src": "179:2:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "196:32:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "214:9:11"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "225:2:11"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "210:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "210:18:11"
                  },
                  "variables": [
                    {
                      "name": "tail_1",
                      "nodeType": "YulTypedName",
                      "src": "200:6:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "244:9:11"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "255:2:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "237:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "237:21:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "237:21:11"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "267:17:11",
                  "value": {
                    "name": "tail_1",
                    "nodeType": "YulIdentifier",
                    "src": "278:6:11"
                  },
                  "variables": [
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "271:3:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "293:27:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "313:6:11"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "307:5:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "307:13:11"
                  },
                  "variables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "297:6:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "tail_1",
                        "nodeType": "YulIdentifier",
                        "src": "336:6:11"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "344:6:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "329:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "329:22:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "329:22:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "360:25:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "371:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "382:2:11",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "367:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "367:18:11"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "360:3:11"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "394:29:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "412:6:11"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "420:2:11"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "408:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "408:15:11"
                  },
                  "variables": [
                    {
                      "name": "srcPtr",
                      "nodeType": "YulTypedName",
                      "src": "398:6:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "432:10:11",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "441:1:11",
                    "type": "",
                    "value": "0"
                  },
                  "variables": [
                    {
                      "name": "i",
                      "nodeType": "YulTypedName",
                      "src": "436:1:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "500:169:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "521:3:11"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "srcPtr",
                                      "nodeType": "YulIdentifier",
                                      "src": "536:6:11"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mload",
                                    "nodeType": "YulIdentifier",
                                    "src": "530:5:11"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "530:13:11"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "545:42:11",
                                  "type": "",
                                  "value": "0xffffffffffffffffffffffffffffffffffffffff"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nodeType": "YulIdentifier",
                                "src": "526:3:11"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "526:62:11"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "514:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "514:75:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "514:75:11"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "602:19:11",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "613:3:11"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "618:2:11"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "609:3:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "609:12:11"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "602:3:11"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "634:25:11",
                        "value": {
                          "arguments": [
                            {
                              "name": "srcPtr",
                              "nodeType": "YulIdentifier",
                              "src": "648:6:11"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "656:2:11"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "644:3:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "644:15:11"
                        },
                        "variableNames": [
                          {
                            "name": "srcPtr",
                            "nodeType": "YulIdentifier",
                            "src": "634:6:11"
                          }
                        ]
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "i",
                        "nodeType": "YulIdentifier",
                        "src": "462:1:11"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "465:6:11"
                      }
                    ],
                    "functionName": {
                      "name": "lt",
                      "nodeType": "YulIdentifier",
                      "src": "459:2:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "459:13:11"
                  },
                  "nodeType": "YulForLoop",
                  "post": {
                    "nodeType": "YulBlock",
                    "src": "473:18:11",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "475:14:11",
                        "value": {
                          "arguments": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "484:1:11"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "487:1:11",
                              "type": "",
                              "value": "1"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "480:3:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "480:9:11"
                        },
                        "variableNames": [
                          {
                            "name": "i",
                            "nodeType": "YulIdentifier",
                            "src": "475:1:11"
                          }
                        ]
                      }
                    ]
                  },
                  "pre": {
                    "nodeType": "YulBlock",
                    "src": "455:3:11",
                    "statements": []
                  },
                  "src": "451:218:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "678:11:11",
                  "value": {
                    "name": "pos",
                    "nodeType": "YulIdentifier",
                    "src": "686:3:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "678:4:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_array$_t_address_$dyn_memory_ptr__to_t_array$_t_address_$dyn_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "134:9:11",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "145:6:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "156:4:11",
                "type": ""
              }
            ],
            "src": "14:681:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "750:422:11",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "760:26:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "780:5:11"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "774:5:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "774:12:11"
                  },
                  "variables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "764:6:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "802:3:11"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "807:6:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "795:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "795:19:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "795:19:11"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "823:10:11",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "832:1:11",
                    "type": "",
                    "value": "0"
                  },
                  "variables": [
                    {
                      "name": "i",
                      "nodeType": "YulTypedName",
                      "src": "827:1:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "894:110:11",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "908:14:11",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "918:4:11",
                          "type": "",
                          "value": "0x20"
                        },
                        "variables": [
                          {
                            "name": "_1",
                            "nodeType": "YulTypedName",
                            "src": "912:2:11",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "pos",
                                      "nodeType": "YulIdentifier",
                                      "src": "950:3:11"
                                    },
                                    {
                                      "name": "i",
                                      "nodeType": "YulIdentifier",
                                      "src": "955:1:11"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "946:3:11"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "946:11:11"
                                },
                                {
                                  "name": "_1",
                                  "nodeType": "YulIdentifier",
                                  "src": "959:2:11"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "942:3:11"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "942:20:11"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "name": "value",
                                          "nodeType": "YulIdentifier",
                                          "src": "978:5:11"
                                        },
                                        {
                                          "name": "i",
                                          "nodeType": "YulIdentifier",
                                          "src": "985:1:11"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nodeType": "YulIdentifier",
                                        "src": "974:3:11"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "974:13:11"
                                    },
                                    {
                                      "name": "_1",
                                      "nodeType": "YulIdentifier",
                                      "src": "989:2:11"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "970:3:11"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "970:22:11"
                                }
                              ],
                              "functionName": {
                                "name": "mload",
                                "nodeType": "YulIdentifier",
                                "src": "964:5:11"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "964:29:11"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "935:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "935:59:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "935:59:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "i",
                        "nodeType": "YulIdentifier",
                        "src": "853:1:11"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "856:6:11"
                      }
                    ],
                    "functionName": {
                      "name": "lt",
                      "nodeType": "YulIdentifier",
                      "src": "850:2:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "850:13:11"
                  },
                  "nodeType": "YulForLoop",
                  "post": {
                    "nodeType": "YulBlock",
                    "src": "864:21:11",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "866:17:11",
                        "value": {
                          "arguments": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "875:1:11"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "878:4:11",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "871:3:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "871:12:11"
                        },
                        "variableNames": [
                          {
                            "name": "i",
                            "nodeType": "YulIdentifier",
                            "src": "866:1:11"
                          }
                        ]
                      }
                    ]
                  },
                  "pre": {
                    "nodeType": "YulBlock",
                    "src": "846:3:11",
                    "statements": []
                  },
                  "src": "842:162:11"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1038:62:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "pos",
                                      "nodeType": "YulIdentifier",
                                      "src": "1067:3:11"
                                    },
                                    {
                                      "name": "length",
                                      "nodeType": "YulIdentifier",
                                      "src": "1072:6:11"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "1063:3:11"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1063:16:11"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1081:4:11",
                                  "type": "",
                                  "value": "0x20"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1059:3:11"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1059:27:11"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1088:1:11",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "1052:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1052:38:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1052:38:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "i",
                        "nodeType": "YulIdentifier",
                        "src": "1019:1:11"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "1022:6:11"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "1016:2:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1016:13:11"
                  },
                  "nodeType": "YulIf",
                  "src": "1013:87:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1109:57:11",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "1124:3:11"
                          },
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "length",
                                    "nodeType": "YulIdentifier",
                                    "src": "1137:6:11"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1145:2:11",
                                    "type": "",
                                    "value": "31"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "1133:3:11"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1133:15:11"
                              },
                              {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1154:2:11",
                                    "type": "",
                                    "value": "31"
                                  }
                                ],
                                "functionName": {
                                  "name": "not",
                                  "nodeType": "YulIdentifier",
                                  "src": "1150:3:11"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1150:7:11"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "1129:3:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1129:29:11"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1120:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1120:39:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1161:4:11",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "1116:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1116:50:11"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "1109:3:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_string",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "727:5:11",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "734:3:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "742:3:11",
                "type": ""
              }
            ],
            "src": "700:472:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1298:99:11",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1315:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1326:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1308:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1308:21:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1308:21:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1338:53:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "1364:6:11"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1376:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1387:2:11",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1372:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1372:18:11"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_string",
                      "nodeType": "YulIdentifier",
                      "src": "1346:17:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1346:45:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "1338:4:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "1267:9:11",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1278:6:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "1289:4:11",
                "type": ""
              }
            ],
            "src": "1177:220:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1447:109:11",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1534:16:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1543:1:11",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1546:1:11",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "1536:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1536:12:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1536:12:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "1470:5:11"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "1481:5:11"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1488:42:11",
                                "type": "",
                                "value": "0xffffffffffffffffffffffffffffffffffffffff"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "1477:3:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1477:54:11"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "1467:2:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1467:65:11"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "1460:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1460:73:11"
                  },
                  "nodeType": "YulIf",
                  "src": "1457:93:11"
                }
              ]
            },
            "name": "validator_revert_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "1436:5:11",
                "type": ""
              }
            ],
            "src": "1402:154:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1648:228:11",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1694:16:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1703:1:11",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1706:1:11",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "1696:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1696:12:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1696:12:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "1669:7:11"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1678:9:11"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "1665:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1665:23:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1690:2:11",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "1661:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1661:32:11"
                  },
                  "nodeType": "YulIf",
                  "src": "1658:52:11"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "1719:36:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1745:9:11"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "1732:12:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1732:23:11"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "1723:5:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "1789:5:11"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "1764:24:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1764:31:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1764:31:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1804:15:11",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "1814:5:11"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "1804:6:11"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1828:42:11",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1855:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1866:2:11",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1851:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1851:18:11"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "1838:12:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1838:32:11"
                  },
                  "variableNames": [
                    {
                      "name": "value1",
                      "nodeType": "YulIdentifier",
                      "src": "1828:6:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_addresst_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "1606:9:11",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "1617:7:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1629:6:11",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "1637:6:11",
                "type": ""
              }
            ],
            "src": "1561:315:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1976:92:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1986:26:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1998:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2009:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "1994:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1994:18:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "1986:4:11"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2028:9:11"
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value0",
                                "nodeType": "YulIdentifier",
                                "src": "2053:6:11"
                              }
                            ],
                            "functionName": {
                              "name": "iszero",
                              "nodeType": "YulIdentifier",
                              "src": "2046:6:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2046:14:11"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nodeType": "YulIdentifier",
                          "src": "2039:6:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2039:22:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2021:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2021:41:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2021:41:11"
                }
              ]
            },
            "name": "abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "1945:9:11",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1956:6:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "1967:4:11",
                "type": ""
              }
            ],
            "src": "1881:187:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2174:76:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2184:26:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2196:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2207:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2192:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2192:18:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "2184:4:11"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2226:9:11"
                      },
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "2237:6:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2219:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2219:25:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2219:25:11"
                }
              ]
            },
            "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "2143:9:11",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "2154:6:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "2165:4:11",
                "type": ""
              }
            ],
            "src": "2073:177:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2359:352:11",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2405:16:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2414:1:11",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2417:1:11",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "2407:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2407:12:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2407:12:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "2380:7:11"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2389:9:11"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "2376:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2376:23:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2401:2:11",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "2372:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2372:32:11"
                  },
                  "nodeType": "YulIf",
                  "src": "2369:52:11"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2430:36:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2456:9:11"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "2443:12:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2443:23:11"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "2434:5:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "2500:5:11"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "2475:24:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2475:31:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2475:31:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2515:15:11",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "2525:5:11"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "2515:6:11"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2539:47:11",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2571:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2582:2:11",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2567:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2567:18:11"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "2554:12:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2554:32:11"
                  },
                  "variables": [
                    {
                      "name": "value_1",
                      "nodeType": "YulTypedName",
                      "src": "2543:7:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value_1",
                        "nodeType": "YulIdentifier",
                        "src": "2620:7:11"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "2595:24:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2595:33:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2595:33:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2637:17:11",
                  "value": {
                    "name": "value_1",
                    "nodeType": "YulIdentifier",
                    "src": "2647:7:11"
                  },
                  "variableNames": [
                    {
                      "name": "value1",
                      "nodeType": "YulIdentifier",
                      "src": "2637:6:11"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2663:42:11",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2690:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2701:2:11",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2686:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2686:18:11"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "2673:12:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2673:32:11"
                  },
                  "variableNames": [
                    {
                      "name": "value2",
                      "nodeType": "YulIdentifier",
                      "src": "2663:6:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_addresst_addresst_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "2309:9:11",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "2320:7:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "2332:6:11",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "2340:6:11",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "2348:6:11",
                "type": ""
              }
            ],
            "src": "2255:456:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2786:110:11",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2832:16:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2841:1:11",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2844:1:11",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "2834:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2834:12:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2834:12:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "2807:7:11"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2816:9:11"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "2803:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2803:23:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2828:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "2799:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2799:32:11"
                  },
                  "nodeType": "YulIf",
                  "src": "2796:52:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2857:33:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2880:9:11"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "2867:12:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2867:23:11"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "2857:6:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "2752:9:11",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "2763:7:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "2775:6:11",
                "type": ""
              }
            ],
            "src": "2716:180:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2998:87:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "3008:26:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "3020:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3031:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "3016:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3016:18:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "3008:4:11"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "3050:9:11"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "3065:6:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3073:4:11",
                            "type": "",
                            "value": "0xff"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "3061:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3061:17:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3043:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3043:36:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3043:36:11"
                }
              ]
            },
            "name": "abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "2967:9:11",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "2978:6:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "2989:4:11",
                "type": ""
              }
            ],
            "src": "2901:184:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3122:152:11",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3139:1:11",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3142:77:11",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3132:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3132:88:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3132:88:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3236:1:11",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3239:4:11",
                        "type": "",
                        "value": "0x41"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3229:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3229:15:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3229:15:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3260:1:11",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3263:4:11",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "3253:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3253:15:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3253:15:11"
                }
              ]
            },
            "name": "panic_error_0x41",
            "nodeType": "YulFunctionDefinition",
            "src": "3090:184:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3331:666:11",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3380:16:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3389:1:11",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3392:1:11",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "3382:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3382:12:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3382:12:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "3359:6:11"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3367:4:11",
                                "type": "",
                                "value": "0x1f"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "3355:3:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3355:17:11"
                          },
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "3374:3:11"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nodeType": "YulIdentifier",
                          "src": "3351:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3351:27:11"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "3344:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3344:35:11"
                  },
                  "nodeType": "YulIf",
                  "src": "3341:55:11"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "3405:30:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "3428:6:11"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "3415:12:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3415:20:11"
                  },
                  "variables": [
                    {
                      "name": "_1",
                      "nodeType": "YulTypedName",
                      "src": "3409:2:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "3444:28:11",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "3454:18:11",
                    "type": "",
                    "value": "0xffffffffffffffff"
                  },
                  "variables": [
                    {
                      "name": "_2",
                      "nodeType": "YulTypedName",
                      "src": "3448:2:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3495:22:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x41",
                            "nodeType": "YulIdentifier",
                            "src": "3497:16:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3497:18:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3497:18:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "3487:2:11"
                      },
                      {
                        "name": "_2",
                        "nodeType": "YulIdentifier",
                        "src": "3491:2:11"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "3484:2:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3484:10:11"
                  },
                  "nodeType": "YulIf",
                  "src": "3481:36:11"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "3526:17:11",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3540:2:11",
                        "type": "",
                        "value": "31"
                      }
                    ],
                    "functionName": {
                      "name": "not",
                      "nodeType": "YulIdentifier",
                      "src": "3536:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3536:7:11"
                  },
                  "variables": [
                    {
                      "name": "_3",
                      "nodeType": "YulTypedName",
                      "src": "3530:2:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "3552:23:11",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3572:2:11",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "3566:5:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3566:9:11"
                  },
                  "variables": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulTypedName",
                      "src": "3556:6:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "3584:71:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "memPtr",
                        "nodeType": "YulIdentifier",
                        "src": "3606:6:11"
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "_1",
                                        "nodeType": "YulIdentifier",
                                        "src": "3630:2:11"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "3634:4:11",
                                        "type": "",
                                        "value": "0x1f"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "3626:3:11"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "3626:13:11"
                                  },
                                  {
                                    "name": "_3",
                                    "nodeType": "YulIdentifier",
                                    "src": "3641:2:11"
                                  }
                                ],
                                "functionName": {
                                  "name": "and",
                                  "nodeType": "YulIdentifier",
                                  "src": "3622:3:11"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "3622:22:11"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3646:2:11",
                                "type": "",
                                "value": "63"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "3618:3:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3618:31:11"
                          },
                          {
                            "name": "_3",
                            "nodeType": "YulIdentifier",
                            "src": "3651:2:11"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "3614:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3614:40:11"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "3602:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3602:53:11"
                  },
                  "variables": [
                    {
                      "name": "newFreePtr",
                      "nodeType": "YulTypedName",
                      "src": "3588:10:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3714:22:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x41",
                            "nodeType": "YulIdentifier",
                            "src": "3716:16:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3716:18:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3716:18:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "newFreePtr",
                            "nodeType": "YulIdentifier",
                            "src": "3673:10:11"
                          },
                          {
                            "name": "_2",
                            "nodeType": "YulIdentifier",
                            "src": "3685:2:11"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "3670:2:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3670:18:11"
                      },
                      {
                        "arguments": [
                          {
                            "name": "newFreePtr",
                            "nodeType": "YulIdentifier",
                            "src": "3693:10:11"
                          },
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "3705:6:11"
                          }
                        ],
                        "functionName": {
                          "name": "lt",
                          "nodeType": "YulIdentifier",
                          "src": "3690:2:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3690:22:11"
                      }
                    ],
                    "functionName": {
                      "name": "or",
                      "nodeType": "YulIdentifier",
                      "src": "3667:2:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3667:46:11"
                  },
                  "nodeType": "YulIf",
                  "src": "3664:72:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3752:2:11",
                        "type": "",
                        "value": "64"
                      },
                      {
                        "name": "newFreePtr",
                        "nodeType": "YulIdentifier",
                        "src": "3756:10:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3745:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3745:22:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3745:22:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "memPtr",
                        "nodeType": "YulIdentifier",
                        "src": "3783:6:11"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "3791:2:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3776:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3776:18:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3776:18:11"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3842:16:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3851:1:11",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3854:1:11",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "3844:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3844:12:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3844:12:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "3817:6:11"
                              },
                              {
                                "name": "_1",
                                "nodeType": "YulIdentifier",
                                "src": "3825:2:11"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "3813:3:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3813:15:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3830:4:11",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3809:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3809:26:11"
                      },
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "3837:3:11"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "3806:2:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3806:35:11"
                  },
                  "nodeType": "YulIf",
                  "src": "3803:55:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "3884:6:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3892:4:11",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3880:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3880:17:11"
                      },
                      {
                        "arguments": [
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "3903:6:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3911:4:11",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3899:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3899:17:11"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "3918:2:11"
                      }
                    ],
                    "functionName": {
                      "name": "calldatacopy",
                      "nodeType": "YulIdentifier",
                      "src": "3867:12:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3867:54:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3867:54:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "memPtr",
                                "nodeType": "YulIdentifier",
                                "src": "3945:6:11"
                              },
                              {
                                "name": "_1",
                                "nodeType": "YulIdentifier",
                                "src": "3953:2:11"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "3941:3:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3941:15:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3958:4:11",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3937:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3937:26:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3965:1:11",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3930:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3930:37:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3930:37:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3976:15:11",
                  "value": {
                    "name": "memPtr",
                    "nodeType": "YulIdentifier",
                    "src": "3985:6:11"
                  },
                  "variableNames": [
                    {
                      "name": "array",
                      "nodeType": "YulIdentifier",
                      "src": "3976:5:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_bytes",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "3305:6:11",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "3313:3:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "array",
                "nodeType": "YulTypedName",
                "src": "3321:5:11",
                "type": ""
              }
            ],
            "src": "3279:718:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4158:729:11",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4205:16:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4214:1:11",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4217:1:11",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "4207:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4207:12:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4207:12:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "4179:7:11"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4188:9:11"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "4175:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4175:23:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4200:3:11",
                        "type": "",
                        "value": "160"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "4171:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4171:33:11"
                  },
                  "nodeType": "YulIf",
                  "src": "4168:53:11"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "4230:36:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "4256:9:11"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "4243:12:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4243:23:11"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "4234:5:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "4300:5:11"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "4275:24:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4275:31:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4275:31:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4315:15:11",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "4325:5:11"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "4315:6:11"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "4339:47:11",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4371:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4382:2:11",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4367:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4367:18:11"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "4354:12:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4354:32:11"
                  },
                  "variables": [
                    {
                      "name": "value_1",
                      "nodeType": "YulTypedName",
                      "src": "4343:7:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value_1",
                        "nodeType": "YulIdentifier",
                        "src": "4420:7:11"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "4395:24:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4395:33:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4395:33:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4437:17:11",
                  "value": {
                    "name": "value_1",
                    "nodeType": "YulIdentifier",
                    "src": "4447:7:11"
                  },
                  "variableNames": [
                    {
                      "name": "value1",
                      "nodeType": "YulIdentifier",
                      "src": "4437:6:11"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4463:42:11",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4490:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4501:2:11",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4486:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4486:18:11"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "4473:12:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4473:32:11"
                  },
                  "variableNames": [
                    {
                      "name": "value2",
                      "nodeType": "YulIdentifier",
                      "src": "4463:6:11"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "4514:46:11",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4545:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4556:2:11",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4541:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4541:18:11"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "4528:12:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4528:32:11"
                  },
                  "variables": [
                    {
                      "name": "offset",
                      "nodeType": "YulTypedName",
                      "src": "4518:6:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "4569:28:11",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "4579:18:11",
                    "type": "",
                    "value": "0xffffffffffffffff"
                  },
                  "variables": [
                    {
                      "name": "_1",
                      "nodeType": "YulTypedName",
                      "src": "4573:2:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4624:16:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4633:1:11",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4636:1:11",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "4626:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4626:12:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4626:12:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "4612:6:11"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "4620:2:11"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "4609:2:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4609:14:11"
                  },
                  "nodeType": "YulIf",
                  "src": "4606:34:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4649:59:11",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4680:9:11"
                          },
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "4691:6:11"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4676:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4676:22:11"
                      },
                      {
                        "name": "dataEnd",
                        "nodeType": "YulIdentifier",
                        "src": "4700:7:11"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_bytes",
                      "nodeType": "YulIdentifier",
                      "src": "4659:16:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4659:49:11"
                  },
                  "variableNames": [
                    {
                      "name": "value3",
                      "nodeType": "YulIdentifier",
                      "src": "4649:6:11"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "4717:49:11",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4750:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4761:3:11",
                            "type": "",
                            "value": "128"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4746:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4746:19:11"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "4733:12:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4733:33:11"
                  },
                  "variables": [
                    {
                      "name": "offset_1",
                      "nodeType": "YulTypedName",
                      "src": "4721:8:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4795:16:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4804:1:11",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4807:1:11",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "4797:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4797:12:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4797:12:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "offset_1",
                        "nodeType": "YulIdentifier",
                        "src": "4781:8:11"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "4791:2:11"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "4778:2:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4778:16:11"
                  },
                  "nodeType": "YulIf",
                  "src": "4775:36:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4820:61:11",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4851:9:11"
                          },
                          {
                            "name": "offset_1",
                            "nodeType": "YulIdentifier",
                            "src": "4862:8:11"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4847:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4847:24:11"
                      },
                      {
                        "name": "dataEnd",
                        "nodeType": "YulIdentifier",
                        "src": "4873:7:11"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_bytes",
                      "nodeType": "YulIdentifier",
                      "src": "4830:16:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4830:51:11"
                  },
                  "variableNames": [
                    {
                      "name": "value4",
                      "nodeType": "YulIdentifier",
                      "src": "4820:6:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_addresst_addresst_uint256t_bytes_memory_ptrt_bytes_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "4092:9:11",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "4103:7:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "4115:6:11",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "4123:6:11",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "4131:6:11",
                "type": ""
              },
              {
                "name": "value3",
                "nodeType": "YulTypedName",
                "src": "4139:6:11",
                "type": ""
              },
              {
                "name": "value4",
                "nodeType": "YulTypedName",
                "src": "4147:6:11",
                "type": ""
              }
            ],
            "src": "4002:885:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4962:177:11",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "5008:16:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5017:1:11",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5020:1:11",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "5010:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5010:12:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "5010:12:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "4983:7:11"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4992:9:11"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "4979:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4979:23:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5004:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "4975:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4975:32:11"
                  },
                  "nodeType": "YulIf",
                  "src": "4972:52:11"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "5033:36:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "5059:9:11"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "5046:12:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5046:23:11"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "5037:5:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "5103:5:11"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "5078:24:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5078:31:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5078:31:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "5118:15:11",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "5128:5:11"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "5118:6:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "4928:9:11",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "4939:7:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "4951:6:11",
                "type": ""
              }
            ],
            "src": "4892:247:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5257:410:11",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "5303:16:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5312:1:11",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5315:1:11",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "5305:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5305:12:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "5305:12:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "5278:7:11"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5287:9:11"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "5274:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5274:23:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5299:2:11",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "5270:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5270:32:11"
                  },
                  "nodeType": "YulIf",
                  "src": "5267:52:11"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "5328:36:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "5354:9:11"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "5341:12:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5341:23:11"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "5332:5:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "5398:5:11"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "5373:24:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5373:31:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5373:31:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "5413:15:11",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "5423:5:11"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "5413:6:11"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "5437:42:11",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5464:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5475:2:11",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5460:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5460:18:11"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "5447:12:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5447:32:11"
                  },
                  "variableNames": [
                    {
                      "name": "value1",
                      "nodeType": "YulIdentifier",
                      "src": "5437:6:11"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "5488:46:11",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5519:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5530:2:11",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5515:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5515:18:11"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "5502:12:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5502:32:11"
                  },
                  "variables": [
                    {
                      "name": "offset",
                      "nodeType": "YulTypedName",
                      "src": "5492:6:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "5577:16:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5586:1:11",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5589:1:11",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "5579:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5579:12:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "5579:12:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "5549:6:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5557:18:11",
                        "type": "",
                        "value": "0xffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "5546:2:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5546:30:11"
                  },
                  "nodeType": "YulIf",
                  "src": "5543:50:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "5602:59:11",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5633:9:11"
                          },
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "5644:6:11"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5629:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5629:22:11"
                      },
                      {
                        "name": "dataEnd",
                        "nodeType": "YulIdentifier",
                        "src": "5653:7:11"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_bytes",
                      "nodeType": "YulIdentifier",
                      "src": "5612:16:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5612:49:11"
                  },
                  "variableNames": [
                    {
                      "name": "value2",
                      "nodeType": "YulIdentifier",
                      "src": "5602:6:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_addresst_uint256t_bytes_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "5207:9:11",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "5218:7:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "5230:6:11",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "5238:6:11",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "5246:6:11",
                "type": ""
              }
            ],
            "src": "5144:523:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5759:301:11",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "5805:16:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5814:1:11",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5817:1:11",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "5807:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5807:12:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "5807:12:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "5780:7:11"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5789:9:11"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "5776:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5776:23:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5801:2:11",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "5772:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5772:32:11"
                  },
                  "nodeType": "YulIf",
                  "src": "5769:52:11"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "5830:36:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "5856:9:11"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "5843:12:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5843:23:11"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "5834:5:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "5900:5:11"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "5875:24:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5875:31:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5875:31:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "5915:15:11",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "5925:5:11"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "5915:6:11"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "5939:47:11",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5971:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5982:2:11",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5967:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5967:18:11"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "5954:12:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5954:32:11"
                  },
                  "variables": [
                    {
                      "name": "value_1",
                      "nodeType": "YulTypedName",
                      "src": "5943:7:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value_1",
                        "nodeType": "YulIdentifier",
                        "src": "6020:7:11"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "5995:24:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5995:33:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5995:33:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6037:17:11",
                  "value": {
                    "name": "value_1",
                    "nodeType": "YulIdentifier",
                    "src": "6047:7:11"
                  },
                  "variableNames": [
                    {
                      "name": "value1",
                      "nodeType": "YulIdentifier",
                      "src": "6037:6:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_addresst_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "5717:9:11",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "5728:7:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "5740:6:11",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "5748:6:11",
                "type": ""
              }
            ],
            "src": "5672:388:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6204:604:11",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "6251:16:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6260:1:11",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6263:1:11",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "6253:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6253:12:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "6253:12:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "6225:7:11"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6234:9:11"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "6221:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6221:23:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6246:3:11",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "6217:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6217:33:11"
                  },
                  "nodeType": "YulIf",
                  "src": "6214:53:11"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "6276:36:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "6302:9:11"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "6289:12:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6289:23:11"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "6280:5:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "6346:5:11"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "6321:24:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6321:31:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6321:31:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6361:15:11",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "6371:5:11"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "6361:6:11"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6385:42:11",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6412:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6423:2:11",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6408:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6408:18:11"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "6395:12:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6395:32:11"
                  },
                  "variableNames": [
                    {
                      "name": "value1",
                      "nodeType": "YulIdentifier",
                      "src": "6385:6:11"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "6436:46:11",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6467:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6478:2:11",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6463:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6463:18:11"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "6450:12:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6450:32:11"
                  },
                  "variables": [
                    {
                      "name": "offset",
                      "nodeType": "YulTypedName",
                      "src": "6440:6:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "6491:28:11",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "6501:18:11",
                    "type": "",
                    "value": "0xffffffffffffffff"
                  },
                  "variables": [
                    {
                      "name": "_1",
                      "nodeType": "YulTypedName",
                      "src": "6495:2:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "6546:16:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6555:1:11",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6558:1:11",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "6548:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6548:12:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "6548:12:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "6534:6:11"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "6542:2:11"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "6531:2:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6531:14:11"
                  },
                  "nodeType": "YulIf",
                  "src": "6528:34:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6571:59:11",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6602:9:11"
                          },
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "6613:6:11"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6598:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6598:22:11"
                      },
                      {
                        "name": "dataEnd",
                        "nodeType": "YulIdentifier",
                        "src": "6622:7:11"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_bytes",
                      "nodeType": "YulIdentifier",
                      "src": "6581:16:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6581:49:11"
                  },
                  "variableNames": [
                    {
                      "name": "value2",
                      "nodeType": "YulIdentifier",
                      "src": "6571:6:11"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "6639:48:11",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6672:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6683:2:11",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6668:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6668:18:11"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "6655:12:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6655:32:11"
                  },
                  "variables": [
                    {
                      "name": "offset_1",
                      "nodeType": "YulTypedName",
                      "src": "6643:8:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "6716:16:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6725:1:11",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6728:1:11",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "6718:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6718:12:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "6718:12:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "offset_1",
                        "nodeType": "YulIdentifier",
                        "src": "6702:8:11"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "6712:2:11"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "6699:2:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6699:16:11"
                  },
                  "nodeType": "YulIf",
                  "src": "6696:36:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6741:61:11",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6772:9:11"
                          },
                          {
                            "name": "offset_1",
                            "nodeType": "YulIdentifier",
                            "src": "6783:8:11"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6768:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6768:24:11"
                      },
                      {
                        "name": "dataEnd",
                        "nodeType": "YulIdentifier",
                        "src": "6794:7:11"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_bytes",
                      "nodeType": "YulIdentifier",
                      "src": "6751:16:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6751:51:11"
                  },
                  "variableNames": [
                    {
                      "name": "value3",
                      "nodeType": "YulIdentifier",
                      "src": "6741:6:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_addresst_uint256t_bytes_memory_ptrt_bytes_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "6146:9:11",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "6157:7:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "6169:6:11",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "6177:6:11",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "6185:6:11",
                "type": ""
              },
              {
                "name": "value3",
                "nodeType": "YulTypedName",
                "src": "6193:6:11",
                "type": ""
              }
            ],
            "src": "6065:743:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6909:292:11",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "6955:16:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6964:1:11",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6967:1:11",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "6957:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6957:12:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "6957:12:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "6930:7:11"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6939:9:11"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "6926:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6926:23:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6951:2:11",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "6922:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6922:32:11"
                  },
                  "nodeType": "YulIf",
                  "src": "6919:52:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6980:33:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "7003:9:11"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "6990:12:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6990:23:11"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "6980:6:11"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "7022:46:11",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7053:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7064:2:11",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7049:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7049:18:11"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "7036:12:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7036:32:11"
                  },
                  "variables": [
                    {
                      "name": "offset",
                      "nodeType": "YulTypedName",
                      "src": "7026:6:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "7111:16:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7120:1:11",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7123:1:11",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "7113:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7113:12:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "7113:12:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "7083:6:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7091:18:11",
                        "type": "",
                        "value": "0xffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "7080:2:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7080:30:11"
                  },
                  "nodeType": "YulIf",
                  "src": "7077:50:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "7136:59:11",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7167:9:11"
                          },
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "7178:6:11"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7163:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7163:22:11"
                      },
                      {
                        "name": "dataEnd",
                        "nodeType": "YulIdentifier",
                        "src": "7187:7:11"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_bytes",
                      "nodeType": "YulIdentifier",
                      "src": "7146:16:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7146:49:11"
                  },
                  "variableNames": [
                    {
                      "name": "value1",
                      "nodeType": "YulIdentifier",
                      "src": "7136:6:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_uint256t_bytes_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "6867:9:11",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "6878:7:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "6890:6:11",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "6898:6:11",
                "type": ""
              }
            ],
            "src": "6813:388:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7261:382:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "7271:22:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "7285:4:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7291:1:11",
                        "type": "",
                        "value": "2"
                      }
                    ],
                    "functionName": {
                      "name": "div",
                      "nodeType": "YulIdentifier",
                      "src": "7281:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7281:12:11"
                  },
                  "variableNames": [
                    {
                      "name": "length",
                      "nodeType": "YulIdentifier",
                      "src": "7271:6:11"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "7302:38:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "7332:4:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7338:1:11",
                        "type": "",
                        "value": "1"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "7328:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7328:12:11"
                  },
                  "variables": [
                    {
                      "name": "outOfPlaceEncoding",
                      "nodeType": "YulTypedName",
                      "src": "7306:18:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "7379:31:11",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "7381:27:11",
                        "value": {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "7395:6:11"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7403:4:11",
                              "type": "",
                              "value": "0x7f"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "7391:3:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7391:17:11"
                        },
                        "variableNames": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "7381:6:11"
                          }
                        ]
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulIdentifier",
                        "src": "7359:18:11"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "7352:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7352:26:11"
                  },
                  "nodeType": "YulIf",
                  "src": "7349:61:11"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "7469:168:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7490:1:11",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7493:77:11",
                              "type": "",
                              "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "7483:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7483:88:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "7483:88:11"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7591:1:11",
                              "type": "",
                              "value": "4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7594:4:11",
                              "type": "",
                              "value": "0x22"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "7584:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7584:15:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "7584:15:11"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7619:1:11",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7622:4:11",
                              "type": "",
                              "value": "0x24"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "7612:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7612:15:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "7612:15:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulIdentifier",
                        "src": "7425:18:11"
                      },
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "7448:6:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7456:2:11",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "lt",
                          "nodeType": "YulIdentifier",
                          "src": "7445:2:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7445:14:11"
                      }
                    ],
                    "functionName": {
                      "name": "eq",
                      "nodeType": "YulIdentifier",
                      "src": "7422:2:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7422:38:11"
                  },
                  "nodeType": "YulIf",
                  "src": "7419:218:11"
                }
              ]
            },
            "name": "extract_byte_array_length",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "data",
                "nodeType": "YulTypedName",
                "src": "7241:4:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "7250:6:11",
                "type": ""
              }
            ],
            "src": "7206:437:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7822:226:11",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "7839:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7850:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7832:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7832:21:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7832:21:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7873:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7884:2:11",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7869:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7869:18:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7889:2:11",
                        "type": "",
                        "value": "36"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7862:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7862:30:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7862:30:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7912:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7923:2:11",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7908:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7908:18:11"
                      },
                      {
                        "hexValue": "4552433737373a207472616e7366657220746f20746865207a65726f20616464",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "7928:34:11",
                        "type": "",
                        "value": "ERC777: transfer to the zero add"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7901:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7901:62:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7901:62:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7983:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7994:2:11",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7979:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7979:18:11"
                      },
                      {
                        "hexValue": "72657373",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "7999:6:11",
                        "type": "",
                        "value": "ress"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7972:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7972:34:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7972:34:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "8015:27:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "8027:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8038:3:11",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "8023:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8023:19:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "8015:4:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_ad1e0a820fe2a50167f341463ad5f6754fad4cf77d809141bc408c516e69c59a__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "7799:9:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "7813:4:11",
                "type": ""
              }
            ],
            "src": "7648:400:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8227:228:11",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "8244:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8255:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8237:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8237:21:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8237:21:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "8278:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8289:2:11",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8274:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8274:18:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8294:2:11",
                        "type": "",
                        "value": "38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8267:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8267:30:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8267:30:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "8317:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8328:2:11",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8313:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8313:18:11"
                      },
                      {
                        "hexValue": "4552433737373a207472616e736665722066726f6d20746865207a65726f2061",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "8333:34:11",
                        "type": "",
                        "value": "ERC777: transfer from the zero a"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8306:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8306:62:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8306:62:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "8388:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8399:2:11",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8384:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8384:18:11"
                      },
                      {
                        "hexValue": "646472657373",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "8404:8:11",
                        "type": "",
                        "value": "ddress"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8377:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8377:36:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8377:36:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "8422:27:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "8434:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8445:3:11",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "8430:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8430:19:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "8422:4:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_e354b0408f2a1e89707ec9f6aaa5427ceb97704ace0785924c7421e8f577dc7a__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "8204:9:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "8218:4:11",
                "type": ""
              }
            ],
            "src": "8053:402:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8492:152:11",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8509:1:11",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8512:77:11",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8502:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8502:88:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8502:88:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8606:1:11",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8609:4:11",
                        "type": "",
                        "value": "0x11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8599:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8599:15:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8599:15:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8630:1:11",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8633:4:11",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "8623:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8623:15:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8623:15:11"
                }
              ]
            },
            "name": "panic_error_0x11",
            "nodeType": "YulFunctionDefinition",
            "src": "8460:184:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8698:76:11",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "8720:22:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "8722:16:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8722:18:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "8722:18:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "8714:1:11"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "8717:1:11"
                      }
                    ],
                    "functionName": {
                      "name": "lt",
                      "nodeType": "YulIdentifier",
                      "src": "8711:2:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8711:8:11"
                  },
                  "nodeType": "YulIf",
                  "src": "8708:34:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "8751:17:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "8763:1:11"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "8766:1:11"
                      }
                    ],
                    "functionName": {
                      "name": "sub",
                      "nodeType": "YulIdentifier",
                      "src": "8759:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8759:9:11"
                  },
                  "variableNames": [
                    {
                      "name": "diff",
                      "nodeType": "YulIdentifier",
                      "src": "8751:4:11"
                    }
                  ]
                }
              ]
            },
            "name": "checked_sub_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "8680:1:11",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "8683:1:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "diff",
                "nodeType": "YulTypedName",
                "src": "8689:4:11",
                "type": ""
              }
            ],
            "src": "8649:125:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8831:116:11",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "8890:22:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "8892:16:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8892:18:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "8892:18:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "x",
                                "nodeType": "YulIdentifier",
                                "src": "8862:1:11"
                              }
                            ],
                            "functionName": {
                              "name": "iszero",
                              "nodeType": "YulIdentifier",
                              "src": "8855:6:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "8855:9:11"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nodeType": "YulIdentifier",
                          "src": "8848:6:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8848:17:11"
                      },
                      {
                        "arguments": [
                          {
                            "name": "y",
                            "nodeType": "YulIdentifier",
                            "src": "8870:1:11"
                          },
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "8881:1:11",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "not",
                                  "nodeType": "YulIdentifier",
                                  "src": "8877:3:11"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "8877:6:11"
                              },
                              {
                                "name": "x",
                                "nodeType": "YulIdentifier",
                                "src": "8885:1:11"
                              }
                            ],
                            "functionName": {
                              "name": "div",
                              "nodeType": "YulIdentifier",
                              "src": "8873:3:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "8873:14:11"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "8867:2:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8867:21:11"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "8844:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8844:45:11"
                  },
                  "nodeType": "YulIf",
                  "src": "8841:71:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "8921:20:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "8936:1:11"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "8939:1:11"
                      }
                    ],
                    "functionName": {
                      "name": "mul",
                      "nodeType": "YulIdentifier",
                      "src": "8932:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8932:9:11"
                  },
                  "variableNames": [
                    {
                      "name": "product",
                      "nodeType": "YulIdentifier",
                      "src": "8921:7:11"
                    }
                  ]
                }
              ]
            },
            "name": "checked_mul_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "8810:1:11",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "8813:1:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "product",
                "nodeType": "YulTypedName",
                "src": "8819:7:11",
                "type": ""
              }
            ],
            "src": "8779:168:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8998:228:11",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "9029:168:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "9050:1:11",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "9053:77:11",
                              "type": "",
                              "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "9043:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9043:88:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "9043:88:11"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "9151:1:11",
                              "type": "",
                              "value": "4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "9154:4:11",
                              "type": "",
                              "value": "0x12"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "9144:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9144:15:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "9144:15:11"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "9179:1:11",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "9182:4:11",
                              "type": "",
                              "value": "0x24"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "9172:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9172:15:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "9172:15:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "9018:1:11"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "9011:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9011:9:11"
                  },
                  "nodeType": "YulIf",
                  "src": "9008:189:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "9206:14:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "9215:1:11"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "9218:1:11"
                      }
                    ],
                    "functionName": {
                      "name": "div",
                      "nodeType": "YulIdentifier",
                      "src": "9211:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9211:9:11"
                  },
                  "variableNames": [
                    {
                      "name": "r",
                      "nodeType": "YulIdentifier",
                      "src": "9206:1:11"
                    }
                  ]
                }
              ]
            },
            "name": "checked_div_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "8983:1:11",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "8986:1:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "r",
                "nodeType": "YulTypedName",
                "src": "8992:1:11",
                "type": ""
              }
            ],
            "src": "8952:274:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9405:163:11",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "9422:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9433:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9415:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9415:21:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9415:21:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "9456:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9467:2:11",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "9452:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9452:18:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9472:2:11",
                        "type": "",
                        "value": "13"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9445:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9445:30:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9445:30:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "9495:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9506:2:11",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "9491:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9491:18:11"
                      },
                      {
                        "hexValue": "4163636573732044656e696564",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "9511:15:11",
                        "type": "",
                        "value": "Access Denied"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9484:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9484:43:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9484:43:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "9536:26:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "9548:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9559:2:11",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "9544:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9544:18:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "9536:4:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_4de4edbd6381194572dd0ff1e4941d4b774997c05d2f2b31c1c37d0f15da2226__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "9382:9:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "9396:4:11",
                "type": ""
              }
            ],
            "src": "9231:337:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9702:168:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "9712:26:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "9724:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9735:2:11",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "9720:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9720:18:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "9712:4:11"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "9754:9:11"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "9769:6:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9777:42:11",
                            "type": "",
                            "value": "0xffffffffffffffffffffffffffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "9765:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9765:55:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9747:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9747:74:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9747:74:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "9841:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9852:2:11",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "9837:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9837:18:11"
                      },
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "9857:6:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9830:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9830:34:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9830:34:11"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address_t_uint256__to_t_address_t_uint256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "9663:9:11",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "9674:6:11",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "9682:6:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "9693:4:11",
                "type": ""
              }
            ],
            "src": "9573:297:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9953:199:11",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "9999:16:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "10008:1:11",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "10011:1:11",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "10001:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10001:12:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "10001:12:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "9974:7:11"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "9983:9:11"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "9970:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9970:23:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9995:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "9966:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9966:32:11"
                  },
                  "nodeType": "YulIf",
                  "src": "9963:52:11"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "10024:29:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "10043:9:11"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "10037:5:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10037:16:11"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "10028:5:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "10106:16:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "10115:1:11",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "10118:1:11",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "10108:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10108:12:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "10108:12:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "10075:5:11"
                          },
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "value",
                                    "nodeType": "YulIdentifier",
                                    "src": "10096:5:11"
                                  }
                                ],
                                "functionName": {
                                  "name": "iszero",
                                  "nodeType": "YulIdentifier",
                                  "src": "10089:6:11"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "10089:13:11"
                              }
                            ],
                            "functionName": {
                              "name": "iszero",
                              "nodeType": "YulIdentifier",
                              "src": "10082:6:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "10082:21:11"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "10072:2:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10072:32:11"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "10065:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10065:40:11"
                  },
                  "nodeType": "YulIf",
                  "src": "10062:60:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "10131:15:11",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "10141:5:11"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "10131:6:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_bool_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "9919:9:11",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "9930:7:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "9942:6:11",
                "type": ""
              }
            ],
            "src": "9875:277:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "10331:234:11",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "10348:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10359:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10341:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10341:21:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10341:21:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "10382:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10393:2:11",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "10378:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10378:18:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10398:2:11",
                        "type": "",
                        "value": "44"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10371:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10371:30:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10371:30:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "10421:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10432:2:11",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "10417:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10417:18:11"
                      },
                      {
                        "hexValue": "4552433737373a2063616c6c6572206973206e6f7420616e206f70657261746f",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "10437:34:11",
                        "type": "",
                        "value": "ERC777: caller is not an operato"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10410:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10410:62:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10410:62:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "10492:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10503:2:11",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "10488:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10488:18:11"
                      },
                      {
                        "hexValue": "7220666f7220686f6c646572",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "10508:14:11",
                        "type": "",
                        "value": "r for holder"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10481:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10481:42:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10481:42:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "10532:27:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "10544:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10555:3:11",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "10540:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10540:19:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "10532:4:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_d0e912496dc7a0050c7f3e14272d4929a90a242e3fdaef730410cdf35f965235__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "10308:9:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "10322:4:11",
                "type": ""
              }
            ],
            "src": "10157:408:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "10618:80:11",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "10645:22:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "10647:16:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10647:18:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "10647:18:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "10634:1:11"
                      },
                      {
                        "arguments": [
                          {
                            "name": "y",
                            "nodeType": "YulIdentifier",
                            "src": "10641:1:11"
                          }
                        ],
                        "functionName": {
                          "name": "not",
                          "nodeType": "YulIdentifier",
                          "src": "10637:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10637:6:11"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "10631:2:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10631:13:11"
                  },
                  "nodeType": "YulIf",
                  "src": "10628:39:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "10676:16:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "10687:1:11"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "10690:1:11"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "10683:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10683:9:11"
                  },
                  "variableNames": [
                    {
                      "name": "sum",
                      "nodeType": "YulIdentifier",
                      "src": "10676:3:11"
                    }
                  ]
                }
              ]
            },
            "name": "checked_add_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "10601:1:11",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "10604:1:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "sum",
                "nodeType": "YulTypedName",
                "src": "10610:3:11",
                "type": ""
              }
            ],
            "src": "10570:128:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "10804:125:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "10814:26:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "10826:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10837:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "10822:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10822:18:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "10814:4:11"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "10856:9:11"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "10871:6:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10879:42:11",
                            "type": "",
                            "value": "0xffffffffffffffffffffffffffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "10867:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10867:55:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10849:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10849:74:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10849:74:11"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "10773:9:11",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "10784:6:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "10795:4:11",
                "type": ""
              }
            ],
            "src": "10703:226:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "11015:103:11",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "11061:16:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "11070:1:11",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "11073:1:11",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "11063:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11063:12:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "11063:12:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "11036:7:11"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "11045:9:11"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "11032:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11032:23:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11057:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "11028:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11028:32:11"
                  },
                  "nodeType": "YulIf",
                  "src": "11025:52:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "11086:26:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "11102:9:11"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "11096:5:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11096:16:11"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "11086:6:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_uint256_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "10981:9:11",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "10992:7:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "11004:6:11",
                "type": ""
              }
            ],
            "src": "10934:184:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "11280:241:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "11290:26:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "11302:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11313:2:11",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "11298:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11298:18:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "11290:4:11"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "11325:52:11",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "11335:42:11",
                    "type": "",
                    "value": "0xffffffffffffffffffffffffffffffffffffffff"
                  },
                  "variables": [
                    {
                      "name": "_1",
                      "nodeType": "YulTypedName",
                      "src": "11329:2:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "11393:9:11"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "11408:6:11"
                          },
                          {
                            "name": "_1",
                            "nodeType": "YulIdentifier",
                            "src": "11416:2:11"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "11404:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11404:15:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11386:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11386:34:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11386:34:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "11440:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "11451:2:11",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "11436:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11436:18:11"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value1",
                            "nodeType": "YulIdentifier",
                            "src": "11460:6:11"
                          },
                          {
                            "name": "_1",
                            "nodeType": "YulIdentifier",
                            "src": "11468:2:11"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "11456:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11456:15:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11429:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11429:43:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11429:43:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "11492:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "11503:2:11",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "11488:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11488:18:11"
                      },
                      {
                        "name": "value2",
                        "nodeType": "YulIdentifier",
                        "src": "11508:6:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11481:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11481:34:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11481:34:11"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address_t_address_t_uint256__to_t_address_t_address_t_uint256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "11233:9:11",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "11244:6:11",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "11252:6:11",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "11260:6:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "11271:4:11",
                "type": ""
              }
            ],
            "src": "11123:398:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "11700:226:11",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "11717:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11728:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11710:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11710:21:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11710:21:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "11751:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "11762:2:11",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "11747:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11747:18:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11767:2:11",
                        "type": "",
                        "value": "36"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11740:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11740:30:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11740:30:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "11790:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "11801:2:11",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "11786:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11786:18:11"
                      },
                      {
                        "hexValue": "4552433737373a20617574686f72697a696e672073656c66206173206f706572",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "11806:34:11",
                        "type": "",
                        "value": "ERC777: authorizing self as oper"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11779:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11779:62:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11779:62:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "11861:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "11872:2:11",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "11857:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11857:18:11"
                      },
                      {
                        "hexValue": "61746f72",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "11877:6:11",
                        "type": "",
                        "value": "ator"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11850:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11850:34:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11850:34:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "11893:27:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "11905:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11916:3:11",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "11901:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11901:19:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "11893:4:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_4682b297c30e70ba17ae545f9c27f948e3607c0cc7dd469250dfcf8daa94218c__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "11677:9:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "11691:4:11",
                "type": ""
              }
            ],
            "src": "11526:400:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "12105:223:11",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "12122:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12133:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12115:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12115:21:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12115:21:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "12156:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "12167:2:11",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "12152:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12152:18:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12172:2:11",
                        "type": "",
                        "value": "33"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12145:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12145:30:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12145:30:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "12195:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "12206:2:11",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "12191:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12191:18:11"
                      },
                      {
                        "hexValue": "4552433737373a207265766f6b696e672073656c66206173206f70657261746f",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "12211:34:11",
                        "type": "",
                        "value": "ERC777: revoking self as operato"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12184:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12184:62:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12184:62:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "12266:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "12277:2:11",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "12262:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12262:18:11"
                      },
                      {
                        "hexValue": "72",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "12282:3:11",
                        "type": "",
                        "value": "r"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12255:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12255:31:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12255:31:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "12295:27:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "12307:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12318:3:11",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "12303:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12303:19:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "12295:4:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_67ce503bd3a359eb530c6f3a909afa9e71899e0352d883198e721fd5fceefab5__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "12082:9:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "12096:4:11",
                "type": ""
              }
            ],
            "src": "11931:397:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "12507:227:11",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "12524:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12535:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12517:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12517:21:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12517:21:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "12558:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "12569:2:11",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "12554:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12554:18:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12574:2:11",
                        "type": "",
                        "value": "37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12547:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12547:30:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12547:30:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "12597:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "12608:2:11",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "12593:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12593:18:11"
                      },
                      {
                        "hexValue": "4552433737373a20617070726f76652066726f6d20746865207a65726f206164",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "12613:34:11",
                        "type": "",
                        "value": "ERC777: approve from the zero ad"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12586:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12586:62:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12586:62:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "12668:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "12679:2:11",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "12664:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12664:18:11"
                      },
                      {
                        "hexValue": "6472657373",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "12684:7:11",
                        "type": "",
                        "value": "dress"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12657:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12657:35:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12657:35:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "12701:27:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "12713:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12724:3:11",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "12709:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12709:19:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "12701:4:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_0e27915827f7e9aa1f9e706fa48897705bd51fdbb8c4e17f0dcc074873455ca7__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "12484:9:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "12498:4:11",
                "type": ""
              }
            ],
            "src": "12333:401:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "12913:225:11",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "12930:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12941:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12923:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12923:21:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12923:21:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "12964:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "12975:2:11",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "12960:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12960:18:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12980:2:11",
                        "type": "",
                        "value": "35"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12953:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12953:30:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12953:30:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "13003:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "13014:2:11",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "12999:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12999:18:11"
                      },
                      {
                        "hexValue": "4552433737373a20617070726f766520746f20746865207a65726f2061646472",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "13019:34:11",
                        "type": "",
                        "value": "ERC777: approve to the zero addr"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12992:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12992:62:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12992:62:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "13074:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "13085:2:11",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "13070:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13070:18:11"
                      },
                      {
                        "hexValue": "657373",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "13090:5:11",
                        "type": "",
                        "value": "ess"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "13063:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13063:33:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13063:33:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "13105:27:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "13117:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "13128:3:11",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "13113:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13113:19:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "13105:4:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_f96aab14690ac2986315360e71dcbe877ff7fb69d13c692db6f39f8c2c01f20d__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "12890:9:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "12904:4:11",
                "type": ""
              }
            ],
            "src": "12739:399:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "13272:168:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "13282:26:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "13294:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "13305:2:11",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "13290:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13290:18:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "13282:4:11"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "13324:9:11"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "13339:6:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "13347:42:11",
                            "type": "",
                            "value": "0xffffffffffffffffffffffffffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "13335:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13335:55:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "13317:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13317:74:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13317:74:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "13411:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "13422:2:11",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "13407:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13407:18:11"
                      },
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "13427:6:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "13400:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13400:34:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13400:34:11"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address_t_bytes32__to_t_address_t_bytes32__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "13233:9:11",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "13244:6:11",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "13252:6:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "13263:4:11",
                "type": ""
              }
            ],
            "src": "13143:297:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "13526:170:11",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "13572:16:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "13581:1:11",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "13584:1:11",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "13574:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "13574:12:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "13574:12:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "13547:7:11"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "13556:9:11"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "13543:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13543:23:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "13568:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "13539:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13539:32:11"
                  },
                  "nodeType": "YulIf",
                  "src": "13536:52:11"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "13597:29:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "13616:9:11"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "13610:5:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13610:16:11"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "13601:5:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "13660:5:11"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "13635:24:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13635:31:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13635:31:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "13675:15:11",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "13685:5:11"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "13675:6:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_address_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "13492:9:11",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "13503:7:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "13515:6:11",
                "type": ""
              }
            ],
            "src": "13445:251:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "13978:478:11",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "13988:52:11",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "13998:42:11",
                    "type": "",
                    "value": "0xffffffffffffffffffffffffffffffffffffffff"
                  },
                  "variables": [
                    {
                      "name": "_1",
                      "nodeType": "YulTypedName",
                      "src": "13992:2:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "14056:9:11"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "14071:6:11"
                          },
                          {
                            "name": "_1",
                            "nodeType": "YulIdentifier",
                            "src": "14079:2:11"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "14067:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14067:15:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "14049:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14049:34:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14049:34:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "14103:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "14114:2:11",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "14099:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14099:18:11"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value1",
                            "nodeType": "YulIdentifier",
                            "src": "14123:6:11"
                          },
                          {
                            "name": "_1",
                            "nodeType": "YulIdentifier",
                            "src": "14131:2:11"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "14119:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14119:15:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "14092:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14092:43:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14092:43:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "14155:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "14166:2:11",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "14151:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14151:18:11"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value2",
                            "nodeType": "YulIdentifier",
                            "src": "14175:6:11"
                          },
                          {
                            "name": "_1",
                            "nodeType": "YulIdentifier",
                            "src": "14183:2:11"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "14171:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14171:15:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "14144:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14144:43:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14144:43:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "14207:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "14218:2:11",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "14203:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14203:18:11"
                      },
                      {
                        "name": "value3",
                        "nodeType": "YulIdentifier",
                        "src": "14223:6:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "14196:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14196:34:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14196:34:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "14250:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "14261:3:11",
                            "type": "",
                            "value": "128"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "14246:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14246:19:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "14267:3:11",
                        "type": "",
                        "value": "192"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "14239:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14239:32:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14239:32:11"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "14280:60:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "value4",
                        "nodeType": "YulIdentifier",
                        "src": "14312:6:11"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "14324:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "14335:3:11",
                            "type": "",
                            "value": "192"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "14320:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14320:19:11"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_string",
                      "nodeType": "YulIdentifier",
                      "src": "14294:17:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14294:46:11"
                  },
                  "variables": [
                    {
                      "name": "tail_1",
                      "nodeType": "YulTypedName",
                      "src": "14284:6:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "14360:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "14371:3:11",
                            "type": "",
                            "value": "160"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "14356:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14356:19:11"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail_1",
                            "nodeType": "YulIdentifier",
                            "src": "14381:6:11"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "14389:9:11"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "14377:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14377:22:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "14349:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14349:51:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14349:51:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "14409:41:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "value5",
                        "nodeType": "YulIdentifier",
                        "src": "14435:6:11"
                      },
                      {
                        "name": "tail_1",
                        "nodeType": "YulIdentifier",
                        "src": "14443:6:11"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_string",
                      "nodeType": "YulIdentifier",
                      "src": "14417:17:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14417:33:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "14409:4:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_address_t_address_t_address_t_uint256_t_bytes_memory_ptr_t_bytes_memory_ptr__to_t_address_t_address_t_address_t_uint256_t_bytes_memory_ptr_t_bytes_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "13907:9:11",
                "type": ""
              },
              {
                "name": "value5",
                "nodeType": "YulTypedName",
                "src": "13918:6:11",
                "type": ""
              },
              {
                "name": "value4",
                "nodeType": "YulTypedName",
                "src": "13926:6:11",
                "type": ""
              },
              {
                "name": "value3",
                "nodeType": "YulTypedName",
                "src": "13934:6:11",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "13942:6:11",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "13950:6:11",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "13958:6:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "13969:4:11",
                "type": ""
              }
            ],
            "src": "13701:755:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "14635:180:11",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "14652:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "14663:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "14645:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14645:21:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14645:21:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "14686:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "14697:2:11",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "14682:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14682:18:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "14702:2:11",
                        "type": "",
                        "value": "30"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "14675:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14675:30:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14675:30:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "14725:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "14736:2:11",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "14721:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14721:18:11"
                      },
                      {
                        "hexValue": "4552433737373a20696e73756666696369656e7420616c6c6f77616e6365",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "14741:32:11",
                        "type": "",
                        "value": "ERC777: insufficient allowance"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "14714:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14714:60:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14714:60:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "14783:26:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "14795:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "14806:2:11",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "14791:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14791:18:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "14783:4:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_43a72b1be6b1964d60860b54d1c331016464b9d17c1d10dbea6a002344132abb__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "14612:9:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "14626:4:11",
                "type": ""
              }
            ],
            "src": "14461:354:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "14994:229:11",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "15011:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "15022:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "15004:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15004:21:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "15004:21:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "15045:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "15056:2:11",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "15041:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "15041:18:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "15061:2:11",
                        "type": "",
                        "value": "39"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "15034:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15034:30:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "15034:30:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "15084:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "15095:2:11",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "15080:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "15080:18:11"
                      },
                      {
                        "hexValue": "4552433737373a207472616e7366657220616d6f756e74206578636565647320",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "15100:34:11",
                        "type": "",
                        "value": "ERC777: transfer amount exceeds "
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "15073:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15073:62:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "15073:62:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "15155:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "15166:2:11",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "15151:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "15151:18:11"
                      },
                      {
                        "hexValue": "62616c616e6365",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "15171:9:11",
                        "type": "",
                        "value": "balance"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "15144:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15144:37:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "15144:37:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "15190:27:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "15202:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "15213:3:11",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "15198:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15198:19:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "15190:4:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_1f1c21f7056055b190ca6c77528b11af9437bed324def87929bb64fac4d57e6b__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "14971:9:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "14985:4:11",
                "type": ""
              }
            ],
            "src": "14820:403:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "15421:257:11",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "15438:9:11"
                      },
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "15449:6:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "15431:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15431:25:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "15431:25:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "15476:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "15487:2:11",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "15472:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "15472:18:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "15492:2:11",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "15465:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15465:30:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "15465:30:11"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "15504:59:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "15536:6:11"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "15548:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "15559:2:11",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "15544:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "15544:18:11"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_string",
                      "nodeType": "YulIdentifier",
                      "src": "15518:17:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15518:45:11"
                  },
                  "variables": [
                    {
                      "name": "tail_1",
                      "nodeType": "YulTypedName",
                      "src": "15508:6:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "15583:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "15594:2:11",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "15579:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "15579:18:11"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail_1",
                            "nodeType": "YulIdentifier",
                            "src": "15603:6:11"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "15611:9:11"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "15599:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "15599:22:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "15572:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15572:50:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "15572:50:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "15631:41:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "value2",
                        "nodeType": "YulIdentifier",
                        "src": "15657:6:11"
                      },
                      {
                        "name": "tail_1",
                        "nodeType": "YulIdentifier",
                        "src": "15665:6:11"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_string",
                      "nodeType": "YulIdentifier",
                      "src": "15639:17:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15639:33:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "15631:4:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_uint256_t_bytes_memory_ptr_t_bytes_memory_ptr__to_t_uint256_t_bytes_memory_ptr_t_bytes_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "15374:9:11",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "15385:6:11",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "15393:6:11",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "15401:6:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "15412:4:11",
                "type": ""
              }
            ],
            "src": "15228:450:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "15857:307:11",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "15874:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "15885:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "15867:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15867:21:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "15867:21:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "15908:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "15919:2:11",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "15904:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "15904:18:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "15924:2:11",
                        "type": "",
                        "value": "77"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "15897:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15897:30:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "15897:30:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "15947:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "15958:2:11",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "15943:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "15943:18:11"
                      },
                      {
                        "hexValue": "4552433737373a20746f6b656e20726563697069656e7420636f6e7472616374",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "15963:34:11",
                        "type": "",
                        "value": "ERC777: token recipient contract"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "15936:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15936:62:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "15936:62:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "16018:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "16029:2:11",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "16014:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "16014:18:11"
                      },
                      {
                        "hexValue": "20686173206e6f20696d706c656d656e74657220666f7220455243373737546f",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "16034:34:11",
                        "type": "",
                        "value": " has no implementer for ERC777To"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "16007:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16007:62:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "16007:62:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "16089:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "16100:3:11",
                            "type": "",
                            "value": "128"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "16085:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "16085:19:11"
                      },
                      {
                        "hexValue": "6b656e73526563697069656e74",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "16106:15:11",
                        "type": "",
                        "value": "kensRecipient"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "16078:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16078:44:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "16078:44:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "16131:27:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "16143:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "16154:3:11",
                        "type": "",
                        "value": "160"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "16139:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16139:19:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "16131:4:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_9ee9d43e266ccfb7408c78038627d2c5b376a4a82e9fcfbfea2a9c63dc07fa80__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "15834:9:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "15848:4:11",
                "type": ""
              }
            ],
            "src": "15683:481:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "16343:224:11",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "16360:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "16371:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "16353:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16353:21:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "16353:21:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "16394:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "16405:2:11",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "16390:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "16390:18:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "16410:2:11",
                        "type": "",
                        "value": "34"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "16383:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16383:30:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "16383:30:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "16433:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "16444:2:11",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "16429:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "16429:18:11"
                      },
                      {
                        "hexValue": "4552433737373a2073656e642066726f6d20746865207a65726f206164647265",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "16449:34:11",
                        "type": "",
                        "value": "ERC777: send from the zero addre"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "16422:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16422:62:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "16422:62:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "16504:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "16515:2:11",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "16500:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "16500:18:11"
                      },
                      {
                        "hexValue": "7373",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "16520:4:11",
                        "type": "",
                        "value": "ss"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "16493:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16493:32:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "16493:32:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "16534:27:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "16546:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "16557:3:11",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "16542:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16542:19:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "16534:4:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_14f76295ace7a8386ec01140ee9cd688544ad4113a371d47f5a5fb46ac01c401__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "16320:9:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "16334:4:11",
                "type": ""
              }
            ],
            "src": "16169:398:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "16746:182:11",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "16763:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "16774:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "16756:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16756:21:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "16756:21:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "16797:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "16808:2:11",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "16793:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "16793:18:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "16813:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "16786:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16786:30:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "16786:30:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "16836:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "16847:2:11",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "16832:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "16832:18:11"
                      },
                      {
                        "hexValue": "4552433737373a2073656e6420746f20746865207a65726f2061646472657373",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "16852:34:11",
                        "type": "",
                        "value": "ERC777: send to the zero address"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "16825:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16825:62:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "16825:62:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "16896:26:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "16908:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "16919:2:11",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "16904:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16904:18:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "16896:4:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_ed80ea5132cda6a72ccf7da466e28cf5f3b5c217583b1b7e92c137a9f3d6b4c3__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "16723:9:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "16737:4:11",
                "type": ""
              }
            ],
            "src": "16572:356:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "16992:120:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "17002:22:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "17017:6:11"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "17011:5:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17011:13:11"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "17002:5:11"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "17090:16:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "17099:1:11",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "17102:1:11",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "17092:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "17092:12:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "17092:12:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "17046:5:11"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "17057:5:11"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "17064:22:11",
                                "type": "",
                                "value": "0xffffffffffffffffffff"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "17053:3:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "17053:34:11"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "17043:2:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "17043:45:11"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "17036:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17036:53:11"
                  },
                  "nodeType": "YulIf",
                  "src": "17033:73:11"
                }
              ]
            },
            "name": "abi_decode_uint80_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "16971:6:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "16982:5:11",
                "type": ""
              }
            ],
            "src": "16933:179:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "17263:327:11",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "17310:16:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "17319:1:11",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "17322:1:11",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "17312:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "17312:12:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "17312:12:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "17284:7:11"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "17293:9:11"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "17280:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "17280:23:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "17305:3:11",
                        "type": "",
                        "value": "160"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "17276:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17276:33:11"
                  },
                  "nodeType": "YulIf",
                  "src": "17273:53:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "17335:49:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "17374:9:11"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_uint80_fromMemory",
                      "nodeType": "YulIdentifier",
                      "src": "17345:28:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17345:39:11"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "17335:6:11"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "17393:35:11",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "17413:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "17424:2:11",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "17409:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "17409:18:11"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "17403:5:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17403:25:11"
                  },
                  "variableNames": [
                    {
                      "name": "value1",
                      "nodeType": "YulIdentifier",
                      "src": "17393:6:11"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "17437:35:11",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "17457:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "17468:2:11",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "17453:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "17453:18:11"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "17447:5:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17447:25:11"
                  },
                  "variableNames": [
                    {
                      "name": "value2",
                      "nodeType": "YulIdentifier",
                      "src": "17437:6:11"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "17481:35:11",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "17501:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "17512:2:11",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "17497:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "17497:18:11"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "17491:5:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17491:25:11"
                  },
                  "variableNames": [
                    {
                      "name": "value3",
                      "nodeType": "YulIdentifier",
                      "src": "17481:6:11"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "17525:59:11",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "17568:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "17579:3:11",
                            "type": "",
                            "value": "128"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "17564:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "17564:19:11"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_uint80_fromMemory",
                      "nodeType": "YulIdentifier",
                      "src": "17535:28:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17535:49:11"
                  },
                  "variableNames": [
                    {
                      "name": "value4",
                      "nodeType": "YulIdentifier",
                      "src": "17525:6:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_uint80t_int256t_uint256t_uint256t_uint80_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "17197:9:11",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "17208:7:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "17220:6:11",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "17228:6:11",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "17236:6:11",
                "type": ""
              },
              {
                "name": "value3",
                "nodeType": "YulTypedName",
                "src": "17244:6:11",
                "type": ""
              },
              {
                "name": "value4",
                "nodeType": "YulTypedName",
                "src": "17252:6:11",
                "type": ""
              }
            ],
            "src": "17117:473:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "17769:224:11",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "17786:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "17797:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "17779:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17779:21:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "17779:21:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "17820:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "17831:2:11",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "17816:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "17816:18:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "17836:2:11",
                        "type": "",
                        "value": "34"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "17809:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17809:30:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "17809:30:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "17859:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "17870:2:11",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "17855:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "17855:18:11"
                      },
                      {
                        "hexValue": "4552433737373a206275726e2066726f6d20746865207a65726f206164647265",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "17875:34:11",
                        "type": "",
                        "value": "ERC777: burn from the zero addre"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "17848:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17848:62:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "17848:62:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "17930:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "17941:2:11",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "17926:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "17926:18:11"
                      },
                      {
                        "hexValue": "7373",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "17946:4:11",
                        "type": "",
                        "value": "ss"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "17919:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17919:32:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "17919:32:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "17960:27:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "17972:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "17983:3:11",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "17968:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17968:19:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "17960:4:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_37e8d125f24ef45023ef8033e82467f588cec434263b3a6b98bcdb3eca4b768c__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "17746:9:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "17760:4:11",
                "type": ""
              }
            ],
            "src": "17595:398:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "18172:225:11",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "18189:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "18200:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "18182:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "18182:21:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "18182:21:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "18223:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "18234:2:11",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "18219:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "18219:18:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "18239:2:11",
                        "type": "",
                        "value": "35"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "18212:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "18212:30:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "18212:30:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "18262:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "18273:2:11",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "18258:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "18258:18:11"
                      },
                      {
                        "hexValue": "4552433737373a206275726e20616d6f756e7420657863656564732062616c61",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "18278:34:11",
                        "type": "",
                        "value": "ERC777: burn amount exceeds bala"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "18251:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "18251:62:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "18251:62:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "18333:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "18344:2:11",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "18329:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "18329:18:11"
                      },
                      {
                        "hexValue": "6e6365",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "18349:5:11",
                        "type": "",
                        "value": "nce"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "18322:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "18322:33:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "18322:33:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "18364:27:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "18376:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "18387:3:11",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "18372:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "18372:19:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "18364:4:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_ecdeb627d2306b8b9bb34685df56bbf05cde6b7bc6e45e0248ca50c1b0bd3ebe__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "18149:9:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "18163:4:11",
                "type": ""
              }
            ],
            "src": "17998:399:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "18576:182:11",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "18593:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "18604:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "18586:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "18586:21:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "18586:21:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "18627:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "18638:2:11",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "18623:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "18623:18:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "18643:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "18616:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "18616:30:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "18616:30:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "18666:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "18677:2:11",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "18662:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "18662:18:11"
                      },
                      {
                        "hexValue": "4552433737373a206d696e7420746f20746865207a65726f2061646472657373",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "18682:34:11",
                        "type": "",
                        "value": "ERC777: mint to the zero address"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "18655:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "18655:62:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "18655:62:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "18726:26:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "18738:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "18749:2:11",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "18734:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "18734:18:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "18726:4:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_8ce4f759423d0a519cbdf8529f47ad13e03ab9baec6702bc39e1fd5147c7e080__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "18553:9:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "18567:4:11",
                "type": ""
              }
            ],
            "src": "18402:356:11"
          }
        ]
      },
      "contents": "{\n    { }\n    function abi_encode_tuple_t_array$_t_address_$dyn_memory_ptr__to_t_array$_t_address_$dyn_memory_ptr__fromStack_reversed(headStart, value0) -> tail\n    {\n        let _1 := 32\n        let tail_1 := add(headStart, _1)\n        mstore(headStart, _1)\n        let pos := tail_1\n        let length := mload(value0)\n        mstore(tail_1, length)\n        pos := add(headStart, 64)\n        let srcPtr := add(value0, _1)\n        let i := 0\n        for { } lt(i, length) { i := add(i, 1) }\n        {\n            mstore(pos, and(mload(srcPtr), 0xffffffffffffffffffffffffffffffffffffffff))\n            pos := add(pos, _1)\n            srcPtr := add(srcPtr, _1)\n        }\n        tail := pos\n    }\n    function abi_encode_string(value, pos) -> end\n    {\n        let length := mload(value)\n        mstore(pos, length)\n        let i := 0\n        for { } lt(i, length) { i := add(i, 0x20) }\n        {\n            let _1 := 0x20\n            mstore(add(add(pos, i), _1), mload(add(add(value, i), _1)))\n        }\n        if gt(i, length)\n        {\n            mstore(add(add(pos, length), 0x20), 0)\n        }\n        end := add(add(pos, and(add(length, 31), not(31))), 0x20)\n    }\n    function abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed(headStart, value0) -> tail\n    {\n        mstore(headStart, 32)\n        tail := abi_encode_string(value0, add(headStart, 32))\n    }\n    function validator_revert_address(value)\n    {\n        if iszero(eq(value, and(value, 0xffffffffffffffffffffffffffffffffffffffff))) { revert(0, 0) }\n    }\n    function abi_decode_tuple_t_addresst_uint256(headStart, dataEnd) -> value0, value1\n    {\n        if slt(sub(dataEnd, headStart), 64) { revert(0, 0) }\n        let value := calldataload(headStart)\n        validator_revert_address(value)\n        value0 := value\n        value1 := calldataload(add(headStart, 32))\n    }\n    function abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, iszero(iszero(value0)))\n    }\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, value0)\n    }\n    function abi_decode_tuple_t_addresst_addresst_uint256(headStart, dataEnd) -> value0, value1, value2\n    {\n        if slt(sub(dataEnd, headStart), 96) { revert(0, 0) }\n        let value := calldataload(headStart)\n        validator_revert_address(value)\n        value0 := value\n        let value_1 := calldataload(add(headStart, 32))\n        validator_revert_address(value_1)\n        value1 := value_1\n        value2 := calldataload(add(headStart, 64))\n    }\n    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        value0 := calldataload(headStart)\n    }\n    function abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, 0xff))\n    }\n    function panic_error_0x41()\n    {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n    function abi_decode_bytes(offset, end) -> array\n    {\n        if iszero(slt(add(offset, 0x1f), end)) { revert(0, 0) }\n        let _1 := calldataload(offset)\n        let _2 := 0xffffffffffffffff\n        if gt(_1, _2) { panic_error_0x41() }\n        let _3 := not(31)\n        let memPtr := mload(64)\n        let newFreePtr := add(memPtr, and(add(and(add(_1, 0x1f), _3), 63), _3))\n        if or(gt(newFreePtr, _2), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n        mstore(memPtr, _1)\n        if gt(add(add(offset, _1), 0x20), end) { revert(0, 0) }\n        calldatacopy(add(memPtr, 0x20), add(offset, 0x20), _1)\n        mstore(add(add(memPtr, _1), 0x20), 0)\n        array := memPtr\n    }\n    function abi_decode_tuple_t_addresst_addresst_uint256t_bytes_memory_ptrt_bytes_memory_ptr(headStart, dataEnd) -> value0, value1, value2, value3, value4\n    {\n        if slt(sub(dataEnd, headStart), 160) { revert(0, 0) }\n        let value := calldataload(headStart)\n        validator_revert_address(value)\n        value0 := value\n        let value_1 := calldataload(add(headStart, 32))\n        validator_revert_address(value_1)\n        value1 := value_1\n        value2 := calldataload(add(headStart, 64))\n        let offset := calldataload(add(headStart, 96))\n        let _1 := 0xffffffffffffffff\n        if gt(offset, _1) { revert(0, 0) }\n        value3 := abi_decode_bytes(add(headStart, offset), dataEnd)\n        let offset_1 := calldataload(add(headStart, 128))\n        if gt(offset_1, _1) { revert(0, 0) }\n        value4 := abi_decode_bytes(add(headStart, offset_1), dataEnd)\n    }\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        let value := calldataload(headStart)\n        validator_revert_address(value)\n        value0 := value\n    }\n    function abi_decode_tuple_t_addresst_uint256t_bytes_memory_ptr(headStart, dataEnd) -> value0, value1, value2\n    {\n        if slt(sub(dataEnd, headStart), 96) { revert(0, 0) }\n        let value := calldataload(headStart)\n        validator_revert_address(value)\n        value0 := value\n        value1 := calldataload(add(headStart, 32))\n        let offset := calldataload(add(headStart, 64))\n        if gt(offset, 0xffffffffffffffff) { revert(0, 0) }\n        value2 := abi_decode_bytes(add(headStart, offset), dataEnd)\n    }\n    function abi_decode_tuple_t_addresst_address(headStart, dataEnd) -> value0, value1\n    {\n        if slt(sub(dataEnd, headStart), 64) { revert(0, 0) }\n        let value := calldataload(headStart)\n        validator_revert_address(value)\n        value0 := value\n        let value_1 := calldataload(add(headStart, 32))\n        validator_revert_address(value_1)\n        value1 := value_1\n    }\n    function abi_decode_tuple_t_addresst_uint256t_bytes_memory_ptrt_bytes_memory_ptr(headStart, dataEnd) -> value0, value1, value2, value3\n    {\n        if slt(sub(dataEnd, headStart), 128) { revert(0, 0) }\n        let value := calldataload(headStart)\n        validator_revert_address(value)\n        value0 := value\n        value1 := calldataload(add(headStart, 32))\n        let offset := calldataload(add(headStart, 64))\n        let _1 := 0xffffffffffffffff\n        if gt(offset, _1) { revert(0, 0) }\n        value2 := abi_decode_bytes(add(headStart, offset), dataEnd)\n        let offset_1 := calldataload(add(headStart, 96))\n        if gt(offset_1, _1) { revert(0, 0) }\n        value3 := abi_decode_bytes(add(headStart, offset_1), dataEnd)\n    }\n    function abi_decode_tuple_t_uint256t_bytes_memory_ptr(headStart, dataEnd) -> value0, value1\n    {\n        if slt(sub(dataEnd, headStart), 64) { revert(0, 0) }\n        value0 := calldataload(headStart)\n        let offset := calldataload(add(headStart, 32))\n        if gt(offset, 0xffffffffffffffff) { revert(0, 0) }\n        value1 := abi_decode_bytes(add(headStart, offset), dataEnd)\n    }\n    function extract_byte_array_length(data) -> length\n    {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) { length := and(length, 0x7f) }\n        if eq(outOfPlaceEncoding, lt(length, 32))\n        {\n            mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n            mstore(4, 0x22)\n            revert(0, 0x24)\n        }\n    }\n    function abi_encode_tuple_t_stringliteral_ad1e0a820fe2a50167f341463ad5f6754fad4cf77d809141bc408c516e69c59a__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 36)\n        mstore(add(headStart, 64), \"ERC777: transfer to the zero add\")\n        mstore(add(headStart, 96), \"ress\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_e354b0408f2a1e89707ec9f6aaa5427ceb97704ace0785924c7421e8f577dc7a__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 38)\n        mstore(add(headStart, 64), \"ERC777: transfer from the zero a\")\n        mstore(add(headStart, 96), \"ddress\")\n        tail := add(headStart, 128)\n    }\n    function panic_error_0x11()\n    {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n    function checked_sub_t_uint256(x, y) -> diff\n    {\n        if lt(x, y) { panic_error_0x11() }\n        diff := sub(x, y)\n    }\n    function checked_mul_t_uint256(x, y) -> product\n    {\n        if and(iszero(iszero(x)), gt(y, div(not(0), x))) { panic_error_0x11() }\n        product := mul(x, y)\n    }\n    function checked_div_t_uint256(x, y) -> r\n    {\n        if iszero(y)\n        {\n            mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n            mstore(4, 0x12)\n            revert(0, 0x24)\n        }\n        r := div(x, y)\n    }\n    function abi_encode_tuple_t_stringliteral_4de4edbd6381194572dd0ff1e4941d4b774997c05d2f2b31c1c37d0f15da2226__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 13)\n        mstore(add(headStart, 64), \"Access Denied\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_address_t_uint256__to_t_address_t_uint256__fromStack_reversed(headStart, value1, value0) -> tail\n    {\n        tail := add(headStart, 64)\n        mstore(headStart, and(value0, 0xffffffffffffffffffffffffffffffffffffffff))\n        mstore(add(headStart, 32), value1)\n    }\n    function abi_decode_tuple_t_bool_fromMemory(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        let value := mload(headStart)\n        if iszero(eq(value, iszero(iszero(value)))) { revert(0, 0) }\n        value0 := value\n    }\n    function abi_encode_tuple_t_stringliteral_d0e912496dc7a0050c7f3e14272d4929a90a242e3fdaef730410cdf35f965235__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 44)\n        mstore(add(headStart, 64), \"ERC777: caller is not an operato\")\n        mstore(add(headStart, 96), \"r for holder\")\n        tail := add(headStart, 128)\n    }\n    function checked_add_t_uint256(x, y) -> sum\n    {\n        if gt(x, not(y)) { panic_error_0x11() }\n        sum := add(x, y)\n    }\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, 0xffffffffffffffffffffffffffffffffffffffff))\n    }\n    function abi_decode_tuple_t_uint256_fromMemory(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        value0 := mload(headStart)\n    }\n    function abi_encode_tuple_t_address_t_address_t_uint256__to_t_address_t_address_t_uint256__fromStack_reversed(headStart, value2, value1, value0) -> tail\n    {\n        tail := add(headStart, 96)\n        let _1 := 0xffffffffffffffffffffffffffffffffffffffff\n        mstore(headStart, and(value0, _1))\n        mstore(add(headStart, 32), and(value1, _1))\n        mstore(add(headStart, 64), value2)\n    }\n    function abi_encode_tuple_t_stringliteral_4682b297c30e70ba17ae545f9c27f948e3607c0cc7dd469250dfcf8daa94218c__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 36)\n        mstore(add(headStart, 64), \"ERC777: authorizing self as oper\")\n        mstore(add(headStart, 96), \"ator\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_67ce503bd3a359eb530c6f3a909afa9e71899e0352d883198e721fd5fceefab5__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 33)\n        mstore(add(headStart, 64), \"ERC777: revoking self as operato\")\n        mstore(add(headStart, 96), \"r\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_0e27915827f7e9aa1f9e706fa48897705bd51fdbb8c4e17f0dcc074873455ca7__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 37)\n        mstore(add(headStart, 64), \"ERC777: approve from the zero ad\")\n        mstore(add(headStart, 96), \"dress\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_f96aab14690ac2986315360e71dcbe877ff7fb69d13c692db6f39f8c2c01f20d__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 35)\n        mstore(add(headStart, 64), \"ERC777: approve to the zero addr\")\n        mstore(add(headStart, 96), \"ess\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_address_t_bytes32__to_t_address_t_bytes32__fromStack_reversed(headStart, value1, value0) -> tail\n    {\n        tail := add(headStart, 64)\n        mstore(headStart, and(value0, 0xffffffffffffffffffffffffffffffffffffffff))\n        mstore(add(headStart, 32), value1)\n    }\n    function abi_decode_tuple_t_address_fromMemory(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        let value := mload(headStart)\n        validator_revert_address(value)\n        value0 := value\n    }\n    function abi_encode_tuple_t_address_t_address_t_address_t_uint256_t_bytes_memory_ptr_t_bytes_memory_ptr__to_t_address_t_address_t_address_t_uint256_t_bytes_memory_ptr_t_bytes_memory_ptr__fromStack_reversed(headStart, value5, value4, value3, value2, value1, value0) -> tail\n    {\n        let _1 := 0xffffffffffffffffffffffffffffffffffffffff\n        mstore(headStart, and(value0, _1))\n        mstore(add(headStart, 32), and(value1, _1))\n        mstore(add(headStart, 64), and(value2, _1))\n        mstore(add(headStart, 96), value3)\n        mstore(add(headStart, 128), 192)\n        let tail_1 := abi_encode_string(value4, add(headStart, 192))\n        mstore(add(headStart, 160), sub(tail_1, headStart))\n        tail := abi_encode_string(value5, tail_1)\n    }\n    function abi_encode_tuple_t_stringliteral_43a72b1be6b1964d60860b54d1c331016464b9d17c1d10dbea6a002344132abb__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 30)\n        mstore(add(headStart, 64), \"ERC777: insufficient allowance\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_1f1c21f7056055b190ca6c77528b11af9437bed324def87929bb64fac4d57e6b__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 39)\n        mstore(add(headStart, 64), \"ERC777: transfer amount exceeds \")\n        mstore(add(headStart, 96), \"balance\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_uint256_t_bytes_memory_ptr_t_bytes_memory_ptr__to_t_uint256_t_bytes_memory_ptr_t_bytes_memory_ptr__fromStack_reversed(headStart, value2, value1, value0) -> tail\n    {\n        mstore(headStart, value0)\n        mstore(add(headStart, 32), 96)\n        let tail_1 := abi_encode_string(value1, add(headStart, 96))\n        mstore(add(headStart, 64), sub(tail_1, headStart))\n        tail := abi_encode_string(value2, tail_1)\n    }\n    function abi_encode_tuple_t_stringliteral_9ee9d43e266ccfb7408c78038627d2c5b376a4a82e9fcfbfea2a9c63dc07fa80__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 77)\n        mstore(add(headStart, 64), \"ERC777: token recipient contract\")\n        mstore(add(headStart, 96), \" has no implementer for ERC777To\")\n        mstore(add(headStart, 128), \"kensRecipient\")\n        tail := add(headStart, 160)\n    }\n    function abi_encode_tuple_t_stringliteral_14f76295ace7a8386ec01140ee9cd688544ad4113a371d47f5a5fb46ac01c401__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 34)\n        mstore(add(headStart, 64), \"ERC777: send from the zero addre\")\n        mstore(add(headStart, 96), \"ss\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_ed80ea5132cda6a72ccf7da466e28cf5f3b5c217583b1b7e92c137a9f3d6b4c3__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 32)\n        mstore(add(headStart, 64), \"ERC777: send to the zero address\")\n        tail := add(headStart, 96)\n    }\n    function abi_decode_uint80_fromMemory(offset) -> value\n    {\n        value := mload(offset)\n        if iszero(eq(value, and(value, 0xffffffffffffffffffff))) { revert(0, 0) }\n    }\n    function abi_decode_tuple_t_uint80t_int256t_uint256t_uint256t_uint80_fromMemory(headStart, dataEnd) -> value0, value1, value2, value3, value4\n    {\n        if slt(sub(dataEnd, headStart), 160) { revert(0, 0) }\n        value0 := abi_decode_uint80_fromMemory(headStart)\n        value1 := mload(add(headStart, 32))\n        value2 := mload(add(headStart, 64))\n        value3 := mload(add(headStart, 96))\n        value4 := abi_decode_uint80_fromMemory(add(headStart, 128))\n    }\n    function abi_encode_tuple_t_stringliteral_37e8d125f24ef45023ef8033e82467f588cec434263b3a6b98bcdb3eca4b768c__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 34)\n        mstore(add(headStart, 64), \"ERC777: burn from the zero addre\")\n        mstore(add(headStart, 96), \"ss\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_ecdeb627d2306b8b9bb34685df56bbf05cde6b7bc6e45e0248ca50c1b0bd3ebe__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 35)\n        mstore(add(headStart, 64), \"ERC777: burn amount exceeds bala\")\n        mstore(add(headStart, 96), \"nce\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_8ce4f759423d0a519cbdf8529f47ad13e03ab9baec6702bc39e1fd5147c7e080__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 32)\n        mstore(add(headStart, 64), \"ERC777: mint to the zero address\")\n        tail := add(headStart, 96)\n    }\n}",
      "id": 11,
      "language": "Yul",
      "name": "#utility.yul"
    }
  ],
  "sourceMap": "250:2995:10:-:0;;;428:79;;;-1:-1:-1;;;;;;428:79:10;463:42;428:79;;;670:282;;;;;;;;;-1:-1:-1;2316:727:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2437:13;;2316:727;;;727:4:10;;2437:13:2;;:5;;2316:727;2437:13;:::i;:::-;-1:-1:-1;2460:17:2;;;;:7;;:17;;;;;:::i;:::-;-1:-1:-1;2491:42:2;;;;;;;;;-1:-1:-1;;;;;2491:42:2;;;;;;:22;;:42;;:::i;:::-;-1:-1:-1;;;;;;2543:34:2;;;;;;:17;:34;;;;;;;:41;;-1:-1:-1;;2543:41:2;2580:4;2543:41;;;2833:97;;;;2883:4;2833:97;;;254:34:11;;;2890:24:2;304:18:11;;;297:34;347:18;;;340:43;1242:42:2;;2833:41;;189:18:11;;2833:97:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;2940:96:2;;;;;2990:4;2940:96;;;254:34:11;;;2997:23:2;304:18:11;;;297:34;347:18;;;340:43;1242:42:2;;-1:-1:-1;2940:41:2;;-1:-1:-1;189:18:11;;2940:96:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;738:5:10::1;:18:::0;;-1:-1:-1;;;;;;738:18:10;;::::1;746:10;738:18;::::0;;;797:9:::1;:77:::0;;;;::::1;831:42;797:77;::::0;;-1:-1:-1;250:2995:10;;-1:-1:-1;;;;250:2995:10;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;250:2995:10;;;-1:-1:-1;250:2995:10;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;250:2995:10;-1:-1:-1;;;;;250:2995:10;;;;;;;;;;;-1:-1:-1;250:2995:10;;;;;;;;;;;;;;;;;;;;;394:437:11;479:1;469:12;;526:1;516:12;;;537:61;;591:4;583:6;579:17;569:27;;537:61;644:2;636:6;633:14;613:18;610:38;607:218;;;681:77;678:1;671:88;782:4;779:1;772:15;810:4;807:1;800:15;607:218;;394:437;;;:::o;:::-;250:2995:10;;;;;;",
  "deployedSourceMap": "250:2995:10:-:0;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;250:2995:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6899:130:2;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3097:98;;;:::i;:::-;;;;;;;:::i;8657:197::-;;;;;;:::i;:::-;;:::i;:::-;;;2046:14:11;;2039:22;2021:41;;2009:2;1994:18;8657:197:2;1881:187:11;3890:123:2;3994:12;;3890:123;;;2219:25:11;;;2207:2;2192:18;3890:123:2;2073:177:11;9336:639:2;;;;;;:::i;:::-;;:::i;2744:275:10:-;;;:::i;1586:133::-;;;;;;:::i;:::-;;:::i;:::-;;3537:82:2;;;3610:2;3043:36:11;;3031:2;3016:18;3537:82:2;2901:184:11;3734:95:2;3821:1;3734:95;;7148:366;;;;;;:::i;:::-;;:::i;2147:594:10:-;;;;;;:::i;:::-;;:::i;4113:150:2:-;;;;;;:::i;:::-;-1:-1:-1;;;;;4234:22:2;4208:7;4234:22;;;;;;;;;;;;4113:150;1894:170:10;;;:::i;990:367::-;;;;;;:::i;:::-;;:::i;5954:412:2:-;;;;;;:::i;:::-;;:::i;3251:102::-;;;:::i;4393:193::-;;;;;;:::i;:::-;;:::i;4817:439::-;;;;;;:::i;:::-;;:::i;5576:311::-;;;;;;:::i;:::-;;:::i;8199:151::-;;;;;;:::i;:::-;-1:-1:-1;;;;;8315:19:2;;;8289:7;8315:19;;;:11;:19;;;;;;;;:28;;;;;;;;;;;;;8199:151;6430:403;;;;;;:::i;:::-;;:::i;7635:325::-;;;;;;:::i;:::-;;:::i;5386:127::-;;;;;;:::i;:::-;;:::i;6899:130::-;6965:16;7000:22;6993:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;6993:29:2;;;;;;;;;;;;;;;;;;;;;;;6899:130;:::o;3097:98::-;3151:13;3183:5;3176:12;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;3176:12:2;;3097:98;-1:-1:-1;;;;;3097:98:2:o;8657:197::-;8739:4;719:10:7;8794:32:2;719:10:7;8811:7:2;8820:5;8794:8;:32::i;:::-;-1:-1:-1;8843:4:2;;8657:197;-1:-1:-1;;;8657:197:2:o;9336:639::-;9472:4;-1:-1:-1;;;;;9496:23:2;;9488:72;;;;-1:-1:-1;;;;;9488:72:2;;;;;;;:::i;:::-;;;;;;;;;-1:-1:-1;;;;;9578:20:2;;9570:71;;;;-1:-1:-1;;;;;9570:71:2;;8255:2:11;9570:71:2;;;8237:21:11;8294:2;8274:18;;;8267:30;8333:34;8313:18;;;8306:62;8404:8;8384:18;;;8377:36;8430:19;;9570:71:2;8053:402:11;9570:71:2;9652:15;719:10:7;9652:30:2;;9693:61;9711:7;9720:6;9728:9;9739:6;9693:61;;;;;;;;;;;;;;;;;;;;;;;;:17;:61::i;:::-;9765:40;9781:6;9789:7;9798:6;9765:15;:40::i;:::-;9816:49;9822:7;9831:6;9839:9;9850:6;9816:49;;;;;;;;;;;;;;;;;;;;;;;;:5;:49::i;:::-;9876:70;9896:7;9905:6;9913:9;9924:6;9876:70;;;;;;;;;;;;;;;;;;;;;;;;9940:5;9876:19;:70::i;:::-;-1:-1:-1;9964:4:2;;9336:639;-1:-1:-1;;;;9336:639:2:o;2744:275:10:-;2789:4;2799:24;2842:11;;2826:13;3994:12:2;;;3890:123;2826:13:10;:27;;;;:::i;:::-;2799:54;-1:-1:-1;2861:24:10;2857:38;;2894:1;2887:8;;;2744:275;:::o;2857:38::-;2900:14;2974:19;;2952;;:41;;;;:::i;:::-;2918:29;:19;2940:7;2918:29;:::i;:::-;2917:77;;;;:::i;:::-;2900:94;2744:275;-1:-1:-1;;;2744:275:10:o;1586:133::-;1448:5;;-1:-1:-1;;;;;1448:5:10;1434:10;:19;1426:45;;;;-1:-1:-1;;;;;1426:45:10;;9433:2:11;1426:45:10;;;9415:21:11;9472:2;9452:18;;;9445:30;9511:15;9491:18;;;9484:43;9544:18;;1426:45:10;9231:337:11;1426:45:10;1641:10:::1;::::0;1661:5:::1;::::0;1641:34:::1;::::0;;;;-1:-1:-1;;;;;1661:5:10;;::::1;1641:34;::::0;::::1;9747:74:11::0;9837:18;;;9830:34;;;1641:10:10;::::1;::::0;:19:::1;::::0;9720:18:11;;1641:34:10::1;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;1586:133:::0;:::o;7148:366:2:-;7355:35;719:10:7;7383:6:2;7355:13;:35::i;:::-;7347:92;;;;-1:-1:-1;;;;;7347:92:2;;;;;;;:::i;:::-;7449:58;7455:6;7463:9;7474:6;7482:4;7488:12;7502:4;7449:5;:58::i;:::-;7148:366;;;;;:::o;2147:594:10:-;2194:84;2207:10;2219:42;2263:6;2194:84;;;;;;;;;;;;;;;;;;;;;;;;:12;:84::i;:::-;2318:24;2361:11;;2345:13;3994:12:2;;;3890:123;2345:13:10;:27;;;;:::i;:::-;2318:54;;2376:14;2452:19;;2430;;:41;;;;:::i;:::-;2394:31;:19;2416:9;2394:31;:::i;:::-;2393:79;;;;:::i;:::-;2376:96;-1:-1:-1;2477:21:10;2502:18;2376:96;2502:6;:18;:::i;:::-;2501:32;;2524:9;2501:32;:::i;:::-;2537:10;;:49;;;;;2557:10;2537:49;;;9747:74:11;9837:18;;;9830:34;;;2477:56:10;;-1:-1:-1;;;;;;2537:10:10;;:19;;9720:18:11;;2537:49:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;2688:6;2673:11;;:21;;;;;;;:::i;:::-;;;;;;;;2721:16;2698:19;;:39;;;;;;;:::i;:::-;;;;-1:-1:-1;;;;;;2147:594:10:o;1894:170::-;1448:5;;-1:-1:-1;;;;;1448:5:10;1434:10;:19;1426:45;;;;-1:-1:-1;;;;;1426:45:10;;9433:2:11;1426:45:10;;;9415:21:11;9472:2;9452:18;;;9445:30;9511:15;9491:18;;;9484:43;9544:18;;1426:45:10;9231:337:11;1426:45:10;1938:10:::1;::::0;1958:5:::1;::::0;1965:35:::1;::::0;;;;1994:4:::1;1965:35;::::0;::::1;10849:74:11::0;-1:-1:-1;;;;;1938:10:10;;::::1;::::0;:19:::1;::::0;1958:5:::1;::::0;1938:10;;1965:20:::1;::::0;10822:18:11;;1965:35:10::1;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1938:63;::::0;-1:-1:-1;;;1938:63:10::1;::::0;::::1;;::::0;;-1:-1:-1;;;;;9765:55:11;;;1938:63:10::1;::::0;::::1;9747:74:11::0;9837:18;;;9830:34;9720:18;;1938:63:10::1;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;1894:170::o:0;990:367::-;1031:10;;:58;;;;;1055:10;1031:58;;;11386:34:11;1075:4:10;11436:18:11;;;11429:43;11488:18;;;11481:34;;;-1:-1:-1;;;;;1031:10:10;;;;:23;;11298:18:11;;1031:58:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;1209:6;1186:19;;:29;;;;;;;:::i;:::-;;;;-1:-1:-1;1241:22:10;;-1:-1:-1;1289:16:10;:14;:16::i;:::-;1267:18;:6;1276:9;1267:18;:::i;:::-;1266:39;;;;:::i;:::-;1241:64;;1309:44;1315:10;1327:17;1309:44;;;;;;;;;;;;;;;;;;;;;;;;:5;:44::i;5954:412:2:-;719:10:7;-1:-1:-1;;;;;6041:24:2;;;;6033:73;;;;-1:-1:-1;;;;;6033:73:2;;11728:2:11;6033:73:2;;;11710:21:11;11767:2;11747:18;;;11740:30;11806:34;11786:18;;;11779:62;11877:6;11857:18;;;11850:34;11901:19;;6033:73:2;11526:400:11;6033:73:2;-1:-1:-1;;;;;6121:27:2;;;;;;:17;:27;;;;;;;;6117:185;;;719:10:7;6171:38:2;;;;:24;:38;;;;;;;;-1:-1:-1;;;;;6171:48:2;;;;;;;;;6164:55;;-1:-1:-1;;6164:55:2;;;6117:185;;;719:10:7;6250:24:2;;;;:10;:24;;;;;;;;-1:-1:-1;;;;;6250:34:2;;;;;;;;;:41;;-1:-1:-1;;6250:41:2;6287:4;6250:41;;;6117:185;6317:42;;719:10:7;;-1:-1:-1;;;;;6317:42:2;;;;;;;;5954:412;:::o;3251:102::-;3307:13;3339:7;3332:14;;;;;:::i;4393:193::-;4525:54;719:10:7;4545:9:2;4556:6;4564:4;4525:54;;;;;;;;;;;;4574:4;4525:5;:54::i;:::-;4393:193;;;:::o;4817:439::-;4903:4;-1:-1:-1;;;;;4927:23:2;;4919:72;;;;-1:-1:-1;;;;;4919:72:2;;;;;;;:::i;:::-;5002:12;719:10:7;5002:27:2;;5040:56;5058:4;5064;5070:9;5081:6;5040:56;;;;;;;;;;;;;;;;;;;;;;;;:17;:56::i;:::-;5107:44;5113:4;5119;5125:9;5136:6;5107:44;;;;;;;;;;;;;;;;;;;;;;;;:5;:44::i;:::-;5162:65;5182:4;5188;5194:9;5205:6;5162:65;;;;;;;;;;;;;;;;;;;;;;;;5221:5;5162:19;:65::i;5576:311::-;5676:4;5723:11;-1:-1:-1;;;;;5711:23:2;:8;-1:-1:-1;;;;;5711:23:2;;:120;;;-1:-1:-1;;;;;;5751:27:2;;;;;;:17;:27;;;;;;;;:79;;;;-1:-1:-1;;;;;;5783:37:2;;;;;;;:24;:37;;;;;;;;:47;;;;;;;;;;;;5782:48;5751:79;5711:169;;;-1:-1:-1;;;;;;5847:23:2;;;;;;;:10;:23;;;;;;;;:33;;;;;;;;;;;;5692:188;5576:311;-1:-1:-1;;;5576:311:2:o;6430:403::-;-1:-1:-1;;;;;6514:24:2;;719:10:7;6514:24:2;;6506:70;;;;-1:-1:-1;;;;;6506:70:2;;12133:2:11;6506:70:2;;;12115:21:11;12172:2;12152:18;;;12145:30;12211:34;12191:18;;;12184:62;12282:3;12262:18;;;12255:31;12303:19;;6506:70:2;11931:397:11;6506:70:2;-1:-1:-1;;;;;6591:27:2;;;;;;:17;:27;;;;;;;;6587:185;;;719:10:7;6634:38:2;;;;:24;:38;;;;;;;;-1:-1:-1;;;;;6634:48:2;;;;;;;;;:55;;-1:-1:-1;;6634:55:2;6685:4;6634:55;;;6587:185;;;719:10:7;6727:24:2;;;;:10;:24;;;;;;;;-1:-1:-1;;;;;6727:34:2;;;;;;;;;6720:41;;-1:-1:-1;;6720:41:2;;;6587:185;6787:39;;719:10:7;;-1:-1:-1;;;;;6787:39:2;;;;;;;;6430:403;:::o;7635:325::-;7816:36;719:10:7;7844:7:2;7816:13;:36::i;:::-;7808:93;;;;-1:-1:-1;;;;;7808:93:2;;;;;;;:::i;:::-;7911:42;7917:7;7926:6;7934:4;7940:12;7911:5;:42::i;:::-;7635:325;;;;:::o;5386:127::-;5469:37;719:10:7;5489:6:2;5497:4;5469:37;;;;;;;;;;;;:5;:37::i;15112:373::-;-1:-1:-1;;;;;15243:20:2;;15235:70;;;;-1:-1:-1;;;;;15235:70:2;;12535:2:11;15235:70:2;;;12517:21:11;12574:2;12554:18;;;12547:30;12613:34;12593:18;;;12586:62;12684:7;12664:18;;;12657:35;12709:19;;15235:70:2;12333:401:11;15235:70:2;-1:-1:-1;;;;;15323:21:2;;15315:69;;;;-1:-1:-1;;;;;15315:69:2;;12941:2:11;15315:69:2;;;12923:21:11;12980:2;12960:18;;;12953:30;13019:34;12999:18;;;12992:62;13090:5;13070:18;;;13063:33;13113:19;;15315:69:2;12739:399:11;15315:69:2;-1:-1:-1;;;;;15395:19:2;;;;;;;:11;:19;;;;;;;;:28;;;;;;;;;;;;;:36;;;15446:32;;2219:25:11;;;15446:32:2;;2192:18:11;15446:32:2;;;;;;;15112:373;;;:::o;15958:472::-;16189:78;;;;;-1:-1:-1;;;;;9765:55:11;;16189:78:2;;;9747:74:11;1491:31:2;9837:18:11;;;9830:34;16167:19:2;;1242:42;;16189:41;;9720:18:11;;16189:78:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;16167:100;-1:-1:-1;;;;;;16281:25:2;;;16277:147;;16322:91;;;;;-1:-1:-1;;;;;16322:39:2;;;;;:91;;16362:8;;16372:4;;16378:2;;16382:6;;16390:8;;16400:12;;16322:91;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;16277:147;16157:273;15958:472;;;;;;:::o;18072:442::-;-1:-1:-1;;;;;8315:19:2;;;18202:24;8315:19;;;:11;:19;;;;;;;;:28;;;;;;;;;;-1:-1:-1;;18268:37:2;;18264:244;;18349:6;18329:16;:26;;18321:69;;;;-1:-1:-1;;;;;18321:69:2;;14663:2:11;18321:69:2;;;14645:21:11;14702:2;14682:18;;;14675:30;14741:32;14721:18;;;14714:60;14791:18;;18321:69:2;14461:354:11;18321:69:2;18432:51;18441:5;18448:7;18476:6;18457:16;:25;18432:8;:51::i;14363:611::-;-1:-1:-1;;;;;14641:15:2;;14619:19;14641:15;;;;;;;;;;;14674:21;;;;14666:73;;;;-1:-1:-1;;;;;14666:73:2;;15022:2:11;14666:73:2;;;15004:21:11;15061:2;15041:18;;;15034:30;15100:34;15080:18;;;15073:62;15171:9;15151:18;;;15144:37;15198:19;;14666:73:2;14820:403:11;14666:73:2;-1:-1:-1;;;;;14773:15:2;;;:9;:15;;;;;;;;;;;14791:20;;;14773:38;;14831:13;;;;;;;;:23;;14805:6;;14773:9;14831:23;;14805:6;;14831:23;:::i;:::-;;;;;;;;14891:2;-1:-1:-1;;;;;14870:56:2;14885:4;-1:-1:-1;;;;;14870:56:2;14875:8;-1:-1:-1;;;;;14870:56:2;;14895:6;14903:8;14913:12;14870:56;;;;;;;;:::i;:::-;;;;;;;;14956:2;-1:-1:-1;;;;;14941:26:2;14950:4;-1:-1:-1;;;;;14941:26:2;;14960:6;14941:26;;;;2219:25:11;;2207:2;2192:18;;2073:177;14941:26:2;;;;;;;;14550:424;14363:611;;;;;;:::o;17119:676::-;17386:79;;;;;-1:-1:-1;;;;;9765:55:11;;17386:79:2;;;9747:74:11;1588:34:2;9837:18:11;;;9830:34;17364:19:2;;1242:42;;17386:41;;9720:18:11;;17386:79:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;17364:101;-1:-1:-1;;;;;;17479:25:2;;;17475:314;;17520:96;;;;;-1:-1:-1;;;;;17520:44:2;;;;;:96;;17565:8;;17575:4;;17581:2;;17585:6;;17593:8;;17603:12;;17520:96;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;17475:314;;;17637:19;17633:156;;;-1:-1:-1;;;;;17681:13:2;;1465:19:6;:23;17672:106:2;;;;-1:-1:-1;;;;;17672:106:2;;15885:2:11;17672:106:2;;;15867:21:11;15924:2;15904:18;;;15897:30;15963:34;15943:18;;;15936:62;16034:34;16014:18;;;16007:62;16106:15;16085:19;;;16078:44;16139:19;;17672:106:2;15683:481:11;17672:106:2;17354:441;17119:676;;;;;;;:::o;12591:650::-;-1:-1:-1;;;;;12813:18:2;;12805:65;;;;-1:-1:-1;;;;;12805:65:2;;16371:2:11;12805:65:2;;;16353:21:11;16410:2;16390:18;;;16383:30;16449:34;16429:18;;;16422:62;16520:4;16500:18;;;16493:32;16542:19;;12805:65:2;16169:398:11;12805:65:2;-1:-1:-1;;;;;12888:16:2;;12880:61;;;;-1:-1:-1;;;;;12880:61:2;;16774:2:11;12880:61:2;;;16756:21:11;;;16793:18;;;16786:30;16852:34;16832:18;;;16825:62;16904:18;;12880:61:2;16572:356:11;12880:61:2;719:10:7;12994:69:2;719:10:7;13022:4:2;13028:2;13032:6;13040:8;13050:12;12994:17;:69::i;:::-;13074:57;13080:8;13090:4;13096:2;13100:6;13108:8;13118:12;13074:5;:57::i;:::-;13142:92;13162:8;13172:4;13178:2;13182:6;13190:8;13200:12;13214:19;13142;:92::i;3022:221:10:-;3071:4;3086:15;3106:9;3120:15;3140;3160:23;3190:9;;;;;;;;;-1:-1:-1;;;;;3190:9:10;-1:-1:-1;;;;;3190:25:10;;:27;;;;;-1:-1:-1;;;3190:27:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;3081:136:10;;3022:221;-1:-1:-1;;;;;;;;;3022:221:10:o;10545:222:2:-;10708:52;10714:7;10723:6;10731:8;10741:12;10755:4;10708:5;:52::i;13546:811::-;-1:-1:-1;;;;;13710:18:2;;13702:65;;;;-1:-1:-1;;;;;13702:65:2;;17797:2:11;13702:65:2;;;17779:21:11;17836:2;17816:18;;;17809:30;17875:34;17855:18;;;17848:62;17946:4;17926:18;;;17919:32;17968:19;;13702:65:2;17595:398:11;13702:65:2;719:10:7;13820:73:2;719:10:7;13848:4:2;13778:16;13866:6;13874:4;13880:12;13820:17;:73::i;:::-;-1:-1:-1;;;;;14027:15:2;;14005:19;14027:15;;;;;;;;;;;14060:21;;;;14052:69;;;;-1:-1:-1;;;;;14052:69:2;;18200:2:11;14052:69:2;;;18182:21:11;18239:2;18219:18;;;18212:30;18278:34;18258:18;;;18251:62;18349:5;18329:18;;;18322:33;18372:19;;14052:69:2;17998:399:11;14052:69:2;-1:-1:-1;;;;;14155:15:2;;:9;:15;;;;;;;;;;14173:20;;;14155:38;;14213:12;:22;;14187:6;;14155:9;14213:22;;14187:6;;14213:22;:::i;:::-;;;;;;;;14268:4;-1:-1:-1;;;;;14251:50:2;14258:8;-1:-1:-1;;;;;14251:50:2;;14274:6;14282:4;14288:12;14251:50;;;;;;;;:::i;:::-;;;;;;;;14316:34;;2219:25:11;;;14339:1:2;;-1:-1:-1;;;;;14316:34:2;;;;;2207:2:11;2192:18;14316:34:2;;;;;;;;13692:665;;13546:811;;;;:::o;11389:726::-;-1:-1:-1;;;;;11594:21:2;;11586:66;;;;-1:-1:-1;;;;;11586:66:2;;18604:2:11;11586:66:2;;;18586:21:11;;;18623:18;;;18616:30;18682:34;18662:18;;;18655:62;18734:18;;11586:66:2;18402:356:11;11586:66:2;11663:16;719:10:7;11663:31:2;;11825:6;11809:12;;:22;;;;;;;:::i;:::-;;;;-1:-1:-1;;;;;;;11841:18:2;;:9;:18;;;;;;;;;;:28;;11863:6;;11841:9;:28;;11863:6;;11841:28;:::i;:::-;;;;-1:-1:-1;11880:103:2;;-1:-1:-1;11900:8:2;11918:1;11922:7;11931:6;11939:8;11949:12;11963:19;11880;:103::i;:::-;12016:7;-1:-1:-1;;;;;11999:57:2;12006:8;-1:-1:-1;;;;;11999:57:2;;12025:6;12033:8;12043:12;11999:57;;;;;;;;:::i;:::-;;;;;;;;12071:37;;2219:25:11;;;-1:-1:-1;;;;;12071:37:2;;;12088:1;;12071:37;;2207:2:11;2192:18;12071:37:2;2073:177:11;14:681;185:2;237:21;;;307:13;;210:18;;;329:22;;;156:4;;185:2;408:15;;;;382:2;367:18;;;156:4;451:218;465:6;462:1;459:13;451:218;;;530:13;;-1:-1:-1;;;;;526:62:11;514:75;;644:15;;;;609:12;;;;487:1;480:9;451:218;;;-1:-1:-1;686:3:11;;14:681;-1:-1:-1;;;;;;14:681:11:o;700:472::-;742:3;780:5;774:12;807:6;802:3;795:19;832:1;842:162;856:6;853:1;850:13;842:162;;;918:4;974:13;;;970:22;;964:29;946:11;;;942:20;;935:59;871:12;842:162;;;1022:6;1019:1;1016:13;1013:87;;;1088:1;1081:4;1072:6;1067:3;1063:16;1059:27;1052:38;1013:87;-1:-1:-1;1154:2:11;1133:15;-1:-1:-1;;1129:29:11;1120:39;;;;1161:4;1116:50;;700:472;-1:-1:-1;;700:472:11:o;1177:220::-;1326:2;1315:9;1308:21;1289:4;1346:45;1387:2;1376:9;1372:18;1364:6;1346:45;:::i;1402:154::-;-1:-1:-1;;;;;1481:5:11;1477:54;1470:5;1467:65;1457:93;;1546:1;1543;1536:12;1561:315;1629:6;1637;1690:2;1678:9;1669:7;1665:23;1661:32;1658:52;;;1706:1;1703;1696:12;1658:52;1745:9;1732:23;1764:31;1789:5;1764:31;:::i;:::-;1814:5;1866:2;1851:18;;;;1838:32;;-1:-1:-1;;;1561:315:11:o;2255:456::-;2332:6;2340;2348;2401:2;2389:9;2380:7;2376:23;2372:32;2369:52;;;2417:1;2414;2407:12;2369:52;2456:9;2443:23;2475:31;2500:5;2475:31;:::i;:::-;2525:5;-1:-1:-1;2582:2:11;2567:18;;2554:32;2595:33;2554:32;2595:33;:::i;:::-;2255:456;;2647:7;;-1:-1:-1;;;2701:2:11;2686:18;;;;2673:32;;2255:456::o;2716:180::-;2775:6;2828:2;2816:9;2807:7;2803:23;2799:32;2796:52;;;2844:1;2841;2834:12;2796:52;-1:-1:-1;2867:23:11;;2716:180;-1:-1:-1;2716:180:11:o;3090:184::-;-1:-1:-1;;;;;3139:1:11;3132:88;3239:4;3236:1;3229:15;3263:4;3260:1;3253:15;3279:718;3321:5;3374:3;3367:4;3359:6;3355:17;3351:27;3341:55;;3392:1;3389;3382:12;3341:55;3428:6;3415:20;3454:18;3491:2;3487;3484:10;3481:36;;;3497:18;;:::i;:::-;3572:2;3566:9;3540:2;3626:13;;-1:-1:-1;;3622:22:11;;;3646:2;3618:31;3614:40;3602:53;;;3670:18;;;3690:22;;;3667:46;3664:72;;;3716:18;;:::i;:::-;3756:10;3752:2;3745:22;3791:2;3783:6;3776:18;3837:3;3830:4;3825:2;3817:6;3813:15;3809:26;3806:35;3803:55;;;3854:1;3851;3844:12;3803:55;3918:2;3911:4;3903:6;3899:17;3892:4;3884:6;3880:17;3867:54;3965:1;3958:4;3953:2;3945:6;3941:15;3937:26;3930:37;3985:6;3976:15;;;;;;3279:718;;;;:::o;4002:885::-;4115:6;4123;4131;4139;4147;4200:3;4188:9;4179:7;4175:23;4171:33;4168:53;;;4217:1;4214;4207:12;4168:53;4256:9;4243:23;4275:31;4300:5;4275:31;:::i;:::-;4325:5;-1:-1:-1;4382:2:11;4367:18;;4354:32;4395:33;4354:32;4395:33;:::i;:::-;4447:7;-1:-1:-1;4501:2:11;4486:18;;4473:32;;-1:-1:-1;4556:2:11;4541:18;;4528:32;4579:18;4609:14;;;4606:34;;;4636:1;4633;4626:12;4606:34;4659:49;4700:7;4691:6;4680:9;4676:22;4659:49;:::i;:::-;4649:59;;4761:3;4750:9;4746:19;4733:33;4717:49;;4791:2;4781:8;4778:16;4775:36;;;4807:1;4804;4797:12;4775:36;;4830:51;4873:7;4862:8;4851:9;4847:24;4830:51;:::i;:::-;4820:61;;;4002:885;;;;;;;;:::o;4892:247::-;4951:6;5004:2;4992:9;4983:7;4979:23;4975:32;4972:52;;;5020:1;5017;5010:12;4972:52;5059:9;5046:23;5078:31;5103:5;5078:31;:::i;5144:523::-;5230:6;5238;5246;5299:2;5287:9;5278:7;5274:23;5270:32;5267:52;;;5315:1;5312;5305:12;5267:52;5354:9;5341:23;5373:31;5398:5;5373:31;:::i;:::-;5423:5;-1:-1:-1;5475:2:11;5460:18;;5447:32;;-1:-1:-1;5530:2:11;5515:18;;5502:32;5557:18;5546:30;;5543:50;;;5589:1;5586;5579:12;5543:50;5612:49;5653:7;5644:6;5633:9;5629:22;5612:49;:::i;:::-;5602:59;;;5144:523;;;;;:::o;5672:388::-;5740:6;5748;5801:2;5789:9;5780:7;5776:23;5772:32;5769:52;;;5817:1;5814;5807:12;5769:52;5856:9;5843:23;5875:31;5900:5;5875:31;:::i;:::-;5925:5;-1:-1:-1;5982:2:11;5967:18;;5954:32;5995:33;5954:32;5995:33;:::i;:::-;6047:7;6037:17;;;5672:388;;;;;:::o;6065:743::-;6169:6;6177;6185;6193;6246:3;6234:9;6225:7;6221:23;6217:33;6214:53;;;6263:1;6260;6253:12;6214:53;6302:9;6289:23;6321:31;6346:5;6321:31;:::i;:::-;6371:5;-1:-1:-1;6423:2:11;6408:18;;6395:32;;-1:-1:-1;6478:2:11;6463:18;;6450:32;6501:18;6531:14;;;6528:34;;;6558:1;6555;6548:12;6528:34;6581:49;6622:7;6613:6;6602:9;6598:22;6581:49;:::i;:::-;6571:59;;6683:2;6672:9;6668:18;6655:32;6639:48;;6712:2;6702:8;6699:16;6696:36;;;6728:1;6725;6718:12;6696:36;;6751:51;6794:7;6783:8;6772:9;6768:24;6751:51;:::i;:::-;6741:61;;;6065:743;;;;;;;:::o;6813:388::-;6890:6;6898;6951:2;6939:9;6930:7;6926:23;6922:32;6919:52;;;6967:1;6964;6957:12;6919:52;7003:9;6990:23;6980:33;;7064:2;7053:9;7049:18;7036:32;7091:18;7083:6;7080:30;7077:50;;;7123:1;7120;7113:12;7077:50;7146:49;7187:7;7178:6;7167:9;7163:22;7146:49;:::i;:::-;7136:59;;;6813:388;;;;;:::o;7206:437::-;7291:1;7281:12;;7338:1;7328:12;;;7349:61;;7403:4;7395:6;7391:17;7381:27;;7349:61;7456:2;7448:6;7445:14;7425:18;7422:38;7419:218;;;-1:-1:-1;;;;;7490:1:11;7483:88;7594:4;7591:1;7584:15;7622:4;7619:1;7612:15;7419:218;;7206:437;;;:::o;7648:400::-;7850:2;7832:21;;;7889:2;7869:18;;;7862:30;7928:34;7923:2;7908:18;;7901:62;7999:6;7994:2;7979:18;;7972:34;8038:3;8023:19;;7648:400::o;8460:184::-;-1:-1:-1;;;;;8509:1:11;8502:88;8609:4;8606:1;8599:15;8633:4;8630:1;8623:15;8649:125;8689:4;8717:1;8714;8711:8;8708:34;;;8722:18;;:::i;:::-;-1:-1:-1;8759:9:11;;8649:125::o;8779:168::-;8819:7;8885:1;8881;8877:6;8873:14;8870:1;8867:21;8862:1;8855:9;8848:17;8844:45;8841:71;;;8892:18;;:::i;:::-;-1:-1:-1;8932:9:11;;8779:168::o;8952:274::-;8992:1;9018;9008:189;;-1:-1:-1;;;;;9050:1:11;9043:88;9154:4;9151:1;9144:15;9182:4;9179:1;9172:15;9008:189;-1:-1:-1;9211:9:11;;8952:274::o;9875:277::-;9942:6;9995:2;9983:9;9974:7;9970:23;9966:32;9963:52;;;10011:1;10008;10001:12;9963:52;10043:9;10037:16;10096:5;10089:13;10082:21;10075:5;10072:32;10062:60;;10118:1;10115;10108:12;10157:408;10359:2;10341:21;;;10398:2;10378:18;;;10371:30;10437:34;10432:2;10417:18;;10410:62;10508:14;10503:2;10488:18;;10481:42;10555:3;10540:19;;10157:408::o;10570:128::-;10610:3;10641:1;10637:6;10634:1;10631:13;10628:39;;;10647:18;;:::i;:::-;-1:-1:-1;10683:9:11;;10570:128::o;10934:184::-;11004:6;11057:2;11045:9;11036:7;11032:23;11028:32;11025:52;;;11073:1;11070;11063:12;11025:52;-1:-1:-1;11096:16:11;;10934:184;-1:-1:-1;10934:184:11:o;13445:251::-;13515:6;13568:2;13556:9;13547:7;13543:23;13539:32;13536:52;;;13584:1;13581;13574:12;13536:52;13616:9;13610:16;13635:31;13660:5;13635:31;:::i;13701:755::-;13969:4;-1:-1:-1;;;;;14079:2:11;14071:6;14067:15;14056:9;14049:34;14131:2;14123:6;14119:15;14114:2;14103:9;14099:18;14092:43;14183:2;14175:6;14171:15;14166:2;14155:9;14151:18;14144:43;;14223:6;14218:2;14207:9;14203:18;14196:34;14267:3;14261;14250:9;14246:19;14239:32;14294:46;14335:3;14324:9;14320:19;14312:6;14294:46;:::i;:::-;14389:9;14381:6;14377:22;14371:3;14360:9;14356:19;14349:51;14417:33;14443:6;14435;14417:33;:::i;:::-;14409:41;13701:755;-1:-1:-1;;;;;;;;;13701:755:11:o;15228:450::-;15449:6;15438:9;15431:25;15492:2;15487;15476:9;15472:18;15465:30;15412:4;15518:45;15559:2;15548:9;15544:18;15536:6;15518:45;:::i;:::-;15611:9;15603:6;15599:22;15594:2;15583:9;15579:18;15572:50;15639:33;15665:6;15657;15639:33;:::i;:::-;15631:41;15228:450;-1:-1:-1;;;;;;15228:450:11:o;16933:179::-;17011:13;;17064:22;17053:34;;17043:45;;17033:73;;17102:1;17099;17092:12;17033:73;16933:179;;;:::o;17117:473::-;17220:6;17228;17236;17244;17252;17305:3;17293:9;17284:7;17280:23;17276:33;17273:53;;;17322:1;17319;17312:12;17273:53;17345:39;17374:9;17345:39;:::i;:::-;17335:49;;17424:2;17413:9;17409:18;17403:25;17393:35;;17468:2;17457:9;17453:18;17447:25;17437:35;;17512:2;17501:9;17497:18;17491:25;17481:35;;17535:49;17579:3;17568:9;17564:19;17535:49;:::i;:::-;17525:59;;17117:473;;;;;;;;:::o",
  "source": "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.0;\n\nimport \"@openzeppelin/contracts/token/ERC777/ERC777.sol\";\nimport \"@openzeppelin/contracts/token/ERC20/IERC20.sol\";\nimport \"@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol\";\n\ncontract MyToken is ERC777 {\n\t// IERC20 Interface lets us call IERC20 functions in other ERC20 contracts\n\t// TODO: Replace Address here with the token address you're targetting\n\tIERC20 otherToken = IERC20(address(0xfe4F5145f6e09952a5ba9e956ED0C25e3Fa4c7F1));\n\n\t// Owner of the contract\n\taddress private owner;\n\n\t// Chainlink pricefeed\n\tAggregatorV3Interface internal priceFeed;\n\n\t// TODO: Replace Token Name and Symbol\n\tconstructor() ERC777(\"MyTokenVersion2\", \"MT_V2\", address(this)) {\n\t\towner = msg.sender; // Set Deployer Address as the Owner\n\t\tpriceFeed = AggregatorV3Interface(0xd0D5e3DB44DE05E9F294BB0a3bEEaF030DE24Ada); // TODO: Change to HBAR/USD -> 0x38C5ae3ee324ee027D88c5117ee58d07c9b4699b\n\t}\n\n\tuint private otherTokenDeposited;\n\tfunction swap(uint256 amount) public {\n\t\totherToken.transferFrom(msg.sender, address(this), amount); // Transfer tokens from caller account to THIS Contract\n\n\t\t// Update Amount of USDT Received\n\t\totherTokenDeposited += amount;\n\n\t\t// Mint New Tokens\n\t\tuint amountBasedOnFeed = (amount * 100000000) / getLatestPrice();\n\t\t_mint(msg.sender, amountBasedOnFeed, \"\", \"\");\n\t}\n\n\t// Modifier to restrict access to Owner\n\tmodifier onlyOwner() {\n\t\trequire(msg.sender == owner, \"Access Denied\");\n\t\t_;\n\t}\n\n\t// Function to withdraw\n\t// Only Owner can call it\n\t// Transfers a specific amount to Owner's account\n\tfunction withdraw(uint256 amount) public onlyOwner {\n\t\totherToken.transfer(owner, amount); // Transfer from THIS Contract to Owner\n\t}\n\n\t// Function to withdraw entire token balance\n\t// Only Owner can call it\n\t// address(this) returns the Contract Address\n\t// Transfers the entire balance to Owner's account\n\tfunction withdrawAll() public onlyOwner {\n\t\totherToken.transfer(owner, otherToken.balanceOf(address(this))); // Transfer entire token balance of THIS Contract to Owner\n\t}\n\n\t// Burn Function\n\tuint private tokensBurnt;\n\tuint private otherTokenWithdrawn;\n\tfunction burnTokens(uint256 amount) public {\n\t\toperatorSend(msg.sender, 0x000000000000000000000000000000000000dEaD, amount, \"\", \"\"); // Send the tokens to DEAD Address\n\n\t\tuint tokensInCirculation = totalSupply() - tokensBurnt;\n\t\tuint burnPrice = (tokensInCirculation * 100000000) / (otherTokenDeposited - otherTokenWithdrawn);\n\n\t\tuint otherTokenAmount = (amount / burnPrice) * 100000000;\n\t\totherToken.transfer(msg.sender, otherTokenAmount); \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t// Transfer from THIS Contract to sender\n\t\t\n\n\t\t// Update records\n\t\ttokensBurnt += amount;\n\t\totherTokenWithdrawn += otherTokenAmount;\n\t}\n\n\tfunction getBurnPrice() public view returns (uint) {\n\t\tuint tokensInCirculation = totalSupply() - tokensBurnt;\n\t\tif (tokensInCirculation == 0) return 0;\n\n\t\tuint burnPrice = (tokensInCirculation * 1000000) / (otherTokenDeposited - otherTokenWithdrawn);\n\n\t\treturn burnPrice;\n\t}\n\n\tfunction getLatestPrice() internal view returns (uint) {\n\t\t(\n\t\t\tuint80 _roundID,\n\t\t\tint price,\n\t\t\tuint _startedAt,\n\t\t\tuint _timeStamp,\n\t\t\tuint80 _answeredInRound\n\t\t) = priceFeed.latestRoundData();\n\t\treturn uint(price);\n\t}\n}",
  "sourcePath": "C:\\Users\\debuj\\Desktop\\projects\\fiverr_wrappable\\onchain\\contracts\\MyToken.sol",
  "ast": {
    "absolutePath": "project:/contracts/MyToken.sol",
    "exportedSymbols": {
      "Address": [
        1765
      ],
      "AggregatorV3Interface": [
        45
      ],
      "Context": [
        1787
      ],
      "ERC777": [
        1271
      ],
      "IERC1820Registry": [
        1877
      ],
      "IERC20": [
        123
      ],
      "IERC777": [
        1430
      ],
      "IERC777Recipient": [
        1450
      ],
      "IERC777Sender": [
        1470
      ],
      "MyToken": [
        2164
      ]
    },
    "id": 2165,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1912,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "32:23:10"
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC777/ERC777.sol",
        "file": "@openzeppelin/contracts/token/ERC777/ERC777.sol",
        "id": 1913,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 2165,
        "sourceUnit": 1272,
        "src": "57:57:10",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC20/IERC20.sol",
        "file": "@openzeppelin/contracts/token/ERC20/IERC20.sol",
        "id": 1914,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 2165,
        "sourceUnit": 124,
        "src": "115:56:10",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol",
        "file": "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol",
        "id": 1915,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 2165,
        "sourceUnit": 46,
        "src": "172:76:10",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 1916,
              "name": "ERC777",
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 1271,
              "src": "270:6:10"
            },
            "id": 1917,
            "nodeType": "InheritanceSpecifier",
            "src": "270:6:10"
          }
        ],
        "canonicalName": "MyToken",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "id": 2164,
        "linearizedBaseContracts": [
          2164,
          1271,
          123,
          1430,
          1787
        ],
        "name": "MyToken",
        "nameLocation": "259:7:10",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 1926,
            "mutability": "mutable",
            "name": "otherToken",
            "nameLocation": "435:10:10",
            "nodeType": "VariableDeclaration",
            "scope": 2164,
            "src": "428:79:10",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_IERC20_$123",
              "typeString": "contract IERC20"
            },
            "typeName": {
              "id": 1919,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 1918,
                "name": "IERC20",
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 123,
                "src": "428:6:10"
              },
              "referencedDeclaration": 123,
              "src": "428:6:10",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC20_$123",
                "typeString": "contract IERC20"
              }
            },
            "value": {
              "arguments": [
                {
                  "arguments": [
                    {
                      "hexValue": "307866653446353134356636653039393532613562613965393536454430433235653346613463374631",
                      "id": 1923,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "463:42:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "value": "0xfe4F5145f6e09952a5ba9e956ED0C25e3Fa4c7F1"
                    }
                  ],
                  "expression": {
                    "argumentTypes": [
                      {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    ],
                    "id": 1922,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "nodeType": "ElementaryTypeNameExpression",
                    "src": "455:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_type$_t_address_$",
                      "typeString": "type(address)"
                    },
                    "typeName": {
                      "id": 1921,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "455:7:10",
                      "typeDescriptions": {}
                    }
                  },
                  "id": 1924,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "typeConversion",
                  "lValueRequested": false,
                  "names": [],
                  "nodeType": "FunctionCall",
                  "src": "455:51:10",
                  "tryCall": false,
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                }
              ],
              "expression": {
                "argumentTypes": [
                  {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                ],
                "id": 1920,
                "name": "IERC20",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 123,
                "src": "448:6:10",
                "typeDescriptions": {
                  "typeIdentifier": "t_type$_t_contract$_IERC20_$123_$",
                  "typeString": "type(contract IERC20)"
                }
              },
              "id": 1925,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "typeConversion",
              "lValueRequested": false,
              "names": [],
              "nodeType": "FunctionCall",
              "src": "448:59:10",
              "tryCall": false,
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC20_$123",
                "typeString": "contract IERC20"
              }
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 1928,
            "mutability": "mutable",
            "name": "owner",
            "nameLocation": "553:5:10",
            "nodeType": "VariableDeclaration",
            "scope": 2164,
            "src": "537:21:10",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 1927,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "537:7:10",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 1931,
            "mutability": "mutable",
            "name": "priceFeed",
            "nameLocation": "617:9:10",
            "nodeType": "VariableDeclaration",
            "scope": 2164,
            "src": "586:40:10",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_AggregatorV3Interface_$45",
              "typeString": "contract AggregatorV3Interface"
            },
            "typeName": {
              "id": 1930,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 1929,
                "name": "AggregatorV3Interface",
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 45,
                "src": "586:21:10"
              },
              "referencedDeclaration": 45,
              "src": "586:21:10",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_AggregatorV3Interface_$45",
                "typeString": "contract AggregatorV3Interface"
              }
            },
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1953,
              "nodeType": "Block",
              "src": "734:218:10",
              "statements": [
                {
                  "expression": {
                    "id": 1945,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 1942,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1928,
                      "src": "738:5:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 1943,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4294967281,
                        "src": "746:3:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 1944,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "src": "746:10:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "738:18:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 1946,
                  "nodeType": "ExpressionStatement",
                  "src": "738:18:10"
                },
                {
                  "expression": {
                    "id": 1951,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 1947,
                      "name": "priceFeed",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1931,
                      "src": "797:9:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_AggregatorV3Interface_$45",
                        "typeString": "contract AggregatorV3Interface"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "hexValue": "307864304435653344423434444530354539463239344242306133624545614630333044453234416461",
                          "id": 1949,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "831:42:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "value": "0xd0D5e3DB44DE05E9F294BB0a3bEEaF030DE24Ada"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 1948,
                        "name": "AggregatorV3Interface",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 45,
                        "src": "809:21:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_AggregatorV3Interface_$45_$",
                          "typeString": "type(contract AggregatorV3Interface)"
                        }
                      },
                      "id": 1950,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "809:65:10",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_AggregatorV3Interface_$45",
                        "typeString": "contract AggregatorV3Interface"
                      }
                    },
                    "src": "797:77:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_AggregatorV3Interface_$45",
                      "typeString": "contract AggregatorV3Interface"
                    }
                  },
                  "id": 1952,
                  "nodeType": "ExpressionStatement",
                  "src": "797:77:10"
                }
              ]
            },
            "id": 1954,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "hexValue": "4d79546f6b656e56657273696f6e32",
                    "id": 1934,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "691:17:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_06410dfe98d39b82ca4526b040fa78f13d5185d6b68a91d0dec7b5eddc3af90f",
                      "typeString": "literal_string \"MyTokenVersion2\""
                    },
                    "value": "MyTokenVersion2"
                  },
                  {
                    "hexValue": "4d545f5632",
                    "id": 1935,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "710:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_7e53d1ddff798740bb7f5d6bc4d93d2c050dbb9f2749d02aeb3330144e6b5b2d",
                      "typeString": "literal_string \"MT_V2\""
                    },
                    "value": "MT_V2"
                  },
                  {
                    "arguments": [
                      {
                        "id": 1938,
                        "name": "this",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4294967268,
                        "src": "727:4:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_MyToken_$2164",
                          "typeString": "contract MyToken"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_MyToken_$2164",
                          "typeString": "contract MyToken"
                        }
                      ],
                      "id": 1937,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "719:7:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_address_$",
                        "typeString": "type(address)"
                      },
                      "typeName": {
                        "id": 1936,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "719:7:10",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 1939,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "719:13:10",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 1940,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 1933,
                  "name": "ERC777",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 1271,
                  "src": "684:6:10"
                },
                "nodeType": "ModifierInvocation",
                "src": "684:49:10"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1932,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "681:2:10"
            },
            "returnParameters": {
              "id": 1941,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "734:0:10"
            },
            "scope": 2164,
            "src": "670:282:10",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 1956,
            "mutability": "mutable",
            "name": "otherTokenDeposited",
            "nameLocation": "968:19:10",
            "nodeType": "VariableDeclaration",
            "scope": 2164,
            "src": "955:32:10",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 1955,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "955:4:10",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "private"
          },
          {
            "body": {
              "id": 1995,
              "nodeType": "Block",
              "src": "1027:330:10",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 1964,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "1055:3:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 1965,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "1055:10:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 1968,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967268,
                            "src": "1075:4:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_MyToken_$2164",
                              "typeString": "contract MyToken"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_MyToken_$2164",
                              "typeString": "contract MyToken"
                            }
                          ],
                          "id": 1967,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1067:7:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 1966,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "1067:7:10",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 1969,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1067:13:10",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 1970,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1958,
                        "src": "1082:6:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 1961,
                        "name": "otherToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1926,
                        "src": "1031:10:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$123",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 1963,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transferFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 104,
                      "src": "1031:23:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,address,uint256) external returns (bool)"
                      }
                    },
                    "id": 1971,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1031:58:10",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 1972,
                  "nodeType": "ExpressionStatement",
                  "src": "1031:58:10"
                },
                {
                  "expression": {
                    "id": 1975,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 1973,
                      "name": "otherTokenDeposited",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1956,
                      "src": "1186:19:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "id": 1974,
                      "name": "amount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1958,
                      "src": "1209:6:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1186:29:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 1976,
                  "nodeType": "ExpressionStatement",
                  "src": "1186:29:10"
                },
                {
                  "assignments": [
                    1978
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1978,
                      "mutability": "mutable",
                      "name": "amountBasedOnFeed",
                      "nameLocation": "1246:17:10",
                      "nodeType": "VariableDeclaration",
                      "scope": 1995,
                      "src": "1241:22:10",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1977,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1241:4:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 1986,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1985,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "components": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 1981,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 1979,
                            "name": "amount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1958,
                            "src": "1267:6:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "*",
                          "rightExpression": {
                            "hexValue": "313030303030303030",
                            "id": 1980,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1276:9:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_100000000_by_1",
                              "typeString": "int_const 100000000"
                            },
                            "value": "100000000"
                          },
                          "src": "1267:18:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 1982,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "1266:20:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "/",
                    "rightExpression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 1983,
                        "name": "getLatestPrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2163,
                        "src": "1289:14:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                          "typeString": "function () view returns (uint256)"
                        }
                      },
                      "id": 1984,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1289:16:10",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1266:39:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1241:64:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 1988,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "1315:3:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 1989,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "1315:10:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 1990,
                        "name": "amountBasedOnFeed",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1978,
                        "src": "1327:17:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "",
                        "id": 1991,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1346:2:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        "value": ""
                      },
                      {
                        "hexValue": "",
                        "id": 1992,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1350:2:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        "value": ""
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        }
                      ],
                      "id": 1987,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        757,
                        837
                      ],
                      "referencedDeclaration": 757,
                      "src": "1309:5:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,uint256,bytes memory,bytes memory)"
                      }
                    },
                    "id": 1993,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1309:44:10",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1994,
                  "nodeType": "ExpressionStatement",
                  "src": "1309:44:10"
                }
              ]
            },
            "functionSelector": "94b918de",
            "id": 1996,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "swap",
            "nameLocation": "999:4:10",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1959,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1958,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "1012:6:10",
                  "nodeType": "VariableDeclaration",
                  "scope": 1996,
                  "src": "1004:14:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1957,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1004:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1003:16:10"
            },
            "returnParameters": {
              "id": 1960,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1027:0:10"
            },
            "scope": 2164,
            "src": "990:367:10",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2007,
              "nodeType": "Block",
              "src": "1422:58:10",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 2002,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 1999,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "1434:3:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 2000,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "1434:10:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "id": 2001,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1928,
                          "src": "1448:5:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1434:19:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "4163636573732044656e696564",
                        "id": 2003,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1455:15:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_4de4edbd6381194572dd0ff1e4941d4b774997c05d2f2b31c1c37d0f15da2226",
                          "typeString": "literal_string \"Access Denied\""
                        },
                        "value": "Access Denied"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_4de4edbd6381194572dd0ff1e4941d4b774997c05d2f2b31c1c37d0f15da2226",
                          "typeString": "literal_string \"Access Denied\""
                        }
                      ],
                      "id": 1998,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "1426:7:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 2004,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1426:45:10",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2005,
                  "nodeType": "ExpressionStatement",
                  "src": "1426:45:10"
                },
                {
                  "id": 2006,
                  "nodeType": "PlaceholderStatement",
                  "src": "1475:1:10"
                }
              ]
            },
            "id": 2008,
            "name": "onlyOwner",
            "nameLocation": "1410:9:10",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 1997,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1419:2:10"
            },
            "src": "1401:79:10",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 2022,
              "nodeType": "Block",
              "src": "1637:82:10",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 2018,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1928,
                        "src": "1661:5:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 2019,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2010,
                        "src": "1668:6:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 2015,
                        "name": "otherToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1926,
                        "src": "1641:10:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$123",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 2017,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 72,
                      "src": "1641:19:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) external returns (bool)"
                      }
                    },
                    "id": 2020,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1641:34:10",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 2021,
                  "nodeType": "ExpressionStatement",
                  "src": "1641:34:10"
                }
              ]
            },
            "functionSelector": "2e1a7d4d",
            "id": 2023,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 2013,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 2012,
                  "name": "onlyOwner",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 2008,
                  "src": "1627:9:10"
                },
                "nodeType": "ModifierInvocation",
                "src": "1627:9:10"
              }
            ],
            "name": "withdraw",
            "nameLocation": "1595:8:10",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2011,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2010,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "1612:6:10",
                  "nodeType": "VariableDeclaration",
                  "scope": 2023,
                  "src": "1604:14:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2009,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1604:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1603:16:10"
            },
            "returnParameters": {
              "id": 2014,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1637:0:10"
            },
            "scope": 2164,
            "src": "1586:133:10",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2041,
              "nodeType": "Block",
              "src": "1934:130:10",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 2031,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1928,
                        "src": "1958:5:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "id": 2036,
                                "name": "this",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4294967268,
                                "src": "1994:4:10",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_MyToken_$2164",
                                  "typeString": "contract MyToken"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_MyToken_$2164",
                                  "typeString": "contract MyToken"
                                }
                              ],
                              "id": 2035,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "1986:7:10",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 2034,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "1986:7:10",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 2037,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1986:13:10",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "expression": {
                            "id": 2032,
                            "name": "otherToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1926,
                            "src": "1965:10:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$123",
                              "typeString": "contract IERC20"
                            }
                          },
                          "id": 2033,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "balanceOf",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 62,
                          "src": "1965:20:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                            "typeString": "function (address) view external returns (uint256)"
                          }
                        },
                        "id": 2038,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1965:35:10",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 2028,
                        "name": "otherToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1926,
                        "src": "1938:10:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$123",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 2030,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 72,
                      "src": "1938:19:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) external returns (bool)"
                      }
                    },
                    "id": 2039,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1938:63:10",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 2040,
                  "nodeType": "ExpressionStatement",
                  "src": "1938:63:10"
                }
              ]
            },
            "functionSelector": "853828b6",
            "id": 2042,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 2026,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 2025,
                  "name": "onlyOwner",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 2008,
                  "src": "1924:9:10"
                },
                "nodeType": "ModifierInvocation",
                "src": "1924:9:10"
              }
            ],
            "name": "withdrawAll",
            "nameLocation": "1903:11:10",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2024,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1914:2:10"
            },
            "returnParameters": {
              "id": 2027,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1934:0:10"
            },
            "scope": 2164,
            "src": "1894:170:10",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 2044,
            "mutability": "mutable",
            "name": "tokensBurnt",
            "nameLocation": "2098:11:10",
            "nodeType": "VariableDeclaration",
            "scope": 2164,
            "src": "2085:24:10",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 2043,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "2085:4:10",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 2046,
            "mutability": "mutable",
            "name": "otherTokenWithdrawn",
            "nameLocation": "2125:19:10",
            "nodeType": "VariableDeclaration",
            "scope": 2164,
            "src": "2112:32:10",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 2045,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "2112:4:10",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "private"
          },
          {
            "body": {
              "id": 2104,
              "nodeType": "Block",
              "src": "2190:551:10",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 2052,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "2207:3:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 2053,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "2207:10:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "hexValue": "307830303030303030303030303030303030303030303030303030303030303030303030303064456144",
                        "id": 2054,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2219:42:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "value": "0x000000000000000000000000000000000000dEaD"
                      },
                      {
                        "id": 2055,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2048,
                        "src": "2263:6:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "",
                        "id": 2056,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2271:2:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        "value": ""
                      },
                      {
                        "hexValue": "",
                        "id": 2057,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2275:2:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        "value": ""
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        }
                      ],
                      "id": 2051,
                      "name": "operatorSend",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 588,
                      "src": "2194:12:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,address,uint256,bytes memory,bytes memory)"
                      }
                    },
                    "id": 2058,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2194:84:10",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2059,
                  "nodeType": "ExpressionStatement",
                  "src": "2194:84:10"
                },
                {
                  "assignments": [
                    2061
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2061,
                      "mutability": "mutable",
                      "name": "tokensInCirculation",
                      "nameLocation": "2323:19:10",
                      "nodeType": "VariableDeclaration",
                      "scope": 2104,
                      "src": "2318:24:10",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 2060,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2318:4:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 2066,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 2065,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 2062,
                        "name": "totalSupply",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 306,
                        "src": "2345:11:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                          "typeString": "function () view returns (uint256)"
                        }
                      },
                      "id": 2063,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2345:13:10",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "id": 2064,
                      "name": "tokensBurnt",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2044,
                      "src": "2361:11:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2345:27:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2318:54:10"
                },
                {
                  "assignments": [
                    2068
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2068,
                      "mutability": "mutable",
                      "name": "burnPrice",
                      "nameLocation": "2381:9:10",
                      "nodeType": "VariableDeclaration",
                      "scope": 2104,
                      "src": "2376:14:10",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 2067,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2376:4:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 2078,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 2077,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "components": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 2071,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 2069,
                            "name": "tokensInCirculation",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2061,
                            "src": "2394:19:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "*",
                          "rightExpression": {
                            "hexValue": "313030303030303030",
                            "id": 2070,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2416:9:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_100000000_by_1",
                              "typeString": "int_const 100000000"
                            },
                            "value": "100000000"
                          },
                          "src": "2394:31:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 2072,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "2393:33:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "/",
                    "rightExpression": {
                      "components": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 2075,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 2073,
                            "name": "otherTokenDeposited",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1956,
                            "src": "2430:19:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "id": 2074,
                            "name": "otherTokenWithdrawn",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2046,
                            "src": "2452:19:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2430:41:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 2076,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "2429:43:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2393:79:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2376:96:10"
                },
                {
                  "assignments": [
                    2080
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2080,
                      "mutability": "mutable",
                      "name": "otherTokenAmount",
                      "nameLocation": "2482:16:10",
                      "nodeType": "VariableDeclaration",
                      "scope": 2104,
                      "src": "2477:21:10",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 2079,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2477:4:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 2087,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 2086,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "components": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 2083,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 2081,
                            "name": "amount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2048,
                            "src": "2502:6:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "/",
                          "rightExpression": {
                            "id": 2082,
                            "name": "burnPrice",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2068,
                            "src": "2511:9:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2502:18:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 2084,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "2501:20:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "*",
                    "rightExpression": {
                      "hexValue": "313030303030303030",
                      "id": 2085,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2524:9:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_100000000_by_1",
                        "typeString": "int_const 100000000"
                      },
                      "value": "100000000"
                    },
                    "src": "2501:32:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2477:56:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 2091,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "2557:3:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 2092,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "2557:10:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 2093,
                        "name": "otherTokenAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2080,
                        "src": "2569:16:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 2088,
                        "name": "otherToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1926,
                        "src": "2537:10:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$123",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 2090,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 72,
                      "src": "2537:19:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) external returns (bool)"
                      }
                    },
                    "id": 2094,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2537:49:10",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 2095,
                  "nodeType": "ExpressionStatement",
                  "src": "2537:49:10"
                },
                {
                  "expression": {
                    "id": 2098,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 2096,
                      "name": "tokensBurnt",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2044,
                      "src": "2673:11:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "id": 2097,
                      "name": "amount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2048,
                      "src": "2688:6:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2673:21:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 2099,
                  "nodeType": "ExpressionStatement",
                  "src": "2673:21:10"
                },
                {
                  "expression": {
                    "id": 2102,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 2100,
                      "name": "otherTokenWithdrawn",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2046,
                      "src": "2698:19:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "id": 2101,
                      "name": "otherTokenAmount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2080,
                      "src": "2721:16:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2698:39:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 2103,
                  "nodeType": "ExpressionStatement",
                  "src": "2698:39:10"
                }
              ]
            },
            "functionSelector": "6d1b229d",
            "id": 2105,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "burnTokens",
            "nameLocation": "2156:10:10",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2049,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2048,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "2175:6:10",
                  "nodeType": "VariableDeclaration",
                  "scope": 2105,
                  "src": "2167:14:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2047,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2167:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2166:16:10"
            },
            "returnParameters": {
              "id": 2050,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2190:0:10"
            },
            "scope": 2164,
            "src": "2147:594:10",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2137,
              "nodeType": "Block",
              "src": "2795:224:10",
              "statements": [
                {
                  "assignments": [
                    2111
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2111,
                      "mutability": "mutable",
                      "name": "tokensInCirculation",
                      "nameLocation": "2804:19:10",
                      "nodeType": "VariableDeclaration",
                      "scope": 2137,
                      "src": "2799:24:10",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 2110,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2799:4:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 2116,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 2115,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 2112,
                        "name": "totalSupply",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 306,
                        "src": "2826:11:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                          "typeString": "function () view returns (uint256)"
                        }
                      },
                      "id": 2113,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2826:13:10",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "id": 2114,
                      "name": "tokensBurnt",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2044,
                      "src": "2842:11:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2826:27:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2799:54:10"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 2119,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 2117,
                      "name": "tokensInCirculation",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2111,
                      "src": "2861:19:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 2118,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2884:1:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "2861:24:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 2122,
                  "nodeType": "IfStatement",
                  "src": "2857:38:10",
                  "trueBody": {
                    "expression": {
                      "hexValue": "30",
                      "id": 2120,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2894:1:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "functionReturnParameters": 2109,
                    "id": 2121,
                    "nodeType": "Return",
                    "src": "2887:8:10"
                  }
                },
                {
                  "assignments": [
                    2124
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2124,
                      "mutability": "mutable",
                      "name": "burnPrice",
                      "nameLocation": "2905:9:10",
                      "nodeType": "VariableDeclaration",
                      "scope": 2137,
                      "src": "2900:14:10",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 2123,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2900:4:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 2134,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 2133,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "components": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 2127,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 2125,
                            "name": "tokensInCirculation",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2111,
                            "src": "2918:19:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "*",
                          "rightExpression": {
                            "hexValue": "31303030303030",
                            "id": 2126,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2940:7:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1000000_by_1",
                              "typeString": "int_const 1000000"
                            },
                            "value": "1000000"
                          },
                          "src": "2918:29:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 2128,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "2917:31:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "/",
                    "rightExpression": {
                      "components": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 2131,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 2129,
                            "name": "otherTokenDeposited",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1956,
                            "src": "2952:19:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "id": 2130,
                            "name": "otherTokenWithdrawn",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2046,
                            "src": "2974:19:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2952:41:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 2132,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "2951:43:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2917:77:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2900:94:10"
                },
                {
                  "expression": {
                    "id": 2135,
                    "name": "burnPrice",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 2124,
                    "src": "3006:9:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 2109,
                  "id": 2136,
                  "nodeType": "Return",
                  "src": "2999:16:10"
                }
              ]
            },
            "functionSelector": "2ae6218d",
            "id": 2138,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getBurnPrice",
            "nameLocation": "2753:12:10",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2106,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2765:2:10"
            },
            "returnParameters": {
              "id": 2109,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2108,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2138,
                  "src": "2789:4:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2107,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2789:4:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2788:6:10"
            },
            "scope": 2164,
            "src": "2744:275:10",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2162,
              "nodeType": "Block",
              "src": "3077:166:10",
              "statements": [
                {
                  "assignments": [
                    2144,
                    2146,
                    2148,
                    2150,
                    2152
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2144,
                      "mutability": "mutable",
                      "name": "_roundID",
                      "nameLocation": "3093:8:10",
                      "nodeType": "VariableDeclaration",
                      "scope": 2162,
                      "src": "3086:15:10",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint80",
                        "typeString": "uint80"
                      },
                      "typeName": {
                        "id": 2143,
                        "name": "uint80",
                        "nodeType": "ElementaryTypeName",
                        "src": "3086:6:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint80",
                          "typeString": "uint80"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 2146,
                      "mutability": "mutable",
                      "name": "price",
                      "nameLocation": "3110:5:10",
                      "nodeType": "VariableDeclaration",
                      "scope": 2162,
                      "src": "3106:9:10",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 2145,
                        "name": "int",
                        "nodeType": "ElementaryTypeName",
                        "src": "3106:3:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 2148,
                      "mutability": "mutable",
                      "name": "_startedAt",
                      "nameLocation": "3125:10:10",
                      "nodeType": "VariableDeclaration",
                      "scope": 2162,
                      "src": "3120:15:10",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 2147,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "3120:4:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 2150,
                      "mutability": "mutable",
                      "name": "_timeStamp",
                      "nameLocation": "3145:10:10",
                      "nodeType": "VariableDeclaration",
                      "scope": 2162,
                      "src": "3140:15:10",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 2149,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "3140:4:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 2152,
                      "mutability": "mutable",
                      "name": "_answeredInRound",
                      "nameLocation": "3167:16:10",
                      "nodeType": "VariableDeclaration",
                      "scope": 2162,
                      "src": "3160:23:10",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint80",
                        "typeString": "uint80"
                      },
                      "typeName": {
                        "id": 2151,
                        "name": "uint80",
                        "nodeType": "ElementaryTypeName",
                        "src": "3160:6:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint80",
                          "typeString": "uint80"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 2156,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "id": 2153,
                        "name": "priceFeed",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1931,
                        "src": "3190:9:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_AggregatorV3Interface_$45",
                          "typeString": "contract AggregatorV3Interface"
                        }
                      },
                      "id": 2154,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "latestRoundData",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 44,
                      "src": "3190:25:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$__$returns$_t_uint80_$_t_int256_$_t_uint256_$_t_uint256_$_t_uint80_$",
                        "typeString": "function () view external returns (uint80,int256,uint256,uint256,uint80)"
                      }
                    },
                    "id": 2155,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3190:27:10",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint80_$_t_int256_$_t_uint256_$_t_uint256_$_t_uint80_$",
                      "typeString": "tuple(uint80,int256,uint256,uint256,uint80)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3081:136:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 2159,
                        "name": "price",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2146,
                        "src": "3233:5:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      ],
                      "id": 2158,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "3228:4:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint256_$",
                        "typeString": "type(uint256)"
                      },
                      "typeName": {
                        "id": 2157,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "3228:4:10",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 2160,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3228:11:10",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 2142,
                  "id": 2161,
                  "nodeType": "Return",
                  "src": "3221:18:10"
                }
              ]
            },
            "id": 2163,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getLatestPrice",
            "nameLocation": "3031:14:10",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2139,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3045:2:10"
            },
            "returnParameters": {
              "id": 2142,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2141,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2163,
                  "src": "3071:4:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2140,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3071:4:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3070:6:10"
            },
            "scope": 2164,
            "src": "3022:221:10",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "scope": 2165,
        "src": "250:2995:10",
        "usedErrors": []
      }
    ],
    "src": "32:3213:10"
  },
  "legacyAST": {
    "absolutePath": "project:/contracts/MyToken.sol",
    "exportedSymbols": {
      "Address": [
        1765
      ],
      "AggregatorV3Interface": [
        45
      ],
      "Context": [
        1787
      ],
      "ERC777": [
        1271
      ],
      "IERC1820Registry": [
        1877
      ],
      "IERC20": [
        123
      ],
      "IERC777": [
        1430
      ],
      "IERC777Recipient": [
        1450
      ],
      "IERC777Sender": [
        1470
      ],
      "MyToken": [
        2164
      ]
    },
    "id": 2165,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1912,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "32:23:10"
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC777/ERC777.sol",
        "file": "@openzeppelin/contracts/token/ERC777/ERC777.sol",
        "id": 1913,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 2165,
        "sourceUnit": 1272,
        "src": "57:57:10",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC20/IERC20.sol",
        "file": "@openzeppelin/contracts/token/ERC20/IERC20.sol",
        "id": 1914,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 2165,
        "sourceUnit": 124,
        "src": "115:56:10",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol",
        "file": "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol",
        "id": 1915,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 2165,
        "sourceUnit": 46,
        "src": "172:76:10",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 1916,
              "name": "ERC777",
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 1271,
              "src": "270:6:10"
            },
            "id": 1917,
            "nodeType": "InheritanceSpecifier",
            "src": "270:6:10"
          }
        ],
        "canonicalName": "MyToken",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "id": 2164,
        "linearizedBaseContracts": [
          2164,
          1271,
          123,
          1430,
          1787
        ],
        "name": "MyToken",
        "nameLocation": "259:7:10",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 1926,
            "mutability": "mutable",
            "name": "otherToken",
            "nameLocation": "435:10:10",
            "nodeType": "VariableDeclaration",
            "scope": 2164,
            "src": "428:79:10",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_IERC20_$123",
              "typeString": "contract IERC20"
            },
            "typeName": {
              "id": 1919,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 1918,
                "name": "IERC20",
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 123,
                "src": "428:6:10"
              },
              "referencedDeclaration": 123,
              "src": "428:6:10",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC20_$123",
                "typeString": "contract IERC20"
              }
            },
            "value": {
              "arguments": [
                {
                  "arguments": [
                    {
                      "hexValue": "307866653446353134356636653039393532613562613965393536454430433235653346613463374631",
                      "id": 1923,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "463:42:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "value": "0xfe4F5145f6e09952a5ba9e956ED0C25e3Fa4c7F1"
                    }
                  ],
                  "expression": {
                    "argumentTypes": [
                      {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    ],
                    "id": 1922,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "nodeType": "ElementaryTypeNameExpression",
                    "src": "455:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_type$_t_address_$",
                      "typeString": "type(address)"
                    },
                    "typeName": {
                      "id": 1921,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "455:7:10",
                      "typeDescriptions": {}
                    }
                  },
                  "id": 1924,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "typeConversion",
                  "lValueRequested": false,
                  "names": [],
                  "nodeType": "FunctionCall",
                  "src": "455:51:10",
                  "tryCall": false,
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                }
              ],
              "expression": {
                "argumentTypes": [
                  {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                ],
                "id": 1920,
                "name": "IERC20",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 123,
                "src": "448:6:10",
                "typeDescriptions": {
                  "typeIdentifier": "t_type$_t_contract$_IERC20_$123_$",
                  "typeString": "type(contract IERC20)"
                }
              },
              "id": 1925,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "typeConversion",
              "lValueRequested": false,
              "names": [],
              "nodeType": "FunctionCall",
              "src": "448:59:10",
              "tryCall": false,
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC20_$123",
                "typeString": "contract IERC20"
              }
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 1928,
            "mutability": "mutable",
            "name": "owner",
            "nameLocation": "553:5:10",
            "nodeType": "VariableDeclaration",
            "scope": 2164,
            "src": "537:21:10",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 1927,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "537:7:10",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 1931,
            "mutability": "mutable",
            "name": "priceFeed",
            "nameLocation": "617:9:10",
            "nodeType": "VariableDeclaration",
            "scope": 2164,
            "src": "586:40:10",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_AggregatorV3Interface_$45",
              "typeString": "contract AggregatorV3Interface"
            },
            "typeName": {
              "id": 1930,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 1929,
                "name": "AggregatorV3Interface",
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 45,
                "src": "586:21:10"
              },
              "referencedDeclaration": 45,
              "src": "586:21:10",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_AggregatorV3Interface_$45",
                "typeString": "contract AggregatorV3Interface"
              }
            },
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1953,
              "nodeType": "Block",
              "src": "734:218:10",
              "statements": [
                {
                  "expression": {
                    "id": 1945,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 1942,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1928,
                      "src": "738:5:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 1943,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4294967281,
                        "src": "746:3:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 1944,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "src": "746:10:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "738:18:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 1946,
                  "nodeType": "ExpressionStatement",
                  "src": "738:18:10"
                },
                {
                  "expression": {
                    "id": 1951,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 1947,
                      "name": "priceFeed",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1931,
                      "src": "797:9:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_AggregatorV3Interface_$45",
                        "typeString": "contract AggregatorV3Interface"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "hexValue": "307864304435653344423434444530354539463239344242306133624545614630333044453234416461",
                          "id": 1949,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "831:42:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "value": "0xd0D5e3DB44DE05E9F294BB0a3bEEaF030DE24Ada"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 1948,
                        "name": "AggregatorV3Interface",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 45,
                        "src": "809:21:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_AggregatorV3Interface_$45_$",
                          "typeString": "type(contract AggregatorV3Interface)"
                        }
                      },
                      "id": 1950,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "809:65:10",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_AggregatorV3Interface_$45",
                        "typeString": "contract AggregatorV3Interface"
                      }
                    },
                    "src": "797:77:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_AggregatorV3Interface_$45",
                      "typeString": "contract AggregatorV3Interface"
                    }
                  },
                  "id": 1952,
                  "nodeType": "ExpressionStatement",
                  "src": "797:77:10"
                }
              ]
            },
            "id": 1954,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "hexValue": "4d79546f6b656e56657273696f6e32",
                    "id": 1934,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "691:17:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_06410dfe98d39b82ca4526b040fa78f13d5185d6b68a91d0dec7b5eddc3af90f",
                      "typeString": "literal_string \"MyTokenVersion2\""
                    },
                    "value": "MyTokenVersion2"
                  },
                  {
                    "hexValue": "4d545f5632",
                    "id": 1935,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "710:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_7e53d1ddff798740bb7f5d6bc4d93d2c050dbb9f2749d02aeb3330144e6b5b2d",
                      "typeString": "literal_string \"MT_V2\""
                    },
                    "value": "MT_V2"
                  },
                  {
                    "arguments": [
                      {
                        "id": 1938,
                        "name": "this",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4294967268,
                        "src": "727:4:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_MyToken_$2164",
                          "typeString": "contract MyToken"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_MyToken_$2164",
                          "typeString": "contract MyToken"
                        }
                      ],
                      "id": 1937,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "719:7:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_address_$",
                        "typeString": "type(address)"
                      },
                      "typeName": {
                        "id": 1936,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "719:7:10",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 1939,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "719:13:10",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 1940,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 1933,
                  "name": "ERC777",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 1271,
                  "src": "684:6:10"
                },
                "nodeType": "ModifierInvocation",
                "src": "684:49:10"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1932,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "681:2:10"
            },
            "returnParameters": {
              "id": 1941,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "734:0:10"
            },
            "scope": 2164,
            "src": "670:282:10",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 1956,
            "mutability": "mutable",
            "name": "otherTokenDeposited",
            "nameLocation": "968:19:10",
            "nodeType": "VariableDeclaration",
            "scope": 2164,
            "src": "955:32:10",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 1955,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "955:4:10",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "private"
          },
          {
            "body": {
              "id": 1995,
              "nodeType": "Block",
              "src": "1027:330:10",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 1964,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "1055:3:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 1965,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "1055:10:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 1968,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967268,
                            "src": "1075:4:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_MyToken_$2164",
                              "typeString": "contract MyToken"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_MyToken_$2164",
                              "typeString": "contract MyToken"
                            }
                          ],
                          "id": 1967,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1067:7:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 1966,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "1067:7:10",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 1969,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1067:13:10",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 1970,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1958,
                        "src": "1082:6:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 1961,
                        "name": "otherToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1926,
                        "src": "1031:10:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$123",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 1963,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transferFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 104,
                      "src": "1031:23:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,address,uint256) external returns (bool)"
                      }
                    },
                    "id": 1971,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1031:58:10",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 1972,
                  "nodeType": "ExpressionStatement",
                  "src": "1031:58:10"
                },
                {
                  "expression": {
                    "id": 1975,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 1973,
                      "name": "otherTokenDeposited",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1956,
                      "src": "1186:19:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "id": 1974,
                      "name": "amount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1958,
                      "src": "1209:6:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1186:29:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 1976,
                  "nodeType": "ExpressionStatement",
                  "src": "1186:29:10"
                },
                {
                  "assignments": [
                    1978
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1978,
                      "mutability": "mutable",
                      "name": "amountBasedOnFeed",
                      "nameLocation": "1246:17:10",
                      "nodeType": "VariableDeclaration",
                      "scope": 1995,
                      "src": "1241:22:10",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1977,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1241:4:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 1986,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1985,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "components": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 1981,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 1979,
                            "name": "amount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1958,
                            "src": "1267:6:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "*",
                          "rightExpression": {
                            "hexValue": "313030303030303030",
                            "id": 1980,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1276:9:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_100000000_by_1",
                              "typeString": "int_const 100000000"
                            },
                            "value": "100000000"
                          },
                          "src": "1267:18:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 1982,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "1266:20:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "/",
                    "rightExpression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 1983,
                        "name": "getLatestPrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2163,
                        "src": "1289:14:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                          "typeString": "function () view returns (uint256)"
                        }
                      },
                      "id": 1984,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1289:16:10",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1266:39:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1241:64:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 1988,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "1315:3:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 1989,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "1315:10:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 1990,
                        "name": "amountBasedOnFeed",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1978,
                        "src": "1327:17:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "",
                        "id": 1991,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1346:2:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        "value": ""
                      },
                      {
                        "hexValue": "",
                        "id": 1992,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1350:2:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        "value": ""
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        }
                      ],
                      "id": 1987,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        757,
                        837
                      ],
                      "referencedDeclaration": 757,
                      "src": "1309:5:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,uint256,bytes memory,bytes memory)"
                      }
                    },
                    "id": 1993,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1309:44:10",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1994,
                  "nodeType": "ExpressionStatement",
                  "src": "1309:44:10"
                }
              ]
            },
            "functionSelector": "94b918de",
            "id": 1996,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "swap",
            "nameLocation": "999:4:10",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1959,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1958,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "1012:6:10",
                  "nodeType": "VariableDeclaration",
                  "scope": 1996,
                  "src": "1004:14:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1957,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1004:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1003:16:10"
            },
            "returnParameters": {
              "id": 1960,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1027:0:10"
            },
            "scope": 2164,
            "src": "990:367:10",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2007,
              "nodeType": "Block",
              "src": "1422:58:10",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 2002,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 1999,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "1434:3:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 2000,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "1434:10:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "id": 2001,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1928,
                          "src": "1448:5:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1434:19:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "4163636573732044656e696564",
                        "id": 2003,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1455:15:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_4de4edbd6381194572dd0ff1e4941d4b774997c05d2f2b31c1c37d0f15da2226",
                          "typeString": "literal_string \"Access Denied\""
                        },
                        "value": "Access Denied"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_4de4edbd6381194572dd0ff1e4941d4b774997c05d2f2b31c1c37d0f15da2226",
                          "typeString": "literal_string \"Access Denied\""
                        }
                      ],
                      "id": 1998,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "1426:7:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 2004,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1426:45:10",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2005,
                  "nodeType": "ExpressionStatement",
                  "src": "1426:45:10"
                },
                {
                  "id": 2006,
                  "nodeType": "PlaceholderStatement",
                  "src": "1475:1:10"
                }
              ]
            },
            "id": 2008,
            "name": "onlyOwner",
            "nameLocation": "1410:9:10",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 1997,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1419:2:10"
            },
            "src": "1401:79:10",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 2022,
              "nodeType": "Block",
              "src": "1637:82:10",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 2018,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1928,
                        "src": "1661:5:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 2019,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2010,
                        "src": "1668:6:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 2015,
                        "name": "otherToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1926,
                        "src": "1641:10:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$123",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 2017,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 72,
                      "src": "1641:19:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) external returns (bool)"
                      }
                    },
                    "id": 2020,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1641:34:10",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 2021,
                  "nodeType": "ExpressionStatement",
                  "src": "1641:34:10"
                }
              ]
            },
            "functionSelector": "2e1a7d4d",
            "id": 2023,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 2013,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 2012,
                  "name": "onlyOwner",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 2008,
                  "src": "1627:9:10"
                },
                "nodeType": "ModifierInvocation",
                "src": "1627:9:10"
              }
            ],
            "name": "withdraw",
            "nameLocation": "1595:8:10",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2011,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2010,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "1612:6:10",
                  "nodeType": "VariableDeclaration",
                  "scope": 2023,
                  "src": "1604:14:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2009,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1604:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1603:16:10"
            },
            "returnParameters": {
              "id": 2014,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1637:0:10"
            },
            "scope": 2164,
            "src": "1586:133:10",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2041,
              "nodeType": "Block",
              "src": "1934:130:10",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 2031,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1928,
                        "src": "1958:5:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "id": 2036,
                                "name": "this",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4294967268,
                                "src": "1994:4:10",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_MyToken_$2164",
                                  "typeString": "contract MyToken"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_MyToken_$2164",
                                  "typeString": "contract MyToken"
                                }
                              ],
                              "id": 2035,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "1986:7:10",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 2034,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "1986:7:10",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 2037,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1986:13:10",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "expression": {
                            "id": 2032,
                            "name": "otherToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1926,
                            "src": "1965:10:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$123",
                              "typeString": "contract IERC20"
                            }
                          },
                          "id": 2033,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "balanceOf",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 62,
                          "src": "1965:20:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                            "typeString": "function (address) view external returns (uint256)"
                          }
                        },
                        "id": 2038,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1965:35:10",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 2028,
                        "name": "otherToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1926,
                        "src": "1938:10:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$123",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 2030,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 72,
                      "src": "1938:19:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) external returns (bool)"
                      }
                    },
                    "id": 2039,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1938:63:10",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 2040,
                  "nodeType": "ExpressionStatement",
                  "src": "1938:63:10"
                }
              ]
            },
            "functionSelector": "853828b6",
            "id": 2042,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 2026,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 2025,
                  "name": "onlyOwner",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 2008,
                  "src": "1924:9:10"
                },
                "nodeType": "ModifierInvocation",
                "src": "1924:9:10"
              }
            ],
            "name": "withdrawAll",
            "nameLocation": "1903:11:10",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2024,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1914:2:10"
            },
            "returnParameters": {
              "id": 2027,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1934:0:10"
            },
            "scope": 2164,
            "src": "1894:170:10",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 2044,
            "mutability": "mutable",
            "name": "tokensBurnt",
            "nameLocation": "2098:11:10",
            "nodeType": "VariableDeclaration",
            "scope": 2164,
            "src": "2085:24:10",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 2043,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "2085:4:10",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 2046,
            "mutability": "mutable",
            "name": "otherTokenWithdrawn",
            "nameLocation": "2125:19:10",
            "nodeType": "VariableDeclaration",
            "scope": 2164,
            "src": "2112:32:10",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 2045,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "2112:4:10",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "private"
          },
          {
            "body": {
              "id": 2104,
              "nodeType": "Block",
              "src": "2190:551:10",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 2052,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "2207:3:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 2053,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "2207:10:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "hexValue": "307830303030303030303030303030303030303030303030303030303030303030303030303064456144",
                        "id": 2054,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2219:42:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "value": "0x000000000000000000000000000000000000dEaD"
                      },
                      {
                        "id": 2055,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2048,
                        "src": "2263:6:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "",
                        "id": 2056,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2271:2:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        "value": ""
                      },
                      {
                        "hexValue": "",
                        "id": 2057,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2275:2:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        "value": ""
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        }
                      ],
                      "id": 2051,
                      "name": "operatorSend",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 588,
                      "src": "2194:12:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,address,uint256,bytes memory,bytes memory)"
                      }
                    },
                    "id": 2058,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2194:84:10",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2059,
                  "nodeType": "ExpressionStatement",
                  "src": "2194:84:10"
                },
                {
                  "assignments": [
                    2061
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2061,
                      "mutability": "mutable",
                      "name": "tokensInCirculation",
                      "nameLocation": "2323:19:10",
                      "nodeType": "VariableDeclaration",
                      "scope": 2104,
                      "src": "2318:24:10",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 2060,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2318:4:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 2066,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 2065,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 2062,
                        "name": "totalSupply",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 306,
                        "src": "2345:11:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                          "typeString": "function () view returns (uint256)"
                        }
                      },
                      "id": 2063,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2345:13:10",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "id": 2064,
                      "name": "tokensBurnt",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2044,
                      "src": "2361:11:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2345:27:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2318:54:10"
                },
                {
                  "assignments": [
                    2068
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2068,
                      "mutability": "mutable",
                      "name": "burnPrice",
                      "nameLocation": "2381:9:10",
                      "nodeType": "VariableDeclaration",
                      "scope": 2104,
                      "src": "2376:14:10",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 2067,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2376:4:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 2078,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 2077,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "components": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 2071,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 2069,
                            "name": "tokensInCirculation",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2061,
                            "src": "2394:19:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "*",
                          "rightExpression": {
                            "hexValue": "313030303030303030",
                            "id": 2070,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2416:9:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_100000000_by_1",
                              "typeString": "int_const 100000000"
                            },
                            "value": "100000000"
                          },
                          "src": "2394:31:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 2072,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "2393:33:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "/",
                    "rightExpression": {
                      "components": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 2075,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 2073,
                            "name": "otherTokenDeposited",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1956,
                            "src": "2430:19:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "id": 2074,
                            "name": "otherTokenWithdrawn",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2046,
                            "src": "2452:19:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2430:41:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 2076,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "2429:43:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2393:79:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2376:96:10"
                },
                {
                  "assignments": [
                    2080
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2080,
                      "mutability": "mutable",
                      "name": "otherTokenAmount",
                      "nameLocation": "2482:16:10",
                      "nodeType": "VariableDeclaration",
                      "scope": 2104,
                      "src": "2477:21:10",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 2079,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2477:4:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 2087,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 2086,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "components": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 2083,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 2081,
                            "name": "amount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2048,
                            "src": "2502:6:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "/",
                          "rightExpression": {
                            "id": 2082,
                            "name": "burnPrice",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2068,
                            "src": "2511:9:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2502:18:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 2084,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "2501:20:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "*",
                    "rightExpression": {
                      "hexValue": "313030303030303030",
                      "id": 2085,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2524:9:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_100000000_by_1",
                        "typeString": "int_const 100000000"
                      },
                      "value": "100000000"
                    },
                    "src": "2501:32:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2477:56:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 2091,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "2557:3:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 2092,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "2557:10:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 2093,
                        "name": "otherTokenAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2080,
                        "src": "2569:16:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 2088,
                        "name": "otherToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1926,
                        "src": "2537:10:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$123",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 2090,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 72,
                      "src": "2537:19:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) external returns (bool)"
                      }
                    },
                    "id": 2094,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2537:49:10",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 2095,
                  "nodeType": "ExpressionStatement",
                  "src": "2537:49:10"
                },
                {
                  "expression": {
                    "id": 2098,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 2096,
                      "name": "tokensBurnt",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2044,
                      "src": "2673:11:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "id": 2097,
                      "name": "amount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2048,
                      "src": "2688:6:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2673:21:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 2099,
                  "nodeType": "ExpressionStatement",
                  "src": "2673:21:10"
                },
                {
                  "expression": {
                    "id": 2102,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 2100,
                      "name": "otherTokenWithdrawn",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2046,
                      "src": "2698:19:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "id": 2101,
                      "name": "otherTokenAmount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2080,
                      "src": "2721:16:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2698:39:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 2103,
                  "nodeType": "ExpressionStatement",
                  "src": "2698:39:10"
                }
              ]
            },
            "functionSelector": "6d1b229d",
            "id": 2105,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "burnTokens",
            "nameLocation": "2156:10:10",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2049,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2048,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "2175:6:10",
                  "nodeType": "VariableDeclaration",
                  "scope": 2105,
                  "src": "2167:14:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2047,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2167:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2166:16:10"
            },
            "returnParameters": {
              "id": 2050,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2190:0:10"
            },
            "scope": 2164,
            "src": "2147:594:10",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2137,
              "nodeType": "Block",
              "src": "2795:224:10",
              "statements": [
                {
                  "assignments": [
                    2111
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2111,
                      "mutability": "mutable",
                      "name": "tokensInCirculation",
                      "nameLocation": "2804:19:10",
                      "nodeType": "VariableDeclaration",
                      "scope": 2137,
                      "src": "2799:24:10",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 2110,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2799:4:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 2116,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 2115,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 2112,
                        "name": "totalSupply",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 306,
                        "src": "2826:11:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                          "typeString": "function () view returns (uint256)"
                        }
                      },
                      "id": 2113,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2826:13:10",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "id": 2114,
                      "name": "tokensBurnt",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2044,
                      "src": "2842:11:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2826:27:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2799:54:10"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 2119,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 2117,
                      "name": "tokensInCirculation",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2111,
                      "src": "2861:19:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 2118,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2884:1:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "2861:24:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 2122,
                  "nodeType": "IfStatement",
                  "src": "2857:38:10",
                  "trueBody": {
                    "expression": {
                      "hexValue": "30",
                      "id": 2120,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2894:1:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "functionReturnParameters": 2109,
                    "id": 2121,
                    "nodeType": "Return",
                    "src": "2887:8:10"
                  }
                },
                {
                  "assignments": [
                    2124
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2124,
                      "mutability": "mutable",
                      "name": "burnPrice",
                      "nameLocation": "2905:9:10",
                      "nodeType": "VariableDeclaration",
                      "scope": 2137,
                      "src": "2900:14:10",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 2123,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2900:4:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 2134,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 2133,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "components": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 2127,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 2125,
                            "name": "tokensInCirculation",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2111,
                            "src": "2918:19:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "*",
                          "rightExpression": {
                            "hexValue": "31303030303030",
                            "id": 2126,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2940:7:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1000000_by_1",
                              "typeString": "int_const 1000000"
                            },
                            "value": "1000000"
                          },
                          "src": "2918:29:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 2128,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "2917:31:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "/",
                    "rightExpression": {
                      "components": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 2131,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 2129,
                            "name": "otherTokenDeposited",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1956,
                            "src": "2952:19:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "id": 2130,
                            "name": "otherTokenWithdrawn",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2046,
                            "src": "2974:19:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2952:41:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 2132,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "2951:43:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2917:77:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2900:94:10"
                },
                {
                  "expression": {
                    "id": 2135,
                    "name": "burnPrice",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 2124,
                    "src": "3006:9:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 2109,
                  "id": 2136,
                  "nodeType": "Return",
                  "src": "2999:16:10"
                }
              ]
            },
            "functionSelector": "2ae6218d",
            "id": 2138,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getBurnPrice",
            "nameLocation": "2753:12:10",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2106,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2765:2:10"
            },
            "returnParameters": {
              "id": 2109,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2108,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2138,
                  "src": "2789:4:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2107,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2789:4:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2788:6:10"
            },
            "scope": 2164,
            "src": "2744:275:10",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2162,
              "nodeType": "Block",
              "src": "3077:166:10",
              "statements": [
                {
                  "assignments": [
                    2144,
                    2146,
                    2148,
                    2150,
                    2152
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2144,
                      "mutability": "mutable",
                      "name": "_roundID",
                      "nameLocation": "3093:8:10",
                      "nodeType": "VariableDeclaration",
                      "scope": 2162,
                      "src": "3086:15:10",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint80",
                        "typeString": "uint80"
                      },
                      "typeName": {
                        "id": 2143,
                        "name": "uint80",
                        "nodeType": "ElementaryTypeName",
                        "src": "3086:6:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint80",
                          "typeString": "uint80"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 2146,
                      "mutability": "mutable",
                      "name": "price",
                      "nameLocation": "3110:5:10",
                      "nodeType": "VariableDeclaration",
                      "scope": 2162,
                      "src": "3106:9:10",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 2145,
                        "name": "int",
                        "nodeType": "ElementaryTypeName",
                        "src": "3106:3:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 2148,
                      "mutability": "mutable",
                      "name": "_startedAt",
                      "nameLocation": "3125:10:10",
                      "nodeType": "VariableDeclaration",
                      "scope": 2162,
                      "src": "3120:15:10",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 2147,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "3120:4:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 2150,
                      "mutability": "mutable",
                      "name": "_timeStamp",
                      "nameLocation": "3145:10:10",
                      "nodeType": "VariableDeclaration",
                      "scope": 2162,
                      "src": "3140:15:10",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 2149,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "3140:4:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 2152,
                      "mutability": "mutable",
                      "name": "_answeredInRound",
                      "nameLocation": "3167:16:10",
                      "nodeType": "VariableDeclaration",
                      "scope": 2162,
                      "src": "3160:23:10",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint80",
                        "typeString": "uint80"
                      },
                      "typeName": {
                        "id": 2151,
                        "name": "uint80",
                        "nodeType": "ElementaryTypeName",
                        "src": "3160:6:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint80",
                          "typeString": "uint80"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 2156,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "id": 2153,
                        "name": "priceFeed",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1931,
                        "src": "3190:9:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_AggregatorV3Interface_$45",
                          "typeString": "contract AggregatorV3Interface"
                        }
                      },
                      "id": 2154,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "latestRoundData",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 44,
                      "src": "3190:25:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$__$returns$_t_uint80_$_t_int256_$_t_uint256_$_t_uint256_$_t_uint80_$",
                        "typeString": "function () view external returns (uint80,int256,uint256,uint256,uint80)"
                      }
                    },
                    "id": 2155,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3190:27:10",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint80_$_t_int256_$_t_uint256_$_t_uint256_$_t_uint80_$",
                      "typeString": "tuple(uint80,int256,uint256,uint256,uint80)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3081:136:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 2159,
                        "name": "price",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2146,
                        "src": "3233:5:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      ],
                      "id": 2158,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "3228:4:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint256_$",
                        "typeString": "type(uint256)"
                      },
                      "typeName": {
                        "id": 2157,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "3228:4:10",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 2160,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3228:11:10",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 2142,
                  "id": 2161,
                  "nodeType": "Return",
                  "src": "3221:18:10"
                }
              ]
            },
            "id": 2163,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getLatestPrice",
            "nameLocation": "3031:14:10",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2139,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3045:2:10"
            },
            "returnParameters": {
              "id": 2142,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2141,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2163,
                  "src": "3071:4:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2140,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3071:4:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3070:6:10"
            },
            "scope": 2164,
            "src": "3022:221:10",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "scope": 2165,
        "src": "250:2995:10",
        "usedErrors": []
      }
    ],
    "src": "32:3213:10"
  },
  "compiler": {
    "name": "solc",
    "version": "0.8.10+commit.fc410830.Emscripten.clang"
  },
  "networks": {
    "80001": {
      "events": {
        "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event"
        },
        "0xf4caeb2d6ca8932a215a353d0703c326ec2d81fc68170f320eb2ab49e9df61f9": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "tokenHolder",
              "type": "address"
            }
          ],
          "name": "AuthorizedOperator",
          "type": "event"
        },
        "0xa78a9be3a7b862d26933ad85fb11d80ef66b8f972d7cbba06621d583943a4098": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            },
            {
              "indexed": false,
              "internalType": "bytes",
              "name": "operatorData",
              "type": "bytes"
            }
          ],
          "name": "Burned",
          "type": "event"
        },
        "0x2fe5be0146f74c5bce36c0b80911af6c7d86ff27e89d5cfa61fc681327954e5d": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            },
            {
              "indexed": false,
              "internalType": "bytes",
              "name": "operatorData",
              "type": "bytes"
            }
          ],
          "name": "Minted",
          "type": "event"
        },
        "0x50546e66e5f44d728365dc3908c63bc5cfeeab470722c1677e3073a6ac294aa1": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "tokenHolder",
              "type": "address"
            }
          ],
          "name": "RevokedOperator",
          "type": "event"
        },
        "0x06b541ddaa720db2b10a4d0cdac39b8d360425fc073085fac19bc82614677987": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            },
            {
              "indexed": false,
              "internalType": "bytes",
              "name": "operatorData",
              "type": "bytes"
            }
          ],
          "name": "Sent",
          "type": "event"
        },
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        }
      },
      "links": {},
      "address": "0x286FEa5F8c14F90136306b14340ECf6041767e8A",
      "transactionHash": "0x0d136c67f58f9f108fdfacca8a20406fbfc97ad4ab5726450b757c721e3ec14e"
    }
  },
  "schemaVersion": "3.4.3",
  "updatedAt": "2022-03-26T07:23:46.539Z",
  "networkType": "ethereum",
  "devdoc": {
    "kind": "dev",
    "methods": {
      "allowance(address,address)": {
        "details": "See {IERC20-allowance}. Note that operator and allowance concepts are orthogonal: operators may not have allowance, and accounts with allowance may not be operators themselves."
      },
      "approve(address,uint256)": {
        "details": "See {IERC20-approve}. NOTE: If `value` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Note that accounts cannot have allowance issued by their operators."
      },
      "authorizeOperator(address)": {
        "details": "See {IERC777-authorizeOperator}."
      },
      "balanceOf(address)": {
        "details": "Returns the amount of tokens owned by an account (`tokenHolder`)."
      },
      "burn(uint256,bytes)": {
        "details": "See {IERC777-burn}. Also emits a {IERC20-Transfer} event for ERC20 compatibility."
      },
      "decimals()": {
        "details": "See {ERC20-decimals}. Always returns 18, as per the [ERC777 EIP](https://eips.ethereum.org/EIPS/eip-777#backward-compatibility)."
      },
      "defaultOperators()": {
        "details": "See {IERC777-defaultOperators}."
      },
      "granularity()": {
        "details": "See {IERC777-granularity}. This implementation always returns `1`."
      },
      "isOperatorFor(address,address)": {
        "details": "See {IERC777-isOperatorFor}."
      },
      "name()": {
        "details": "See {IERC777-name}."
      },
      "operatorBurn(address,uint256,bytes,bytes)": {
        "details": "See {IERC777-operatorBurn}. Emits {Burned} and {IERC20-Transfer} events."
      },
      "operatorSend(address,address,uint256,bytes,bytes)": {
        "details": "See {IERC777-operatorSend}. Emits {Sent} and {IERC20-Transfer} events."
      },
      "revokeOperator(address)": {
        "details": "See {IERC777-revokeOperator}."
      },
      "send(address,uint256,bytes)": {
        "details": "See {IERC777-send}. Also emits a {IERC20-Transfer} event for ERC20 compatibility."
      },
      "symbol()": {
        "details": "See {IERC777-symbol}."
      },
      "totalSupply()": {
        "details": "See {IERC777-totalSupply}."
      },
      "transfer(address,uint256)": {
        "details": "See {IERC20-transfer}. Unlike `send`, `recipient` is _not_ required to implement the {IERC777Recipient} interface if it is a contract. Also emits a {Sent} event."
      },
      "transferFrom(address,address,uint256)": {
        "details": "See {IERC20-transferFrom}. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Note that operator and allowance concepts are orthogonal: operators cannot call `transferFrom` (unless they have allowance), and accounts with allowance cannot call `operatorSend` (unless they are operators). Emits {Sent}, {IERC20-Transfer} and {IERC20-Approval} events."
      }
    },
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
}
},{}],4:[function(require,module,exports){
"use strict";

var _abi = _interopRequireDefault(require("./abi.json"));

var _MyToken = _interopRequireDefault(require("./build/contracts/MyToken.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const addresses = require('./addresses.json');

module.exports = {
  contracts: {
    OtherToken: _abi.default,
    MyToken: _MyToken.default.abi
  },
  addresses: {
    otherToken: addresses.otherTokenAddress,
    myToken: addresses.myTokenAddress
  }
};

},{"./abi.json":1,"./addresses.json":2,"./build/contracts/MyToken.json":3}]},{},[4])(4)
});
