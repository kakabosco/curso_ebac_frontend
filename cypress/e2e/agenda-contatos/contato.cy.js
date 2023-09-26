/// <reference types="cypress" />

describe("Teste para manipulação de contatos", () => {
    beforeEach(() => {
        cy.visit("https://agenda-contatos-react.vercel.app/");
    });

    it("Deve verificar a estrutura do formulário", () => {
        cy.get(".sc-gLDzan");
        cy.get("input").should("have.length", 3);
        cy.get("button").should("have.length", 1);
    });

    it("Deve preencher e enviar o formulário", () => {
        cy.get("input[type='text']").type("Teste");
        cy.get("input[type='email']").type("teste@teste.com");
        cy.get("input[type='tel']").type("11 99999-9999");
        cy.get(".adicionar").click();
    });

    it("Deve verificar se o contato foi adicionado", () => {
        cy.get(".sc-iAEyYk").should(
            "contain",
            "Teste",
            "teste@teste.com",
            "11 99999-9999"
        );
    });

    it("Deve editar o contato", () => {
        cy.get(":nth-child(3) > .sc-gueYoa > .edit").click();
        cy.get("input[type='text']").clear().type("Kaique Bosco");
        cy.get(".alterar").click();
        cy.get(
            ":nth-child(3) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(1)"
        ).should("contain", "Kaique Bosco");
    });

    it("Deve excluir o contato", () => {
        cy.get(":nth-child(3) > .sc-gueYoa > .delete").click();
        cy.get(".sc-iAEyYk").should("not.contain", "Kaique Bosco");
    });
});
