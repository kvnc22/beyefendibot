const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../../ayarlar.json');

exports.run = async(client, message, args) => { 
  

   let sahiplik = await db.fetch(`sahip_${message.id}`)
  if(message.author.id !== "350647354098974721" && message.author.id !== "306499839305187329") return message.channel.send("<a:iptal:722904688969777202>`Bu komutu yalnızca sahibim kullanabilir !` ")

 let codeming = message.mentions.users.first() || client.users.get(args[0]) 
 let yasinn = args.slice(1).join(' ');
  
  
 if(!codeming) return message.reply('<a:iptal:722904688969777202> **Black List** eklenecek kullanıcıyı etiketle veya İD kimliğini gir.') 
 
 if(!yasinn) return message.reply('<a:iptal:722904688969777202> Kullanıcının **Black List**e neden eklendiğini belirtin.') 
  
 if(message.author.id === codeming.id) return message.reply('<a:iptal:722904688969777202> Kendinizi kara listeye alamazsınız.') 
  
 if(codeming.bot) return message.reply('<a:iptal:722904688969777202> Bir botu **Black List** bölümüne alamazsın.')
  
  let veri = await db.fetch(`blacklistce_${codeming.id}`)
  
 if(veri) return message.reply('Anlaşılan **'+codeming.username+' Adlı kullanıcı zaten **Black List** de bulunuyor.') 
  let kw = client.channels.get('729717722379714652') 
let yasin = new Discord.RichEmbed()
.setTitle('✅ İşlem Başarılı!')
.setDescription(codeming.username + ' Adlı kullanıcı blackliste alındı.')
.addField('Black Liste Alınma Nedeni:', yasinn)
.setColor('RED')
message.channel.send(yasin)
  
message.delete()
 db.set(`blacklistce_${codeming.id}`, yasinn)

 kw.send(`<a:iptal:722904688969777202> **<@!${codeming.id}> - ${codeming.id} adlı üye karalisteye** alındı.`)
  
 
  
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'blacklist',
  description: 'taslak', 
  usage: 'blacklist'
};