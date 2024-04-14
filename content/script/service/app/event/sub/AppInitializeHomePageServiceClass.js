//LOG HISTORY
//BINOYJOSE-4.08.2024-Code created;

class AppInitializeHomePageServiceClass {
    constructor() {
        this._type = "AppInitializeEventHandlerServiceClass";
    }


    initializeHomePage() {
        //const userWallet = utility.localStorageRepository.user_wallet_READ() // localStorage.getItem("userWallet");
        const userWallet ={private_key:"",address:"0x2dE9449eCEB7b336a776Cf43b3F3916cf1b51aA6"};

        if(userWallet!=null){
            if (userWallet.address) {
                document.getElementById("LoginUser").style.display = "none";
                document.getElementById("home").style.display = "block";
               var privateKey = userWallet.private_key;
               var address = userWallet.address;
                acc.ui.accountMiniInfoCardUI.load_BalanceOfAmount(userWallet.address);
            }
        }
        
          const tokenRender = document.querySelector(".assets");
          const accountRender = document.querySelector(".accountList");
          //API CALL
          const url = acc.settings.privateServerUrl.token.allTokens;
          fetch(url) //"http://localhost:3000/api/v1/tokens/alltoken")
            .then((response) => response.json())
            .then((data) => {
              let elements = "";
              data.data.tokens.map(
                (token) =>
                  (elements += `
                  <div class="assets_item">
                  <img
                    class="assets_item_img"
                    src="./assets/AccumulateWallet_Logo_Tiny.jpeg"
                    alt=""
                  />
            
                  <span>${token.address.slice(0, 15)}...</span>
            
                  <span>${token.symbol}</span>
                </div>
                `)
              );
        
              tokenRender.innerHTML = elements;
            })
            .catch((error) => {
              // Handle any errors
              console.error("Error:", error);
            });
        
          //END API CALL
          const url2 = acc.settings.privateServerUrl.account.allAccounts;
          fetch(url2) //"http://localhost:3000/api/v1/account/allaccount")
            .then((response) => response.json())
            .then((data) => {
              let accounts = "";
              data.data.accounts.map(
                (account, i) =>
                  (accounts += `
                     <div  class="lists">
                        <p>${i + 1}</p>
                        <p class="accountValue account-value-holder" data-address=${
                          account.address
                        } data-privateKey=${account.privateKey}>${account.address.slice(
                    0,
                    25
                  )}..</p>
                      </div>
                `)
              );  
              accountRender.innerHTML = accounts;
            })
            .catch((error) => {
              // Handle any errors
              console.error("Error:", error);
            });  
          console.log(privateKey);
        } 
}
