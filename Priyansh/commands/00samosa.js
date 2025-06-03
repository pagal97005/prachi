const fs = require("fs");
module.exports.config = {
  name: "Samosa",
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
  if(react.includes("Samosa") ||
     react.includes("SAMOSA") || react.includes("SamoSa") || react.includes("samosha") ||
react.includes("SaMosa") ||
react.includes("SAmosA")) {
    var msg = {
        body: `kha lo meri jaan🙈`,attachment: fs.createReadStream(__dirname + `/noprefix/samosa.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥞", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
