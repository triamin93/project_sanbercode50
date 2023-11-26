// File ini untuk menyimpang locator dari sebuah website pada halaman dashboard

module.exports = {
    datatestid: {
        userarea_dropdown: '//*[@class="rounded-circle header-profile-user"]',
        userarea_click: '//*[@id="page-header-user-dropdown"]',
        profil_menu: '//*[contains(text(), "Profil")]',
        bantuan_menu: '//*[contains(text(), "Bantuan Mimin")]',
        tutorial_menu: '//*[contains(text(), "Tutorial")]',
        keluar_menu: '//*[contains(text(), "Keluar")]',
        lihatProfil_menu: '//*[contains(text(), "Lihat Profil")]',

        dashboard_menu: '//*[contains(text(), "Dashboard")]',
        promosi_menu: '//*[contains(text(), "Promosi")]',
        kontenMarketing_menu: '//*[contains(text(), "Konten Marketing")]',
        pesan_menu: '//*[contains(text(), "Pesan")]',

        klient_dropdownMenu: '//*[@key="t-client"]',
        klientAktif_menu: '//*[contains(text(), "Klien Aktif")]',
        klientPropestif_menu: '//*[contains(text(), "Klien Prospektif")]',

        event_dropdownMenu: '//*[@key="t-event"]',
        eventMendatang_menu: '//*[contains(text(), "Event Mendatang")]',
        eventBerlalu_menu: '//*[contains(text(), "Event Berlalu")]',

        transaksi_dropdownMenu: '//*[@key="t-shop"]',
        daftarTransaksi_menu: '//*[contains(text(), "Daftar Transaksi")]',

        komisi_dropdownMenu: '//*[contains(text(), "Komisi")]',
        komisiUndangan_menu: '//*[contains(text(), "Komisi Undangan")]',
        penarikanDana_menu: '//*[contains(text(), "Penarikan Dana ")]',

    }
}