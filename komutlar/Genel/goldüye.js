const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../../ayarlar.json');
exports.run = async(client, message, args) => { 

  if(message.author.id !== ayarlar.sahip) return message.reply('Bu komut sahibime özel, sizin erişiminiz engellendi.')  
  let user = message.mentions.users.first() || client.users.get(args[0])
  if(!user) return message.reply('Kime gold üye vermeliysem belirtir misin?')
  let veri = db.fetch(`${user.id}.golduye`)
  
  if(!veri) {
    
  let embed = new Discord.RichEmbed()
  .setColor("GREEN")
  .setDescription(`Gold üyelik sistemi **${user.username}** kişisi için aktif edildi.`)
  .setThumbnail(user.avatarURL)
  message.channel.send(embed)
  
  db.set(`${user.id}.golduye`, Date.now()) 
    let goldbildiri = client.channels.get('722891316584775991')
    goldbildiri.send(`<a:tik2:722947649728413766> **<@!${user.id}> - ${user.id}** adlı üye için **gold** üyelik aktif edildi`)
  } 
  else {
    
    let embed = new Discord.RichEmbed() 
    .setTitle('Gold Üye Alındı!')
    .setColor("RED")
    .setThumbnail(user.avatarURL)
  .setDescription(`<@!${user.id}> sahip olduğu **Gold Üyeliğini** kaybetti.`)
  .setFooter(client.user.username,client.user.avatarURL)
message.channel.send(embed)
      db.delete(`${user.id}.golduye`)
    let goldbildiri = client.channels.get('722891316584775991')
goldbildiri.send(`<a:iptal:722904688969777202> **<@!${user.id}> - ${user.id}** adlı üye için **gold** üyelik devre dışı bıraklıdı.`)
  } 
  
  

};
exports.conf = {
  enabled: true,  
  aliases: ['gold'], 
  guildOnly: false
};

exports.help = {
  name: 'gold', 
  permLevel: 0
};