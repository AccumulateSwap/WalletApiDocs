
//LOG HISTORY
//BINOYJOSE-4.08.2024-Code created;

class ImportTokenUIClass {
    constructor() {
        this._type = "ImportTokenUIClass"; 
        this.openImportTokenButton = new UiElementByCssClass("btn-open-import-token");
        this.navigateFromImportBackButton = new UiElementByCssClass("btn-go-back-import");
        this.addNewTokenButton = new UiElementByCssClass("btn-add-new-token");
 
        this.token_Address_TextBox = new UiElementByCssClass("txt-token-address");
        this.token_Name_TextBox = new UiElementByCssClass("txt-token-name");
        this.token_Symbol_TextBox = new UiElementByCssClass("txt-token-symbol");       
    } 

    readNewTokenInfoFromUser() {    
        var result = {};
        result.address = this.token_Address_TextBox.element().value;
        result.name = this.token_Name_TextBox.element().value;
        result.symbol = this.token_Symbol_TextBox.element().value;
        return result;       
    }
}