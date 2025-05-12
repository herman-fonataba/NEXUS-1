
        var audio = document.getElementById('myAudio');

        // Event listener untuk mendeteksi klik tombol Admin
        document.getElementById('adminBtn').addEventListener('click', function(event) {
            audio.muted = false;  // Mengaktifkan audio
            audio.play();          // Memastikan audio diputar
            event.stopPropagation(); // Menghentikan event agar tidak tertangkap oleh document
        });

        // Event listener untuk menghentikan audio saat klik pada tombol lain
        document.getElementById('memberBtn').addEventListener('click', function() {
            audio.pause();        // Menghentikan audio
            audio.currentTime = 0; // Mengatur waktu audio kembali ke awal
        });

        // Mencegah pengiriman form untuk demo
        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault();
        });
    