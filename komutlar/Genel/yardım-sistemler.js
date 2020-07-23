const Discord = require('discord.js');
const ayarlar = require('../../ayarlar.json');

exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Beyefendi | Yardım Menüsü ')
.setDescription(`**-seviye-aç** » Seviye sistemini açar.\n**-seviye-kapat** » Seviye sistemini kapatır.\n**-seviye-ayarlar** » Seviye sisteminin ayarlarını gösterir.\n**-seviye-log** » Seviye sistemi logunu belirler.\n**-seviye-rol** » Belirli seviyede verilecek rolü ve seviyeyi seçersiniz.\n**-seviye-sil** » Belirttiğiniz kullanıcıdan belirttiğiniz kadar seviye silersiniz.\n**-seviye-ver** » Belirttiğiniz kullanıcıdan belirttiğiniz kadar seviye verirsiniz.\n**-seviye-xp** » Belirttiğiniz değer, mesaj başına verilecek xp sayısını belirler.\n**-seviye @kullanıcı** » Belirttiğiniz kullanıcının seviyesini görürsünüz.\n**-sunucukur** » Gelişmiş sunucu kurarsınız.\n**-talep** » Talep sistemi oluşur.\n**-özelodasistemi** » Özel oda sistemi kurulur.`)
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
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'sistemler',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};