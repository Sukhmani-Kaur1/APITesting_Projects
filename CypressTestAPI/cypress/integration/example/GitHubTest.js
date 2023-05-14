/// <reference types='Cypress'/>
describe("Testing Github Endpoints for Create Repo and Create File", () => {
  var baseURL = "https://api.github.com";
  var token = "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";
  var fullname;
  it("Creating a Github Repo", () => {
    cy.request({
      method: "POST",
      url: baseURL + "/user/repos",
      headers: {
        //by default the response will be in json format
        Authorization: "Bearer " + token,
        accept: "application/json",
      },
      body: {
        name: "Hello-World2426",
        description: "This is your first repo!",
      },
    }).then((res) => {
      expect(res.status).to.eql(201);
      fullname = res.body.full_name;
      cy.log(fullname);
    });
  });
  it.skip("Get the Github Repo", () => {
    cy.request({
      method: "GET",
      url: baseURL + "/repos/" + fullname,
      headers: {
        //by default the response will be in json format
        Authorization: "Bearer " + token,
        accept: "application/json",
      },
    }).then((res) => {
      expect(res.status).to.eql(200);
    });
  });
  it.skip("Update the Github Repo", () => {
    cy.request({
      method: "PATCH",
      url: baseURL + "/repos/" + fullname,
      headers: {
        //by default the response will be in json format
        Authorization: "Bearer " + token,
        accept: "application/json",
      },
      body: {
        name: "Hello-World-github",
        description: "This is your first repo!",
      },
    }).then((res) => {
      expect(res.status).to.eql(200);
      fullname = res.body.full_name;
      cy.log(fullname);
    });
  });
  it.skip("Create a File", () => {
    cy.request({
      method: "PUT",
      url: baseURL + "/repos/" + fullname + "/contents/NewFile",
      headers: {
        //by default the response will be in json format
        Authorization: "Bearer " + token,
        accept: "application/json",
      },
      body: {
        message: "my commit message",
        content: "bXkgbmV3IGZpbGUgY29udGVudHM=",
      },
    }).then((res) => {
      expect(res.status).to.eql(201);
    });
  });
  it.skip("Create a Fork", () => {
    cy.request({
      method: "POST",
      url: baseURL + "/repos/" + fullname + "/forks",
      headers: {
        //by default the response will be in json format
        Authorization: "Bearer " + token,
        accept: "application/json",
      },
      body: {
        name: "Hello-World123",
        default_branch_only: true,
      },
    }).then((res) => {
      expect(res.status).to.eql(202);
    });
  });
  it.skip("List a Fork", () => {
    cy.request({
      method: "GET",
      url: baseURL + "/repos/" + fullname + "/forks",
      headers: {
        //by default the response will be in json format
        Authorization: "Bearer " + token,
        accept: "application/json",
      },
    }).then((res) => {
      expect(res.status).to.eql(200);
    });
  });
  it("Deleting a Github Repo", () => {
    cy.request({
      method: "DELETE",
      url: baseURL + "/repos/" + fullname,
      headers: {
        //by default the response will be in json format
        Authorization: "Bearer " + token,
        accept: "application/json",
      },
    }).then((res) => {
      expect(res.status).to.eql(204);
    });
  });
});
