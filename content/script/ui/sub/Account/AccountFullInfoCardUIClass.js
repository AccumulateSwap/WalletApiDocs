//LOG HISTORY
//BINOYJOSE-4.08.2024-Code created;
//Purpose - After a light account is created, the user might want to see the key information for that account
//TODO: Ensure copy option and view(eye) options are handled properly for security reasons

class AccountFullInfoCardUIClass {
    constructor() {
        this._type = "AccountFullInfoCardUIClass"; 
        this.accountAddressElement = new UiElementByCssClass("account-address");
        this.accountPrivateKey = new UiElementByCssClass("account-private-key");
        this.accountMnemonicElement = new UiElementByCssClass("account-mnemonic");


        this.processSignupButton = new UiElementByCssClass("btn-process-signup"); 
    }
}
