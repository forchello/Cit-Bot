const moment = require('moment');

const getWeekDay = () => moment().day();

const getWeekDayString = () => {
  const day = getWeekDay();
  let dayStr = '';

  switch (day) {
    case 0:
      dayStr = 'Воскресенье';
      break;
    case 1:
      dayStr = 'Понедельник';
      break;
    case 2:
      dayStr = 'Вторник';
      break;
    case 3:
      dayStr = 'Среда';
      break;
    case 4:
      dayStr = 'Четверг';
      break;
    case 5:
      dayStr = 'Пятница';
      break;
    case 6:
      dayStr = 'Суббота';
      break;

    default:
      break;
  }
  return dayStr;
};

const getWeekFromStart = (startStudy) => (((moment().week() - moment(startStudy, 'DD-MM-YYYY').week()) % 2 === 0) ? '2' : '1');

module.exports = { getWeekDay, getWeekDayString, getWeekFromStart };
