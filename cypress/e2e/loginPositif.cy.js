// Memanggil file login page 
const LoginPage = require('../support/pages/LoginPage');
// Memanggil file user data
const UserData = require('../support/data/UserData');

// Memberikan deskripsi tentang test case halaman login
describe('Test Case pada halaman login', () => {

  // memberikan pre-condision
  beforeEach(() => {
    // Buka URL Viseetor
    LoginPage.visit('https://appstaging.viseetor.id/login');
  })

  // test case user dan password valid
  it('with valid data', () => {
    // Verify Halaman Login
    LoginPage.verify_login_page()
    // Mengisi data email di field email
    LoginPage.fillEmail(UserData.email);
    // Mengisi data email di field email
    LoginPage.fillPassword(UserData.password);
    // Mengklik tombol login
    LoginPage.clickLoginButton();
  })
})