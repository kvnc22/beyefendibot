const Discord = require('discord.js');
const db = require('quick.db')

exports.run = (client, message, args) => {
  if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send(':x: bu özelliği kullanabilmek için `Yönetici` yetkisine sahip olmalısınız')
var miran = new Date().getTime()  // miran CodEming
var CodEming = args.join(" ")  // miran CodEming
if(!CodEming) return message.channel.send("Lütfen AFK olma sebebini yaz.")

db.set(`miranafk2.${message.author.id}.afk`, `{"zaman": "${miran}", "sebep": "${CodEming}"}`)
message.channel.send("Başarıyla Afk Moduna Geçtiniz")
}
 // miran CodEming
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'afk',
  description: 'AFK Moduna geçersiniz', 
  usage: 'afk <sebep>'
};