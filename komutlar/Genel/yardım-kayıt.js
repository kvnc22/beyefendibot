const Discord = require('discord.js');
const ayarlar = require('../../ayarlar.json');

exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Beyefendi | Yardım Menüsü ')
.setDescription(`**-kayıt-kanal #kanal** » Kayıtların yapılacağı kanalı seçer.\n**-kayıtcı-rol @rol** » Kayıtları yapabilecek olan rolü seçer.\n**-kız-rol @kızrol** » Kız kayıtı yapılınca verilecek olan rolü seçer.\n**-erkek-rol @erkekrol**  » Erkek kaydı yapılınca verilecek olan rolü seçer.\n**-kayıtsız-rol @rol** » Kayıtsız rolünü seçer.\n**-isim @kullanıcı isim yaş** » Belirtilen kullanıcının ismini isim | yaş şeklinde ayarlar.\n**-erkek @kullanıcı isim yaş** » Kullanıcıyı erkek rolü ile kaydeder ismini isim | yaş şeklinde yapar.\n**-kız @kullanıcı isim yaş** » Kullanıcıyı kız rolü ile kaydeder ismini isim | yaş şeklinde yapar.\n`)
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
  name: 'kayıt',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};