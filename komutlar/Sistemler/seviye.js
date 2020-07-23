const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  
 
 let kullanıcı = message.mentions.users.first() || client.users.get(args[0]) 
 if (!kullanıcı) kullanıcı = message.author
    var id = message.author.id;
  var gid = message.guild.id;
  var xpToLvl = await db.fetch(`xp_${kullanıcı.id}_${gid}`);
  let seviye = await db.fetch(`lvl_${kullanıcı.id}_${gid}`)
  if(!seviye) seviye = 0
  let xp = await db.fetch(`xpToLvl_${kullanıcı.id}_${gid}`);
  var sonucxp = (xp - xpToLvl);
    let xps = await db.fetch(`verilecekxp_${gid}`)
  let codeming = new Discord.RichEmbed()
  .setTitle('<a:tik:722871613518905354> | Seviye sistemi')
  .setDescription('')
  .addField('Seviyesine bakılan kişi',kullanıcı)
  .addField('Seviyesi',seviye)
  .addField('Seviye atlamak için kalan xp',sonucxp)
  .setFooter('Beyefendi Seviye Sistemi!')
  .setTimestamp()
  .setColor('RANDOM')
  message.channel.send(codeming)  
  //CodEming/ft.Yasin..
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'seviye',
  description: 'taslak', 
  usage: 'seviye'
};