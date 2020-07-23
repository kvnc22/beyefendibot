const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async(client, message, args) => {

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Yönetici iznine sahip olmanız gerekiyor.') 

   if(!args[0]) return message.reply("Limiti girmedin!")
   if(isNaN(args[0])) return message.reply(`Limit Sadece Sayı Olabilir.`);

   db.set(`banlimit_${message.guild.id}`, args[0])

  message.channel.send(`Ban Limiti \`${args[0]}\` Sayısına Ayarlandı!`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ban-limit'],
  permLevel: 0
};

exports.help = {
  name: 'banlimit',
  description: 'taslak',
  usage: 'banlimit'

};