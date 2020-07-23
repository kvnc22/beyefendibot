const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  
      if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`:interrobang: Allah Allah ne garip, yetkin yok!||Aptal mıdır nedir!||`); 
 let kullanıcı = message.mentions.users.first() || client.users.get(args[0]) 
 if (!kullanıcı) return message.channel.send(':x: Kimin seviyesini göstereceğimi yazmadın!') 
    var id = message.author.id;
  var gid = message.guild.id;
  let seviyesayısı = args[1]
  let seviye = await db.fetch(`lvl_${kullanıcı.id}_${gid}`)
  if(!seviye) seviye = 0
 db.add(`lvl_${kullanıcı.id}_${gid}`, -seviyesayısı)
  let codeming = new Discord.RichEmbed()
  .setTitle('<:verify:712705633312571493> | Seviye sistemi')
  .addField('Seviyesi silinen kişi', kullanıcı)
  .addField('Silinen Seviye', seviyesayısı)
  .addField('Şimdi ki seviyesi', (seviye - seviyesayısı))
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
  name: 'seviye-sil',
  description: 'taslak', 
  usage: 'seviye-sil'
};