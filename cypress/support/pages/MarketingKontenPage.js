// Memanggil file locator marketing konten
const locator = require('../locators/MarketingKontenLocator');

// Membuat class halaman marketing konten
class MarketingKontenPage {

    // Fungsi untuk verifikasi halaman marketing konten
    async verify_marketingKonten_page(){
        cy.xpath(locator.datatestid.text_kontenMarketing, { timeout: 1000 }).should('be.visible')    
    }

    // Fungsi untuk download gambar
    async downloadGambar() {
        cy.xpath(locator.datatestid.tombol_download).click()
    }
}

module.exports = new MarketingKontenPage();