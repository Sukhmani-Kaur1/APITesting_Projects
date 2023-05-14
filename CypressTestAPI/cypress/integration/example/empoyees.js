/// <reference types='Cypress'/>
describe("Testing Employees Api", () => {
  var BaseURL = "https://dummy.restapiexample.com/api/v1";
  var id;
  it("Creating an Employee", () => {
    cy.request({
      method: "POST",
      url: BaseURL + "/create",
      headers: {
        accept: "application/json",
      },
      body: {
        name: "test123",
        salary: "123",
        age: "23",
      },
    }).then((res) => {
      expect(res.status).to.eq(200);
      id = res.body.data.id;
      cy.log(id);
    });
  });
  it("Get the employee with id", () => {
    cy.request({
      method: "GET",
      url: BaseURL + "/employee/" + id,
      headers: {
        accept: "application/json",
      },
    }).then((res) => {
      {
        expect(res.status).to.eq(200);
        cy.log(JSON.stringify(res.body));
      }
    });
  });
  it("Updating an employee name", () => {
    cy.request({
      method: "PUT",
      url: BaseURL + "/update/" + id,
      headers: {
        accept: "application/json",
      },
      body: {
        name: "hello546",
        salary: "2500",
        age: "29",
      },
    }).then((res) => {
      expect(res.status).to.eq(200);
      cy.log(id);
    });
  });
  it("Deleting an employee", () => {
    cy.request({
      method: "DELETE",
      url: BaseURL + "/delete/" + id,
      headers: {
        accept: "application/json",
      },
    }).then((res) => {
      expect(res.status).to.equal(200);
      cy.log(JSON.stringify(res.body));
    });
  });
});
