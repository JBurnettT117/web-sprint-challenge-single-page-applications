describe("MVP", () => {
  it("Visits the Pizza page", () => {
    cy.visit("http://localhost:3000/pizza")
    cy.get('[name="Black Olives"]').click()
    cy.get('[name="Onions"]').click()
    cy.get('[name="Diced Tomatos"]').click()
    cy.get('#special-text').type("abc123")
    cy.get('form').submit()
  })
})