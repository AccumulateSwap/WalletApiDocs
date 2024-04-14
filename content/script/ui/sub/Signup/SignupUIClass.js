
class SignupUIClass {
    constructor() {
        this._type = "SignupUIClass";
        this.signup_Name_TextBox = new UiElementByCssClass("txt-signup-name");
        this.signup_Email_TextBox = new UiElementByCssClass("txt-signup-email");
        this.signup_Password_TextBox = new UiElementByCssClass("txt-signup-password");
        this.signup_PasswordConfirm_TextBox = new UiElementByCssClass("txt-signup-password-confirm");          
    }
    readSignupInfoFromUser() {
    
        var signupInfo = {};
        signupInfo.name = this.signup_Name_TextBox.element().value;
        signupInfo.email = this.signup_Email_TextBox.element().value;
        signupInfo.password = this.signup_Password_TextBox.element().value;
        var passwordConfirm = this.signup_PasswordConfirm_TextBox.element().value;
        if(signupInfo.password!=passwordConfirm)
        {
            alert("Password must match");
            return;
        }
        const wallet = ethers.Wallet.createRandom();
        if (wallet.address){
            signupInfo.address = wallet.address;
            signupInfo.private_key = wallet.privateKey;
            signupInfo.mnemonic = wallet.mnemonic.phrase;             
            console.log("signupInfo:", signupInfo);
            console.log("wallet:", wallet); 
        }
        else{
            return null;
        }
        return signupInfo;
    }
}