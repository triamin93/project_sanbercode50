// Memanggil login page, dashboard page, marketing konten page dan user data 
const LoginPage = require('../support/pages/LoginPage');
const DashboardPage = require('../support/pages/DashboardPage');
const MarketingKontenPage = require('../support/pages/MarketingKontenPage');
const UserData = require('../support/data/UserData');

// Memberikan deskripsi tentang test case halaman marketing konten
describe('Test Case pada halaman konten marketing konten', () =>{

    // Pre-condision
    beforeEach(() => {
        // Buka URL Vissetor
        LoginPage.visit('https://appstaging.viseetor.id/login');
        // Verify Halaman Login
        LoginPage.verify_login_page();
        // Mengisi data email di field email
        LoginPage.fillEmail(UserData.email);
        // Mengisi data email di field email
        LoginPage.fillPassword(UserData.password);
        // Mengklik tombol login
        LoginPage.clickLoginButton();
        DashboardPage.verifyDashboardPage();
        DashboardPage.kontenMarketing();
    })

    it('click button download gambar', () => {
        MarketingKontenPage.verify_marketingKonten_page();
        MarketingKontenPage.downloadGambar();
    })

})