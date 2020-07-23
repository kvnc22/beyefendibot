const Discord = require('discord.js');
const ayarlar = require('../../ayarlar.json');

exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Beyefendi | Moderasyon Yardım Menüsü ')
.setDescription(`**-ban** » Etiketlenen kullanıcının sunucudan yasaklanmasını sağlar.\n**-banliste** » Sunucudan yasaklanmış kişilerin listesini çıkarır.\n**-banlog #kanal** » Sunucudan yasaklanan kişilerin yasaklandığı zaman bildirileceği kanalı seçer.\n**-bansorgu** » Sunucudan yasaklanmış bir kişinin yasaklanma nedenini gösterir.\n**-ceza @kullanıcı süre sebep** » Etiketlenen kullanıcıya belirtilen sebep ve sürede ceza atılır.\n**-ceza-log #kanal ** » Etiketlenen kanalın cezaların gideceği kanal olarak belirler.\n**-ceza-rol @rol** » Etiketlenen rolün, ceza verildiğinde verilecek olan rolü belirler.\n**-duyuru #kanal metin** » Etiketlenen kanalda @everyone ve @here atarak belirttiğiniz metinle  duyuru yapar.\n**emoji-oluştur emojisimi resim.png** » Belirtmiş olduğunuz isim ile resim.png dosyasını emoji olarak sunucuya kaydeder.(resim.png url şeklinde olmalıdır.)\n**-güvenlik #kanal** » Belirtmiş olduğunuz kanala sunucuya birisi giriş yaptığında hesabının güvenli olup olmadığına dair resim atar.\n**-hoşgeldin #kanal** » Belirttiğiniz kanala sunucuya herhangi birisi geldiği zaman resimli hoşgeldin atar.\n**-log #kanal** » Belirttiğiniz kanalı log kanalı olarak ayarlar.\n**-otorol @rol #kanal** » Belirtmiş olduğunuz rolü sunucuya gelen herkese verir ve seçtiğiniz kanala mesajını atar.\n**-otorolsıfırla** » Otorolü sıfırlamanıza yardımcı olur.\n**-rolal @kullanıcı @rol** » Belirtmiş olduğunuz rolü belirtilen kullanıcıdan alır.\n**-rolver @kullanıcı @rol** » Belirtmiş olduğunuz rolü belirtilen kullanıcıya verir.\n**-roller** » Sunucunuzda olan bütün rolleri gösterir.\n**-sayaç SAYI #kanal ** » Sunucuya katılan üyeleri sayan bir sayaç oluşturur.\n**-sil 100** » Belirtilen sayıda mesaj siler.\n**-slowmode 120** » Belirtilen saniyede kanala yavaşlatma uygular.\n**-sunucubilgi** » Sunucu hakkındaki bilgileri gösterir.\n**-tag [tag] #kanal** » Belirtilen tagı sunucuya gelen herkese verir.`)
.setTimestamp()
.setThumbnail(client.user.avatarURL)
.addBlankField()
.addField(`Bağlantılar ®`,` [Destek Sunucusu](https://discord.gg/5TcGRH9) • [Destekle](https://beyefendi.glitch.me)`)
.setFooter(`${message.author.username} tarafından istendi.`,`${message.author.displayAvatarURL}`)
.setTimestamp()
message.channel.send(embed).then(msg => {

    msg.react('⏪').then( r => {
      msg.react('⏩')

      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id;

      const backwards = msg.createReactionCollector(backwardsFilter);
      const forwards = msg.createReactionCollector(forwardsFilter);

      backwards.on('collect', r => {
        embed.setDescription(`**-ban** » Etiketlenen kullanıcının sunucudan yasaklanmasını sağlar.\n**-banliste** » Sunucudan yasaklanmış kişilerin listesini çıkarır.\n**-banlog #kanal** » Sunucudan yasaklanan kişilerin yasaklandığı zaman bildirileceği kanalı seçer.\n**-bansorgu** » Sunucudan yasaklanmış bir kişinin yasaklanma nedenini gösterir.\n**-ceza @kullanıcı süre sebep** » Etiketlenen kullanıcıya belirtilen sebep ve sürede ceza atılır.\n**-ceza-log #kanal ** » Etiketlenen kanalın cezaların gideceği kanal olarak belirler.\n**-ceza-rol @rol** » Etiketlenen rolün, ceza verildiğinde verilecek olan rolü belirler.\n**-duyuru #kanal metin** » Etiketlenen kanalda @everyone ve @here atarak belirttiğiniz metinle  duyuru yapar.\n**emoji-oluştur emojisimi resim.png** » Belirtmiş olduğunuz isim ile resim.png dosyasını emoji olarak sunucuya kaydeder.(resim.png url şeklinde olmalıdır.)\n**-güvenlik #kanal** » Belirtmiş olduğunuz kanala sunucuya birisi giriş yaptığında hesabının güvenli olup olmadığına dair resim atar.\n**-hoşgeldin #kanal** » Belirttiğiniz kanala sunucuya herhangi birisi geldiği zaman resimli hoşgeldin atar.\n**-log #kanal** » Belirttiğiniz kanalı log kanalı olarak ayarlar.\n**-otorol @rol #kanal** » Belirtmiş olduğunuz rolü sunucuya gelen herkese verir ve seçtiğiniz kanala mesajını atar.\n**-otorolsıfırla** » Otorolü sıfırlamanıza yardımcı olur.\n**-rolal @kullanıcı @rol** » Belirtmiş olduğunuz rolü belirtilen kullanıcıdan alır.\n**-rolver @kullanıcı @rol** » Belirtmiş olduğunuz rolü belirtilen kullanıcıya verir.\n**-roller** » Sunucunuzda olan bütün rolleri gösterir.\n**-sayaç SAYI #kanal ** » Sunucuya katılan üyeleri sayan bir sayaç oluşturur.\n**-sil 100** » Belirtilen sayıda mesaj siler.\n**-slowmode 120** » Belirtilen saniyede kanala yavaşlatma uygular.\n**-sunucubilgi** » Sunucu hakkındaki bilgileri gösterir.\n**-tag [tag] #kanal** » Belirtilen tagı sunucuya gelen herkese verir.\n**-forceban @kullanıcı** » Belirtilen kullanıcıyı asla sunucuya sokmaz.`)
        msg.edit(embed)
      })

      forwards.on('collect', r => {
        embed.setDescription(`\n**-kilit süre** » Belirlediğiniz süre boyunca kanalı kilitler.\n**-çekiliş** » Çekiliş yapmanızı sağlar.\n**-oylama** » Oylama yapmanızı sağlar.`);
        msg.edit(embed)
      })

    })

  })
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['ym'], 
  permLevel: 0 
};

exports.help = {
  name: 'moderasyon',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};
