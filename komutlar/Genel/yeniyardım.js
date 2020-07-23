const Discord = require('discord.js');
const ayarlar = require('../../ayarlar.json');

exports.run = function(client, message, args) {
	// ANA YARDIM
	if(!args[0]) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Beyefendi | Yardım Menüsü ')
.setDescription('Yardım menüsünde anlamadığınız veya görüşlerinizi iletebileceğiniz [destek sunucumuza](https://discord.gg/5TcGRH9) katılın.')
.setTimestamp()
.setThumbnail(client.user.avatarURL)
.addField(`» **${ayarlar.prefix}yardım moderasyon**`, `_Moderasyon komutlarını gösterir._`)
.addField(`» **${ayarlar.prefix}yardım eğlence**`, `_Eğlence komutlarını gösterir._`)
.addField(`» **${ayarlar.prefix}yardım kayıt**`, `_Kayıt komutlarını gösterir._`)
.addField(`» **${ayarlar.prefix}yardım koruma**`, `_Koruma komutlarını gösterir._`)
.addField(`» **${ayarlar.prefix}yardım genel**`, `_Genel komutları gösterir._`)
.addField(`» **${ayarlar.prefix}yardım sistemler**`, `_Sistem komutlarını gösterir._`)
.addBlankField()
.addField(`Bağlantılar ®`,` [Destek Sunucusu](https://discord.gg/5TcGRH9) • [Destekle](https://beyefendi.glitch.me)`)
.setFooter(`${message.author.username} tarafından istendi.`,`${message.author.displayAvatarURL}`)
.setTimestamp()
message.channel.send(embed)
}
// EĞLENCE
if(args[0] === "eğlence") {
	const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Beyefendi | Yardım Menüsü ')
.setDescription(`**-alivefaol** » Avatarınızda Ali Vefa olmanızı sağlar.\n**-ara155** » 155'i aramanızı sağlar.\n**-ascii** » Yazdığınız kelimeyi ascii formatında yazar.\n**-atamınsözleri** » Atatürk'ün sözlerini atar.\n**-avatar** » Avatarınızı atar.\n**-aşkölçer** » Etiketlediğiniz kişi ile aranızda ki ilişkiyi ölçer.\n**-banner** » Yazdığınız kelimeleri banner haline dönüştürür.\n**-corona** » Corona istatistiklerini atar.\n**-dizifilmöneri** » Karışık bir şekilde dizi ve film önerir.\n**-döviz** » Döviz kurunu gösterir.\n**-emojiyaz** » Emoji harfleri ile yazmanızı sağlar.\n**-fakemesaj** » Etiketlediğiniz kullanıcının fake bir mesajını yazar.\n**-fal** » Fal bakar.\n**-hacked** » Fotoğrafınıza HACKED ibaresi koyar.\n**-havadurumu** » Belirttiğiniz ilin hava durumunu gösterir.\n**-kafadansi** » Etiketlediğiniz kişi ile kafa dansı yaparsınız.\n**-karıştır** » Yazdığınız kelimenin harflerini karıştırır.\n**-pixel** » Avatarınızı pixel pixel yapar.\n**-piyango** » Piyango çeker.\n**-renksiz** » Avatarınızı renksiz hale getirir.\n**-resimçiz** » Resim çizmenizi sağlar.\n**-sayıtahmin** » Botun tuttuğu bir sayıyı bulmaya çalışırsınız.\n**-kumar** » Slot makinesinde kumar oynarsınız.\n**-sorusor** » Bota soru sorarsınız rastgele cevaplar verir.\n**-wiki** » Wikipedia da araştırma yaparsınız.\n**-mcskin** » Minecraft skininizi atar.\n**-tavşan** » Tavşana bir şey yazdırırsınız.`)
.setTimestamp()
.setThumbnail(client.user.avatarURL)
.addBlankField()
.addField(`Bağlantılar ®`,` [Destek Sunucusu](https://discord.gg/5TcGRH9) • [Destekle](https://beyefendi.glitch.me)`)
.setFooter(`${message.author.username} tarafından istendi.`,`${message.author.displayAvatarURL}`)
.setTimestamp()
message.channel.send(embed)
}
// KAYIT
if(args[0] === "kayıt") {
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
}
// KORUMA
if(args[0] === "koruma") {
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
}
// GENEL
if(args[0] === "genel") {
	const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Beyefendi | Yardım Menüsü ')
.setDescription(`**-afk** » AFK olmanızı sağlar.\n**-davet** » Botun davet linkini atar.\n**-istatistik** » Botun istatistiğini atar.\n**-kullanıcıbilgi** » Kullanıcının bilgisini gösterir.\n**-say** » Sunucuda kaç kişi olduğunu gösterir.\n**-yetkilerim** » Yetkilerinizi gösterir.\n**-öneri** » Bize öneride bulunmanızı sağlar.\n**-yenilikler** » Bota eklenmiş yenilikleri gösterir.\n**-prefix prefix/sıfırla** » Botun prefixini değiştirmeye yarar.`)
.setTimestamp()
.setThumbnail(client.user.avatarURL)
.addBlankField()
.addField(`Bağlantılar ®`,` [Destek Sunucusu](https://discord.gg/5TcGRH9) • [Destekle](https://beyefendi.glitch.me)`)
.setFooter(`${message.author.username} tarafından istendi.`,`${message.author.displayAvatarURL}`)
.setTimestamp()
message.channel.send(embed)
}
// SİSTEMLER
if(args[0] === "sistemler") {
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
}
};
exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['y', 'yardım'], 
  permLevel: 0 
};

exports.help = {
  name: 'yyardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};