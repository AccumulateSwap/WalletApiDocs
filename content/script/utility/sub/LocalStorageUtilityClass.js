class LocalStorageUtilityClass {
    constructor() {
        this._type = "LocalStorageUtilityClass"; 
    }
    readItemS(name) {
        return this.readItemS_2(name,'');
    }
    readItemS_2(name, defaultValue) {
        const result = localStorage.getItem(name);        
        if(utility.string.isNullOrEmpty(result)) return defaultValue
        return result;
    }    
    readItemJ(name) {
        const result = this.readItemS(name);        
        if(utility.string.isNullOrEmpty(result)) return null
        return  JSON.parse(result);
    }
}