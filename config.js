const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_41_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxODMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDksXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDExLFxuICAgICAgICA4MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAzOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgODgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1LFxuICAgICAgICA1MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAzNyxcbiAgICAgICAgNDksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDgyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTYzLFxuICAgICAgICA0NyxcbiAgICAgICAgODUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDY5LFxuICAgICAgICAzOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5NixcbiAgICAgICAgNDEsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3LFxuICAgICAgICA0NixcbiAgICAgICAgMTgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDc5LFxuICAgICAgICAzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDM0LFxuICAgICAgICAzNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTc3LFxuICAgICAgICA3NixcbiAgICAgICAgMTk2LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwLFxuICAgICAgICA1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTY1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4MixcbiAgICAgICAgODQsXG4gICAgICAgIDIwLFxuICAgICAgICA3NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTgsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzksXG4gICAgICAgIDUyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDk5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDQ4LFxuICAgICAgICAzNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDksXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNzlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICA4MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTgzLFxuICAgICAgICA0MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0MixcbiAgICAgICAgOTYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjIsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMSxcbiAgICAgICAgODQsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDczLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTIyLFxuICAgICAgICA1MixcbiAgICAgICAgMTAyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTkzLFxuICAgICAgICA3NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTA1LFxuICAgICAgICA0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTY4LFxuICAgICAgICA3MCxcbiAgICAgICAgMjE2LFxuICAgICAgICA1OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJqY2NGTDdpSWVxemdxLy91MmlCY0M4VkpWUnQxRGFSbXpNVFpzS2t3YWhRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJXSmo2RlhEVlRXaTVoZ0t1VzFCSDFBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjk4N2NiMGQwLTJmMTktNDc2NC04NmJhLTVlZDM3N2EzMDQzNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyOCxcbiAgICAgIDI1MCxcbiAgICAgIDEyMCxcbiAgICAgIDI0LFxuICAgICAgMjMwLFxuICAgICAgMTY4LFxuICAgICAgMjcsXG4gICAgICA5OCxcbiAgICAgIDEwOSxcbiAgICAgIDIxNCxcbiAgICAgIDIyNSxcbiAgICAgIDE4MCxcbiAgICAgIDQsXG4gICAgICAyMTMsXG4gICAgICAxNSxcbiAgICAgIDIzOSxcbiAgICAgIDI0OCxcbiAgICAgIDQ1LFxuICAgICAgNTEsXG4gICAgICAyNTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjksXG4gICAgICA1MSxcbiAgICAgIDEwMixcbiAgICAgIDE3NSxcbiAgICAgIDIyMyxcbiAgICAgIDIyMSxcbiAgICAgIDIsXG4gICAgICAxNzcsXG4gICAgICAyMixcbiAgICAgIDE2MixcbiAgICAgIDEyMSxcbiAgICAgIDIzNixcbiAgICAgIDM1LFxuICAgICAgMTM4LFxuICAgICAgMTU1LFxuICAgICAgMTc5LFxuICAgICAgNDQsXG4gICAgICAxODgsXG4gICAgICAyOSxcbiAgICAgIDEwMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJaWUpLQUJZUVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzMjA4MzExMDYwOjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMjE4MDU0MzIyNzkxNTk6MTRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSnU2MC9FR0VKT0NuYlFHR0JBZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIrUFVsbGt0NTdwbGhwMjBSbm9nZWkxT3praDlBZUVoTnMxZnBBenB2LzFRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk9scWQvUlh2SFhRWUIrdzg2bEY5Z1lYdTFaa3IrcldJUGswRm9YcXB0U1JPdlVNQWFyWVZvYi9Qa3Ayd3FIdXhESW1iaDNuZHoxemdhQUFhZ3RrQ0RRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIll2OTEvQmRESUxMWi9OemxVQnFIVFJpMTJjUGxib29hWDlKUGlKcUVIWGI4NUhWdWJuNFFNQk9mOEpJWXFFSWNpaXE4SUx6a083cWVSNXdDUmluR0R3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzIwODMxMTA2MDoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDE0MDA1NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1aeVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTVp5Lmpzb24iOiAie1wia2V5RGF0YVwiOlwia25QRFJlMmtRYS9TeHg1Qnh2bTk1YlJFdXh1c3NZVE9PSkFySzYwVEY3ND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODQ4OTU4MjM1LFwiY3VycmVudEluZGV4XCI6NSxcImRldmljZUluZGV4ZXNcIjpbMCwxLDVdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
