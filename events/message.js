const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db')
const ms = require('parse-ms')
module.exports = async message => {
  let client = message.client;
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(' ')[0].slice(prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
let komutbakım = db.fetch(`kbakım_${cmd.help.name}`)
if(komutbakım) {
  
if(message.author.id !== ayarlar.sahip) return message.channel.send("`"+cmd.help.name+"` **adlı komutum ** `"+komutbakım+"` ** nedeni ile şu anda bakımda.**").then(m => m.delete(10000))
  
}
    let codemingbuaffetmez = await db.fetch(`blacklistce_${message.author.id}`)

if(codemingbuaffetmez) {

  
message.channel.send('<a:iptal:722904688969777202> **Botun kara listesine eklenmişsiniz!**')  
  return
}
    let cooldown = db.fetch(`komut-süre_${cmd.help.name}`) 
    if(cooldown) {
      let sonkullanım = db.fetch(`komut-cooldown_${message.author.id}`)
        if (sonkullanım !== null && cooldown - (Date.now() - sonkullanım) > 0) {
    let bekleme = ms(cooldown - (Date.now() - sonkullanım));
    return message.channel.send("**"+command+"** isimli komutu kullanmak için `"+bekleme.seconds+"` saniye daha bekle!")
 }
    }
    
    db.set(`komut-cooldown_${message.author.id}`, Date.now())
   if (cmd.conf.permLevel === 1) {
      if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        const embed = new Discord.RichEmbed()
          .setDescription(`Bu komutu kullanabilmek için **Mesajları Yönet** iznine sahip olmalısın!`)
          .setColor("RED")
        message.channel.send({embed})
        return
      }
    }
    if (cmd.conf.permLevel === 2) {
      if (!message.member.hasPermission("KICK_MEMBERS")) {
        const embed = new Discord.RichEmbed()
          .setDescription(`Bu komutu kullanabilmek için **Üyeleri At** iznine sahip olmalısın!`)
          .setColor("RED")
        message.channel.send({embed})
        return
      }
    }
    if (cmd.conf.permLevel === 3) {
      if (!message.member.hasPermission("BAN_MEMBERS")) {
        const embed = new Discord.RichEmbed()
          .setDescription(`Bu komutu kullanabilmek için **Üyeleri Yasakla** iznine sahip olmalısın!`)
          .setColor("RED")
        message.channel.send({embed})
        return
      }
    }
    if (cmd.conf.permLevel === 4) {
      if (!message.member.hasPermission("ADMINISTRATOR")) {
        const embed = new Discord.RichEmbed()
          .setDescription(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`)
          .setColor("RED")
        message.channel.send({embed})
        return
      }
    }
    if (cmd.conf.permLevel === 5) {
      if (!ayarlar.sahip.includes(message.author.id)) {
        const embed = new Discord.RichEmbed()
          .setDescription(`Bu komutu sadece **sahibim** kullanabilir!`)
          .setColor("RED")
        message.channel.send({embed})
        return
      }
      }
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }

};