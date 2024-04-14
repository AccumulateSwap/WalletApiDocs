class AccumulateServiceClass {
  constructor() {
      this._type = "AccumulateServiceClass";
      this.account = new AccountFacadeClass();
      this.activity = new ActivityFacadeClass();
      this.asset = new AssetFacadeClass();
      this.login = new LoginFacadeClass();
      this.signup = new SignupFacadeClass();
      this.token = new TokenFacadeClass();
      this.transfer  = new TransferFacadeClass(); 
      this.wallet = new WalletFacadeClass();
      this.network = new NetworkFacadeClass();
      this.app = new AppFacadeClass();
      this.navigation = new NavigationFacadeClass();
  }    
}

class AccumulateFacadeClass {
    constructor() {
        this._type = "AccumulateFacadeClass"; 
        this.utility = new UtilityClass();        
        this.service = new AccumulateServiceClass();
        this.ui = new AccumulateUIClass();
        this.api = new ApiServiceClass();        
        this.settings = new SettingsClass(); 
        this.current = new AccumulateCurrentClass();    
    }    
}
 
var acc = new AccumulateFacadeClass();
var utility = acc.utility;
var ui = acc.ui;

acc.service.app.service.lifeCycle.load(); 

let providerURL =
  "https://polygon-mumbai.g.alchemy.com/v2/0awa485pp03Dww2fTjrSCg7yHlZECw-K";

const allToken = [
  {
    name: "MATIC",
    address: "0x0000000000000000000000000000000000001010",
    symbol: "MATIC",
  },
  {
    name: "@AccumulateWallet",
    address: "0xb309098bcB51E5C687a16FA41bD6055f47c9eBb0",
    symbol: "TBC",
  },
];

let privateKey;
let address;
