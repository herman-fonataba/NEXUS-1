
        var audio = document.getElementById('myAudio');

        // Fungsi untuk memutar lagu baru
        function playAudio(src) {
            audio.pause();  // Menghentikan audio yang sedang diputar
            audio.currentTime = 0;  // Mengatur ulang waktu audio
            audio.src = src;  // Mengganti sumber audio
            audio.load();  // Memuat sumber audio yang baru
            audio.play();  // Memainkan audio yang baru
            audio.muted = false;  // Menonaktifkan mute
        }

        // Event listener untuk tombol pertama
        document.getElementById('memberBtn').addEventListener('click', function() {
            playAudio('Gambar/Member.mp3');  // Ganti 'song1.mp3' dengan jalur audio pertama Anda
        });

        // Event listener untuk tombol kedua
        document.getElementById('adminBtn').addEventListener('click', function() {
            playAudio('Gambar/Admin.mp3');  // Ganti 'song2.mp3' dengan jalur audio kedua Anda
        });

        // Event listener untuk tombol Login
        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault();  // Mencegah form dikirimkan
            audio.pause();  // Menghentikan audio yang sedang diputar
            audio.currentTime = 0;  // Mengatur waktu audio kembali ke awal
            
        });

        // Event listener untuk menghentikan audio ketika pengguna menutup tab atau pindah tab
        document.addEventListener('visibilitychange', function() {
            if (document.hidden) {
                audio.pause();  // Menghentikan audio jika tab tidak aktif
            }
        });

        // Event listener untuk menghentikan audio saat pengguna menutup halaman
        window.addEventListener('beforeunload', function() {
            audio.pause();  // Menghentikan audio jika pengguna menutup tab atau keluar dari halaman
        });
    