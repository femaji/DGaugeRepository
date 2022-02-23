import HomePage from "./HomePage";

class WelcomePage {

  validateLogin(){
    cy
      .location("pathname", { timeout: 10000 })
      .should("include", "/home");
      return this;
  }

  logout(){
    cy.get("[data-qa='logout']")
      .click({ force: true });
    const homePage = new HomePage();
    return homePage;
  }
}

export default WelcomePage;
