module.exports.config = {
  name: "hotgirl",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "PREM BABU",
  description: "hot girls photos",
  commandCategory: "Random-IMG",
  usages: "Hot Girl",
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
"https://i.imgur.com/dggKc1D.jpeg","https://i.imgur.com/FAIaALf.jpeg","https://i.imgur.com/lNeDjYF.jpeg","https://i.imgur.com/HFipSyl.jpeg","https://i.imgur.com/Z999bfk.jpeg","https://i.imgur.com/ntCL39i.jpeg","https://i.imgur.com/mNwyVqZ.jpeg","https://i.imgur.com/GuuGzuP.jpeg","https://i.imgur.com/b5C4Ilm.jpeg","https://i.imgur.com/NAffKom.jpeg","https://i.imgur.com/4cIrOZO.jpeg","https://i.imgur.com/l7XkUBE.jpeg","https://i.imgur.com/jgzi6Bq.jpeg","https://i.imgur.com/S1StP3a.jpeg","https://i.imgur.com/HIB1WDK.jpeg"
         ];
         var callback = () => api.sendMessage({body:`★━━━━━━━━━━━━━★💜 𝐇𝐨𝐭 𝐌𝐰𝐥 🥵 💜 ★━━━━━━━━━━━━━★`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
          return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
       };
