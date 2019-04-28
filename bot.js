
const Discord = require('discord.js');
	const tpoints = {};
	const vpoints = {};
	const jimp = require("jimp");
	const client = new Discord.Client();
	
	client.on('ready', () => {
	  console.log(`Logged in as ${client.user.tag}!`);
	 client.user.setActivity("",{type: 'watching'})
	  console.log('')
	  console.log('')
	  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
	  console.log(`[Start] ${new Date()}`);
	  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
	  console.log('')
	  console.log('╔[════════════════════════════════════]╗');
	  console.log(`Logged in as * [ " ${client.user.username} " ]`);
	  console.log('')
	  console.log(`اي دي البوت * [ " ${client.user.id} " ]`);
	  console.log('Informations :')
	  console.log('')
	  console.log(`servers! [ " ${client.guilds.size} " ]`);
	  console.log(`Users! [ " ${client.users.size} " ]`);
	  console.log(`channels! [ " ${client.channels.size} " ]`);
	  console.log('╚[════════════════════════════════════]╝')
	  console.log('')
	  console.log('╔[════════════]╗')
	  console.log(' Bot Is Online')
	  console.log('╚[════════════]╝')
	  console.log('')
	  console.log('')
	});
	
	client.on('message', message => {
    if(message.content == 'g!bot-all-server') {
             if(!message.author.id === '535544621514883093') return;
    var gimg;
    var gname;
    var gmemb;
    var gbots;
    var groles;
    var ginvite;
    var servers = client.guilds;
    servers.forEach((g)=>{
    gname = g.name;
    gimg = g.iconURL;
    gmemb = g.members.size;
    ginvite = g.invite.url
    gbots = g.members.filter(m=>m.bot).size;
    groles = g.roles.map(r=> {return r.name});
    let serv = new Discord.RichEmbed()
    .setAuthor(gname,gimg)
    .setThumbnail(gimg)
    .addField('Server bots',gbots)
    .addField('Server Member Count',gmemb = g.members.size)
    .setColor('RANDOM')
    message.channel.send(`
    Server Name : **${gname}**
    Server MemberCount : **${gmemb} **
            
            `);
          message.channel.sendEmbed(serv);
    }) 
    }
    });
	////////////////////////////
	//تكفي عندي اني عالي عليك
	//////////////////////////
	client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('Xsend')){
if (message.author.id !== '547060993885470720') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
message.channel.sendMessage(':no_entry_sign: You must be listening in a voice channel to use that!')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});

client.on('message', message => {
     if (message.content === "servers") {
     let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField("**Servers: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }
}); 
	
	client.on('message', message => {
		    if (message.content.startsWith("link")) {
		
		  message.channel.createInvite({
		        thing: true,
		        maxUses: 5,
		        maxAge: 86400
		    }).then(invite =>
		      message.author.sendMessage(invite.url)
		    )
		  message.channel.send("**:link:.its on your dms **")
		
		message.author.send(`**You can invite 5 members by using this link **`)
		
		
		    }
		});
		  client.on("guildBanAdd", (guild, member) => {
		
		  client.setTimeout(() => {
		
		    guild.fetchAuditLogs({
		
		        limit: 1,
		
		        type: 22
		
		      })
		
		      .then(audit => {
		
		        let exec = audit.entries.map(a => a.executor.username);
		
		        try {
		
		          let log = guild.channels.find('name', 'log');
		
		          if (!log) return;
		
		          bot.fetchUser(member.id).then(myUser => {
		
		          let embed = new Discord.RichEmbed()
		
		        .setAuthor(exec)
		
		        .setThumbnail(myUser.avatarURL)
		
		        .addField('- Banned User:',`**${myUser.username}**`,true)
		
		        .addField('- Banned By:',`**${exec}**`,true)
		
		        .setFooter(myUser.username,myUser.avatarURL)
		
		            .setTimestamp();
		
		          log.send(embed).catch(e => {
		
		            console.log(e);
		
		          });
		
		          });
		
		        } catch (e) {
		
		          console.log(e);
		
		        }
		
		      });
		
		  }, 1000);
		
		});
		 client.on("guildBanRemove", (guild, member) => {
		  client.setTimeout(() => {
		    guild.fetchAuditLogs({
		        limit: 1,
		        type: 22
		      })
		      .then(audit => {
		        let exec = audit.entries.map(a => a.executor.username);
		        try {
		          let log = guild.channels.find('name', 'log');
		          if (!log) return;
		          client.fetchUser(member.id).then(myUser => {
		          let embed = new Discord.RichEmbed()
		        .setAuthor("UnBanned")
				.setColor('#36393e') 
				 .setThumbnail(myUser.avatarURL)
		        .addField('UnBanned User',`**${myUser.username}**`,true)
		        .addField('UnBanned By',`**${exec}**`,true)
		        .setFooter(myUser.username,myUser.avatarURL)
		            .setTimestamp();
		          log.send(embed).catch(e => {
		            console.log(e);
		          });
		          });
		        } catch (e) {
		          console.log(e);
		        }
		      });
		  }, 1000);
		});
		
		
		
		
		
		client.on('message', message => {
		    if (message.content.startsWith("Link")) {
		
		  message.channel.createInvite({
		        thing: true,
		        maxUses: 5,
		        maxAge: 86400
		    }).then(invite =>
		      message.author.sendMessage(invite.url)
		    )
		  message.channel.send("**:link:.its on your dms **")
		
		message.author.send(`**You can invite 5 members by using this link **`)
		
		
		    }
		});
		
		
		
		
		client.on('roleCreate', role => {
		  client.setTimeout(() => {
		    role.guild.fetchAuditLogs({
		        limit: 1,
		        type: 30
		      })
		      .then(audit => {
		        let exec = audit.entries.map(a => a.executor.username)
		        try {
		
		          let log = role.guild.channels.find('name', 'log');
		          if (!log) return;
		          let embed = new Discord.RichEmbed()
		            .setTitle('+ Role Created')
		            .addField('Role Name', role.name, true)
		            .addField('Role ID', role.id, true)
		            .addField('Role Color', role.hexColor, true)
		            .addField('Role Permission', role.permissions, true)
		            .addField('By', exec, true)
		            .setColor('#36393e') 
		            .setTimestamp()
		          log.send(embed).catch(e => {
		            console.log(e);
		          });
		        } catch (e) {
		          console.log(e);
		        }
		      })
		  }, 1000)
		})
		
		
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
		client.on('guildUpdate', (oldGuild, newGuild) => {
		 
		    if(!oldGuild.member(client.user).hasPermission('EMBED_LINKS')) return;
		    if(!oldGuild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
		 
		    var logChannel = oldGuild.channels.find(c => c.name === 'log');
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
		                var oldNM = '\`\`old name\`\`';
		            }else {
		                var oldNM = oldMember.nickname;
		            }
		            if(newMember.nickname === null) {
		                var newNM = '\`\`new name\`\`';
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
	
	client.on('message', async message => {
	            if(message.content.includes('discord.gg')){ 
	                if(message.member.hasPermission("MANAGE_GUILD")) return;
	        if(!message.channel.guild) return;
	        message.delete()
	          var command = message.content.split(" ")[0];
	    let muterole = message.guild.roles.find(`name`, "muted");
	    if(!muterole){
	      try{
	        muterole = await message.guild.createRole({
	          name: "muted",
	          color: "#000000",
	          permissions:[]
	        })
	        message.guild.channels.forEach(async (channel, id) => {
	          await channel.overwritePermissions(muterole, {
	            SEND_MESSAGES: false,
	            ADD_REACTIONS: false
	          });
	        });
	      }catch(e){
	        console.log(e.stack);
	      }
	    }
	           if(!message.channel.guild) return message.reply('** This command only for servers**');
	     message.member.addRole(muterole);
	    const embed500 = new Discord.RichEmbed()
	      .setTitle("Muted Ads")
	            .addField(`**  You Have Been Muted **` , `**Reason : Sharing Another Discord Link**`)
	            .setColor("c91616")
	            .setThumbnail(`${message.author.avatarURL}`)
	            .setAuthor(message.author.username, message.author.avatarURL)
	        .setFooter(`${message.guild.name} `)
	     message.channel.send(embed500)
	     message.author.send('` plz talk to a staff `');
	   
	       
	    }
	})
	
	
	
	
	                             //
	//     D5el My  Github Thbeb eh !         //
	//                                        //
	//                                        //
	//                                        //
	////////////////////////////////////////////
	
	
	
	
	client.login(process.env.BOT_TOKEN);

