const Discord = require("discord.js");
var Jimp = require('jimp');

exports.run = async (client, message, args) => {
    var user = message.mentions.users.first() || message.author;
    if (!message.guild) user = message.author;
    message.channel.send(`Fotoğraf işleniyor, lütfen bekleyin...`).then(m => m.delete(1000));

Jimp.read('https://cdn.discordapp.com/attachments/646293539713449996/685179152189489240/indir.jpg', (err, image) => {
    image.resize(350, 250)
    Jimp.read(user.avatarURL, (err, avatar) => {
        avatar.resize(116, 116)
        image.composite(avatar, 113, 2).write(`./img/rip/${client.user.id}-${user.id}.png`);
        setTimeout(function() {message.channel.send(new Discord.Attachment(`./img/rip/${client.user.id}-${user.id}.png`));
        }, 1000);
    });

});
}
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'alivefaol'
};