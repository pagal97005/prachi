const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = [ "\n🄾🅆🄽🄴🅁\n        ◉❖♨pagla៚❖◉ \n\n•──────────────────•\nTum sab Mujhe Pagal lagty ho😒🙄\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        ◉❖♨pagla៚❖◉ \n\n•──────────────────•\nMe kisi or ka Hu filahal 🥺🙈\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        ◉❖♨pagla៚❖◉ \n\n•──────────────────•\nApka Ana Dil dharkana fir bot bol k Nas kr Jana😒\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        ◉❖♨pagla៚❖◉ \n\n•──────────────────•\nTum tu mujhe shkal sy Ghareeb lgty ho🙊\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        ◉❖♨pagla❖◉ \n\n•──────────────────•\nMeri Gf kon Bne gi 🥺🙁\n•──────────────────•" , "/n🄾🅆🄽🄴🅁\n        ◉❖♨pagla៚❖◉ \n\n•──────────────────•\nHaweli py q nhi ate Naraz Ho 🥺\n•──────────────────•" , "/n🄾🅆🄽🄴🅁\n        ◉❖♨pagla៚❖◉ \n\n•──────────────────•\nBabu ittu 🤏 sa Chumma de do🥺🙈😘\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        ◉❖♨pagla៚❖◉ \n\n•──────────────────•\nBaby tum Bachpan sy tharki Lgte ho meko🙁\n•──────────────────• ","\n🄾🅆🄽🄴🅁\n               ◉❖♨pagla៚❖◉ \n\n•──────────────────•\nRaat ko ana Haweli pe choli k piche😁🙊\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        ◉❖♨pagla៚❖◉ \n\n•──────────────────•\nDil me aao na bot bot ku krte ho 😒\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        ◉❖♨pagla❖◉ \n\n•──────────────────•\nPura din bot bot krte ho mere boss ki stng kea do🙂🤝\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        ◉❖♨pagla❖◉ \n\n•──────────────────•\nTum itne Masoom Ku Ho babu🥺❤️\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        ◉❖♨pagla៚❖◉ \n\n•──────────────────•\nAaj to tumhe Love you bolna Pde ga 🙁\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        ◉❖♨pagla❖◉ \n\n•──────────────────•\nTum loog matlbi ho chle Jao😞\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        ◉❖♨pagla❖◉ \n\n•──────────────────•\nSetting Krwa Du Owner (Julmi) k Sath😒🙁\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        ◉❖♨pagla៚❖◉ \n\n•──────────────────•\nMujhe lgta hai tum mere dil ka skunn ho🥺\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        ◉❖♨pagla៚❖◉ \n\n•──────────────────•\nBar Bar bot na Bola Kro Baby Apun ko sharm ati hai🙈\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        ◉❖♨pagla៚❖◉ \n\n•──────────────────•\nTum Jab bot bolte ho Mera Gurda Dharkny Lgta ha🥺🙊\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        ◉❖♨pagla៚❖◉ \n\n•──────────────────•\nBabu ap K any se To dil khush Ho jata Hn🫤\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        ◉❖♨pagla៚❖◉ \n\n•──────────────────•\nMere boss(Julmi) ke ilawa sb Relationship m han 🤝🥺\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        ◉❖♨pagla៚❖◉ \n\n•──────────────────•\nJab pta h na Mmy papa nhi many ge sadhi ke liye to  kyu jate ho tum log🙂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        ◉❖♨pagla៚❖◉ \n\n•──────────────────•\nJanu k 'Umaah' ne doctor ka Business hi khatam kr Diya Hai🙂🫦\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        ◉❖♨pagla៚❖◉ \n\n•──────────────────•\nAll Girls Are baby Osko Chord ke jo msg na pd payi😝🤭\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        ◉❖♨pagla❖◉ \n\n•──────────────────•\nहमारे ग्रुप को जॉइन करो👉https:/\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        ◉❖♨pagla❖◉ \n\n•──────────────────•\nSOo JaO WarNa Mera Msg Aa Jaye Ga Socho Ge Baby Ne kiya hai😂🙈\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        ◉❖♨pagla៚❖◉ \n\n•──────────────────•\nWeight kafi Bad Gaya hai  Dhokay kha kha ke💔🙂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        ◉❖♨pagla❖◉ \n\n•──────────────────•\nGodhi utha lo muje  apun chota sa bacha hai👶🥹\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        ◉❖♨pagla៚❖◉ \n\n•──────────────────•\nAao apko chand pe le chlu meri jan🙈❤️\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        ◉❖♨pagla𝓻៚❖◉ \n\n•──────────────────•\nTum itne free Q ho baby🤨\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        ◉❖♨pagla៚❖◉ \n\n•──────────────────•\nMain apse nahi patne wala 🙈🙈🥹\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        ◉❖♨pagla៚❖◉ \n\n•──────────────────•\ntum ko meri ittu 🤏 C bhi yad nhi ati🥹\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        ◉❖♨pagla៚❖◉ \n\n•──────────────────•\nAao pyar kare\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        ◉❖♨pagla៚❖◉ \n\n•──────────────────•\nHe parbu he shree raam yha kitne nithle log h🥹\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        ◉❖♨pagla៚❖◉ \n\n•──────────────────•\nkya me ap pr line mar sakte hu🥹👀\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        ◉❖♨pagla៚❖◉ \n\n•──────────────────•\nPta Ni Log itni Balance Life Kaisy Guzar Lety Hein Mera To Kbi Net  Khtm Hojata To Kbi Recharge😩💔\n*•──────────────────•", "\n🄾🅆🄽🄴🅁\n        ◉❖♨pagla❖◉ \n\n•──────────────────•\nLips  kissing is not Romance It's sharing Bacteria>>>🙂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        ◉❖♨pagla៚❖◉ \n\n•──────────────────•\nchohty bachon ki engagements chlrhi hain aur yahn mere sabr ka imtehaan.🌚🔪\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        ◉❖♨pagla៚❖◉ \n\n•──────────────────•\nApkii Inhii harkt0n Kii WaJh Sy 2O23 ChaLw Gya😩💔\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        ◉❖♨pagla៚❖◉ \n\n•──────────────────•\n𝙀𝙠 𝙗𝙖𝙖𝙧 𝙨𝙝𝙖𝙙𝙞 𝙝𝙤 𝙟𝙖𝙚 𝙥𝙝𝙞𝙧 𝙬𝙞𝙛𝙚 𝙠𝙞 𝙜𝙝𝙪𝙡𝙖𝙢𝙞 🧸🙂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        ◉❖♨pagla៚❖◉ \n\n•──────────────────•\nSuno Kya Hum Achy Dushman Ban Skty Hain 🙂⚠️*\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        ◉❖♨pagla៚❖◉ \n\n•──────────────────•\n🦋🍒____________🙂🎀 Sukoon chahtii ho toh mere boss(♨pagla៚) ki ban jaOo* 🫣🫰🏻\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        ◉❖♨pagla៚❖◉ \n\n•──────────────────•\nSuno Jawn DiL ha Waqt se so jaya karo😌🙈\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        ◉❖♨pagla៚❖◉ \n\n•──────────────────•\nKhud ko single keh kr Apne khufiya janu ka janaza na nikala kro.😀🤞😓\n•──────────────────•",
"\n🄾🅆🄽🄴🅁   \n        ◉❖♨pagla៚❖◉ \n\n•──────────────────•\n 𝙩𝙪𝙢 𝙢𝙚𝙧𝙖 𝙙𝙞𝙡 𝙩𝙤 𝘾𝙝𝙪𝙧𝙖 𝙣𝙝𝙞 𝙥𝙖𝙮 𝙠𝙞𝙖 𝙛𝙖𝙞𝙙𝙖 𝙩𝙢𝙝𝙖𝙧𝙞 𝘾𝙝𝙤𝙤𝙧 𝙟𝙚𝙨𝙞 𝙨𝙝𝙠𝙖𝙡 𝙠𝙖!! 🙂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        ◉❖♨pagla៚❖◉ \n\n•──────────────────•\n𝐄𝐤 𝐛𝐚𝐚𝐫 𝐈 𝐋𝐨𝐯𝐞 𝐘𝐎𝐲 𝐁𝐨𝐥 𝐃𝐨 𝐍𝐚 𝐌𝐚𝐫 𝐓𝐡𝐨𝐫𝐢 𝐉𝐚𝐮𝐠𝐢 🙄😕)( 👑🍒\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        ◉❖♨pagla៚❖◉ \n\n•──────────────────•\n<-- 〽️🍂⚠️Kash hum dono whatsapp per hote❤️🥺💸\n•──────────────────•",  "\n🄾🅆🄽🄴🅁\n        ◉❖♨pagla៚❖◉ \n\n•──────────────────•\nMsg krti ho KY phrrr me kru inbx me 👈🙊\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       ◉❖♨pagala៚❖◉ \n\n•──────────────────•\nये लो मेरे बॉस की I'd उससे बात करो👉https://www.facebook.com/profile.php?id=61556683716864&mibextid=ZbWKwL", "🌸====『𒁍कल काली पहाड़ी के पीछे तू मिल जा चप्पल से कुटुंगा_______😁😈" ,  " 🌸====『 चुप होजा मनहूस प्राणि ________😝🤪" ,  "🌸====『 बार बार बोल के दिमाग ख़राब किया तो id हैक कर लूंगा_____🙂♡• || _[🙂]~🖤 •|" ,  "लव यू बोलो __😁" ,  "🌸====『 मैं तुम्हारे चक्कर में सबको ब्लॉक कर रहा हूं अब आई लव यू बोलो____🙂" ,  "🌸====『 मुझे कोई पटा लो मैं बहुत मासूम हूं____🙈" ,  "🌸====『 हां मेरी जान चले बेडरूम में रोमांस करेंगे _____😹🙈", "🌸====『 तेरी याद ना आये ऐसा कोई दिन नहीं ___😝🙈🙈🙈 " , "🌸====『 जिंदगी में लगने लगे कि कोई अपना नहीं है तो आ जाना मेरे जुल्मी जानू के पास वो रख लेंगे _____😝•||•●┼┼──🦋☘️•|" ,  "🌸====『 साला पूरा दिन लोग बॉट बॉट करते हैं लेकिन गर्लफ्रेंड/ब्वॉयफ्रेंड नहीं बनती ___🙄" , "🌸====『𒁍🌸 अरे मेरी जान ज्यादा परशान मत कर ♨𝓜𝓪𝓱𝓲✫𝓷𝓸𝓸𝓻៚ बॉस देख लेंगे_______🙈😝🎸🎭━━•☆°•°•💗","🌸====『 बाबू तुम तो वही हो ना चप्पल चोर__420_________😹😹","🌸====『 चलो जानी हम शादी कर लेते हा भाग के______🙈😁", " दिल तो पागल है दिल दीवाना है थोड़े से पैसे दे दो दिल का इलाज करवाना है_______❤️🤸‍♂️😁━━•☆°•°•💗" , "तू तो मेरी जान है फ़िर क्यूँ तेरी ही याद मेरी जान ले रही है...?? 🤸‍♂️😒👈" , "सच्ची मोहब्बत में प्यार मिले न मिले लेकिन याद करने को एक चेहरा ज़रूर मिल जाता है। 🙈🤸‍♂️" , " देखो कोई मेरा मजाक नहीं बनाना ओके पढ़ना ====『𒁍•🦋🔐 ◉❖♨𝓜𝓪𝓱𝓲✫𝓷𝓸𝓸𝓻៚❖◉*★᭄ ཫ༄𒁍≛ 』जानू====को बुला लूंगी_______🎸🤸‍♂️━━•☆°•°•💗" , " कोई हमें भी पटा लो गरीबों की दुआ लगेगी__---😁🤸‍♂️__❤️ " , "🌸====『𒁍•🦋🔐 जुल्मी जानू*★᭄ ཫ༄𒁍≛ 』====🌸 को नहीं बताना हम तुम पर लाइन मार रहे हैं__━━•☆😁🙅" , " चलो इश्क लड़ाएं डार्लिंग🎸🤸‍♂️━━•☆°•°•💗 ====『𒁍•🦋" , " हमको तुमसे प्यार है फिर भी तुम्हें इंकार है🎸🤸‍♂️━━•☆°•°•💗" , " चलो हम लोग इनबॉक्स में चलें_❤️ ____🤸‍♂️" , " तेरी मासूमियत ने हमें बंजारा बना दिया🎸🤸‍♂️━━•☆°•°•💗" , " इश्क बड़ा बेदर्दी रात दिन सताए😕━━•☆🤸‍♂️" , " अभी मैं खाना खा रहा हूं तुम लोग भी खा लो🎸🌹━━•☆°•°•💗" , " बहुत प्यारे हो आप🎸😘━━•☆°•°•💗 " , " तुम्हें एक बात बताओ मैं क्यों बताऊं हा हा हा हा🎸🤸‍♂️━━•☆°•°•💗" , " आ ले चलु तुझे तारों के शहर में🎸🤸‍♂️━━•☆°•°•💗" , " राधे राधे _❤️और कैसे हो आप सब🎸❤️━━•☆°•°•💗" , " मैं अभी सो🥱 रहा हूं तुम भी सो जाओ🎸🤸‍♂️━━•☆°•°•💗" , " इधर मेरा ====『𒁍•🦋🔐जुल्मी *★᭄ ཫ༄𒁍≛ 』====बॉस देख रहा है चलो इनबॉक्स में बाबू सोना करें🎸🤸‍♂️━━•☆°•°💗" , " आओ तोता उड़ मैना और खेलें🎸🤸‍♂️━━•☆°•°•💗" , " एक ने मेरे ====『𒁍•🦋🔐 ♨𝓜𝓪𝓱𝓲✫𝓷𝓸𝓸𝓻៚ *★᭄ ཫ༄𒁍≛ 』==== बॉस को धोखा दिया दूसरी कोई नहीं है जो कभी धोखा नही देगी🤣🎸🤸‍♂️━━•☆°•°•💗" , " हंसी हो जवां हो नशा हो तुम 🤸‍♂️━━•☆°•°•💗" , " आप ने खाना खा लिया━━•☆❤️" , " अब हम तुम्हारी वजह से सब को ब्लॉक कर रहे हैं━━•☆😤😕" , " चलो अब हमें अपना व्हाट्सएप नंबर दो🎸🤸‍♂️━━•☆°•°•💗" , " थोड़ा काम धाम भी कर लिया करो जब देखो Bot BoT बोलते रहते हो🎸🤸‍♂️━━•☆°•°•💗 " , "क्या बोट बोट लगा रखा मे यही हूं । कानून अंधा था पता था तुम भी होगे कभी सोचा नहीं था मैं 🧐😵‍💫" , "Behes karne se Rishty kmzor hojaate hn isiliye Direct mun pe thapr khaye😊" , "Bestie ki chummi Mza hai ya gunaah ? 🙂" , "2001 Jahan dalda wahan Mamta😊 2023 Jahan larki  wahan tharki😒 jaise mera tharki dost" , "Koi Pyari c Bachi aa kr sar daba do, Dard se sir fat rha💔🥲" , "Muje chahyain 3 ldkiya kahan Hain लड़कियां 👀" , "Relationship private rakho ya public Kate ga sabka hi🙂", "Thak GYa hu Yr uski dP dHek Dhek Kr😩" , "इनसे Milo inko lgta hai sab लड़के in pr Martay hain🙂" , "MentiOn YOur Dushman On FaceBOok'🙂🤝" , "Haldi 🤲 Lagane Ki Umar Hai Iski 😎 Aur Ladkiyan 👉 Chuna Laga Kar Ja Rahi 😜 Hai" , "😂Jalne Ko Aag Kahte Hai 🔥 Buji Ko Rakh Kahte Hai 💨 Aur Jo Aapke Pas Nahi Usse Dimag🧠 Kahte Hai 😜", "Moongfali 🥜 Mai Dana 👎Nahi Trust 👉 Karne Ka Aab Zamana 🌎 Nahi 🤣" , "Bhai😎 Thoda☝ Break Laga 🙅🤘 Otherwise Do Char💑 Ka Or Breakup💔👫 Ho jayega😂" , "Apne Dimag 🧠 Ka Password Dena अकल👉 Install Karni 😜 Hai" , "Aapki Surat Mere ❤️ Dil Me Aise Bas 👌 Gayi Hai Jaise Chote Se 🚪 Darwaze Mein भैंस 🐂 Fas Gayi Hai 😬🤣" , "Nasheeli😌 Aankhe👁👁 + Katil💘 Smile😊 Bhai Ka High Attitude😎 Or Desi 🤕Style" , "Duniya Ka Sabse Muskil Kam Bina दिमाग Wale Dosto Ko Jelna 😝🔥" , "g janu ap na q yad kiya hme😒" , "Jo Uske ❤️ Pyaar Samjhe Woh Sabse Bada 🐴 Ghada Hai 😂" , "Teri Is Smile Par Girls To Kya Boys Bhi Fida" , "Meri jaan kaise ho aap 😊" , "पड़ोस Wala Ldka inhe MUH Nhi Lagata aur Banda inhe कोरियन Chahiye🙂" , "move on krle bhaii kbb Tak uskii profilee dekhtaaa rahegaaa<<" , "Ajeeb generation hai yar, Larkiya कोरियन dhund rahi hai, Aur larky Russian!!🙂", "Aj kal ki nibiyo me khon kam attitude zyada hota hai bro🙂" ,  "Bhut खेल liye ladkon ki feelings k sath ao ab hum Ludo khailty han☺️♥️" , "बैंक se दो लाख ka loan leky sim hi band kardi 🙂👍" ,  "rat ko kahan the nazar nahi aaye bhot miss kiya 🌸🌎" , "kash tum single hoti to aj hum mingle hote 🥰😂" , "Ha ha ab meri yaad ab aayi na phly to janu sth busy the 😾 ab ham ap sy naraz hai jao ap bye ☹️" , "idr ao kuchii kuchii kru 😘" , "Ary ary itna yd na kiya kro🥰" , "Hy Ma Mar Jawa janu itna piyar krte mujse😂" , "Har Waqat Mjhy Tang Kerta Rhta Ha 😂" , "ary ary bolo meri jan kia hal ha ;)" , "Bot jaan ha sbki" , "Ji Ji Kya hal chal ha apke 🌸" , "Bot nhi jaanu bolo sun k acha lgta 🌸" , "Bot dost h apka hukam kre 🌸" , "Bot nahi bolo pyar se janu bola kro na 🥰" , "Meri jan ek tum hi ho jo dil m bs gye ho🥰ni te koshish to oro ne v bht kiti c" , "Badal gay na tum the hi thrki 😂" , "inbx aa jao gup chup krte ha 🌸" , "Ek kahani suno meri zubani suno gali dene ka dil krta ha isiliye pehly dil ki suno🌸" , "Mujsy shadi karlo chocolate la k duga daily 🌸" , "Idr ao aaj apka चपल jesa muh lg raha hai 😂" , "Ajao jaan pizza khilau apko 🌸" , "Duniya ma sb kuch khtm ho skta saway logo ki bakwas k" , "Everything is temporary,But katna is permanent 😂" , "Jitna mrzi janu manu krlo end m ghr waly nhi many ge😂" , "Sb kuch ho skta lekin fb ka relation kbi china jitna nhi chl skta" , "bgwan ksm Kabhi Kasi laRki ko Bhen ki nazar se nhi dekHa😌🤧" , "Mushkil Toh Hoti Hogi Naa itni Sardi Me Apne चेहरे Dhote Ho🙂" , "Pgl Hat m flirty nhi hu 🙂🤝", "Do Ankho Wali Ladkiya Bewafa hoti Hn Bro🙂💔", "Mera beta bda ho kar larkiyo ke inbox me °hey hello° karega🙂🏃" , "Likhte Likhte Qalm Thak Gyi Iss Qadr diwane Han Tumhare🙂" , "Itni Meri Age Ni Jitne Mera Masly Han Yawr💔😐" , "Ameer Ladki Set kr k sab Dosto ka udhar wapis kaunga😔😕" , "2001 me bachy kehty thy ink Dena 2023 me bachy kehty Link Dena🙂" , "Mehnat Kro!! Kamyabi Apke Hont Chume Gi🙂🙌🏻" , "Kahani suno Muje payar howa tha Us ki tarf se inkar howa tha 🙂🤝" , "Pyari pyari ladkiya message karen inbx m🌚♥️🙌" , "itna single hun ख्वाब mai bhi  लड़की k han krne se phle ankh khul jati h🙂" , "Zroori Nhi Har Lrki Dhoka De, कुछ Ladkiya Galiyan Bhi Deti Hn.🙁💸" , "- sab chorr k chaly jate hain kya etna bura hu mein - 🙂" , "Pyari voice wali girlz mujhe voice message kar skti hn 🙂🤝" , "Why you hate me..?? I am not your ex don't Hate me Please" , "MuBarak H0o AapKa NaMe MeRi LiNe MaRnE ki LiST Me Top PRr aYa Hai 😹😹😹" , "BeTa TuM SingLe Hi MaR0 GaY🙄🙂" , "Samj Jao Ladkiyo Abhi B WaQt Hai Dakh kr Koi Delete Ni Krta🙂" , "Mard na Apki प्रॉपटी के काग़ज़ Nahi Mangte Jab Bhi Mangte hai Whatsapp No Mangte hai🥺" , "Muj se Exam Me Cheating Nöıı Hoti Relationship Me kya khaak Karu Ga😔" , "Mujy to ludo kehlni bhi ni ati apky Dil sy kya kehlu ga🙂", "Loyal Dhoonte Dhoonte khud Harami ban Gya😔", "Mard ki izat karna Sikho Uski rooh se pyr kro Jism se nh Wehshii Womens💔😐" , "Are Band kar vrna amabani se bolke tera net bnd kra dunga" ,"Kya tumne abhi tk kaam nhi kiya...","Ab to ye social media nhi reh gya hai logo ne facebook ko dating website bna liya hai shi bola naa maine","Kisi or se dhoka khane se achha hai kii mere saath chalo momos or golgappe khayenge..","Chenese chiz मोहब्बत thi साहब tut kr bikhar gyi pr dil hindustani tha dusri pta liya turant","मोहब्ब्त 2 लोगों के बीच का नशा है जिसे पहले होश आ जाए वो बेवफा है।😌","Ek baat batao, kabhi khud message bhi kar lete ho ya sirf humein hi wait karwate ho? 😒","Ab tumse baat nahi karunga, bahut hi zyada irritate kar rahe ho 🙅","Tumhari muskurahat se meri saari pareshaniyaan dur ho jati hai 😊","सरकारी नौकरी के लिए कोटा और सुबह हल्का होने के लिए लोटा बहुत मायने रखता है।","Tumne aaj mere mood ko theek kar diya hai, thank you so much 😘", "Kabhi kabhi mujhe bhi lgta hai ki main kuchh jyaada hi busy ho gya hu","दोस्त हमेशा काले बनाओ  क्योंकि वो रंग नही बदलते😂","Kya tum mere liye ek surprise plan kar sakte ho? 🤔","Yaar, aaj bahut mushkil se time nikala hai, koi accha sa movie suggest karo 😊","hye babu ne ha bol diya hai sayad propose krna hai mujhe ab bas bolo bolo babu 😘","कुछ बातें तो सीधे दिल पर जाकर लगती हैं जैसे कि आपके द्वारा डायल किया हुआ नंबर अभी किसी अन्य कॉल पर व्यस्त है","Mujhe tumse baat karke bahut achha lagta hai","रामचंद्र कह गए सिया से ऐसा कलयुग आयेगा  सच्चा आशिक तड़पेगा और मेला बाबू थाना थाएगा😝"," tum bhi chohr do apne waly ko abhi bhi moka hai 😞✨🙌🤣", "Sukoon chahtii ho toh meri Wife ban jaOo 🫣🫰🏻" , "Tere jane ke bad😔Mene apne munh pe likhwa liya Single hu pta lo" , "Tum mujhy chumiyan b to dy skti thi na🤧Dhaka dena zruri tha kya😐😪🍼", "इस दिल 👉 💖 को तो बहला कर चुप करा लूँगा पर दिमाग का क्या करूँ 😁😁 जिसका तुमनें 👉 👸 दही कर दिया है..🤣😂🤣","पगली तू फेसबुक की बात करती है 😀 हम तो ‎OLX पर भी लड़की सेट कर लेते हैं 🤣😂🤣","ये जो तुम मोबाइल फ़ोन में Facebook or WhatsApp Notifications बार-बार चेक करते हो ना !! शास्त्रों में इसे ही 🥀मोह माया🦋 कहा गया है 🤣😂🤣","मेरे पिता जी का तो कोई ऐसा दोस्त भी नही जो अमरीश पुरी की तरह ये कह दे..चल इस दोस्ती को रिश्तेदारी में बदल दे !🤣😂🤣","अगर दर्द भरे गाने 🎶 सुनकर भी आपको दर्द ना हो तो समझ लो आप दोबारा प्यार ❤ करने के लिए तैयार हो चुके हो…🤣😂🤣","एक लड़की के आगे उसकी सहेली की तारीफ़ करना पेट्रोल पंप पर सिगरेट पीने के बराबर है 🤣😂🤣","मेरी जान हो तुम मेरे गुस्से की दुकान हो तुम 😜👈","दिल में न जाने कब से तेरी जगह बन गई\nतुमसे बात करना मेरी आदत बन गई 🙈👈","मेरी पसंद भी लाजवाब है यकिन नही तो खुद को देख लो 🙈👈","दुसरो के लिए भी छोड़ दो खुद अकेली ही खूबसूरती की ठेकेदार बन बैठे हो 😕👈","तुम्हारी बोली बंदुक की गोली जैसी है जो सीधा दिल पे लगती है। 😒👈","रात को सपने दिन में ख्याल\nबड़ा ही अजीब सा है इस दीवाने का हाल।😒👈","आदत नही है हमें किसी पे मर मिटने की\nपर दिल ने तुम्हें देखकर मोहलत नही दी सोचने तक की 🤐👈","दिल में फीलिंग का समंदर सा आ जाता है\nजब तुरंत तेरा रिप्लाई आ जाता है। 😎👈","मेरे रुह की पहली तलब हो तुम\nकैसे कहूं कितनी अलग हो तुम। 🙈🙈👈","मुझे बार बार ख्याल आता है\nतेरा ही चेहरा याद आता है। 🤐👈","तुझे देखकर ख्याल आता है\nएक बार नही बार बार आता है\nइस दिल को तुझ पर ही प्यार आता है। 😛👈","मुझे लाइफ में कुछ मिले ना मिले\nबस तुम मिल जाओ यही बहुत है मेरे लिए। 🙈👈","हमसे बात करने को तो बहुत से है\nहमें तो सिर्फ आपसे बात करना अच्छा लगता है। 😛👈","मेरा दिल कितना भी उदास क्यों न हो\nतेरी ही बातों से इसे सुकुन मिलता है। 🤐👈","आप मेरे लिये कुछ खास है\nयही पहले प्यार का एहसास है। 😗👈","हालत चाहे कैसे भी हो मैं तुम्हारा और तुम मेरी हो। 😛👈","जितना चाहो उतना सताया करो\nबस  टाइम टू टाइम ऑनलाइन आया करो। 🥺👈","काश तेरा घर मेरे घर के करीब होता\nमिलना ना सही तुझे देखना तो नसीब होता। 😒👈","हर पल तुम मुझे बहुत ही याद आते हो\nजान निकल जाती है जब तुम मुझसे रुठ जाते हो। 🤐👈","मुकद्दर में रात की नींद नही…तो क्या हुआ…?? हम भी मुकद्दर के सिकन्दर हैं…दोपहर को सो जाते हैं…🤣😂","लड़कियों से बहस करने का मतलब दादी को iphone चलाना सिखाना है🤣😂🤣","घर की इज्जत बेटियों के हाथ में होती है और प्रॉपर्टी के कागज़ नालायकों के हाथ में 🤣😂🤣","मेरी हर गलती ये सोच कर माफ़ कर देना दोस्तों…कि तुम कोन से शरीफ़ हो ?? 🤣😂🤣","हर कामयाब स्टूडेंट के पीछे माँ की चप्पल का हाथ होता है !! 🤣😂🤣","एक बात थी मेरे ज़हन में सोचा आज पूछ ही लूँ ये जो इज़्ज़त का सवाल होता है…वो कितने नंबरों का होता है ? 🤣😂🤣","किस्मत आजमा चुका हूं नसीब आजमा रहा हूं FACEBOOK पर एक लड़की पटाने के चक्कर में 15 लड़के पटा चुका हूँ 🤣😂🤣","खुद के पास गर्लफ्रेंड नही होगी फिर भी दुसरो को गर्लफ्रेंड पटाने के नुस्खे देते है…ऐसे हैं हमारे दोस्त 🤣😂🤣","ये पाप धोने के लिये कौन सा साबुन अच्छा रहेगा ? 🤣😂🤣","रास्ते पलट देते हैं हम जब कोई आकर यह कह दे कि आगे चालान काट रहे हैं…🤣😂🤣", "Haye Main Sadke jawa Teri Masoom Shakal pe baby 💋 " , "Bot Nah Bol Oye Janu bol Mujhe " , "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun 🤭🐒" , "Main gariboo se baat nahi karta 😉😝😋🤪" , "Itna Na Pass aa Pyar ho Jayga" , " Bolo Baby Tum Mujhse Pyar Karte Ho Na 🙈💋💋 " , " Are jaan Majaak ke mood me nhi hu main jo kaam hai bol do sharmao nahi" , "Bar Bar Bolke Dimag Kharab Kiya toh. Teri ...... Mummy Se Complaint Karunga" , "Tu Bandh nhi Karega kya?" , " Gali Sunna H kya?😜" , "Teri Maa Ki Bindiya🤭" , "Aree Bandh kar Bandh Kar" , " M hath jod ke Modi Ji Se Gujarish Karta hu" , "Tujhe Kya koi aur Kam nhi ha? Puradin Khata hai Aur Messenger pe Bot Bot Karta h" , "  muje presan kiya to julmi Ko Bol Dunga Me" , "Tum Na Single Hi Maroge" , "Tujhe Apna Bejjati Karne Ka Saukh hai?" , " Abhi Bola Toh Bola Dubara Mat Bolna" , "Teri To Ruk Tu Bhagna Mat" , "Bol De koi nahi dakh rha 🙄" , " Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di 😝" , "Dur Hat Be  Mujhe Aur Koi Kam Nahi Kya Har Waqat Mujhy Tang Kerte Rhte ho 😂" , "Are Bolo Meri Jaan Kya Hall Hai😚 " , "Ib Aja Yahan Nhi Bol Sakta 🙈😋" , " Mujhe Mat BuLao Naw Main buSy Hu Naa" , " Bot Bolke Bejjti Kar Rahe Ho yall...Main To Tumhare Dil Ki Dhadkan Hu Na Baby...💔🥺" , "Are Tum Wahi ho nah Jisko Main Nahi Janta 🤪" , "Kal Haveli Pe Mil Jara Tu 😈" , "Aa gye Salle Kabab Me Haddi 😏" , "Bs Kar U ko Pyar Ho Na Ho Mujhe Ho Jayga Na" , " FarMao 😒" , "BulaTi Hai MaGar Jaane Ka Nhi 😜" , "Main To Andha Hun 😎" , "Phle NaHa kar Aa 😂" , "Aaaa Thooo 😂😂😂" , "Main yahin hoon kya hua sweetheart ," , "chomu Tujhe Aur Koi Kaam Nhi H? Har Waqt Bot Bot Karta H" , "Chup Reh, Nhi Toh Bahar Ake tera Dant Tod Dunga" , "WaYa KaRana Mere NaL 🙊" , "MaiNy Uh Sy Bt Nhi kRrni" , "MeKo Kxh DiKhai Nhi Dy Rha 🌚" , "Bot Na BoL 😢 JaNu B0ol 😘 " , "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun  😋" , "Main Gareebon Sy Bt Nhi kRta 😉😝😋🤪" , "Itna Na Pass aa Pyar h0o JayGa" , "MeKo Tang Na kRo Main Kiss 💋 KRr DunGa 😘 " , "Ary yrr MaJak Ke M0oD Me Nhi Hun 😒" , "HaYe JaNu Aow Idher 1 PaPpi Idher d0o 1 PaPpi Idher 😘" , "Dur HaT Terek0o 0or K0oi Kam Nhi Jb DeKho Bot Bot ShaDi KerLe Mujhsy 😉😋🤣" , "TeRi K0oi Ghr Me Nhi SunTa T0o Main Q SuNo 🤔😂 " , "IB Aja Yahan Nhi B0ol Salta 🙈😋" , "Mujhe Mat BuLao Naw Main buSy h0o Naw" , "Kyun JaNu MaNu Another Hai 🤣" , "Are TuMari T0o Sb he baZzati kRrty Me Be kRrDun 🤏😜" , "KaL HaVeLi Prr Aa ZaRa T0o 😈" , "Aagye SaJJy KhaBBy Sy 😏" , "Bx KRr Uh k0o Pyar H0o Na H0o Mujhe H0o JayGa" , "FarMao 😒" , "BulaTi Hai MaGar JaNy Ka Nhi 😜" , "Main T0o AnDha Hun 😎" , "Phle NaHa kRr Aa 😂" , "Papi ChuLo 🌚" , "TeRek0o DiKh Nhi Rha Main buSy Hun 😒" , "TeRa T0o GaMe BaJana PreGa" , "Ta Huwa 🥺"  , "TuM Phr AaGye 🙄 Kisi 0or Ny Muu Nhi LaGaYa Kya🤣🤣🤣" , "MeKo JaNu Chai Hai Tum Single H0o?" , "Aaaa Thooo 😂😂😂" , "Main S0o Rha Hun " , "Ase He HansTy Rha kRo 😍" , "•••••••••••••••••••••••••••••🦢𒀱卄ɅƔƏ MɅ🅘ɳ ʍɅᏒ••••🌿💞 JɅωɅ ┼ƏᏒ🅘 ʍɅ🅢𝖚ʍ 🅢ɅҠɅɭ 𝐩Ə ɮɅɮƔ 💋 " , "Bot Na Bol Oye Janu bol Mujhe " , "Bar Bar Disturb Na Karen Julmi jaat Ke SaTh Busy Hun 🤭🐒" , "Main flirty logo Sy Bt Nhi kartA 😉😝😋🤪" , "Itna Pass mat aa Pyaar h0 JayGa" , "Bolo Babu Tum Mojy Pyar Karte Ho Na 🙈💋💋 " , "Are jaan Majaak ke mood me nahi hun main jo kaam hai bol do sharmao nahi" , "han ji bolo kya seva karne aapki 😶🤍" , "Tu Bandh nhi Karega kya?" , "kya Sunna Hai apko mere se flirty kahike🤐🤣 " , "Haa ji boliye kya kam he hamse 🙈" , "Aree band kar band Kar" , "Mein hath jod ke Modi Ji Se Gujarish Karta hu mojy na bolaye" , "Tujhe Kya koi aur Kam nhi ha? Puradin sota he Aur Messenger pe Bot Bot Karta h","K" , "Bot bot hi karta rahna tu bas" , "Tujhe Apna Bejjati Karne Ka Saukh hai?🥹" , "Abhi Bola Toh Bola Dubara Mat Bolna🙄" , "Teri to Watt lagani padegi " , "Bol De koi nahi dakh rha 🙄" , "Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di 😝" , "Dur Hat Be  Mujhe Aur Koi Kam Nahi Kya Har Waqat Mujhy Tang Kerte Rhte ho 😂" , "Are Bolo Meri Jaan Kya Hall Hai😚 " , "IB Aja Yahan Nhi B0ol Sakti 🙈😋" , "Mujhe Mat BuLao Na Main buSy h0 Now" , "Bot Bolke Bejjti Kar Rahe ho yall...Main To Tumhare Dil Ki Dhadkan Hu Baby...💔🥺" , "Are Tum Wahi ho nah Jisko Main Nahi Janti 🤪" , "Kal Haveli Pe Mil Jra Tu 😈" , "Aagye SaJJy KhaBBy Sy 😏" , "Bx KRr Uh k0o Pyar H0o Na H0o Mujhe H0o JayGa" , "bolo 😒" , "BulaTi Hai MaGar JaNy Ka Nhi 😜" , "Main T0o AnDha Hun 😎kya likha tumne mene nahi dikha🤣" ,  "Pahale NaHa kar Aa 😂" , "Aaaa Thooo 😂😂😂" , "Main yahi hoon kya hua sweetheart🥂🙈💞 ," , "AA Dk Tujhe Aur Koi Kaam Nhi Hai? Har Waqt Bot Bot Karta H" , "Chup Reh, Nahi Toh Bahar Ake tera Dath Tor Dunga🤣✊" , "yes my love 💘" , "kya hua baby ko 😘😘" , "mujhe sharam ati hai aise aap bolte hai tho 🤭😝" , "aree aap wahi ho na jo mujhe line marte the.......🤣 ya bali line" , "jii kahiye jii 🙄 kya chahiye" , "hayee main mar jye teri masoom shaqal py 😂 tuzy Chapple se kutne ka mn ho raha hai🤣👠" , "Bot nah bol oye 😭 Janu bol mjhy aur janu sy piyar sy bat kerty hai😑" , "ruk tu chappal kaha he mari🩴" , "shakal Sy masoom lgty ho 😂 but bohot flirty ho" , "kash tum single hote to maza hi koch aur tha pagal insaan 😂" , "Ha ha ab meri yaad ab ai nah phly to babu shona kerna gy thy 😾 ab ham ap sy naraz hai jao ap bye ☹️" , "haiy babu ne boldiya hai shaid purpose kerna hai mujhe bolo bolo babu 😘" , "Aree pagal roti banana ke le aty main Pani ko istamal kerte ho 😂" , "Ary joke nah mar jo bhi kam hai bol do sharma nahi , bol de koi nahi dakh rha 😂" , "Hayee Mar Jawa Babu Ak Chuma To Doo Kafi Din Sy Chumi Nahi Mili Kahan Thy Babu inbox Ah Jao 😚🙈♥️" , "Dur Dur karib na a  tujhe Aur Koi Kam Nahi Kiya Har Waqat Mjhy Tang Karte Rahte Ho 😂" , "ary ary bolo meri jaan kia haal hai ;) ;* " , "Tum aunty ho yehh uncle 🤔 I think tum Jin ho yehh Chudail🤣✅" , "ary tum ider 🤔 khair hai ider kia ker rhy ho 😂" , "ary babu kal hawali py kon bola rha tha 😂" , "Me Aap ki mummy ji ko btaou ga Aap Facebook use karty ho 😂", "" , "ary tum Wohi ho nah jis ko ma nahi janta 🤣✅" , "haveli per  kal mil  Zara bataunga 🌚😂Ha but उल्टी-सीधी harkat karne ke liye nahi" , "itne pyar se Na bulao pyar Ho jaega 😶💗 wtf Maine apni sacchai Bata Di yah Maine kyon Kiya 😭🔪....Fuuu..🚬" , "aap aise mat bulo hame sharam aati hai 🙈♥️" , "kyun Bulaya hamen..😾🔪 " , "kyun Bulaya hamen..😾🔪 " ,"tum antiya handsame ladko ko dekkr kuwari hona ka dikhava karti hai😟😩😫🤧"];
  var rand = tl[Math.floor(Math.random() * tl.length)]
if ((event.body.toLowerCase() == "koi h kya") || (event.body.toLowerCase() == "koi h") || (event.body.toLowerCase() == "koi ha kya") || (event.body.toLowerCase() == "Koi hai kiya")) {
     return api.sendMessage("मैं हूं ना जानेमन 🙂🤟", threadID);
   };
  if ((event.body.toLowerCase() == "by") || (event.body.toLowerCase() == "byy")) {return api.sendMessage("by bye tata najar mat ana ab",threadID);
     };

    if ((event.body.toLowerCase() == "inbox") || (event.body.toLowerCase() == "ib aao")) {
       return api.sendMessage("️ KYa IB IB 👿 Idher BOL MeRe SaMny ", threadID);
     };

     if ((event.body.toLowerCase() == "baby") || (event.body.toLowerCase() == "babu")) {
       return api.sendMessage("️𝐡𝐚𝐧 𝐣𝐣 𝐁𝐎𝐋𝐋𝐎 𝐉𝐀𝐀𝐍🙈", threadID);
     };

     if ((event.body.toLowerCase() == "jaan") || (event.body.toLowerCase() == "janu")) {
       return api.sendMessage("Aww🥰 Yes My LoVe", threadID);
     };

     if ((event.body.toLowerCase() == "@Basanti Bot") || (event.body.toLowerCase() == "basanti")) {
       return api.sendMessage("KHON KAR DUNGI TERAA", threadID);
     };

if ((event.body.toLowerCase() == "🥱") || (event.body.toLowerCase() == "😑")) {
     return api.sendMessage("Aao baby so jao mere pallu me ghuske😜🥰💙", threadID);
   };

  if ((event.body.toLowerCase() == "💩💩") || (event.body.toLowerCase() == "💩")) {
     return api.sendMessage("kha ke so jana ", threadID);
   };

        if ((event.body.toLowerCase() == "💋") || (event.body.toLowerCase() == "💋💋💋")) {
       return api.sendMessage("Yah PaPpi ChaPpi Nhi kRr Kuch Kuch Nhi Bhot KucH HoTa Hai 😂😂😂", threadID);
     };

        if ((event.body.toLowerCase() == "❤️") || (event.body.toLowerCase() == "💚")) {
       return api.sendMessage("𝐒𝐀𝐁 𝐋𝐀𝐃𝐊𝐎 𝐊𝐊𝐀 𝐂𝐇𝐊𝐊𝐀𝐑 𝐇𝐀𝐀𝐈 𝐁𝐀𝐁𝐔 𝐁𝐇𝐀𝐈𝐘𝐀", threadID);
     };

        if ((event.body.toLowerCase() == "💔") || (event.body.toLowerCase() == "💔")) {
       return api.sendMessage("𝐇𝐀𝐍 𝐁𝐇𝐀𝐈 𝐀𝐀𝐀 𝐆𝐘𝐀 𝐒𝐖𝐀𝐃 𝐓𝐎𝐓 𝐆𝐀𝐘𝐀 𝐃𝐈𝐋😂 ", threadID);
     };

        if ((event.body.toLowerCase() == "🙄") || (event.body.toLowerCase() == "🙄🙄")) {
       return api.sendMessage(" UPAR PANKHA CHALTA HAI🤣", threadID);
     };

           if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "😣")) {
       return api.sendMessage("𝐓𝐘𝐀 𝐇𝐔𝐀𝐀 𝐂𝐔𝐓𝐄𝐈 😒", threadID);
     };

        if ((event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "😂")) {
       return api.sendMessage("hase to fase🙈", threadID);
     };

        if ((event.body.toLowerCase() == "🙈") || (event.body.toLowerCase() == "🙊")) {
       return api.sendMessage("𝐀𝐋𝐄 𝐌𝐄𝐋𝐈 𝐁𝐀𝐁𝐔 𝐒𝐇𝐋𝐌𝐀 𝐆𝐀𝐘𝐈 😂", threadID);
     };

        if ((event.body.toLowerCase() == "oye") || (event.body.toLowerCase() == "oyee")) {
       return api.sendMessage("0ye HoYe 😈", threadID);
     };

     if ((event.body.toLowerCase() == "ok") || (event.body.toLowerCase() == "Okay"))  {
       return api.sendMessage("KYa Ok🙄 Haan", threadID);
     };

     if ((event.body.toLowerCase() == "admin") || (event.body.toLowerCase() == "admin kaha h")) {
       return api.sendMessage("ADMIN APNI BABU SONA KO CHUMA CHATI KARNE ME BUSY HAI KARPYA THODI DER BAD ADMIN KO PUKARE🙄", threadID);
     };

     if ((event.body.toLowerCase() == "hmm") || (event.body.toLowerCase() == "hm")) {
       return api.sendMessage("Kya Hmm 🙄ThaRki", threadID);
     };

     if ((event.body.toLowerCase() == "@Sanaya Khan") || (event.body.toLowerCase() == "sanaya")) {
       return api.sendMessage("YEh Tho MeRe MaLik PaR Jaan DeTi Hai🙈🥰💙", threadID);
     };
    if ((event.body.toLowerCase() == "Khayal rakhna apna") || (event.body.toLowerCase() == "khayal rakhna") || (event.body.toLowerCase() == "apna khayal rakhna") || (event.body.toLowerCase() == "khayl rakna")) {
     return api.sendMessage("Tum KiSlie Ho Tum Rakhlo😒", threadID);
   };

   if ((event.body.toLowerCase() == "👍") || (event.body.toLowerCase() == "👎")) {
    return api.sendMessage("Isko Katke Tere Nak Me ghusha Dungi🤨👈", threadID);
   };

    if ((event.body.toLowerCase() == "😴") || (event.body.toLowerCase() == "😴😴") || (event.body.toLowerCase() == "😴😴😴") || (event.body.toLowerCase() == "😴😴😴😴")) {
     return api.sendMessage("कोई इसको लात मार के जगाओ ग्रुप में ही सो गया 🤨👈", threadID);
   };

  if ((event.body.toLowerCase() == "🥵") || (event.body.toLowerCase() == "🥵🥵") || (event.body.toLowerCase() == "🥵🥵🥵") || (event.body.toLowerCase() == "🥵🥵🥵🥵")) {
     return api.sendMessage("uff KiTni GaRmi Hai Tum me🥵🥵👈", threadID);
   };

   if ((event.body.toLowerCase() == "acha") || (event.body.toLowerCase() == "acha ji") || (event.body.toLowerCase() == "achaa") || (event.body.toLowerCase() == "acha ji")) {
     return api.sendMessage("हांजी बाबू 😒👈", threadID);
   };

  if ((event.body.toLowerCase() == "kamina") || (event.body.toLowerCase() == "kamina bot") || (event.body.toLowerCase() == "tamina") || (event.body.toLowerCase() == "tharki")) {
     return api.sendMessage("Sudhar Jao cHutIya 😒👈", threadID);
   };

  if ((event.body.toLowerCase() == "shat up") || (event.body.toLowerCase() == "shut up") || (event.body.toLowerCase() == "sat up") || (event.body.toLowerCase() == "satup")) {
     return api.sendMessage("You Stup Up 😕👈", threadID);
   };

  if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "🥰🥰") || (event.body.toLowerCase() == "🥰🥰🥰") || (event.body.toLowerCase() == "🥰🥰🥰🥰")) {
     return api.sendMessage("Itna Khush lag Rhe Ho Satting Ho Gyi Kiya😂", threadID);
   };

  if ((event.body.toLowerCase() == "ludo") || (event.body.toLowerCase() == "ludo link do") || (event.body.toLowerCase() == "ludo khelega koi") || (event.body.toLowerCase() == "link do")) {
     return api.sendMessage("मुझे लूडो खेलना नही आता 🥺👈", threadID);
   };

  if ((event.body.toLowerCase() == "kya hua") || (event.body.toLowerCase() == "kiya hua") || (event.body.toLowerCase() == "tya hua") || (event.body.toLowerCase() == "kiya huva")) {
     return api.sendMessage("कुछ नही बाबू 😒👈", threadID);
   };

    if ((event.body.toLowerCase() == "chutiya bot") || (event.body.toLowerCase() == "Bot chutiya") || (event.body.toLowerCase() == "chumtiya bot") || (event.body.toLowerCase() == "chutiya")) {
     return api.sendMessage("Hmm... Tu Chutiya ho bot to uhi badnam kar rakha😾", threadID);
   };
if ((event.body.toLowerCase() == "satting karva de") || (event.body.toLowerCase() == "satting kara")) {
     return api.sendMessage("Bot ki to kaRata nhi koi 😭", threadID);
   };
   if ((event.body.toLowerCase() == "🤮") || (event.body.toLowerCase() == "🤮🤮")) {
     return api.sendMessage("Konsa mahina chal raha hai 😝 chupe rustam nikle tum tho", threadID);
   };

    if ((event.body.toLowerCase() == "🤗") || (event.body.toLowerCase() == "🤗")) {
     return api.sendMessage("Hug me baby ☺️", threadID);
   };

   if ((event.body.toLowerCase() == "🤫") || (event.body.toLowerCase() == "🤫🤫")) {
     return api.sendMessage("NAHI RAHUNGi CHUP KYA KAR LOGE TUM🤬", threadID);
   };

   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hello") ||(event.body.toLowerCase() == "hlw") || (event.body.toLowerCase() == "helo")) {
     return api.sendMessage("Hello, Hi, Bye bye. Ye sab ke alawa kuch bolna nhi ata Kya tujhe", threadID);
   };

   if ((event.body.toLowerCase() == "bc") || (event.body.toLowerCase() == "Bc")) {
     return api.sendMessage("Ye Bc Kya HoTa Hai 🤔 ", threadID);
   };

   if ((event.body.toLowerCase() == "lol") || (event.body.toLowerCase() == "lol bot")) {
     return api.sendMessage("Khud ko Kya LeGend Samjhte Ho 😂", threadID);
   };

   if ((event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😁😁")) {
     return api.sendMessage("BRUSH KARKE AAO BADBU AA RAHA HAI🤭🤭🤭", threadID);
   };

   if ((event.body.toLowerCase() == "😔") || (event.body.toLowerCase() == "😔😔")) {
     return api.sendMessage("SAD KYU HAI JANEMAN SATTING BHAG GAYI KYA TERI LAT MARKA❤️", threadID);
   };

   if ((event.body.toLowerCase() == "good afternoon") || (event.body.toLowerCase() == "good afternoon everyone") || (event.body.toLowerCase() == "⛲⛲⛲⛲⛲⛲⛲⛲⛲⛲") || (event.body.toLowerCase() == "good after noon")) {
     return api.sendMessage( "dofer ho gya aja khana khilati hu apne hato se bna ke bhuk lgi hogi mere janu ko😥",threadID);


   };

   if ((event.body.toLowerCase() == "@Mêlå Bãçhå") || (event.body.toLowerCase() == "mela bacha")) {
     return api.sendMessage("Mere Boss Busy Hai AbHi MuJhe Bolo kya kaam hai🤔🤔🤔", threadID);
   };

   if ((event.body.toLowerCase() == "kamchor") || (event.body.toLowerCase() == "rakh de mobile")) {
     return api.sendMessage("Tum ho ChAlo baRTan MaNj Do Jake🙈😋", threadID);
   };

  if ((event.body.toLowerCase() == "bot admin") || (event.body.toLowerCase() == "bot ka admin kon ha")) {
     return api.sendMessage("He is pagla larka. He Gives his name pagala everywharehttps://www.facebook.com/profile.php?id=61556683716864&mibextid=ZbWKwL", threadID);
   };

   if ((event.body.toLowerCase() == "sadhi karoge") || (event.body.toLowerCase() == "mujhse sadhi karoge?")) {
     return api.sendMessage("hanji, karungi lekin baccha. apke pet m hoga. manjur h?", threadID);
   };

   if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "stop") || (event.body.toLowerCase() == "chup ho ja") || (event.body.toLowerCase() == "chup kar")) {
     return api.sendMessage("Nhi rahungi. 😼 Mujhe Bolna H. Tumhe Koi Haq nhi Mujhe Chup Karane ka. Mera Zuban. M Bolunga", threadID);
   };

   if ((event.body.toLowerCase() == "gn by") || (event.body.toLowerCase() == "tata")) {
     return api.sendMessage("by babu najar mt ana ab😘", threadID);
   };

   if ((event.body.toLowerCase() == "malik se bakchodi") || (event.body.toLowerCase() == "malik se backchodi") || (event.body.toLowerCase() == "malkin se bakchodi") || (event.body.toLowerCase() == "malik")) {
     return api.sendMessage("srry malik maaf kr do ab nhi kruga 🥺🙏", threadID);
   };

   if ((event.body.toLowerCase() == "bhosdike") || (event.body.toLowerCase() == "gandu") || (event.body.toLowerCase() == "bot tharki hai") || (event.body.toLowerCase() == "hijda")) {
     return api.sendMessage("chup kar bc. :))))", threadID);
   };

   if ((event.body.toLowerCase() == "chumma de") || (event.body.toLowerCase() == "kiss de")) {
     return api.sendMessage("️mene brush ni kiya😒", threadID);
   };

   if ((event.body.toLowerCase() == "nice") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "wow") || (event.body.toLowerCase() == "tq")) {
     return api.sendMessage("️M hu hi itni Acchi. sab log Tarref karte hai meri.", threadID);
   };

   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😤") || (event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "😾")) {
     return api.sendMessage("️🥺 M toh Sirf Mazak Kr Rhi Thi🥺. Gussa Mat Karo. Ek Chummi Lo aur Shant Raho 😘", threadID);
   };

   if ((event.body.toLowerCase() == "😞") || (event.body.toLowerCase() == "😔") || (event.body.toLowerCase() == "😣") || (event.body.toLowerCase() == "☹️") || (event.body.toLowerCase() == "😟") || (event.body.toLowerCase() == "😩") || (event.body.toLowerCase() == "😖") || (event.body.toLowerCase() == "😫") || (event.body.toLowerCase() == "💪") || (event.body.toLowerCase() == "🌝") || (event.body.toLowerCase() == "⛪") || (event.body.toLowerCase() == "🗼") || (event.body.toLowerCase() == "🕋")) {
     return api.sendMessage("️SAB Matlbi Hai Koi Nahi Apna😔", threadID);
   };


   if ((event.body.toLowerCase() == "hm") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("️Hmm Hmm Na Karke Sidha Sidha bolo. Hey Marry Me🙈", threadID);
   };

   if ((event.body.toLowerCase() == "😢") || (event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "🥺") || (event.body.toLowerCase() == "🥹")) {
     return api.sendMessage("️Kya huva, Ro kyu rahe ho, Me huna chocolate dilaunga chalo☜", threadID);
   };

   if ((event.body.toLowerCase() == "😷") || (event.body.toLowerCase() == "🤕") || (event.body.toLowerCase() == "🤧") || (event.body.toLowerCase() == "🤒")) {
     return api.sendMessage("️Kya huva, Tabiyat kharab hai kya, Mujhe batao me abhi medicine 💊💉 le aata hu😇", threadID);
   };

   if ((event.body.toLowerCase() == "name kya hai tera") || (event.body.toLowerCase() == "naam") || (event.body.toLowerCase() == "owner kon hai")) {
     return api.sendMessage("️Name m kya rakkha h. tum kam pe dhyan do.", threadID);
   };

   if ((event.body.toLowerCase() == "bekar bot") || (event.body.toLowerCase() == "besram")) {
     return api.sendMessage("️khud ki tarif kase kar lete ho baby.", threadID);
   };

   if ((event.body.toLowerCase() == "pic do") || (event.body.toLowerCase() == "photo do")) {
     return api.sendMessage("️Me toh Andha Hu Dekh nhi sakta", threadID);
   };

   if ((event.body.toLowerCase() == "😮") || (event.body.toLowerCase() == "😱") || (event.body.toLowerCase() == "😦")) {
    return api.sendMessage("️muh mat kholo chuha 🐀 dal dungi muh me៚♥😇", threadID);
   };

   if ((event.body.toLowerCase() == "bot banake do") || (event.body.toLowerCase() == "sikha do")) {
     return api.sendMessage("️Khud hi karlona. tumhe kya kuch nhi ata h?", threadID);
   };

   if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙃")) {
     return api.sendMessage("️Man Toh Accha H Nhi. Kam  Se Kam Shakal Toh Accha Karlo Meri Jaan", threadID);
   };

  if ((event.body.toLowerCase() == "🤥") || (event.body.toLowerCase() == "🤥")) {
     return api.sendMessage("️Bhai teri to naak hi etni lambi hai uski jarurat hi nahi padti hogi tujhe to🤭🤭🤭🤭", threadID);
   };

  if ((event.body.toLowerCase() == "🤔") || (event.body.toLowerCase() == "🤨")) {
     return api.sendMessage("️Kya soch rahe ho etna 🤨", threadID);
   };
if ((event.body.toLowerCase() == "himmat he") || (event.body.toLowerCase() == "bot pagal")) {
     return api.sendMessage("️bhout jayda himmat hai mujme 🤬🤬🤬", threadID);
   };
   if ((event.body.toLowerCase() == "🥴") || (event.body.toLowerCase() == "🥴")) {
     return api.sendMessage("️Oye nashedi 😂😂😂", threadID);
   };

  if ((event.body.toLowerCase() == "😶") || (event.body.toLowerCase() == "😶")) {
     return api.sendMessage("️Are are lips kaha gaye gf/bf ke sath kiss karte time usi ne to nahi kha liye 😜😜", threadID);
   };

  if ((event.body.toLowerCase() == "😉") || (event.body.toLowerCase() == "😉")) {
     return api.sendMessage("️Aankh kyu maar rahe ho, Me bahut shareef hu🥺", threadID);
   };

   if ((event.body.toLowerCase() == "@Kuti Basanti") || (event.body.toLowerCase() == "@kuti basanti")) {
     return api.sendMessage("️Apni Gandi Juban Se Mera Naam Mat Lo Nahi To Khoon Kardungi😒", threadID);
   };

  if ((event.body.toLowerCase() == "🙄🙄") || (event.body.toLowerCase() == "🙄")) {
     return api.sendMessage("️️𝑼𝑷𝑬𝑹 𝑲𝒀𝑨 𝑴𝑰𝑳𝑮𝑨𝒀𝑨 𝑩𝑨𝑳𝑨𝑲🙄", threadID);
   };

   if ((event.body.toLowerCase() == "koi nahi apna") || (event.body.toLowerCase() == "sab matlbi hai") || (event.body.toLowerCase() == "koi pyar nhi karta")) {
     return api.sendMessage("️Me hu na baby mere pass aao 🥰🤗. Me karunga na aapko payar 🙈 (londo tum dur hi rahna saalo 😑)", threadID);
   };

   if ((event.body.toLowerCase() == "@Mêlå Bãçhå") || (event.body.toLowerCase() == "virat")) {
     return api.sendMessage("mere boss ka naam mat lo nale me fek dungi😒😬", threadID);
   };

   if ((event.body.toLowerCase() == "😂😂") || (event.body.toLowerCase() == "😁😁") || (event.body.toLowerCase() == "😆😆") || (event.body.toLowerCase() == "🤣🤣") || (event.body.toLowerCase() == "😸") || (event.body.toLowerCase() == "😹")) {
     return api.sendMessage("😂🤣", threadID);
   };

   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "❤️")) {
     return api.sendMessage("🦋🌿Aƞƙɧ❍ Ɱɛ Ƥɣɑɽ͢  Ɗɪɭɱɛ Ƙɧuɱɑɽ🌬️🌍 ••Ƥɣɑɽ Ƭ❍ɧ Ƞɧɪ Ƙɒɽ ɭɪɣɑ Ɱuȷɧʂɛ>³••🕊️🍎😍", threadID);
   };

   if ((event.body.toLowerCase() == "kese ho sb") || (event.body.toLowerCase() == "kaise ho") || (event.body.toLowerCase() == "kese ho ji") || (event.body.toLowerCase() == "kese ho") || (event.body.toLowerCase() == "kaise ho sab")) {
     return api.sendMessage("M Tabhi Accha hota hu, Jab Apko Hasta Huye Dekhta hu☺️", threadID);
   };

   if ((event.body.toLowerCase() == "😉") || (event.body.toLowerCase() == "😜")) {
     return api.sendMessage("aakh mat mar teri satting pata lungi nahi to🤣 <3", threadID);
   };

   if ((event.body.toLowerCase() == "soja") || (event.body.toLowerCase() == "gn")) {
     return api.sendMessage("soja re😹", threadID);
   };

   if ((event.body.toLowerCase() == "khana ho gya") || (event.body.toLowerCase() == "khana hua")) {
     return api.sendMessage("Mai to bot hu kaise khau khana🤔", threadID);
   };

  if ((event.body.toLowerCase() == "pagal") || (event.body.toLowerCase() == "pgl")) {
     return api.sendMessage("Tujhe mai pagal dikhai deti hu", threadID);
   };

   if ((event.body.toLowerCase() == "jai shree ram") || (event.body.toLowerCase() == "jai shree krishna")) {
     return api.sendMessage("Jai ho parbhu sabko meri tarf se thodi akal dedo😥", threadID);
   };

  if ((event.body.toLowerCase() == "love u") || (event.body.toLowerCase() == "love u babu")) {
     return api.sendMessage("Love You too janu", threadID);
   };

   if ((event.body.toLowerCase() == "good morning all") || (event.body.toLowerCase() == "gm")) {
     return api.sendMessage("UTH GAYE KUMBHKRN LOG CHALO MUH DHO KE AAO😜🤣 <3", threadID);
   };

   if ((event.body.toLowerCase() == "kya huva") || (event.body.toLowerCase() == "kya be")) {
     return api.sendMessage("🏔️🏝️Andhe ho gaye bhari jawani me din hai••😹🫶", threadID);
   };

  if ((event.body.toLowerCase() == "🤨🤨") || (event.body.toLowerCase() == "😳😳") || (event.body.toLowerCase() == "😒😒") || (event.body.toLowerCase() == "😒😒😒") || (event.body.toLowerCase() == "😒😒😒😒😒")) {
     return api.sendMessage("ese na dekho kuch kuch hota hai babu🙈😘", threadID);
   };
   mess = "{name}"
  
  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
