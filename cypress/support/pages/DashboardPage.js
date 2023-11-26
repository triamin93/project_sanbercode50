// Memanggil file locator dashboard
const locator = require('../locators/DashboardLocator');

// Membuat class halaman dashboard
class DashboardPage {

    // Fungsi verifikasi halaman dashboard
    async verifyDashboardPage() {
        cy.xpath(locator.datatestid.userarea_dropdown).should('be.visible');
    }

    // Fungsi verifikasi user dropdown
    async verifyUserDropdown() {
        cy.xpath(locator.datatestid.userarea_click).eq(0).click();
        cy.xpath(locator.datatestid.profil_menu).should('be.visible');
        cy.xpath(locator.datatestid.bantuan_menu).should('be.visible');
        cy.xpath(locator.datatestid.tutorial_menu).should('be.visible');
        cy.xpath(locator.datatestid.keluar_menu).should('be.visible');
    }

    // Fungsi tombol profile
    async profil() {
        cy.xpath(locator.datatestid.profil_menu).eq(1).click()
    }

    // Fungsi tombol bantuan
    async bantuan() {
        cy.xpath(locator.datatestid.bantuan_menu).click()
    }

    // Fungsi tombol tutorial
    async tutorial() {
        cy.xpath(locator.datatestid.tutorial_menu).click()
    }

    // Fungsi tombol keluar
    async keluar() {
        cy.xpath(locator.datatestid.keluar_menu).click()
    }

    // Fungsi tombol lihat profile
    async lihatProfile() {
        cy.xpath(locator.datatestid.lihatProfil_menu).click()
    }

    // Fungsi tombol menu dashboard
    async dashboard() {
        cy.xpath(locator.datatestid.dashboard_menu).should('be.visible')
        cy.xpath(locator.datatestid.dashboard_menu).eq(1).click()
    }

    // Fungsi tombol menu promosi
    async promosi() {
        cy.xpath(locator.datatestid.promosi_menu).should('be.visible')
        cy.xpath(locator.datatestid.promosi_menu).click()
    }

    // Fungsi tombol menu konten marketing
    async kontenMarketing() {
        cy.xpath(locator.datatestid.kontenMarketing_menu).should('be.visible')
        cy.xpath(locator.datatestid.kontenMarketing_menu).click()
    }

    // Fungsi tombol menu pesan
    async pesan() {
        cy.xpath(locator.datatestid.pesan_menu).should('be.visible')
        cy.xpath(locator.datatestid.pesan_menu).click()
    }

    // Fungsi tombol menu dropdown klien
    async dropdownKlient() {
        cy.xpath(locator.datatestid.klient_dropdownMenu).should('be.visible')
        cy.xpath(locator.datatestid.klient_dropdownMenu).click()
    }

    // Fungsi tombol menu klien aktif
    async klienAktif() {
        cy.xpath(locator.datatestid.klientAktif_menu).should('be.visible')
        cy.xpath(locator.datatestid.klientAktif_menu).click()
    }

    // Fungsi tombol menu klien prospektif
    async klienProspektif() {
        cy.xpath(locator.datatestid.klientPropestif_menu).should('be.visible')
        cy.xpath(locator.datatestid.klientPropestif_menu).click()
    }

    // Fungsi tombol menu dropdown event
    async dropdownEvent() {
        cy.xpath(locator.datatestid.event_dropdownMenu).should('be.visible')
        cy.xpath(locator.datatestid.event_dropdownMenu).click()
    }

    // Fungsi tombol menu event mendatang
    async eventMendatang() {
        cy.xpath(locator.datatestid.eventMendatang_menu).should('be.visible')
        cy.xpath(locator.datatestid.eventMendatang_menu).eq(0).click()
    }

    // Fungsi tombol menu event berlalu
    async eventBerlalu() {
        cy.xpath(locator.datatestid.eventBerlalu_menu).should('be.visible')
        cy.xpath(locator.datatestid.eventBerlalu_menu).click()
    }

    // Fungsi tombol menu dropdown transaksi
    async dropdownTransaksi() {
        cy.xpath(locator.datatestid.transaksi_dropdownMenu).should('be.visible')
        cy.xpath(locator.datatestid.transaksi_dropdownMenu).eq(0).click()
    }

    // Fungsi tombol menu daftar transaksi
    async daftarTransaksi() {
        cy.xpath(locator.datatestid.daftarTransaksi_menu).should('be.visible')
        cy.xpath(locator.datatestid.daftarTransaksi_menu).click()
    }

    // Fungsi tombol menu dropdown komisi
    async dropdownKomisi() {
        cy.xpath(locator.datatestid.komisi_dropdownMenu).should('be.visible')
        cy.xpath(locator.datatestid.komisi_dropdownMenu).eq(0).click()
    }

    // Fungsi tombol menu komisi undangan
    async komisiUndangan() {
        cy.xpath(locator.datatestid.komisiUndangan_menu).should('be.visible')
        cy.xpath(locator.datatestid.komisiUndangan_menu).eq(0).click()
    }

    // Fungsi tombol menu penarikan dana
    async penarikanDana() {
        cy.xpath(locator.datatestid.penarikanDana_menu).should('be.visible')
        cy.xpath(locator.datatestid.penarikanDana_menu).eq(0).click()
    }
}

module.exports = new DashboardPage()