
//LOG HISTORY
//BINOYJOSE-4.08.2024-Code created;

class NetworkListUIClass {
    constructor() {
        this._type = "NetworkListUIClass"; 

        this.selectedNetworkHeaderTextElement = new UiElementByCssClass("header-network");
        this.selectedNetworkElement = new UiElementByCssClass("selected_network");
        this.networkItemElements = new UiElementsByCssClass("network-item");
        this.addNetworkButton = new UiElementByCssClass("btn-add-network");

        this.containerElement = new UiElementByCssClass("network");
        this.titleElement = new UiElementByCssClass("network_title");
        this.listElement = new UiElementByCssClass("network_list");
    }
}