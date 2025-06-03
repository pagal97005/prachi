const fs = require("fs");
module.exports.config = {
  name: "coldrink",
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
  if(react.includes("COLDDRINK") ||
     react.includes("colddrink") || react.includes("ColDrInk") || react.includes("PePsi") ||
react.includes("coldrink") ||
react.includes("pepsi")) {
    var msg = {
        body: `💜|| 𝐓𝐮𝐦 𝐈𝐬𝐇𝐢 𝐋𝐚𝐘𝐚𝐤 𝐇𝐨 ||💜`,attachment: fs.createReadStream(__dirname + `/noprefix/coldrink.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥤", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
