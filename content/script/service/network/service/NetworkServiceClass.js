
class NetworkServiceClass {
    constructor() {
        this._type = "NetworkServiceClass"; 
    }
    getSelectedNetwork(e) {
      const element = document.getElementById("selected_network");
      element.innerHTML = e.target.innerHTML;
    
      if (e.target.innerHTML === "Ethereum Mainnet") {
        providerURL =
          "https://eth-mainnet.g.alchemy.com/v2/opB4Iw25A0nPWESS7wHxPb_JKigMmAPD";
        document.getElementById("network").style.display = "none";
      } else if (e.target.innerHTML === "Polygon Mainnet") {
        providerURL = "https://rpc.ankr.com/polygon";
        document.getElementById("network").style.display = "none";
      } else if (e.target.innerHTML === "Polygon Mumbai") {
        providerURL =
          "https://polygon-mumbai.g.alchemy.com/v2/0awa485pp03Dww2fTjrSCg7yHlZECw-K";
        document.getElementById("network").style.display = "none";
      } else if (e.target.innerHTML === "Goerli test network") {
        providerURL =
          "https://eth-goerli.g.alchemy.com/v2/cnURwhLXPAyeILTBwvvC3qw-iVg2VMmp";
        document.getElementById("network").style.display = "none";
      } else if (e.target.innerHTML === "Sepolia test network") {
        providerURL = "https://rpc.ankr.com/eth_sepolia";
        document.getElementById("network").style.display = "none";
      }      
      console.log(providerURL);
    }
}