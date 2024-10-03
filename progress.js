// Функция для сохранения прогресса
function saveProgress() {
    const progress = {
        tap: currentTap,  // Замените на вашу переменную, отвечающую за количество тапов
        tps: currentTPS,  // Замените на вашу переменную, отвечающую за TPS
        level: currentLevel // Замените на вашу переменную, отвечающую за уровень
    };
    localStorage.setItem('playerProgress', JSON.stringify(progress));
}

// Функция для загрузки прогресса
function loadProgress() {
    const savedProgress = localStorage.getItem('playerProgress');
    if (savedProgress) {
        const progress = JSON.parse(savedProgress);
        currentTap = progress.tap;   // Восстанавливаем количество тапов
        currentTPS = progress.tps;   // Восстанавливаем TPS
        currentLevel = progress.level; // Восстанавливаем уровень
    }
}

// Вызов функции загрузки при загрузке игры
window.onload = function() {
    loadProgress();
};

// Пример сохранения прогресса при каждом изменении
document.addEventListener('tapEvent', function() {  // Замените 'tapEvent' на ваше событие
    currentTap++;  // Увеличение количества тапов
    saveProgress(); // Сохранение прогресса
});
