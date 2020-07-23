const Discord = require('discord.js');
const db = require('quick.db');
exports.run = (client, message, args) => {

     let user = message.mentions.users.first()  
 
  let hata3 = new Discord.RichEmbed()
 .setTitle('Bir Hata oluştu :(')
 .setDescription(message.member.user.username + ', \n :white_small_square: Anlaşılan birileri burda İstenmiyor:interrobang: Ama kim? \n **-kick <kullanıcı>** şeklinde olmalı!')
 .setColor('000000')
.setThumbnail(client.user.avatarURL)
  let hata4 = new Discord.RichEmbed()
 .setTitle('Bir Hata oluştu :(')
 .setDescription(message.member.user.username + ',Hopss! Bir admini Tekmelemeye/kicklemeye çalışıyorsun.. Eğlenceli gibi görünüyor,Ama yapamazsın!')
 .setColor('000000')
.setFooter('Ne kadar tuhaf dimi?')
.setThumbnail(client.user.avatarURL)


let hata2 = new Discord.RichEmbed()
 .setTitle('Bir Hata oluştu :(')
 .setDescription(message.member.user.username + ' Sunucudan Birini Atmak için,**"ÜYELERİ AT"** Yetkisine,sahip olman gerekiyor.')
 .setColor('000000')
.setThumbnail(client.user.avatarURL) 


///////////////////////////////////////////////////ing


if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(hata2) 
if (message.mentions.users.size < 1) return message.channel.send(hata3)    
if (message.guild.member(user).hasPermission("ADMINISTRATOR")) return message.channel.send(hata4)      
    

     

 message.react('✅');    
    message.channel.send('**' + user + '**,**' + message.member.user.username + '** Tarafından Tekmelendi! :boot: ')
message.guild.member(user).kick();
    
  
  

 

    
   
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kick',
  description: 'kick atmak',
  usage: 'kick'
};
