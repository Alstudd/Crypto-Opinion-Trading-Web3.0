let web3;
let contract;

const contractABI = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_personA",
        type: "address",
      },
      {
        internalType: "address",
        name: "_personB",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_betAmount",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "outcome",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "address",
        name: "winner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "loser",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "BetClosed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "personA",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "personB",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "betAmount",
        type: "uint256",
      },
    ],
    name: "BetStarted",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_outcome",
        type: "bool",
      },
    ],
    name: "closeBet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "startBet",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "betAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "betClosed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "betOutcome",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "personA",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "personB",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
]; // Replace with your actual contract ABI
const contractAddress = "0xb9D42c293b3cf3C857cC6b52A1528956dBfc78A3";

function initializeWeb3() {
  if (typeof window.ethereum !== "undefined") {
    web3 = new Web3(window.ethereum);
    initializeContract();
  } else {
    console.error("Web3 is not found. Please ensure it is loaded.");
  }
}

function initializeContract() {
  contract = new web3.eth.Contract(contractABI, contractAddress);
}

async function connectWallet() {
  if (!window.ethereum) {
    console.error("No web3 provider detected");
    updateConnectMessage("No web3 provider detected. Please install MetaMask.");
    return;
  }

  try {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setConnected(accounts[0]);
    console.log("Wallet connected:", accounts[0]);
  } catch (err) {
    console.error(err);
    updateConnectMessage(err.message);
  }
}

async function startBet() {
  try {
    const accounts = await web3.eth.getAccounts();
    const betAmountInEther = web3.utils.fromWei(
      await contract.methods.betAmount().call(),
      "ether"
    );
    await contract.methods.startBet().send({
      from: accounts[0],
      value: web3.utils.toWei(betAmountInEther, "ether"),
    });

    console.log("Bet started");
  } catch (error) {
    console.error("Error starting bet:", error);
  }
}
const isAWin = true;
async function closeBet(isAWin) {
  try {
    const accounts = await web3.eth.getAccounts();
    await contract.methods.closeBet(isAWin).send({ from: accounts[0] });
    console.log("Bet closed");
  } catch (error) {
    console.error("Error closing bet:", error);
  }
}

function shortAddress(address, startLength = 6, endLength = 4) {
  return `${address.slice(0, startLength)}...${address.slice(-endLength)}`;
}

function setConnected(address) {
  document.getElementById("userAddress").innerText =
    "Connected: " + shortAddress(address);
  document.getElementById("connectMessage").style.display = "none";
  // Add more UI updates if needed
}

function updateConnectMessage(message) {
  document.getElementById("connectMessage").innerText = message;
}

document
  .getElementById("connectWalletBtn")
  .addEventListener("click", connectWallet);
document.getElementById("startBetBtn").addEventListener("click", startBet);
document
  .getElementById("closeBetBtn")
  .addEventListener("click", () => closeBet(true)); // Adjust this call based on your application logic

window.addEventListener("load", initializeWeb3);
