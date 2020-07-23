const Discord = require('discord.js');

exports.run = (client, message, args) => {
 let guild = message.guild;

    guild.fetchBans()
        .then(bans => message.channel.send(`Sunucunuzda **${bans.size}** Banlanmış Uye Bulunmakta.`))
        .catch(console.error);

}

exports.conf = {
    enabled: true,
    runIn: ["bansayısı"],
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: "bansay",
    description: "Sunucudan banlanan kişilerin sayısını gösterir",
    usage: "bansay"
  }