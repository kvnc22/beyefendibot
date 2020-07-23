const Discord = require('discord.js');
const ayarlar = require('../../ayarlar.json');

exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Beyefendi | Yardım Menüsü ')
.setDescription(`**-afk** » AFK olmanızı sağlar.\n**-davet** » Botun davet linkini atar.\n**-istatistik** » Botun istatistiğini atar.\n**-kullanıcıbilgi** » Kullanıcının bilgisini gösterir.\n**-say** » Sunucuda kaç kişi olduğunu gösterir.\n**-yetkilerim** » Yetkilerinizi gösterir.\n**-öneri** » Bize öneride bulunmanızı sağlar.\n**-yenilik** » Bota eklenmiş yenilikleri gösterir.\n**-prefix prefix/sıfırla** » Botun prefixini değiştirmeye yarar.`)
.setTimestamp()
.setThumbnail(client.user.avatarURL)
.addBlankField()
.addField(`Bağlantılar ®`,` [Destek Sunucusu](https://discord.gg/5TcGRH9) • [Destekle](https://beyefendi.glitch.me)`)
.setFooter(`${message.author.username} tarafından istendi.`,`${message.author.displayAvatarURL}`)
.setTimestamp()
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['ye'], 
  permLevel: 0 
};

exports.help = {
  name: 'genel',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};