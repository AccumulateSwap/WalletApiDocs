class NetworkCurrentClass {
    constructor() {
        this._type = "NetworkCurrentClass"; 
        this.network = null;
        this._setDefaultNetwork();


    }
    _setDefaultNetwork() {
        this.network = new BlockChainNetworkClass();
        this.network.chainId =1;
        this.network.name ='polygon-mumbai"';
        this.network.symbol ="Matic";
        this.network.description ="This Matic";
        this.network.jsonRpcProviderUrl ="https://polygon-mumbai.g.alchemy.com/v2/0awa485pp03Dww2fTjrSCg7yHlZECw-K";        
    }
    getProvider() {
        provider = new ethers.providers.JsonRpcProvider(this.network.jsonRpcProviderUrl);
        return provider;
    }
}
