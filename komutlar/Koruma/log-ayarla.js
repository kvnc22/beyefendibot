const Discord = require('discord.js');
const codeming = require('quick.db')
const moment = require("moment")
exports.run = async(client, message, args) => { 
  
  
if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply(":x: Bu komuta erişim sağlamak için '**ADMINISTRATOR**' yetkisine sahip olmalısın.")
  
let kanal = message.mentions.channels.first() || message.guild.channels.get(args[0])
 

if(kanal === "kapat") {

let veri = await codeming.fetch(`log_${message.guild.id}`)  
if(!veri) return message.reply(":x: Log kanalı zaten ayarlanmamış.")  

message.channel.send("**log-kanalı** silindi.")

codeming.delete(`log_${message.guild.id}`)  

  return
}
if(!kanal) return message.reply(":x: Bir kanal etiketle veya ID gir.Kapatmak istiyorsan -log kapat yaz.")

message.channel.send("**log-kanalı**,<#"+kanal.id+"> olarak ayarlandı!")  
  
codeming.set(`log_${message.guild.id}`, kanal.id)  
  
  
  // **CODEMİNG** \\
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'plog',
  description: 'taslak', 
  usage: 'log'
};
