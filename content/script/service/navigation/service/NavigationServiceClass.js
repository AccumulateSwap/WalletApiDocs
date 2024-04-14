
class NavigationServiceClass {
  constructor() {
    this._type = "NavigationServiceClass";
  }

  openImportModel() {
    document.getElementById("import_account").style.display = "block";
    document.getElementById("home").style.display = "none";
  }

  closeImportModel() {
    document.getElementById("import_account").style.display = "none";
    document.getElementById("home").style.display = "block";
  }

  openActivity() {
    document.getElementById("activity").style.display = "block";
    document.getElementById("assets").style.display = "none";
  }

  openAssets() {
    document.getElementById("activity").style.display = "none";
    document.getElementById("assets").style.display = "block";
  }
  openTransfer() {
    document.getElementById("transfer_form").style.display = "block";
    document.getElementById("home").style.display = "none";
  }

  goBack() {
    document.getElementById("transfer_form").style.display = "none";
    document.getElementById("home").style.display = "block";
  }

  openImport() {
    document.getElementById("import_token").style.display = "block";
    document.getElementById("home").style.display = "none";
  }

  importGoBack() {
    document.getElementById("import_token").style.display = "none";
    document.getElementById("home").style.display = "block";
  }

  loginUser() {
    document.getElementById("createAccount").style.display = "none";
    document.getElementById("LoginUser").style.display = "block";
  }

  createUser() {
    document.getElementById("createAccount").style.display = "block";
    document.getElementById("LoginUser").style.display = "none";
  }

  openCreate() {
    document.getElementById("createAccount").style.display = "none";
    document.getElementById("create_popUp").style.display = "block";
  }

  setNetwork() {
    document.getElementById("network").style.display = "none";
  }
  getOpenNetwork() {
    document.getElementById("network").style.display = "block";
  }
}