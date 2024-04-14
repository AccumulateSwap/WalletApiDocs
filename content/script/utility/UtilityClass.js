

class UtilityClass {
    constructor() {
        this._type = "UtilityClass"; 
        this.elementSelector = new ElementSelectorUtilityClass();
        this.uiEventRegister = new UiEventRegisterUtilityClass(); 
        this.string = new StringUtilityClass();
        this.localStorage = new LocalStorageUtilityClass();
        this.localStorageRepository = new LocalStorageRepositoryClass();
    }
}

