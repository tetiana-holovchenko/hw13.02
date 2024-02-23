import { findItem } from '../support/helper';

describe('item search', () => {
  it('search', () => {

    cy.visit('https://automationteststore.com/');
    cy.get('#filter_keyword').type('E');
    cy.get('.button-in-search').click();
    findItem('Fiorella Purple Peep Toes'); 
});
});