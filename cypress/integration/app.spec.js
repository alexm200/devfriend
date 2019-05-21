describe("Login", () => {

    // it("Redirects to Login page", () => {
    //   cy.visit("/");
    //   cy.location("pathname").should("eq", "/login");      
    // });

    it("Check empty username", () => {
      cy
      .visit("/login");      
      
      cy
      .get(".btn.btn-primary")
      .click();

      cy
      .get(".form-control")
      .first()
      .should("have.text", "")

      cy
      .get(".form-group.error")
      .first()
      .should("have.text", "Can not be empty!");
    });    

    it("Check empty password", () => {
      cy
      .visit("/login");
      
      cy
      .get(".btn.btn-primary")
      .click();

      cy
      .get(".form-control")
      .last()
      .should("have.text", "")

      cy
      .get(".form-group.error")
      .last()
      .should("have.text", "Can not be empty!");
    });

    it("Check wrong username/password", () => {

      cy.server()
      cy.route({
        method: 'POST',
        url: 'http://localhost:4000/graphql',
        response: { data: { users: [] } }
      })

      cy
      .visit("/login");
      
      cy
      .get(".form-control")
      .first()
      .type("alex")      

      cy
      .get(".form-control")
      .last()
      .type("alex") 

      cy
      .get(".btn.btn-primary")
      .click();

      cy
      .get(".user")
      .children()
      .first()
      .children()
      .first()
      .should("have.text", "Incorrect Username/Password!")

    });

    it("Login", () => {

      cy.server()
      cy.route({
        method: 'POST',
        url: 'http://localhost:4000/graphql',
        response: {"data":{"users":[{"_id":"5ce3d3cd848c46165880648b","username":"alex","password":"alex","isAdmin":false,"dateCreated":"2019-05-21T09:02:05.359Z"}]}}
      })      

      cy
      .visit("/login");
      
      cy
      .get(".form-control")
      .first()
      .type("alex")      

      cy
      .get(".form-control")
      .last()
      .type("alex") 

      cy
      .get(".btn.btn-primary")
      .click();

      cy.location("pathname").should("eq", "/");

    });

    // it("Logout", () => {

    //   cy
    //   .visit("/");
            
    //   cy
    //   .get(".topbar_navLink__2tL5v")
    //   .click();

    //   cy
    //   .get(".topbar_dropdownItem__2DYQB")
    //   .click();

    //   cy.location("pathname").should("eq", "/login");

    // });
    
  });