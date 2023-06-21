describe('Test', () => {
  it('Should pass', () => {
    cy.visit('/')
    
    cy.contains('Vite')
  })
})