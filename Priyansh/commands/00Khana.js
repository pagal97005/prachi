 const fs = require("fs");
module.exports.config = {
	name: "Khana",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Arun", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 100, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("Khana") ||
     react.includes("khana") || 
react.includes("lanch")) {
		var msg = {
				body: "🍂🍂🍂🍂🍂",
				attachment: fs.createReadStream(__dirname + `/noprefix/khana.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("✅", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
