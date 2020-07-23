const Discord = require('discord.js');
const db = require("quick.db");

exports.run = async (client, message, args) => {
  

let tag = args[0];
let kanal = message.mentions.channels.first();

if(!tag) return message.reply('Bir tag yazmalısın')
if(!kanal) return message.reply('Bir kanal etiketlemelisin')

db.set(`tagK_${message.guild.id}`, tag);
  db.set(`kanalK_${message.guild.id}`, kanal.id);

message.channel.send(`ototag **${tag}** Kanalı ${kanal} olarak ayarlandı!`)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sayaç'],
  permLevel: 0
};

exports.help = {
  name: 'ototag',
  description: 'sunucunuzda sayaç sistemini ayarlar',
  usage: '(prefix)sayaç-ayarla <sayı> <#kanal>'
};