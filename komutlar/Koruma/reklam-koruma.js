const Discord = require('discord.js');
const db = require('quick.db')

exports.run = (client,message,args) => {
/* Hata embed
message.channel.send(
    new Discord.RichEmbed() 
.setColor('RED')
.setTitle('Hata :x:')
.setDescription(''))
*/
/* başarılı embed
message.channel.send(
    new Discord.RichEmbed() 
.setColor('GREEN')
.setTitle('Başarılı :white_check_mark:')
.setDescription(''))
*/

/*
db.set(`${message.guild.id}`)
db.delete(`${message.guild.id}`)
*/
if(!message.member.hasPermissions("ADMINISTRATOR")) return message.channel.send(
    new Discord.RichEmbed() 
.setColor('RED')
.setTitle('Hata :x:')
.setDescription('Bu komutu kullanamk için `YÖNETİCİ` yetkisine sahip olmalısın!'))


const boş = args.slice(0).join(' ')
if(!boş) return message.channel.send(
    new Discord.RichEmbed() 
.setColor('RED')
.setTitle('Hata :x:')
.setDescription('Aç yada kapat yazmalısın!'))


if(args[0] == "aç") {
db.set(`reklamE_${message.guild.id}`, "açık")
message.channel.send(
    new Discord.RichEmbed() 
.setColor('GREEN')
.setTitle('Başarılı :white_check_mark:')
.setDescription('Reklam engel başarıyla açıldı.'))
}

if(args[0] == "kapat") {
db.delete(`reklamE_${message.guild.id}`)
message.channel.send(
    new Discord.RichEmbed() 
.setColor('GREEN')
.setTitle('Başarılı :white_check_mark:')
.setDescription('Reklam engel başarıyla kapatıldı.'))
}
}
exports.conf = {
enabled: true,
guildOnly: false,
permLevel: 0,
aliases: []
}


exports.help = {
name: 'reklam-engel'
}