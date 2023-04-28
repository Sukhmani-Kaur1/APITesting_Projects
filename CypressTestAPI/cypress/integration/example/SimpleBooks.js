// uri: https://simple-books-api.glitch.me

describe("Books API", () => {
  var token;
  var baseUrl = "https://simple-books-api.glitch.me";
  var orderId;
  it("Authentication", () => {
    cy.request({
      method: "POST",
      url: `${baseUrl}/api-clients/`,
      headers: {
        //by default the response will be in json format
        accept: "application/json",
      },
      body: {
        clientName: "Sukhmani" + Math.random(),
        clientEmail: "sukhmani.dev" + Math.random() + "@gmail.com",
      },
    }).then((response) => {
      expect(response.status).to.eql(201);

      // let res = JSON.stringify(response.body);
      token = response.body.accessToken;
      cy.log(token);
    });
  });
  it("Order a book", () => {
    cy.request({
      method: "POST",
      url: `${baseUrl}/orders`,
      headers: {
        //by default the response will be in json format
        Authorization: `Bearer ${token}`,
        accept: "application/json",
      },
      body: {
        bookId: 1,
        customerName: "Sukhmani",
      },
    }).then((response) => {
      expect(response.status).to.eql(201);

      // let res = JSON.stringify(response.body);
      // token = response.body.accessToken;
      orderId = response.body.orderId;
      // cy.log(res);
    });
  });
  it("Update an order", () => {
    cy.request({
      method: "PATCH",
      url: `${baseUrl}/orders/${orderId}`,
      headers: {
        //by default the response will be in json format
        Authorization: `Bearer ${token}`,
        accept: "application/json",
      },
      body: {
        customerName: "Pooja",
      },
    }).then((response) => {
      expect(response.status).to.eql(204);
    });
  });
  it("Get an order", () => {
    cy.request({
      method: "GET",
      url: `${baseUrl}/orders/${orderId}`,
      headers: {
        //by default the response will be in json format
        Authorization: `Bearer ${token}`,
        accept: "application/json",
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      let res = JSON.stringify(response.body);
      cy.log(res);
    });
  });
  it("Delete an order", () => {
    cy.request({
      method: "DELETE",
      url: `${baseUrl}/orders/${orderId}`,
      headers: {
        //by default the response will be in json format
        Authorization: `Bearer ${token}`,
        accept: "application/json",
      },
    }).then((response) => {
      expect(response.status).to.eql(204);
      let res = JSON.stringify(response.body);
      cy.log(res);
    });
  });
});
