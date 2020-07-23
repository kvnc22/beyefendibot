const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('**Kimin ile kafa dansı yapmak istersin?**');
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor("#36393F")
    .setDescription(`** ${mesaj} ` + message.author.username + ' Seninle kafa dansı yapıyor.**')
    .setImage(`https://media1.tenor.com/images/9c81cd240cd78eef3b58a87417acb39a/tenor.gif?itemid=14002454`)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kafadansı', 'kd', 'kafadans'],
  permLevel: 0
};

exports.help = {
  name: 'kafadansi',
  description: 'İstediğiniz Kişiyle kafa dansı Atarsınız.',
  usage: 'kafadansi'
};