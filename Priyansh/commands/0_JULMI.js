 const fs = require("fs");
module.exports.config = {
	name: "Rowedy",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝗥𝟬𝗪𝟯𝗗𝗬 𝗞𝗜𝗜𝗡𝗚", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 100, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("𝗥𝟬𝗪𝟯𝗗𝗬 𝗞𝗜𝗜𝗡𝗚") ||
     react.includes("Boss") || 
     react.includes("BOSS") || 
     react.includes("ADMIN") ||
     react.includes("admin") || 
react.includes("Admin")) {
		var msg = {
				body: "★𝗢𝘄𝗻𝗲𝗿ﮩ٨ـﮩ💚💖ـ٨\n\n✦🌸===『*★🌸◉❖𝗥𝟬𝗪𝟯𝗗𝗬 𝗞𝗜𝗜𝗡𝗚❖◉✦\n\n𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐋𝐈𝐍𝐊 𝐌𝐄𝐑𝐄 𝐁𝐎𝐒𝐒 𝐊𝐀😁😋 https://www.facebook.com/rowedy.king.2025`",
				attachment: fs.createReadStream(__dirname + `/noprefix/Julmi.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("📷", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
