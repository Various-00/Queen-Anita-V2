//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "lionelsteevensverdier@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://google.com";
global.gurl = process.env.GURL || "https://google.com";
global.website = process.env.GURL || "https://google.com";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "50937042801";
global.owner = process.env.OWNER_NUMBER || "50931267319";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4,https://telegra.ph/file/a22200a780671e0e32383.jpg";
global.waPresence = process.env.WAPRESENCE || "composing";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaVA4NnE4VWVQbmprMFlYU3ZKUW4vZVFDWWlXQ3k5TzRNUisvbzloMDhsVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUGltZWxzYW5tdUVqaFVhYUUvV0NhbExWR251KzJOT2M0ZVhWd0d6azh5OD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLQ2xBQngxWU96TU5xZCswZlVJd2VEZkJLTjZkZm5sZjNkc1NmcUVRWTJNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBVmNFemlyL2pBbmdlMGtjMEVJamZMeHZxR3p3NXQyb2Y0ZXNaTncrM0NnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNHdnJiRWZyU245SDNBbVlaTThsU1hXTEQ0RnQybEFBdTY5azJQY2JMVjg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImN0SG15am9LTU1mYlA2WXptVmNHWWx6YWhCeEpCTUo1L1grdDZyZHFmZ1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUZHejVUbFZBcThnb3Q3UWZqbG5wTnB6QjFtQlRzbXRuaVl3OCtINlJWbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZmRoOTRSZmZCS3JsOW85NjdMSXBzS0FZMXJTWTFacTd0elNGTVhBaWluUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVlSkhOOHYvL2tubGZrQ3c4ZnI4Z1NWbklMdE1yOUxYMDZqcHRUbjA3MlZxVXJhSlFsNVp5Y3BZamMzM0d5WFhuS013RU1VUUdWQzNLTzdkZnpUUGpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODksImFkdlNlY3JldEtleSI6IncvVGNwK2pncC9aUmF1UTl2YVRPbTFOMEJGTFo5cElSbDB2Rjg0UjdKY1E9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiNTA5MzEyNjczMTlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiODFCNTZERTZCMjk5MUE5MDYwRTNEMDEzRjU2RUY1RDEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyODU5ODk5NH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoia2V3LU1UeTFSRU9ySUNEaEZidXNYUSIsInBob25lSWQiOiIzMTBlOTAwOC03NTU5LTQwNzMtYmMyOS1hZmM5NTAzMjdjMTEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUkg3eVU0MlVWR2lzajAwRWRJMW5GQjAzaEFNPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVLRDA1YTFYQm1DMlFzWk1jcnBuWWUxMUZCND0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJYM0JKOUpFVyIsIm1lIjp7ImlkIjoiNTA5MzEyNjczMTk6MUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS2l2L2RnR0VNR25vYmdHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoidkNoNHR3VklQazREbktNaXhwNHQ1QTJwYjFObCtDbmIyeUZLc3JSTVoxQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiTG1CTGZmR0JCMFIrd1cvbmQ0VWJsY3BBV3BqQ1VJeHJxaEsxWW5nY25OT09mUGdLQ0dwNGhnblgraVlzZmkyeWxENHRBNVc1czBRMTBESnJHaXRxRFE9PSIsImRldmljZVNpZ25hdHVyZSI6IldVRVdjaEpLVkllbmkwU3BMTkZtckZEcTRwbkRyTVgvRVFJYnpZVWpvMEJqTVd1WWMzd2dyenJSNmN6cUV5VkkwTDd6WGFGajVDaDNvd3ZPR2JtOGhRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNTA5MzEyNjczMTk6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJid29lTGNGU0Q1T0E1eWpJc2FlTGVRTnFXOVRaZmdwMjlzaFNySzBUR2RRIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI4NTk4OTkwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJFTiJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`Rood_Various`",
  author: process.env.PACK_AUTHER || "Rood_Various",
  packname: process.env.PACK_NAME || "Rood_Various",
  botname: process.env.BOT_NAME || "Rood_Various",
  ownername: process.env.OWNER_NAME || "Rood_Various",
  errorChat: process.env.ERROR_CHAT || "error message",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
