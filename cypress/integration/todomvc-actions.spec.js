/// <reference types="cypress"/>

describe('todo actions', () => {
  beforeEach(() => {
    cy.visit('http://todomvc-app-for-testing.surge.sh');
    cy.get('.new-todo', { timeout: 6000 }).type('Clean Room{enter}');
  });

  it('should add a new todo to the list', () => {
    cy.visit('http://todomvc-app-for-testing.surge.sh');

    // todo element render after 5 sec
    // cy.visit('http://todomvc-app-for-testing.surge.sh/?delay-new-todo=5000');

    // { timeout: 6000 } delay 6 sec
    cy.get('.new-todo', { timeout: 6000 }).type('Clean Room{enter}');
    cy.get('label').should('have.text', 'Clean Room');

    cy.get('.toggle').should('not.be.checked');
  });

  it('should mark a todo completed', () => {
    cy.get('label').should('have.text', 'Clean Room');
    cy.get('.toggle').click();
    cy.get('label').should('have.css', 'text-decoration-line', 'line-through');
  });

  it('should clear todo completed', () => {
    cy.get('.toggle').click();
    cy.get('.clear-completed').click();
    cy.get('.todo-list').should('not.have.descendants', 'li');
  });
});
