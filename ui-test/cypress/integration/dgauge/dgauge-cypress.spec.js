import HomePage from "../../support/pages/HomePage";
import BasePage from "../../support/pages/BasePage";

describe("Automation Test Suite ", () => {
  //instantiation of Page Objects
  let basePage = new BasePage();
  let homePage = new HomePage();

  let testData;

  //initialisation of the test
  beforeEach(() => {
    cy.fixture("user").then(function (dataJson) {
      testData = dataJson;
    });
    basePage.visit();
  });

  //This is a litmus test
  it("Test that home Page successfully loads", () => {
    cy.visit("/");
  });

  it("To validate login form page", () => {
    //Validation of elements on the home page
    homePage.getEmailField().should("exist");
    homePage.getPasswordField().should("exist");
    homePage.getSignInButton().should("exist");
    homePage.getForgottenPasswordButton().each(($a) => {
      expect($a, "Forgotten Password")
        .to.have.attr("href")
        .contain("/password/forgotten");
    });
    homePage.getFindOutMore().each(($a) => {
      expect($a, "Find out more")
        .to.have.attr("href")
        .contain("https://www.dgauge.co.uk/register-interest");
    });
  });

  it("To validate form error 1", () => {
    //Test to validate login with invalid password
    let hp = homePage
      .fillPassword(testData.invalid_password)
      .clearEmail()
      .login();
    //Assert 
    hp.getInvalid().should("be.visible");
    hp.getInvalid().should("have.length", 1);
  });

  it("To validate form error 2", () => {
    //Test to validate login with invalid email
    let hp = homePage
      .fillEmail(testData.email.split("@")[1])
      .fillPassword(testData.invalid_password)
      .login();
    //Assert
    hp.getInvalid().should("be.visible");
    hp.getInvalid().should("have.length", 1);
  });

  it("To validate successful login user", () => {
    //Test to validate successful login
    let welcomePage = homePage.loginSuccessfully(
      testData.email,
      testData.password
    );
    let hp = welcomePage.validateLogin().logout();
    //Assert
    hp.getEmailField().should("exist");
    hp.getPasswordField().should("exist");
  });
});
