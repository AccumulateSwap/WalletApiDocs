//LOG HISTORY
//BINOYJOSE-4.08.2024-Code created;

class AppLifeCycleServiceClass {
    constructor() {
        this._type = "WalletAppLifeCycleServiceClass"; 
        this.initializeEventHandlerService = new AppInitializeEventHandlerServiceClass();
        this.initializeHomePageService = new AppInitializeHomePageServiceClass();
    } 
    load()
    {        
        this.initializeEventHandlerService.wireUpHandlers();
        this.initializeHomePageService.initializeHomePage();
    } 
}