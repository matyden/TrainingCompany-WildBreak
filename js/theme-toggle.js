// theme-toggle.js
// Скрипт для переключения темы сайта (день/ночь)
(function() {
  const THEME_KEY = 'wildbreak-theme';
  const root = document.documentElement;
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

  // Инициализация
  document.addEventListener('DOMContentLoaded', function() {
    // Кнопка может быть добавлена динамически
    const btn = document.getElementById(btnId);
    if (btn) {
      btn.addEventListener('click', toggleTheme);
    }
    // Установить тему из localStorage
    const saved = localStorage.getItem(THEME_KEY);
    setTheme(saved === 'dark' ? 'dark' : 'light');
  });
})();
