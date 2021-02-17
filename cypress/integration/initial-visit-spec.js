describe('the initial view', () => {
  it('should visit the page', () => {
    cy
      .fixture('../fixtures/testData.json')
      .then(data => {
        cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {
          statusCode: 200,
          body: data.data
        })
      })

    cy
      .visit('localhost:3000')
  })

  it('should have a title', () => {
    cy
      .get('h1')
      .contains('Turing Cafe Reservations')
  })

  it('should have a form', () => {
  })

  it('should start with reservations', () => {
  })
})
