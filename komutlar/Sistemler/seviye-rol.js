const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../../ayarlar.json');
exports.run = (client, message, args) => { 
  
   if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu işlemi yapabilmek için yönetici yetkisine sahip olmalısın. `)
let codeming = message.mentions.roles.first()
let codeming2 = args[1] 
  var gid = message.guild.id;
if(!codeming) return message.channel.send('<a:iptal:722904688969777202> Seviye rolüne bir rol etiketlemelisiniz. Örnek: `-seviye-rol @rol` ')
 if(!codeming2) return message.channel.send('<a:iptal:722904688969777202> Seviye rolüne bir sayı girmelisiniz. Örnek: `-seviye-rol @rol [sayı]` ')
message.channel.send(+codeming2+'seviyede Verilecek Otomatik Rol '+codeming+' Şeklinde Ayarlandı.')  
  
db.set(`rollevel_${gid}`, codeming2)  
 db.set(`seviyerol_${gid}`, codeming.id) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'seviye-rol',
  description: 'taslak', 
  usage: 'ceza'
};