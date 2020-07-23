const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../../ayarlar.json');
exports.run = (client, message, args) => { 
  
   if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu işlemi yapabilmek için yönetici yetkisine sahip olmalısın. `)
let codeming = message.mentions.roles.first()
  
if(!codeming) return message.channel.send('<a:iptal:722904688969777202> Ceza İşlemi Tamamlandığı Zaman Verilecek Rolü Ayarlamak İçin Bir Rol Etiketlemelisiniz Örnek: `-ceza-rol @ceza` ')
 
message.channel.send('Ceza Atılacak Kullanıcılara Verilecek Otomatik Rol '+codeming+' Şeklinde Ayarlandı.')  
  
db.set(`codemingmuteverilecekrol_${message.guild.id}`, codeming.id)  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'ceza-rol',
  description: 'taslak', 
  usage: 'ceza'
};