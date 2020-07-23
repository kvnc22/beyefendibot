const Discord = require('discord.js');
const db = require("quick.db");

exports.run = async (client, message, args) => {
  

let sayı = args[0];
let kanal = message.mentions.channels.first();

if(!sayı) return message.reply('Bir sayı yazmalısın')
if(!kanal) return message.reply('Bir kanal etiketlemelisin')

db.set(`sayıK_${message.guild.id}`, sayı);
  db.set(`kanalK_${message.guild.id}`, kanal.id);

message.channel.send(`Sayaç **${sayı}** Kanalı ${kanal} olarak ayarlandı!`)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sayaç'],
  permLevel: 0
};

exports.help = {
  name: 'sayaç-ayarla',
  description: 'sunucunuzda sayaç sistemini ayarlar',
  usage: '(prefix)sayaç-ayarla <sayı> <#kanal>'
};