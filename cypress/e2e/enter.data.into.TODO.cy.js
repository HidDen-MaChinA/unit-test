import { mount } from 'cypress/react18'
import App from '../../src/App'

describe("for  App component e2e",()=>{
        it("should enter a text hello on enter",()=>{
            cy.visit("http://localhost:3000/")
                .get("#add-todo")
                .type("hello{enter}");
            cy.get(".list-item").should("contain.text","hello")     
        })
         it("should pass value into todo when you click on the checkbox",()=>{
            cy.visit("http://localhost:3000/")
                .get("#add-todo")
                .type("another test{enter}");
                cy.get(".list-item").click();
            cy.get("label").as("ht").should("contain.text","another test")
        })
    }
)