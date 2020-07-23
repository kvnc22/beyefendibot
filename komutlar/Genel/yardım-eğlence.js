const Discord = require('discord.js');
const ayarlar = require('../../ayarlar.json');
const db = require('quick.db')
exports.run = function(client, message) {
	let user = message.author
	let x;
	let x2;
	let veri = db.fetch(`${user.id}.golduye`)
	  let iyi = '<:yesil:725081515431559238>'
  let kötü = '<:kirmizi:725081658444742677>'
  let olumlu = 'Olumlu'
  let olumsuz = 'Olumsuz'
if(veri) x = iyi
	if(!veri) x = kötü
		if(veri) x2 = olumlu
	if(!veri) x2 = olumsuz
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Beyefendi | Yardım Menüsü ')
.setDescription(`**-alivefaol** » Avatarınızda Ali Vefa olmanızı sağlar.\n**-ara155** » 155'i aramanızı sağlar.\n**-ascii** » Yazdığınız kelimeyi ascii formatında yazar.\n**-atamınsözleri** » Atatürk'ün sözlerini atar.\n**-avatar** » Avatarınızı atar.\n**-sevgiölçer** » Etiketlediğiniz kişi ile aranızda ki ilişkiyi ölçer.\n**-banner** » Yazdığınız kelimeleri banner haline dönüştürür.\n**-corona** » Corona istatistiklerini atar.\n**-dizifilmöneri** » Karışık bir şekilde dizi ve film önerir.\n**-döviz** » Döviz kurunu gösterir.\n**-emojiyaz** » Emoji harfleri ile yazmanızı sağlar.\n**-fakemesaj** » Etiketlediğiniz kullanıcının fake bir mesajını yazar.\n**-fal** » Fal bakar.\n**-hacked** » Fotoğrafınıza HACKED ibaresi koyar.\n**-havadurumu** » Belirttiğiniz ilin hava durumunu gösterir.\n**-kafadansi** » Etiketlediğiniz kişi ile kafa dansı yaparsınız.\n**-karıştır** » Yazdığınız kelimenin harflerini karıştırır.\n**-pixel** » Avatarınızı pixel pixel yapar.\n**-piyango** » Piyango çeker.\n**-renksiz** » Avatarınızı renksiz hale getirir.\n**-resimçiz** » Resim çizmenizi sağlar.\n**-sayıtahmin** » Botun tuttuğu bir sayıyı bulmaya çalışırsınız.\n**-kumar** » Slot makinesinde kumar oynarsınız.\n**-sorusor** » Bota soru sorarsınız rastgele cevaplar verir.\n**-wiki** » Wikipedia da araştırma yaparsınız.\n**-mcskin** » Minecraft skininizi atar.\n**-tavşan** » Tavşana bir şey yazdırırsınız.`)
.setTimestamp()
.setThumbnail(client.user.avatarURL)
.addBlankField()
.addField(`Bağlantılar ®`,` [Destek Sunucusu](https://discord.gg/5TcGRH9) • [Destekle](https://beyefendi.glitch.me)`)
.setFooter(`${message.author.username} tarafından istendi.`,`${message.author.displayAvatarURL}`)
.setTimestamp()
message.channel.send(embed)
const embed2 = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Beyefendi | Eğlence Gold Özel Menüsü ')
.setDescription(`**-supreme <yazı>** » İstediğiniz yazıyı supreme logosuna çevirir.\n**-hubyazı <yazı> <yazı2>** » İstediğiniz yazıları hub yazısına çevirir.\n**-başarım <başarım metni>** » İstediğiniz metni Minecraft başarımı şeklinde yazar.\n**-drake <yazı> <yazı2>** » İstediğiniz yazıları Drake memes'e çevirir.\n\n\n**Bu komutlar sadece gold üyelere özeldir! Gold üye olabilmek için [Destek Sunucusu](https://discord.gg/5TcGRH9) discord adresine gelip kurucu ile görüşünüz.**`)
.addField('Kullanıcı Gold Üyelik Durumu',`**${x2}** ${x}`)
.setTimestamp()
.setThumbnail(client.user.avatarURL)
.addBlankField()
.addField(`Bağlantılar ®`,` [Destek Sunucusu](https://discord.gg/5TcGRH9) • [Destekle](https://beyefendi.glitch.me)`)
.setFooter(`${message.author.username} tarafından istendi.`,`${message.author.displayAvatarURL}`)
.setTimestamp()
message.channel.send(embed2)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['ye'], 
  permLevel: 0 
};

exports.help = {
  name: 'eğlence',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};