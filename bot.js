const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setGame('Rezfix -help','https://www.twitch.tv/Rezfix');
    console.log('---------------');
    console.log(' Bot Online')
    console.log('---------------')
  });

client.on("message", message => {
    var prefix = "*";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **ليس لديك صلاحيات**');
        var lmt = message.content.split(' ')[1]
    var msg;
          msg = parseInt();
        
       
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.send('`done`').then(m => m.delete(1000));
    }
});

client.login(process.env.BOT_TOKEN);
