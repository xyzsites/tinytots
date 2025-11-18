
    const toggle = document.getElementById('darkModeToggle');
    const body = document.body;
    if (localStorage.getItem('theme') === 'light') {
      body.classList.add('light-mode');
      toggle.checked = false;
    }
    toggle.addEventListener('change', () => {
      if (toggle.checked) {
        body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark');
      } else {
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
      }
    });
