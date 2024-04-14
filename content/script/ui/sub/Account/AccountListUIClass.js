
//LOG HISTORY
//BINOYJOSE-4.08.2024-Code created;



class AccountListUIClass {
    constructor() {
        this._type = "AccountListUIClass"; 
        this.accountListElement = new UiElementByCssClass("accountList");
        this.accountItemValueElement = new UiElementByCssClass("account-value-holder");

    }

    readAccountInfo() {
        var element = this.accountItemValueElement.element();
        const address = data.getAttribute("data-address");
        const privateKey = data.getAttribute("data-privateKey");
        console.log(privateKey, address);
        var accountInfo = {
            address: address,
            private_key: privateKey,
            mnemonic: "Changed",
        };
        return accountInfo;
    }
}