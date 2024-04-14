
class TokenServiceClass {
    constructor() {
        this._type = "TokenServiceClass"; 
    }

    importNewToken() {
 
        const url = acc.settings.privateServerUrl.tokens.createToken; //  "http://localhost:3000/api/v1/tokens/createtoken";
        var data = acc.ui.importTokenUI.readNewTokenInfoFromUser();
        if(data==null) return;

        fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((result) => {
            console.log(result.data.createToken);
            window.location.reload();
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }
}

 