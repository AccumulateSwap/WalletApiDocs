class StringUtilityClass {
    constructor() {
        this._type = "StringUtilityClass"; 
    }
    isNull(value) {
        return (value==null || value===undefined);
    }
    isNullOrEmpty(value) {
        return (value==null || value===undefined || value==='');
    }
}