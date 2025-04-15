describe('Dashboard Test', function() {
  it('Successfully loads dashboard', function() {
    cy.visit('/')
    cy.contains('Cypress Test Dashboard')
  })
  
  it('Shows test report links', function() {
    cy.visit('/')
    cy.contains('View Test Reports')
    cy.contains('View Test Videos')
    cy.contains('View Screenshots')
  })
})

