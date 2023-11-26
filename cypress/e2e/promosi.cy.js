// Memanggil login page, dashboard page, promosi page dan user data 
const LoginPage = require('../support/pages/LoginPage');
const DashboardPage = require('../support/pages/DashboardPage');
const PromisiPage = require('../support/pages/PromosiPage');
const UserData = require('../support/data/UserData');

// Memberikan deskripsi tentang test case halaman promosi
describe('Test Case pada halaman Promosi', () =>{

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
        DashboardPage.verifyDashboardPage();
        DashboardPage.promosi();
    })

    it('click button salin promosi', () => {
        PromisiPage.verify_promosi_page()
        PromisiPage.kodePromosi()
    })

})