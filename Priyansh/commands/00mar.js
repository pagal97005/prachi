const fs = require("fs");
module.exports.config = {
  name: "thopda",
    version: "1.1.1",
  hasPermssion: 0,
  credits: "PREM BABU", 
  description: "Just Respond",
  usePrefix: true,
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("maru") ||
     react.includes("thopda") || react.includes("tod") || react.includes("fodu") ||
react.includes("todu") ||
react.includes("repta")) {
    var msg = {
        body: `𝐇𝐚 𝐁𝐨𝐥 𝐊𝐲𝐚 𝐁𝐨𝐥 𝐑𝐚𝐡𝐚 𝐓𝐡e`,attachment: fs.createReadStream(__dirname + `/noprefix/maru.gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😡", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
