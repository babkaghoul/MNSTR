let clicks = 0;
let level = 1;
let clicksPerSecond = 0;

const clickButton = document.getElementById('click-button');
const buyCpsButton = document.getElementById('buy-cps-button');
const levelSpan = document.getElementById('level');
const clicksSpan = document.getElementById('clicks');
const cpsSpan = document.getElementById('cps');

// Загрузка данных из Local Storage
function loadGameData() {
  clicks = parseInt(localStorage.getItem('clicks'), 10) || 0;
  level = parseInt(localStorage.getItem('level'), 10) || 1;
  clicksPerSecond = parseInt(localStorage.getItem('clicksPerSecond'), 10) || 0;
  updateDisplay();
}

// Сохранение данных в Local Storage
function saveGameData() {
  localStorage.setItem('clicks', clicks);
  localStorage.setItem('level', level);
  localStorage.setItem('clicksPerSecond', clicksPerSecond);
}

// Обработка клика
clickButton.addEventListener('click', () => {
  clicks++;
  updateDisplay();
  checkLevelUp();
  saveGameData(); // Сохраняем после каждого клика
});

// Покупка clicksPerSecond
buyCpsButton.addEventListener('click', () => {
  if (clicks >= 10) {
    clicks -= 10;
    clicksPerSecond++;
    updateDisplay();
    saveGameData(); // Сохраняем после покупки
  } else {
    alert("Недостаточно кликов для покупки!");
  }
});

// Проверка уровня
function checkLevelUp() {
  if (clicks >= level * 10) {
    level++;
    updateDisplay();
    alert("Поздравляем! Вы перешли на уровень " + level + "!");
  }
}

// Обновление отображения
function updateDisplay() {
  levelSpan.textContent = level;
  clicksSpan.textContent = clicks;
  cpsSpan.textContent = clicksPerSecond;
}

// Симуляция clicksPerSecond
setInterval(() => {
  clicks += clicksPerSecond;
  updateDisplay();
  saveGameData(); // Сохраняем каждые 1000 мс
}, 1000); 

// Загружаем данные при запуске игры
loadGameData(); 

// ... ваш JavaScript код ...
