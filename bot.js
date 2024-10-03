const TelegramBot = require('node-telegram-bot-api');
const config = require('./config'); // Импорт конфигурационных данных

const bot = new TelegramBot(config.BOT_TOKEN, { polling: true });

// Карта сессий (в реальной системе лучше использовать базу данных)
const sessions = {}; 

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id; 

  // Проверка, есть ли уже сессия для этого пользователя
  if (!sessions[userId]) {
    // Создание сессии
    sessions[userId] = {
      id: userId,
      name: msg.from.first_name,
      // ... другие данные пользователя
    };

    // Отправка приветственного сообщения 
    await bot.sendMessage(chatId, `Привет, ${sessions[userId].name}!`);

    // Отправка мини-приложения 
    await bot.sendMessage(chatId, 'Запустите мини-приложение:', {
      reply_markup: {
        inline_keyboard: [
          [{ text: 'Открыть приложение', url: 'https://babkaghoul.github.io/MNSTR//' }] // Замените URL на адрес вашего мини-приложения 
        ]
      }
    });

    // Здесь можно добавить логику для дальнейших действий 
  } else {
    // Если сессия уже существует, можно отправить приветствие
    await bot.sendMessage(chatId, `Добро пожаловать обратно, ${sessions[userId].name}!`);

    // Здесь можно добавить логику для действий, доступных после входа 
  }
});