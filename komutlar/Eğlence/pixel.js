const Discord = require('discord.js');
const Jimp = require('jimp');

exports.run = (client, message, params) => {
  
  let user = message.mentions.users.first() || message.author
  
      Jimp.read(user.avatarURL, function (err, image){
          image.resize(295, 295)
          if(err) return message.channel.send('Bir hata oluştu: ``'+err+'``\n Lütfen yapımcıya bildirin.');
          image.pixelate(10, 10, 10).write('./resimler/pixelle/pixelle.png');
          setTimeout(() => {
            message.channel.send({file: './resimler/pixelle/pixelle.png'});
          }, 500);
      });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["invert"],
  permLevel: 0
};

exports.help = {
  name: 'pixel',
  description: 'Avatarınızı pixelleştirir.',
  usage: 'PİXELLEYİN BAKAM'
};