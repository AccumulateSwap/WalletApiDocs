class UiElementByCssClass {
    constructor(selectorClassName) {
        this._type = "UiElementByCssClass"; 
         
        this.selectorClassName=selectorClassName;
    } 
    element() {
        return utility.elementSelector.getElementByClassName(this.selectorClassName);
    }

    innerHtml_WRITE(html) {
        var element = this.element() ; if(element==null) return;
        this.activeAccountBalanceElement.element.innerHTML = html;
    }
}

class UiElementsByCssClass {
    constructor(selectorClassName) {
        this._type = "UiElementsByCssClass"; 
        this.selectorClassName=selectorClassName;
    }
    elements() {
        return utility.elementSelector.getElementsByClassName(this.selectorClassName);
    }
}

class UiElementByIdClass {
    constructor(selectorId) {
        this._type = "UiElementByIdClass"; 
        this.selectorId = selectorId;
    } 
    element() {
        return utility.elementSelector.getElementByClassName(this.selectorId);
    }
}