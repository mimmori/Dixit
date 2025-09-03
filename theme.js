document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;

  const current = localStorage.getItem('theme') || 'light';
  document.body.classList.add(current);
  toggle.textContent = current === 'dark' ? '☀️' : '🌙';

  toggle.addEventListener('click', () => {
    const next = document.body.classList.toggle('dark') ? 'dark' : 'light';
    toggle.textContent = next === 'dark' ? '☀️' : '🌙';
    localStorage.setItem('theme', next);
  });
});
