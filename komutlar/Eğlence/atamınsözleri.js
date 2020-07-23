const Discord = require('discord.js');
const ayarlar = require('../../ayarlar.json');

exports.run = (client, message, params) => {
    var sans = ["Bütün ümidim gençliktedir.", "Ey yükselen yeni nesil, istikbal sizindir. Cumhuriyet'i biz kurduk, O'nu yükseltecek ve sürdürecek sizlersiniz.", "Ne mutlu Türküm diyene!", "Söz konusu olan vatansa, gerisi teferruattır.", "Yeni kuşak, en büyük cumhuriyetçilik dersini bugünkü öğretmenler topluluğundan ve onların yetiştirecekleri öğretmenlerden alacaktır.", "Öğretmenler! Cumhuriyet sizden düşünceleri hür, vicdanı hür, irfanı hür nesiller ister.", "Biz büyük bir inkılap yaptık. Memleketi bir çağdan alıp yeni bir çağa götürdük.", "Devrimin amacını kavramış olanlar sürekli olarak onu koruma gücüne sahip olacaklardır.", "Türk Milleti yeni bir iman ve kesin bir milli azim ile yeni bir devlet kurmuştur bu devletin dayandığı esaslar Tam Bağımsızlık ve Kayıtsız Şartsız Milli Egemenlikten ibarettir. Yeni Türkiye devletinin yapısının ruhu Milli Egemenliktir. Milletin Kayıtsız Şartsız Egemenliğidir...", "Türk çocuğu ecdadını tanıdıkça daha büyük işler yapmak için kendinde kuvvet bulacaktır.", "Yeni Türkiye Devleti temellerini süngüyle değil, süngünün de dayandığı ekonomi ile kuracaktır. Yeni Türkiye Devleti cihangir bir devlet olmayacaktır. Fakat yeni Türkiye Devleti bir ekonomi devleti olacaktır.", "Devrim yasası, eldeki yasaların üstündedir. Bizi öldürmedikçe, bizim kafalarımızdaki akımı boğmadıkça, başladığımız devrim ve yenilik bir an bile durmayacaktır. Bizden sonraki dönemlerde de böyle olacaktır.", "Ey yükselen yeni nesil, istikbal sizindir. Cumhuriyet'i biz kurduk, O'nu yükseltecek ve sürdürecek sizlersiniz.", "Ordularımızın kazandığı zafer, sizin ve sizin ordularınızın zaferi için yalnız zemin hazırladı... Gerçek zaferi siz kazanacak ve devam edeceksiniz ve mutlaka başarılı olacaksınız. ", "Milli egemenlik öyle bir nurdur ki, onun karşısında zincirler erir, taç ve tahtlar batar, mahvolur. Milletlerin esirliği üzerine kurulmuş müesseseler her tarafta yıkılmaya mahkumdurlar."];
    var sonuc = sans[Math.floor((Math.random() * sans.length))];
    const embed = new Discord.RichEmbed()
    .addField(`Saygıyla`, `${sonuc}`)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'atamınsözleri',
  description: '',
  usage: 'atamınsözleri'
};