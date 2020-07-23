const Discord = require('discord.js');
const funnyWords = require('funny-words');

exports.run = (bot, message) => {
    let codeming = message.content.split(' ').slice(1).join(" ");
    
    if (!codeming) return message.channel.send("Karışım yapabilmem için bir yazı belirt.")
    message.channel.send(funnyWords(codeming))
}


module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: 'karıştır',
  description: '',
  usage: 'karıştır'
};