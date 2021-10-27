const { bot, params } = require('../config');

const startKeyboardMenu = () => {
  bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    if (msg.text === 'Начать работу с ботом 🦾') {
      bot.deleteMessage(chatId, msg.message_id);

      bot.sendMessage(chatId, ...params);
    }
  });
};

module.exports = startKeyboardMenu;
