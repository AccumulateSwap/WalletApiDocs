

//LOG HISTORY
//BINOYJOSE-4.08.2024-Code created;

class TransferUIClass {
    constructor() {
        this._type = "TransferUIClass"; 
        this.transferAmount = new UiElementByCssClass("txt-transfer-amount");
        this.transferFromAddressElement = new UiElementByCssClass("txt-transfer-fom-address");
        this.transferFundButton = new UiElementByCssClass("btn-transfer-fund");
        this.transferOpenButton = new UiElementByCssClass("btn-open-transfer");        
    } 
}