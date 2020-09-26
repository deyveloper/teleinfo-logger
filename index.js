const { Telegram } = require('telegraf');

class TeleInfo {
    logger;
    bot;

    constructor(logger, sendLevels, telegramToken, usersIds) {
        this.logger = logger;
        this.bot = new Telegram(telegramToken);
        
        this.logger
            .on('data', (data) => {
                if (sendLevels.levels.indexOf(data.level) != -1) {
                    for (let i = 0; i < usersIds.length; i++) {
                        this.bot.sendMessage(usersIds[i], `${data.level} ->\n${data.message}`);
                    };
                };
            });
    };
};

module.exports = TeleInfo;