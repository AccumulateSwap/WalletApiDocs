class UiTemplateClass {
    constructor(templateCss) {
        this._type = "UiTemplateClass"; 
        this.templateCss = templateCss;
        this.templateElement = new UiElementByCssClass(templateCss);
        this.templateText = this.templateElement.element().innerHTML();
    }  
}

class UiTemplateProcessorClass {
    constructor(uiTemplate) {
        this._type = "UiTemplateClass"; 
        this.uiTemplate = uiTemplate;
        this.result = this.uiTemplate.templateText;
    } 

    replaceValue(name, value) {
        this.result.replace('@' + name, value); //todo - replace all
    }

    appendTemplate(root) {
        root.appendHtml(this.result);
    }
}