const fs = require("fs");
module.exports.config = {
	name: "Aaru",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "ROWEDY KIING", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "Aaru",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Nadan")==0 || event.body.indexOf("Preet")==0 || event.body.indexOf("Ladu")==0 || event.body.indexOf("Nadan Bachi")==0) {
		var msg = {
				body: "ᴍʏ ᴄᴜᴛᴇᴇ ʙᴀʙᴜ Aaru🥰",
				attachment: fs.createReadStream(__dirname + `/cache/Nadan.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💝", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
