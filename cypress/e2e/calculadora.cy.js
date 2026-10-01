describe('calculadora de orçamento', () => {
  it('deve calcular o orçamento com dados validos', () => {
   // Acessa a página inicial da aplicação
    cy.visit('index.html')

   // Preenche os dados necessários para realizar o orçamento
    cy.get('#valorPassagem').type('1000')
    cy.get('#numeroPessoas').type('2')
    cy.get('#diasHospedagem').type('5')
    cy.get('#dataNascimento').type('1976-02-13')

   // Envia o formulário para calcular o orçamento
    cy.get('button[type="submit"]').click()

   // Valida se o valor calculado corresponde ao resultado esperado
    cy.get('#resultadoOrcamento')
      .should('contain', 'R$ 5500.00')

  })
})