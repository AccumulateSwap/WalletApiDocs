
class AccountServiceClass {
    constructor() {
        this._type = "AccountServiceClass"; 
    }
    copyAddress() {
        navigator.clipboard.writeText(acc.current.currentAccount.account.address);
    }    
    switchActiveAccount() {
        var userWallet = acc.ui.accountListUI.readAccountInfo();
        acc.utility.localStorageRepository.user_wallet_WRITE(userWallet);
        window.location.reload();
    }

    
/****************START IMPORT********************** */
    importAccountByPrivateKey() {
      let account = this._getCurrentWalletFromPrivateKeyByUser()
      this._saveNewAccount(account);
    }
    _getCurrentWalletFromPrivateKeyByUser() {  
      var account  = new AccountWithPrivateKeyClass();  
      account.privateKey = ui.importAccountUI.importAccountPrivateKeyTextbox.element().value;
      //const p = "f2211d726b37710b750fa80da41f73172853fa2ac82181aca2ff4233e3c6ce9f";    
      const provider = acc.current.currentNetwork.getProvider();      
      let wallet = new ethers.Wallet(account.privateKey, provider);    
      console.log(wallet.address);
      account.address = wallet.address
      return account;    
    }
    _saveNewAccount(account) {
      this._saveNewAccount_Local(account);
      //this._saveNewAccount_Server(wallet);      
    }
    _saveNewAccount_Local(account) {
        //save to local db or indexer db? Research about permanent storage
    }
    _saveNewAccount_Server(account) {
      acc.api.account.saveNewAccount_Server(account);  
    }
/****************END IMPORT********************** */
}