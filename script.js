const modeToggle = document.getElementById('modeToggle');
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
const html = document.documentElement;

modeToggle.addEventListener('click', () => {
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', newTheme);
  modeToggle.textContent = newTheme === 'light' ? '🌙' : '☀️';
});

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('show');
});
