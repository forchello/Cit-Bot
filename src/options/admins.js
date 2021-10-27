const { bot } = require('../config');

const isUserAdmin = (userId, chatId) => {
  const newProm = new Promise((resolve, reject) => {
    let userName = '';
    let isAdmin = false;
    const admins = bot.getChatAdministrators(chatId);
    admins.then((res) => {
      res.forEach((el) => {
        if (!el.user.is_bot && el.user.id === userId) {
          isAdmin = true;
          userName = el.user.first_name;
        }
      });
    }).then(() => {
      resolve({ isAdmin, userName });
    });
  });
  return newProm;
};

module.exports = { isUserAdmin };
