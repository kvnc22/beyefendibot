const Discord = require('discord.js')
const db = require('quick.db')
const a = require('../../bot.js')

exports.run = async (client, message, args) => {
if(args[0] === "kapat") {
  
db.delete(`pasabilal${message.guild.id}`)
  
  const bilal = new Discord.RichEmbed()
  .setDescription(`Giriş Çıkış başarıyla kapatıldı!`)
  .setColor("GOLD")
  .setFooter(`Hoşgeldin Sistemi`, client.user.avatarURL)
 
  message.channel.send(bilal)
} 
else {
  

  let bilo = message.mentions.channels.first();
  
  const darkcode = new Discord.RichEmbed()
  .setTitle(`**\`GirişÇıkış Bilgi;\`**`)
  .setDescription(`** ** \n**Ayarlamak İçin**: \`-hoşgeldin #kanal\`\n\n **Kapatmak İçin:** \`-hoşgeldin kapat\``)
  .setColor("GOLD")
  .setFooter(`Hoşgeldin Sistemi`, client.user.avatarURL)
  
  if(!bilo) return message.channel.send(darkcode)
  

  db.set(`pasabilal${message.guild.id}`, bilo.id)
  
  const KUPİ = new Discord.RichEmbed()
  .setDescription(`Giriş çıkış mesajlarının atılacağı kanal **${bilo}** olarak ayarlandı!`)
  .setColor("GOLD")
  .setFooter(`Hoşgeldin Sistemi`, client.user.avatarURL)
  message.channel.send(KUPİ)
  
  
}}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['hg-bb-ayarla', 'glhl'],
  permLevel: 3,
};

exports.help = {
  name: 'hoşgeldin',  
  description: '',
  usage: 'Darkcode'
};