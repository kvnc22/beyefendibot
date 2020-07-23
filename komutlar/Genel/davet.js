const Discord = require('discord.js');

exports.run = async (client, message, args) => {
const embed = new Discord.RichEmbed();
embed.setDescription("**<a:tik:722871613518905354> Beni Davet Etmek İçin [TIKLA](https://discord.com/oauth2/authorize?client_id=722850221067075705&scope=bot&permissions=805314622)**")

message.channel.send(embed)
}
exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['davet'],
permLevel: 0
}

exports.help = {
name: 'davet',

}