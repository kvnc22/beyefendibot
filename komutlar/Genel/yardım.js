const Discord = require('discord.js');
const ayarlar = require('../../ayarlar.json');

exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Beyefendi | Yardım Menüsü ')
.setDescription('Yardım menüsünde anlamadığınız veya görüşlerinizi iletebileceğiniz [destek sunucumuza](https://discord.gg/5TcGRH9) katılın.')
.setTimestamp()
.setThumbnail(client.user.avatarURL)
.addField(`» **${ayarlar.prefix}moderasyon**`, `_Moderasyon komutlarını gösterir._`)
.addField(`» **${ayarlar.prefix}eğlence**`, `_Eğlence komutlarını gösterir._`)
.addField(`» **${ayarlar.prefix}kayıt**`, `_Kayıt komutlarını gösterir._`)
.addField(`» **${ayarlar.prefix}koruma**`, `_Koruma komutlarını gösterir._`)
.addField(`» **${ayarlar.prefix}genel**`, `_Genel komutları gösterir._`)
.addField(`» **${ayarlar.prefix}sistemler**`, `_Sistem komutlarını gösterir._`)
.addBlankField()
.addField(`Bağlantılar ®`,` [Destek Sunucusu](https://discord.gg/5TcGRH9) • [Destekle](https://beyefendi.glitch.me)`)
.setFooter(`${message.author.username} tarafından istendi.`,`${message.author.displayAvatarURL}`)
.setTimestamp()
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['y', 'yardım'], 
  permLevel: 0 
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};