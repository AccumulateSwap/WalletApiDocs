//LOG HISTORY
//BINOYJOSE-4.08.2024-Code created;

class AppInitializeEventHandlerServiceClass {
    constructor() {
        this._type = "AppInitializeEventHandlerServiceClass";
    };
    
    wireUpHandlers() {
        var register = utility.uiEventRegister;
        var service = acc.service;
        register.registerClick(ui.accountListUI.accountListElement, service.account.service.switchActiveAccount);
        register.registerClick(ui.accountMiniInfoCardUI.activeAccountAddressElement, service.account.service.copyAddress);
        register.registerClick(ui.transferUI.transferFundButton, service.transfer.service.handler);

        register.registerClick(ui.networkListUI.selectedNetworkHeaderTextElement, service.navigation.service.getOpenNetwork);
        register.registerClicks(ui.networkListUI.networkItemElements, service.network.service.getSelectedNetwork); //todo handle multiple
        register.registerClick(ui.networkListUI.addNetworkButton, service.navigation.service.setNetwork);

        register.registerClick(ui.loginUI.processLoginButton, service.navigation.service.loginUser);
        register.registerClick(ui.globalNavigationUI.navigateToSignup, service.navigation.service.createUser);
        register.registerClick(ui.newAccountUI.createAccountButton, service.navigation.service.openCreate);

        register.registerClick(ui.accountFullInfoCardUI.processSignupButton, service.signup.service.signUp);
        register.registerClick(ui.loginUI.processLoginButton, service.login.service.login);
        register.registerClick(ui.loginUI.processLogoutButton, service.login.service.logout);

        register.registerClick(ui.transferUI.transferOpenButton, service.navigation.service.openTransfer);
        register.registerClick(ui.globalNavigationUI.navigateToBack, service.navigation.service.goBack);
        register.registerClick(ui.importTokenUI.openImportTokenButton, service.navigation.service.openImport);

        register.registerClick(ui.importTokenUI.navigateFromImportBackButton, service.navigation.service.importGoBack);
        register.registerClick(ui.assetListUI.openAssetsButton, service.navigation.service.openAssets);
        register.registerClick(ui.activityUI.openActivityButton, service.navigation.service.openActivity);

        register.registerClick(ui.globalNavigationUI.navigateToHome, service.app.service.goHomePage);
        register.registerClick(ui.importAccountUI.openAccountImportButton, service.navigation.service.openImportModel);
        register.registerClick(ui.importAccountUI.closeAccountImportButton, service.navigation.service.closeImportModel);
        register.registerClick(ui.importTokenUI.addNewTokenButton, service.token.service.importNewToken);
        register.registerClick(ui.importAccountUI.processImportAccountByPrivateKeyButton, service.account.service.importAccountByPrivateKey);
    }
}