class ElementSelectorUtilityClass {
    constructor() {
        this._type = "ElementSelectorUtilityClass"; 
    }
    getElementById(id) {
        return document.getElementById(id);
    }
    getElementByClassName(className) {        
        var results = document.getElementsByClassName(className);
        if(results.length==0) return null;
        return results[0];
    }
    getElementsByClassName(className) {        
        var result = document.getElementsByClassName(className);
        if(result.length==0) return null;
        return result;
    }
}