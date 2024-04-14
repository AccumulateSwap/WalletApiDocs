//LOG HISTORY
//BINOYJOSE-4.08.2024-Code created;
//Purpose - After a light account is created, the user might want to see the public key information 
//TODO - TALK TO PAUL AND UNDERSTAND THE RELEVANCE OF ADDITIONAL KEYS SUCH AS FACTOM KEYS

class AccountMiniInfoCardUIClass {
    constructor() {
        this._type = "AccountMiniInfoCardUIClass"; 
        this.activeAccountAddressElement = new UiElementByCssClass("active-account-address");        
        this.activeAccountBalanceElement = new UiElementByCssClass("active-account-balance");
        
    }
    load_BalanceOfAmount(address) {
        acc.api.account.getBalance(address).then((amount) => {            
            this.paint_AccountBalance(amount);
        });
    }
    paint_AccountBalance(amount) {        
        this.activeAccountBalanceElement.innerHtml_WRITE(`${amount.balanceInEth} ${amount.symbol}`);
        this.activeAccountAddressElement.innerHtml_WRITE(`${address.slice(0,15)}..`);
    }
}