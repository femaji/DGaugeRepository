import WelcomePage from "./WelcomePage";

class HomePage {

  //Resuable core functions
  getEmailField() {
    return cy.get("#email");
  }

  getPasswordField() {
    return cy.get("#password");
  }

  getSignInButton() {
    return cy.contains("Sign In");
  }

  getForgottenPasswordButton() {
    return cy.contains("Forgotten Password");
  }

  getFindOutMore() {
    return cy.contains("Find out more");
  }

  getInvalid() {
    return cy.get("input:invalid");
  }

  //Workflow functions

  fillEmail(emailValue) {
    const field = this.getEmailField();
    field.click();
    field.clear();
    field.type(emailValue);
    return this;
  }

  fillPassword(passwordValue) {
    const field = this.getPasswordField();
    field.click();
    field.clear();
    field.type(passwordValue);
    return this;
  }

  clearEmail() {
    this.getEmailField().clear();
    return this;
  }

  login() {
    const login = this.getSignInButton();
    login.click();
    return this;
  }

  loginSuccessfully(username, password) {
    this.fillEmail(username);
    this.fillPassword(password);
    const login = this.getSignInButton();
    login.click();
    const welcomePage = new WelcomePage();
    return welcomePage;
  }
}
export default HomePage;
