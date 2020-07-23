const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => {

    if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('**Bu komutu kullanmak için gerekli yetkiye sahip değilsin!**')

message.channel.send(`**OtoRol sistemi bu sunucu için sıfırlanmıştır ! Tekrardan aktif etmek isterseniz ** !otorol-ayarla @Rol #Kanal`) 

db.delete(`${message.guild.id}_otorol`)
db.delete(`${message.guild.id}_otokanal`)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['otorolsıfırla', 'otorol-sıfırla'],
  permLevel: 3
};

exports.help = {
  name: 'otorol-sıfırla',
  description: 'Otorol komutunu sıfırlamanıza yarar.',
  usage: '!otorol-sıfırla'
};