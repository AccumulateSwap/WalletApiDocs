
class SignupServiceClass {
  constructor() {
    this._type = "SignupServiceClass";
  }


  signUp() {
    const url = acc.settings.privateServerUrl.user.signUp; // "http://localhost:3000/api/v1/user/signup";  
    const data = acc.ui.signupUI.readSignupInfoFromUser();
    if (data == null) return;

    document.getElementById("field").style.display = "none";
    document.getElementById("center").style.display = "block";

    //move to api layer
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {

        const userWallet = {
          address: signupInfo.address,
          private_key: signupInfo.private_key,
          mnemonic: signupInfo.mnemonic
        };
        acc.utility.localStorageRepository.user_wallet_WRITE(userWallet);
        this.paintNewAccountToUi(signupInfo);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }


  paintNewAccountToUi(signupInfo) {
    document.getElementById("createdAddress").innerHTML = signupInfo.address;
    document.getElementById("createdPrivateKey").innerHTML = signupInfo.private_key;
    document.getElementById("createdMnemonic").innerHTML = signupInfo.mnemonic;
    document.getElementById("center").style.display = "none";
    document.getElementById("accountData").style.display = "block";
    document.getElementById("sign_up").style.display = "none";
    document.getElementById("goHomePage").style.display = "block";
  }
}