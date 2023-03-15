import React from 'react';
import { mount } from 'cypress/react18';
import App from "../../src/App";

describe('First test in cypress', () => {
  it('cypress runs correctly', () => {
    cy.viewport(1020,750)
    mount(<App />)
      .get("#add-todo")
      .type("hello{enter}");
    cy.get(".list-item").should("contain.text","hello");
  })
})