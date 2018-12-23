
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
	
	
	////////////////////////////
	//تكفي عندي اني عالي عليك
	//////////////////////////
	
	
client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('+star')){
if (message.author.id !== '521479557375852547') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
message.channel.sendMessage('جار ارسال الرسالة |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});
	
	////////////////////
	/////da le atfal |//
	/////////////////
	client.on("message", (message) => {
	    if(message.content.startsWith(prefix+"gmail")) {////Mal Team
	        message.channel.send(JSON.stringify({
	            email: Math.random().toString(36).slice(4).trim()+"@gmail.com",
	            password: Math.random().toString(36).slice(4).trim()
	        }))
	    }
	})//////////////Mal Team
	
	client.on("message", (message) => {
	    if(message.content.startsWith(prefix+"Gmail")) {////Mal Team
	        message.channel.send(JSON.stringify({
	            email: Math.random().toString(36).slice(4).trim()+"@gmail.com",
	            password: Math.random().toString(36).slice(4).trim()
	        }))
	    }
	})//////////////Mal Team
	    
	
	
	
	
	

	/////////////////////////////////////////////////////////////////////
	
	///////////////////////////////////////////////////////////
	//////////// Cry Cry /////////////////// Out Dog 
	
	
	
	////////////////////////////////////////////
	//                                        //
	//         
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
	
	
	client.on('guildMemberAdd', member=> {
	    member.addRole(member.guild.roles.find("name","»MâL"));
	    });
	client.on('guildMemberAdd', member=> {
	    member.addRole(member.guild.roles.find("name","『Members』"));
	    });
	
	
	////By 
	client.on('guildMemberAdd', member => {
	  member.guild.fetchInvites().then(guildInvites => {
	    const ei = invites[member.guild.id];
	    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
	    const inviter = client.users.get(invite.inviter.id);
	    const yumz = member.guild.channels.find("name", "chat");
	     yumz.send(`<@${member.user.id}> تم دعوته بواسطة <@${inviter.id}>`);
	   //  yumz.send(`<@${member.user.id}> joined using invite code ${invite.code} from <@${inviter.id}>. Invite was used ${invite.uses} times since its creation.`);
	  }); 
	});
	
	
	////////////////////////////////////////////
	//                                        //
	//                                        //
	//    M3L4 7ses Bek                       //
	//                                        //
	//                                        //
	//                                        //
	////////////////////////////////////////////
	client.on("message", message => {
	    if (message.content.startsWith("!obc")) {
	                 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
	  let args = message.content.split(" ").slice(1);
	  var argresult = args.join(' ');
	  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
	  m.send(`${argresult}\n ${m}`);
	  })
	  message.channel.send(`\`${message.guild.members.filter( m => m.presence.status !== 'all').size}\`:mailbox:  عدد المستلمين `);
	  message.delete();
	  };
	  });
	
	
	
	//welc
	
	
	
	////////////////////////////////////////////
	//                                        //
	//                                        //
	//   yala Ma3k Rbna                      //
	//    M3 el My                           //
	//      Code's                           //
	//                                        //
	////////////////////////////////////////////
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	client.on('message', eyad => {
	  if (eyad.content.startsWith('!uvban')) {
	if (!eyad.member.hasPermission("MOVE_MEMBERS")) return eyad.channel.send("**you dont have the perms to do this coomand** | ❎ ");
	 let men = eyad.mentions.users.first()
	 let mas = eyad.author
	 if(!men) return eyad.channel.send('`⛔| **plz mention the user **`');
	 eyad.guild.channels.forEach(c => {
	 c.overwritePermissions(men.id, {
	         CONNECT: true
	 })
	    })
	const embed = new Discord.RichEmbed()
	.setColor("RANDOM")
	.setDescription(`**
	 <@${men.id}>
	
	 now you can join a voice call :)
	
	by : <@${eyad.author.id}> **`)
	.setThumbnail("http://shopforclipart.com/images/green-tick/22.jpg")
	          
	client.users.get(men.id).sendEmbed(embed)
	const Embed11 = new Discord.RichEmbed()
	.setColor("RANDOM")
	.setAuthor(eyad.guild.name, eyad.guild.iconURL)
	.setDescription(`          <@${men.id}>
	
	now you can join a voice call 
	
	by : <@${eyad.author.id}>
	`)
	.setThumbnail("http://shopforclipart.com/images/green-tick/22.jpg")
	eyad.channel.sendEmbed(Embed11).then(eyad => {eyad.delete(15000)})
	    }
	}) // نهايه كود فك الباند الفويس
	 
	client.on('message', eyad => {
	  if (eyad.content.startsWith('!vban')) {
	if (!eyad.member.hasPermission("MOVE_MEMBERS")) return eyad.channel.send("❎ | **you dont have the perms to do this command**");
	let men = eyad.mentions.users.first()
	let mas = eyad.author
	if(!men) return eyad.channel.send('`⛔| ** plz mention the user **`');
	eyad.guild.channels.forEach(c => {
	c.overwritePermissions(men.id, {
	          CONNECT: false
	})
	    })
	const embed = new Discord.RichEmbed()
	.setColor("RANDOM")
	.setDescription(`**
	 <@${men.id}>
	
	you have been banned from the voice calls  
	
	by : <@${eyad.author.id}> **`)
	.setThumbnail("http://www.clker.com/cliparts/o/Y/d/G/j/1/close-hi.png")
	          
	client.users.get(men.id).sendEmbed(embed)
	const Embed11 = new Discord.RichEmbed()
	.setColor("RANDOM")
	.setAuthor(eyad.guild.name, eyad.guild.iconURL)
	.setDescription(`          <@${men.id}>
	
	you have been banned from the voice calls  
	
	by : <@${eyad.author.id}> `)
	.setThumbnail("http://www.clker.com/cliparts/o/Y/d/G/j/1/close-hi.png")
	eyad.channel.sendEmbed(Embed11).then(eyad => {eyad.delete(10000)})
	    }
	})// نهايه كود الباند الفويس
	/////////////////
	
	
	
	
	
	
	//////////
	 client.on('message', message => {
	   if(message.content.startsWith(prefix + "invites")) {
	    message.guild.fetchInvites().then(invs => {
	      let user = message.mentions.users.first() || message.author
	      let personalInvites = invs.filter(i => i.inviter.id === user.id);
	      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
	               let mmmmEmbed = new Discord.RichEmbed()
	                         .setAuthor(client.user.username)
	                         .setThumbnail(message.author.avatarURL)
	 .addField(`:low_brightness:you have invited`, ` ${inviteCount}:champagne_glass:`)
	           .setFooter(`:black_small_square:»Requested By: ${message.author.tag}`);
	           message.channel.send(mmmmEmbed)
	});
	  }
	});
	
	//-----------------------------------------------------------------------------------------------------------------------------
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////Help
	
		
	
	
			 
	
	
	 
	client.on("message", message => {
		var prefix = "#";
	 if (message.content === "!help") {
	  const embed = new Discord.RichEmbed()  
	      .setColor("#000000") 
	      .setDescription(`
		
	          ***¯−»Help Love Bot«−¯***
	         
	🔔 Orders Public- Type: **__!help-public__** To Get Orders Public
	🔐 Orders Admin- Type:  **__!help-Admin__** To Get Orders Admin
	🎶 Orders Music- Type:  **__!help-music__**  To Get Orders Music
	🎲 Orders Games- Type:  **__!help-games__** To Get Orders GAMES
	📬 Orders BroadCast: Type: **__!help-bc__** To Get Orders BroadCast
	♕ Orders Rank-Type: **__!help-Rank__** To Get Orders Rank 
	♻ Orders important Type: **__!help-imt__** To Get Orders important
	🖌 Orders Colors-Type: **__!help-colors__** To Get Orders Colors
	🌈 Orders Rainbow- Type:  **__!help-R__** To Get Orders Rainbow
	
	**By:#- Jacob❤**
	
	          `)
	   message.channel.sendEmbed(embed)
	    
	   }
	   }); 
	  
	
	
	
	
	
	
	
	
	
	
	
 
	   
	 
	
	
	  client.on("message", message => {
	    if (message.author.bot) return;
	     if (message.content === prefix + "help-games") {
	  const embedss2 = new Discord.RichEmbed() 
	      .setColor("RANDOM")
	      .setThumbnail(message.author.avatarURL)
	      .setDescription(`**
	    
	     Check Your DM**`)
	
			 message.channel.send(`<@${message.author.id}>`, {embed : embedss2});
	  const embed = new Discord.RichEmbed() 
	      .setColor("RANDOM")
	      .setThumbnail(message.author.avatarURL)
	      .setDescription(`
	***¯−ـ‗ऊ» اوامر العاب«ऊ‗ـ−¯***
	:video_game: !rps ~ حجر ورقة مقص
	:video_game: !speed ~ اسرع كتابة
	:video_game: !quas ~ اسئلة عامة
	:video_game: !نكت ~ نكت 
	:video_game: !عبة فكك ~ فكك
	:video_game: !عواصم عشوائية ~ عواصم
	:video_game: !لعبة كت تويت ~ كت تويت
	:video_game: !roll <number> ~ قرعة
	:video_game: !لو خيروك بطريقة حلوة ~ لو خيروك
	:video_game: !عبة مريم ~ مريم
	:video_game: !فوائد ونصائح  ~ هل تعلم
	:video_game: !لك عقاب قاسية ~ عقاب
	10% تحت الصيانة `)
	
	   message.author.sendEmbed(embed)
	    
	   }
	   }); 
	
				  
	client.on("message", message => {
	    if (message.author.bot) return;
	     if (message.content === prefix + "help-music") {
	  const embedss2 = new Discord.RichEmbed() 
	      .setColor("RANDOM")
	      .setThumbnail(message.author.avatarURL)
	      .setDescription(`**
	    
	     Check Your DM**`)
	
			 message.channel.send(`<@${message.author.id}>`, {embed : embedss2});
	  const embed = new Discord.RichEmbed() 
	      .setColor("RANDOM")
	      .setThumbnail(message.author.avatarURL)
	      .setDescription(`
	***¯ـ‗ऊ» اوامر الموسقي «ऊ‗ـ−¯***
	***╔[❖════════════❖]╗
	
	!play ~لتشغيل اغنية
	!join ~ دخول رومك الصوتي
	!stop ~ الخروج من رومك الصوتي
	!skip, تخطي الأغنية
	!pause ~ ايقاف الاغنية مؤقتا
	!resume ~ تكملة الاغنية
	!queue ~ اظهار قائمة التشغيل
	!np ~ اظهار الاغنية اللي انت مشغلها حاليا
	!vol 0:150 ~ الصوت
	•
	╚[❖════════════❖]╝***
	 `)
	   message.author.sendEmbed(embed)
	    
	   }
	   }); 
	
	
	client.on("message", message => {
	    if (message.author.bot) return;
	     if (message.content === prefix + "help-colors") {
	  const embedss2 = new Discord.RichEmbed() 
	      .setColor("RANDOM")
	      .setThumbnail(message.author.avatarURL)
	      .setDescription(`**
	    
	     Check Your DM**`)
	
			 message.channel.send(`<@${message.author.id}>`, {embed : embedss2});
	  const embed = new Discord.RichEmbed() 
	      .setColor("RANDOM")
	      .setThumbnail(message.author.avatarURL)
	      .setDescription('👑  colors👑')
	      .addField('❖-|!colors', `👑colors list💯`)
	      .addField('❖-|!createcolors', `☺لأنto create 133 color 💯`)
	      .addField('❖-|!color<number>', `😊get the color that you like😉`)
	  message.author.send({embed});
	      message.channel.send("")
	 }
	});
	
	
	
	
	
	
	client.on("message", message => {
	    if (message.author.bot) return;
	     if (message.content === prefix + "help-bc") {
	  const embedss2 = new Discord.RichEmbed() 
	      .setColor("RANDOM")
	      .setThumbnail(message.author.avatarURL)
	      .setDescription(`**
	    
	     Check Your DM**`)
	
			 message.channel.send(`<@${message.author.id}>`, {embed : embedss2});
	  const embed = new Discord.RichEmbed() 
	      .setColor("RANDOM")
	      .setThumbnail(message.author.avatarURL)
	         .setDescription(`**Help|هيلب
	  :e_mail: !bc | لأرسال برود كاست للكل
	  :e_mail: !obc  |  لأرسال برود كاست للأونلاين
	  :e_mail: !bc اكتب الرسالة عادي<by> اسم البعت الرسالة   <server> اسم السرفر <user> اسم الشخص    
	  :e_mail: !role-bc | لأرسال برودكاست لرتبة محدده 
	  :e_mail: !invite |  لدعوة البوت الي سيرفرك
	  :e_mail: !support | سيرفر السبورت** `)
	   message.author.sendEmbed(embed)
	   
	   }
	   });
	
	
	
	
	
	
	
	  
	//////////////////////HELP 
	client.on("message", message => {
	    if (message.author.bot) return;
	     if (message.content === prefix + "help-imt") {
	  const embedss2 = new Discord.RichEmbed() 
	      .setColor("RANDOM")
	      .setThumbnail(message.author.avatarURL)
	      .setDescription(`**
	    
	     Check Your DM**`)
	
			 message.channel.send(`<@${message.author.id}>`, {embed : embedss2});
	  const embed = new Discord.RichEmbed() 
	      .setColor("RANDOM")
	      .setThumbnail(message.author.avatarURL)
	      .setDescription(`**
	╭
	**╔[❖════════════❖]╗
	                Important  :fire:
	╚[❖════════════❖]╝**
	__to enable welcome message do channel name__
	 "welcome"
	__to enable Suggest message do channel name__
	"≄◉♔『≤suggestions≥』♔◉≄"
	__to enable log message do channel name__ "log"**
	════════════════════════════════════════════════════
	__!Build R »البوت يعمل لك روم__ 
	          ↘↙ بي الشكل دا
	***('Info', 'text');
	('Welcome', 'text');
	('Chat', 'text');
	('bot', 'text');
	('bo7', 'text');
	('pic', 'text');
	('cut', 'text');
	('log', 'text');
	('admin-chat', 'text');
	('▓▬▬▬ADMNS▬▬▬▓', 'voice');
	('Owner ', 'voice');
	('Co Owner', 'voice');
	('Dev  ', 'voice');
	('Admin ', 'voice');
	('Mod ', 'voice');
	('▓▬▬▬Other▬▬▬▓', 'voice');
	('[ R E C ] 🎥', 'voice');
	('YouTubers ', 'voice');
	('VIP + ', 'voice');
	('VIP ', 'voice');
	('Friends', 'voice');
	('▓▬▬▬WEL▬▬▬▓', 'voice');
	('Help ', 'voice');
	('Ξ〖ideas to share〗', 'voice');
	('▓▬▬▬♚▬▬▬▓', 'voice');
	('♧ Ξ〖 🎤  General📣  〗', 'voice');
	('♢ Ξ〖 🎤 مواهب 🎵  〗', 'voice');
	('❋ Ξ〖 🎈فعاليات 🏅 〗', 'voice');
	('❋ Ξ〖  🕋 القرآن الكريم  〗', 'voice');
	('▓▬▬▬♛▬▬▬▓', 'voice');
	('☆  Ξ〖 🔞  السجن العام 🔪 〗', 'voice');
	('▓▬▬▬Games▬▬▬▓', 'voice');
	('Clash of Clans | كلاش أوف كلانز', 'voice');
	('Clash Royal | كلاش رويال', 'voice');
	('Hajwala  Online | هجولة أون لاين', 'voice');
	('Bullet force | بولت فورس', 'voice');
	('MTA | ام تي اي', 'voice');
	('Ludo Star | لودو ستار', 'voice');
	('▓▬▬▬Private▬▬▬▓', 'voice');
	('✿Tow✿', 'voice');
	('✿Three✿', 'voice');
	('✿Four✿', 'voice');
	('✿Five✿', 'voice');
	('✿Six✿', 'voice');
	('▓▬▬▬AFK▬▬▬▓', ***
	════════════════════════════════════════════════════════════════════════
	`)
	
	       .setTimestamp()
	       .setFooter(message.author.username, message.author.avatarURL)
	message.author.sendEmbed(embed)
	
	.catch(() => {
	  message.channel.send('🚫الخاص مغلق');
	});
	
	}
	}); 
	
	
	
	//////////////////////////////////----------------------------/////////////////////----////////ID
	client.on("message", msg => {
	           var prefix = "!";
	  if(msg.content.startsWith (prefix + "id")) {
	    if(!msg.channel.guild) return msg.reply('**:x: this command for servers only **');
	      const embed = new Discord.RichEmbed();
	  embed.addField("🌹Ŋame ", `**[ ${msg.author.username}#${msg.author.discriminator} ]**`, true)
	          .addField("🔹IĐ ", `**[ ${msg.author.id} ]**`, true)
	          .setColor("RANDOM")
	          .setFooter(msg.author.username , msg.author.avatarURL)
	          .setThumbnail(`${msg.author.avatarURL}`)
	          .setTimestamp()
	          .setURL(`${msg.author.avatarURL}`)
	          .addField(':low_brightness:Státǖs', `**[ ${msg.author.presence.status.toUpperCase()} ]**`, true)
	          .addField('🎈Płáýíńģ ', `**[ ${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name} ]**`, true)
	          .addField('🔰Řoles ', `**[ ${msg.member.roles.filter(r => r.name).size} ]**`, true)
	          .addField('🎋Deloveber Bot', `**[ ${msg.author.bot.toString().toUpperCase()} ]**`, true);
	      msg.channel.send({embed: embed})
		    }
	});
	/////////////////////////////////////--------------------------------------///////////////////////////////////////ID
	client.on('message', message => {
	    if (message.content === "!ID") {
	    let embed = new Discord.RichEmbed()
	   .setColor("RANDOM")
	   .setThumbnail(message.author.avatarURL)
	   .setTitle(`info about ${message.guild.name}`)
	   .addField("Server Owner 👑",`➥ ` + `${message.guild.owner.user.username}`, true)
	   .addField('Server ID 🆔',`➥` + message.guild.id, true)
	   .addField("Owner Tag",`➥ ` +  `#` + message.guild.owner.user.discriminator, true)
	   .addField("Owner ID 🆔",`➥ ` + message.guild.owner.user.id, true)
	   .addField("Server Region📡",`➥ ` + message.guild.region, true)
	   .addField("Server Member Size🏧",`➥ ` + message.guild.members.size, true)
	   .addField("Server Channels Number🏧",`➥ ` + message.guild.channels.size, true)
	   .addField("Server Roels Number🏧",`➥ ` + message.guild.roles.size, true)
	   .addField("AFK channel💤",`➥ ` + message.guild.afkChannel || 'Null', true)
	   .addField("Server Created AT",`➥ ` + message.guild.createdAt, true)
	   .addField(`info about ${message.author.username}`, `➥ `)
	   .addField("Name",`➥ ` + `${message.author.username}`, true)
	   .addField('Tag',`➥ ` + "#" +  message.author.discriminator, true)
	   .addField("ID 🆔",`➥ ` + message.author.id, true)
	   .addField(" Account Created At",`➥ ` + message.author.createdAt, true)
	   .setTimestamp()
	   .setFooter(message.author.tag, message.author.avatarURL)
	      
	      /////////////////////////////////////////////////////GAMING
	   message.channel.sendEmbed(embed);
	     }
	 });
	///////////////////////////////////////Mahmoud-QuaStyle
	
	////////////////////////////////////////-----------////////////////////////////////////Ticket
	client.on("message", (message) => {
	    /// ALPHA CODES
	   if (message.content.startsWith("!testnew")) {     /// ALPHA CODES
	        const reason = message.content.split(" ").slice(1).join(" ");     /// ALPHA CODES
	        if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`This server doesn't have a \`Support Team\` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`);
	        if (message.guild.channels.exists("name", "ticket-${x}" + message.author)) return message.channel.send(`You already have a ticket open.`);    /// ALPHA CODES
	        message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
	            let role = message.guild.roles.find("name", "Support Team");
	            let role2 = message.guild.roles.find("name", "@everyone");
	            c.overwritePermissions(role, {
	                SEND_MESSAGES: true,
	                READ_MESSAGES: true/////////////// ticket-{message.author.id} ticket-{message.author.id}
	            });    /// ALPHA CODES
	            c.overwritePermissions(role2, {
	                SEND_MESSAGES: false,
	                READ_MESSAGES: false
	            });
	            c.overwritePermissions(message.author, {
	                SEND_MESSAGES: true,
	                READ_MESSAGES: true
	            });
	            message.channel.send(`:white_check_mark: Your ticket has been created..,#{c.name}.`);
	            const embed = new Discord.RichEmbed()
	                .setColor(0xCF40FA)
	                .addField(`Hey ${message.author.username}!`, `Please try explain why you opened this ticket with as much detail as possible. Our **Support Staff** will be here soon to help.`)
	                .setTimestamp();
	            c.send({
	                embed: embed
	            });
	        }).catch(console.error);
	    }
	 
	 
	  if (message.content.startsWith("!close")) {
	        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
	 
	       message.channel.send(`Are you sure? Once confirmed, you cannot reverse this action!\nTo confirm, type \`!confirm\`. This will time out in 10 seconds and be cancelled.`)
	           .then((m) => {
	               message.channel.awaitMessages(response => response.content === '!confirm', {
	                       max: 1,
	                       time: 10000,
	                       errors: ['time'],
	                   })    /// ALPHA CODES
	                   .then((collected) => {
	                       message.channel.delete();
	                   })    /// ALPHA CODES
	                   .catch(() => {
	                       m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
	                           m2.delete();
	                       }, 3000);
	                   });
	           });
	   }
	 
	});
	
	///////////////////
	client.on("message", (message) => {
	    /// Mal Mahmoud#5661
	   if (message.content.startsWith("!new")) {     /// Mal 
	        const reason = message.content.split(" ").slice(1).join(" ");     /// Mal
	        if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`This server doesn't have a \`Support Team\` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`);
	        if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`);    /// ALPHA CODES
	        message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
	            let role = message.guild.roles.find("name", "Support Team");
	            let role2 = message.guild.roles.find("name", "@everyone");
	            c.overwritePermissions(role, {
	                SEND_MESSAGES: true,
	                READ_MESSAGES: true
	            });    /// Mal  
	            c.overwritePermissions(role2, {
	                SEND_MESSAGES: false,
	                READ_MESSAGES: false
	            });
	            c.overwritePermissions(message.author, {
	                SEND_MESSAGES: true,
	                READ_MESSAGES: true
	            });
	            message.channel.send(`:white_check_mark: **Your Ticket Has Been Created**,#${c.name}`);
	            const embed = new Discord.RichEmbed()
	                .setColor(0xCF40FA)
	                .addField(`Hey ${message.author.username}!`, `Please try explain why you opened this ticket with as much detail as possible. Our **Support Staff** will be here soon to help.`)
	                .setTimestamp();
	            c.send({
	                embed: embed
	            });
	        }).catch(console.error);
	    }
	 
	 
	  if (message.content.startsWith("g....!close")) {
	        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
	 
	       message.channel.send(`Are you sure? Once confirmed, you cannot reverse this action!\nTo confirm, type \`!confirm\`. This will time out in 10 seconds and be cancelled.`)
	           .then((m) => {
	               message.channel.awaitMessages(response => response.content === '!confirm', {
	                       max: 1,
	                       time: 10000,
	                       errors: ['time'],
	                   })    /// ALPHA CODES
	                   .then((collected) => {
	                       message.channel.delete();
	                   })    /// ALPHA CODES
	                   .catch(() => {
	                       m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
	                           m2.delete();
	                       }, 3000);
	                   });
	           });
	   }
	 ///////Mal 
	});
	
	//////////////////test
	client.on("message", (message) => {
	    /// ALPHA CODES
	   if (message.content.startsWith("!testt")) {     /// ALPHA CODES
	        const reason = message.content.split(" ").slice(1).join(" ");     /// ALPHA CODES
	        if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`This server doesn't have a \`Support Team\` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`);
	        if (message.guild.channels.exists("name", "<ticket-{message.author.id}>" + message.author.id)) return message.channel.send(`You already have a ticket open.`);    /// ALPHA CODES
	        message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
	            let role = message.guild.roles.find("name", "Support Team");
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
	            message.channel.send(`:white_check_mark: **Your Ticket Has Been Created**,<#{message.author.id}>`);
	            const embed = new Discord.RichEmbed()
	                .setColor(0xCF40FA)
	                .addField(`Hey ${message.author.username}!`, `Please try explain why you opened this ticket with as much detail as possible. Our **Support Staff** will be here soon to help.`)
	                .setTimestamp();
	            c.send({
	                embed: embed
	            });
	        }).catch(console.error);
	    }
	 
	 
	  if (message.content.startsWith("g..!close")) {
	        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
	 
	       message.channel.send(`Are you sure? Once confirmed, you cannot reverse this action!\nTo confirm, type \`!confirm\`. This will time out in 10 seconds and be cancelled.`)
	           .then((m) => {
	               message.channel.awaitMessages(response => response.content === '!confirm', {
	                       max: 1,
	                       time: 10000,
	                       errors: ['time'],
	                   })    /// ALPHA CODES
	                   .then((collected) => {
	                       message.channel.delete();
	                   })    /// ALPHA CODES
	                   .catch(() => {
	                       m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
	                           m2.delete();
	                       }, 3000);
	                   });
	           });
	   }
	 
	});
	
	//////////////////////////////////////////////////////////////////////Support 2 
	client.on('message', message => {
	     if (message.content === "!support") {
	     let embed = new Discord.RichEmbed()
	  .setAuthor(message.author.username)
	  .setColor("#9B59B6")
	  .addField(" **:small_orange_diamond: Link Server Support︾**" , "  **https://discord.gg/spWYAfZ**")
	  .addField(" **:small_blue_diamond: Link  **" , "  **https://discordapp.com/api/oauth2/authorize?client_id=489487215270035466&permissions=2146958839&scope=bot**")     
	     
	  message.channel.sendEmbed(embed);
	    }
	});////////////////////////////////////By:Mahmoud-QuaStyle
	
	client.on('message', message => {
	     if (message.content === "!invite") {
	     let embed = new Discord.RichEmbed()
	  .setAuthor(message.author.username)
	  .setColor("#9B59B6")
	  .addField(" **:small_orange_diamond: Link Server Support︾**" , "  **https://discord.gg/spWYAfZ**")
	  .addField(" **:small_blue_diamond: Link ︾ **" , "  **https://discordapp.com/api/oauth2/authorize?client_id=521985606008569857&permissions=2146958839&scope=bot**")     
	     
	  message.channel.sendEmbed(embed);
	    }
	});///////////////////////////////
	
	
	client.on('message', message => {
	     if (message.content === "!help") {
	     let embed = new Discord.RichEmbed()
	  .setAuthor(message.author.username)
	  .setColor("#9B59B6")
	  .addField(" ** :gear: Server Support :gear: **" , "  **https://discord.gg/spWYAfZ**")
	     
	     
	  message.channel.sendEmbed(embed);
	    }
	});
	
	
	client.on('message', message => {
	     if (message.content === "!link") {
	     let embed = new Discord.RichEmbed()
	  .setAuthor(message.author.username)
	  .setColor("#9B59B6")
	  .addField(" ** :gear: Server Support :gear: **" , "  **https://discord.gg/spWYAfZ**")
	     
	     
	  message.channel.sendEmbed(embed);
	    }
	});
	
	
	
	///2
	
	
	
	
	
	
	///////////////////////////////////////////////////////////////////////////////////////////////////Avatar
	client.on('message', message => {
	    if (message.content.startsWith("!avatar")) {
	        if (message.author.bot) return
	        var mentionned = message.mentions.users.first();
	    var omar;
	      if(mentionned){
	          var omar = mentionned;
	      } else {
	          var omar = message.author;
	          
	      }
	        const embed = new Discord.RichEmbed()
	        .setColor("RANDOM")
	        .setAuthor('Avatar Link :')
	        .setTitle('Click Here')
	        .setURL(`${omar.avatarURL}`)
	        .setImage(`${omar.avatarURL}`)
	        .setFooter('GAMING BOT',client.user.avatarURL) 
	      message.channel.sendEmbed(embed);
	    }
	});
	////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////Photo Server IMAGE 
	client.on("message", message => {
	    const prefix = "!"
	              
	          if(!message.channel.guild) return;
	   if(message.author.bot) return;
	      if(message.content === prefix + "image"){ 
	          const embed = new Discord.RichEmbed()
	  
	      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
	  .setAuthor(message.author.username, message.guild.iconrURL)
	    .setColor(0x164fe3)
	    .setImage(message.guild.iconURL)
	    .setURL(message.guild.iconrURL)
	                    .setTimestamp()
	
	   message.channel.send({embed});
	      }
	  });
	
	///////////////////////////////////////////////////////////////////////--------------///////////////MOVE 
	
	
	 
	client.on('message', message => {
		var prefix = "!";
	if(!message.channel.guild) return;
	if(message.content.startsWith(prefix + 'move')) {
	 if (message.member.hasPermission("MOVE_MEMBERS")) {
	 if (message.mentions.users.size === 0) {
	 return message.channel.send("``To use the command say  : " +prefix+ "move [USER]``")
	}
	if (message.member.voiceChannel != null) {
	 if (message.mentions.members.first().voiceChannel != null) {
	 var authorchannel = message.member.voiceChannelID;
	 var usermentioned = message.mentions.members.first().id;
	var embed = new Discord.RichEmbed()
	 .setTitle("Succes!")
	 .setColor("#000000")
	 .setDescription(`You have moved <@${usermentioned}>To your call✅ `)
	var embed = new Discord.RichEmbed()
	.setTitle(`You are Moved in ${message.guild.name}`)
	 .setColor("RANDOM")
	.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
	 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
	message.guild.members.get(usermentioned).send(embed)
	} else {
	message.channel.send("``you cant move this member "+ message.mentions.members.first() +" `he must be in voice call`")
	}
	} else {
	 message.channel.send("**`you have to be in voice call to do this command``**")
	}
	} else {
	message.react("❌")
	 }}});	
	
	
	/////////////////////////////////////////////////--------///////////////////////////ban
	client.on('message', message => {
		var prefix = "!"
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
	  /*let log = client.channels.find("name", "log");
	  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
	  if (message.mentions.users.size < 1) return message.reply("**mention the user**");
	  if(!reason) return message.reply ("**add the reason**");
	  if (!message.guild.member(user)
	  .bannable) return message.reply("**لi cant kick this user he have higher role than me**");
	
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
	
	
	
	
	////////////unban
	client.on('message' , message => {
	    var prefix = "!";
	    let user = message.mentions.users.first()|| client.users.get(message.content.split(' ')[1])
	    if(message.content.startsWith(prefix + 'unban')) {
	        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('❌|**\`ADMINISTRATOR\`لا توجد لديك رتبة`**');
	        if(!user) return  message.channel.send(`Do this ${prefix} <@ID user> \n or \n ${prefix}unban ID user`);
	        message.guild.unban(user);
	        message.guild.owner.send(`unbanned user \n ${user} \n By : <@${message.author.id}>`)
	        var embed = new Discord.RichEmbed()
	        .setThumbnail(message.author.avatarURl)
	        .setColor("RANDOM")
	        .setTitle('**●Unban** !')
	        .addField('**●User Unban :** ', `${user}` , true)
	        .addField('**●By :**' ,       ` <@${message.author.id}> ` , true)
	        .setAuthor(message.guild.name)
	        message.channel.sendEmbed(embed)
	    }
	});	///////////////////////////////////////////// By:Mahmoud-QuaStyle
	
	////////////////----------------------------------------------------------------///////////bans 
	client.on('message', message => {
	    if (message.content.startsWith("!bans")) {
	        message.guild.fetchBans()
	        .then(bans => message.channel.send(`${bans.size} banned members count `))
	  .catch(console.error);
	}
	});
	
	
	
	
	
	
	//////////////////////////////////////////////---------------//////////////////////////////////////// P    I   N  G 
	
	client.on('message', message =>{
	    if(message.content === '!ping'){
	let start = Date.now(); message.channel.send('pong').then(message => { 
	message.edit(`\`\`\`js
	Time taken: ${Date.now() - start} ms
	Discord API: ${client.ping.toFixed(0)} ms\`\`\``);
	    });
	    }
	});
	
	///////////////////////////////////////////--------------////////////////////////////////// ID   BOT 
	
	
	client.on('message', message => {
	    if (message.content.startsWith("!idbot")) {
	    message.channel.send({
	        embed: new Discord.RichEmbed()
	            .setAuthor(client.user.username,client.user.avatarURL)
	            .setThumbnail(client.user.avatarURL)
	            .setColor('RANDOM')
	            .setTitle('``INFO Name Bot`` ')
	            .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
	            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
	            .addField('``servers``', [client.guilds.size], true) 
	            .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
	            .addField('``My ID``' , `[ ${client.user.id} ]` , true)
	            .addField("``Your Name``", `${message.author.username}`)
	            .addField('``your tag``', message.author.discriminator)
	            .addField('``Your id``', message.author.id)
	            .addField('``Bot``', message.author.bot)
	            .addField('``date of registration``', message.author.createdAt)
	    })
	}
	});
	
	
	////////////////////////////////////////////////-------///////////////////////// i n  v i t e s 
	
	
	
	////////////////////// ////////////////////// ////////////////////// ////////////////////// /Law 7ad d5al el Server y5od Rank Member Auto
	client.on('guildMemberAdd', member=> {
	    member.addRole(member.guild.roles.find("name","Member"));
	    });
	client.on('guildMemberAdd', member=> {
	    member.addRole(member.guild.roles.find("name","☤Member☤"));
	    });
	
	
	//////////////////////////////////-----------////////////////////// ////////////////////// -----///////////////
	
	
	
	//////////////////////////------//////////////////////////////////// //////////////////--------------////////////////////////BOT 
	client.on('message', message => {
	     if (message.content === "!bot") {
	     let embed = new Discord.RichEmbed()
	  .setColor("RANDOM")
	  .addField("**Servers:**" , client.guilds.size)
	  .addField("**Users:**", client.users.size)
	  .addField("**channels:**", client.channels.size)
	  .setTimestamp()
	message.channel.sendEmbed(embed);
	    }
	});
	
	
	///////////////-------------///////////////////////// ////////////////////// /////////--------------------------------------------------//////////Roles 
	client.on('message', message => {
	    if (message.content === '!roles') {
	        var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')
	        const embed = new Discord.RichEmbed()
	        .setColor('RANDOM')
	        .addField('***Roles***: :100: ',`**[${roles}]**`)
	        message.channel.sendEmbed(embed);
	    }
	});
	
	
	
	////////////////////////-----------////////////////////////////// ////////////// /////No Share Link Discordddddddddddddddddddddd
	
	
	client.on('message', message => {
	     if (message.content === "servers") {
	     let embed = new Discord.RichEmbed()
	  .setColor("RANDOM")
	  .addField("**Servers: **" , client.guilds.size)
	  message.channel.sendEmbed(embed);
	    }
	}); 
	
	//////////////////////--------------------/////////////////////////////////-----------------------/////////Clear <Number>
	 
	
	    
	 
	
	

client.on('message', msg => {
	var prefix = "!";
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```how many messages do u want to clear 👌```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nclear messages: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});


/////////////////-----------//////////////////////////////// //////////////////////////////-----------/////////////////////emojilist

	
	/////////////////-----------//////////////////////////////// //////////////////////////////-----------/////////////////////emojilist
	
	
	
	
	client.on('message', message => { 
	let PREFIX = '!'
	    if (message.content.startsWith(PREFIX + 'Emojiserverda')) {
	
	        const List = message.guild.emojis.map(e => e.toString()).join(" ");
	
	        const EmojiList = new Discord.RichEmbed()
	            .setTitle('➠ Emojis') 
	            .setAuthor(message.guild.name, message.guild.iconURL) 
	            .setColor('RANDOM') 
	            .setDescription(List) 
	            .setFooter(message.guild.name) 
	        message.channel.send(EmojiList) 
	    }
	});
	
	
	///////////////--------/////////////////////////////////////// //////////////////////////////--------------////Rules
	
	
	client.on('message', message => {
	            if (message.content.startsWith("!rules")) {
	     let embed = new Discord.RichEmbed()
	.setImage('https://cdn.discordapp.com/attachments/512651967273893919/522020210870452231/Doneemojirules.png')
	.addField('**By:Jacob❤** ')
	.setDescription(`**
	    ممنوع نشر سير فرات بالخاص او بالعام
	ممنوع الكلمات المسيئة (السب/الشتم)
	ممنوع السبام
	ممنوع طلب الرتب
	ممنوع الزعل
	     **`)
	.setColor('#7d2dbe')
	  message.channel.sendEmbed(embed);
	    }
	});
	
	
	
	client.on('message', msg => {//msg
	    if (msg.content === '!rules') {
	      msg.channel.send({file : "https://cdn.discordapp.com/attachments/512651967273893919/522020210870452231/Doneemojirules.png"})
	    }////top
	  });;
	
	
	
	
	////////////----------------//////////////////////////////////// ////////////////////// ////////////////////////////BC
	
	
	//////////////////////////////////////////Autoo Member TO Join Server 
	
	client.on ("guildMemberAdd", member => {
	  
	   var role = member.guild.roles.find ("Member", "1");
	   member.addRole (role);
	  
	})
	
	client.on ("guildMemberRemove", member => {
	   
	})
	
	
	
	////////////////////////////-------------/////////////////////////Color Nubmber
	
	client.on('message', message => {
	          let args = message.content.split(' ').slice(1);
	   if(message.content.split(' ')[0] == '!color'){
	           const embedd = new Discord.RichEmbed()
	     .setFooter('Requested by '+message.author.username, message.author.avatarURL)
	   .setDescription(`**THere is no color with this name ** :x: `)
	   .setColor(`ff0000`)
	 
	    if(!isNaN(args) && args.length > 0)
	   
	 
	if    (!(message.guild.roles.find("name",`${args}`))) return  message.channel.sendEmbed(embedd);
	 
	 
	       var a = message.guild.roles.find("name",`${args}`)
	                if(!a)return;
	const embed = new Discord.RichEmbed()
	                   
	     .setFooter('Requested by '+message.author.username, message.author.avatarURL)
	   .setDescription(`**Done , You have new color . :white_check_mark: **`)
	 
	   .setColor(`${a.hexColor}`)
	  message.channel.sendEmbed(embed);
	          if (!args)return;
	setInterval(function(){})
	                  let count = 0;
	                  let ecount = 0;
	        for(let x = 1; x < 201; x++){
	           
	            message.member.removeRole(message.guild.roles.find("name",`${x}`))
	         
	            }
	                message.member.addRole(message.guild.roles.find("name",`${args}`));
	       
	           
	    }
	});
	
	///////////////////////////////////////////////////////////////////////// ///////////////-//////////////date
	const HeRo = new Discord.Client();
	client.on('message', message => {
	var prefix = "#";
	
	    if (message.content === prefix + "date") {
	        if (!message.channel.guild) return message.reply('** This command only for servers **');  
	        var currentTime = new Date(),
	            Year = currentTime.getFullYear(),
	            Month = currentTime.getMonth() + 3,
	            Day = currentTime.getDate();
	
	            var Date15= new Discord.RichEmbed()
	            .setTitle("**「  Date  」 **")
	            .setColor('RANDOM')
	            .setTimestamp()
	            .setDescription( "「"+ Day + "-" + Month + "-" + Year + "」")
	             message.channel.sendEmbed(Date15);
	    }
	});
	/////////////////////////////////////////////////////////----///////////////////Code law 7ad tl3 men server we gh tany y5od nfs el Rank
	var ALPHACODES = {};
	client.on('guildMemberRemove', member => {
	ALPHACODES[member.id] = {roles: member.roles.array()};
	});
	client.on('guildMemberAdd', member => {
	if(!ALPHACODES[member.user.id]) return;
	console.log(ALPHACODES[member.user.id].roles.length);
	for(let i = 0; i < ALPHACODES[member.user.id].roles.length + 1; i++) {
	member.addRole(ALPHACODES[member.user.id].roles.shift());
	}
	});
	/////////////////////////////////////////////////////////////////////////////////// ////////////////////////////My Invite
	
	client.on('message',message =>{
	      var prefix = "#";
	 if(message.content.split(' ')[0].toLowerCase() == prefix + 'invites') {
	let guild = message.guild
	var codes = [""]
	 var nul = 0
	      
	guild.fetchInvites()
	.then(invites => {
	invites.forEach(invite => {
	if (invite.inviter === message.author) {
	    nul+=invite.uses
	codes.push(`discord.gg/${invite.code}`)
	}
	 
	})
	  if (nul > 0) {
	      const e = new Discord.RichEmbed()
	      .addField(`${message.author.username}`, `Have Invites **${nul}** Pèrson`)
	      .setColor('#36393e')
	      message.channel.send(e)
	  }else {
	                       var embed = new Discord.RichEmbed()
	                        .setColor("#000000")
	                        .addField(`${message.author.username}`, `You have not invited anyone to this server`)
	
	                       message.channel.send({ embed: embed });
	                        return;
	                    }
	}).then(m => {
	if (codes.length < 0) {
	    var embed = new Discord.RichEmbed()
	.setColor("#000000")
	.addField(`Your invites in ${message.guild.name}`, `You currently don't have any active invites! Please create an invite and start inviting, then you will be able to see your codes here!`)
	message.channel.send({ embed: embed });
	return;
	} else {
	    var embed = new Discord.RichEmbed()
	.setColor("#000000")
	.addField(`Your invites in ${message.guild.name}`, `Invites :\n${codes.join("\n")}`)
	.setColor('#36393e')
	message.channel.send({ embed: embed });
	return;
	}
	})
	}
	
	});
	
	/////////////--------////////////---------------//////////Code law 7ad tl3 men server lma ygy tany nfs el rank el kan ma3h yrg3lo tany 
	
	
	
	
	
	////////////////-----------------------/////Send
	
	client.on('message' , message => {
	  var prefix = "#";
	  if(message.author.bot) return;
		if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' you dont have perms to do this command ');
	  if(message.content.startsWith(prefix + "send")) {
	    let args = message.content.split(" ").slice(1);
	
	
	    let suggestmessage = args.join(" ").slice(22);
	    let suggestchannel = message.mentions.channels.first();
	
	    if (!suggestchannel) {
	        return message.reply("Please Mention the channel!")
	    }
	
	    if (!suggestmessage) {
	        return message.reply("Plase Give Text To send Channel!")
	    
	         
	    }
	     message.delete();
	suggestchannel.send("@everyone  `||` @here ");
	    let embed = new Discord.RichEmbed()
	        .addField("**", `${suggestmessage}`)
	        .setFooter(`by ${message.author.tag}`)
	        .setTimestamp()
	    suggestchannel.send({
	        embed
	    }).then(msg => {
	        msg.react("✅").then(r => msg.react("❎"))
	    });
	
	
	    message.reply(`Your message is sended.`).then(msg => msg.delete(1000));
	    return;
	}
	});
	/////////////////////////////////////////////////////////////////////////-----//////////////MC  Umc
	
	
	client.on('message', message => {
	
	    if (message.content === "#mc") {
	                        if(!message.channel.guild) return message.reply(' this command for servers only !!');
	
	if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' you dont have perms to do this command ');
	           message.channel.overwritePermissions(message.guild.id, {
	         SEND_MESSAGES: false
	
	           }).then(() => {
	               message.reply("cloesed the channel ✅ ")
	           });
	             }
	if (message.content === "!umc") {
	    if(!message.channel.guild) return message.reply(' this command for servers only !!');
	
	if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('you dont have perms to do this command');
	           message.channel.overwritePermissions(message.guild.id, {
	         SEND_MESSAGES: true
	
	           }).then(() => {
	               message.reply("opend the channel✅")
	           });
	             }
	
	
	
	});
	
	
	//////////////////////////////////////// ////////////////////// ////////////////////// /////////////add ROLE ALL 
	client.on('message', message => {
	   
	    if(message.author.bot) return;
	    if(message.channel.type === 'dm') return;
	   
	    var command = message.content.toLowerCase().split(" ")[0]; // Mal Team
	    var args = message.content.toLowerCase().split(" ");
	    var userM = message.guild.member(message.mentions.users.first() || message.guild.members.find(m => m.id === args[1]));
	    var prefix = '!'; // هنا تقدر تغير البرفكس <==================
	   
	    if(command == prefix + 'role') {
	        if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(':no_entry: | You dont have **MANAGE_ROLES** Permission!');
	        if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES')) return message.channel.send(':no_entry: | I dont have **MANAGE_ROLES** Permission!');
	        if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return message.channel.send(':no_entry: | I dont have **EMBED_LINKS** Permission!');
	 
	        let roleCommand = new Discord.RichEmbed()
	        .setTitle(':white_check_mark: Role Command.')
	        .setColor('GREEN')
	        .setDescription(`**\n${prefix}role <SOMEONE> <ROLE>**\n➥ \`\`For give or delete from some one the role.\`\`\n\n**${prefix}role humans add <ROLE>**\n➥ \`\`For give the humans role.\`\`\n\n**${prefix}role humans remove <ROLE>**\n➥ \`\`For delete from the humans role.\`\`\n\n**${prefix}role bots add <ROLE>**\n➥ \`\`For give the bots role.\`\`\n\n**${prefix}role bots remove <ROLE>**\n➥ \`\`For delete from the bots role.\`\`\n\n**${prefix}role all add <ROLE>**\n➥ \`\`For give all role.\`\`\n\n**${prefix}role all remove <ROLE>**\n➥ \`\`For remove from all role.\`\``)
	        .setTimestamp()
	        .setFooter(message.author.tag, message.author.avatarURL)
	 
	        if(!args[1]) return message.channel.send(roleCommand);
	        if(!userM && args[1] !== 'humans' && args[1] !== 'bots' && args[1] !== 'all') return message.channel.send(roleCommand);
	 
	        if(userM) {
	            var argsRole = message.content.toLowerCase().split(' ').slice(2);
	        }else if(args[1] === 'humans' || args[1] === 'bots' || args[1] === 'all') {
	            var argsRole = message.content.toLowerCase().split(' ').slice(3); // حقوق الفا كوودز Alpha Codes.
	        }
	 
	        var getRole = message.mentions.roles.first() || message.guild.roles.find(r => r.id === argsRole) || message.guild.roles.find(r => r.name.toLowerCase().includes(argsRole));
	 
	        if(userM) {
	            if(!getRole) return message.channel.send(':no_entry: | I couldn\'t find the role!');
	            if(getRole.name === '@everyone') return message.channel.send(':no_entry: | I couldn\'t find the role!');
	            if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`GIVE\`\` Or \`\`DELETE\`\` Any user have or not have **${getRole.name}** role beacuse this role highest from my role!`);
	           
	            if(!message.guild.member(userM.user).roles.has(getRole.id)) {
	                message.guild.member(userM.user).addRole(getRole.id);
	                message.channel.send(`:white_check_mark: | Successfully \`\`GIVE\`\` The role **${getRole.name}** To user **${userM.user.tag}**`);
	            }else if(message.guild.member(userM.user).roles.has(getRole.id)) {
	                message.guild.member(userM.user).removeRole(getRole.id);
	                message.channel.send(`:white_check_mark: | Successfully \`\`DELETE\`\` The role **${getRole.name}** From user **${userM.user.tag}**`);
	            }
	        }else if(args[1] === 'humans') {
	            let notArgs = new Discord.RichEmbed()
	            .setTitle(':white_check_mark: Role Command.')
	            .setColor('GREEN')
	            .setDescription(`**\n${prefix}role humans add <ROLE>**\n➥ \`\`For give the humans the role.\`\`\n\n**${prefix}role humans remove <ROLE>**\n➥ \`\`For delete the role from all humans.\`\``)
	            .setTimestamp()
	            .setFooter(message.author.tag, message.author.avatarURL)
	           
	            if(!args[2]) return message.channel.send(notArgs);
	            if(!args[3]) return message.channel.send(notArgs); // حقوق الفا كوودز Alpha Codes.
	            if(!getRole) return message.channel.send(':no_entry: | I couldn\'t find the role!');
	            if(getRole.name === '@everyone') return message.channel.send(':no_entry: | I couldn\'t find the role!');
	 
	            if(args[2] === 'add') {
	                if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`GIVE\`\` Any User the role with name **${getRole.name}** beacuse the role highest then my role!`);
	                if(message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size == 0) return message.channel.send(`:no_entry: | I can\'t find any user not have **${getRole.name}** role!`);
	 
	                let humansSure = new Discord.RichEmbed()
	                .setTitle(`:red_circle: Are you sure to give **${message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size}** Humans the role **${getRole.name}**`)
	                .setColor('RED')
	                .setDescription('**\nYou have 1 min to choose reaction you want.**\n\n✅ = Sure, give him the role.\n\n❎ = No no, cancel.')
	                .setTimestamp()
	                .setFooter(message.author.tag, message.author.avatarURL) // حقوق الفا كوودز Alpha Codes.
	 
	                message.channel.send(humansSure).then(msg => {
	                    msg.react('✅').then(() => msg.react('❎')) // حقوق الفا كوودز Alpha Codes.
	 
	                    let giveHim = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
	                    let dontGiveHim = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
	                    let give = msg.createReactionCollector(giveHim, { time: 60000 });
	                    let dontGive = msg.createReactionCollector(dontGiveHim, { time: 60000 });
	 
	                    give.on('collect', r => {
	                        msg.delete();
	                        message.channel.send(`:timer: | Now you must wait some time to give **${message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size}** Humans the role **${getRole.name}** ...`).then(message1 => {
	                            message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id) && !m.user.bot).forEach(m => {
	                                message.guild.member(m).addRole(getRole.id);
	                                setTimeout(() => {
	                                    message1.edit(`:white_check_mark: | <@${message.author.id}> Successfully give all **Humans** The role **${getRole.name}** .`);
	                                }, 10000)
	                            });
	                        });
	                    });
	                    dontGive.on('collect', r => { // حقوق الفا كوودز Alpha Codes.
	                        msg.delete();
	                        message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));
	                    });
	                })
	            }else if(args[2] === 'remove') {
	                if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`REMOVE\`\` The role with name **${getRole.name}** From any User beacuse the role highest then my role!`);
	                if(message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size == 0) return message.channel.send(`:no_entry: | I can\'t find any user have **${getRole.name}** role!`);
	 
	                let humansSure = new Discord.RichEmbed()
	                .setTitle(`:red_circle: Are you sure to remove **${getRole.name}** from **${message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size}** Humans?`)
	                .setColor('RED')
	                .setDescription('**\nYou have 1 min to choose reaction you want.**\n\n✅ = Sure, remove the role from him.\n\n❎ = No no, cancel.')
	                .setTimestamp()
	                .setFooter(message.author.tag, message.author.avatarURL)
	 
	                message.channel.send(humansSure).then(msg => {
	                    msg.react('✅').then(() => msg.react('❎')) // حقوق الفا كوودز Alpha Codes.
	 
	                    let removeRole = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
	                    let dontRemoveRole = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
	                    let remove = msg.createReactionCollector(removeRole, { time: 60000 });
	                    let dontRemove = msg.createReactionCollector(dontRemoveRole, { time: 60000 });
	 
	                    remove.on('collect', r => {
	                        msg.delete();
	                        message.channel.send(`:timer: | Now you must wait some time to delete from **${message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size}** Humans the role **${getRole.name}**...`).then(message1 => {
	                            message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && !m.user.bot).forEach(m => {
	                                message.guild.member(m).removeRole(getRole.id);
	                                setTimeout(() => {
	                                    message1.edit(`:white_check_mark: | <@${message.author.id}> Successfully remove the role **${getRole.name}** From all **Humans** .`);
	                                }, 10000)
	                            });
	                        });
	                    }); // حقوق الفا كوودز Alpha Codes.
	                    dontRemove.on('collect', r => {
	                        msg.delete();
	                        message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));
	                    });
	                })
	            } // حقوق الفا كوودز Alpha Codes.
	        }else if(args[1] === 'bots') {
	        let notArgs = new Discord.RichEmbed()
	            .setTitle(':white_check_mark: Role Command.')
	            .setColor('GREEN')
	            .setDescription(`**\n${prefix}role bots add <ROLE>**\n➥ \`\`For give the bots the role.\`\`\n\n**${prefix}role bots remove <ROLE>**\n➥ \`\`For delete the role from all bots.\`\``)
	            .setTimestamp()
	            .setFooter(message.author.tag, message.author.avatarURL) // حقوق الفا كوودز Alpha Codes.
	           
	            if(!args[2]) return message.channel.send(notArgs);
	            if(!args[3]) return message.channel.send(notArgs);
	            if(!getRole) return message.channel.send(':no_entry: | I couldn\'t find the role!');
	            if(getRole.name === '@everyone') return message.channel.send(':no_entry: | I couldn\'t find the role!');
	 
	            if(args[2] === 'add') {
	                if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`GIVE\`\` Any Bot the role with name **${getRole.name}** beacuse the role highest then my role!`);
	                if(message.guild.members.filter(b => !message.guild.member(b).roles.has(getRole.id) && b.user.bot).size == 0) return message.channel.send(`:no_entry: | I can\'t find any bot not have **${getRole.name}** role!`);
	 
	                let botsSure = new Discord.RichEmbed()
	                .setTitle(`:red_circle: Are you sure to give **${message.guild.members.filter(b => !message.guild.member(b).roles.has(getRole.id) && b.user.bot).size}** Bots the role **${getRole.name}**`)
	                .setColor('RED')
	                .setDescription('**\nYou have 1 min to choose reaction you want.**\n\n✅ = Sure, give him the role.\n\n❎ = No no, cancel.')
	                .setTimestamp()
	                .setFooter(message.author.tag, message.author.avatarURL)
	 
	                message.channel.send(botsSure).then(msg => {
	                    msg.react('✅').then(() => msg.react('❎')) // حقوق الفا كوودز Alpha Codes.
	 
	                    let giveHim = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
	                    let dontGiveHim = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
	                    let give = msg.createReactionCollector(giveHim, { time: 60000 });
	                    let dontGive = msg.createReactionCollector(dontGiveHim, { time: 60000 });
	 
	                    give.on('collect', r => {
	                        msg.delete();
	                        message.channel.send(`:timer: | Now you must wait some time to give **${message.guild.members.filter(b => !message.guild.member(b).roles.has(getRole.id) && b.user.bot).size}** Bots the role **${getRole.name}**...`).then(message1 => {
	                            message.guild.members.filter(b => !message.guild.member(b).roles.has(getRole.id) && b.user.bot).forEach(b => {
	                                message.guild.member(b).addRole(getRole.id);
	                                setTimeout(() => {
	                                    message1.edit(`:white_check_mark: | <@${message.author.id}> Successfully give all **Bots** The role **${getRole.name}** .`);
	                                }, 10000)
	                            });
	                        });
	                    });
	                    dontGive.on('collect', r => {
	                        msg.delete();
	                        message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));
	                    });
	                })
	            }else if(args[2] === 'remove') { // حقوق الفا كوودز Alpha Codes.
	                if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`REMOVE\`\` The role with name **${getRole.name}** From any Bot beacuse the role highest then my role!`);
	                if(message.guild.members.filter(b => message.guild.member(b).roles.has(getRole.id) && b.user.bot).size == 0) return message.channel.send(`:no_entry: | I can\'t find any bot have **${getRole.name}** role!`);
	 
	                let botsSure = new Discord.RichEmbed()
	                .setTitle(`:red_circle: Are you sure to remove **${getRole.name}** from **${message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && m.user.bot).size}** Bots?`)
	                .setColor('RED')
	                .setDescription('**\nYou have 1 min to choose reaction you want.**\n\n✅ = Sure, remove the role from him.\n\n❎ = No no, cancel.')
	                .setTimestamp()
	                .setFooter(message.author.tag, message.author.avatarURL)
	 
	                message.channel.send(botsSure).then(msg => {
	                    msg.react('✅').then(() => msg.react('❎'))
	 
	                    let removeRole = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
	                    let dontRemoveRole = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
	                    let remove = msg.createReactionCollector(removeRole, { time: 60000 });
	                    let dontRemove = msg.createReactionCollector(dontRemoveRole, { time: 60000 });
	 
	                    remove.on('collect', r => {
	                        msg.delete();
	                        message.channel.send(`:timer: | Now you must wait some time to delete from **${message.guild.members.filter(b => message.guild.member(b).roles.has(getRole.id) && b.user.bot).size}** Bots the role **${getRole.name}**...`).then(message1 => {
	                            message.guild.members.filter(b => message.guild.member(b).roles.has(getRole.id) && b.user.bot).forEach(b => {
	                                message.guild.member(b).removeRole(getRole.id);
	                                setTimeout(() => {
	                                    message1.edit(`:white_check_mark: | <@${message.author.id}> Successfully remove the role **${getRole.name}** From all **Bots** .`);
	                                }, 10000)
	                            });
	                        });
	                    });
	                    dontRemove.on('collect', r => { // حقوق الفا كوودز Alpha Codes.
	                        msg.delete();
	                        message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));
	                    });
	                })
	            }
	        }else if(args[1] === 'all') { // حقوق الفا كوودز Alpha Codes.
	            let notArgs = new Discord.RichEmbed()
	            .setTitle(':white_check_mark: Role Command.')
	            .setColor('GREEN')
	            .setDescription(`**\n${prefix}role all add <ROLE>**\n➥ \`\`For give all the role.\`\`\n\n**${prefix}role all remove <ROLE>**\n➥ \`\`For delete the role from all.\`\``)
	            .setTimestamp()
	            .setFooter(message.author.tag, message.author.avatarURL)
	           
	            if(!args[2]) return message.channel.send(notArgs);
	            if(!args[3]) return message.channel.send(notArgs);
	            if(!getRole) return message.channel.send(':no_entry: | I couldn\'t find the role!');
	            if(getRole.name === '@everyone') return message.channel.send(':no_entry: | I couldn\'t find the role!');
	 
	            if(args[2] === 'add') {
	                if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`GIVE\`\` Any User the role with name **${getRole.name}** beacuse the role highest then my role!`); // حقوق الفا كوودز Alpha Codes.
	                if(message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id)).size == 0) return message.channel.send(`:no_entry: | I can\'t find any user not have **${getRole.name}** role!`);
	 
	                let allSure = new Discord.RichEmbed()
	                .setTitle(`:red_circle: Are you sure to give **${message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id)).size}** The role **${getRole.name}** ?`)
	                .setColor('RED')
	                .setDescription('**\nYou have 1 min to choose reaction you want.**\n\n✅ = Sure, give all the role.\n\n❎ = No no, cancel.')
	                .setTimestamp()
	                .setFooter(message.author.tag, message.author.avatarURL)
	 
	                message.channel.send(allSure).then(msg => {
	                    msg.react('✅').then(() => msg.react('❎'))
	 
	                    let giveAll = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
	                    let dontGiveAll = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
	                    let give = msg.createReactionCollector(giveAll, { time: 60000 });
	                    let dontGive = msg.createReactionCollector(dontGiveAll, { time: 60000 });
	 
	                    give.on('collect', r => {
	                        msg.delete();
	                        message.channel.send(`:timer: | Now you must wait some time to give **${message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id)).size}** The role **${getRole.name}** ...`).then(message1 => {
	                            message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id)).forEach(m => {
	                                message.guild.member(m).addRole(getRole.id);
	                                setTimeout(() => {
	                                    message1.edit(`:white_check_mark: | <@${message.author.id}> Successfully give **All** The role **${getRole.name}** .`);
	                                }, 10000) // حقوق الفا كوودز Alpha Codes.
	                            });
	                        });
	                    });
	                    dontGive.on('collect', r => {
	                        msg.delete();
	                        message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));
	                    });
	                })
	            }else if(args[2] === 'remove') {
	                if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`REMOVE\`\` The role with name **${getRole.name}** From any User beacuse the role highest then my role!`);
	                if(message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id)).size == 0) return message.channel.send(`:no_entry: | I can\'t find any user have **${getRole.name}** role!`);
	 
	                let allSure = new Discord.RichEmbed() // حقوق الفا كوودز Alpha Codes.
	                .setTitle(`:red_circle: Are you sure to remove **${getRole.name}** from **${message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id)).size}** ?`)
	                .setColor('RED')
	                .setDescription('**\nYou have 1 min to choose reaction you want.**\n\n✅ = Sure, remove the role from him.\n\n❎ = No no, cancel.')
	                .setTimestamp()
	                .setFooter(message.author.tag, message.author.avatarURL)
	 
	                message.channel.send(allSure).then(msg => {
	                    msg.react('✅').then(() => msg.react('❎'))
	 
	                    let removeRole = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
	                    let dontRemoveRole = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id; // حقوق الفا كوودز Alpha Codes.
	                    let remove = msg.createReactionCollector(removeRole, { time: 60000 });
	                    let dontRemove = msg.createReactionCollector(dontRemoveRole, { time: 60000 });
	 
	                    remove.on('collect', r => {
	                        msg.delete();
	                        message.channel.send(`:timer: | Now you must wait some time to delete from **${message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id)).size}** The role **${getRole.name}** ...`).then(message1 => {
	                            message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id)).forEach(m => {
	                                message.guild.member(m).removeRole(getRole.id);
	                                setTimeout(() => {
	                                    message1.edit(`:white_check_mark: | <@${message.author.id}> Successfully remove the role **${getRole.name}** From **All** .`);
	                                }, 10000)
	                            });
	                        });
	                    });
	                    dontRemove.on('collect', r => { // حقوق الفا كوودز Alpha Codes.
	                        msg.delete();
	                        message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));
	                    }); // حقوق الفا كوودز Alpha Codes.
	                })
	            } // حقوق الفا كوودز Alpha Codes.
	        }
	    }
	});
	
	////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////////////////// P Music
	
	
	
	client.on('message', message => {
	const yt = require('ytdl-core');
	  if (message.content.startsWith('!p music')) {
	              if(!message.channel.guild) return message.reply('** This command only for servers **');
	
	    const voiceChannel = message.member.voiceChannel;
	    if (!voiceChannel) {
	      return message.reply(`plz join a voice call `);
	    }
	    voiceChannel.join()
	      .then(connnection => {
	        let stream = yt('https://www.youtube.com/watch?v=feQpSJsNUis/', {audioonly: true});
	        const dispatcher = connnection.playStream(stream);
	        dispatcher.on('end', () => {
	          voiceChannel.leave();
	        });
	      });
	  }
	  
	  if (message.content.startsWith('!stop')) {
	              if(!message.channel.guild) return message.reply('** This command only for servers **');
	
	    const voiceChannel = message.member.voiceChannel;
	    if (!voiceChannel) {
	      return message.reply(`من فضلك ادخل روم صوتي `);
	    }
	voiceChannel.leave();
	  }
	
	});
	/////////////////////////////-----------------//////all BOTS
	client.on('message', message => {
	     if(!message.channel.guild) return;
	var prefix = "!";
	                if(message.content.startsWith(prefix + 'allbots')) {
	
	    
	    if (message.author.bot) return;
	    let i = 1;
	        const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`);
	          const embed = new Discord.RichEmbed()
	          .setAuthor(message.author.tag, message.author.avatarURL)
	          .setDescription(`**Found ${message.guild.members.filter(m=>m.user.bot).size} bots in this Server**
	${botssize.join('\n')}`)
	.setFooter(client.user.username, client.user.avatarURL)
	.setTimestamp();
	message.channel.send(embed)
	
	}
	
	
	});
	
	///////////////////////////////////////////
	
	////////////////////////////////////////////////////////////////////////////////////////create ct and cv
	
	 client.on("message", (message) => {
	if (message.content.startsWith("!ct")) {
	            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
	        let args = message.content.split(" ").slice(1);
	    message.guild.createChannel(args.join(' '), 'text');
	message.channel.sendMessage(':ballot_box_with_check: created a text channel')
	
	}
	});
	
	//////////////////////////////////////////////////////////////cv 
	client.on("message", (message) => {
	if (message.content.startsWith("!cv")) {
	            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
	        let args = message.content.split(" ").slice(1);
	    message.guild.createChannel(args.join(' '), 'voice');
	    message.channel.sendMessage(':white_check_mark: created a voice channel')
	    
	}
	});
	/////////////////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////
	
	
	
	//////////////////////////////////////////////////////////////////////////////// Inv bot 
	 client.on('message' , message => {
	
	    if (message.content === "!inv") {
	        if(!message.channel.guild) return message.reply('**this command for servers only**')
	     const embed = new Discord.RichEmbed()
	 .setColor("RANDOM")
	 .setThumbnail(client.user.avatarURL)
	.setTitle('Click Here To Add Bot ')
	.setURL('https://discordapp.com/api/oauth2/authorize?client_id=489487215270035466&permissions=2146958839&scope=bot')
	  message.channel.sendEmbed(embed);
	   }
	}); 
	//////////////////////////////////////////////////// ////////////////////// /////////////////////7alet el BOT
	
	const adminprefix = "!";
	const devs = ['521479557375852547'];
	client.on('message', message => {
	  var argresult = message.content.split(` `).slice(1).join(' ');
	    if (!devs.includes(message.author.id)) return;
	    
	if (message.content.startsWith(adminprefix + 'setG')) {
	  client.user.setGame(argresult);
	    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
	} else 
	  if (message.content.startsWith(adminprefix + 'setN')) {
	client.user.setUsername(argresult).then
	    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
	return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
	} else
	  if (message.content.startsWith(adminprefix + 'setA')) {
	client.user.setAvatar(argresult);
	  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
	      } else     
	if (message.content.startsWith(adminprefix + 'setT')) {
	  client.user.setGame(argresult, "https://www.twitch.tv/idk");
	    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)
	}
	});
	
	
	
	
	///////////////////////////////////// ////////////////////// //////////// Ty For add BOT in YOur Discord 
	client.on('guildCreate', guild => {
	  var embed = new Discord.RichEmbed()
	  .setColor(0x5500ff)
	  .setDescription(`**Thank you for adding the bot to The Server :tada: **`)
	      guild.owner.send(embed)
	});
	
	
	////////////////////////////////////////// ////////////////////// ////////////////////// /////////////////////////Rsala le Owner
	
	client.on('message', QuaStyle => {
	  var prefix = "!";
	    if(QuaStyle.author.bot) return;
	      if(QuaStyle.content.startsWith(prefix + "owner")) {
	        let args = QuaStyle.content.split(" ").slice(1);
	           if(!args[0]) {
	              QuaStyle.channel.send("** !owner<message> **")
	                return;
	                  }
	                   var mahmoud = new Discord.RichEmbed()
	                      .setColor("RANDOM")
	                        .setDescription(`
	you have reseved a message from your server
	${QuaStyle.guild.name}
	message
	${args}
	        `)
	        .setFooter(` by ${QuaStyle.author.username}#${QuaStyle.author.discriminator}`)
	       QuaStyle.guild.owner.send(Starzz);
	      QuaStyle.channel.send("**Done**")
	     }
	    }
	  );
	
	
	
	
	/////////////
	//////////////////////////////////////---------------///////////////////////////////WELCOME 
	
	client.on("guildMemberAdd", member => {
	  member.createDM().then(function (channel) {
	  return channel.send(`👑Welcome To Server👑 
	 You Member number is👑 ${member.guild.memberCount}`) 
	
	}).catch(console.error)
	})
	
	
	
	
	
	
	
	
	
	
	
	
	////////---------------------------------------////
	client.on("roleCreate", role => {
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
	            .setColor('RANDOM')
	            .setTitle('➕ RoleCreated')
	            .addField('Role Name', role.name, true)
	            .addField('Role ID', role.id, true)
	            .addField('By', exec, true)
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
	 client.on("roleDelete", role => {
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
	            .setColor('RANDOM')            
	            .setTitle('❌ RoleDeleted')
	            .addField('Role Name:', role.name, true)
	            .addField('Role ID:', role.id, true)
	            .addField('By:', exec, true)
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
	   client.on("roleUpdate", (re,updated) => {
	    client.setTimeout(() => {
	      re.guild.fetchAuditLogs({
	          limit: 1,
	          type: 30
	        })
	        .then(audit => {
	          let exec = audit.entries.map(a => a.executor.username)
	          try {
	  
	            let log = re.guild.channels.find('name', 'log');
	            if (!log) return;
	            let embed = new Discord.RichEmbed()
	              .setColor('BLACK')
	              .setTitle("✏  Role Name Updated")
	              .addField("Old",`${re.name}`,true)
	              .addField("New",`${updated.name}`,true )
	              .addField("Role id",`${re.id}`,true )
	              .addField('By', exec, true)
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
	 client.on("channelDelete",  dc => {
	  const channel = dc.guild.channels.find("name", "log")
	  if(channel) {
	  var embed = new Discord.RichEmbed()
	  .setTitle(dc.guild.name)
	  .setDescription(`***Channel Deleted Name : *** **${dc.name}** ⬅️`)
	  .setColor(`RANDOM`)
	  .setTimestamp();
	  channel.sendEmbed(embed)
	  }
	  });
	   
	  
	client.on('messageUpdate', (message, newMessage) => {
	    if (message.content === newMessage.content) return;
	    if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
	    const channel = message.guild.channels.find('name', 'log');
	    if (!channel) return;
	     let embed = new Discord.RichEmbed()
	       .setAuthor(`${message.author.tag}`, message.author.avatarURL)
	       .setColor('RANDOM')
	       .setDescription(`✏ **Message Edited
	Sender <@${message.author.id}>                                                                                                                         Edited In** <#${message.channel.id}>\n\nBefore Edited:\n \`${message.cleanContent}\`\n\nAfter Edited:\n \`${newMessage.cleanContent}\``)
	       .setTimestamp();
	     channel.send({embed:embed});
	 });
	 client.on('messageDelete', message => {
	    if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
	    const channel = message.guild.channels.find('name', 'log');
	    if (!channel) return;
	    
	    let embed = new Discord.RichEmbed()
	       .setAuthor(`${message.author.tag}`, message.author.avatarURL)
	       .setColor('RANDOM')
	       .setDescription(`🗑️ **Message Deleted**
	**Sender <@${message.author.id}>                                                                                                                        Deleted In** <#${message.channel.id}>\n\n \`${message.cleanContent}\``)
	       .setTimestamp();
	     channel.send({embed:embed});
	 });
	 client.on('guildMemberAdd', member => {
	    if (!member || !member.id || !member.guild) return;
	    const guild = member.guild;
		
	    const channel = member.guild.channels.find('name', 'log');
	    if (!channel) return;
	    let memberavatar = member.user.avatarURL
	    const fromNow = moment(member.user.createdTimestamp).fromNow();
	    const isNew = (new Date() - member.user.createdTimestamp) < 900000 ? '🆕' : '';
	    
	    let embed = new Discord.RichEmbed()
	       .setAuthor(`${member.user.tag}`, member.user.avatarURL)
		   .setThumbnail(memberavatar)
	       .setColor('RANDOM')
	       .setDescription(`📥 <@${member.user.id}> **Joined To The Server**\n\n`)
	       .setTimestamp();
	     channel.send({embed:embed});
	});
	 client.on('guildMemberRemove', member => {
	    if (!member || !member.id || !member.guild) return;
	    const guild = member.guild;
		
	    const channel = member.guild.channels.find('name', 'log');
	    if (!channel) return;
	    let memberavatar = member.user.avatarURL
	    const fromNow = moment(member.joinedTimestamp).fromNow();
	    
	    let embed = new Discord.RichEmbed()
	       .setAuthor(`${member.user.tag}`, member.user.avatarURL)
		   .setThumbnail(memberavatar)
	       .setColor('RAMDOM')
	       .setDescription(`📤 <@${member.user.id}> **Leave From Server**\n\n`)
	       .setTimestamp();
	     channel.send({embed:embed});
	});
	 client.on('voiceStateUpdate', (oldM, newM) => {
	  let m1 = oldM.serverMute;
	  let m2 = newM.serverMute;
	   let d1 = oldM.serverDeaf;
	  let d2 = newM.serverDeaf;
	   let ch = oldM.guild.channels.find('name', 'log')
	  if(!ch) return;
	     oldM.guild.fetchAuditLogs()
	    .then(logs => {
	       let user = logs.entries.first().executor
	     if(m1 === false && m2 === true) {
	       let embed = new Discord.RichEmbed()
	       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
	       .setDescription(`${newM} has muted in server`)
	       .setFooter(`By : ${user}`)
	        ch.send(embed)
	    }
	    if(m1 === true && m2 === false) {
	       let embed = new Discord.RichEmbed()
	       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
	       .setDescription(`${newM} has unmuted in server`)
	       .setFooter(`By : ${user}`)
	       .setTimestamp()
	        ch.send(embed)
	    }
	    if(d1 === false && d2 === true) {
	       let embed = new Discord.RichEmbed()
	       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
	       .setDescription(`${newM} has deafened in server`)
	       .setFooter(`By : ${user}`)
	       .setTimestamp()
	        ch.send(embed)
	    }
	    if(d1 === true && d2 === false) {
	       let embed = new Discord.RichEmbed()
	       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
	       .setDescription(`${newM} has undeafened in server`)
	       .setFooter(`By : ${user}`)
	       .setTimestamp()
	        ch.send(embed)
	    }
	  })
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
	          client.fetchUser(member.id).then(myUser => {
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
	
	
	
	
	
	
	
	
	///////////////////////////////////////////////////////// ////////////////////// /////// Color 
	
	
	 client.on('message', msg => {//msg
	    if (msg.content === '!colors') {
	      msg.channel.send({file : "https://media.discordapp.net/attachments/495636666619396105/524141047706812416/colors.png"})
	    }
	  });;
	
	
	//////////////
	 client.on('message', message => {
	      var prefix= "!";
	
	      if(message.content === prefix + 'createcolors') {
	                           if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
	           if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
	  if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
	
	        message.guild.createRole({
	                    name: "1",
	                      color: "#FFB6C1",
	                      permissions: []
	       })
	             message.guild.createRole({
	                    name: "2",
	                      color: "#FFC0CB",
	                      permissions: []
	       })
	                  message.guild.createRole({
	                    name: "3",
	                      color: "#FF69B4",
	                      permissions: []
	       })
	                       message.guild.createRole({
	                    name: "4",
	                      color: "#FF1493",
	                      permissions: []
	       })
	                       message.guild.createRole({
	                    name: "5",
	                      color: "#DB7093",
	                      permissions: []
	       })
	                       message.guild.createRole({
	                    name: "6",
	                      color: "#C71585",
	                      permissions: []
	       })
	                       message.guild.createRole({
	                    name: "7",
	                      color: "#E6E6FA",
	                      permissions: []
	       })
	                       message.guild.createRole({
	                    name: "8",
	                      color: "#D8BFD8",
	                      permissions: []
	       })
	                       message.guild.createRole({
	                    name: "8",
	                      color: "#DDA0DD",
	                      permissions: []
	       })
	                       message.guild.createRole({
	                    name: "9",
	                      color: "#DA70D6",
	                      permissions: []
	       })
	                       message.guild.createRole({
	                    name: "10",
	                      color: "#EE82EE",
	                      permissions: []
	       })
	                       message.guild.createRole({
	                    name: "11",
	                      color: "#FF00FF",
	                      permissions: []
	       })
	                       message.guild.createRole({
	                    name: "12",
	                      color: "#BA55D3",
	                      permissions: []
	       })
	                       message.guild.createRole({
	                    name: "13",
	                      color: "#9932CC",
	                      permissions: []
	       })
	                            message.guild.createRole({
	                    name: "14",
	                      color: "#9400D3",
	                      permissions: []
	       })
	                            message.guild.createRole({
	                    name: "15",
	                      color: "#8A2BE2",
	                      permissions: []
	       })
	                                 message.guild.createRole({
	                    name: "16",
	                      color: "#8B008B",
	                      permissions: []
	       })
	                                      message.guild.createRole({
	                    name: "17",
	                      color: "#800080",
	                      permissions: []
	       })
	                                      message.guild.createRole({
	                    name: "18",
	                      color: "#9370DB",
	                      permissions: []
	       })
	                                      message.guild.createRole({
	                    name: "19",
	                      color: "#7B68EE",
	                      permissions: []
	       })
	                                      message.guild.createRole({
	                    name: "20",
	                      color: "#6A5ACD",
	                      permissions: []
	       })
	                                      message.guild.createRole({
	                    name: "21",
	                      color: "#483D8B",
	                      permissions: []
	       })
	                                      message.guild.createRole({
	                    name: "22",
	                      color: "#663399",
	                      permissions: []
	       })
	                                      message.guild.createRole({
	                    name: "23",
	                      color: "#4B0082",
	                      permissions: []
	       })
	                                      message.guild.createRole({
	                    name: "24",
	                      color: "#FFA07A",
	                      permissions: []
	       })
	                                      message.guild.createRole({
	                    name: "25",
	                      color: "#FA8072",
	                      permissions: []
	       })
	                                      message.guild.createRole({
	                    name: "26",
	                      color: "#E9967A",
	                      permissions: []
	       })
	                                      message.guild.createRole({
	                    name: "27",
	                      color: "#F08080",
	                      permissions: []
	       })
	                                      message.guild.createRole({
	                    name: "28",
	                      color: "#CD5C5C",
	                      permissions: []
	       })
	                                      message.guild.createRole({
	                    name: "29",
	                      color: "#DC143C",
	                      permissions: []
	       })
	                                           message.guild.createRole({
	                    name: "30",
	                      color: "	#FF0000",
	                      permissions: []
	       })
	                                           message.guild.createRole({
	                    name: "31",
	                      color: "#B22222",
	                      permissions: []
	       })
	                                           message.guild.createRole({
	                    name: "32",
	                      color: "#8B0000",
	                      permissions: []
	       })
	                                           message.guild.createRole({
	                    name: "33",
	                      color: "#FFA500",
	                      permissions: []
	       })
	                                           message.guild.createRole({
	                    name: "34",
	                      color: "#FF8C00",
	                      permissions: []
	       })
	                                           message.guild.createRole({
	                    name: "35",
	                      color: "#FF7F50",
	                      permissions: []
	       })
	                                           message.guild.createRole({
	                    name: "36",
	                      color: "#FF6347",
	                      permissions: []
	       })
	                                           message.guild.createRole({
	                    name: "37",
	                      color: "#FF4500",
	                      permissions: []
	       })
	                                           message.guild.createRole({
	                    name: "38",
	                      color: "#FFD700",
	                      permissions: []
	       })
	                                           message.guild.createRole({
	                    name: "39",
	                      color: "#FFFFE0",
	                      permissions: []
	       })
	                                           message.guild.createRole({
	                    name: "40",
	                      color: "#FFFACD",
	                      permissions: []
	       })
	                                           message.guild.createRole({
	                    name: "41",
	                      color: "#FAFAD2",
	                      permissions: []
	       })
	                                           message.guild.createRole({
	                    name: "42",
	                      color: "	#FFEFD5",
	                      permissions: []
	       })
	                                           message.guild.createRole({
	                    name: "43",
	                      color: "#FFE4B5",
	                      permissions: []
	       })
	                                           message.guild.createRole({
	                    name: "44",
	                      color: "#FFDAB9",
	                      permissions: []
	       })
	                                           message.guild.createRole({
	                    name: "45",
	                      color: "#EEE8AA",
	                      permissions: []
	       })
	                                           message.guild.createRole({
	                    name: "46",
	                      color: "#F0E68C",
	                      permissions: []
	       })
	                                           message.guild.createRole({
	                    name: "47",
	                      color: "#BDB76B",
	                      permissions: []
	       })
	                                           message.guild.createRole({
	                    name: "48",
	                      color: "#ADFF2F",
	                      permissions: []
	       })
	                                           message.guild.createRole({
	                    name: "49",
	                      color: "#7FFF00",
	                      permissions: []
	       })
	                                           message.guild.createRole({
	                    name: "50",
	                      color: "#7CFC00",
	                      permissions: []
	       })
	                                           message.guild.createRole({
	                    name: "51",
	                      color: "#00FF00",
	                      permissions: []
	       })  
	       
	                                           message.guild.createRole({
	                    name: "52",
	                      color: "#32CD32",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "53",
	                      color: "#98FB98",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "54",
	                      color: "#90EE90",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "55",
	                      color: "#00FA9A",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "56",
	                      color: "#00FF7F",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "57",
	                      color: "#3CB371",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "58",
	                      color: "#2E8B57",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "59",
	                      color: "#2E8B57",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "60",
	                      color: "#008000",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "61",
	                      color: "#006400",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "62",
	                      color: "#9ACD32",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "63",
	                      color: "#6B8E23",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "64",
	                      color: "#556B2F",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "65",
	                      color: "#66CDAA",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "66",
	                      color: "#8FBC8F",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "67",
	                      color: "#20B2AA",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "68",
	                      color: "#008B8B",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "69",
	                      color: "#008080",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "70",
	                      color: "#00FFFF",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "71",
	                      color: "#E0FFFF",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "72",
	                      color: "#AFEEEE",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "73",
	                      color: "#7FFFD4",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "74",
	                      color: "#40E0D0",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "75",
	                      color: "#48D1CC",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "76",
	                      color: "#00CED1",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "77",
	                      color: "#5F9EA0",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "78",
	                      color: "#4682B4",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "79",
	                      color: "#B0C4DE",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "80",
	                      color: "#ADD8E6",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "81",
	                      color: "#B0E0E6",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "82",
	                      color: "#87CEFA",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "83",
	                      color: "#87CEEB",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "84",
	                      color: "#6495ED",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "85",
	                      color: "#00BFFF",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "86",
	                      color: "#1E90FF",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "87",
	                      color: "#4169E1",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "88",
	                      color: "#0000FF",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "89",
	                      color: "#0000CD",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "90",
	                      color: "#00008B",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "91",
	                      color: "#000080",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "92",
	                      color: "#191970",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "93",
	                      color: "#FFF8DC",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "94",
	                      color: "#FFEBCD",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "95",
	                      color: "#FFE4C4",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "96",
	                      color: "#FFDEAD",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "97",
	                      color: "#F5DEB3",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "98",
	                      color: "#DEB887",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "99",
	                      color: "#D2B48C",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "100",
	                      color: "#BC8F8F",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "101",
	                      color: "#F4A460",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "102",
	                      color: "#DAA520",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "103",
	                      color: "#B8860B",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "104",
	                      color: "#CD853F",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "105",
	                      color: "#D2691E",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "106",
	                      color: "#808000",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "107",
	                      color: "#8B4513",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "108",
	                      color: "#A0522D",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "109",
	                      color: "#A52A2A",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "110",
	                      color: "#800000",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "111",
	                      color: "#FFFFFF",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "112",
	                      color: "#FFFAFA",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "113",
	                      color: "#F0FFF0",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "114",
	                      color: "#F5FFFA",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "115",
	                      color: "#F0FFFF",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "116",
	                      color: "#F0F8FF",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "117",
	                      color: "#F8F8FF",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "118",
	                      color: "#F5F5F5",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "119",
	                      color: "#FFF5EE",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "120",
	                      color: "#F5F5DC",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "121",
	                      color: "#FDF5E6",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "122",
	                      color: "#FFFAF0",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "123",
	                      color: "#FFFFF0",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "124",
	                      color: "#FAEBD7",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "125",
	                      color: "#FAF0E6",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "126",
	                      color: "#FFF0F5",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "127",
	                      color: "#FFE4E1",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "128",
	                      color: "#DCDCDC",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "129",
	                      color: "#D3D3D3",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "130",
	                      color: "#C0C0C0",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "131",
	                      color: "#A9A9A9",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "132",
	                      color: "#696969",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "133",
	                      color: "#808080",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "134",
	                      color: "#778899",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "135",
	                      color: "#708090",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "136",
	                      color: "#2F4F4F",
	                      permissions: []
	       })     
	                                           message.guild.createRole({
	                    name: "137",
	                      color: "#000000",
	                      permissions: []
	       })     
	  
	       
	            message.channel.sendMessage({embed: new Discord.RichEmbed()
	       .setColor('#502faf').setAuthor(`${message.author.username}'`, message.author.avatarURL).setDescription('``Colors Has Been Created``')});
	      }
	      });
	
	
	////////////////////////////
	client.on('message', function(msg) {
	if(msg.content.startsWith ('!server')) {
	      let embed = new Discord.RichEmbed()
	      .setColor('RANDOM')
	      .setThumbnail(msg.guild.iconURL)
	      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
	      .addField(':globe_with_meridians:**Sērvèr Typē**',`[** __${msg.guild.region}__ **]`,true)
	      .addField(':trident:** __Rǎnks__**',`[** __${msg.guild.roles.size}__ **]`,true)
	      .addField(':red_circle:**__Númběr Thē  Mémběrs__**',`[** __${msg.guild.memberCount}__ **]`,true)
	      .addField(':large_blue_circle:**__Nūmbêr ǒf Mēmběrs  ónlīnè__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
	      .addField(':pencil:**__ Rǒóms Typīng__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
	      .addField(':speaking_head:**__Ròóms Vōicē__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
	      .addField(':crown:**__Ownèr __**',`**${msg.guild.owner}**`,true)
	      .addField(':id:**__ID Sèrvèr__**',`**${msg.guild.id}**`,true)
	      .addField(':date:**__ Sērvér Frǒm This timě__**:tools:',msg.guild.createdAt.toLocaleString())
	      msg.channel.send({embed:embed});
	    }
	  });
	///Server
	client.on('message', function(msg) {
	if(msg.content.startsWith ('!Server')) {
	      let embed = new Discord.RichEmbed()
	      .setColor('RANDOM')
	      .setThumbnail(msg.guild.iconURL)
	      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
	      .addField(':globe_with_meridians:**Sērvèr Typē**',`[** __${msg.guild.region}__ **]`,true)
	      .addField(':trident:** __Rǎnks__**',`[** __${msg.guild.roles.size}__ **]`,true)
	      .addField(':red_circle:**__Númběr Thē  Mémběrs__**',`[** __${msg.guild.memberCount}__ **]`,true)
	      .addField(':large_blue_circle:**__Nūmbêr ǒf Mēmběrs  ónlīnè__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
	      .addField(':pencil:**__ Rǒóms Typīng__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
	      .addField(':speaking_head:**__Ròóms Vōicē__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
	      .addField(':crown:**__Ownèr __**',`**${msg.guild.owner}**`,true)
	      .addField(':id:**__ID Sèrvèr__**',`**${msg.guild.id}**`,true)
	      .addField(':date:**__ Sērvér Frǒm This timě__**:tools:',msg.guild.createdAt.toLocaleString())
	      msg.channel.send({embed:embed});
	    }
	  });
	
	
	////////////////////
	
	
	client.on('message', async message => {
		if (message.content === '!help-admin') {
			message.react('👑');
		}
		else if (message.content === '!react-custom') {
			message.react('396548322053062656');
		}
		else if (message.content === '!fruits') {
			message.react('🍎')
				.then(() => message.react('🍊'))
				.then(() => message.react('🍇'))
				.catch(() => console.error('One of the emojis failed to react.'));
		}
	});
	
	client.on('message', async message => {
		if (message.content === '!help-music') {
			message.react('🎶');
		}
		else if (message.content === '!react-custom') {
			message.react('396548322053062656');
		}
		else if (message.content === '!fruits') {
			message.react('🍎')
				.then(() => message.react('🍊'))
				.then(() => message.react('🍇'))
				.catch(() => console.error('One of the emojis failed to react.'));
		}
	});
	
	client.on('message', async message => {
		if (message.content === '!help-bc') {
			message.react('⌲');
		}
		else if (message.content === '!react-custom') {
			message.react('396548322053062656');
		}
		else if (message.content === '!fruits') {
			message.react('😊')
				.then(() => message.react('🍊'))
				.then(() => message.react('🍇'))
				.catch(() => console.error('One of the emojis failed to react.'));
		}
	});
	
	
	client.on('message', async message => {
		if (message.content === '!help-public') {
			message.react('😊');
		}
		else if (message.content === '!react-custom') {
			message.react('396548322053062656');
		}
		else if (message.content === '!fruits') {
			message.react('🍎')
				.then(() => message.react('🍊'))
				.then(() => message.react('🍇'))
				.catch(() => console.error('One of the emojis failed to react.'));
		}
	});
	
	////////////////////////
	
	client.on('message', async message => {
	  let args = message.content.split(" ");
	  if(message.content.startsWith(prefix + "!mute")) {
	    if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send('').then(msg => {
	      msg.delete(3500);
	      message.delete(3500);
	    });
	 
	    if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.channel.send('').then(msg => {
	      msg.delete(3500);
	      message.delete(3500);
	    });
	 
	    let mention = message.mentions.members.first();////////////By:Mal-Mahmoud-QuaStyle و
	    if(!mention) return  message.channel.send('').then(msg => { ////////////By:Mal-Mahmoud-QuaStyle و
	      msg.delete(3500);
	      message.delete(3500);
	    });
	 
	    if(mention.id === message.author.id) return message.channel.send('**:x:You Cannot give mute to your self**').then(msg => {
	      msg.delete(3500);
	      message.delete(3500);  ////////////By:Mal-Mahmoud-QuaStyle
	    });
	   
	    if(mention.hasPermission('ADMINISTRATOR')) return message.channel.send(`**:x: i cant mute server admins **`); //kinggamer حقوق الفا كودز و
	 
	    if(message.guild.member(mention).roles.find('name', 'Muted')) return message.channel.send(`**:information_source: ${mention.user.username} Already Muted**`);
	 
	   
	    if(mention.position >= message.guild.member(message.author).positon) return message.channel.send('You Donot Have Permission **Muted_Members** ').then(msg => {
	      msg.delete(3500);
	      message.delete(3500);
	    });
	   
	    if(mention.positon >= message.guild.member(client.user).positon) return message.channel.send('I Donot Have Permission **Muted_Members**').then(msg => {
	      msg.delete(3500);
	      message.delete(3500);  ////////////By:Mal-Mahmoud-QuaStyle
	    });////////////By:Mal-Mahmoud-QuaStyle
	   
	    let duration = args[2];
	    if(!duration) message.channel.send(`**:hash: You Can Use ${prefix}mute @user Time Reason**`).then(msg => {
	      msg.delete(3500);
	      message.delete(3500);
	    });
	 
	    if(isNaN(duration))  message.channel.send('').then(msg => {
	      msg.delete(3500);
	      message.delete(3500);
	    });
	 
	    let reason = message.content.split(" ").slice(3).join(" ");
	    if(!reason) reason = " [ **no reason added** ] ";
	 
	    let thisEmbed = new Discord.RichEmbed()
	    .setAuthor(mention.user.username, mention.user.avatarURL)
	    .setTitle('**mute**')
	    .addField('**__server__**',[ message.guild.name ]) //kinggamer حقوق الفا كودز و
	    .addField('**__Muted by__**', [ message.author ])
	    .addField('**__Reason__**',reason)
	    .addField('**__Mute time__**',duration)
	 
	    let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
	    if(!role) try {
	      message.guild.createRole({
	        name: "Muted",
	        permissions: 0 ////////////By:Mal-Mahmoud-QuaStyle و
	      }).then(r => {
	        message.guild.channels.forEach(c => {
	          c.overwritePermissions(r , {
	            SEND_MESSAGES: false, /////////////By:Mal-Mahmoud-QuaStyle
	            READ_MESSAGES_HISTORY: false,
	            ADD_REACTIONS: false
	          });
	        });
	      }); //Mal Team
	    } catch(e) {
	      console.log(e.stack);
	    }
	    mention.addRole(role).then(() => {
	      mention.send(thisEmbed);
	      message.channel.send(`**:white_check_mark: ${mention.user.username}  Muted! :zipper_mouth:  **  `);
	      mention.setMute(true); /////////////By:Mal-Mahmoud-QuaStyle///////By:Mal-Mahmoud-QuaStyleو
	    });
	    setTimeout(() => {
	      if(duration === 0) return;
	      mention.setMute(false);
	      mention.removeRole(role)
	    },duration * 60000); /////////////By:Mal-Mahmoud-QuaStyle-QuaStyleو
	  }
	});
	client.on('message', async message => {
	    let mention = message.mentions.members.first();
	let command = message.content.split(" ")[0];
	     command = command.slice(prefix.length);
	    let args = message.content.split(" ").slice(1);  //////////////By:Mal-Mahmoud-QuaStyle//////By:Mal-Mahmoud-QuaStyleز و
	if(command === `unmute`) {2
	  if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("**You Donot HavePermission Mute_Members**").then(m => m.delete(5000));
	if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**I donot Have Permission Mute_Members**").then(msg => msg.delete(6000))
	 
	  let kinggamer = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
	     if(!kinggamer) return message.channel.send('').then(msg => {
	      msg.delete(3500);
	      message.delete(3500); //////////////By:Mal-Mahmoud-QuaStyle////////////By:Mal-Mahmoud-QuaStyleز و
	    });
	 
	  let role = message.guild.roles.find (r => r.name === "Muted");
	 
	  if(!role || !kinggamer.roles.has(role.id)) return message.channel.sendMessage(`**:information_source:${mention.user.username} لقد تم فك الميوت عنه مسبقا**`)
	 
	  await kinggamer.removeRole(role) // Mal Team By Mahmoud-QuAsTYLE 
	  message.channel.sendMessage(`**:white_check_mark: ${mention.user.username}  Unmuted! **`);
	 
	  return;
	 
	  }
	 
	});
	
	///////////////////////////////////////////////
	/////////////welcome new
	
	///////////////////bot el fe serrver eh 
	
	client.on('message', message => {
	    if(message.content == '!bot-all-server') {
	             if(!message.author.id === '411137717884289024') return;
	    var gimg;
	    var gname;
	    var gmemb;
	    var gbots;
	    var groles;
	    var servers = client.guilds;
	    servers.forEach((g)=>{
	    gname = g.name;
	    gimg = g.iconURL;
	    gmemb = g.members.size;
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
	
	////////////////////////////////////////////////////Giveaway
	
	
	
	
	
	
	
	
	
	////////////By:Mal-Mahmoud-QuaStyle
	////////////By:Mal-Mahmoud-QuaStyle
	////////////By:Mal-Mahmoud-QuaStyle
	////////////By:Mal-Mahmoud-QuaStyle
	////////////By:Mal-Mahmoud-QuaStyle
	////////////By:Mal-Mahmoud-QuaStyle
	////////////By:Mal-Mahmoud-QuaStyle
	
	//////////////////////////////////////
	
	
	client.on('guildCreate', guild => {
	    
	
	    var star = new Discord.RichEmbed()
	    .setTitle("GAMING BOT")
	    .setColor(000000)
	    .setDescription(`**Hey**`)                      
	              .setFooter(`GAMING BOT `, 'https://cdn.discordapp.com/attachments/387286451034783744/388013469275914240/thesilent_1x.jpg')
	        guild.owner.send(star)
	  })
	
	
	////////////By:Mal-Mahmoud-QuaStyle
	////////////By:Mal-Mahmoud-QuaStyle
	////////////By:Mal-Mahmoud-QuaStyle
	////////////By:Mal-Mahmoud-QuaStyle
	
	//////Muted اسكوت
	client.on("message", message => {
	    if (message.author.bot) return;
	    
	    let command = message.content.split(" ")[0];
	    
	    if (command === "!mute") {
	          if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** you dont have perms 'Manage Roles' **").catch(console.error);
	    let user = message.mentions.users.first();
	    let modlog = client.channels.find('name', 'log');
	    let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
	    if (!muteRole) return message.reply("** You dont have this role on your server 'Muted' **").catch(console.error);
	    if (message.mentions.users.size < 1) return message.reply('**Mention the user**').catch(console.error);
	    
	    const embed = new Discord.RichEmbed()
	      .setColor(0x00AE86)
	      .setTimestamp()
	      .addField('use:', 'mute/unmute')
	      .addField('Muted:', `${user.username}#${user.discriminator} (${user.id})`)
	      .addField('By:', `${message.author.username}#${message.author.discriminator}`)
	     
	     if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);
	   
	    if (message.guild.member(user).roles.has(muteRole.id)) {
	  return message.reply("**:white_check_mark: .. Muted the user**").catch(console.error);
	  } else {
	      message.guild.member(user).addRole(muteRole).then(() => {
	  return message.reply("**:white_check_mark: .. Text Mute has been added to the user**").catch(console.error);
	  });
	    }
	  
	  };
	  
	  });
	
	////////////By:Mal-Mahmoud-QuaStyle
	////////////By:Mal-Mahmoud-QuaStyl////////////By:Mal-Mahmoud-QuaStylee
	////////////By:Mal-Mahmoud-QuaStyle
	////////////By:Mal-Mahmoud-QuaStyle
	////////////By:Mal-Mahmoud-QuaStyle
	
	///////////////////////////unmute
	
	
	client.on("message", message => {
	    if (message.author.bot) return;
	    
	    let command = message.content.split(" ")[0];
	    
	    if (command === "!unmute") {
	          if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لyou dont have perms 'Manage Roles' **").catch(console.error);
	    let user = message.mentions.users.first();
	    let modlog = client.channels.find('name', 'mute-log');
	    let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
	    if (!muteRole) return message.reply("** You dont have this role on your server 'Muted' **").catch(console.error);
	    if (message.mentions.users.size < 1) return message.reply('**Muted the user**').catch(console.error);
	    const embed = new Discord.RichEmbed()
	      .setColor(0x00AE86)
	      .setTimestamp()
	      .addField('use:', 'mute/unmute')
	      .addField('تم فك الميوت عن:', `${user.username}#${user.discriminator} (${user.id})`)
	      .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
	  
	    if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);
	  
	    if (message.guild.member(user).removeRole(muteRole.id)) {
	  return message.reply("**:white_check_mark: .. Unmuted the user **").catch(console.error);
	  } else {
	      message.guild.member(user).removeRole(muteRole).then(() => {
	  return message.reply("**:white_check_mark: .. Tedt Mute has been removed **").catch(console.error);
	  });
	    }
	  
	  };
	  
	  });
	/////////////////////////////
	
	client.on('message', message => {
	    var prefix = "!"
	    let command = message.content.split(" ")[0];
	  command = command.slice(prefix.length);
	
	  let args = message.content.split(" ").slice(1);
	
	
	if(command == "draw") {
	    var Canvas = require('canvas')
	  , Image = new Canvas.Image
	  , canvas = new Canvas(450, 170)
	  , ctx = canvas.getContext('2d');
	  ctx.font = '30px Impact';
	  let args = message.content.split(" ").slice(1);
	  
	Image.src = canvas.toBuffer();
	
	    console.log(Image);
	ctx.drawImage(Image, 0, 0, Image.width / 470, Image.height / 170);
	ctx.fillText(args.join("  "),110, 70);
	
	
	ctx.beginPath();
	ctx.lineTo(50, 102);
	ctx.stroke();
	
	message.channel.sendFile(canvas.toBuffer());
	}
	}).on('ready', () => {
	
	});
	/////////////////////////////////////////////////////////// ///////////Music
	client.on('message', async msg => { // eslint-disable-line
		if (msg.author.bot) return undefined;
		
		if (!msg.content.startsWith(prefix)) return undefined;
		const args = msg.content.split(' ');
		const searchString = args.slice(1).join(' ');
		
		const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
		const serverQueue = queue.get(msg.guild.id);
	
		let command = msg.content.toLowerCase().split(" ")[0];
		command = command.slice(prefix.length)
	
		if (command === `play`) {
			const voiceChannel = msg.member.voiceChannel;
			if (!voiceChannel) return msg.channel.send('يجب توآجد حضرتك بروم صوتي .');
			const permissions = voiceChannel.permissionsFor(msg.client.user);
			if (!permissions.has('CONNECT')) {
				
				return msg.channel.send('لا يتوآجد لدي صلاحية للتكلم بهذآ الروم');
			}
			if (!permissions.has('SPEAK')) {
				return msg.channel.send('لا يتوآجد لدي صلاحية للتكلم بهذآ الروم');
			}
	
			if (!permissions.has('EMBED_LINKS')) {
				return msg.channel.sendMessage("**يجب توآفر برمشن `EMBED LINKS`لدي **")
			}
	
			if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
				const playlist = await youtube.getPlaylist(url);
				const videos = await playlist.getVideos();
				
				for (const video of Object.values(videos)) {
					const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
					await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
				}
				return msg.channel.send(` **${playlist.title}** تم الإضآفة إلى قأئمة التشغيل`);
			} else {
				try {
	
					var video = await youtube.getVideo(url);
				} catch (error) {
					try {
						var videos = await youtube.searchVideos(searchString, 5);
						let index = 0;
						const embed1 = new Discord.RichEmbed()
				        .setDescription(`**الرجآء من حضرتك إختيآر رقم المقطع** :
	${videos.map(video2 => `[**${++index} **] \`${video2.title}\``).join('\n')}`)
	
						.setFooter("Hyped. | v0.1")
						msg.channel.sendEmbed(embed1).then(message =>{message.delete(20000)})
						
						// eslint-disable-next-line max-depth
						try {
							var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
								maxMatches: 1,
								time: 15000,
								errors: ['time']
							});//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
						} catch (err) {
							console.error(err);
							return msg.channel.send('لم يتم إختيآر مقطع صوتي');
						}
						const videoIndex = parseInt(response.first().content);
						var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
					} catch (err) {
						console.error(err);
						return msg.channel.send(':X: لا يتوفر نتآئج بحث ');
					}
				}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	
				return handleVideo(video, msg, voiceChannel);
			}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		} else if (command === `skip`) {
			if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
			if (!serverQueue) return msg.channel.send('لا يتوفر مقطع لتجآوزه');
			serverQueue.connection.dispatcher.end('تم تجآوز هذآ المقطع');
			return undefined;
		} else if (command === `stop`) {//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
			if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
			if (!serverQueue) return msg.channel.send('لا يتوفر مقطع لإيقآفه');
			serverQueue.songs = [];
			serverQueue.connection.dispatcher.end('تم إيقآف هذآ المقطع');
			return undefined;
		} else if (command === `vol`) {
			if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
			if (!serverQueue) return msg.channel.send('لا يوجد شيء شغآل.');
			if (!args[1]) return msg.channel.send(`:loud_sound: مستوى الصوت **${serverQueue.volume}**`);
			serverQueue.volume = args[1];//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
			serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 50);
			return msg.channel.send(`:speaker: تم تغير الصوت الي **${args[1]}**`);
		} else if (command === `np`) {
			if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
			const embedNP = new Discord.RichEmbed()
		.setDescription(`:notes: الان يتم تشغيل : **${serverQueue.songs[0].title}**`)
			return msg.channel.sendEmbed(embedNP);
		} else if (command === `queue`) {
			//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
			if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
			let index = 0;
			//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
			const embedqu = new Discord.RichEmbed()
	//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	.setDescription(`**Songs Queue**
	${serverQueue.songs.map(song => `**${++index} -** ${song.title}`).join('\n')}
	**الان يتم تشغيل** ${serverQueue.songs[0].title}`)
			return msg.channel.sendEmbed(embedqu);
		} else if (command === `pause`) {
			if (serverQueue && serverQueue.playing) {
				serverQueue.playing = false;
				serverQueue.connection.dispatcher.pause();
				return msg.channel.send('تم إيقاف الموسيقى مؤقتا!');
			}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
			return msg.channel.send('لا يوجد شيء حالي ف العمل.');
		} else if (command === "resume") {
			if (serverQueue && !serverQueue.playing) {
				serverQueue.playing = true;
				serverQueue.connection.dispatcher.resume();
				return msg.channel.send('استأنفت الموسيقى بالنسبة لك !');
			}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
			return msg.channel.send('لا يوجد شيء حالي في العمل.');
		}
	
		return undefined;
	});
	//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	async function handleVideo(video, msg, voiceChannel, playlist = false) {
		const serverQueue = queue.get(msg.guild.id);
		console.log(video);
		//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	//	console.log('yao: ' + Util.escapeMarkdown(video.thumbnailUrl));
		const song = {
			id: video.id,
			title: Util.escapeMarkdown(video.title),
			url: `https://www.youtube.com/watch?v=${video.id}`
		};//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		if (!serverQueue) {
			const queueConstruct = {
				textChannel: msg.channel,
				voiceChannel: voiceChannel,
				connection: null,
				songs: [],
				volume: 5,
				playing: true
			};//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
			queue.set(msg.guild.id, queueConstruct);
	//by ,$ ReBeL ء , 🔕#4777 'RqlixMC v0.1'
			queueConstruct.songs.push(song);
	//by ,$ ReBeL ء , 🔕#4777 'RqlixMC v0.1'
			try {
				var connection = await voiceChannel.join();
				queueConstruct.connection = connection;
				play(msg.guild, queueConstruct.songs[0]);
			} catch (error) {
				console.error(`I could not join the voice channel: ${error}`);
				queue.delete(msg.guild.id);
				return msg.channel.send(`لا أستطيع دخول هذآ الروم ${error}`);
			}
		} else {//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
			serverQueue.songs.push(song);
			console.log(serverQueue.songs);
			if (playlist) return undefined;
			else return msg.channel.send(` **${song.title}** تم اضافه الاغنية الي القائمة!`);
		}
		return undefined;
	}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	
	function play(guild, song) {
		const serverQueue = queue.get(guild.id);
	
		if (!song) {
			serverQueue.voiceChannel.leave();
			queue.delete(guild.id);
			return;
		}
		console.log(serverQueue.songs);
	//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
			.on('end', reason => {//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
				if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
				else console.log(reason);
				serverQueue.songs.shift();//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
				play(guild, serverQueue.songs[0]);
			})//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
			.on('error', error => console.error(error));//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	
		serverQueue.textChannel.send(`بدء تشغيل : **${song.title}**`);
	}
	
	
	
	
	
	
	
	
	const moment = require('moment');//npm install moment
	client.on('message', message => {
	             var prefix = "!"
	if (message.content.startsWith(prefix + "time")) {
	let user = message.mentions.users.first();
	var args = message.content.split(" ").slice(1);
	var men = message.mentions.users.first();
	var heg;
	if(men) {
	heg = men
	} else {
	heg = message.author
	}
	var mentionned = message.mentions.members.first();
	var h;
	if(mentionned) {
	h = mentionned
	} else {
	h = message.member
	}
	moment.locale('ar-TN'); //TN
	var id = new  Discord.RichEmbed()
	.setColor("RANDOM")
	.setAuthor(`${heg.username}#${heg.discriminator} `,heg.avatarURL)
	.setDescription([`**الوقت**${moment().format('HH:mm:ss A')}${moment().format('YYYY/M/D')}**اليوم** :${moment().format('dddd')}**التاريخ**`])
	message.channel.send(id)
	};
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	client.on('message',function(message) {
	    if(!message.channel.guild) return undefined;
	    const swearWords = ["ككس","اسكت","حيوان","كلب"];
	    if (swearWords.some(word => message.content.includes(word)) ) {
	      message.delete()
	      message.reply("**ممنوع السب**"); 
	    }
	  });
	
	
	
	var prefix = "!";
	
	client.on('message', message => {
	  if (message.author.bot) return;
	  if (!message.content.startsWith(prefix)) return;
	
	  let command = message.content.split(" ")[0];
	  command = command.slice(prefix.length);
	
	  let args = message.content.split(" ").slice(1);
	  
	 
	
	if (command == "embed") {
	    let say = new Discord.RichEmbed()
	    .setDescription(args.join("  "))
	    .setColor(0x23b2d6)
	    message.channel.sendEmbed(say);
	    message.delete();
	  }
	
	
	});
	//////////////////////////////----------------welcome///
	
	client.on('guildMemberAdd', member => {
	    let channel = member.guild.channels.find('name', '↗wèlcòmèヅ');
	    let memberavatar = member.user.avatarURL
	      if (!channel) return; 
	    let embed = new Discord.RichEmbed()
	        .setColor('RANDOM')
	        .setThumbnail(memberavatar)
	        .setImage('https://uploads.mumyazh.com/imagehosting/111176_1390528749.jpg') //هنا حط الصوره الي تبيها
	        .addField(':small_orange_diamond:Nâmè  :rose:   ',`${member}`)
	        .addField(':balloon:Wēlcōmé tó  Sērvěr' , `Wēlcōmé tó  Sērvěr, ${member}`)
	        .addField(':id: | Usèr :', "**[" + `:small_orange_diamond: ${member.id}` + "]**" )
	                .addField(':pushpin: Yóǔ Arě The Mēmbêr Nǖmbèr☆',`:small_orange_diamond: ${member.guild.memberCount}`)
	               
	                  .addField("•Ŋàme .. ♥",`<@` + `${member.id}` + `>`, true)
	                      
	                                     .addField(' Sērvěr', `${member.guild.name}`,true)
	                                       
	     .setFooter("Sērvěr")
	        .setTimestamp()
	    
	      channel.sendEmbed(embed);
	    });
	
	client.on('guildMemberAdd', member => {
	    let channel = member.guild.channels.find('name', 'welcome');
	    let memberavatar = member.user.avatarURL
	      if (!channel) return; 
	    let embed = new Discord.RichEmbed()
	        .setColor('RANDOM')
	        .setThumbnail(memberavatar)
	        .setImage('https://cdn.pg.sa/dupNksp0Yh.gif') //هنا حط الصوره الي تبيها
	        .addField(':small_orange_diamond:Nâmè  :rose:   ',`${member}`)
	        .addField(':balloon:Wēlcōmé tó  Sērvěr' , `Wēlcōmé tó  Sērvěr, ${member}`)
	        .addField(':id: | Usèr :', "**[" + `:small_orange_diamond: ${member.id}` + "]**" )
	                .addField(':pushpin: Yóǔ Arě The Mēmbêr Nǖmbèr☆',`:small_orange_diamond: ${member.guild.memberCount}`)
	               
	                  .addField("•Ŋàme .. ♥",`<@` + `${member.id}` + `>`, true)
	                      
	                                     .addField(' Sērvěr', `${member.guild.name}`,true)
	                                       
	     .setFooter("Sērvěr")
	        .setTimestamp()
	    
	      channel.sendEmbed(embed);
	    });
	    ///////////////////////////////////Code e lma 7ad ytl3 men el Discord
	 client.on('guildMemberRemove', member => {
	            var embed = new Discord.RichEmbed()
	            .setAuthor(member.user.username, member.user.avatarURL)
	            .setThumbnail(member.user.avatarURL)
	            .setTitle(`:wave:  😔`)
	            .setImage('https://cdn.pg.sa/GeQGucQhBR.gif') 
	            .setDescription(`Bye Bye  😔 `)
	            .addField('👤  --- ',`**[ ${member.guild.memberCount} ]**`,true)
	            .setColor('RED')
	            .setFooter(`==== Gòǒd Luck ♦=====`, 'https://cdn.pg.sa/GeQGucQhBR.gif')
	        
	        var channel =member.guild.channels.find('name', 'Welcome')
	        if (!channel) return;
	        channel.send({embed : embed});
	        })
	
	/////////////////////name welcome good bye
	
	
	
	
	
	
	
	///////////////////////// ////////////////////// ////////////////////// ////////////////////// ////////WELCOME 
	
	////////////WELCOME 2
	// Create an event listener for new guild members
	client.on('guildMemberAdd', member => {
	  // Send the message to a designated channel on a server:
	  const channel = member.guild.channels.find(ch => ch.name === 'Welcome');
	  // Do nothing if the channel wasn't found on this server
	  if (!channel) return;
	  // Send the message, mentioning the member
	  channel.send(` ̲  ̲***W̲e̲l̲c̲o̲m̲e  , ${member} ̲t̲o  ̲Server Mal,Shop  :two_hearts: 🎉♥:sparkles:*** `);
	});
	////welcome
	// Create an event listener for new guild members
	client.on('guildMemberAdd', member => {
	  // Send the message to a designated channel on a server:
	  const channel = member.guild.channels.find(ch => ch.name === 'welcome');
	  // Do nothing if the channel wasn't found on this server
	  if (!channel) return;
	  // Send the message, mentioning the member
	  channel.send(` ̲  ̲***W̲e̲l̲c̲o̲m̲e  , ${member} ̲t̲o  ̲Server  :two_hearts: 🎉♥:sparkles:*** `);
	});
	
	
	
	client.on('guildMemberAdd', member => {
	  // Send the message to a designated channel on a server:
	  const channel = member.guild.channels.find(ch => ch.name === 'welcome');
	  // Do nothing if the channel wasn't found on this server
	  if (!channel) return;
	  // Send the message, mentioning the member
	  channel.send(` ̲  ̲***W̲e̲l̲c̲o̲m̲e  , ${member} ̲t̲o  ̲Love server :two_hearts: 🎉♥:sparkles:*** `);
	});
	/////////////////////////////////////////////// ////////////////////// ////////////////////// //////////////
	
	client.on('ready', () => {
	  console.log(`Logged in as ${client.user.tag}!`);
	});
	
	client.on('message', msg => {
	  if (msg.content === '!help') {
	    msg.reply('***Welcome To Server*** :sparkles: ');
	  }
	});
	
	client.on('ready', () => {
	  console.log(`Logged in as ${client.user.tag}!`);
	});
	client.on('message', msg => {
	  if (msg.content === '!help-R') {
	    msg.reply('***تWorking on it ....*** :sparkles: ');
	  }
	});
	
	client.on('ready', () => {
	  console.log(`Logged in as ${client.user.tag}!`);
	});
	client.on('message', msg => {
	  if (msg.content === '!help-game') {
	    msg.reply('***10% من العاب تحت الصيانة** :sparkles: ');
	  }
	});
	
	
	client.on('ready', () => {
	  console.log(`Logged in as ${client.user.tag}!`);
	});
	
	client.on('message', msg => {
	  if (msg.content === 'هلا') {
	    msg.reply('***Welcome To Server*** :sparkles: ');
	  }
	});
	client.on('ready', () => {
	  console.log(`Logged in as ${client.user.tag}!`);
	});
	
	client.on('message', msg => {
	  if (msg.content === '.') {
	    msg.reply('***Welcome To Server*** :sparkles: ');
	  }
	});
	client.on('message', msg => {
	  if (msg.content === '..') {
	    msg.reply('***Welcome To Server*** :sparkles: ');
	  }
	});
	client.on('message', msg => {
	  if (msg.content === '...') {
	    msg.reply('***Welcome To Server*** :sparkles: ');
	  }
	});
	client.on('message', msg => {
	  if (msg.content === '?') {
	    msg.reply('***Welcome To Server*** :sparkles: ');
	  }
	});
	client.on('message', msg => {
	  if (msg.content === '??') {
	    msg.reply('***Welcome To Server*** :sparkles: ');
	  }
	});
	
	
	
	
	
	//////////////////////////////////////////////// ////////////////////// ////////////////////////////////uptime el bot 48al men emta 
	
	
	client.on('message', message => {
	    var prefix = "!"
	if (message.content.startsWith(prefix + "uptime")) {
	   let uptime = client.uptime;
	
	   let days = 0;
	   let hours = 0;
	   let minutes = 0;
	   let seconds = 0;
	   let notCompleted = true;
	
	   while (notCompleted) {
	
	       if (uptime >= 8.64e+7) {
	
	           days++;
	           uptime -= 8.64e+7;
	
	       } else if (uptime >= 3.6e+6) {
	
	           hours++;
	           uptime -= 3.6e+6;
	
	       } else if (uptime >= 60000) {
	
	           minutes++;
	           uptime -= 60000;
	
	       } else if (uptime >= 1000) {
	           seconds++;
	           uptime -= 1000;
	
	       }
	
	       if (uptime < 1000)  notCompleted = false;
	
	   }
	
	   message.channel.send("`" + `${days} days, ${hours} hrs, ${minutes} min , ${seconds} sec` + "`");
	
	
	}
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	////////////////////////////////////cal
	client.on('message', msg => {
	 if (msg.content.startsWith(prefix + 'cal')) {
	    let args = msg.content.split(" ").slice(1);
	        const question = args.join(' ');
	    if (args.length < 1) {
	        msg.reply('Specify a equation, please.');
	} else {    let answer;
	    try {
	        answer = math.eval(question);
	    } catch (err) {
	        msg.reply(`Error: ${err}`);
	    }
	    
	    const embed = new Discord.RichEmbed()
	    .addField("**Input**: ",`**${question}**`, true)
	    .addField("**Output**: ",`**${answer}**`, true)
	    msg.channel.send(embed)  .catch(console.error);
	
	    }
	};
	});
	
	
	
	/////////////////////////////////////////////////////////////-////////////////////kick
	client.on('message', message => {
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
	        if (message.content.startsWith(prefix + "!delete world")) {
	            let alpha = new Discord.RichEmbed()
	            .setColor("RANDOM")
	            .setImage(`https://cdn.discordapp.com/attachments/493497637358665728/500005330605047819/deleted.png`)
	          message.channel.sendEmbed(alpha);
	        }
	    });
	
	
	    client.on('message', message => {
	        if (message.content.startsWith(prefix + "!blow world")) {
	            let alpha = new Discord.RichEmbed()
	            .setColor("RANDOM")
	            .setImage(`https://i.imgur.com/C1FIPdf.gif`)
	          message.channel.sendEmbed(alpha);
	        }
	    });
	////////////////////////////////////////////////////////////////Top inv
	
	
	
	///////////////////////////////////////////////dt
	
	
	
	
	
	client.on('message', message => {
	  var prefix = "!";
	
	           if (message.content === prefix + "dt") {
	           if (!message.channel.guild) return message.reply('** This command only for servers **');  
	           var currentTime = new Date(),
	              hours = currentTime.getHours() + 4 ,
	              hours2 = currentTime.getHours() + 3 ,
	              hours3 = currentTime.getHours() + 2 ,
	              hours4 = currentTime.getHours() + 3 ,
	              minutes = currentTime.getMinutes(),
	              seconds = currentTime.getSeconds(),
	              Year = currentTime.getFullYear(),
	              Month = currentTime.getMonth() + 1,
	              Day = currentTime.getDate();
	               var h = hours
	    if(hours > 12) {
	                 hours -= 12;
	              } else if(hours == 0) {
	                  hours = "12";
	              }  
	               if(hours2 > 12) {
	                 hours2 -= 12;
	              } else if(hours2 == 0) {
	                  hours2 = "12";
	               
	              }  
	  if(hours3 > 12) {
	                 hours3 -= 12;
	              } else if(hours3 == 0) {
	                  hours3 = "12";
	              } 
	              if (minutes < 10) {
	                  minutes = '0' + minutes;
	              }
	   
	   
	              var suffix = 'صباحاَ';
	              if (hours >= 12) {
	                  suffix = 'مساء';
	                  hours = hours - 12;
	              }
	              if (hours == 0) {
	                  hours = 12;
	              }
	    
	   
	                  var Date15= new Discord.RichEmbed()
	                  .setThumbnail("https://i.imgur.com/ib3n4Hq.png") 
	                  .setTitle( ":clock: 「التاريخ  والوقت」:clock: ")
	                  .setColor('RANDOM')
	                  .setFooter(message.author.username, message.author.avatarURL)
	                  .addField(' :flag_sd: الامارات',
	                  ":round_pushpin: 「"+ hours + ":" + minutes +":"+ seconds + "」:round_pushpin: ")
	                   .addField(' :flag_sa: مكه المكرمه',
	                  ":round_pushpin: 「"+ hours2 + ":" + minutes +":"+ seconds  + "」:round_pushpin: ") 
	                  .addField(' :flag_ye: مصر',
	                  ":round_pushpin: 「"+ hours3 + ":" + minutes +":"+ seconds  + "」:round_pushpin: ") 
	                   
	                  .addField('Date',
	                  ":date: 「"+ Day + "-" + Month + "-" + Year +  "」:date: ")
	   
	                   message.channel.sendEmbed(Date15);
	          }
	      });
	
	////////////////////////ly t8yr asm 45s fe server
	
	
	
	///////////////////////////////////////deafen
	
	 client.on('message', message => {
	        var prefix = "!";
	        if(message.content.startsWith(prefix + 'deafen')) {
	      if (message.mentions.users.size === 0 && message.mentions.roles.size === 0) {
	        return message.reply('**يجب عليك المنشن اولاّ**:x:').catch(console.error);
	      }
	      if (!message.guild.member(client.user).hasPermission('DEAFEN_MEMBERS')) {
	        return message.reply('للأسف البوت لا يمتلك صلاحيات لتنفيذ هذه الأمر**:x:').catch(console.error);
	      }
	     
	      const deafenMember = (member) => {
	        if (!member || !member.voiceChannel) return;
	        if (member.serverDeaf) return message.channel.send(`${member} **لديه ديفن بالفعل**:x:`);
	        member.setDeaf(true).catch(console.error);
	        if(!message.member.hasPermission("DEAFEN_MEMBERS")) return message.channel.sendMessage("**ليس لديك صلاحية لاعطاء ديفن **:x: ").then(m => m.delete(5000));
	      };
	     
	      message.mentions.users.forEach(user => deafenMember(message.guild.member(user)));
	      message.mentions.roles.forEach(role => role.members.forEach(member => deafenMember(member)));
	        }
	        
	    });  
	     
	    client.on('message', async message =>{
	      var prefix = "!";
	      if(message.content.startsWith(prefix + 'undeafen')) {
	     
	    if (message.mentions.users.size === 0 && message.mentions.roles.size === 0) {
	      return message.reply('**يجب عليك المنشن اولاّ**:x:').catch(console.error);
	    }
	    if (!message.guild.member(client.user).hasPermission('DEAFEN_MEMBERS')) {
	      return message.reply('**للأسف البوت لا يمتلك صلاحيات لتنفيذ هذه الأمر**:x: ').catch(console.error);
	      if(!message.member.hasPermission("DEAFEN_MEMBERS")) return message.channel.sendMessage("**ليس لديك صلاحية لاعطاء ديفن **:x: ").then(m => m.delete(5000));
	    }
	     
	    const undeafenMember = (member) => {
	      if (!member || !member.voiceChannel) return;
	      if (!member.serverDeaf) return message.channel.send(`${member} `);
	      member.setDeaf(false).catch(console.error);
	    };
	     
	    message.mentions.users.forEach(user => undeafenMember(message.guild.member(user)));
	    message.mentions.roles.forEach(role => role.members.forEach(member => undeafenMember(member)));
	    }
	    });
	  
	
	
	/////////////////////////////////////////Mute all 
	client.on('message', message => {
	    var prefix = "!";
	  if(message.content === prefix + "muteall") {
	               if(!message.channel.guild) return message.reply('** This command only for servers**');
	  
	  if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
	  message.channel.overwritePermissions(message.guild.id, {
	  SEND_MESSAGES: false
	  
	  }).then(() => {
	      message.reply("**__تم تقفيل الشات__ :white_check_mark: **")
	  
	  });
	  }
	     
	  
	  
	  });
	    client.on('message', message => {
	      var prefix = "!";
	  if(message.content === prefix + "unmuteall") {
	            if(!message.channel.guild) return message.reply('** This command only for servers**');
	  
	  if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
	  message.channel.overwritePermissions(message.guild.id, {
	  SEND_MESSAGES: true
	  
	  }).then(() => {
	      message.reply("**__تم فتح الشات__:white_check_mark:**")
	  });
	    }
	     
	  
	  
	  });
	
	
	///////////////////////////////////////obc 
	
	
	
	
	
	
	client.on("message", message => {
	    if (message.content.startsWith("!star")) {
	                 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
	  let args = message.content.split(" ").slice(1);
	  var argresult = args.join(' ');
	  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
	  m.send(`${argresult}\n ${m}`);
	  })
	  message.channel.send(`\`${message.guild.members.filter( m => m.presence.status !== 'all').size}\`:heart_exclamation:  عدد المستلمين `);
	  message.delete();
	  };
	  });
	
	
	//bc online
	
	
	  
	
	
	
	
	///////////////////////////////////////// 
	
	client.on('message', message => {
	              if (!message.channel.guild) return;
	      if(message.content =='!count')
	      var IzRo = new Discord.RichEmbed()
	      .setThumbnail(message.author.avatarURL)
	      .setFooter(message.author.username, message.author.avatarURL)
	      .setTitle(':tulip:| Members info')
	      .addBlankField(true)
	      .addField('عدد اعضاء السيرفر',`${message.guild.memberCount}`)
	      message.channel.send(IzRo);
	    });
	
	
	
	
	
	//////////////////REPORT
	
	
	
	client.on('message', function(message) {
	    if(message.content.startsWith(prefix + "report")) {
	        let messageArgs = message.content.split(" ").slice(1).join(" ");
	        let messageReason = message.content.split(" ").slice(2).join(" ");
	        if(!messageReason) return message.reply("**# Specify a reason!**");
	    let mUser = message.mentions.users.first();
	    if(!mUser) return message.channel.send("Couldn't find user.");
	    let Rembed = new Discord.RichEmbed()
	    .setTitle("`New Report!`")
	    .setThumbnail(message.author.avatarURL)
	    .addField("**# - Reported User:**",mUser,true)
	    .addField("**# - Reported User ID:**",mUser.id,true)
	    .addField("**# - Reason:**",messageReason,true)
	    .addField("**# - Channel:**",message.channel,true)
	    .addField("**# - Time:**",message.createdAt,true)
	    .setFooter("لو ان الابلاغ فيه مزح راح يتعرض صاحب الابلاغ لقوبات")
	message.channel.send(Rembed)
	message.channel.send("__Are you sure you want to send this to the Server owner??__").then(msg => {
	    msg.react("✅")
	    msg.react("❌")
	.then(() => msg.react('❌'))
	.then(() =>msg.react('✅'))
	let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
	let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
	
	let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
	let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
	reaction1.on("collect", r => {
	    message.guild.owner.send(Rembed)
	    message.reply("**» - Done! 🎇**");
	})
	reaction2.on("collect", r => {
	    message.reply("**# - Canceled!**");
	})
	})
	}
	});
	
	
	////////////////Animal
	
	var prefix = "!";
	var cats = ["https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg","http://www.dogbazar.org/wp-content/uploads/2014/09/british-bull-dog-puppies.jpg","http://cdn2-www.dogtime.com/assets/uploads/gallery/german-shepherd-dog-breed-pictures/standing-7.jpg","http://cdn.akc.org/Marketplace/Breeds/German_Shepherd_Dog_SERP.jpg","https://animalso.com/wp-content/uploads/2016/12/black-german-shepherd_2.jpg","https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpg","https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg","http://www.i-love-cats.com/images/2015/04/12/cat-wallpaper-38.jpg","https://www.aspca.org/sites/default/files/cat-care_urine-marking_main-image.jpg","https://s-media-cache-ak0.pinimg.com/originals/f0/3b/76/f03b7614dfadbbe4c2e8f88b69d12e04.jpg","http://www.rd.com/wp-content/uploads/sites/2/2016/04/15-cat-wants-to-tell-you-attention.jpg","https://www.thelocal.de/userdata/images/article/fa6fd5014ccbd8f4392f716473ab6ff354f871505d9128820bbb0461cce1d645.jpg","https://www.adelaidezoo.com.au/wp-content/uploads/sites/2/animals/GiantPanda3Slider.jpg","http://imagem.band.com.br/f_230168.jpg"]
	    client.on('message', message => {
	        var args = message.content.split(" ").slice(1);
	    if(message.content.startsWith(prefix + 'animal')) {
	         var cat = new Discord.RichEmbed()
	.setImage(cats[Math.floor(Math.random() * cats.length)])
	message.channel.sendEmbed(cat);
	    }
	});
	//////////////////////////////////Klam fe SOt 
	
	
	///////////////////////////////////////////
	client.on('message', function(message) {
	    if (message.channel.type === "dm") {
	        if (message.author.id === client.user.id) return;
	        var iiMo = new Discord.RichEmbed()
	        .setColor('RANDOM')
	        .setTimestamp()
	        .setTitle('``I have received a new DM !``')
	        .setThumbnail(`${message.author.avatarURL}`)
	        .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
	        .setFooter(`From **${message.author.tag} (${message.author.id})**`)
	    client.channels.get("513482762775429139").send({embed:iiMo});
	    }
	});
	
	////////////////RsaLa most5dem el BOT
	
	
	client.on('message', message => {
	    let args = message.content.split(' ').slice(1).join(' ');
	    if (message.content.startsWith('!bot-bc')){
	    if(!message.author.id === '') return;
	    message.channel.sendMessage('**جار ارسال الرسالة** :white_check_mark:')
	    client.users.forEach(m =>{
	    m.sendMessage(args)
	    })
	    }
	    });
	
	
	//////////////////Photo animal
	
	
	var prefix = "!";
	var cats = ["https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg","http://www.dogbazar.org/wp-content/uploads/2014/09/british-bull-dog-puppies.jpg","http://cdn2-www.dogtime.com/assets/uploads/gallery/german-shepherd-dog-breed-pictures/standing-7.jpg","http://cdn.akc.org/Marketplace/Breeds/German_Shepherd_Dog_SERP.jpg","https://animalso.com/wp-content/uploads/2016/12/black-german-shepherd_2.jpg","https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpg","https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg","http://www.i-love-cats.com/images/2015/04/12/cat-wallpaper-38.jpg","https://www.aspca.org/sites/default/files/cat-care_urine-marking_main-image.jpg","https://s-media-cache-ak0.pinimg.com/originals/f0/3b/76/f03b7614dfadbbe4c2e8f88b69d12e04.jpg","http://www.rd.com/wp-content/uploads/sites/2/2016/04/15-cat-wants-to-tell-you-attention.jpg","https://www.thelocal.de/userdata/images/article/fa6fd5014ccbd8f4392f716473ab6ff354f871505d9128820bbb0461cce1d645.jpg","https://www.adelaidezoo.com.au/wp-content/uploads/sites/2/animals/GiantPanda3Slider.jpg","http://imagem.band.com.br/f_230168.jpg"]
	    client.on('message', message => {
	        var args = message.content.split(" ").slice(1);
	    if(message.content.startsWith(prefix + 'animal')) {
	         var cat = new Discord.RichEmbed()
	.setImage(cats[Math.floor(Math.random() * cats.length)])
	message.channel.sendEmbed(cat);
	    }
	});
	
	
	////////////////
	 client.on('guildMemberAdd', (member) => {
	member.addRole(member.guild.roles.find('name', 'Member'));  
	});
	 
	 
	client.on('message', message => {                      
	    if(!message.channel.guild) return;
	       if(message.content.startsWith(prefix + 'active')) {       
	       if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
	       message.channel.sendMessage(` اضغط على الصح عشان تتفعل وتاخذ الرتبة الوان تقائي`).then(msg => {
	       
	       
	        msg.react('✅')
	       .then(() => msg.react('✅'))
	     
	     
	 
	       let activeFilter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
	     
	       let active = msg.createReactionCollector(activeFilter, { time: 15000 });
	     
	                                                       
	                               active.on("collect", r => {
	                                   message.member.addRole(message.guild.roles.find("name", "disco"));
	                                   message.member.removeRole(message.guild.roles.find("name", "Member"));
	                                   msg.delete();
	                                   message.channel.send(`**تم تفعيلك استمتع.**`).then(m => m.delete(1000));  
	
	                                   })
	                                   })
	                                   }
	                                   });
	
	/////////////--------------------------///////Test now 
	client.on('message', message => {
	    if (message.content.startsWith("!AVatar")) {
	        if (message.author.bot) return
	        var mentionned = message.mentions.users.first();
	    var omar;
	      if(mentionned){
	          var omar = mentionned;
	      } else {
	          var omar = message.author;
	          
	      }
	        const embed = new Discord.RichEmbed()
	        .setColor("RANDOM")
	        .setAuthor('Avatar Link :')
	        .setTitle('Click Here')
	        .setURL(`${omar.avatarURL}`)
	        .setImage(`${omar.avatarURL}`)
	        .setFooter('name bot',client.user.avatarURL) 
	      message.channel.sendEmbed(embed);
	    }
	});
	
	
	////////////////////-----------------------------------------///////info members
	client.on('message', message => {
	    if(message.author.bot) return; // Alpha Codes Server.
	    if(message.channel.type === 'dm') return;
	   
	    var args = message.content.toLowerCase().split(' '); // Alpha Codes Server.
	    var command = args[0];
	    var prefix = '!'; // <=========== تقدر تغير البرفكس
	   
	    if(command == prefix + 'members') {
	        var memberS = message.guild.members.size; // Alpha Codes Server.
	        if(!args[1] || isNaN(args[1]) || args[1] === '1') {
	            var number = 1;
	 
	            if(memberS > 10) {
	                var more = `\n__:sparkles: **More?** \`\`${prefix}members 2\`\` (${Math.round(memberS / 10)} pages)`;
	            }else {
	                var more = '__'; // Alpha Codes Server.
	            }
	 
	            let embedS = new Discord.RichEmbed()
	            .setTitle(`:white_check_mark: **${memberS}** Members.`) // Alpha Codes Server.
	            .setColor('GREEN')
	            .setDescription(`__\n__${message.guild.members.map(m => `**${number++}.** \`\`${m.user.tag}\`\``).slice(0, 10).join('\n')}__\n${more}`)
	            .setTimestamp()
	            .setFooter(message.author.tag, message.author.avatarURL)
	 
	            message.channel.send(embedS);
	        }else if(!isNaN(args[1])) {
	            var number = 1;
	 
	            if(memberS > 10) {
	                var more = `choose **1** To **${Math.round(memberS / 10)}**`;
	            }else {
	                var more = 'This server have **1** Page only.'; // Alpha Codes Server.
	            }
	 
	            if(Math.round(args[1].replace('-', '')) * 10 - 9 > memberS) return message.channel.send(`:no_entry: | I couldn\'t find the page. ${more}`);
	 
	           let embedS = new Discord.RichEmbed()
	           .setTitle(`:white_check_mark: **${memberS}** Members.`) // Alpha Codes Server.
	           .setColor('GREEN')
	           .setDescription(`__\n__${message.guild.members.map(m => `**${number++}.** \`\`${m.user.tag}\`\``).slice(10 * Math.round(args[1].replace('-', '')) - 10, 10 * Math.round(args[1].replace('-', ''))).join('\n')}\n\n:sparkles: **More?** \`\`${prefix}members ${Math.round(args[1].replace('-', '')) + 1}\`\` (${Math.round(memberS / 10)} pages)`)
	           .setTimestamp()
	           .setFooter(message.author.tag, message.author.avatarURL)
	 
	           message.channel.send(embedS);
	       }
	   }
	 
	 
	   if(command == prefix + 'info-member') { // Alpha Codes Server.
	       if(!args[1]) return message.channel.send(`:no_entry: | Please enter the member number. \`\`If you want to know how to get the member number please type ${prefix}members (page)\`\``);
	       if(isNaN(args[1])) return message.channel.send(`:no_entry: | Please enter the member number. \`\`If you want to know how to get the member number please type ${prefix}members (page)\`\``);
	       if(args[1] > message.guild.members.size) return message.channel.send(`:no_entry: | I couldn\'t find the user. Please selecte number from 1 to ${message.guild.members.size}`);
	 
	       let memberInfo = new Discord.RichEmbed()
	       .setTitle(`:white_check_mark: Informations about **${message.guild.members.map(m => m.user.tag).slice(Math.round(args[1].replace('-', '')) - 1, Math.round(args[1].replace('-', '')))}**`) // Alpha Codes Server.
	       .setThumbnail(`${message.guild.members.map(m => m.user.avatarURL).slice(Math.round(args[1].replace('-', '')) - 1, Math.round(args[1].replace('-', '')))}`)
	       .setColor('GREEN')
	       .setDescription(`__\n__**INFORMATIONS USER:**\n\n**User ID:** \`\`${message.guild.members.map(m => m.user.id).slice(Math.round(args[1].replace('-', '')) - 1, Math.round(args[1].replace('-', '')))}\`\`\n**User Tag:** \`\`#${message.guild.members.map(m => m.user.discriminator).slice(Math.round(args[1].replace('-', '')) - 1, Math.round(args[1].replace('-', '')))}\`\`\n**User Created at:** \`\`${message.guild.members.map(m => Days(m.user.createdAt)).slice(Math.round(args[1].replace('-', '')) - 1, Math.round(args[1].replace('-', '')))}\`\`\n**User Joined at:** \`\`${message.guild.members.map(m => Days(m.joinedAt)).slice(Math.round(args[1].replace('-', '')) - 1, Math.round(args[1].replace('-', '')))}\`\`\n**User Status:** \`\`${message.guild.members.map(m => m.user.presence.status).slice(Math.round(args[1].replace('-', '')) - 1, Math.round(args[1].replace('-', '')))}\`\`\n**User Roles Amount:** \`\`${message.guild.members.map(m => m.roles.size - 1).slice(Math.round(args[1].replace('-', '')) - 1, Math.round(args[1].replace('-', '')))} Role.\`\`\n**User Bot:** \`\`${message.guild.members.map(m => m.user.bot).slice(Math.round(args[1].replace('-', '')) - 1, Math.round(args[1].replace('-', '')))}\`\``) // Alpha Codes Server.
	       .setTimestamp()
	       .setFooter(message.author.tag, message.author.avatarURL) // Alpha Codes Server.
	 
	       message.channel.send(memberInfo);
	   } // GAMING Server.
	});
	function Days(date) {
	   let now = new Date(); // Alpha Codes Server.
	   let diff = now.getTime() - date.getTime(); // Alpha Codes Server.
	   let days = Math.floor(diff / 86400000);
	   return days + (days == 1 ? " day" : " days") + " ago"; // Alpha Codes Server.
	}
	///////----------------------------------------------------///GAMING INFO CHANNEL
	client.on('message', message => {//GAMING
	    if(!message.channel.guild) return;//GAMING
	var prefix = "!";//GAMING
	if(message.content.startsWith(prefix + 'channel')) {//
	    let channel = message.channel//GAMING
	    var embed = new Discord.RichEmbed()//GAMING
	      .setTitle(":low_brightness:Channel Info:small_orange_diamond: ")//GAMING
	      .setColor("#9932CC")//GAMING
	      .setDescription(`:low_brightness:Info about <#${channel.id}>\n:low_brightness:Channel ID: ${channel.id}:pen_ballpoint: `)//Alpha Codes
	      .addField(":low_brightness:Created At :small_red_triangle_down: ",  `:low_brightness: ${channel.createdAt}:clock: `)//GAMING
	      .addField(":low_brightness:Channel Type :flag_white:", `:low_brightness: ${channel.type}:jack_o_lantern: `)//GAMING
	      .addField(":low_brightness:Extra Information :100: ", `:low_brightness:Channel is NSFW => ${channel.nsfw}:round_pushpin: \n:low_brightness:Channel Topic=> ${channel.topic} \n:low_brightness: Channel Parent => ${channel.parent} :orange_book: \n:low_brightness: Channel Position =>   ${channel.position} :black_heart: `)
	 
	     message.channel.send({ embed: embed });//GAMING
	  }//GAMING
	 
	    });//GAMING
	
	
	
	
	
	
	
	
	
	/////////////////////----------------------------//////CrossFire
	client.on('guildMemberAdd', (member) => {
	member.addRole(member.guild.roles.find('name', 'Member'));  
	});
	 
	 
	client.on('message', message => {                      
	    if(!message.channel.guild) return;
	       if(message.content.startsWith(prefix + 'CrossFire')) {       
	       if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
	       message.channel.sendMessage(` CrossFire Click Right to Get a Rank  `).then(msg => {
	       
	       
	        msg.react('✅')
	       .then(() => msg.react('✅'))
	     
	     
	 
	       let activeFilter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
	     
	       let active = msg.createReactionCollector(activeFilter, { time: 15000 });
	     
	                                                       
	                               active.on("collect", r => {
	                                   message.member.addRole(message.guild.roles.find("name", "CrossFire"));
	                                   message.member.removeRole(message.guild.roles.find("name", "0"));
	                                   msg.delete();
	                                   message.channel.send(`**You Have been Activated.**`).then(m => m.delete(1000));  
	
	                                   })
	                                   })
	                                   }
	                                   });
	
	
	
	///////////---------------////////////////////////////BlackSquad
	client.on('guildMemberAdd', (member) => {
	member.addRole(member.guild.roles.find('name', 'Member'));  
	});
	 
	 
	client.on('message', message => {                      
	    if(!message.channel.guild) return;
	       if(message.content.startsWith(prefix + 'Mal Top')) {       
	       if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
	       message.channel.sendMessage(`** Click 🔝 to Get a Rank  • Mal »Top **`).then(msg => {
	       
	       
	        msg.react('🔝')
	       .then(() => msg.react('🔝'))
	     
	     
	 
	       let activeFilter = (reaction, user) => reaction.emoji.name === '🔝' && user.id === message.author.id;
	     
	       let active = msg.createReactionCollector(activeFilter, { time: 15000 });
	     
	                                                       
	                               active.on("collect", r => {
	                                   message.member.addRole(message.guild.roles.find("name", "• Mal »Top"));
	                                   message.member.removeRole(message.guild.roles.find("name", "0"));
	                                   msg.delete();
	                                   message.channel.send(`**•Done.**`).then(d => d.send(1));
	
	                                   })
	                                   })
	                                   }
	                                   });
	
	/////////
	client.on('guildMemberAdd', (member) => {
	member.addRole(member.guild.roles.find('name', 'Member'));  
	});
	 
	 
	client.on('message', message => {                      
	    if(!message.channel.guild) return;
	       if(message.content.startsWith(prefix + 'love top')) {       
	       if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
	       message.channel.sendMessage(`** Click 🔝 to Get a Rank  • Love»Top **`).then(msg => {
	       
	       
	        msg.react('🔝')
	       .then(() => msg.react('🔝'))
	     
	     
	 
	       let activeFilter = (reaction, user) => reaction.emoji.name === '🔝' && user.id === message.author.id;
	     
	       let active = msg.createReactionCollector(activeFilter, { time: 15000 });
	     
	                                                       
	                               active.on("collect", r => {
	                                   message.member.addRole(message.guild.roles.find("name", "• Love »Top"));
	                                   message.member.removeRole(message.guild.roles.find("name", "0"));
	                                   msg.delete();
	                                   message.channel.send(`**•Done.**`).then(d => d.send(1));
	
	                                   })
	                                   })
	                                   }
	                                   });
	
	////////////////////////////////--------------//////////////////////////PUBG RANK
	client.on('guildMemberAdd', (member) => {
	member.addRole(member.guild.roles.find('name', 'Member'));  
	});
	 
	 
	client.on('message', message => {                      
	    if(!message.channel.guild) return;
	       if(message.content.startsWith(prefix + 'PUBG')) {       
	       if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
	       message.channel.sendMessage(` PUBG Click Right to Get a Rank  `).then(msg => {
	       
	       
	        msg.react('✅')
	       .then(() => msg.react('✅'))
	     
	     
	 
	       let activeFilter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
	     
	       let active = msg.createReactionCollector(activeFilter, { time: 15000 });
	     
	                                                       
	                               active.on("collect", r => {
	                                   message.member.addRole(message.guild.roles.find("name", "PUBG"));
	                                   message.member.removeRole(message.guild.roles.find("name", "0"));
	                                   msg.delete();
	                                   message.channel.send(`**You Have been Activated.**`).then(m => m.delete(1000));  
	
	                                   })
	                                   })
	                                   }
	                                   });
	
	
	////////////////////////////////////////Minecrft RANK 
	client.on('guildMemberAdd', (member) => {
	member.addRole(member.guild.roles.find('name', 'Member'));  
	});
	 
	 
	client.on('message', message => {                      
	    if(!message.channel.guild) return;
	       if(message.content.startsWith(prefix + 'Minecraft')) {       
	       if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
	       message.channel.sendMessage(` Minecraft Click Right to Get a Rank  `).then(msg => {
	       
	       
	        msg.react('✅')
	       .then(() => msg.react('✅'))
	     
	     
	 
	       let activeFilter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
	     
	       let active = msg.createReactionCollector(activeFilter, { time: 15000 });
	     
	                                                       
	                               active.on("collect", r => {
	                                   message.member.addRole(message.guild.roles.find("name", "Minecraft"));
	                                   message.member.removeRole(message.guild.roles.find("name", "0"));
	                                   msg.delete();
	                                   message.channel.send(`**You Have been Activated.**`).then(m => m.delete(1000));  
	
	                                   })
	                                   })
	                                   }
	                                   });
	
	
	//////////////////////////////////////////////////Fortnite RANK
	client.on('guildMemberAdd', (member) => {
	member.addRole(member.guild.roles.find('name', 'Member'));  
	});
	 
	 
	client.on('message', message => {                      
	    if(!message.channel.guild) return;
	       if(message.content.startsWith(prefix + 'Fortnite')) {       
	       if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
	       message.channel.sendMessage(` Fortnite Click Right to Get a Rank  `).then(msg => {
	       
	       
	        msg.react('✅')
	       .then(() => msg.react('✅'))
	     
	     
	 
	       let activeFilter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
	     
	       let active = msg.createReactionCollector(activeFilter, { time: 15000 });
	     
	                                                       
	                               active.on("collect", r => {
	                                   message.member.addRole(message.guild.roles.find("name", "Fortnite"));
	                                   message.member.removeRole(message.guild.roles.find("name", "0"));
	                                   msg.delete();
	                                   message.channel.send(`**You Have been Activated.**`).then(m => m.delete(1000));  
	
	                                   })
	                                   })
	                                   }
	                                   });
	//////////////////////////////////////////////////////////////////////////////////Auto ROle For Type 
	
	
	////////////////////////////////////////////////////
	client.on('guildMemberAdd', (member) => {
	member.addRole(member.guild.roles.find('name', 'Member'));  
	});
	 
	 
	client.on('message', message => {                      
	    if(!message.channel.guild) return;
	       if(message.content.startsWith(prefix + 'Leagueoflegends')) {       
	       if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
	       message.channel.sendMessage(` Leagueoflegends Click Right to Get a Rank  `).then(msg => {
	       
	       
	        msg.react('✅')
	       .then(() => msg.react('✅'))
	     
	     
	 
	       let activeFilter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
	     
	       let active = msg.createReactionCollector(activeFilter, { time: 15000 });
	     
	                                                       
	                               active.on("collect", r => {
	                                   message.member.addRole(message.guild.roles.find("name", "Leagueoflegends"));
	                                   message.member.removeRole(message.guild.roles.find("name", "0"));
	                                   msg.delete();
	                                   message.channel.send(`**You Have been Activated.**`).then(m => m.delete(1000));  
	
	                                   })
	                                   })
	                                   }
	                                   });
	///////////////////////////////////////////////////////
	client.on('guildMemberAdd', (member) => {
	member.addRole(member.guild.roles.find('name', 'Member'));  
	});
	 
	 
	client.on('message', message => {                      
	    if(!message.channel.guild) return;
	       if(message.content.startsWith(prefix + 'Brawlhalla')) {       
	       if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
	       message.channel.sendMessage(` Brawlhalla Click Right to Get a Rank  `).then(msg => {
	       
	       
	        msg.react('✅')
	       .then(() => msg.react('✅'))
	     
	     
	 
	       let activeFilter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
	     
	       let active = msg.createReactionCollector(activeFilter, { time: 15000 });
	     
	                                                       
	                               active.on("collect", r => {
	                                   message.member.addRole(message.guild.roles.find("name", "Brawlhalla"));
	                                   message.member.removeRole(message.guild.roles.find("name", "0"));
	                                   msg.delete();
	                                   message.channel.send(`**You Have been Activated.**`).then(m => m.delete(1000));  
	
	                                   })
	                                   })
	                                   }
	                                   });
	
	
	client.on('guildMemberAdd', (member) => {
	member.addRole(member.guild.roles.find('name', 'Shop»Active'));  
	});
	 
	 
	client.on('message', message => {                      
	    if(!message.channel.guild) return;
	       if(message.content.startsWith(prefix + 'Shop»Member')) {       
	       if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
	       message.channel.sendMessage(` Shop»Member Click Right to Get a Rank  `).then(msg => {
	       
	       
	        msg.react('✅')
	       .then(() => msg.react('✅'))
	     
	     
	 
	       let activeFilter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
	     
	       let active = msg.createReactionCollector(activeFilter, { time: 15000 });
	     
	                                                       
	                               active.on("collect", r => {
	                                   message.member.addRole(message.guild.roles.find("name", "Shop»Member"));
	                                   message.member.removeRole(message.guild.roles.find("name", "Shop»NotActive"));
	                                   msg.delete();
	                                   message.channel.send(`**You Have been Activated.**`).then(m => m.delete(1000));  
	
	                                   })
	                                   })
	                                   }
	                                   });
	
	
	
	
	
	
	
	//////////Photoo GAME's////////////////////
	var prefix = "!";
	var cats = ["https://cdn.pg.sa/kQnLdE3Iqy.jpg","https://cdn.pg.sa/9NVzokjdye.jpg","https://cdn.pg.sa/FYchkbgg02.jpg","https://cdn.pg.sa/oxEQmBE6Pw.jpg","https://cdn.pg.sa/DwYG1JAibu.jpg","https://cdn.pg.sa/3VOKej7Rze.jpg","https://cdn.pg.sa/TdwTWp1qCw.jpg","https://cdn.pg.sa/gzrwDsZ85u.jpg","https://cdn.pg.sa/Ndpob7WF1c.jpg"]
	    client.on('message', message => {
	        var args = message.content.split(" ").slice(1);
	    if(message.content.startsWith(prefix + 'game')) {
	         var cat = new Discord.RichEmbed()
	.setImage(cats[Math.floor(Math.random() * cats.length)])
	message.channel.sendEmbed(cat);
	    }
	});
	//////////////////-------------------------------------////////Mn4en el BOT yrod 3lek
	
	
	client.on('message', message=> {
	    if (message.author.bot) return;
	    if (message.isMentioned(client.user))
	    {
	    message.reply("`Welcome !!`");
	    }
	});
	
	
	client.on('message', message=> {
	    if (message.author.bot) return;
	    if (message.isMentioned(client.user))
	    {
	    message.reply("`!help !help-R`");
	    }
	});
	
	client.on('message', message=> {
	    if (message.author.bot) return;
	    if (message.isMentioned(client.user))
	    {
	    message.reply("Owner Bot: <@521479557375852547>");
	    }
	});
	/////////////----------------------------------------------------------------///////iNVITEby
	client.on('guildMemberAdd', member => {
	  member.guild.fetchInvites().then(guildInvites => {
	    const ei = invites[member.guild.id];
	    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
	    const inviter = client.users.get(invite.inviter.id);
	    const stewart = member.guild.channels.find("name", "个welcome个");
	     stewart.send(`<@${member.user.id}> ***joined***; Invited by<@${inviter.id}>`);
	   //  stewart.send(`<@${member.user.id}> joined using invite code ${invite.code} from <@${inviter.id}>. Invite was used ${invite.uses} times since its creation.`);
	  }); 
	});
	////////////////////////////////ahana
	const fs = require('fs');
	var Swears = JSON.parse(fs.readFileSync("./swears.json", "utf8"));
	client.on('message', message => {
	    var args = message.content.toLowerCase().split(' ');
	    var args1 = args.slice(1).join(' ');
	    var command = args[0];
	    var prefix = '!'; // <====== تقدر تغير البرفكس
	   
	   
	    if(Swears.some(word => message.content.toLowerCase().includes(word))) {
	        if(message.member.hasPermission('ADMINISTRATOR')) return;
	        message.delete();
	        message.channel.send(`:no_entry: | Hey <@${message.author.id}>! Dont swear or you will get mute!`).then(msg => msg.delete(2000));
	    }
	   
	   
	    if(command == prefix + 'swears') {// حقوق الفا كودز & عبود
	        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(':no_entry: | You dont have **MANAGE_MESSAGES** Permission!');
	        if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return meessage.channel.send(':no_entry: | I dont have **EMBED_LINKS** Permission!');
	        if(Swears.length < 1) return message.channel.send(`:no_entry: | No swears words founds! \`\`If you want to add some words type ${prefix}add-swear <SWEAR>\`\``);
	        var number = 1;// حقوق الفا كودز & عبود
	       
	        if(!args[1] || isNaN(args[1]) || args[1] === '1') {// حقوق الفا كودز & عبود
	            if(Swears.length > 10) {
	                var more = `\n__:sparkles: **More?** \`\`${prefix}swears 2\`\` (${Math.round(Math.round(Swears.length / 10) + 1)} pages)`;
	            }else {
	                var more = '\n__';
	            }
	           
	            let swearsWords = new Discord.RichEmbed()// حقوق الفا كودز & عبود
	            .setTitle(`:white_check_mark: **${Swears.length}** Swears Words.`)
	            .setColor('RED')
	            .setDescription(`__\n__${Swears.map(w => `**${number++}.** ${w}`).slice(0, 10).join('\n')}__\n${more}`)
	            .setTimestamp()
	            .setFooter(message.author.tag, message.author.avatarURL)
	           
	            message.channel.send(swearsWords);
	        }else if(!isNaN(args[1])) {// حقوق الفا كودز & عبود
	            if(Swears.length < 10) {
	                var morepage = 'This server have **1** Pages only.';
	            }else {
	                var morepage = `Please select page from 1 to ${Math.round(Swears.length / 10) + 1}`;
	            }
	            if(args[1] > Math.round(Swears.length / 10) + 1) return message.channel.send(`:no_entry: | I couldn\'t find the page. ${morepage}`);
	           if(args[1] < 1) return message.channel.send(`:no_entry: | I couldn\'t find the page. ${morepage}`);// حقوق الفا كودز & عبود
	           if(Swears.length > 10) {
	               var more = `\n__:sparkles: **More?** \`\`${prefix}swears ${Math.round(args[1]) + 1}\`\` (${Math.round(Swears.length / 10) + 1} pages)`;
	           }else {
	               var more = '\n__';
	           }
	           if(args[1] === '5' && Swears.length > 40) more = '\n__';// حقوق الفا كودز & عبود
	           var number = 1;
	         
	           let swearsWords = new Discord.RichEmbed()
	           .setTitle(`:white_check_mark: **${Swears.length}** Swears Words.`)
	           .setColor('RED')
	           .setDescription(`__\n__${Swears.map(w => `**${number++}.** ${w}`).slice(10 * Math.round(args[1].replace('-', '')) - 10, 10 * Math.round(args[1].replace('-', ''))).join('\n')}__\n${more}`)
	           .setTimestamp()
	           .setFooter(message.author.tag, message.author.avatarURL)// حقوق الفا كودز & عبود
	         
	           message.channel.send(swearsWords);
	       }
	   }
	 
	 
	   if(command == prefix + 'add-swear') {// حقوق الفا كودز & عبود
	       if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(':no_entry: | You dont have **ADMINISTRATOR** Permission!');
	       if(!args1) return message.channel.send(`**➥ Useage:** ${prefix}add-swear <SWEAR>`);
	       if(Swears.length == 50) return message.channel.send(':no_entry: | Maxmium number of swears is **50**');
	       if(args1.length > 30) return message.channel.send(`:no_entry: | The swear **${args1.length}** characters. Please try with characters less then **30**`);
	     
	       Swears.push(args1);// حقوق الفا كودز & عبود
	       fs.writeFile('./swears.json', JSON.stringify(Swears), (err) => {
	           if(err) console.error(err);
	       })
	       message.channel.send(`:white_check_mark: | Successfully added **${args1}** To swears words!`);
	   }// حقوق الفا كودز & عبود
	 
	 
	   if(command == prefix + 'remove-swear') {// حقوق الفا كودز & عبود
	       if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(':no_entry: | You dont have **ADMINISTRATOR** Permission!');
	       if(Swears.length < 1) return message.channel.send(`:no_entry: | No swears words founds to remove it! \`\`If you want to add some words type ${prefix}add-swear <SWEAR>\`\``);
	       if(Swears.length == 1) {
	           var to = 1;
	       }else if(Swears.length > 1) {
	           var to = `<1 to ${Swears.length}>`;// حقوق الفا كودز & عبود
	       }
	       if(!args[1]) return message.channel.send(`**➥ Useage:** ${prefix}remove-swear ${to}`);
	        if(isNaN(args[1])) return message.channel.send(`:no_entry: | The args must be a number!`);
	        if(args[1] > Swears.length) return message.channel.send(`:no_entry: | Please choose number from 1 to ${Swears.length}`);
	     
	       message.channel.send(`:white_check_mark: | Successfully remove **${Swears.splice(args[1] - 1, 1)}** from swears words`);
	       fs.writeFile('./swears.json', JSON.stringify(Swears), (err) => {
	           if(err) console.error(err);
	       })
	   }
	 
	 
	   if(command == prefix + 'remove-all-swears') {// حقوق الفا كودز & عبود
	       if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(':no_entry: | You dont have **ADMINISTRATOR** Permission!');
	       if(Swears.length < 1) return message.channel.send(`:no_entry: | No swears words founds to remove it! \`\`If you want to add some words type ${prefix}add-swear <SWEAR>\`\``);
	       message.channel.send(`:white_check_mark: | Successfully remove **${Swears.length}** Swears words!`);
	       Swears = [];
	       fs.writeFile('./swears.json', JSON.stringify(Swears), (err) => {
	           if(err) console.error(err);
	       })// حقوق الفا كودز & عبود
	   }
	});// حقوق الفا كودز & عبود
	client.on('messageUpdate', (oldMessage, newMessage) => {
	    if(Swears.some(word => newMessage.content.toLowerCase().includes(word))) {// حقوق الفا كودز & عبود
	        if(oldMessage.member.hasPermission('ADMINISTRATOR')) return;
	        oldMessage.delete();// حقوق الفا كودز & عبود
	        oldMessage.channel.send(`:no_entry: | Hey <@${oldMessage.author.id}>! Dont swear or you will get mute!`).then(msg => msg.delete(2000));
	    }// حقوق الفا كودز & عبود
	});
	////////////////////////////////////////////
	
	
	
	
	
	
	
	
	
	///////////////////////////GAME
	const cuttweet = [
	  'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
	  'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
	  'كت تويت | الحرية لـ ... ؟',
	  'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
	  'كت تويت ‏| كلمة للصُداع؟',
	  'كت تويت ‏| ما الشيء الذي يُفارقك؟',
	  'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
	  'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
	  'كت تويت | بعد ١٠ سنين ايش بتكون ؟',
	  'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
	  '‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
	  'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
	  '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
	  '‏كت تويت | وش يفسد الصداقة؟',
	  '‏كت تويت | شخص لاترفض له طلبا ؟',
	  '‏كت تويت | كم مره خسرت شخص تحبه؟.',
	  '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
	  '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
	  '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
	  '‏كت تويت |أقوى كذبة مشت عليك ؟',
	  '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
	  'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
	  '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
	  '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
	  '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',
	  '‏كت تويت | مطلبك الوحيد الحين ؟',
	  '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
	]
	
	client.on('message', message => {
	if (message.content.startsWith(prefix + "كت تويت")) {
	             if(!message.channel.guild) return message.reply('** This command only for servers**');
	var embed = new Discord.RichEmbed()
	.setColor('RANDOM')
	.setThumbnail(message.author.avatarURL) 
	.addField('لعبه كت تويت' ,
	`${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
	message.channel.sendEmbed(embed);
	console.log('[id] Send By: ' + message.author.username)
	 }
	});
	////////////////7kam
	 const kingmas = [
	    '*** منشن الجميع وقل انا اكرهكم. ***',
	 '*** اتصل على امك و قول لها انك تحبها :heart:. ***',
	    '***     تصل على الوالده  و تقول لها  احب وحده.***',
	    '*** تتصل ع��ى شرطي تقول له عندكم مطافي.***',
	    '*** صور اي شيء يطلبه منك الاعبين.***',
	    '*** اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص. ***',
	    '*** اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك.***',
	    '*** اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف.***',
	    '***  تروح عند شخص تقول له احبك. ***',
	    '***روح عند اي احد بالخاص و قول له انك تحبه و الخ.***',
	    '*** اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه. ***',
	    '*** روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل. ***',
	    '*** اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك. ***',
	    '*** ذي المرة لك لا تعيدها.***',
	    '*** ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام.***',
	    '*** اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل..... ***',
	    '*** تكلم باللهجة السودانية الين يجي دورك مرة ثانية.***',
	    '***سو مشهد تمثيلي عن مصرية بتولد.***',
	    '*** قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية. ***',
	    '*** قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية.***',
	    '*** سامحتك خلاص مافيه عقاب لك :slight_smile:. ***',
	    '*** اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه.***',
	    '*** تتصل على الوالده  و تقول لها خطفت شخص. ***',
	    '*** روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك.  ***'
	 ]
	  client.on('message', message => {
	  if (message.content.startsWith(prefix + 'حكم')) {
	   var mariam= new Discord.RichEmbed()
	   .setTitle("Games")
	   .setColor('RANDOM')
	   .setDescription(`${kingmas[Math.floor(Math.random() * kingmas.length)]}`)
	    message.channel.sendEmbed(mariam);
	    message.react(":thinking:")
	   }
	 });
	///////////////////////////////////////////////////
	
	////////////////////////////////////////3qab
	var Za7f = [
	  "**صورة وجهك او رجلك او خشمك او يدك**.",
	  "**اصدر اي صوت يطلبه منك الاعبين**.",
	  "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
	  "**روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل**.",
	  "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
	  "**سمعنا صوتك و غن اي اغنية من اختيار الاعبين الي معك**.",
	  "**ذي المرة لك لا تعيدها**.",
	  "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
	  "**صور اي شيء يطلبه منك الاعبين**.",
	  "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
	  "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
	  "**سو مشهد تمثيلي عن مصرية بتولد**.",
	  "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
	  "**ذي المرة لك لا تعيدها**.",
	  "**تعطي اي شخص 5 الاف كرديت**.",
	  "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
	  "**روح عند اي احد بالخاص و قول له انك تحبه و الخ**.",
	  "**اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص**.",
	  "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
	  "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
	  "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
	  "**غير اسمك الى اسم من اختيار الاعبين الي معك**.",
	  "**اتصل على امك و قول لها انك تحبها :heart:**.",
	  "**لا يوجد سؤال لك سامحتك :slight_smile:**.",
	  "**قل لواحد ماتعرفه عطني كف**.",
	  "**منشن الجميع وقل انا اكرهكم**.",
	  "**اتصل لاخوك و قول له انك سويت حادث و الخ....**.",
	  "**روح المطبخ و اكسر صحن او كوب**.",
	  "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
	  "**قول لاي بنت موجود في الروم كلمة حلوه**.",
	  "**تكلم باللغة الانجليزية الين يجي دورك مرة ثانية لازم تتكلم اذا ما تكلمت تنفذ عقاب ثاني**.",
	  "**لا تتكلم ولا كلمة الين يجي دورك مرة ثانية و اذا تكلمت يجيك باند لمدة يوم كامل من الس��رفر**.",
	  "**قول قصيدة **.",
	  "**تكلم باللهجة السودانية الين يجي دورك مرة ثانية**.",
	  "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
	  "**اول واحد تشوفه عطه كف**.",
	  "**سو مشهد تمثيلي عن اي شيء يطلبه منك الاعبين**.",
	  "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
	  "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
	  "**روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك**.",
	  "**تاخذ عقابين**.",
	  "**قول اسم امك افتخر بأسم امك**.",
	  "**ارمي اي شيء قدامك على اي احد موجود او على نفسك**.",
	  "**اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك**.",
	  "**اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه**.",
	  "**تتصل على الوالده  و تقول لها خطفت شخص**.",
	  "** تتصل على الوالده  و تقول لها تزوجت با سر**.",
	  "**����تصل على الوالده  و تقول لها  احب وحده**.",
	    "**تتصل على شرطي تقول له عندكم مطافي**.",
	    "**خلاص سامحتك**.",
	    "** تصيح في الشارع انا  مجنوون**.",
	    "** تروح عند شخص تقول له احبك**.",
	
	];
	
	client.on('message', message => {
	 if (message.content.startsWith("!عقاب")) {
	              if(!message.channel.guild) return message.reply('** This command only for servers**');
	var embed = new Discord.RichEmbed()
	.setColor('RANDOM')
	 .setThumbnail(message.author.avatarURL) 
	.addField('GAMING BOT' ,
	`${Za7f[Math.floor(Math.random() * Za7f.length)]}`)
	message.channel.sendEmbed(embed);
	console.log('[38ab] Send By: ' + message.author.username)
	  }
	});
	///////////////////
	////////////////////////////////////////-/////////////////////////////////////////Rps
	client.on("message", function(message) {
		var prefix = "!";
	   if(message.content.startsWith(prefix + "rps")) {
	    let messageArgs = message.content.split(" ").slice(1).join(" ");
	    let messageRPS = message.content.split(" ").slice(2).join(" ");
	    let arrayRPS = ['**# - Rock**','**# - Paper**','**# - Scissors**'];
	    let result = `${arrayRPS[Math.floor(Math.random() * arrayRPS.length)]}`;
	    var RpsEmbed = new Discord.RichEmbed()
	    .setAuthor(message.author.username)
	    .setThumbnail(message.author.avatarURL)
	    .addField("Rock","🇷",true)
	    .addField("Paper","🇵",true)
	    .addField("Scissors","🇸",true)
	    message.channel.send(RpsEmbed).then(msg => {
	        msg.react(' 🇷')
	        msg.react("🇸")
	        msg.react("🇵")
	.then(() => msg.react('🇷'))
	.then(() =>msg.react('🇸'))
	.then(() => msg.react('🇵'))
	let reaction1Filter = (reaction, user) => reaction.emoji.name === '🇷' && user.id === message.author.id;
	let reaction2Filter = (reaction, user) => reaction.emoji.name === '🇸' && user.id === message.author.id;
	let reaction3Filter = (reaction, user) => reaction.emoji.name === '🇵' && user.id === message.author.id;
	let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
		    
	let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
	let reaction3 = msg.createReactionCollector(reaction3Filter, { time: 12000 });
	reaction1.on("collect", r => {
	        message.channel.send(result)
	})
	reaction2.on("collect", r => {
	        message.channel.send(result)
	})
	reaction3.on("collect", r => {
	        message.channel.send(result)
	})
	
	    })
	}
	});
	//////////////////////--------------------/quas
	client.on('message', message => {
	    if (message.content == "!quas") {
	         message.react('🤔','👌')
	        var x = ['اين يلعب مصطفي فتحي؟', 'ما هو اسم ملعب بارشالونة', 'ما هو يوم الحج الأكبر؟', 'ما هو أطول أنهار أوربا ؟', 'ما هو اسم بيت الدجاج', 'ما هو أول بنك قام بالنشاط المصرفي في السعودية عام 1926م' , 'ما هو أول جامع أقيم في مصر','ما هو أطول نهر في آسيا','ما هو أقرب كوكب إلى الشمس','ما هو الحيوان الذي يُسمى البهنس','ما هو اول مسجد أسس بالمدينة','متى وقع صلح الحديبية عام 6هـ او 3هـ او 2هـ؟','متى قامت أمريكا بأول رحلة فضائية','متى كانت غزوة خيبر؟','ما هي السورة التي تبدأ بقوله تعالى " يا أيها النبي اتق الله ولا تطع الكافرين والمنافقين إن الله كان عليما حكيما ".اجب؟','ما هي السورة التي يطلق عليها عروس القرآن','ماذا يسمى من لايقرأ ولايكتب','ماهي أول دولة استخدمت طابع البريد','ماهو شعار الولايات المتحدة الامريكية','ماهو اذكي الحيوانات','من هو مكتشف أمريكا','مامعنى "فرعون" اجب؟','ماهو اقرب كوكب إلى الارض','ما هي نسبه المياه من الكره الارضيه?','كم عدد السجدات في القرآن الكريم؟','من هو بطل كاس العالم في عام 1966','أين أفتتح اول متحف في العالم?','ماأسم أنثى الحمار?','كم تبلغ درجه حراره الشمس؟','من هي مدينة الضباب','أين توجد أطول سكة حديد في العالم?'
	        ];
	        var x2 = ['التعاون', 'كامب نو', 'يوم النحر', 'الدانوب', 'قن', 'البنك الهولندي', 'جامع عمرو بن العاص','اليانجستي','عطارد','الاسد','مسجد قباء','6','سنة 1962','عام 7هـ','الاحزاب','سورة الرحمن','امي','بريطانيا','النسر الاصلع','الدلفين','كولمبس','البيت الكبير','الزهره','71%','15 سجدة','انكلترا ','القاهرة','الاتان','15 مليون درجه مئوية','لندن','كندا'
	        ];
		    var x3 = Math.floor(Math.random()*x.length)
	        message.channel.send(`📢 امامك دقيقة لحل الاسئلة , السؤال يقول :  __**${x[x3]}**__ `).then(msg1=> {
	            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
	               thing: true,
	               maxMatches : 1,
	                time : 60000,
	                 maxUses: 1,
	                errors : ['time']
	            })
	        r.catch(() => {
	            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح `)
	        })
	
	        r.then((collected)=> {
	            message.channel.send(`${collected.first().author} لقد قمت بكتابة الجواب الصحيح  `);
	            message.react('✅')
	        })
	        })
	    }
	});
	//////////fkk
	client.on('message', message => { 
		var prefix ="!";
	           if (message.content.startsWith(prefix + "user")) {
	     var args = message.content.split(" ").slice(1);
	     let user = message.mentions.users.first();
	     var men = message.mentions.users.first();
	        var heg;
	        if(men) {
	            heg = men
	        } else {
	            heg = message.author
	        }
	      var mentionned = message.mentions.members.first();
	         var h;
	        if(mentionned) {
	            h = mentionned
	        } else {
	            h = message.member
	        }
	               moment.locale('ar-TN');
	      var id = new  Discord.RichEmbed()
	      .setAuthor(message.author.username, message.author.avatarURL) 
	    .setColor("#707070")
	    .addField(':part_alternation_mark: Jǒìň Iń Discōrd Sincē', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true) 
	    .addField(':trident: Jǒìň Iń Sèrvèr Sincē', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)               
	    .setFooter(`GAMING bot`, 'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')                                 
	    .setThumbnail(heg.avatarURL);
	    message.channel.send(id)
	}       });
	/////////////////////////////////////hal t3lam/
	
	client.on('message', message => {
	var prefix = "!";
	var cats = ["http://www.shuuf.com/shof/uploads/2015/09/09/jpg/shof_b9d73150f90a594.jpg","https://haltaalam.info/wp-content/uploads/2015/05/0.208.png","https://haltaalam.info/wp-content/uploads/2015/05/266.png","https://haltaalam.info/wp-content/uploads/2015/05/250.png","https://haltaalam.info/wp-content/uploads/2017/02/0.2517.png","https://pbs.twimg.com/media/CP0mi02UAAA3U2z.png","http://www.shuuf.com/shof/uploads/2015/08/31/jpg/shof_3b74fa7295ec445.jpg","http://www.shuuf.com/shof/uploads/2015/08/22/jpg/shof_fa3be6ab68fb415.jpg","https://pbs.twimg.com/media/CSWPvmRUcAAeZbt.png","https://pbs.twimg.com/media/B18VworIcAIMGsE.png"]
	        var args = message.content.split(" ").slice(1);
	    if(message.content.startsWith(prefix + 'هل تعلم')) {
	         var cat = new Discord.RichEmbed()
	.setImage(cats[Math.floor(Math.random() * cats.length)])
	message.channel.sendEmbed(cat);
	    }
	});
	//Franko
	client.on('message', message => {
	var prefix = "!";
	var cats = ["http://www.shuuf.com/shof/uploads/2015/09/09/jpg/shof_b9d73150f90a594.jpg","https://haltaalam.info/wp-content/uploads/2015/05/0.208.png","https://haltaalam.info/wp-content/uploads/2015/05/266.png","https://haltaalam.info/wp-content/uploads/2015/05/250.png","https://haltaalam.info/wp-content/uploads/2017/02/0.2517.png","https://pbs.twimg.com/media/CP0mi02UAAA3U2z.png","http://www.shuuf.com/shof/uploads/2015/08/31/jpg/shof_3b74fa7295ec445.jpg","http://www.shuuf.com/shof/uploads/2015/08/22/jpg/shof_fa3be6ab68fb415.jpg","https://pbs.twimg.com/media/CSWPvmRUcAAeZbt.png","https://pbs.twimg.com/media/B18VworIcAIMGsE.png"]
	        var args = message.content.split(" ").slice(1);
	    if(message.content.startsWith(prefix + 'halt3lam')) {
	         var cat = new Discord.RichEmbed()
	.setImage(cats[Math.floor(Math.random() * cats.length)])
	message.channel.sendEmbed(cat);
	    }
	});
	////////////Profile
	client.on('message', message => {
	    if(message.content == ('!profile')) {    
	 
	             if (message.channel.type === 'dm') return message.reply('This Command Is Not Avaible In Dm\'s :x:');   
	            var Canvas = module.require('canvas');
	            var jimp = module.require('jimp');
	    
	     const w = ['ID1.png','ID2.png','ID3,png','ID4.png','ID5.png'];
	    
	             let Image = Canvas.Image,
	                 canvas = new Canvas(802, 404),
	                 ctx = canvas.getContext('2d');
	             ctx.patternQuality = 'bilinear';
	             ctx.filter = 'bilinear';
	             ctx.antialias = 'subpixel';
	             ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
	             ctx.shadowOffsetY = 2;
	             ctx.shadowBlur = 2;
	             fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
	                 if (err) return console.log(err);
	                 let BG = Canvas.Image;
	                 let ground = new Image;
	                 ground.src = Background;
	                 ctx.drawImage(ground, 0, 0, 802, 404);
	    
	     })
	                                let user = message.mentions.users.first();
	          var men = message.mentions.users.first();
	             var heg;
	             if(men) {
	                 heg = men
	             } else {
	                 heg = message.author
	             }
	           var mentionned = message.mentions.members.first();
	              var h;
	             if(mentionned) {
	                 h = mentionned
	             } else {
	                 h = message.member
	             }
	             var ment = message.mentions.users.first();
	             var getvalueof;
	             if(ment) {
	               getvalueof = ment;
	             } else {
	               getvalueof = message.author;
	             }//ما خصك ,_,
	                                           let url = getvalueof.displayAvatarURL.endsWith(".webp") ? getvalueof.displayAvatarURL.slice(5, -20) + ".png" : getvalueof.displayAvatarURL;
	                                             jimp.read(url, (err, ava) => {
	                                                 if (err) return console.log(err);
	                                                 ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
	                                                     if (err) return console.log(err);
	                            
	                                                             let Avatar = Canvas.Image;
	                                                             let ava = new Avatar;
	                                                             ava.src = buf;
	                                                             ctx.beginPath();
	                                                           ctx.drawImage(ava, 335, 3, 160, 169);
	                                                     ctx.font = '35px Arial Bold';
	                                                     ctx.fontSize = '40px';
	                                                     ctx.fillStyle = "#dadada";
	                                                     ctx.textAlign = "center";
	                                                    
	                            
	                                                     ctx.font = '30px Arial Bold';
	                                                     ctx.fontSize = '30px';
	                                                     ctx.fillStyle = "#ffffff";
	                                                                             ctx.fillText(`${getvalueof.username}`,655, 170);
	                                                                            
	                                                                        
	                                                          moment.locale('en-ly');        
	                                            
	                                            
	                                                                    ctx.font = '30px Arial';
	                                                     ctx.fontSize = '30px';
	                                                     ctx.fillStyle = "#ffffff";
	                                                                             ctx.fillText(`${moment(h.joinedAt).fromNow()}`,150, 305);
	                                                              
	                                                              
	                                                                                                     ctx.font = '30px Arial';
	                                                     ctx.fontSize = '30px';
	                                                     ctx.fillStyle = "#ffffff";
	                                                                 ctx.fillText(`${moment(heg.createdTimestamp).fromNow()}`,150, 170); 
	                            
	                                                       let status;
	     if (getvalueof.presence.status === 'online') {
	         status = 'Online';
	     } else if (getvalueof.presence.status === 'dnd') {
	         status = 'dnd';
	     } else if (getvalueof.presence.status === 'idle') {
	         status = 'idle';
	     } else if (getvalueof.presence.status === 'offline') {
	         status = 'offline';
	     }
	     
	     
	                                          ctx.cont = '35px Arial';
	                                          ctx.fontSize = '30px';
	                                          ctx.filleStyle = '#ffffff'
	                                          ctx.fillText(`${status}`,655,305)
	                  
	                                                                   ctx.font = 'regular 30px Cairo';
	                                                                   ctx.fontSize = '30px';
	                                                                   ctx.fillStyle = '#ffffff'
	                                                         ctx.fillText(`${h.presence.game === null ? "No playing" : h.presence.game.name}`,390,390);
	                            
	                               ctx.font = '35px Arial';
	                                                                   ctx.fontSize = '30px';
	                                                                   ctx.fillStyle = '#ffffff'
	                                                                   ctx.fillText(`#${heg.discriminator}`,390,260)
	                            
	                                 ctx.beginPath();
	                                 ctx.stroke();
	                               message.channel.sendFile(canvas.toBuffer());
	                            
	                            
	                          
	                            
	                             })
	                            
	                             })
	 }
	 });
	
	
	
	/////////////-------------------------------/////امثال
	client.on('message', message => {
	    if (message.content == "!امثال") {
	        var x = ["أذا ذل رويال فهو ...",
	"الإتحاد ...",
	"الناس سواسية كأسنان ...",
	"ما أشبه الليله",
	"البعد ...",
	"الماء أهون موجود وأعز ...",
	"الهزيمة تحل ...",
	"العقل ...",
	"البطنة تزيل ...",
	"اللبيب بالإشارة ...",
	"اخطب لابنتك ولا تخطب ...",
	"أعز من الولد ولد ...",
	"القرد في عين أمه ...",
	"الكتاب يقرأ من ...",
	"آخر الحياة ...",
	"أكرم نفسك عن كل",
	"العز في نواصي",
	];
	        var x2 = ['ذليل',
	        "قوة",
	        "المشط",
	        "بالبارحة",
	        "جفاء",
	        "مفقود",
	        "العزيمة",
	        "زينة",
	        "الفطنة",
	        "يفهم",
	        "لابنك",
	        "الولد",
	        "غزال",
	        "عنوانه",
	        "الموت",
	        "دنيء",
	        "الخيل",
	        
	        
	        
	        
	        ];
	        
	        var x3 = Math.floor(Math.random()*x.length)
	        message.channel.send(` اكمل المثل التآلي :  __**${x[x3]}**__ ؟
	    لديك 30 ثآنية للإجآبة `).then(msg1=> {
	            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
	                maxMatches : 1,
	                time : 30000,
	                errors : ['time']
	            })
	        r.catch(() => {
	            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
	            الإجآبة الصحيحةة هي __**${x2[x3]}**__`)
	        })
	        
	        r.then((collected)=> {
	            message.channel.send(`${collected.first().author} لقد قمت بكتابة الجواب الصحيح بالوقت المناسب  `);
	        })
	        })
	    }
	})
	
	////////////////////////////////////Tkyem
	client.on('message', message => {
				 if(message.content.startsWith(prefix + 'تقيم')) {
	         	let ratus = message.mentions.members.first();
	if(!ratus) return message.channel.send("Tag someone to rate them!");
	
	let rates = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
	
	let result = Math.floor((Math.random() * rates.length));
	
	if(ratus.user.id === message.author.id) {
	  return message.channel.send(`**${message.author.username}**, I'd give you ${result}/10<:thonk:427846193503272960>`);
	} else return message.channel.send(`I'd give **__${ratus.user.username}__** ${result}/10 <:thonk:427846193503272960>`);
	 }
	});
	///Franko
	client.on('message', message => {
				 if(message.content.startsWith(prefix + 'takyem')) {
	         	let ratus = message.mentions.members.first();
	if(!ratus) return message.channel.send("Tag someone to rate them!");
	
	let rates = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
	
	let result = Math.floor((Math.random() * rates.length));
	
	if(ratus.user.id === message.author.id) {
	  return message.channel.send(`**${message.author.username}**, I'd give you ${result}/10<:thonk:427846193503272960>`);
	} else return message.channel.send(`I'd give **__${ratus.user.username}__** ${result}/10 <:thonk:427846193503272960>`);
	 }
	});
	///////--------------------------------------
	
	///////------------------------------------------------------------------------------/////top inv
	
	//////////////////////////
	
	module.exports.run = async (bot, message, args) => {
	
	    //!addrole @andrew
	    if (!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("❌ Sorry pal, you can't do that.");
	    if (args[0] == "help") {
	        message.reply("Usage: !addrole <user> <role>");
	        return;
	    }
	    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
	    if (!rMember) return message.reply("Couldn't find that user, yo.");
	    let role = args.join(" ").slice(22);
	    if (!role) return message.reply("Specify a role!");
	    let gRole = message.guild.roles.find(`name`, role);
	    if (!gRole) return message.reply("Couldn't find that role.");
	
	    if (rMember.roles.has(gRole.id)) return message.reply("❌ They already have that role.");
	    await (rMember.addRole(gRole.id));
	
	    try {
	        await rMember.send(`Congrats, you have been given the role ${gRole.name}`)
	    } catch (e) {
	        console.log(e.stack);
	        message.channel.send(`Congrats to <@${rMember.id}>, they have been given the role ${gRole.name}. We tried to DM them, but their DMs are locked.`)
	    }
	}
	
	module.exports.help = {
	    name: "addrole"
	}
	
	// Remove Role
	
	
	module.exports.run = async (bot, message, args) => {
	
	    if (!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Îmi pare rău, nu poți face asta.");
	    if (args[0] == "help") {
	        message.reply("Foloseste: !removerole <user> <role>");
	        return;
	    }
	    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
	    if (!rMember) return message.reply("Nu am putut găsi acel utilizator");
	    let role = args.join(" ").slice(22);
	    if (!role) return message.reply("Specificați un rol");
	    let gRole = message.guild.roles.find(`name`, role);
	    if (!gRole) return message.reply("Nu am găsit acest rol.");
	
	    if (!rMember.roles.has(gRole.id)) return message.reply("Ei nu au acel rol.");
	    await (rMember.removeRole(gRole.id));
	
	    try {
	        await rMember.send(`Ai piedut gradul ${gRole.name}`)
	    } catch (e) {
	        message.channel.send(`RIP to <@${rMember.id}>, Ai fost ${gRole.name} de la ei. Am încercat să le dăm, dar DM-urile lor sunt blocate.`)
	    }
	}
	
	module.exports.help = {
	    name: "removerole"
	}
	/////////////////////////////
	client.on('message', message => {
	    var prefix = "!"
	     let command = message.content.split(" ")[0];
	   command = command.slice(prefix.length);
	 
	   let args = message.content.split(" ").slice(1);
	 
	 
	 if(command == "امر  الرسم") {
	     var Canvas = require('canvas')
	   , Image = new Canvas.Image
	   , canvas = new Canvas(450, 170)
	   , ctx = canvas.getContext('2d');
	   ctx.font = '30px Impact';
	   let args = message.content.split(" ").slice(1);
	   
	 Image.src = canvas.toBuffer();
	 
	     console.log(Image);
	 ctx.drawImage(Image, 0, 0, Image.width / 470, Image.height / 170);
	 ctx.fillText(args.join("  "),110, 70);
	 
	 
	 ctx.beginPath();
	 ctx.lineTo(50, 102);
	 ctx.stroke();
	 
	 message.channel.sendFile(canvas.toBuffer());
	 }
	 
	 });
	
	////////////////
	client.on('message',async msg => {
	  var p = "!";
	  if(msg.content.startsWith(p + "setdate")) {
	  if(!msg.guild.member(msg.author).hasPermissions('MANAGE_CHANNELS')) return msg.reply('❌ **go play minecraft**');
	  if(!msg.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS'])) return msg.reply('❌ **البوت لا يمتلك صلاحية**');
	  msg.guild.createChannel(`date :[]` , 'voice').then(time => {
	    time.overwritePermissions(msg.guild.id, {
	      CONNECT: false,
	      SPEAK: false
	    });
	  setInterval(() => {
	      var currentTime = new Date(),
	Year = currentTime.getFullYear(),
	Month = currentTime.getMonth() + 1,
	Dat = currentTime.getDate()
	      time.setName(`📅 - Date「${Year} - ${Month} - ${Dat}」`);
	 },1000);
	  });
	  }
	 
	});
	////////////////////////
	client.on('message',async msg => {
	  var p = "!";
	  if(msg.content.startsWith(p + "settime")) {
	  if(!msg.guild.member(msg.author).hasPermissions('MANAGE_CHANNELS')) return msg.reply('❌ **go play minecraft**');
	  if(!msg.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS'])) return msg.reply('❌ **البوت لا يمتلك صلاحية**');
	  msg.guild.createChannel(`Time :[]` , 'voice').then(time => {
	    time.overwritePermissions(msg.guild.id, {
	      CONNECT: false,
	      SPEAK: false
	    });
	  setInterval(() => {
	      var currentTime = new Date(),
	hours = currentTime.getHours() + 5 ,
	minutes = currentTime.getMinutes(),
	Seconds = currentTime.getSeconds()
	if (minutes < 10) {
	minutes = "0" + minutes;
	}
	var suffix = "AM";
	if (hours >= 12) {
	suffix = "PM";
	hours = hours - 12;
	}
	if (hours == 0) {
	hours = 12;
	}
	      time.setName(`🕐 - Time :[${hours} : ${minutes} : ${Seconds} ${suffix}]`);
	 },1000);
	  });
	  }
	 
	});
	///////CODE EL AFK 
	
	  const cool = [];
	  client.on('message',async message => {
	    if(message.author.bot) return;
	    if(message.channel.type === 'dm') return;
	  
	    const args = message.content.split(' ');
	    const credits = require('./credits.json');
	    const path = './credits.json';
	    const mention = message.mentions.users.first() || client.users.get(args[1]) || message.author;
	    const mentionn = message.mentions.users.first() || client.users.get(args[1]);
	    const author = message.author.id;
	    const balance = args[2];
	    const daily = Math.floor(Math.random() * 350) + 10;
	  
	    if(!credits[author]) credits[author] = {credits: 50};
	    if(!credits[mention.id]) credits[mention.id] = {credits: 50};
	    fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
	  
	    
	    if(message.content.startsWith(prefix + "credit")) {
	    if(args[0] !== `${prefix}credit` && args[0] !== `${prefix}credits`) return;
	  
	    if(args[2]) {
	      if(isNaN(args[2])) return message.channel.send('**:heavy_multiplication_x:| هذه الخانة يجب ان تتكون من ارقام وليس احرف.**');
	      if(mention.bot) return message.channel.send(`**:heavy_multiplication_x:| ${message.content.split(' ')[1]} لم يتم العثور على**`);
	      if(mention.id === message.author.id) return message.channel.send('**:heavy_multiplication_x:| لا يمكنك تحويل كردت لنفسك**');
	      if(credits[author].credits < balance) return message.channel.send('**:heavy_multiplication_x:| أنت لا تملك هذا القدر من الكردت**');
	      var one = Math.floor(Math.random() * 9) + 1;
	      var two = Math.floor(Math.random() * 9) + 1;
	      var three = Math.floor(Math.random() * 9) + 1;
	      var four = Math.floor(Math.random() * 9) + 1;
	  
	      var number = `${one}${two}${three}${four}`;
	      
	      message.channel.send(`**:heavy_dollar_sign:| \`${number}\`, أكتب الرقم للأستمرار**`).then(m => {
	        message.channel.awaitMessages(m => m.author.id === message.author.id, {max: 1, time: 10000}).then(c => {
	          if(c.first().content === number) {
	            m.delete();
	            message.channel.send(`**:atm:| ${message.author.username}, قام بتحويل \`${balance}\` لـ ${mention}**`);
	            credits[author].credits += (-balance);
	            credits[mention.id].credits += (+balance);
	            fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
	          } else if(c.first().content !== number) {
	            m.delete();
	            message.channel.send(`** :money_with_wings: | تم الغاء الإرسال**`);
	          }
	        });
	      });
	    }
	    if(!args[2]) {
	      if(mention.bot) return message.channel.send(`**:heavy_multiplication_x:| ${message.content.split(' ')[1]} لم يتم العثور على**`);
	      message.channel.send(`**${mention.username}, your :credit_card: balance is **${credits[mention.id].credits}`);
	    } 
	    
	    }
	    if(message.content.startsWith(prefix + "daily")) {
	      if(cool.includes(message.author.id)) return message.channel.send(`**:heavy_dollar_sign: | \`${moment().startOf('day').locale('ar-eg').fromNow().replace('منذ', 'بعد')}\` , يجب عليك انتظار  يوم لأخذ المبلغ مرة اخرى**`);
	      if(mentionn) {
	        var one = Math.floor(Math.random() * 9) + 1;
	        var two = Math.floor(Math.random() * 9) + 1;
	        var three = Math.floor(Math.random() * 9) + 1;
	        var four = Math.floor(Math.random() * 9) + 1;
	    
	        var number = `${one}${two}${three}${four}`;
	  
	        message.channel.send(`**:atm: | \`${number}\`, قم بكتابة الرقم للأستمرار**`).then(async m => {
	          message.channel.awaitMessages(msg => msg.author.id === message.author.id, {max: 1, time: 20000, errors: ['time']}).then(collected => {
	            if(collected.first().content === number) {
	              m.delete();
	              collected.first().delete();
	              credits[mentionn.id].credits += (+daily);
	              fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
	  
	            message.channel.send(`**:atm: | \`${daily}\`, تم تسليم المبلغ**`);  
	            }
	            if(collected.first().content !== number) {
	              return m.delete();
	            }
	          });
	        });
	      } else if(!mentionn) {
	        credits[author].credits += (+daily);
	        fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
	  
	        message.channel.send(`**:atm: | \`${daily}\`, تم اعطائك المبلغ**`);
	      }
	      cool.unshift(message.author.id);
	  
	      setTimeout(() => {
	        cool.shift(message.author.id);
	        message.author.send("**:atm: | \`Daily\`, يمكنك الحصول على الكردت المجانية الان**").catch();
	      }, ms("1d"));
	    }
	  });
	
	//////////////////////azkar
	const adkar = [
	    '**اذكار  | **اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ.',
	    '**اذكار  |  **اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى. ',
	    '**اذكار  ‏|  **اللَّهُمَّ اغْفِرْ لِي ذَنْبِي كُلَّهُ، دِقَّهُ، وَجِلَّهُ، وَأَوَّلَهُ، وَآخِرَهُ، وَعَلَانِيَتَهُ، وَسِرَّهُ. ',
	    '**‏اذكار  |  **أستغفر الله .',     
	    '**‏اذكار  | **الْلَّهُ أَكْبَرُ',
	    '**‏اذكار  |  **لَا إِلَهَ إِلَّا اللَّهُ',
	    '**اذكار  |  **اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ , وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ , اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ.',
	    '**اذكار  |  **سُبْحَانَ الْلَّهِ، وَالْحَمْدُ لِلَّهِ، وَلَا إِلَهَ إِلَّا الْلَّهُ، وَالْلَّهُ أَكْبَرُ',
	    '**اذكار  | **لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلُّ شَيْءِ قَدِيرِ.',
	    '**اذكار  | **أسْتَغْفِرُ اللهَ وَأتُوبُ إلَيْهِ',
	    '**‏اذكار  | **سُبْحـانَ اللهِ وَبِحَمْـدِهِ. ',
	    '‏**اذكار**|  لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءِ قَدِيرِ.',
	    '**اذكار  ‏|   **اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا.',
	    '**اذكار  | ‏ **يَا رَبِّ , لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ , وَلِعَظِيمِ سُلْطَانِكَ.',
	    'اذكار    |  **أسْتَغْفِرُ اللهَ العَظِيمَ الَّذِي لاَ إلَهَ إلاَّ هُوَ، الحَيُّ القَيُّومُ، وَأتُوبُ إلَيهِ.**',
	    '**‏اذكار  |  **اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ ، وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُهُ.',
	    '**‏اذكار  |  **اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ على نَبِيِّنَا مُحمَّد. ',
	    '**‏اذكار  |  **أَعـوذُ بِكَلِمـاتِ اللّهِ التّـامّـاتِ مِنْ شَـرِّ ما خَلَـق.',
	    '**اذكار  |  **يَا حَيُّ يَا قيُّومُ بِرَحْمَتِكَ أسْتَغِيثُ أصْلِحْ لِي شَأنِي كُلَّهُ وَلاَ تَكِلْنِي إلَى نَفْسِي طَـرْفَةَ عَيْنٍ. ',
	    '**اذكار  |  **اللّهُـمَّ إِنّـي أَعـوذُ بِكَ مِنَ الْكُـفر ، وَالفَـقْر ، وَأَعـوذُ بِكَ مِنْ عَذابِ القَـبْر ، لا إلهَ إلاّ أَنْـتَ.',
	    '**‏اذكار  |  **اللّهُـمَّ عافِـني في بَدَنـي ، اللّهُـمَّ عافِـني في سَمْـعي ، اللّهُـمَّ عافِـني في بَصَـري ، لا إلهَ إلاّ أَنْـتَ.',
	    '**‏اذكار  |  **سُبْحـانَ اللهِ وَبِحَمْـدِهِ عَدَدَ خَلْـقِه ، وَرِضـا نَفْسِـه ، وَزِنَـةَ عَـرْشِـه ، وَمِـدادَ كَلِمـاتِـه. ',
	    '**‏اذكار  |  **اللّهُـمَّ بِكَ أَصْـبَحْنا وَبِكَ أَمْسَـينا ، وَبِكَ نَحْـيا وَبِكَ نَمُـوتُ وَإِلَـيْكَ النُّـشُور.',
	    '**‏اذكار  |  **بِسـمِ اللهِ الذي لا يَضُـرُّ مَعَ اسمِـهِ شَيءٌ في الأرْضِ وَلا في السّمـاءِ وَهـوَ السّمـيعُ العَلـيم. ',
	    '**‏اذكار  |  **حَسْبِـيَ اللّهُ لا إلهَ إلاّ هُوَ عَلَـيهِ تَوَكَّـلتُ وَهُوَ رَبُّ العَرْشِ العَظـيم.',
	    '**اذكار  |  **اللّهُـمَّ ما أَصْبَـَحَ بي مِـنْ نِعْـمَةٍ أَو بِأَحَـدٍ مِـنْ خَلْـقِك ، فَمِـنْكَ وَحْـدَكَ لا شريكَ لَـك ، فَلَـكَ الْحَمْـدُ وَلَـكَ الشُّكْـر.',
	    '**‏اذكار  |  **اللّهُـمَّ إِنِّـي أَصْبَـحْتُ أُشْـهِدُك ، وَأُشْـهِدُ حَمَلَـةَ عَـرْشِـك ، وَمَلَائِكَتَكَ ، وَجَمـيعَ خَلْـقِك ، أَنَّـكَ أَنْـتَ اللهُ لا إلهَ إلاّ أَنْـتَ وَحْـدَكَ لا شَريكَ لَـك ، وَأَنَّ ُ مُحَمّـداً عَبْـدُكَ وَرَسـولُـك',
	    '**‏اذكار  |  **رَضيـتُ بِاللهِ رَبَّـاً وَبِالإسْلامِ ديـناً وَبِمُحَـمَّدٍ صلى ��لله عليه وسلم نَبِيّـاً',
	    '**‏اذكار  |  **اللهم إني أعوذ بك من العجز، والكسل، والجبن، والبخل، والهرم، وعذاب القبر، اللهم آت نفسي تقواها، وزكها أنت خير من زكاها. أنت وليها ومولاها. اللهم إني أعوذ بك من علم لا ينفع، ومن قلب لا يخشع، ومن نفس لا تشبع، ومن دعوة لا يستجاب لها',
	    '**‏اذكار  |  **اللهم إني أعوذ بك من شر ما عملت، ومن شر ما لم أعمل',
	    '**‏اذكار  |  **اللهم مصرف القلوب صرف قلوبنا على طاعتك',
	  ]
	  client.on('message', message => {
	  if (message.author.bot) return;
	  if (message.content.startsWith(prefix + 'اذكار')) {
	    if(!message.channel.guild) return;
	  var client= new Discord.RichEmbed()
	  .setTitle("Games")
	  .setThumbnail(message.author.avatarURL)
	  .setColor('RANDOM')
	  .setDescription(`${adkar[Math.floor(Math.random() * adkar.length)]}`)
	                 .setTimestamp()
	  message.channel.sendEmbed(client);
	  message.react("??")
	  }
	  });
	/////////////////////////////////////////////-////////////////////////////////////nokat
	client.on('message', message => {
	var prefix = "!";
	var cats = ["http://palestine-kitchen.ps/wp-content/uploads/2017/12/%D9%86%D9%83%D8%AA-%D8%AF%D8%A8%D8%A7%D9%86%D8%A9.png","http://www.i7lm.com/wp-content/uploads/2017/04/136769797816.jpg","https://4.bp.blogspot.com/-p62zmDIDXmI/WKzqNt9smaI/AAAAAAAAC4Q/sW_bSIB8OaQhwOYFeplc3uzz8PBN7l3YACEw/s1600/13602501135.jpg","https://www.universemagic.com/images/2016/03/7938-2-or-1457539273.jpg","https://1.bp.blogspot.com/-yFk-FzHSyE8/WR9fmPcsCUI/AAAAAAAAE6c/AmvjLadOiLY9GiCqMLHgA121bY2RS_dCwCLcB/s1600/%25D9%2586%25D9%2583%25D8%25AA%2B%25D9%2585%25D8%25B6%25D8%25AD%25D9%2583%25D8%25A9%2B1.jpg","https://l7zaat.com/wp-content/uploads/2018/02/423.jpg","https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg","https://i.fatafeat.com/storage/attachments/15/image3_698123_large.jpg","http://www.shuuf.com/shof/uploads/2018/02/08/jpg/shof_97d686082bdb0a2.jpg"];
	        var args = message.content.split(" ").slice(1);
	    if(message.content.startsWith(prefix + 'نكت')) {
	         var cat = new Discord.RichEmbed()
	.setImage(cats[Math.floor(Math.random() * cats.length)])
	message.channel.sendEmbed(cat);
	    }
	});
	//////////contact
	client.on('message' , message => {
	var prefix = "!"
	
	if (message.author.bot) return;
	if (message.content.startsWith(prefix + "contact")) {
	if (!message.channel.guild) return;
	
	
	
	let args = message.content.split(" ").slice(1).join(" ");
	
	
	
	client.users.get("521479557375852547").send(
	    "\n" + "**" + "● السيرفر :" + "**" +
	    "\n" + "**" + "» " + message.guild.name + "**" +
	    "\n" + "**" + " ● المرسل : " + "**" +
	    "\n" + "**" + "» " + message.author.tag + "**" +
	    "\n" + "**" + " ● الرسالة : " + "**" +
	    "\n" + "**" + args + "**")
	
	let embed = new Discord.RichEmbed()
	     .setAuthor(message.author.username, message.author.avatarURL)
	     .setDescription(':mailbox_with_mail: تم ارسال الرسالة الى صاحب البوت بنجاح')
	     .setThumbnail(message.author.avatarURL)
	     .setFooter("By : Jacob")
	                                                
	
	message.channel.send(embed);
	
	
	}
	    
	});
	/////////////////Aktr7at 
	client.on('message', async message => {
	  if (message.author.bot) return;
	    if(!message.channel.guild) return;
	 let args = message.content.split(' ').slice(1).join(' ');
	  if(message.content.startsWith(prefix + "sug")) {
	  await  message.channel.send(`🔔 **| اكتب اقتراحك **`)
	    message.delete(10000);
	    let filter = m => m.author.id === message.author.id
	      var text = '';
	        let sugsa = message.channel.awaitMessages(filter, { max: 1, time: 60000})
	          .then(co => {
	            text = co.first().content
	              message.channel.send(`✅ **| تم حفظ اقتراحك **`)
	    message.delete(10000);
	            let embed = new Discord.RichEmbed()
	
	       .setColor('RANDOM')
	       .setThumbnail('https://images-ext-2.discordapp.net/external/cfiQPI-jiFWEr1dTyHZeT4l5ZSegPifQZSSOYusKSyo/https/cdn2.iconfinder.com/data/icons/basic-flat-icon-set/128/letter-256.png')
	       .setTitle('')
	       .addField('**» Guild :**', message.guild.name)
	       .addField('**» المرسل :**', message.author.username)
	       .addField('» اقتراحي :', text)
	       .setTimestamp()
	       .setFooter(message.author.username, message.author.avatarURL)
	
	              client.channels.find('name', 'Suggestions').send({embed})
	       .setFooter(message.author.username, message.author.avatarURL)
	   message.channel.sendMessage({embed});
	              })
	            }
	          })
	
	/////////////////////////////
	
	
	/////////////////////////
	client.on('message', function(message) {
	    if(message.content.startsWith(prefix + 'roll')) {
	        let args = message.content.split(" ").slice(1);
	        if (!args[0]) {
	            message.channel.send('**حط رقم معين يتم السحب منه**');
	            return;
	            }
	    message.channel.send(Math.floor(Math.random() * args.join(' ')));
	            if (!args[0]) {
	          message.edit('1')
	          return;
	        }
	    }
	});
	//////////////
	var Himo_04 = ["https://f.top4top.net/p_682it2tg6.png","https://e.top4top.net/p_682a1cus5.png","https://d.top4top.net/p_682pycol4.png","https://c.top4top.net/p_682vqehy3.png","https://b.top4top.net/p_682mlf9d2.png","https://a.top4top.net/p_6827dule1.png","https://b.top4top.net/p_682g1meb10.png","https://a.top4top.net/p_682jgp4v9.png","https://f.top4top.net/p_682d4joq8.png","https://e.top4top.net/p_6828o0e47.png","https://d.top4top.net/p_6824x7sy6.png","https://c.top4top.net/p_682gzo2l5.png","https://b.top4top.net/p_68295qg04.png","https://a.top4top.net/p_682zrz6h3.png","https://f.top4top.net/p_6828vkzc2.png","https://e.top4top.net/p_682i8tb11.png","https://f.top4top.net/p_8816hvic1.png","https://d.top4top.net/p_882020461.png","https://e.top4top.net/p_882s3ftn1.png","https://a.top4top.net/p_882eg9c51.png","https://c.top4top.net/p_882xkcqd1.png","https://f.top4top.net/p_882w7pdi1.png","https://a.top4top.net/p_882gcpmo1.png"]
	    client.on('message', message => {
	        var args = message.content.split(" ").slice(1);
	    if(message.content.startsWith(prefix + 'لو خيروك')) {
	         var cat = new Discord.RichEmbed()
	.setImage(Himo_04[Math.floor(Math.random() * Himo_04.length)])
	message.channel.sendEmbed(cat);
	    }
	});
	 /////////wlc 
	
	
	
	/////////////
	const zead = [
	   '*** انا اسمي مريم ***',
	   '*** مرحباَ ماهو اسمك ؟ ***',
	   `*** اهلا بك ! انا تائهه في هذا المكان  ***`,
	   '*** هل تود مساعدتي ؟ ***',
	   '*** لماذا هل انت قاسي القلب ؟ ***',
	   '*** انني اشفق عليك يجب ان تطهر روحك وتحب الخير للجميع ***',
	   '*** ابتعد عني قليل انني متعبة ***',
		 '*** هل انت نادم على ماقلت ؟ ***',
	   '*** هل تود مساعدتي ؟ ***',
	   '*** واو اشكرك انك شخصاَ رائع ! ***',
	   '*** ابحث معي عن منزلي لقد كان قريباَ من هنا ***',
	   '*** ولاكن عندما حل الليل لم اعد ارى اي شيء ***',
	   '*** مذا تظن اين يوجد ؟ يمين او يسار ***',
	   '*** هيا اذاَ ***',
	   '*** اود ان اسئلك سؤال ونحن في الطريق ***',
	   '*** هل تراني فتاة لطيفة ام مخيفة ***',
	   '*** اشكرك !  ***',
	   '*** لقد وصلنا الى المنزل شكراَ جزيلَ انتطرني ثواني وسوف اعود ***',
	   '*** هل انت جاهز ؟ ***',
	   '*** لقد اخبرت والدي عنك وهم متحمسين لرؤيتك ***',
	   '*** هل تود ان تراهم الان ***',
	'*** انا لست الحوت الازرق كما يدعون ***',
	   '*** انا لست كاذبة صدقني***',
	   '*** لماذا ارى في عينيك الخوف ؟ ***',
	   '*** انا مجرد فتاة لطيفة تحب اللعب مع الجميع ***',
	   '*** اعرف كل شيء يحدث اسمع ذالك بالراديو ***',
	   '*** سمعت ان البشر يقتلون من اجل المال فقط ***',
	   '*** لماذا لم تدخل الغرفة ؟ ***',
	   '*** ههههههههههههههههههه انت الان مسجون في هذه الغرفة ***',
	   '*** لن تخرج حتى اعود لك بعد قليل ***',
	   '*** المفتاح معك ! اكتب .مريم  ***',
	   '*** مفتاح احمر , هل حصلت عليه ؟ ***',
	   '*** ان لم تحصل عليه , اكتب .مريم مرة اخرى ***',
	   '*** مفتاح اسود . هل حصلت عليه ؟ ***',
	   '*** اين تريد ان تختبئ بسرعة قبل ان تعود ***',
	   '*** لقد عادت من جديد الى المنزل ***',
	   '*** لا تصدر اي صوت ! ***',
	   '*** مريم : لقد عدت ***',
	   '*** مريم : يا ايها المخادع اين انت ***',
	   '*** مريم : اعلم انك هنا في المنزل ***',
	   '*** مريم : ماذا تريد ان تسمع ***',
	   '*** احد ما خرج من المنزل ***',
	   '*** انتظر الجزء الثاني عندما يوصل البوت 100 سيرفر , ساعدني في نشر البوت وادخل هذا السيرفر  ***'
	];
	 client.on('message', message => {
	 if (message.content.startsWith('!مريم')) {
	  var mariam= new Discord.RichEmbed()
	  .setTitle("لعبة مريم ..")
	  .setColor('RANDOM')
	  .setDescription(`${zead[Math.floor(Math.random() * zead.length)]}`)
	  .setImage("https://www.npa-ar.com/wp-content/uploads/2017/08/%D9%84%D8%B9%D8%A8%D8%A9-%D9%85%D8%B1%D9%8A%D9%85-300x200.jpg")
	   message.channel.sendEmbed(mariam);
	  }
	});
	/////////////--------------------------//////
	
	///////////////
	var EpicEdiTeD = {};
	client.on("message", function(message){
	if (message.content.startsWith(prefix + "rank")) {
	    if (!EpicEdiTeD[message.author.id]) {
	        EpicEdiTeD[message.author.id] = {Money:0,Xp:0,Level:0}
	    }
	     var mentionned = message.mentions.users.first();
	 
	      var epic;
	      if(mentionned){
	          var epic = mentionned;
	      } else {
	          var epic = message.author;
	 
	      }
	 
	   
	    var CulLevel = Math.floor(0.25 * Math.sqrt(EpicEdiTeD[message.author.id].Xp +1));
	    if (CulLevel > EpicEdiTeD[message.author.id].Level) {EpicEdiTeD[message.author.id].Level +=CulLevel}
	    let edited = new Discord.RichEmbed()
	    .setColor("Random")
	    .addField("Nâmè :↙", message.author.tag)
	    .addField("Lèvèl↙ :", EpicEdiTeD[message.author.id].Level)
	    .addField("Xp :↙",Math.floor(EpicEdiTeD[message.author.id].Xp))
	    message.channel.send(edited);
	}
	if (!EpicEdiTeD[message.author.id]) {
	    EpicEdiTeD[message.author.id] = {Money:0,Xp:0,Level:0,Like:0}
	    }
	 
	EpicEdiTeD[message.author.id].Xp+= 0.25;
	EpicEdiTeD[message.author.id].Money+= 0.25;
	 
	});
	////////////////////////
	client.on('message' , async message => {
	            if(message.content.startsWith(prefix + "auto")) {
	     await message.channel.send("`ارسال الرساله .`").then(e => {
	    let filter = m => m.author.id === message.author.id
	    let tests = '';
	    let time = '';
	    let channel = '';
	    let chaTests = message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
	    .then(collected => {
	      tests = collected.first().content
	      collected.first().delete()
	e.edit("`تكرار الرساله كل ....... دقائق`")
	let chaTime = message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
	.then(co => {
	if(isNaN(co.first().content)) return message.reply("`الوقت بالدقائق ! ارقام فقطٍ`");
	if(co.first().content > 1500 || co.first().content < 1) return message.channel.send("`لا اقل من دقيقه ولا اكثر من يوم`")
	  time = co.first().content
	co.first().delete()
	  e.edit("`ادخل اسم الروم`")
	  let chaChannel = message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
	.then(col => {
	  channel = col.first().content
	col.first().delete()
	  e.edit("`جاري اعداد المعلومات الرجاء الانتظاار...`").then(b => {
	              setTimeout(() => {
	    b.edit(`** تم اعداد المعلومات بنجاح .**`)
	        },2000);
	  })
	  var room = message.guild.channels.find('name' , channel)
	  if(!room) return;
	  if (room) {
	setInterval(() => {
	room.send(tests);
	}, time*60000)
	  }
	})
	})
	})
	        
	})
	}
	});
	
	///////////////////
	
	
	////////////////Short
	
	
	
	
	
	
	
	
	////////////------------------------------------------------------//////Help test
	 
	
	
	////////////////set Count
	client.on('message',async message => {
	    if(message.content.startsWith(prefix + "setCount")) {
	    if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
	    if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات ال��افية**');
	    message.channel.send('✅| **تم عمل الروم بنجاح**');
	    message.guild.createChannel(`Members Count : [ ${message.guild.members.size} ]` , 'voice').then(c => {
	      console.log(`Count Members channel setup for guild: \n ${message.guild.name}`);
	      c.overwritePermissions(message.guild.id, {
	        CONNECT: false,
	        SPEAK: false
	      });
	      setInterval(function() {
	        c.setName(`Members Count :  ${message.guild.members.size} `)
	      },1000);
	    });
	    }
	  });
	
	//////////////////////////////////////////////////Join in Voice 
	
	client.on('message', message => {
	         if (message.content === "!Build R") {
			       if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.reply("**يحتاج البوت الى خاصية` MANAGE_CHANNELS ` **").then(msg => msg.delete(6000))
	
	                       if(!message.channel.guild) return message.reply('** This command only for servers **');
		                         if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**أنت ليس لديك برمشن** `ADMINISTRATOR`' );
		const embed = new Discord.RichEmbed()
			.setDescription('** __:ok_hand: running...to make Channels | يتم الأن عمل الرومات الصويتة والكتابية__ **')
			.setColor('RANDOM')
			.setFooter("**GAMING BOT **")
		message.channel.sendEmbed(embed);
	
	message.guild.createChannel('Info', 'text');
	message.guild.createChannel('Welcome', 'text');
	message.guild.createChannel('Chat', 'text');
	message.guild.createChannel('bot', 'text');
	message.guild.createChannel('bo7', 'text');
	message.guild.createChannel('pic', 'text');
	message.guild.createChannel('cut', 'text');
	message.guild.createChannel('log', 'text');
	message.guild.createChannel('admin-chat', 'text');
	message.guild.createChannel('▓▬▬▬ADMNS▬▬▬▓', 'voice');
	message.guild.createChannel('Owner - مالك السيرفر', 'voice');
	message.guild.createChannel('Co Owner - نائب الرئيس', 'voice');
	message.guild.createChannel('Dev - مبرمج السيرفر', 'voice');
	message.guild.createChannel('Admin - مشرف', 'voice');
	message.guild.createChannel('Mod - مود', 'voice');
	message.guild.createChannel('▓▬▬▬Other▬▬▬▓', 'voice');
	message.guild.createChannel('[ R E C ] 🎥', 'voice');
	message.guild.createChannel('YouTubers - يوتيوبرز', 'voice');
	message.guild.createChannel('VIP + - كبار الشخصيات بلس', 'voice');
	message.guild.createChannel('VIP - كبار الشخصيات', 'voice');
	message.guild.createChannel('Friends - اصدقاء', 'voice');
	message.guild.createChannel('▓▬▬▬WEL▬▬▬▓', 'voice');
	message.guild.createChannel('Help - مساعدة', 'voice');
	message.guild.createChannel('Ξ〖 اقـتـراحـاتـكمـ 💡 〗', 'voice');
	message.guild.createChannel('▓▬▬▬♚▬▬▬▓', 'voice');
	message.guild.createChannel('♧ Ξ〖 🎤  سواليف 📣  〗', 'voice');
	message.guild.createChannel('♢ Ξ〖 🎤 مواهب 🎵  〗', 'voice');
	message.guild.createChannel('❋ Ξ〖 🎈فعاليات 🏅 〗', 'voice');
	message.guild.createChannel('❋ Ξ〖  🕋 القرآن الكريم  〗', 'voice');
	message.guild.createChannel('▓▬▬▬♛▬▬▬▓', 'voice');
	message.guild.createChannel('☆  Ξ〖 🔞  السجن العام 🔪 〗', 'voice');
	message.guild.createChannel('▓▬▬▬Games▬▬▬▓', 'voice');
	message.guild.createChannel('Clash of Clans | كلاش أوف كلانز', 'voice');
	message.guild.createChannel('Clash Royal | كلاش رويال', 'voice');
	message.guild.createChannel('Hajwala  Online | هجولة أون لاين', 'voice');
	message.guild.createChannel('Bullet force | بولت فورس', 'voice');
	message.guild.createChannel('MTA | ام تي اي', 'voice');
	message.guild.createChannel('Ludo Star | لودو ستار', 'voice');
	message.guild.createChannel('▓▬▬▬Private▬▬▬▓', 'voice');
	message.guild.createChannel('✿Tow✿', 'voice');
	message.guild.createChannel('✿Three✿', 'voice');
	message.guild.createChannel('✿Four✿', 'voice');
	message.guild.createChannel('✿Five✿', 'voice');
	message.guild.createChannel('✿Six✿', 'voice');
	message.guild.createChannel('▓▬▬▬AFK▬▬▬▓', 'voice');
	message.guild.createChannel('Away From keyboard AFK', 'voice');
	message.guild.createChannel('▓▬▬▬♚▬▬▬▓', 'voice');
	
	  console.log(`i make text channels in this server: ** ${message.guild.name} ** `)
	  
	}
	});
	client.on('message', message => {
		
		if (message.content === "!Build Rr") {
			      if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**يحتاج البوت الى خاصية` MANAGE_ROLES ` **").then(msg => msg.delete(6000))
	
		              if(!message.channel.guild) return message.reply('** This command only for servers **');
		                         if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**أنت ليس لديك برمشن** `ADMINISTRATOR`' );
			          const embed = new Discord.RichEmbed()
			.setDescription('** __:ok_hand: running...to make roles | يتم الأن عمل الرتب__ **')
			.setColor('RANDOM')
			.setFooter("** GAMING BOT  **")
		message.channel.sendEmbed(embed);
			   
	
	  message.guild.createRole({
	        name : "Owner",
	        permissions :   [1],
	        color : " #000000"
	    })
	    message.guild.createRole({
	        name : "Co-Owner",
	        permissions :   [1],
	        color : " #000000"
	    })
	      message.guild.createRole({
	        name : "Leader",
	        permissions :   [1],
	        color : " #EE82EE"
	    })
	    message.guild.createRole({
	        name : "Co-Leader",
	        permissions :   [1],
	        color : " #EE82EE"
	    })
	  
	     message.guild.createRole({
	        name : "Admin",
	        permissions :   [1],
	        color : " #8A2BE2"
	    })
	    
	     message.guild.createRole({
	        name : "GAMING",
	        permissions :   [1],
	        color : " #RANDOM"
	    })
	    
	
	  
	    message.guild.createRole({
	        name : "Mod",
	        permissions :   [1],
	        color : " #8A2BE2"
	    })
	    message.guild.createRole({
	        name : "ＶＩＰ + ",
	        permissions :   [1],
	        color : "  #7CFC00"
	    })
	    message.guild.createRole({
	        name : "ＶＩＰ",
	        permissions :   [1],
	        color : " #7CFC00"
	    })
	    message.guild.createRole({
	        name : "Support ",
	        permissions :   [1],
	        color : " #FFD700"
	    })
	
	  message.guild.createRole({
	        name : "YouTuber+200",
	        permissions :   [1],
	        color : " #8B0000"
	    })
	   
	    message.guild.createRole({
	        name : "YouTuber",
	        permissions :   [1],
	        color : " #FF0000"
	    })
	    
	      message.guild.createRole({
	        name : "Pro Member☤",
	        permissions :   [1],
	        color : " #ffffff"
	    })
	    
	          message.guild.createRole({
	        name : "🌹「Friendly」",
	        permissions :   [1],
	        color : " #9932CC"
	    })
	  
	 
	    message.guild.createRole({
	        name : "☤Member☤",
	        permissions :   [1],
	        color : " #ffffff"
	    })
	    
	        message.guild.createRole({
	        name : "Bot",
	        permissions :   [1],
	        color : " #ffffff"
	    })
	    
	    message.guild.createRole({
	        name : "CrossFire",
	        permissions :   [1],
	        color : " #ffffff"
	    })     
	  
	    message.guild.createRole({
	        name : "PUBG",
	        permissions :   [1],
	        color : " #ffffff"
	    })    
	   
	     message.guild.createRole({
	        name : "BlackSquad",
	        permissions :   [1],
	        color : " #ffffff"
	    })      
	  console.log(`i make rools in this server: ** ${message.guild.name} ** `);
	}
	});
	//////////////////////=---------------------------------------------------------------///////
	client.on('message', message => {
	     if (message.content === "!as") {
	 const embed = new Discord.RichEmbed()
	.setTitle(` ** 「:recycle:  | Auto Responding」**`)
	                
	.addField("`!asadd`",
	`  To Add A AS Command  
	لاضافة امر رد تلقائي 
	!asadd back Welcome`)
	
	.addField("`!asedit`",
	`   To Edit A AS exists Command  
	للتعديل على امر موجود مسبقا .
	-asedit back Wlc`)
	
	.addField("`!asdelete`",
	`  To Delete A AS Command
	لمسح امر رد تلقائي.
	-asdelete back `)
	
	.addField("`!aslist`",
	`  To preview AS Commands List  
	لعرض قائمة اوامر الردود التلقائية.`)
	
	.setColor("ffffff")
	
	.setFooter(`GAMING BOT`)
	
	message.channel.sendEmbed(embed);
	}
	});
	//////////////////////////////////////////////////////////**-----------------
	client.on('message', message => {
	                                if(!message.channel.guild) return;
	                        if (message.content.startsWith('!ping')) {
	                            if(!message.channel.guild) return;
	                            var msg = `${Date.now() - message.createdTimestamp}`
	                            var api = `${Math.round(client.ping)}`
	                            if (message.author.bot) return;
	                        const embed = new Discord.RichEmbed()
	                        .setAuthor(message.author.username,message.author.avatarURL)
	                        .setThumbnail('https://cdn.discordapp.com/avatars/368141321547808768/c42716e13cb850f9ad0930af699472d0.png?size=2048nk')
	                        .setColor('ffffff')
	                        .addField('**Time Taken:**',msg + " ms")
	                        .addField('**WebSocket:**',api + " ms")
	         message.channel.send({embed:embed});
	                        }
	                    });
	/////////////////////////////////////////////////////////////////////////////////////////
	client.on('message', message => {
	    if(message.content.startsWith("!google")) {
	        if(!message.channel.guild) return message.reply('** This command only for servers **');
	   		const args = message.content.split(' ').slice(1);
					let query = args;
					message.channel.send({embed: {
						color: 3447003,
						title: "Your Search",
						url: `https://www.google.com/search?q=${query}`,
						description: "Look at your Search Query via Google.",
						timestamp: new Date(),
						footer: {
							icon_url: client.user.avatarURL,
							text: "GAMING BOT  by Google"
						},
					}});
					
	    }
	});
	///////////////////////////////////////////
	//╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮
	//╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱┃┃
	//╭━━┳╮╭┳━┳━━┳━╮╱╭━━┳╮╭┳━╮╭━╯┃
	//┃╭╮┃┃┃┃╭┫╭╮┃╭╮╮┃╭━┫╰╯┃╭╮┫╭╮┃
	//┃╰╯┃╰╯┃┃┃╭╮┃┃┃┃┃╰━┫┃┃┃┃┃┃╰╯┃
	//╰━╮┣━━┻╯╰╯╰┻╯╰╯╰━━┻┻┻┻╯╰┻━━╯
	//╱╱┃┃
	//╱╱╰╯
	
	
	/////////////////////////////////----------------------------------------ID--------------/////////
	client.on('message', message => {
	   if (message.content.startsWith ("!Id")) {
	       if(!message.channel.guild) return message.reply('** This command only for servers **');
	
	               var mentionned = message.mentions.users.first();
	    var mentionavatar;
	      if(mentionned){
	          var mentionavatar = mentionned;
	      } else {
	          var mentionavatar = message.author;
	          
	      }
	      message.guild.fetchInvites()
	       .then(invites =>{
	 if(!invites.find(invite => invite.inviter.id === `${mentionavatar.id}`)) {
	     let embed = new Discord.RichEmbed()
	  .setColor(0xd3d0c4)
	   .setThumbnail(`${mentionavatar.avatarURL}`)
	  .addField("Name:",`<@` + `${mentionavatar.id}` + `>`, true)
	  .addField('Discrim:',"#" +  `${mentionavatar.discriminator}`, true)
	   .addField("ID:", "**" + `${mentionavatar.id}` + "**", true)
	  .addField("Create At:", "**" + `${mentionavatar.createdAt}` + "**", true)
	  .addField("Invites:", `**0**` ,true)
	     .setFooter(`GAMING BOT  `)
	      message.channel.sendEmbed(embed);
	 }else{
	   let embed = new Discord.RichEmbed()
	  .setColor(0xd3d0c4)
	   .setThumbnail(`${mentionavatar.avatarURL}`)
	  .addField("Name:",`<@` + `${mentionavatar.id}` + `>`, true)
	  .addField('Discrim:',"#" +  `${mentionavatar.discriminator}`, true)
	   .addField("ID:", "**" + `${mentionavatar.id}` + "**", true)
	  .addField("Create At:", "**" + `${mentionavatar.createdAt}` + "**", true)
	
	  .addField("Invites:", `**${invites.find(invite => invite.inviter.id === `${mentionavatar.id}`).uses}**` ,true)
	    .setFooter(`GAMING BOT `)
	
	  message.channel.sendEmbed(embed);
	 }
	 
	       })
	    }
	});
	
	////////////////////////////////////////----------------/////////////////////Member info 
	client.on('message', message => {
	    if(message.content == '!members') {
	    const embed = new Discord.RichEmbed()
	    .setDescription(`**Members info🔋
	:green_heart: online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
	:heart:dnd:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
	:yellow_heart: idle:      ${message.guild.members.filter(m=>m.presence.status == 'idle').size}   
	:black_heart: offline:   ${message.guild.members.filter(m=>m.presence.status == 'offline').size} 
	:blue_heart:   all:  ${message.guild.memberCount}**`)         
	             .setColor(0xd3d0c4)
	            .setFooter(`GAMING BOT  `)
	         message.channel.send({embed});
	
	    }
	  });
	///////////////////////////////////////////////-----------------------------------------Stats
	//╱╱╱╭╮╱╱╱╭╮╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮
	//╱╱╭╯╰╮╱╭╯╰╮╱╱╱╱╱╱╱╱╱╱╱╱╱╱┃┃
	//╭━┻╮╭╋━┻╮╭╋━━╮╭━━┳╮╭┳━╮╭━╯┃
	//┃━━┫┃┃╭╮┃┃┃━━┫┃╭━┫╰╯┃╭╮┫╭╮┃
	//┣━━┃╰┫╭╮┃╰╋━━┃┃╰━┫┃┃┃┃┃┃╰╯┃
	//╰━━┻━┻╯╰┻━┻━━╯╰━━┻┻┻┻╯╰┻━━╯
	
	
	client.on('message', message => {
	    if (message.content.startsWith("!stats")) {
	    message.channel.send({
	        embed: new Discord.RichEmbed()
	            .setColor('ffffff')
	            .setTitle('**GAMING  Stats** ')
	            .addField('``Uptime``', timeCon(process.uptime()), true)
	            .addField('``Ping Is``' , `${Date.now() - message.createdTimestamp}` + '``Ms``', true)
	            .addField('``RAM Usage``', `${(process.memoryUsage().rss / 1048576).toFixed()}MB`, true)
	            .addField('``Guild Count``', client.guilds.size, true)
	            .addField('``Bot In channel``' , `${client.channels.size}` , true)
	            .addField('``Users rout``' ,`${client.users.size}` , true)
	            .addField('``Name Bot Or tag``' , `${client.user.tag}` , true)
	            .addField('``Bot Id``' , `${client.user.id}` , true)
	           .setThumbnail(client.avatarURL)
	            .setFooter('GAMING BOT')
	          
	    })
	}
	});
	
	
	function timeCon(time) {
	    let days = Math.floor(time % 31536000 / 86400)
	    let hours = Math.floor(time % 31536000 % 86400 / 3600)
	    let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
	    let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
	    days = days > 9 ? days : '0' + days
	    hours = hours > 9 ? hours : '0' + hours
	    minutes = minutes > 9 ? minutes : '0' + minutes
	    seconds = seconds > 9 ? seconds : '0' + seconds
	    return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
	}
	
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭━╮╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮
	//╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱┃╭���╱╱╱╱╱╱╱╱╱╱╱╱╱╱┃┃
	//╭━━┳━━┳━┳╮╭┳━━┳━┳┳━┳╯╰┳━━╮╭━━┳╮╭┳━╮╭━╯┃
	//┃━━┫┃━┫╭┫╰╯┃┃━┫╭╋┫╭╋╮╭┫╭╮┃┃╭━┫╰╯┃╭╮┫╭╮┃
	//┣━━┃┃━┫┃╰╮╭┫┃━┫┃┃┃┃┃┃┃┃╰╯┃┃╰━┫┃┃┃┃┃┃╰╯┃
	//╰━━┻━━┻╯╱╰╯╰━━┻╯╰┻╯╰┻╯╰━━╯╰━━┻┻┻┻╯╰┻━━╯
	
	
	  client.on('message', message => {
	    if (message.content === "!SERVER") {
	        if (!message.channel.guild) return
	        var verificationLevel = message.guild.verificationLevel;
	        const verificationLevels = ['None','Low','Meduim','High','Extreme'];
	        var Y1 = message.guild.createdAt.getFullYear() - 2000
	        var M2 = message.guild.createdAt.getMonth()
	        var D3 = message.guild.createdAt.getDate()
	        const xNiTRoZ = new Discord.RichEmbed()
	         .setAuthor(message.author.username , message.author.avatarURL)
	         .setColor('ffffff')
	         .setTimestamp()
	         .setTitle(message.guild.name,message.guild.iconURL)
	         .addField(':id:   Server Id :',`${message.guild.id}`,true)
	         .addField(':date: Create Date: ',D3 + '.' + M2 + '.' + Y1,true)             
	         .addField(':crown: Server Owner:',`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)             
	         .addField(':busts_in_silhouette: Members : ' + ` ${message.guild.memberCount} `,'Online '+`[ ${message.guild.members.filter(m=>m.presence.status == 'online','idle','dnd').size} ]`+ ','+'Offline '+`[ ${message.guild.members.filter(m=>m.presence.status == 'offline').size} ]`,true)
	         .addField(':speech_balloon: Channels:' +' '+message.guild.channels.size+' ',`Text [ ${message.guild.channels.filter(m => m.type === 'text').size} ]`+', '+`Voice [ ${message.guild.channels.filter(m => m.type === 'voice').size} ]`,true)
	         .addField(':earth_asia: Region:',message.guild.region)
	         .addField(':ribbon: Server Emojis :',`${message.guild.emojis.size}`,true)
	         .addField(':construction: VerificationLevel:',`${verificationLevels[message.guild.verificationLevel]}`,true)
	         .addField(':closed_lock_with_key: Roles Count : '+message.guild.roles.size+' ','Type`!id ` To See The Server Roles!')
	         message.channel.send({embed:xNiTRoZ});
	     }
	    });
	
	
	////////////////////////////////////////---------------------------------------------------///////////////el Tok
	
	
	client.on('message', message => {
	if(message.content.startsWith('!discrim') ) {
	     if(!message.channel.guild) return message.reply('** This command only for servers **')
	     
	          var args = message.content.split(" ").slice(1);
	    let sent = 0
		let count = 1;
		
	      if(args){
	client.users.filter(u => u.discriminator == args[0]).forEach(u => {
	    if(sent > 4){
	     return
	    }
	    sent = sent + 1
	      message.channel.send(`
	      ** ${count}➥ ${u.tag}**
	         
	      `)
	      count++;
	   
	      })
	      } 
	      
	}
	
	if(message.content ===('!discrim') ) {
	     if(!message.channel.guild) return message.reply('** This command only for servers **')
	  let sent = 0
		let count = 1;
	          
	
	client.users.filter(u => u.discriminator == message.author.discriminator).forEach(u => {
	    if(sent > 4){
	        return
	    }
	    sent = sent + 1
	      message.channel.send(`
	      ** ${count}➥ ${u.tag}**
	         
	      `)
	      count++;
	   
	      })
	          
	      }
	
	 
	});
	
	///////////////////////////////////// ch ac1
	client.on("message", message => {
	if (message.content === ("!Ch ac1")) {
	let channel = message.client.channels.find('name', "member");
	let muteRole = client.guilds.get(message.guild.id).channels.find('name', 'member');
	if (!muteRole) return message.reply("** قم بإنشآء الرومات اولا عن طريق الامر Ch **").catch(console.error);
	if(!message.channel.guild) return message.reply('**Commands in the server**');
	if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**أنت ليس لديك برمشن** `ADMINISTRATOR`' );
	channel.edit({name : `memberCount「${message.guild.memberCount}」`});
	message.channel.sendMessage("تم تفعيل الروم بنجاح")
	      
	  }
	});
	//////--------------------//////////////deletech
	client.on("message", (message) => {
	    if (message.content.startsWith('!deletech')) {
	  if (!message.member.hasPermission('MANAGE_CHANNELS')) return  message.reply("أنت ليس لديك برمشن  `MANAGE_CHANNELS`  ");
	        let args = message.content.split(' ');
	        message.channel.setTopic(args);
	        message.channel.sendMessage('تم حذف الروم بنجاح');
	    }
	});
	
	//////////////////////////////Create room hour we Date we Member
	client.on("message", (message) => {
	if (message.content === ("!Ch")) {
	if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send("**أنت ليس لديك برمشن** `ADMINISTRATOR`" );
		      if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.reply("**يحتاج البوت الى خاصية` MANAGE_CHANNELS ` **").then(msg => msg.delete(6000))
	
	    message.guild.createChannel('hour', 'voice');
	    message.guild.createChannel('date', 'voice');
	    message.guild.createChannel('member', 'voice');
	message.channel.sendMessage('**تم إنشاء روم ساعة :small_orange_diamond:**');
	message.channel.sendMessage('**تم إنشاء روم تاريخ :small_orange_diamond:**');
	message.channel.sendMessage('**تم إنشاء روم عداد الأعضآء :small_orange_diamond:**');
	message.reply ("لتفعيل الرومات اكتب `!Ch ac`");  
	}
	});
	///////////////////////
	
	
	//╱╱╭╮╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮
	//╱╱┃┃╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱┃┃
	//╭━╯┣━┳━━┳╮╭╮╭╮╭━━┳╮╭┳━╮╭━╯┣━━╮
	//┃╭╮┃╭┫╭╮┃╰╯╰╯┃┃╭━┫╰╯┃╭╮┫╭╮┃━━┫
	//┃╰╯┃┃┃╭╮┣╮╭╮╭╯┃╰━┫┃┃┃┃┃┃╰╯┣━━┃
	//╰━━┻╯╰╯╰╯╰╯╰╯╱╰━━┻┻┻┻╯╰┻━━┻━━╯
	
	
	
	client.on('message', message => {
	    var prefix = "!"
	    let command = message.content.split(" ")[0];
	  command = command.slice(prefix.length);
	
	  let args = message.content.split(" ").slice(1);
	
	
	if(command == "draw") {
	     if(message.channel.type === "dm") return;
	    var Canvas = require('canvas')
	  , Image = new Canvas.Image
	  , canvas = new Canvas(450, 170)
	  , ctx = canvas.getContext('2d');
	  ctx.font = '30px Impact';
	  let args = message.content.split(" ").slice(1);
	  
	Image.src = canvas.toBuffer();
	
	    console.log(Image);
	ctx.drawImage(Image, 0, 0, Image.width / 470, Image.height / 170);
	ctx.fillText(args.join("  "),110, 70);
	
	
	ctx.beginPath();
	ctx.lineTo(50, 102);
	ctx.stroke();
	
	message.channel.sendFile(canvas.toBuffer());
	}
	});
	
	
	// /////////////////////////////////////////////////////////////////////
	const dot = new Discord.Client();
	client.on('message', message => {
	    
	    if (message.content === "GAMING BOT") {
	        setInterval(function(){
	        message.edit('**G**')    
	        message.edit('**GA**')    
	        message.edit('**GAM**')
	        message.edit('**GAMI**')
	        message.edit('**GAMIN**')
	        message.edit('**GAMING**')
	        message.edit('**GAMING B*')
	        message.edit('**GAMING BO**')
	        message.edit('**GAMING BOT **')
	        message.edit('**GAMING BOT**')
	        message.edit('**GAMING BO**')
	        message.edit('**GAMING BOT**')
	        message.edit('**GAMING BOT **')
	        message.edit('**GAMING BOT ..**')
	        }, 1000)
	    }
	    
	})
	////////////////////////////////////
	
	const developers = ["521479557375852547"]
	client.on('message', message => {
	    var argresult = message.content.split(` `).slice(1).join(' ');
	      if (!developers.includes(message.author.id)) return;
	      
	  if (message.content.startsWith(adminprefix + 'ply')) {
	    client.user.setGame(argresult);
	      message.channel.send(`**Done.   ${argresult}**`)
	  } else 
	     if (message.content === (adminprefix + "leave")) {
	    message.guild.leave();        
	  } else  
	  if (message.content.startsWith(adminprefix + 'wt')) {
	  client.user.setActivity(argresult, {type:'WATCHING'});
	      message.channel.send(`**Done.   ${argresult}**`)
	  } else 
	  if (message.content.startsWith(adminprefix + 'ls')) {
	  client.user.setActivity(argresult , {type:'LISTENING'});
	      message.channel.send(`**Done.   ${argresult}**`)
	  } else 
	  if (message.content.startsWith(adminprefix + 'st')) {
	    client.user.setGame(argresult, "https://www.twitch.tv/idk");
	      message.channel.send(`**Done.**`)
	  }
	  if (message.content.startsWith(adminprefix + 'setname')) {
	  client.user.setUsername(argresult).then
	      message.channel.send(`Changing The Name To ..**${argresult}** `)
	} else
	if (message.content.startsWith(adminprefix + 'setavatar')) {
	  client.user.setAvatar(argresult);
	    message.channel.send(`Changing The Avatar To :**${argresult}** `);
	}
	});
	
	

	
	///////////////////////////////////////////
	
	
	
	///////////////////////////////welcome by swra 
	client.on('guildMemberAdd', member => {
     const welcomer =  member.guild.channels.find('name', 'NOoneusethisname');
    if(!welcomer) return;
      if(welcomer) {
         moment.locale('en-uk');
         var m = member.user;
        let yumz = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(m.avatarURL)
        .setAuthor(m.username,m.avatarURL)
        .addField(': joined discord on',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)            
      
         .setFooter(`${m.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
     welcomer.send({embed:yumz});          
         
const w = ['./img/w1.png'];

         let Image = Canvas.Image,
            canvas = new Canvas(400, 200),
            ctx = canvas.getContext('2d');
        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 400, 200);
             
          

                let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(100) + ".png" : member.user.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
                        
                        ctx.font = "bold 12px Arial";
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(`welcome to ${member.guild.name}`, 300, 130);
                        
                        ctx.font = "bold 12px Arial";
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(member.user.username, 200, 150);
 
                let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                              ctx.arc(77, 101, 62, 0, Math.PI*2);
                              ctx.stroke();
                                 ctx.clip();
                                 ctx.drawImage(ava, 13, 38, 128, 126);  
                          
                
                             
welcomer.sendFile(canvas.toBuffer())



      
      
                    }  )  
      
                    

})
      });                    
 }
});
	
	///////By:Mahmoud-QuaStyle
	
	client.on('message',async message => {
	    const moment = require('moment'); //npm i moment
	const ms = require('ms') //npm i ms
	    var prefix = '#' //Bot Prefix !
	  var time = moment().format('Do MMMM YYYY , hh:mm');
	  var room;
	  var title;
	  var duration;
	  var currentTime = new Date(),
	hours = currentTime.getHours() + 3 ,
	minutes = currentTime.getMinutes(),
	done = currentTime.getMinutes() + duration,
	seconds = currentTime.getSeconds();
	if (minutes < 10) {
	minutes = "0" + minutes;
	}
	var suffix = "AM";
	if (hours >= 12) {
	suffix = "PM";
	hours = hours - 12;
	}
	if (hours == 0) {
	hours = 12;
	}
	 
	  var filter = m => m.author.id === message.author.id;
	  if(message.content.startsWith(prefix + "gstart")) {
	 
	    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**');
	    message.channel.send(`:eight_pointed_black_star:| **Send Name channel For the Giveaway**`).then(msg => {
	      message.channel.awaitMessages(filter, {
	        max: 1,
	        time: 20000,
	        errors: ['time']
	      }).then(collected => {
	        let room = message.guild.channels.find('name' , collected.first().content);
	        if(!room) return message.channel.send(':heavy_multiplication_x:| **i Found It :(**');
	        room = collected.first().content;
	        collected.first().delete();
	        msg.edit(':eight_pointed_black_star:| **Time For The Giveaway**').then(msg => {
	          message.channel.awaitMessages(filter, {
	            max: 1,
	            time: 20000,
	            errors: ['time']
	          }).then(collected => {
	            if(!collected.first().content.match(/[1-60][s,m,h,d,w]/g)) return message.channel.send('**The Bot Not Support This Time**');
	            duration = collected.first().content
	            collected.first().delete();
	            msg.edit(':eight_pointed_black_star:| **Now send The Present **').then(msg => {
	              message.channel.awaitMessages(filter, {
	                max: 1,
	                time: 20000,
	                errors: ['time']
	              }).then(collected => {
	                title = collected.first().content;
	                collected.first().delete();
	                msg.delete();
	                message.delete();
	                try {
	                  let giveEmbed = new Discord.RichEmbed()
	                  .setDescription(`**${title}** \nReact With 🎉 To Enter! \nTime remaining : ${duration} \n **Created at :** ${hours}:${minutes}:${seconds} ${suffix}`)
	                  .setFooter(message.author.username, message.author.avatarURL);
	                  message.guild.channels.find("name" , room).send(' :heavy_check_mark: **Giveaway Created** :heavy_check_mark:' , {embed: giveEmbed}).then(m => {
	                     let re = m.react('🎉');
	                     setTimeout(() => {
	                       let users = m.reactions.get("🎉").users
	                       let list = users.array().filter(u => u.id !== m.author.id !== client.user.id);
	                       let gFilter = list[Math.floor(Math.random() * list.length) + 0]
	                       let endEmbed = new Discord.RichEmbed()
	                       .setAuthor(message.author.username, message.author.avatarURL)
	                       .setTitle(title)
	                       .addField('Giveaway Ended !🎉',`Winners : ${gFilter} \nEnded at :`)
	                       .setTimestamp()
	                     m.edit('** 🎉 GIVEAWAY ENDED 🎉**' , {embed: endEmbed});
	                    message.guild.channels.find("name" , room).send(`**Congratulations ${gFilter}! You won The \`${title}\`**` , {embed: {}})
	                }, ms(duration));
	            });
	                } catch(e) {
	                message.channel.send(`:heavy_multiplication_x:| **i Don't Have Prem**`);
	                  console.log(e);
	                }
	              });
	            });
	          });
	        });
	      });
	    });
	  }
	});
	//////////////////////////////////////////////////////////GIVEAWAY
	client.on('message',async message => {
	  var time = moment().format('Do MMMM YYYY , hh:mm');
	  var room;
	  var title;
	  var duration;
	  var gMembers;
	  var currentTime = new Date(),
	hours = currentTime.getHours() + 3 ,
	minutes = currentTime.getMinutes(),
	done = currentTime.getMinutes() + duration / 60000 ,
	seconds = currentTime.getSeconds();
	if (minutes < 10) {
	minutes = "0" + minutes;
	}
	var suffix = "AM";
	if (hours >= 12) {
	suffix = "PM";
	hours = hours - 12;
	}
	if (hours == 0) {
	hours = 12;
	}
	
	  var filter = m => m.author.id === message.author.id;
	  if(message.content.startsWith(prefix + "giveaway")) {
	
	    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**');
	    message.channel.send(`🎉| **Send Name channel For the Giveaway**`).then(msg => {
	      message.channel.awaitMessages(filter, {
	        max: 1,
	        time: 20000,
	        errors: ['time']
	      }).then(collected => {
	        let room = message.guild.channels.find('name' , collected.first().content);
	        if(!room) return message.channel.send(':heavy_multiplication_x:| **i Found It :(**');
	        room = collected.first().content;
	        collected.first().delete();
	        msg.edit(':tada:| **``Time For The Giveaway``**').then(msg => {
	          message.channel.awaitMessages(filter, {
	            max: 1,
	            time: 20000,
	            errors: ['time']
	          }).then(collected => {
	            if(isNaN(collected.first().content)) return message.channel.send(':heavy_multiplication_x:| **The Time Be Nambers `` Do the Commend Agin``**');
	            duration = collected.first().content * 60000;
	            collected.first().delete();
	            msg.edit('🎉| **``Now send The Present``**').then(msg => {
	              message.channel.awaitMessages(filter, {
	                max: 1,
	                time: 20000,
	                errors: ['time']
	              }).then(collected => {
	                title = collected.first().content;
	                collected.first().delete();
	                msg.delete();
	                message.delete();
	                try {
	                  let giveEmbed = new Discord.RichEmbed()
	                  .setDescription(`**${title}** \nReact With 🎉 To Enter! \nTime remaining : ${duration / 60000} **Minutes**\n **Created at :** ${hours}:${minutes}:${seconds} ${suffix}`)
	                  .setFooter(message.author.username, message.author.avatarURL);
	                  message.guild.channels.find("name" , room).send(' 🎉  **Giveaway**  🎉 ' , {embed: giveEmbed}).then(m => {
	                     let re = m.react('🎉');
	                     setTimeout(() => {
	                       let users = m.reactions.get("🎉").users;
	                       let list = users.array().filter(u => u.id !== m.author.id !== client.user.id);
	                       let gFilter = list[Math.floor(Math.random() * list.length) + 0]
	                       let endEmbed = new Discord.RichEmbed()
	                       .setAuthor(message.author.username, message.author.avatarURL)
	                       .setTitle(title)
	                       .addField('Giveaway Ended !🎉',`Winners : ${gFilter} \nEnded at :`)
	                       .setTimestamp()
						 m.edit('** 🎉 GIVEAWAY ENDED 🎉**' , {embed: endEmbed});
						message.guild.channels.find("name" , room).send(`**Congratulations ${gFilter}! You won The \`${title}\`**` , {embed: {}})
	                     },duration);
	                   });
	                } catch(e) {
	                message.channel.send(`:heavy_multiplication_x:| **i Don't Have Prem**`);
	                  console.log(e);
	                }
	              });
	            });
	          });
	        });
	      });
	    });
	  }
	});
	////////////////////////////////////Invite By:-------    bYTF3al anta el bf3aalo 
	
	//////////////////////////////////Auto Colors :"" in ROles/////By:Mahmoud-QuaStyle
	
	
	/////////////////////////////////////////////
	///////SERVER Wings
	
	    
	
	
	
	/////////////////////////////////////////////////////////////////////////////////////////// Invite By
	client.on('guildMemberAdd', member => {
	  member.guild.fetchInvites().then(guildInvites => {
	    const ei = invites[member.guild.id];
	    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
	    const inviter = client.users.get(invite.inviter.id);
	    const stewart = member.guild.channels.find("Welcome", "welcome");
	     stewart.send(`<@${member.user.id}> Invite By: <@${inviter.id}>`);
	   // stewart.send(`<@${member.user.id}> joined using invite code ${invite.code} from <@${inviter.id}>. Invite was used ${invite.uses} times since its creation.`);
	  }); 
	});
	
	
	
	/////////////////////////////////////////////////////////////////////////////////
	
	////////////////////
	
	
	

	

	
	////////////////Code AUto colors nar 
	const reply = JSON.parse(fs.readFileSync('./replys.json' , 'utf8'));
	client.on('message', async message => {
	    let messageArray = message.content.split(" ");
	   if(message.content.startsWith(prefix + "setReply")) {
	    let filter = m => m.author.id === message.author.id;
	    let thisMessage;
	    let thisFalse;
	
	    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send('You don\'t have permission').then(msg => {
	       msg.delete(4500);
	       message.delete(4500);
	    });
	    
	    message.channel.send(':pencil: **| say what is the msg... :pencil2: **').then(msg => {
	
	        message.channel.awaitMessages(filter, {
	          max: 1,
	          time: 90000,
	          errors: ['time']
	        })
	        .then(collected => {
	            collected.first().delete();
	            thisMessage = collected.first().content;
	            let boi;
	            msg.edit(':scroll: **| add the reply... :pencil2: **').then(msg => {
	      
	                message.channel.awaitMessages(filter, {
	                  max: 1,
	                  time: 90000,
	                  errors: ['time']
	                })
	                .then(collected => {
	                    collected.first().delete();
	                    boi = collected.first().content;
	                    msg.edit('✅ **| تم الاعداد بنجاح...  **').then(msg => {
	        
	                      message.channel.awaitMessages(filter, {
	                        max: 1,
	                        time: 90000,
	                        errors: ['time']
	                      })
	                      let embed = new Discord.RichEmbed()
	                      .setTitle('**Done The Autoreply Code Has Been Setup**')
	                      .addField('Message:', `${thisMessage}`)
	                      .addField('Reply:', `${boi}`)
	                      .setThumbnail(message.author.avatarURL)
	                      .setFooter(`${client.user.username}`)
	                     message.channel.sendEmbed(embed)
	    reply[message.guild.id] = {
	        msg: thisMessage,
	        reply: boi,
	    }
	    fs.writeFile("./replys.json", JSON.stringify(reply), (err) => {
	    if (err) console.error(err)
	  })
	   } 
	            )
	        })
	    })
	})
	    })
	}})             
	
	////set////////////By:Mal-Mahmoud-QuaStyle////////////By:Mal-Mahmoud-QuaStyle
	client.on('message', message => {
	    if(!message.channel.guild) return;
	if(message.content.startsWith('#bc')) {
	if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
	if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**sorry you  dont have perms** `ADMINISTRATOR`' );
	let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
	let copy = "- ⫷⫸Doͥctͣeͫℝ-S▀█▀ℝANGE⫷⫸";
	let request = `Requested By ${message.author.username}`;
	if (!args) return message.reply('**you have to say something**');message.channel.send(`**are you sure \n yes or no:** \` ${args}\``).then(msg => {
	msg.react('✅')
	.then(() => msg.react('❌'))
	.then(() =>msg.react('✅'))
	
	let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
	let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
	let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
	let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
	reaction1.on("collect", r => {
	message.channel.send(`**☑ |   ${message.guild.members.size}sending to  **`).then(m => m.delete(5000));
	message.guild.members.forEach(m => {
	var bc = new
	Discord.RichEmbed()
	.setColor('RANDOM')
	.setTitle(':anger_right: BroadCast :anger_right:')
	.addField(':rose: Server', message.guild.name)
	.addField(':speaking_head: Sender', message.author.username)
	.addField(':love_letter: Message', args)
	.setThumbnail('https://cdn.discordapp.com/avatars/486060277046181888/d53899e417f9da02c33907b03ec4c50a.png?size=2048')
	.setFooter(copy, client.user.avatarURL);
	m.send({ embed: bc })
	msg.delete();
	})
	})
	reaction2.on("collect", r => {
	message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
	msg.delete();
	})
	})
	}
	})
	
	///
	
	
	
	
	
	client.login(process.env.BOT_TOKEN);

