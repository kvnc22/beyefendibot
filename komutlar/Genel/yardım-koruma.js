const Discord = require('discord.js');
const ayarlar = require('../../ayarlar.json');

exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Beyefendi | Yardım Menüsü ')
.setDescription(`**-banlimit** » Belirlenen miktardaki ban limiti ekler.\n**-banlimitsıfırla** » Ban limitini sıfırla.\n**-banrol @rol** » Belirlenen rol sadece ban atabilir.\n**-bot-engel** » Sunucunuza eklenen botu anında sunucudan çıkarsa.\n**-kanal-koruma** » Kanalları korur, oluşturulan kanalı siler silinen kanalı geri getirir.\n**-plog #kanal** » Belirtilen kanalı protection logu olarak ayarlar.\n**-reklam-koruma** » Sunucuda reklam yapılmasını önler.\n**-rol-koruma** » Rol oluşturulduğunda veya silindiğinde rolü onarır.\n**-bankoruma** » Sağ tık ban korumasını engeller.\n**-sunucu-koruma** » Sunucunun resmini ve isminin değişmesini engeller.\n**-yedek** » Sunucunun yedeğini alır.\n**-yönetici-engel** » Sunucuda herhangi bir role Yönetici vermeyi engeller.`)
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
  name: 'koruma',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};