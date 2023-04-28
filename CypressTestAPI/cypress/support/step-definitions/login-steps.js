import {
  before,
  Given,
  When,
  And,
  Then,
} from "cypress-cucumber-preprocessor/steps";
Given("open the broweser and navigate to login page", () => {
  cy.visit(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  // cy.wait(2000);
});
When("Enter the Name {word}", (name) => {
  cy.get("input[name='username']").type(name);
});
When("Enter the password {word}", (pass) => {
  cy.get("input[name='password']").type(pass);
});
When("Click on Login", () => {
  cy.contains(" Login ").click();
});
Then("Login should be Successfull", () => {
  cy.url().should("include", "dashboard");
});

When("Enter the Name {word}", (name) => {
  cy.get("input[name='username']").type(name);
});
When("Enter the Password {word}", (pass) => {
  cy.get("input[name='password']").type(pass);
});
Then("displayed {word} {word}", (first, last) => {
  const massege = first + last;
  cy.log(massege);
});
