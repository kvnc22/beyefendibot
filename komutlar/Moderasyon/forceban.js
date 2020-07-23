const Discord = require('discord.js');
const ayarlar = require('../../ayarlar.json');
const db = require('quick.db');

exports.run = async(client, message, args) => {

if(!message.member.hasPermissions("ADMINISTRATOR")) return message.reply("Bu komut için **yönetici** yetkisine sahip olmalısın!")
let argüman = args;
if(!argüman[0]) return message.reply("❌ Lütfen bir **ID** belirt!")
if(isNaN(argüman[0])) return message.reply("❌ Sadece sayı girebilirsin!")
if(argüman[0].length > 18) return message.reply("❌ **ID** 18 karakterden büyük olamaz!")
if(argüman[0].length < 18) return message.reply("❌ **ID** 18 karakterden küçük olamaz!")



if(!db.fetch(`cforceban_${argüman[0]}`)) {
if(message.guild.member(argüman[0])) message.guild.member(argüman[0]).kick("Forceban aktif!")
db.set(`cforceban_${argüman[0]}`, "aktif")
message.reply("✅ **"+argüman[0]+"** ID'sine sahip kullanıcı bu sunucuya giremeyecek!")


} else {
db.delete(`cforceban_${argüman[0]}`)
message.reply("✅ **"+argüman[0]+"** ID'sine sahip kullanıcı bu sunucuya girebilir!")

}
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'forceban',
    description: 'Türkiyenin Saatini Gösterir',
    usage: 'gç'
  };