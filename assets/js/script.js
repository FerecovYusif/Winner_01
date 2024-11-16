document.addEventListener('DOMContentLoaded', function() {

    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark') {
        document.body.classList.add('dark');
        themeToggle.checked = true;
    }

    themeToggle.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    });

    
    const anasayfaBtn = document.getElementById('anasayfa-btn');
    const anasayfaMesaj = document.getElementById('anasayfa-mesaj');

    anasayfaBtn.addEventListener('click', function() {
        anasayfaMesaj.classList.toggle('hidden');
        if (anasayfaMesaj.classList.contains('hidden')) {
            anasayfaBtn.textContent = 'Daha Fazla Bilgi';
        } else {
            anasayfaBtn.textContent = 'Bilgiyi Gizle';
        }
    });

    
    const iletisimFormu = document.getElementById('iletisim-formu');
    const formMesaj = document.getElementById('form-mesaj');

    iletisimFormu.addEventListener('submit', function(e) {
        e.preventDefault();

        const isim = document.getElementById('isim').value;
        const email = document.getElementById('email').value;
        const mesaj = document.getElementById('mesaj').value;

        
        const iletisimVerisi = {
            isim: isim,
            email: email,
            mesaj: mesaj
        };

        localStorage.setItem('iletisimVerisi', JSON.stringify(iletisimVerisi));

        
        formMesaj.textContent = 'Mesajınız başarıyla gönderildi!Ama Çınlılere ;)';
        formMesaj.classList.remove('hidden');

        
        iletisimFormu.reset();
    });

    
    const kayitliVeri = JSON.parse(localStorage.getItem('iletisimVerisi'));
    if (kayitliVeri) {
        document.getElementById('isim').value = kayitliVeri.isim;
        document.getElementById('email').value = kayitliVeri.email;
        document.getElementById('mesaj').value = kayitliVeri.mesaj;
    }
});


