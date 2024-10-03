// Этот файл выполняется на стороне клиента (в браузере)

// Получаем ID пользователя из URL 
const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('user_id');

// Проверка, есть ли ID пользователя 
if (userId) {
  // Здесь можно использовать ID пользователя для:
  // 1. Запроса данных пользователя с сервера (например, из базы данных)
  // 2. Отображения приветственного сообщения с именем пользователя

  // Пример отображения приветствия
  const welcomeMessage = document.createElement('div');
  welcomeMessage.textContent = `Добро пожаловать, ${userId}!`;
  document.body.appendChild(welcomeMessage);

  // ... ваш код для работы с мини-приложением
} else {
  // Если ID пользователя отсутствует, 
  // перенаправьте пользователя на страницу авторизации
  window.location.href = 'https://t.me/PokTrainer_bot?start=auth'; // Замените YOUR_BOT_USERNAME на имя вашего бота
}