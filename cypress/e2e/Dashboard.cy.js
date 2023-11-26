// Memanggil login page, dashboard page dan user data 
const LoginPage = require('../support/pages/LoginPage');
const DashboardPage = require('../support/pages/DashboardPage');
const UserData = require('../support/data/UserData');

// Memberikan deskripsi tentang test case halaman login
describe('Test Case pada halaman Dashboard', () =>{

    // Pre-condision
    beforeEach(() => {
        // Buka URL Vissetor
        LoginPage.visit('https://appstaging.viseetor.id/login');
        // Verify Halaman Login
        LoginPage.verify_login_page()
        // Mengisi data email di field email
        LoginPage.fillEmail(UserData.email);
        // Mengisi data email di field email
        LoginPage.fillPassword(UserData.password);
        // Mengklik tombol login
        LoginPage.clickLoginButton();
    })

    it('click button profile', () => {
        DashboardPage.verifyDashboardPage()
        DashboardPage.verifyUserDropdown()
        DashboardPage.profil()
    })

    it('click button bantuan', () => {
        DashboardPage.verifyDashboardPage()
        DashboardPage.verifyUserDropdown()
        DashboardPage.bantuan()
    })

    it('click button tutorial', () => {
        DashboardPage.verifyDashboardPage()
        DashboardPage.verifyUserDropdown()
        DashboardPage.tutorial()
    })

    it('click button keluar', () => {
        DashboardPage.verifyDashboardPage()
        DashboardPage.verifyUserDropdown()
        DashboardPage.keluar()
    })

    it('click button lihat profil', () => {
        DashboardPage.verifyDashboardPage()
        DashboardPage.verifyUserDropdown()
        DashboardPage.lihatProfile()
    })

    it('click button menu dashboard', () => {
        DashboardPage.verifyDashboardPage()
        DashboardPage.dashboard()
    })

    it('click button menu promosi', () => {
        DashboardPage.verifyDashboardPage()
        DashboardPage.promosi()
    })

    it('click button menu konten marketing', () => {
        DashboardPage.verifyDashboardPage()
        DashboardPage.kontenMarketing()
    })

    it('click button menu pesan', () => {
        DashboardPage.verifyDashboardPage()
        DashboardPage.pesan()
    })

    it('click button menu klien aktif', () => {
        DashboardPage.verifyDashboardPage()
        DashboardPage.dropdownKlient()
        DashboardPage.klienAktif()
    })

    it('click button menu klien prospektif', () => {
        DashboardPage.verifyDashboardPage()
        DashboardPage.dropdownKlient()
        DashboardPage.klienProspektif()
    })

    it('click button menu event mendatang', () => {
        DashboardPage.verifyDashboardPage()
        DashboardPage.dropdownEvent()
        DashboardPage.eventMendatang()
    })

    it('click button menu event berlalu', () => {
        DashboardPage.verifyDashboardPage()
        DashboardPage.dropdownEvent()
        DashboardPage.eventBerlalu()
    })

    it('click button menu daftar transaksi', () => {
        DashboardPage.verifyDashboardPage()
        DashboardPage.dropdownTransaksi()
        DashboardPage.daftarTransaksi()
    })

    it('click button menu komisi undangan', () => {
        DashboardPage.verifyDashboardPage()
        DashboardPage.dropdownKomisi()
        DashboardPage.komisiUndangan()
    })

    it('click button menu penarikan dana', () => {
        DashboardPage.verifyDashboardPage()
        DashboardPage.dropdownKomisi()
        DashboardPage.penarikanDana()
    })

})