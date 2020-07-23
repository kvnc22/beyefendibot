const Discord = require("discord.js");
const Jimp = require("jimp");
const fs = require("fs");

module.exports.run = async (bot,message,args,func) =>
{
  let mention = message.mentions.members.first();
  let pfp = message.author.avatarURL;

  if(!mention) {
  Jimp.read(`${pfp}`)
    .then(image => {
        image.greyscale()
        image.write(`./images/${message.author.id}renksiz.jpg`);
    })
    .catch(err => {
      console.log(err)
    });

    const file = `./images/${message.author.id}renksiz.jpg`
    const fileExists = fs.existsSync(file);

    setTimeout(function () {
      message.channel.send(":/", {
        file: `./images/${message.author.id}renksiz.jpg`
      });
    }, 2500);
  } else {
    //Else
    let mentionpfp = mention.user.avatarURL;

    Jimp.read(`${mentionpfp}`)
      .then(image => {
          image.greyscale()
          image.write(`./images/${mention.user.id}renksiz.jpg`);
      })
      .catch(err => {
        console.log(err)
      });

      const file = `./images/${mention.user.id}renksiz.jpg`
      const fileExists = fs.existsSync(file);

      setTimeout(function () {
        message.channel.send("renk silindi", {
          file: `./images/${mention.user.id}bw.jpg`
        });
  }, 2500);

};
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["renksizavatar"],
  permLevel: 0
};

module.exports.help = {
  name: 'renksiz',
  description: 'Avatarınızı renksiz hale getirir',
  usage: 'renksiz'
};