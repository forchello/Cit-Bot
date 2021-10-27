const moment = require('moment');

const UTC_OFFSET = -3;

const getTime = () => {
  const hour = moment().utc(UTC_OFFSET).hour();
  let minute = moment().utc(UTC_OFFSET).minute();
  if (minute < 10) {
    minute = `0${minute}`;
  }

  const fullTimeString = `${hour}:${minute}`;
  return fullTimeString;
};

module.exports = getTime;
