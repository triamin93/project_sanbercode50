// Memanggil file locator promosi
const locator = require('../locators/PromosiLocator');

// Membuat class halaman promosi
class PromisiPage {

    // Fungsi untuk verifikasi halaman promosi
    async verify_promosi_page(){
        cy.xpath(locator.datatestid.text_promosi, { timeout: 1000 }).should('be.visible')    
    }

    // Fungsi untuk click salin kode promosi
    async kodePromosi() {
        cy.xpath(locator.datatestid.salin_kode).click()
    }
}

module.exports = new PromisiPage();