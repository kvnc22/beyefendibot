const Discord = require('discord.js');
const db = require('quick.db')


exports.run = async(client, message, args) => {

if(message.author.id !== message.guild.owner.user.id) return message.channel.send(`Bu kullanmak için kurucu olmalısın.`)

  let rol = message.mentions.roles.first()
  
  if (!rol) return message.reply(`Rolü Etiketlemedin!`)

  db.set(`banrol_${message.guild.id}`, rol.id)

  message.channel.send(`Ban Rolü ${rol} Olarak Ayarlandı!`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ban-rol"],
  permLevel: 0
};

exports.help = {
  name: 'banrol',
  description: 'taslak',
  usage: 'banrol'
};