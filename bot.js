const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "-"

client.on('ready', () => {
	// Cmd Sending in Console
	  console.log('')
	  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
	  console.log('╔                           SystemBot                               ╗')
	  console.log('')
	  console.log('╔ Best Bot in 2019 and 2040 ╗')
	  console.log(`[Start] ${new Date()}`)
	  console.log(`╔[ Logged in as * [ " ${client.user.username} " ] ]?`);
	  console.log(`╔[ Servers [ " ${client.guilds.size} " ]╗`);
	  console.log(`╔[ Users [ " ${client.users.size} " ]╗`);
	  console.log(`╔[ Channels [ " ${client.channels.size} " ]╗`);
	  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
      console.log('')
      client.user.setGame('-help | SystemBot',`https://www.twitch.tv/SystemBot`);
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

  client.on('message', message =>{
    if(message.content === '-ping'){
	   if(!message.channel.guild) return
let start = Date.now(); message.channel.send('pong').then(message => { 
message.edit(`\`\`\`js
Time taken: ${Date.now() - start} ms
Discord API: ${client.ping.toFixed(0)} ms\`\`\``);
    });
    }
});

client.on('message',function(message) { 
    if(message.content === prefix + "inv") {
        if(!message.channel.guild) return;
        var mmmmEmbed = new Discord.RichEmbed()
        .setAuthor(client.user.username)
        .setTitle('-  Click Here !.')
        .setURL(`https://discordapp.com/oauth2/authorize?client_id=538199018090528780&permissions=8&scope=bot`)
        .setThumbnail(client.user.avatarURL)
        .setFooter(`- Requested By: ${message.author.tag}`,message.author.avatarURL);
        message.channel.send(mmmmEmbed)
    }
 });

 client.on('message', message => {       
    if (message.content.startsWith(prefix + 'clear')) { //xRGRx .. By Julian
        if(!message.channel.guild) return message.reply(':no_entry: | This Command For Servers Only!'); 
            if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(':no_entry: | You dont have **MANAGE_MESSAGES** Permission!');
            if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return message.channel.send(':no_entry: | I dont have **MANAGE_MESSAGES** Permission!');
     let args = message.content.split(" ").slice(1)
        let messagecount = parseInt(args);
        if (args > 99) return message.reply("**:octagonal_sign: || يجب ان يكون عدد المسح أقل من 100 .**").then(messages => messages.delete(5000))
        if(!messagecount) args = '100';
        message.channel.fetchMessages({limit: messagecount + 1}).then(messages => message.channel.bulkDelete(messages));
        message.channel.send(`\`${args}\` : __عدد الرسائل التي تم مسحها __ `).then(messages => messages.delete(5000));
      }
      });

      client.on('message', function(message) {
        //xRGRx .. By Julian
           let args = message.content.split(" ").slice(1).join(" ");
           if(message.content.startsWith(prefix + "setname")) {
                       if(message.author.id !== myID) return;
                   if(!args) return message.reply('اكتب الحالة اللي تريدها.');
               client.user.setUsername(args);
               message.channel.send(':white_check_mark: Done!').then(msg => {
                  msg.delete(5000);
                 message.delete(5000);
               });
           } else if(message.content.startsWith(prefix + "stream")) {
                       if(message.author.id !== myID) return;
                   if(!args) return message.reply('اكتب الحالة اللي تريدها.');
               client.user.setGame(args , 'https://twitch.tv/SystemBot');
               message.channel.send(':white_check_mark: Done!').then(msg => {
                  msg.delete(5000);
                 message.delete(5000);
               });
           } else if(message.content.startsWith(prefix + "pplay")) {
                               if(message.author.id !== myID) return;
                   if(!args) return message.reply('اكتب الحالة اللي تريدها.');
               client.user.setActivity(args);
               message.channel.send(':white_check_mark: Done!').then(msg => {
                  msg.delete(5000);
                 message.delete(5000);
               });
           } else if(message.content.startsWith(prefix + "listen")) {
                               if(message.author.id !== myID) return;
                   if(!args) return message.reply('اكتب الحالة اللي تريدها.');
               client.user.setActivity(args, {type:'LISTENING'});
               message.channel.send(':white_check_mark: Done!').then(msg => {
                  msg.delete(5000);
                 message.delete(5000);
               });
           } else if(message.content.startsWith(prefix + "watch")) {
                               if(message.author.id !== myID) return;
                   if(!args) return message.reply('اكتب الحالة اللي تريدها.');
               client.user.setActivity(args, {type:'WATCHING'});
               message.channel.send(':white_check_mark: Done!').then(msg => {
                  msg.delete(5000);
                 message.delete(5000);
               });
           } else if(message.content.startsWith(prefix + "setavatar")) {
                               if(message.author.id !== myID) return;
               client.user.setAvatar(args);
               message.channel.send(':white_check_mark: Done!').then(msg => {
                       if(!args) return message.reply('اكتب الحالة اللي تريدها.');
                  msg.delete(5000);
                 message.delete(5000);
               });
           }
       });

      client.on('message', message => {   
        if (message.author.bot) return;
        var prefix = "-";
        if (!message.content.startsWith(prefix)) return;
        let command = message.content.split(" ")[0];
        command = command.slice(prefix.length);
        let args = message.content.split(" ").slice(1);
        if (command == "mute") {
        if(!message.channel.guild) return message.reply(':no_entry: | This Command For Servers Only!'); 
                if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(':no_entry: | You dont have **MANAGE_ROLES** Permission!');
                if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES')) return message.channel.send(':no_entry: | I dont have **MANAGE_ROLES** Permission!');
        let user = message.mentions.users.first();
        let muteRole = message.guild.roles.find("name", "Muted");
        if (!muteRole) return message.reply(":no_entry: Error | I Cant find 'Muted' Role").then(msg => {msg.delete(5000)});
        if (message.mentions.users.size < 1) return message.reply('**➥ Useage:** -mute \`\`@Name\`\` reason');
        let reason = message.content.split(" ").slice(2).join(" ");
        message.guild.member(user).addRole(muteRole);
        const muteembed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor(`Muted!`, user.displayAvatarURL)
        .setThumbnail(user.displayAvatarURL)
        .addField("**:busts_in_silhouette:  المستخدم**",  '**[ ' + `${user.tag}` + ' ]**',true)
        .addField("**:hammer:  تم بواسطة **", '**[ ' + `${message.author.tag}` + ' ]**',true)
        .addField("**:book:  السبب**", '**[ ' + `${reason}` + ' ]**',true)
        .addField("User", user, true)  
          .setTitle('**[MUTED]**')
                .setThumbnail(message.author.avatarURL)
                .setColor('GREEN')
                .setDescription(`**\n:zipper_mouth: Successfully \`\`MUTED\`\` **${user.username}** From the server!\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${message.author.id}> (ID: ${message.author.id})\n**Reason:** \`\`${reason}\`\``)
                .setTimestamp()
                .setFooter(user.tag, user.avatarURL)
        client.channels.find('name', "log").send({embed : muteembed});
        }
        
        if (command == "unmute") {
        if(!message.channel.guild) return message.reply(':no_entry: | This Command For Servers Only!'); 
                if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(':no_entry: | You dont have **MANAGE_ROLES** Permission!');
                if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES')) return message.channel.send(':no_entry: | I dont have **MANAGE_ROLES** Permission!');
        let user = message.mentions.users.first();
        let muteRole = message.guild.roles.find("name", "Muted");
        if (!muteRole) return message.reply(":no_entry: Error | I Cant find 'Muted' Role").then(msg => {msg.delete(5000)});
        if (message.mentions.users.size < 1) return message.reply('**➥ Useage:** -unmute \`\`@Name\`\`');
        let reason = message.content.split(" ").slice(2).join(" ");
        message.guild.member(user).removeRole(muteRole);
        const unmuteembed = new Discord.RichEmbed()
        .setTitle('**[UNMUTED]**')
                    .setThumbnail(message.author.avatarURL)
                    .setColor('GREEN')
                    .setDescription(`**\n:zipper_mouth: Successfully \`\`UNMUTED\`\` **${user.username}** From the server!\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${message.author.id}> (ID: ${message.author.id})`)
                    .setTimestamp()
                    .setFooter(user.tag, user.avatarURL)
        client.channels.find('name', "log").send({embed : unmuteembed});
        }
        });

        client.on('messageDelete', message => {
            if(message.author.bot) return;
            if(message.channel.type === 'dm') return;
            if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
            if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return;
        
            var logChannel = message.guild.channels.find(c => c.name === 'log');
            if(!logChannel) return;
        
            let messageDelete = new Discord.RichEmbed()
            .setTitle('**[MESSAGE DELETE]**')
            .setColor('RED')
            .setThumbnail(message.author.avatarURL)
            .setDescription(`**\n**:wastebasket: Successfully \`\`DELETE\`\` **MESSAGE** In ${message.channel}\n\n**Channel:** \`\`${message.channel.name}\`\` (ID: ${message.channel.id})\n**Message ID:** ${message.id}\n**Sent By:** <@${message.author.id}> (ID: ${message.author.id})\n**Message:**\n\`\`\`${message}\`\`\``)
            .setTimestamp()
            .setFooter(message.guild.name, message.guild.iconURL)
        
            logChannel.send(messageDelete);
        });
        client.on('messageUpdate', (oldMessage, newMessage) => {
        
            if(oldMessage.author.bot) return;
            if(!oldMessage.channel.type === 'dm') return;
            if(!oldMessage.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
            if(!oldMessage.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return;
        
            var logChannel = oldMessage.guild.channels.find(c => c.name === 'log');
            if(!logChannel) return;
        
            if(oldMessage.content.startsWith('https://')) return;
        
            let messageUpdate = new Discord.RichEmbed()
            .setTitle('**[MESSAGE EDIT]**')
            .setThumbnail(oldMessage.author.avatarURL)
            .setColor('BLUE')
            .setDescription(`**\n**:wrench: Successfully \`\`EDIT\`\` **MESSAGE** In ${oldMessage.channel}\n\n**Channel:** \`\`${oldMessage.channel.name}\`\` (ID: ${oldMessage.channel.id})\n**Message ID:** ${oldMessage.id}\n**Sent By:** <@${oldMessage.author.id}> (ID: ${oldMessage.author.id})\n\n**Old Message:**\`\`\`${oldMessage}\`\`\`\n**New Message:**\`\`\`${newMessage}\`\`\``)
            .setTimestamp()
            .setFooter(oldMessage.guild.name, oldMessage.guild.iconURL)
        
            logChannel.send(messageUpdate);
        });
        
        
        // Roles Logs
        client.on('roleCreate', role => {
        
            if(!role.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
            if(!role.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
        
            var logChannel = role.guild.channels.find(c => c.name === 'log');
            if(!logChannel) return;
        
            role.guild.fetchAuditLogs().then(logs => {
                var userID = logs.entries.first().executor.id;
                var userAvatar = logs.entries.first().executor.avatarURL;
        
                let roleCreate = new Discord.RichEmbed()
                .setTitle('**[ROLE CREATE]**')
                .setThumbnail(userAvatar)
                .setDescription(`**\n**:white_check_mark: Successfully \`\`CREATE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
                .setColor('GREEN')
                .setTimestamp()
                .setFooter(role.guild.name, role.guild.iconURL)
        
                logChannel.send(roleCreate);
            })
        });
        client.on('roleDelete', role => {
        
            if(!role.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
            if(!role.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
        
            var logChannel = role.guild.channels.find(c => c.name === 'log');
            if(!logChannel) return;
        
            role.guild.fetchAuditLogs().then(logs => {
                var userID = logs.entries.first().executor.id;
                var userAvatar = logs.entries.first().executor.avatarURL;
        
                let roleDelete = new Discord.RichEmbed()
                .setTitle('**[ROLE DELETE]**')
                .setThumbnail(userAvatar)
                .setDescription(`**\n**:white_check_mark: Successfully \`\`DELETE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
                .setColor('RED')
                .setTimestamp()
                .setFooter(role.guild.name, role.guild.iconURL)
        
                logChannel.send(roleDelete);
            })
        });
        client.on('roleUpdate', (oldRole, newRole) => {
        
            if(!oldRole.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
            if(!oldRole.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
        
            var logChannel = oldRole.guild.channels.find(c => c.name === 'log');
            if(!logChannel) return;
        
            oldRole.guild.fetchAuditLogs().then(logs => {
                var userID = logs.entries.first().executor.id;
                var userAvatar = logs.entries.first().executor.avatarURL;
        
                if(oldRole.name !== newRole.name) {
                    let roleUpdateName = new Discord.RichEmbed()
                    .setTitle('**[ROLE NAME UPDATE]**')
                    .setThumbnail(userAvatar)
                    .setColor('BLUE')
                    .setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` Role Name.\n\n**Old Name:** \`\`${oldRole.name}\`\`\n**New Name:** \`\`${newRole.name}\`\`\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`)
                    .setTimestamp()
                    .setFooter(oldRole.guild.name, oldRole.guild.iconURL)
        
                    logChannel.send(roleUpdateName);
                }
                if(oldRole.hexColor !== newRole.hexColor) {
                    if(oldRole.hexColor === '#000000') {
                        var oldColor = '`Default`';
                    }else {
                        var oldColor = oldRole.hexColor;
                    }
                    if(newRole.hexColor === '#000000') {
                        var newColor = '`Default`';
                    }else {
                        var newColor = newRole.hexColor;
                    }
                    let roleUpdateColor = new Discord.RichEmbed()
                    .setTitle('**[ROLE COLOR UPDATE]**')
                    .setThumbnail(userAvatar)
                    .setColor('BLUE')
                    .setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` **${oldRole.name}** Role Color.\n\n**Old Color:** ${oldColor}\n**New Color:** ${newColor}\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`)
                    .setTimestamp()
                    .setFooter(oldRole.guild.name, oldRole.guild.iconURL)
        
                    logChannel.send(roleUpdateColor);
                }
                if(oldRole.permissions !== newRole.permissions) {
                    let roleUpdate = new Discord.RichEmbed()
                    .setTitle('**[UPDATE ROLE PERMISSIONS]**')
                    .setThumbnail(userAvatar)
                    .setColor('BLUE')
                    .setDescription(`**\n**:first_place: Successfully \`\`CHANGED\`\` **${oldRole.name}** Permissions!\n\n**Old Permissions:** \`\`${oldRole.permissions}\`\`\n**New Permissions:** \`\`${newRole.permissions}\`\`\n**By:** <@${userID}> (ID: ${userID})`)
                    .setTimestamp()
                    .setFooter(oldRole.guild.name, oldRole.guild.iconURL)
                    
                    logChannel.send(roleUpdate)
                }
            })
        });
        
        
        // Channels Log
        client.on('channelCreate', channel => {
        
            if(!channel.guild) return;
            if(!channel.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
            if(!channel.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
        
            var logChannel = channel.guild.channels.find(c => c.name === 'log');
            if(!logChannel) return;
        
            if(channel.type === 'text') {
                var roomType = 'Text';
            }else
            if(channel.type === 'voice') {
                var roomType = 'Voice';
            }else
            if(channel.type === 'category') {
                var roomType = 'Category';
            }
        
            channel.guild.fetchAuditLogs().then(logs => {
                var userID = logs.entries.first().executor.id;
                var userAvatar = logs.entries.first().executor.avatarURL;
        
                let channelCreate = new Discord.RichEmbed()
                .setTitle('**[CHANNEL CREATE]**')
                .setThumbnail(userAvatar)
                .setDescription(`**\n**:white_check_mark: Successfully \`\`CREATE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`)
                .setColor('GREEN')
                .setTimestamp()
                .setFooter(channel.guild.name, channel.guild.iconURL)
        
                logChannel.send(channelCreate);
            })
        });
        client.on('channelDelete', channel => {
            if(!channel.guild) return;
            if(!channel.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
            if(!channel.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
        
            var logChannel = channel.guild.channels.find(c => c.name === 'log');
            if(!logChannel) return;
        
            if(channel.type === 'text') {
                var roomType = 'Text';
            }else
            if(channel.type === 'voice') {
                var roomType = 'Voice';
            }else
            if(channel.type === 'category') {
                var roomType = 'Category';
            }
        
            channel.guild.fetchAuditLogs().then(logs => {
                var userID = logs.entries.first().executor.id;
                var userAvatar = logs.entries.first().executor.avatarURL;
        
                let channelDelete = new Discord.RichEmbed()
                .setTitle('**[CHANNEL DELETE]**')
                .setThumbnail(userAvatar)
                .setDescription(`**\n**:white_check_mark: Successfully \`\`DELETE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`)
                .setColor('RED')
                .setTimestamp()
                .setFooter(channel.guild.name, channel.guild.iconURL)
        
                logChannel.send(channelDelete);
            })
        });
        client.on('channelUpdate', (oldChannel, newChannel) => {
            if(!oldChannel.guild) return;
        
            var logChannel = oldChannel.guild.channels.find(c => c.name === 'log');
            if(!logChannel) return;
        
            if(oldChannel.type === 'text') {
                var channelType = 'Text';
            }else
            if(oldChannel.type === 'voice') {
                var channelType = 'Voice';
            }else
            if(oldChannel.type === 'category') {
                var channelType = 'Category';
            }
        
            oldChannel.guild.fetchAuditLogs().then(logs => {
                var userID = logs.entries.first().executor.id;
                var userAvatar = logs.entries.first().executor.avatarURL;
        
                if(oldChannel.name !== newChannel.name) {
                    let newName = new Discord.RichEmbed()
                    .setTitle('**[CHANNEL EDIT]**')
                    .setThumbnail(userAvatar)
                    .setColor('BLUE')
                    .setDescription(`**\n**:wrench: Successfully Edited **${channelType}** Channel Name\n\n**Old Name:** \`\`${oldChannel.name}\`\`\n**New Name:** \`\`${newChannel.name}\`\`\n**Channel ID:** ${oldChannel.id}\n**By:** <@${userID}> (ID: ${userID})`)
                    .setTimestamp()
                    .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL)
        
                    logChannel.send(newName);
                }
                if(oldChannel.topic !== newChannel.topic) {
                    let newTopic = new Discord.RichEmbed()
                    .setTitle('**[CHANNEL EDIT]**')
                    .setThumbnail(userAvatar)
                    .setColor('BLUE')
                    .setDescription(`**\n**:wrench: Successfully Edited **${channelType}** Channel Topic\n\n**Old Topic:**\n\`\`\`${oldChannel.topic || 'NULL'}\`\`\`\n**New Topic:**\n\`\`\`${newChannel.topic || 'NULL'}\`\`\`\n**Channel:** ${oldChannel} (ID: ${oldChannel.id})\n**By:** <@${userID}> (ID: ${userID})`)
                    .setTimestamp()
                    .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL)
        
                    logChannel.send(newTopic);
                }
            })
        });
        
        
        // Guild Logs
        client.on('guildUpdate', (oldGuild, newGuild) => {
        
            if(!oldGuild.member(client.user).hasPermission('EMBED_LINKS')) return;
            if(!oldGuild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
        
            var logChannel = oldGuild.channels.find(c => c.id === guildSettings[oldGuild.id].logChannel);
            if(!logChannel) return;
        
            oldGuild.fetchAuditLogs().then(logs => {
                var userID = logs.entries.first().executor.id;
                var userAvatar = logs.entries.first().executor.avatarURL;
        
                if(oldGuild.name !== newGuild.name) {
                    let guildName = new Discord.RichEmbed()
                    .setTitle('**[CHANGE GUILD NAME]**')
                    .setThumbnail(userAvatar)
                    .setColor('BLUE')
                    .setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` The guild name.\n\n**Old Name:** \`\`${oldGuild.name}\`\`\n**New Name:** \`\`${newGuild.name}\`\`\n**By:** <@${userID}> (ID: ${userID})`)
                    .setTimestamp()
                    .setFooter(newGuild.name, oldGuild.iconURL)
        
                    logChannel.send(guildName)
                }
                if(oldGuild.region !== newGuild.region) {
                    let guildRegion = new Discord.RichEmbed()
                    .setTitle('**[CHANGE GUILD REGION]**')
                    .setThumbnail(userAvatar)
                    .setColor('BLUE')
                    .setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` The guild region.\n\n**Old Region:** ${oldGuild.region}\n**New Region:** ${newGuild.region}\n**By:** <@${userID}> (ID: ${userID})`)
                    .setTimestamp()
                    .setFooter(oldGuild.name, oldGuild.iconURL)
        
                    logChannel.send(guildRegion);
                }
                if(oldGuild.verificationLevel !== newGuild.verificationLevel) {
                    if(oldGuild.verificationLevel === 0) {
                        var oldVerLvl = 'Very Easy';
                    }else
                    if(oldGuild.verificationLevel === 1) {
                        var oldVerLvl = 'Easy';
                    }else
                    if(oldGuild.verificationLevel === 2) {
                        var oldVerLvl = 'Medium';
                    }else
                    if(oldGuild.verificationLevel === 3) {
                        var oldVerLvl = 'Hard';
                    }else
                    if(oldGuild.verificationLevel === 4) {
                        var oldVerLvl = 'Very Hard';
                    }
        
                    if(newGuild.verificationLevel === 0) {
                        var newVerLvl = 'Very Easy';
                    }else
                    if(newGuild.verificationLevel === 1) {
                        var newVerLvl = 'Easy';
                    }else
                    if(newGuild.verificationLevel === 2) {
                        var newVerLvl = 'Medium';
                    }else
                    if(newGuild.verificationLevel === 3) {
                        var newVerLvl = 'Hard';
                    }else
                    if(newGuild.verificationLevel === 4) {
                        var newVerLvl = 'Very Hard';
                    }
        
                    let verLog = new Discord.RichEmbed()
                    .setTitle('**[GUILD VERIFICATION LEVEL CHANGE]**')
                    .setThumbnail(userAvatar)
                    .setColor('BLUE')
                    .setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` Guild verification level.\n\n**Old Verification Level:** ${oldVerLvl}\n**New Verification Level:** ${newVerLvl}\n**By:** <@${userID}> (ID: ${userID})`)
                    .setTimestamp()
                    .setFooter(oldGuild.name, oldGuild.iconURL)
        
                    logChannel.send(verLog);
                }
            })
        });
        client.on('guildMemberUpdate', (oldMember, newMember) => {
            var logChannel = oldMember.guild.channels.find(c => c.name === 'log');
            if(!logChannel) return;
        
            oldMember.guild.fetchAuditLogs().then(logs => {
                var userID = logs.entries.first().executor.id;
                var userAvatar = logs.entries.first().executor.avatarURL;
                var userTag = logs.entries.first().executor.tag;
        
                if(oldMember.nickname !== newMember.nickname) {
                    if(oldMember.nickname === null) {
                        var oldNM = '\`\`اسمه الاصلي\`\`';
                    }else {
                        var oldNM = oldMember.nickname;
                    }
                    if(newMember.nickname === null) {
                        var newNM = '\`\`اسمه الاصلي\`\`';
                    }else {
                        var newNM = newMember.nickname;
                    }
        
                    let updateNickname = new Discord.RichEmbed()
                    .setTitle('**[UPDATE MEMBER NICKNAME]**')
                    .setThumbnail(userAvatar)
                    .setColor('BLUE')
                    .setDescription(`**\n**:spy: Successfully \`\`CHANGE\`\` Member Nickname.\n\n**User:** ${oldMember} (ID: ${oldMember.id})\n**Old Nickname:** ${oldNM}\n**New Nickname:** ${newNM}\n**By:** <@${userID}> (ID: ${userID})`)
                    .setTimestamp()
                    .setFooter(oldMember.guild.name, oldMember.guild.iconURL)
        
                    logChannel.send(updateNickname);
                }
                if(oldMember.roles.size < newMember.roles.size) {
                    let role = newMember.roles.filter(r => !oldMember.roles.has(r.id)).first();
        
                    let roleAdded = new Discord.RichEmbed()
                    .setTitle('**[ADDED ROLE TO MEMBER]**')
                    .setThumbnail(oldMember.guild.iconURL)
                    .setColor('GREEN')
                    .setDescription(`**\n**:white_check_mark: Successfully \`\`ADDED\`\` Role to **${oldMember.user.username}**\n\n**User:** <@${oldMember.id}> (ID: ${oldMember.user.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
                    .setTimestamp()
                    .setFooter(userTag, userAvatar)
        
                    logChannel.send(roleAdded);
                }
                if(oldMember.roles.size > newMember.roles.size) {
                    let role = oldMember.roles.filter(r => !newMember.roles.has(r.id)).first();
        
                    let roleRemoved = new Discord.RichEmbed()
                    .setTitle('**[REMOVED ROLE FROM MEMBER]**')
                    .setThumbnail(oldMember.guild.iconURL)
                    .setColor('RED')
                    .setDescription(`**\n**:negative_squared_cross_mark: Successfully \`\`REMOVED\`\` Role from **${oldMember.user.username}**\n\n**User:** <@${oldMember.user.id}> (ID: ${oldMember.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
                    .setTimestamp()
                    .setFooter(userTag, userAvatar)
        
                    logChannel.send(roleRemoved);
                }
            })
            if(oldMember.guild.owner.user.id !== newMember.guild.owner.user.id) {
                let newOwner = new Discord.RichEmbed()
                .setTitle('**[UPDATE GUILD OWNER]**')
                .setThumbnail(oldMember.guild.iconURL)
                .setColor('GREEN')
                .setDescription(`**\n**:white_check_mark: Successfully \`\`TRANSFER\`\` The Owner Ship.\n\n**Old Owner:** <@${oldMember.user.id}> (ID: ${oldMember.user.id})\n**New Owner:** <@${newMember.user.id}> (ID: ${newMember.user.id})`)
                .setTimestamp()
                .setFooter(oldMember.guild.name, oldMember.guild.iconURL)
        
                logChannel.send(newOwner);
            }
        });
        client.on('guildMemberAdd', member => {
          var logChannel = member.guild.channels.find(c => c.name === 'log');
          if(!logChannel) return;
        
          let newMember = new Discord.RichEmbed()
          .setTitle('**[NEW MEMBER ADDED]**')
          .setThumbnail(member.user.avatarURL)
          .setColor('GREEN')
          .setDescription(`**\n**:arrow_lower_right: Joined **${member.user.username}** To the server!\n\n**User:** <@${member.user.id}> (ID: ${member.user.id})\n**Days In Discord:** ${Days(member.user.createdAt)}`)
          .setTimestamp()
          .setFooter(member.user.tag, member.user.avatarURL)
        
          logChannel.send(newMember);
        });
        function Days(date) {
            let now = new Date();
            let diff = now.getTime() - date.getTime();
            let days = Math.floor(diff / 86400000);
            return days + (days == 1 ? " day" : " days") + " ago";
        }
        client.on('guildMemberRemove', member => {
          var logChannel = member.guild.channels.find(c => c.name === 'log');
          if(!logChannel) return;
        
          let leaveMember = new Discord.RichEmbed()
          .setTitle('**[LEAVE MEMBER]**')
          .setThumbnail(member.user.avatarURL)
          .setColor('GREEN')
          .setDescription(`**\n**:arrow_upper_left: Leave **${member.user.username}** From the server.\n\n**User:** <@${member.user.id}> (ID: ${member.user.id})`)
          .setTimestamp()
          .setFooter(member.user.tag, member.user.avatarURL)
        
          logChannel.send(leaveMember);
        });
        
        
        // Voice Logs
        client.on('voiceStateUpdate', (voiceOld, voiceNew) => {
        
            if(!voiceOld.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
            if(!voiceOld.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
        
            var logChannel = voiceOld.guild.channels.find(c => c.name === 'log');
            if(!logChannel) return;
        
            voiceOld.guild.fetchAuditLogs().then(logs => {
                var userID = logs.entries.first().executor.id;
                var userTag = logs.entries.first().executor.tag;
                var userAvatar = logs.entries.first().executor.avatarURL;
        
        // Server Muted Voice
                if(voiceOld.serverMute === false && voiceNew.serverMute === true) {
                    let serverMutev = new Discord.RichEmbed()
                    .setTitle('**[VOICE MUTE]**')
                    .setThumbnail('https://images-ext-1.discordapp.net/external/pWQaw076OHwVIFZyeFoLXvweo0T_fDz6U5C9RBlw_fQ/https/cdn.pg.sa/UosmjqDNgS.png')
                    .setColor('RED')
                    .setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
                    .setTimestamp()
                    .setFooter(userTag, userAvatar)
        
                    logChannel.send(serverMutev);
                }
        // Server UnMuted Voice
                if(voiceOld.serverMute === true && voiceNew.serverMute === false) {
                    let serverUnmutev = new Discord.RichEmbed()
                    .setTitle('**[VOICE UNMUTE]**')
                    .setThumbnail('https://images-ext-1.discordapp.net/external/u2JNOTOc1IVJGEb1uCKRdQHXIj5-r8aHa3tSap6SjqM/https/cdn.pg.sa/Iy4t8H4T7n.png')
                    .setColor('GREEN')
                    .setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
                    .setTimestamp()
                    .setFooter(userTag, userAvatar)
        
                    logChannel.send(serverUnmutev);
                }
        // Server Deafen Voice
                if(voiceOld.serverDeaf === false && voiceNew.serverDeaf === true) {
                    let serverDeafv = new Discord.RichEmbed()
                    .setTitle('**[VOICE DEAFEN]**')
                    .setThumbnail('https://images-ext-1.discordapp.net/external/7ENt2ldbD-3L3wRoDBhKHb9FfImkjFxYR6DbLYRjhjA/https/cdn.pg.sa/auWd5b95AV.png')
                    .setColor('RED')
                    .setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
                    .setTimestamp()
                    .setFooter(userTag, userAvatar)
        
                    logChannel.send(serverDeafv);
                }
        // Server UnDeafen Voice
                if(voiceOld.serverDeaf === true && voiceNew.serverDeaf === false) {
                    let serverUndeafv = new Discord.RichEmbed()
                    .setTitle('**[VOICE UNDEAFEN]**')
                    .setThumbnail('https://images-ext-2.discordapp.net/external/s_abcfAlNdxl3uYVXnA2evSKBTpU6Ou3oimkejx3fiQ/https/cdn.pg.sa/i7fC8qnbRF.png')
                    .setColor('GREEN')
                    .setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
                    .setTimestamp()
                    .setFooter(userTag, userAvatar)
        
                    logChannel.send(serverUndeafv);
                }
            })
        // Join Voice Channel
            if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && !voiceOld.voiceChannel) {
                let voiceJoin = new Discord.RichEmbed()
                .setTitle('**[JOIN VOICE ROOM]**')
                .setColor('GREEN')
                .setThumbnail(voiceOld.user.avatarURL)
                .setDescription(`**\n**:arrow_lower_right: Successfully \`\`JOIN\`\` To Voice Channel.\n\n**Channel:** \`\`${voiceNew.voiceChannel.name}\`\` (ID: ${voiceNew.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`)
                .setTimestamp()
                .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)
        
                logChannel.send(voiceJoin);
            }
        // Leave Voice Channel
            if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && !voiceNew.voiceChannel) {
                let voiceLeave = new Discord.RichEmbed()
                .setTitle('**[LEAVE VOICE ROOM]**')
                .setColor('GREEN')
                .setThumbnail(voiceOld.user.avatarURL)
                .setDescription(`**\n**:arrow_upper_left: Successfully \`\`LEAVE\`\` From Voice Channel.\n\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`)
                .setTimestamp()
                .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)
        
                logChannel.send(voiceLeave);
            }
        // Changed Voice Channel
            if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && voiceNew.voiceChannel && voiceOld.voiceChannel != null) {
                let voiceLeave = new Discord.RichEmbed()
                .setTitle('**[CHANGED VOICE ROOM]**')
                .setColor('GREEN')
                .setThumbnail(voiceOld.user.avatarURL)
                .setDescription(`**\n**:repeat: Successfully \`\`CHANGED\`\` The Voice Channel.\n\n**From:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannelID})\n**To:** \`\`${voiceNew.voiceChannel.name}\`\` (ID: ${voiceNew.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`)
                .setTimestamp()
                .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)
        
                logChannel.send(voiceLeave);
            }
        });

client.on('message', message => {

    var prefix = "-";
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    let args = message.content.split(" ").slice(1);


    if (command === 'invites') {
        message.guild.fetchInvites().then(invs => {
            let member = client.guilds.get(message.guild.id).members.get(message.author.id);

            let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
            let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
            message.reply(' تم دعوة  **' + inviteCount + '** شخص من قِبلك!\n');

        });
    }
});

client.login(process.env.BOT_TOKEN);
