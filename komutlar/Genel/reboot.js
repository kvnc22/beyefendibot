const Discord = require('discord.js');
const bot = new Discord.Client();
const ayarlar = require("../../ayarlar.json")

module.exports.run = async (bot, message, args) => { 
    if(message.author.id !== ayarlar.sahip) return message.channel.send("🚫 Bu komutu sadece sahibim kullanabilir.")
     
    message.channel.sendMessage(`Bot yeniden başlatılıyor... <a:tik:722871613518905354>`).then(msg => {
    console.log(`Yeniden Başlatma İşlemi Gerçekleştirilecek`);
    process.exit(0);
  })
     
           
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yenile","r"],
  permLevel: 0
};

module.exports.help = {
name: 'reboot',
description: 'Botu Tekrar Başlatılır',
usage: 'reboot'
};