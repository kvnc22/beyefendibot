const Discord = require("discord.js");
exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('Yazını yazmalısın.');
if (mesaj.length > 30) return message.channel.send('Mesajın 30 karakterden uzun olmamalı.');
  message.channel.sendCode("asciidoc", `
|-----------------------------|
| ${mesaj}                    
|-----------------------------|
(\__/) ||
(•ㅅ•) ||
/ 　 づ
 `);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "eğlence"
};

exports.help = {
  name: 'tavşan',
  description: 'Yazınızı bunny yazısına dönüştürür.',
  usage: 'bunny <yazı>'
};