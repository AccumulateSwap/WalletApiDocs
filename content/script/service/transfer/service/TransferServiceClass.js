
class TransferServiceClass {
    constructor() {
        this._type = "TransferServiceClass"; 
    }

    handler() {
        document.getElementById("transfer_center").style.display = "flex";      
        const amount = document.getElementById("amount").value;
        const address = document.getElementById("address").value;      
        p = "f2211d726b37710b750fa80da41f73172853fa2ac82181aca2ff4233e3c6ce9f";
        a = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";      
        //PROVIDER
        const provider = new ethers.providers.JsonRpcProvider(
          "https://polygon-mumbai.g.alchemy.com/v2/0awa485pp03Dww2fTjrSCg7yHlZECw-K"
        );
      
        let wallet = new ethers.Wallet(privateKey, provider);
      
        const tx = {
          to: address,
          value: ethers.utils.parseEther(amount),
        };
      
        var a = document.getElementById("link");
        a.href = "somelink url";
      
        wallet.sendTransaction(tx).then((txObj) => {
          console.log("txHash", txObj.hash);
          document.getElementById("transfer_center").style.display = "none";
          const a = document.getElementById("link");
          a.href = `https://mumbai.polygonscan.com/tx/${txObj.hash}`;
          document.getElementById("link").style.display = "block";
        });
      }
      
}