/// <reference types="cypress" />

describe('Test bouttons chrono', () => {
    beforeEach(() => {
      cy.visit('/')
    })
    it('test au démarrage', () => {
        cy.get('time').contains('00:00')
      })
    
      it('play boutton', () => {
        cy.get('#start').click
        cy.get('time').should("not.have.value", "00:00")
      })
    
      it('stop boutton', () => {
        cy.get('#start').click
        cy.wait(1000)
        cy.get('#stop').click
        cy.get('#reset').click
        cy.get('h1').contains('00:00')
          
      })
    })
    