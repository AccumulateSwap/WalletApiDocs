class LocalStorageRepositoryClass {
    constructor() {
        this._type = "LocalStorageRepositoryClass"; 
        this.CONST_FIELD_user_wallet ="userWallet";
    }
    user_wallet_READ() {
        var valueJ = utility.localStorage.readItemJ(this.CONST_FIELD_user_wallet);
        valueJ = user_wallet_DECRYPT(valueJ);
        return valueJ;
    }
    user_wallet_WRITE(valueJ) {
        var valueJ_New = user_wallet_ENCRYPT(valueJ);
        const valueS = JSON.stringify(valueJ_New);    
        localStorage.setItem(this.CONST_FIELD_user_wallet, valueS);         
        //ensure to encrypt before
    }
    user_wallet_ENCRYPT(valueJ) {
    //todo
    }
    user_wallet_DECRYPT(valueJ) {
    //todo
    }
    user_wallet_CLEAR(valueJ) {
        localStorage.removeItem(this.CONST_FIELD_user_wallet);        
    }
}