
class AppServiceClass {
    constructor() {
        this._type = "AppServiceClass"; 
        this.lifeCycle = new AppLifeCycleServiceClass();
    }

     goHomePage() {
        document.getElementById("create_popUp").style.display = "none";
        document.getElementById("home").style.display = "block";
      } 
}

