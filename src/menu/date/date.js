const moment = require('moment');

const getDate = () => {
  let date = moment().date();
  if (date < 10) {
    date = `0${date}`;
  }

  let month = moment().month() + 1;
  if (month < 10) {
    month = `0${month}`;
  }

  const year = moment().year();
  const fullDateString = `${date}.${month}.${year}`;
  return fullDateString;
};

module.exports = getDate;
