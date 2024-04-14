
class AccountClass {
    constructor() {
        this._type = "AccountClass"; 
        //this.privateKey = null;
        this.network = null; 
        this.address = null;    //AddressClass 
    } 
}
class AccountWithPrivateKeyClass {
    constructor() {
        this._type = "AccountWithPrivateKeyClass"; 
        this.privateKey = null;
        this.network = null; 
        this.address = null;  
    } 
}


class AddressClass {
    constructor() {
        this._type = "AddressClass"; 

        this.address = null;
        this.addressType = null; //AddressTypeClass
    } 
}

class AddressTypeClass {
    constructor() {
        this._type = "AddressTypeClass"; 
        this.addressTypeId = null;
        this.addressTypeName = null; //btc eth etc. I will
        this.algorithm = null; 
    } 
}

class AmountClass {
    constructor(balance,network) {
        this._type = "AmountClass"; 
        this.balance = balance;
        this.network = network;
        this.balanceInEth = ethers.utils.formatEther(balance);
        console.log(this.network.symbol, this.balanceInEth);
    } 
}

