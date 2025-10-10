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
    // update header button text if present
    const headerBtn = document.getElementById(btnId);
    if (headerBtn) headerBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
    // update any elements with data-theme-toggle (for mobile inside nav)
    document.querySelectorAll('[data-theme-toggle]').forEach(el => {
      if (el.tagName === 'BUTTON' || el.tagName === 'A') {
        el.textContent = theme === 'dark' ? '☀️ Сменить тему' : '🌙 Сменить тему';
      }
    });
  }

  function toggleTheme() {
    const isDark = root.classList.contains('dark-theme');
    setTheme(isDark ? 'light' : 'dark');
  }

  document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById(btnId);
    if (btn) btn.addEventListener('click', toggleTheme);
    // bind mobile nav theme toggle(s)
    document.querySelectorAll('[data-theme-toggle]').forEach(el => el.addEventListener('click', function(e){ e.preventDefault(); toggleTheme(); }));
    // По умолчанию — dark, если не сохранено в localStorage
    const saved = localStorage.getItem(THEME_KEY);
    setTheme(saved === 'light' ? 'light' : 'dark');
  });
})();
