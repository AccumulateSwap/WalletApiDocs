class AccountApiServiceClass {
    constructor() {
        this._type = "AccountApiServiceClass";
    }
    getBalance(address) {
        var network = acc.current.currentNetwork.network;
        const provider = new ethers.providers.JsonRpcProvider(network.jsonRpcProviderUrl);
        provider.getBalance(address).then((balance) => {            
            var amount = new AmountClass(balance,network);            
            return amount;
        });
    }  

    saveNewAccount_Server(account) {
        //API CALL
        //"http://localhost:3000/api/v1/account/createaccount";
        // const data = {
        //   privateKey: account.privateKey,
        //   address: account.address,
        // };
        const url = acc.settings.privateServerUrl.account.createAccount;
        const data = account;

        fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((result) => {
            console.log(result);      
            // window.location.reload();
          })
          .catch((error) => {
            // Handle any errors
            console.error("Error:", error);
          });
        //END OF API CALL
       }
}


