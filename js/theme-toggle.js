// theme-toggle.js
// Скрипт для переключения темы сайта (день/ночь)
(function() {
  const THEME_KEY = 'wildbreak-theme';
  const root = document.body;
  const btnId = 'themeToggleBtn';

  function setTheme(theme) {
    if (theme === 'dark') {
      root.classList.add('dark-theme');
      root.classList.remove('light-theme');
    } else {
      root.classList.remove('dark-theme');
      root.classList.add('light-theme');
    }
    localStorage.setItem(THEME_KEY, theme);
    const btn = document.getElementById(btnId);
    if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
  }

  function toggleTheme() {
    const isDark = root.classList.contains('dark-theme');
    setTheme(isDark ? 'light' : 'dark');
  }

  document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById(btnId);
    if (btn) {
      btn.addEventListener('click', toggleTheme);
    }
    // По умолчанию — dark, если не сохранено в localStorage
    const saved = localStorage.getItem(THEME_KEY);
    setTheme(saved === 'light' ? 'light' : 'dark');
  });
})();
