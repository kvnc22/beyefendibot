const Discord = require('discord.js');
exports.run = async (client, msg, args) => {
    const Discord = require("discord.js");
       var flip = Math.floor(Math.random() * 2 + 1);
       if (flip === 1) {
    let embed = new Discord.RichEmbed()
   .setColor(Math.floor(Math.random() * (0xFFFFFF + 1)))
    .setDescription(`Piyango tuttu! Hayatındaki tüm şansı kullanmış olabilirsin dostum.**`)
   .setImage('https://media.giphy.com/media/dvZwIHyqY2CugMfvD9/giphy-downsized.gif')
   msg.channel.send(embed);
 }
       
       else {
    let embed = new Discord.RichEmbed()
   .setColor(Math.floor(Math.random() * (0xFFFFFF + 1)))
    .setDescription(`**MPİ ye göre tutturamadın** :(`)
   .setImage('https://media.giphy.com/media/3oFzmko6SiknmpR2NO/giphy.gif')
   msg.channel.send(embed);
 } 
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['piyangoçek'],
  permLevel: 0
};

exports.help = {
  name: 'piyango',
  description: 'Piyango çekersin.',
  usage: 'piyango'
};