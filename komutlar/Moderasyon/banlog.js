const Discord = require('discord.js');
const db = require('quick.db')


exports.run = async(client, message, args) => {

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Yönetici iznine sahip olmanız gerekiyor.') 

  let kanal = message.mentions.channels.first()
  
  if (!kanal) return message.reply(`Kanalı etiketlemedin!`)
  
  db.set(`bankanal_${message.guild.id}`, kanal.id)

  message.channel.send(`Ban kanalını ${kanal} olarak ayarlandı!`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ban-log"],
  permLevel: 0
};

exports.help = {
  name: 'banlog',
  description: 'taslak',
  usage: 'banlog'
};