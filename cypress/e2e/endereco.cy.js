///<reference types="cypress" />
import EnderecoPage from '../support/page-objects/endereco.page'


describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
beforeEach(() => {
    cy.visit('minha-conta')
    cy.fixture('perfil').then(dados =>{
        cy.login(dados.usuario, dados.senha)
    })
    
});

    it.only('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Simone', 'Santos', 'Via', 'bRASIL', 'Avenida Comendador Dante Carraro', '101', 'Bauru', 'São Paulo', '06396250', '11999999999', 'simonekppx@gmail.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
        
    });
});