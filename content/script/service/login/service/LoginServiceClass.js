
class LoginServiceClass {
  constructor() {
    this._type = "LoginServiceClass";
  }

  login() {
    document.getElementById("login_form").style.display = "none";
    document.getElementById("center").style.display = "block";
    const email = document.getElementById("login_email").value;
    const password = document.getElementById("login_password").value;

    //API CALL
    const url = acc.settings.privateServerUrl.user.login;

    //const url = "http://localhost:3000/api/v1/user/login";
    const data = {
      email: email,
      password: password,
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        // Handle the response data
        console.log(result.data.user);
        const userWallet = {
          address: result.data.user.address,
          private_key: result.data.user.private_key,
          mnemonic: result.data.user.mnemonic,
        };
        const jsonObj = JSON.stringify(userWallet);
        localStorage.setItem("userWallet", jsonObj);
        window.location.reload();
      })
      .catch((error) => {
        // Handle any errors
        console.error("Error:", error);
      });
    //END OF API CALL
  }

  logout() {
    acc.utility.localStorageRepository.user_wallet_CLEAR();
    window.location.reload();
  }
}