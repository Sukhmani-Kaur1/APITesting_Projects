// url https://api.trello.com/1/boards/?name={name}&key=13b3d0af17b985092492390dd103e15f&token=APIToken
var token =
  "ATTAeb20e76864e75886343b5618a96499959aa8efe81cb2e9f88e488298989c8b2bC5E54023";
var key = "13b3d0af17b985092492390dd103e15f";
describe('Testing the API"s of Trello', () => {
  var id;
  it("Create a Board", () => {
    cy.request({
      method: "POST",
      url: `https://api.trello.com/1/boards/?name=SecondBoard&key=${key}&token=${token}`,
      headers: {
        //by default the response will be in json format
        accept: "application/json",
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      //   id = JSON.stringify(response.body.id);
      id = response.body.id;
      cy.log(JSON.stringify(response.body.id));
    });
  });
  it.skip("Deleting a Board", () => {
    cy.request({
      method: "DELETE",
      url: `https://api.trello.com/1/boards/${id}?key=${key}&token=${token}`,
      headers: {
        //by default the response will be in json format
        accept: "application/json",
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
    });
  });
  it.skip("Updating Board name with body", () => {
    cy.request({
      method: "PUT",
      url: `https://api.trello.com/1/boards/${id}?key=${key}&token=${token}`,
      headers: {
        //by default the response will be in json format
        accept: "application/json",
      },
      body: {
        name: "sunil",
      },
    }).then((res) => {
      expect(res.status).to.eql(200);
      cy.log(JSON.stringify(res.body.id));
    });
  });
  it("Updating Board description with parameter", () => {
    cy.request({
      method: "PUT",
      url: `https://api.trello.com/1/boards/${id}?key=${key}&token=${token}&desc="hello 123 okay bye"`,
      headers: {
        //by default the response will be in json format
        accept: "application/json",
      },
    }).then((res) => {
      expect(res.status).to.eql(200);
      cy.log(JSON.stringify(res.body));
    });
  });
  it("Get the board", () => {
    cy.request({
      method: "GET",
      url: `https://api.trello.com/1/boards/${id}?key=${key}&token=${token}`,
      headers: {
        //by default the response will be in json format
        accept: "application/json",
      },
    }).then((res) => {
      expect(res.status).to.eql(200);
      cy.log(JSON.stringify(res.body));
    });
  });
});
