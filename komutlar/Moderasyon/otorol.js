const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => {

let kanaltest =  db.fetch(`${message.guild.id}_otorolkanal`)
let roltest = db.fetch(`${message.guild.id}_otorol`)
let kanal = message.mentions.channels.first() || args[0]
let rol = message.mentions.roles.first() || args[1]
if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('**Bu komutu kullanmak için gerekli yetkiye sahip değilsin!**')
if(roltest) return message.reply('OtoRol sistemi zaten aktif !')
if(!kanal) return message.reply(':x: Yanlış kullanım ! `-otorol-ayarla #kanal @rol`')
if(!rol) return message.reply(':x: Yanlış kullanım ! `-otorol-ayarla #kanal @rol`')
message.channel.send(':white_check_mark: OtoRol sistemi başarıyla aktif hale getirildi ! OtoRol Log kanalı '+kanal+', Rol ise '+rol+' olarak ayarlandı !')
db.set(`${message.guild.id}_otorol`, rol.id)
db.set(`${message.guild.id}_otorolkanal`, kanal.id)
}
exports.conf = {
  enabled: true,
  guildOnly: false,  
  aliases: ['otorolayarla', 'otorol-ayarla'],
  permLevel: 3
};
exports.help = {
  name: 'otorol',
  description: 'Otorol komutunu ayarlamanıza yarar.',
  usage: '!otorol-ayarla @rol #kanal'
};