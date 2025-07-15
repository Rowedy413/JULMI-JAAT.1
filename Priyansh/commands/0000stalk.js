const axios = require('axios');
const { unlinkSync, writeFileSync, createReadStream } = require('fs-extra');

module.exports.config = {
   name: "stalk",
   version: "1.0", 
   author: "𝗥𝟬𝗪𝟯𝗗𝗬 𝗞𝗜𝗜𝗡𝗚",
   hasPermission: 1,
   description: "Retrieve information about a user on Facebook.",
   commandCategory: "Info",
   usage: "/stalk <@mention or reply to a message of the user>",
   cooldowns: 1,
};

  module.exports.run = async function ({ api, args, event }) {
      let userId;
    if(event.mentions || event.type === "message_reply"){
      userId = Object.keys(event.mentions)[0] || event.messageReply.senderID;
    }else if(!args[0]){
       userId = event.senderID;
      }
   else {
     userId = args.join(" ")
    }
      try {
  const response = await axios.get(`https://noobs-api.onrender.com/dipto/fbinfo?id=${userId}&key=dipto008`);
const apiResponse = response.data;
const path = __dirname + '/cache/stalk.jpg';
const img = (await axios.get(apiResponse.photo, { responseType: "arraybuffer" })).data;
writeFileSync(path, Buffer.from(img, 'binary'));

const formattedResponse = `
╠    𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 𝗦𝗧𝗔𝗟𝗞    ╣
﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

• 𝗡𝗮𝗺𝗲: ${apiResponse.name}

• 𝗙𝗶𝗿𝘀𝘁 𝗡𝗮𝗺𝗲: ${apiResponse.fast}

• 𝗨𝘀𝗲𝗿 𝗜𝗗: ${apiResponse.uid}

• 𝗨𝘀𝗲𝗿 𝗡𝗮𝗺𝗲: ${apiResponse.user_name}

• 𝗜𝗗 𝗟𝗶𝗻𝗸: ${apiResponse.idlink}

• 𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻𝘀𝗵𝗶𝗽 𝗦𝘁𝗮𝘁𝘂𝘀: ${apiResponse.rlsn}

• 𝗕𝗶𝗿𝘁𝗵𝗱𝗮𝘆: ${apiResponse.birthday}

• 𝗙𝗼𝗹𝗹𝗼𝘄𝗲𝗿𝘀: ${apiResponse.follow}

• 𝗛𝗼𝗺𝗲: ${apiResponse.home}

• 𝗟𝗼𝗰𝗮𝗹: ${apiResponse.local}

• 𝗟𝗼𝘃𝗲 𝗡𝗮𝗺𝗲: ${apiResponse.love.name}

• 𝗟𝗼𝘃𝗲 𝗨𝘀𝗲𝗿 𝗜𝗗: ${apiResponse.love.id}

• 𝗟𝗼𝘃𝗲 𝗜𝗗 𝗟𝗶𝗻𝗸: https://facebook.com/${apiResponse.love.id}

• 𝗩𝗲𝗿𝗶𝗳𝗶𝗲𝗱: ${apiResponse.verify}

• 𝗪𝗲𝗯: ${apiResponse.web}

• 𝗤𝘂𝗼𝘁𝗲𝘀: ${apiResponse.quotes}

• 𝗔𝗯𝗼𝘂𝘁: ${apiResponse.about}

• 𝗔𝗰𝗰𝗼𝘂𝗻𝘁 𝗖𝗿𝗲𝗮𝘁𝗶𝗼𝗻 𝗗𝗮𝘁𝗲: ${apiResponse.account_crt}
﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏
`;

  await api.sendMessage({
body: formattedResponse,
attachment: createReadStream(path)
  }, event.threadID, () => unlinkSync(path), event.messageID);
      } catch (error) {
  console.error('Error fetching stalk data:', error);
  api.sendMessage("An error occurred while processing the request.", event.threadID);
      }
};
