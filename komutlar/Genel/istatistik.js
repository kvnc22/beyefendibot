const Discord = require('discord.js');
const moment = require('moment');
const ayarlar = require('../../ayarlar.json');
require('moment-duration-format');
exports.run = async(cclient, message, args) => {
    let x;
  let iyi = '<:yesil:725081515431559238>'
  let kötü = '<:kirmizi:725081658444742677>'
  if(Math.round(cclient.ping) > 50) x = kötü
  if(Math.round(cclient.ping) < 50) x = iyi
          const duration = moment.duration(cclient.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
let cembed = new Discord.RichEmbed()
.setAuthor(cclient.user.username, cclient.user.avatarURL)
.setThumbnail(message.author.avatarURL)
.setTimestamp()
.addField("**Sahibim**",`<@${ayarlar.sahip}>`)
.addField("**Veriler**", `Toplam sunucu: **${cclient.guilds.size}** \nToplam kullanıcı: **${cclient.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** \nToplam kanal: **${cclient.channels.size}**`)
.addField("**Sürümler**", `Discord.js sürümü: **v${Discord.version}** \nNode.js sürümü: **${process.version}**`)
.addField("**Gecikmeler**", `Bot pingi: **${cclient.ping}**${x} \nMesaj gecikmesi: **${new Date().getTime() - message.createdTimestamp}**`, )
.addField("**Toplam Komut Sayısı**",cclient.commands.size)
.addField("**Kullanılan RAM**",`**${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}** MB`, )
.addField("**Aktif olma süresi**",`_${duration}_`)
.setColor("RANDOM")
message.channel.send(cembed)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['i'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'istatistik',
    description: 'Türkiyenin Saatini Gösterir',
    usage: 'gç'
  };