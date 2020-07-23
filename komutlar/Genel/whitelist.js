const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  
  if(message.author.id !== "306499839305187329") return message.channel.send(':x: Bu komutu kullanabilmen için sahibim olman gerekiyor.')
  
 let codeming = message.mentions.users.first() || client.users.get(args[0]) 
  
  
 if(!codeming) return message.reply(':x: **White List** eklenecek kullanıcıyı etiketle veya İD kimliğini gir.') 
 
 if(message.author.id === codeming.id) return message.reply(':x: Kendinizi beyaz listeye alamazsınız.') 
  
 if(codeming.bot) return message.reply(':x: Bir botu **Beyaz List** bölümüne alamazsın.')
  
  let veri = await db.fetch(`blacklistce_${codeming.id}`)
  
 if(!veri) return message.reply('Anlaşılan **'+codeming.username+' Adlı kullanıcı zaten **Black List** de bulunmuyor.') 
  
let yasin = new Discord.RichEmbed()
.setTitle('✅ İşlem Başarılı!')
.setDescription(codeming.username + ' Adlı kullanıcı artık botun tüm komutlarını kullanabilecek.')
.setColor('GREEN')
message.channel.send(yasin)
  db.delete(`blacklistce_${codeming.id}`)
message.delete()
 
   let kw = client.channels.get('729717722379714652') 
 kw.send(`<a:tik2:722947649728413766> **<@!${codeming.id}> - ${codeming.id} adlı üye whiteliste** alındı.`)
 
  
 
  
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'whitelist',
  description: 'taslak', 
  usage: 'whitelist'
};