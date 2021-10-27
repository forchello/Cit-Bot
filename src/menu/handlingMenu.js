// const debug = require('../helpers');

const { bot, params } = require('../config');
const idForDelete = require('../../db/db');

const dataBase = require('../../db/db.json');

const getTime = require('./date/time');
const getDate = require('./date/date');
const { getWeekDayString } = require('./date/week');

const { sendFromDb } = require('./buttonOptions/lessonNow');

const sendInlineKeyboard = (chatId, param) => {
  bot.sendMessage(chatId, ...param);
};

const handlingKeyboardMenu = () => {
  bot.on('callback_query', async (query) => {
    const chatId = query.message.chat.id;
    const userId = query.from.id;
    const { data } = query;

    if (data === 'lessons_list') {
      await bot.deleteMessage(chatId, query.message.message_id);
      await bot.sendPhoto(chatId, 'schedule.jpg')
        .then((res) => idForDelete.push(res.message_id));
      await sendInlineKeyboard(chatId, params);
    } if (data === 'lesson_now') {
      await bot.deleteMessage(chatId, query.message.message_id);
      await bot.sendMessage(chatId, `*${getWeekDayString()}  |  ${getTime()}  |  ${getDate()}*`, { parse_mode: 'Markdown' })
        .then((res) => idForDelete.push(res.message_id));
      await sendFromDb(chatId, dataBase, userId);
      await sendInlineKeyboard(chatId, params);
    } else if (data === 'delete_msgs') {
      await bot.deleteMessage(chatId, query.message.message_id);

      await idForDelete.forEach((element) => {
        bot.deleteMessage(chatId, element);
      });
    }
  });
};

module.exports = handlingKeyboardMenu;
