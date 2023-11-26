// Memanggil file locator Login
const locator = require('../locators/LoginLocator');

// Membuat class halaman login
class LoginPage {

    // Fungsi untuk buka url
    async visit(path){
        cy.visit(path)
        return cy.url().should('eq', path)
    }

    // Fungsi untuk verifikasi halaman login
    async verify_login_page(){
        cy.xpath(locator.datatestid.logo, { timeout: 1000 }).should('be.visible')
        cy.xpath(locator.datatestid.text_viseetor, { timeout: 1000 }).should('be.visible')
        cy.xpath(locator.datatestid.email_field, { timeout: 1000 }).should('be.visible')
        cy.xpath(locator.datatestid.password_field, { timeout: 1000 }).should('be.visible')
        cy.xpath(locator.datatestid.btn_login, { timeout: 1000 }).should('be.visible')    
    }

    // Fungsi untuk alamat email fiekd
    async fillEmail(email) {
        cy.xpath(locator.datatestid.email_field)
        .type(email)
        .should('have.value', email)
    }

    // Fungsi untuk password field
    async fillPassword(password) {
        cy.xpath(locator.datatestid.password_field)
        .type(password)
        .should('have.value', password)
    }

    // Fungsi untuk tombol login
    async clickLoginButton() {
        cy.xpath(locator.datatestid.btn_login).click()
    }
}

module.exports = new LoginPage();