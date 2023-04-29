describe("Creating User, user Posts and comments under post", () => {
  const baseUrl = "https://gorest.co.in/public/v2/";
  const token =
    "bcac2c51cf0e06da97dc5836227d4f2baa4e082ee135a842a7805af5ed3b16bf";
  var user_id;
  var post_id;
  it("Creating a User", () => {
    cy.request({
      method: "POST",
      url: baseUrl + "users",
      headers: {
        Authorization: "Bearer " + token,
        accept: "application/json",
      },
      body: {
        name: `hello${(Math.random() + 2) * 50}`,
        email: `helloemail${(Math.random() + 2) * 50}@gmail.example`,
        gender: "male",
        status: "active",
      },
    }).then((res) => {
      expect(res.status).to.equal(201);
      user_id = res.body.id;
    });
  });
  it("Getting the user", () => {
    cy.request({
      method: "GET",
      url: `${baseUrl}users/${user_id}`,
      headers: {
        Authorization: "Bearer " + token,
        accept: "application/json",
      },
    }).then((res) => {
      expect(res.status).to.eq(200);
      cy.log(JSON.stringify(res.body));
    });
  });
  it("updating the user name and email", () => {
    cy.request({
      method: "GET",
      url: `${baseUrl}users/${user_id}`,
      headers: {
        Authorization: "Bearer " + token,
        accept: "application/json",
      },
      body: {
        name: `hello${(Math.random() + 2) * 50}`,
        email: `helloemail${(Math.random() + 2) * 50}@gmail.example`,
      },
    }).then((res) => {
      expect(res.status).to.eq(200);
      cy.log(JSON.stringify(res.body));
    });
  });
  it("Creating User post", () => {
    cy.request({
      method: "POST",
      url: `${baseUrl}users/${user_id}/posts`,
      headers: {
        Authorization: "Bearer " + token,
        accept: "application/json",
      },
      body: {
        title: `Randomtext${Math.random}`,
        body: `Randomtext${Math.random}`,
      },
    }).then((res) => {
      expect(res.status).to.eq(201);
      cy.log(JSON.stringify(res.body));
      post_id = res.body.id;
    });
  });
  it("Getting User Post", () => {
    cy.request({
      method: "GET",
      url: `${baseUrl}users/${user_id}/posts`,
      headers: {
        Authorization: "Bearer " + token,
        accept: "application/json",
      },
    }).then((res) => {
      expect(res.status).to.eq(200), cy.log(JSON.stringify(res.body));
    });
  });
  it("Adding comment to a post", () => {
    cy.request({
      method: "POST",
      url: `${baseUrl}posts/${post_id}/comments`,
      headers: {
        Authorization: "Bearer " + token,
        accept: "application/json",
      },
      body: {
        name: "RandomName" + Math.ceil(Math.random + 1) * 20,
        email:
          "RandomEamil" +
          Math.ceil(Math.random + 1) * 200 +
          "@RandomName" +
          Math.ceil(Math.random + 1) * 20 +
          ".example",
        body: "RandomText" + Math.ceil(Math.random + 1) * 200,
      },
    }).then((res) => {
      expect(res.status).to.eq(201), cy.log(JSON.stringify(res.body));
    });
  });
  it("Deleting user", () => {
    cy.request({
      method: "DELETE",
      url: `${baseUrl}users/${user_id}`,
      headers: {
        Authorization: "Bearer " + token,
        accept: "application/json",
      },
    }).then((res) => {
      expect(res.status).to.eq(204);
    });
  });
});
