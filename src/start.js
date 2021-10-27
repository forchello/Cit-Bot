const { bot } = require('./config');

const startBot = () => {
  bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;

    bot.sendMessage(chatId, 'Привет! 👋', {
      reply_markup: {
        keyboard:
          [
            ['Начать работу с ботом 🦾'],
          ],
        resize_keyboard: true,
      },
    });
    bot.deleteMessage(chatId, msg.message_id);
  });
};

module.exports = startBot;
