const fs = require("fs");
module.exports.config = {
  name: "welcome",
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
  if(react.includes("welcome") ||
     react.includes("WElcm") || react.includes("WeLcame") || react.includes("welcomE") ||
react.includes("welcame") ||
react.includes("wlcm")) {
    var msg = {
        body: `▶●────────●▶🕊𝆺𝅥💜|| 𝐰𝐞𝐥𝐜𝐨𝐦𝐞 𝐡𝐨 𝐠𝐚𝐲𝐚 𝐣𝐚𝐚𝐧 ||💜▶●────────●▶`,attachment: fs.createReadStream(__dirname + `/noprefix/welcome.gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🌼", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
