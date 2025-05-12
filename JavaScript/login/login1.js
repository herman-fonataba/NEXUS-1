  const memberBtn = document.getElementById('memberBtn');
  const adminBtn = document.getElementById('adminBtn');
  const memberForm = document.getElementById('memberForm');
  const adminForm = document.getElementById('adminForm');
  const memberLoginForm = document.getElementById('memberLoginForm');
  const adminLoginForm = document.getElementById('adminLoginForm');
  let memberAttempts = 0;  // Track member login attempts
  let adminAttempts = 0;   // Track admin login attempts
  const MAX_ATTEMPTS = 2;
  const LOCKOUT_DURATION = 60; // 300 seconds or 5 minutes

  const memberPasswords = {
      "12": "Jadwal/IBADAH OSIS/X/Jadwal-Pemimpin.html",
      "23": "Jadwal/IBADAH OSIS/XI/Jadwal-Pemimpin.html",
      "37": "Jadwal/IBADAH OSIS/XII/Jadwal-Pemimpin.html",
      "170845": "Data Nama/Rekapan-Taekwondo.html"
  };

  const adminCredentials = {
      "SMANSA": { password: "61", link: "SMANSA/Sejarah/Sejarah.html" },
      "B.INDO": { password: "61", link: "Mapel/Bahasa Indonesia/B.Indonesia.html" },
      "admin3": { password: "passwordAdmin3", link: "halamanAdmin3.html" },
      "KOSUM PAITI": { password: "01", link: "Sabeum/Dokumentasi.html" },
      "admin4": { password: "passwordAdmin4", link: "halamanAdmin4.html" }
  };

  function toggleForms(activeBtn, inactiveBtn, showForm, hideForm) {
      activeBtn.classList.add('active');
      inactiveBtn.classList.remove('active');
      hideForm.classList.remove('show');
      setTimeout(() => {
          hideForm.style.display = 'none';
          showForm.style.display = 'block';
          setTimeout(() => showForm.classList.add('show'), 50);  
      }, 500);
  }

  memberBtn.addEventListener('click', () => toggleForms(memberBtn, adminBtn, memberForm, adminForm));
  adminBtn.addEventListener('click', () => toggleForms(adminBtn, memberBtn, adminForm, memberForm));

  function lockout(btn, countdownElement, errorElement) {
      btn.disabled = true;
      let remainingTime = LOCKOUT_DURATION;
      
      const countdownInterval = setInterval(() => {
          if (remainingTime <= 0) {
              clearInterval(countdownInterval);
              countdownElement.textContent = '';
              btn.disabled = false;
              errorElement.textContent = '';
          } else {
              countdownElement.textContent = `Coba lagi dalam ${remainingTime} detik`;
              remainingTime--;
          }
      }, 1000);
  }

  function validateMemberLogin(inputPassword, errorElement, countdownElement, btn) {
      if (memberPasswords.hasOwnProperty(inputPassword)) {
          errorElement.textContent = "Login berhasil!";
          errorElement.style.color = '#9aff9a';
          setTimeout(() => {
              window.location.href = memberPasswords[inputPassword];
          }, 1000); 
      } else {
          memberAttempts++;
          errorElement.textContent = ``;
          errorElement.style.color = '#ffffff';
          if (memberAttempts >= MAX_ATTEMPTS) {
              errorElement.textContent = "";
              lockout(btn, countdownElement, errorElement);
          }
      }
  }

  function validateAdminLogin(inputUsername, inputPassword, errorElement, countdownElement, btn) {
      if (adminCredentials.hasOwnProperty(inputUsername) && adminCredentials[inputUsername].password === inputPassword) {
          errorElement.textContent = "Login Admin berhasil!";
          errorElement.style.color = '#9aff9a';
          setTimeout(() => {
              window.location.href = adminCredentials[inputUsername].link;
          }, 1000); 
      } else {
          adminAttempts++;
          errorElement.textContent = ``;
          errorElement.style.color = '#ffffff';
          if (adminAttempts >= MAX_ATTEMPTS) {
              errorElement.textContent = "";
              lockout(btn, countdownElement, errorElement);
          }
      }
  }

  // Handle member login attempts
  memberLoginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const password = document.getElementById('memberPassword').value;
      const errorElement = document.getElementById('memberError');
      const countdownElement = document.getElementById('memberCountdown');
      const btn = e.submitter;
      if (memberAttempts < MAX_ATTEMPTS) {
          validateMemberLogin(password, errorElement, countdownElement, btn);
      }
  });

  // Handle admin login attempts
  adminLoginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('adminUsername').value;
      const password = document.getElementById('adminPassword').value;
      const errorElement = document.getElementById('adminError');
      const countdownElement = document.getElementById('adminCountdown');
      const btn = e.submitter;
      if (adminAttempts < MAX_ATTEMPTS) {
          validateAdminLogin(username, password, errorElement, countdownElement, btn);
      }
  });
