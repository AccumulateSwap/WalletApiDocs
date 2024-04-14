class SettingsClass {
    constructor() {
        this._type = "SettingsClass"; 
        this.privateServerUrl = new SettingsPrivateServerURLClass();
    }
}
class SettingsPrivateServerURLClass {
    constructor() {
        this._type = "SettingsPrivateServerURLClass"; 
        this.root = "http://localhost:3000/api/v1";
        //this.root = "http://api.AccumulateSwap.com/api/v1";
        this.account = new SettingsPrivateServerAccountURLClass( this.root);
        this.user = new SettingsPrivateServerUserURLClass( this.root)
        this.token = new SettingsPrivateServerTokenURLClass( this.root)
        }
}
class SettingsPrivateServerAccountURLClass {
    constructor(parentRoot) {
        this._type = "SettingsPrivateServerUserURLClass"; 
        this.root =  parentRoot + "/account";
        this.createAccount = this.root + "/create";
        this.allAccounts = this.root + "/getall";
    }
}
class SettingsPrivateServerUserURLClass {
    constructor(parentRoot) {
        this._type = "SettingsPrivateServerUserURLClass"; 
        this.root = parentRoot + "/user";
        this.signup = this.root + "/signup";
        this.login = this.root + "/login";
    }
}
class SettingsPrivateServerTokenURLClass {
    constructor(parentRoot) {
        this._type = "SettingsPrivateServerTokenURLClass"; 
        this.root = parentRoot + "/tokens";
        this.createToken = this.root + "/importtoken";
        this.allTokens = this.root + "/getall";
    }
}