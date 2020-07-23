const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async(client, message, args) => {
  
  let banlimit = db.fetch(`banlimit_${message.guild.id}`);
  let banrol = db.fetch(`banrol_${message.guild.id}`);
  let banlog = db.fetch(`bankanal_${message.guild.id}`);

  if (!banlog) return message.reply("Ban Sisteminin Log'u Ayarlanmamış")
  if (!banrol) return message.reply("Ban Sisteminin Rol'ü Ayarlanmamış")
  if (!banlimit) return message.reply("Ban Sisteminin Limit'i Ayarlanmamış")

  
 if(!message.member.roles.has(banrol)) return message.reply("Bunu Yapabilmek İçin Ban Yetkilisi Olmalısın!")
    
 if (message.member.roles.has(banrol)) {

    let kisi = message.mentions.users.first()
    let user = message.guild.member(kisi)
    let member = message.guild.member(message.author.id)
    let sebep = args.slice(1).join(' ');

    if (!kisi) return message.reply(`Lütfen Banlayacağım Kişiyi Etiketle!`)
    
    if (!sebep) return message.reply(`Lütfen Bir Ban Sebebi Giriniz!`)
    
    if (db.fetch(`bansayi_${message.author.id}`) >= banlimit) return message.reply(`Ban Limitin Doldu!, Bir Yetkili Sıfırlayana Kadar Kullanamassın!`)
     
    message.channel.send(`${kisi} Adlı Kişi @${member} Tarafından Banlandı.`)
      
    message.guild.channels.get(banlog).send(`${kisi} Adlı Kişi, ${member} Tarafından ${sebep} Sebebiyle Sunucudan Yasaklandı!`)
                
 
    message.guild.ban(kisi.id, sebep)
    db.add(`bansayi_${message.author.id}`, 1)

  } 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ban',
  description: 'taslak',
  usage: 'ban'
};