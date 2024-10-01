let clicks = 0;
let level = 1;
let clicksPerSecond = 0;

const clickButton = document.getElementById('click-button');
const buyCpsButton = document.getElementById('buy-cps-button');
const levelSpan = document.getElementById('level');
const clicksSpan = document.getElementById('clicks');
const cpsSpan = document.getElementById('cps');

clickButton.addEventListener('click', () => {
  clicks++;
  updateDisplay();
  checkLevelUp();
});

buyCpsButton.addEventListener('click', () => {
  if (clicks >= 10) {
    clicks -= 10;
    clicksPerSecond++;
    updateDisplay();
  } else {
    alert("Not enough clicks to buy clicks per second!");
  }
});

function checkLevelUp() {
  if (clicks >= level * 10) {
    level++;
    updateDisplay();
    alert("Congratulations! You leveled up to level " + level + "!");
  }
}

function updateDisplay() {
  levelSpan.textContent = level;
  clicksSpan.textContent = clicks;
  cpsSpan.textContent = clicksPerSecond;
}

// Simulate clicks per second
setInterval(() => {
  clicks += clicksPerSecond;
  updateDisplay();
}, 1000); 

// Отправка запроса на ваш веб-сервер
fetch('/your-endpoint', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    // Данные, которые вы хотите отправить
  })
})
.then(response => response.json())
.then(data => {
  // Обработка ответа от сервера
});

// Получение данных с сервера
fetch('/your-endpoint')
.then(response => response.json())
.then(data => {
  // Обновление состояния игры
  clicks = data.clicks;
  level = data.level;
  clicksPerSecond = data.clicksPerSecond;
  updateDisplay();
});
//  ... JavaScript код Clicker игры ...

function saveGameData() {
  localStorage.setItem('clicks', clicks);
  localStorage.setItem('level', level);
  localStorage.setItem('clicksPerSecond', clicksPerSecond);
}

function loadGameData() {
  clicks = parseInt(localStorage.getItem('clicks'), 10) || 0;
  level = parseInt(localStorage.getItem('level'), 10) || 1;
  clicksPerSecond = parseInt(localStorage.getItem('clicksPerSecond'), 10) || 0;
  updateDisplay(); 
}

// Загружаем данные при запуске игры
loadGameData();

// Сохраняем данные при каждом изменении
setInterval(saveGameData, 1000); // Сохраняем каждые 1000 мс (1 секунда)

// Получение идентификатора пользователя
fetch('/get-user-id')
  .then(response => response.json())
  .then(data => {
    const userId = data.user_id;

    // Проверка авторизации
    fetch('/check-user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_id: userId
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.authorized) {
        // Загрузка состояния игры
        fetch('/get-game-data', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            user_id: userId
          })
        })
        .then(response => response.json())
        .then(data => {
          clicks = data.clicks;
          level = data.level;
          clicksPerSecond = data.clicksPerSecond;
          updateDisplay();
        });
      } else {
        // Пользователь не авторизован
        alert("Пожалуйста, зарегистрируйтесь в боте Telegram!");
        // 
      }
    });
  });

     // ... ваш JavaScript код ...
     const clickButton = document.getElementById('click-button');
     clickButton.textContent = 'Нажми меня!'; // Изменение надписи кнопки
  
     // ...
     