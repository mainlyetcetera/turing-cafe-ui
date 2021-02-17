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

  it('should have a name input', () => {
    cy
      .get('body')
      .contains('Name')
  })

  it('should have a date input', () => {
    cy
      .get('body')
      .contains('Date')
  })
  
  it('should have a time input', () => {
    cy
      .get('body')
      .contains('Time')
  })

  it('should have a number input', () => {
    cy
      .get('body')
      .contains('Number')
  })

  it('should start with reservations', () => {
    cy
      .get('section')
      .children()
      .should('have.length', 2)

      .get('section')
      .children('article:first')
      .contains('Christie')
  })
})

describe('the form', () => {
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

  it('should be able to contain characters', () => { 
    cy
      .get('form div')
      .children('input:first')
      .type('asdf')
      .should('have.value', 'asdf')
  })
})
