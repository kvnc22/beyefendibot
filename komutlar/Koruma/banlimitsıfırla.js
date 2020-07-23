const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async(client, message, args) => {

if(message.author.id !== message.guild.owner.user.id) return message.channel.send(`Bu kullanmak için kurucu olmalısın.`)
   
    let kisi = message.mentions.users.first()
    let member = message.guild.member(message.author.id)
    let banlog = db.fetch(`bankanal_${message.guild.id}`);

    if (!kisi) return message.reply(`Etiket atmadın!`)
   
    db.set(`bansayi_${kisi.id}`, 0)

    message.channel.send(`${kisi}, ${member} tarafından ban limitin sıfırlandı.`)        

    client.channels.get(banlog).send(`${kisi}'nin ban limiti ${member} tarafından sıfırlandı.`)  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["banlimit-sıfırla"],
  permLevel: 0
};

exports.help = {
  name: 'banlimitsıfırla',
  description: 'taslak',
  usage: 'banlimitsıfırla'
};