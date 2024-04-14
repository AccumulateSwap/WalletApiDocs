class UiEventRegisterUtilityClass {
    constructor() {
        this._type = "UiEventRegisterUtilityClass"; 
    }
    registerClick(UiElement, fnHandle) {
        var element = UiElement.element();
        if(element==null) return;
        element.addEventListener("click", fnHandle);    
    }    
    registerClicks(UiElement, fnHandle) {
        var elements = UiElement.elements();
        for (const element in elements) {
            element.addEventListener("click", fnHandle);    
        }
    }
}


