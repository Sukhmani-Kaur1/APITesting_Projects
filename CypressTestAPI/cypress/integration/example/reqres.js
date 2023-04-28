describe("Api testing REST API", () => {
  var result;
  it.skip("Simple Get Method", () => {
    result = cy.request("https://reqres.in/api/users/2");
    result.its("status").should("eq", 200);
  });
  it.skip("validate the response of the request", () => {
    cy.request({
      method: "GET",
      url: "https://reqres.in/api/users/2",
      headers: {
        //by default the response will be in json format
        accept: "application/json",
      },
    }).then((response) => {
      let body = JSON.parse(JSON.stringify(response.body));
      cy.log(body.data);
      expect(body.data).has.property("email", "janet.weaver@reqres.in");
      cy.log(response.body);
      cy.log(JSON.stringify(response.body));
    });
  });
  it.only("POST request", () => {
    cy.request({
      method: "POST",
      url: "https://reqres.in/api/users",
      headers: {
        //by default the response will be in json format
        accept: "application/json",
      },
      body: {
        name: "morpheus",
        job: "leader",
      },
    }).then((response) => {
      expect(response.status).to.eql(201);
      cy.log(response.body);
    });
  });
  it.skip('Delete request', () => {
    cy.request({
      method: "POST",
      url: "https://reqres.in/api/users/2",
    }).then((res)=>{
      expect(res.status).to.equal(201)
    })
  });
});
