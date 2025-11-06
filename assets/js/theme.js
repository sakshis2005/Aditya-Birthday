(function () {
  const btn = document.getElementById('themeToggle');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const saved = localStorage.getItem('theme');
  if (saved) {
    document.body.className = saved;
  } else {
    document.body.className = prefersDark ? 'theme-dark' : 'theme-light';
  }
  btn.textContent = document.body.classList.contains('theme-dark') ? '☾' : '☀︎';

  btn.addEventListener('click', () => {
    const next = document.body.classList.contains('theme-dark') ? 'theme-light' : 'theme-dark';
    document.body.className = next;
    localStorage.setItem('theme', next);
    btn.textContent = next === 'theme-dark' ? '☾' : '☀︎';
  });
})();