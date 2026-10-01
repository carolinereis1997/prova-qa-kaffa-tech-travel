describe('verificar bloqueio para menor de 18 anos', () => {
  it('deve impedir orçamento para menor de 18 anos', () => {

    // Acessa a página inicial da aplicação
    cy.visit('index.html')

   // Preenche os dados do orçamento com uma data de nascimento de menor de 18 anos
    cy.get('#valorPassagem').type('1000')
    cy.get('#numeroPessoas').type('2')
    cy.get('#diasHospedagem').type('1')
    cy.get('#dataNascimento').type('2008-12-15')


    // Envia o formulário para verificar se o sistema bloqueia o orçamento
    cy.get('button[type="submit"]').click()

    // Espera-se que o orçamento não seja exibido para um usuário menor de 18 anos
    cy.get('#resultadoOrcamento')
      .should('not.contain', 'Orçamento total')
  })
})