//@Prem-babu3608
////////////////////////////////////////////////////////
/////// WARNING => JO CREDIT NAME CHANGE KREGA USKA ID BAN KAR DIYA JAYEGA + THIS BOT IS MADE BT PREM BABU
const fs = require("fs");
module.exports.config = {
	name: "lOVE-YOU",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "PREM BABU", ////////////@prem-babu3608
	description: "THIS BOT IS MR PREM SHARMA",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("Love") ||
     react.includes("loVe") || react.includes("lOve") || react.includes("LOVe") ||
react.includes("love") ||
react.includes("LovE")) {
		var msg = {
				body: `😘 𝐋𝐨𝐯𝐞 𝐘𝐨𝐮 𝐦𝐞𝐫𝐢 𝐉𝐚𝐚𝐧 💋💋`,attachment: fs.createReadStream(__dirname + `/noprefix/love.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙈", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
