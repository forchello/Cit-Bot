const { bot } = require('./src/config');

const startBot = require('./src/start');

const startKeyboardMenu = require('./src/menu/startMenu');
const handlingKeyboardMenu = require('./src/menu/handlingMenu');

bot.setMyCommands(
  [
    { command: '/start', description: 'Начать работу с ботом-помощником' },
  ],
);

startBot();

startKeyboardMenu();

handlingKeyboardMenu();
