const TelegramBot = require('node-telegram-bot-api');
const express = require('express');

const bot = new TelegramBot('7394526615:AAH_aee-GxXA0V4GSIYwBT7hKK6qP5ywiGs', { polling: true });
const app = express();

const sessions = {}; // Карта сессий

// Обработка команды /start 
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;

  // Проверка, есть ли сессия для этого пользователя
  if (!sessions[userId]) {
    // Создание сессии
    sessions[userId] = {
      id: userId,
      name: msg.from.first_name,
      // ... другие данные пользователя
    };

    bot.sendMessage(chatId, `Привет, ${sessions[userId].name}!`);
    // Отправка ссылки на мини-приложение
    bot.sendMessage(chatId, `Для входа в мини-приложение, откройте эту ссылку: https://babkaghoul.github.io/MNSTR/?user_id=${userId}`);
  } else {
    // Если сессия уже существует, можно отправить приветствие
    bot.sendMessage(chatId, `Добро пожаловать обратно, ${sessions[userId].name}!`);
  }
});

// Обработка других команд и inline-запросов
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;

  // Проверка, есть ли сессия для этого пользователя
  if (sessions[userId]) {
    // ... обработка команд/запросов, доступных только авторизованным пользователям
  } else {
    // Отправка сообщения о необходимости авторизации
    bot.sendMessage(chatId, "Для использования мини-приложения нужно авторизоваться. Напишите /start");
  }
});

// Запуск веб-сервера (для мини-приложения)
app.get('/', (req, res) => {
  const userId = req.query.user_id;
  // Проверка, есть ли сессия для этого пользователя
  if (userId && sessions[userId]) {
    // Вывод приветствия
    res.send(`Добро пожаловать, ${sessions[userId].name}!`); 
  } else {
    // Перенаправление на страницу входа
    res.redirect('https://t.me/PokTrainer_bot?start=auth'); // Замените YOUR_BOT_USERNAME на имя вашего бота
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Сервер запущен на порту 3000');
});
console.log('Получено сообщение: ', msg); // Log the received message
console.log('User ID: ', userId); // Log the user ID
console.log('Redirecting to: ', `https://t.me/PokTrainer_bot?start=auth`); // Log the redirection URL
