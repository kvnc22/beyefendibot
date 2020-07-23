const Discord = require('discord.js');

exports.run = (client, message, args) => {
     if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(" Yetkin bulunmuyor.");
    message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Komut girişi').setDescription('Gerekli Dosyalar Kurulsunmu?.').setFooter('Bu eylemi onaylıyorsan "evet" yazman yeterlidir.Bu eylem 30 saniye içinde sona erecek.'))
.then(() => {
message.channel.awaitMessages(response => response.content === 'evet', {
max: 1,
time: 30000,
errors: ['time'],
})
.then((collected) => {
})
      .then((collected) => {
   message.guild.createChannel('📜 | Kayıt Kanalları', 'category', [{
  id: message.guild.id,
  deny: ['SEND_MESSAGES']
}])

        
 message.guild.createChannel('•kayıt-kanalı', 'text', [{
  id: message.guild.id,
  deny: ['SEND_MESSAGES']
}])
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "📜 | Kayıt Kanalları")));
 message.guild.createChannel('•kayıt-odası', 'voice', [{
  id: message.guild.id,
  deny: ['CONNECT']
}])
.then(channel =>
       channel.setParent(message.guild.channels.find(channel => channel.name === "📜 | Kayıt Kanalları")));
       message.guild.createChannel('•kayıt-bilgi', 'text', [{
        id: message.guild.id,
        deny: ['SEND_MESSAGES']
        }])
     })
    })
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kayıtkur"],
  permLevel: 3
};

exports.help = {
  name: 'kayıt-kur',
  description: 'Bot İçin gerekli kanlları kurar.',
  usage: 'kurulum'
};