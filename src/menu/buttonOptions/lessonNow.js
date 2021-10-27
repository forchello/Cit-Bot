// const moment = require('moment');
const { bot } = require('../../config');
const idForDelete = require('../../../db/db');
const { startStudy } = require('../../../db/startStudy.json');

const getTime = require('../date/time');

const { getWeekDay, getWeekFromStart } = require('../date/week');

const sendLoc = (chatId, el) => bot.sendLocation(chatId, el.place.latitude, el.place.longitude)
  .then((res) => idForDelete.push(res.message_id));

const sendInfo = (chatId, el) => bot.sendMessage(chatId, `📚  Предмет: ${el.name} \n🕓  Время начала: ${el.timeStart} \n🕟  Время Конца: ${el.timeEnd} \n🧠  Преподаватель: ${el.teacher} \n📍  Место: ${el.place.name}`)
  .then((res) => idForDelete.push(res.message_id));

const sendFromDb = async (chatId, dataBase) => {
  const elem = await dataBase.find((el) => +el.day === getWeekDay()
            && (el.week === getWeekFromStart(startStudy) || el.week === 'everytime')
            && el.timeStart <= getTime()
            && el.timeEnd >= getTime());

  if (elem !== undefined) {
    await sendLoc(chatId, elem);
    await sendInfo(chatId, elem);
  } else {
    await bot.sendMessage(chatId, 'Пары сейчас нет! ❎')
      .then((res) => idForDelete.push(res.message_id));
  }
};

module.exports = { sendFromDb };
