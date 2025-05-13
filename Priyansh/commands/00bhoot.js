module.exports.config = {
  name: "Bhoot",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "PREM BABU",
  description: "bhoot photos",
  commandCategory: "Random-IMG",
  usages: "bhoot dp",
  cooldowns: 2,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }

};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
      "https://i.imgur.com/O3w9rfy.jpeg","https://i.imgur.com/Qdmp3ur.jpeg","https://i.imgur.com/TUCL77W.jpeg","https://i.imgur.com/aW0yjtL.jpeg","https://i.imgur.com/qlk2hzU.jpeg","https://i.imgur.com/zZ369xs.jpeg","https://i.imgur.com/Z7NcgkG.jpeg","https://i.imgur.com/E3msrCy.jpeg","https://i.imgur.com/FB4L7S9.jpeg","https://i.imgur.com/IfMqV9z.jpeg","https://i.imgur.com/9fhNfiS.jpeg" 
    ];
         var callback = () => api.sendMessage({body:`╔══❀═══◄░❀ βΉΦΦτ ░►═══❀══╗•`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
          return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
       };
