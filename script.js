let clicks = localStorage.getItem('clicks') ? parseInt(localStorage.getItem('clicks')) : 0;
let level = localStorage.getItem('level') ? parseInt(localStorage.getItem('level')) : 1;
let clicksPerSecond = localStorage.getItem('clicksPerSecond') ? parseInt(localStorage.getItem('clicksPerSecond')) : 0;
let clicksNeededForNextLevel = localStorage.getItem('clicksNeededForNextLevel') ? parseInt(localStorage.getItem('clicksNeededForNextLevel')) : 100;

const clickButton = document.getElementById('click-button');
const levelSpan = document.getElementById('level');
const clicksSpan = document.getElementById('clicks');
const cpsSpan = document.getElementById('cps');
const progressBar = document.getElementById('progress-bar');
const popup = document.getElementById('popup');

// Обновление дисплея
function updateDisplay() {
    levelSpan.textContent = level;
    clicksSpan.textContent = clicks;
    cpsSpan.textContent = clicksPerSecond;
    updateProgressBar();
}

// Обновление прогресс-бара
function updateProgressBar() {
    const progressPercentage = (clicks / clicksNeededForNextLevel) * 100;
    progressBar.style.width = `${Math.min(progressPercentage, 100)}%`;

    if (clicks >= clicksNeededForNextLevel) {
        levelUp();
    }
}

function levelUp() {
    level++;
    clicksNeededForNextLevel = Math.floor(clicksNeededForNextLevel * 1.5);
    clicks = 0;
    saveData(); // Save data on level up
    updateDisplay();
    showCongratsPopup(); // Show the popup when leveling up
}

function showCongratsPopup() {
    popup.style.display = 'block';
    setTimeout(() => {
        popup.style.display = 'none';
    }, 2000); // Hide after 2 seconds
}

// Сохранение данных в localStorage
function saveData() {
    localStorage.setItem('clicks', clicks);
    localStorage.setItem('level', level);
    localStorage.setItem('clicksPerSecond', clicksPerSecond);
    localStorage.setItem('clicksNeededForNextLevel', clicksNeededForNextLevel);
}

// Обработчик клика
clickButton.addEventListener('click', (event) => {
    event.preventDefault();

    // Эффект нажатия
    clickButton.style.transform = 'scale(0.9)';
    setTimeout(() => {
        clickButton.style.transform = 'scale(1)';
    }, 100);

    clicks++;
    saveData(); // Save data on click
    updateDisplay();
});

// Обновление кликов в секунду
setInterval(() => {
    clicks += clicksPerSecond;
    saveData(); // Save data on clicks per second
    updateDisplay();
}, 1000);

document.addEventListener('touchmove', (event) => {
    event.preventDefault();
}, { passive: false });

// Initial display update
updateDisplay();
