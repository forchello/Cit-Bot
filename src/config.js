const TelegramBot = require('node-telegram-bot-api');
// connecting with api library
const TOKEN = '1735938010:AAEz80631NlA16OHyCN8UDKrRLvMyGc2LOM'; // creating token
const bot = new TelegramBot(TOKEN, {
  polling: {
    interval: 300,
    autoStart: true,
    params: {
      timeout: 10,
    },
  },
});

const params = [
  'Выберите действие:',
  {
    reply_markup: {
      inline_keyboard:
      [
        [
          {
            text: 'Cписок пар 📆',
            callback_data: 'lessons_list',
          },
        ],
        [
          {
            text: 'Какая сейчас пара? ⏰',
            callback_data: 'lesson_now',
          },
        ],
        [
          {
            text: 'Закончить работу с ботом 📵',
            callback_data: 'delete_msgs',
          },
        ],
      ],
    },
  },
];

module.exports = { bot, params };
