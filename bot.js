const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "-"

client.on('ready', () => {
	// Cmd Sending in Console
	  console.log('')
	  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
	  console.log('╔ SystemBot ╗')
	  console.log('')
	  console.log(`[Start] ${new Date()}`)
	  console.log(`╔[ Logged in as * [ " ${client.user.username} " ] ]?`);
	  console.log(`╔[ Servers [ " ${client.guilds.size} " ]╗`);
	  console.log(`╔[ Users [ " ${client.users.size} " ]╗`);
	  console.log(`╔[ Channels [ " ${client.channels.size} " ]╗`);
	  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
      console.log('')
      client.user.setGame(setGame[i],`https://www.twitch.tv/SystemBot`);
    });
    
//حماية | Protacte
var config = {
  events: [
    {type: "CHANNEL_CREATE", logType: "CHANNEL_CREATE", limit: 4 , delay: 5000},
    {type: "CHANNEL_DELETE", logType: "CHANNEL_DELETE", limit: 4, delay: 5000},
    {type: "GUILD_MEMBER_REMOVE", logType: "MEMBER_KICK", limit: 4, delay: 5000},
    {type: "GUILD_BAN_ADD", logType: "MEMBER_BAN_ADD", limit: 4, delay: 5000},
    {type: "GUILD_ROLE_CREATE", logType: "ROLE_CREATE", limit: 5, delay: 5000},
    {type: "GUILD_ROLE_DELETE", logType: "ROLE_DELETE", limit: 4, delay: 5000},
  ]
}
client.on("error", (e) => console.error(e));
client.on("raw", (packet)=> {
  let {t, d} = packet, type = t, {guild_id} = data = d || {};
  if (type === "READY") {
    client.startedTimestamp = new Date().getTime();
    client.captures = [];
  }
  let event = config.events.find(anEvent => anEvent.type === type);
  if (!event) return;
  let guild = client.guilds.get(guild_id);
  if (!guild) return;
  guild.fetchAuditLogs({limit : 1, type: event.logType})
    .then(eventAudit => {
      let eventLog = eventAudit.entries.first();
      if (!eventLog) return;
      let executor = eventLog.executor;
      guild.fetchAuditLogs({type: event.logType, user: executor})
        .then((userAudit, index) => {
          let uses = 0;
          userAudit.entries.map(entry => {
            if (entry.createdTimestamp > client.startedTimestamp && !client.captures.includes(index)) uses += 1;
          });
          setTimeout(() => {
            client.captures[index] = index
          }, event.delay || 2000)
          if (uses >= event.limit) {
            client.emit("reachLimit", {
              user: userAudit.entries.first().executor,
              member: guild.members.get(executor.id),
              guild: guild,
              type: event.type,
            })
          }
        }).catch(console.error)
    }).catch(console.error)
});
client.on("reachLimit", (limit)=> {
  let log = limit.guild.channels.find( channel => channel.name === "log");
  log.send(limit.user.username+"\ntried to hack (!)");
  limit.guild.owner.send(limit.user.username+"\ntried to hack (!)")
  limit.member.roles.map(role => {
    limit.member.removeRole(role.id)
    .catch(log.send)
  });
});

//هيلب | Help
client.on('message', message => {
  var prefix = "-";
  if (message.author.bot) return;
   if (message.content === prefix + "helpa") {
            
    
         
 message.author.sendMessage(`


**▸ System Bot , For Help
╭                                           ╮
    Administrative Orders 
╰                                           ╯    **

▪  ${prefix} Kick , @BLÙTÌČK.♪#0001  [Reason]
▪  ${prefix} Ban , @BLÙTÌČK.♪#0001  [Reason]
▪  ${prefix} Mute, @BLÙTÌČK.♪#0001  [Reason]
▪  ${prefix} Unmute , @BLÙTÌČK.♪#0001 
▪  ${prefix} Colors , لنشاء الوان تقدر تختار اكثر من 100 
▪  ${prefix} Bans , عدد الاشخاص المبندين 
▪  ${prefix} Role , لاعطاء شخص معين او الكل رتبة 
▪  ${prefix} Count , اضهار عدد اعضاء السيرفر
▪  ${prefix} Move , لسحب عضو لرومك 
▪  ${prefix} Bot , اظهار انفو السيرفر 
▪  ${prefix} Server , اظهار انفو خاصة 
▪  ${prefix} BC , برود كاست امبد
▪  ${prefix} Giveaway . قيف اواي 
▪  ${prefix} Ban , @BLÙTÌČK.♪#0001  [Reason]

▪  ${prefix} Inv , دعوت البوت الى سيرفرك ,
**• This Bot Created By @! Tune | BLÙTÌČK.♪#0001 
https://discord.gg/RHnJy79
**




`);

    }
});

client.on('message', message => {
    var prefix = "-";
    if (message.author.bot) return;
     if (message.content === prefix + "help") {
              
  
   message.author.sendMessage(`
  
**▸ System Bot , For Help
╭                                           ╮
          Players  Orders 
╰                                           ╯    **

▪  ${prefix} new , لنشاء تذكرة 
▪  ${prefix} count , عدد الاعضاء في السيرفر 
▪  ${prefix} رابط , Link The Server
▪  ${prefix} Report , ابلاغ عن شخص اداري او غير 
▪  ${prefix} Ping , لأظهار عدد البنق 

▪  ${prefix} Inv , لاضافة البوت الى سيرفرك 
**• This Bot Created By @! Tune | BLÙTÌČK.♪#0001 
https://discord.gg/RHnJy79
**
  
  
  
  `);
  
      }
  });

//Think You
  client.on('guildCreate', guild => {
    var embed = new Discord.RichEmbed()
    .setColor(0x5500ff)
    .setDescription(`**https://discord.gg/UMvDAH شكرا لك لاضافة بوتنا ,**`)
        guild.owner.send(embed)
  });
//Auto Role
  client.on('guildMemberAdd', (member) => {
    member.addRole(member.guild.roles.find('name', 'Member of NextaMC'));
    });	
//-new
    client.on("message", (message) => {
        /// ALPHA CODES
       if (message.content.startsWith("-new")) {     /// ALPHA CODES
            const reason = message.content.split(" ").slice(1).join(" ");     /// ALPHA CODES
            if (!message.guild.roles.exists("name", "Support.")) return message.channel.send(`This server doesn't have a \`Support.\` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`);
            if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`);    /// ALPHA CODES
            message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
                let role = message.guild.roles.find("name", "Support.");
                let role2 = message.guild.roles.find("name", "@everyone");
                c.overwritePermissions(role, {
                    SEND_MESSAGES: true,
                    READ_MESSAGES: true
                });    /// ALPHA CODES
                c.overwritePermissions(role2, {
                    SEND_MESSAGES: false,
                    READ_MESSAGES: false
                });
                c.overwritePermissions(message.author, {
                    SEND_MESSAGES: true,
                    READ_MESSAGES: true
                });
                message.channel.send(`:white_check_mark: Your ticket has been created, #${c.name}.`);
                const embed = new Discord.RichEmbed()
                    .setColor(0xCF40FA)
                    .addField(`Hey ${message.author.username}!`, `Please try explain why you opened this ticket with as much detail as possible. Our **Support Staff** will be here soon to help.`)
                    .setTimestamp();
                c.send({
                    embed: embed
                });
            }).catch(console.error);
        }
      
      
      if (message.content.startsWith("-close")) {
            if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
      
           message.channel.send(`Are you sure? Once confirmed, you cannot reverse this action!\nTo confirm, type \`#confirm\`. This will time out in 10 seconds and be cancelled.`)
               .then((m) => {
                   message.channel.awaitMessages(response => response.content === '#confirm', {
                           max: 1,
                           time: 10000,
                           errors: ['time'],
                       })    
                       .then((collected) => {
                           message.channel.delete();
                       })    
                       .catch(() => {
                           m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
                               m2.delete();
                           }, 3000);
                       });
               });
       }
      
      });

      client.on('message', message => {
        if (message.content.startsWith("-bans")) {
            message.guild.fetchBans()
            .then(bans => message.channel.send(`${bans.size}** ▪ عدد الاشخصار المبندين من السيرفر , :link:  ** `))
      .catch(console.error);
      }
      });

      client.on('message', message => {
        var prefix = "-"
      if (message.author.x5bz) return;
      if (!message.content.startsWith(prefix)) return;
    
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
    
      let args = message.content.split(" ").slice(1);
    
      if (command == "kick") {
                   if(!message.channel.guild) return message.reply('** This command only for servers**');
             
      if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
      if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
      let user = message.mentions.users.first();
      let reason = message.content.split(" ").slice(2).join(" ");
      if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
      if(!reason) return message.reply ("**اكتب سبب الطرد**");
      if (!message.guild.member(user)
      .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
    
      message.guild.member(user).kick();
    
      const kickembed = new Discord.RichEmbed()
      .setAuthor(`KICKED!`, user.displayAvatarURL)
      .setColor("RANDOM")
      .setTimestamp()
      .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
      .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
      .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
      message.channel.send({
        embed : kickembed
      })
    }
    });

    client.on('message', message => {
        var prefix = "-"
      if (message.author.x5bz) return;
      if (!message.content.startsWith(prefix)) return;
    
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
    
      let args = message.content.split(" ").slice(1);
    
      if (command == "ban") {
                   if(!message.channel.guild) return message.reply('** This command only for servers**');
             
      if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
      if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
      let user = message.mentions.users.first();
      let reason = message.content.split(" ").slice(2).join(" ");
      /*let b5bzlog = client.channels.find("name", "5bz-log");
      if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
      if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
      if(!reason) return message.reply ("**اكتب سبب الطرد**");
      if (!message.guild.member(user)
      .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
    
      message.guild.member(user).ban(7, user);
    
      const banembed = new Discord.RichEmbed()
      .setAuthor(`BANNED!`, user.displayAvatarURL)
      .setColor("RANDOM")
      .setTimestamp()
      .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
      .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
      .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
      message.channel.send({
        embed : banembed
      })
    }
    });

      client.on("message", message => {
        var prefix = "-";
        var args = message.content.split(' ').slice(1); 
        var msg = message.content.toLowerCase();
        if( !message.guild ) return;
        if( !msg.startsWith( prefix + 'role' ) ) return;
        if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__ليس لديك صلاحيات__**');
        if( msg.toLowerCase().startsWith( prefix + 'roleremove' ) ){
            if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد سحب منه الرتبة**' );
            if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );
            var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
            var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
            if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );if( message.mentions.members.first() ){
                message.mentions.members.first().removeRole( role1 );
                return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من **');
            }
            if( args[0].toLowerCase() == "all" ){
                message.guild.members.forEach(m=>m.removeRole( role1 ))
                return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من الكل رتبة**');
            } else if( args[0].toLowerCase() == "bots" ){
                message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
                return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البوتات رتبة**');
            } else if( args[0].toLowerCase() == "humans" ){
                message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
                return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البشريين رتبة**');
            } 	
        } else {
            if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );
            if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
            var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
            var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
            if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
                message.mentions.members.first().addRole( role1 );
                return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
            }
            if( args[0].toLowerCase() == "all" ){
                message.guild.members.forEach(m=>m.addRole( role1 ))
                return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
            } else if( args[0].toLowerCase() == "bots" ){
                message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
                return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
            } else if( args[0].toLowerCase() == "humans" ){
                message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
                return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البشريين رتبة**');
            } 
        } 
    });

    client.on('message', message => {
        if (!message.channel.guild) return;
      if(message.content =='-count')
      var IzRo = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL)
      .setTitle(':tulip:| Members info')
      .addBlankField(true)
      .addField('**عدد اعضاء السيرفر , :beginner:  **',`${message.guild.memberCount}`)
      message.channel.send(IzRo);
      });

      client.on('message', message => {
        var prefix = "-";
    if(!message.channel.guild) return;
    if(message.content.startsWith(prefix + 'move')) {
     if (message.member.hasPermission("MOVE_MEMBERS")) {
     if (message.mentions.users.size === 0) {
     return message.channel.send("``لاستخدام الأمر اكتب هذه الأمر : " +prefix+ "move [USER]``")
    }
    if (message.member.voiceChannel != null) {
     if (message.mentions.members.first().voiceChannel != null) {
     var authorchannel = message.member.voiceChannelID;
     var usermentioned = message.mentions.members.first().id;
    var embed = new Discord.RichEmbed()
     .setTitle("Succes!")
     .setColor("#000000")
     .setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك✅ `)
    var embed = new Discord.RichEmbed()
    .setTitle(`You are Moved in ${message.guild.name}`)
     .setColor("RANDOM")
    .setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
     message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
    message.guild.members.get(usermentioned).send(embed)
    } else {
    message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
    }
    } else {
     message.channel.send("**``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``**")
    }
    } else {
    message.react("❌")
     }}});

     client.on('message', message => {
        if (message.content.startsWith("-bot")) {
        message.channel.send({
            embed: new Discord.RichEmbed()
                .setAuthor(client.user.username,client.user.avatarURL)
                .setThumbnail(client.user.avatarURL)
                .setColor('RANDOM')
                .setTitle('``INFO SystemBot`` ')
                .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
                .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
                .addField('``servers``', [client.guilds.size], true)
                .addField('``channels``' , `[ ${client.channels.size} ]` , true)
                .addField('``Users``' ,`[ ${client.users.size} ]` , true)
                .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
                .addField('``My ID``' , `[ ${client.user.id} ]` , true)
                .addField('``My Prefix``' , `[ - ]` , true)
                .addField('``My Language``' , `[ Java Script ]` , true)
                .setFooter('By | SystemBot ')
        })
      }
      });

      client.on('message', message => {
        var prefix ="-";
      if(message.content.startsWith(prefix +"server")){
      if(!message.channel.guild) return message.reply(' ');
      const millis = new Date().getTime() - message.guild.createdAt.getTime();
      const now = new Date();
      dateFormat(now, 'dddd, mmmm dS, yyyy, h:MM:ss TT');
      const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
      const days = millis / 1000 / 60 / 60 / 24;
      let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
      var embed  = new Discord.RichEmbed()
      .setAuthor(message.guild.name, message.guild.iconURL)
      .addField("**🆔 Server ID:**", message.guild.id,true)
      .addField("**📅 Created On**", message.guild.createdAt.toLocaleString(),true)
      .addField("**👑 Owned by**",`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
      .addField("👥 Members ",`[${message.guild.memberCount}]`,true)
      .addField('**💬 Channels **',`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' text | Voice  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}** `,true)
      .addField("**🌍 Others **" , message.guild.region,true)
      .addField("** 🔐 Roles **",`**[${message.guild.roles.size}]** Role `,true)
      .setColor('#000000')
      message.channel.sendEmbed(embed)
      
      }
      });

      client.on('message', ra3d => {
        var prefix = "-";
                                let args = ra3d.content.split(" ").slice(1).join(" ")
        if(ra3d.content.startsWith(prefix + 'ccolors')) {
            if(!args) return ra3d.channel.send('`**يرجى اختيار عدد الاوان , :paintbrush:  **`');
                     if (!ra3d.member.hasPermission('MANAGE_ROLES')) return ra3d.channel.sendMessage('`**⚠ | `[MANAGE_ROLES]` لا يوجد لديك صلاحية**'); 
                      ra3d.channel.send(`**✅ |Created __${args}__ Colors**`);
                          setInterval(function(){})
                            let count = 0;
                            let ecount = 0;
                  for(let x = 1; x < `${parseInt(args)+1}`; x++){
                    ra3d.guild.createRole({name:x,
                      color: 'RANDOM'})
                      }
                    }
               });

//
client.on('message', message => {
    if (message.content.startsWith("رابط")) {
      if(!message.guild.member(client.user).hasPermission("CREATE_INSTANT_INVITE")) return message.reply("**I Don't Have `CREATE_INSTANT_INVITE` Permission**").then(msg => msg.delete(6000))
  
        message.channel.createInvite({
          thing: true,
          maxUses: 5,
          maxAge: 86400,
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
      message.channel.send("**:link: Invite Linke Sent In DM Successfully**")
    }
  });

  client.on("message", message => {
    let args = message.content.split(" ").slice(1);
  if (message.content.startsWith('-report')) {
        let user = message.mentions.users.first();
        let reason = args.slice(1).join(' ');
        let modlog = client.channels.find('name', 'report');
        if (!reason) return message.reply('**ضع سبباً مقنعاً**');
          if (message.mentions.users.size < 1) return message.reply('**يجب عليك منشن للعضو المراد الابلاغ عليه**').catch(console.error);
   
    if (!modlog) return message.reply('**لا يوجد روم بأسم report**');
    const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .addField('نوع الرسالة:', 'Report')
      .addField('المراد الابلاغ عليه:', `${user.username}#${user.discriminator} (${user.id}`)
      .addField('صاحب الابلاغ:', `${message.author.username}#${message.author.discriminator}`)
      .addField('السبب', reason);
      message.delete()
      return client.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
  }
  });

client.login(process.env.BOT_TOKEN);
