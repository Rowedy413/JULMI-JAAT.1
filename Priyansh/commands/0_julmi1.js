const fs = require("fs");
module.exports.config = {
	name: "imoge2",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "R0W3DY KIING", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("🫣") ||
     react.includes("😏") || react.includes("😔") || react.includes("😗") ||
react.includes("👀") ||
react.includes("🧐")) {
		var msg = {
				body: `😒😒`,
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😒", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
