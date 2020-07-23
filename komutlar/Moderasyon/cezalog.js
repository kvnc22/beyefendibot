const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../../ayarlar.json');
exports.run = (client, message, args) => { //<3
// mete işin bittiyse kayıt sisteminin yardım menüsünü yazabilir misin?   yazarim tabii ki
   if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu işlemi yapabilmek için yönetici yetkisine sahip olmalısın. `)
  
  let kanal = message.mentions.channels.first()
  
  if(!kanal) return message.reply('<a:iptal:722904688969777202> Bu Özelliği Ayarlamam İçin Bir Kanal Etiketlemelisin Örnek: `-ceza-log #logkanal`')
  
  message.channel.send('Ceza log Kanalını '+kanal+' Olarak Ayarladım.')
  
  db.set(`codemingmutelogkanal_${message.guild.id}`, kanal.id)
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'ceza-log',
  description: 'taslak', 
  usage: 'ceza-kanal'
};