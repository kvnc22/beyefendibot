const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  let txt = args.join('+');
  if(!args[0]) return message.channel.send("Bir Yazı Yazarsan bende yazacam!");

  let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor("Banner oluşturuluyor.")
  .setImage("https://dummyimage.com/2000x500/33363c/ffffff&text=" + txt)
  .setFooter("Banner Olusturuldu!");

  message.channel.send(embed);
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["banneryazı","yazıbanner","banneryaz"],
  permLevel: 2
};

module.exports.help = {
  name: 'banneryaz',
  description: 'Yazdığınız yazıyı banner olarak atar',
  usage: 'banneryaz <yazdırmak istediğiniz yazı>'
};