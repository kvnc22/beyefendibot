const Discord = require('discord.js');
const db = require('quick.db');
const moment = require('moment')
exports.run = async(client, message, args, miran) => { 
   
   let msg = message;
   let user = msg.mentions.users.first() || msg.author;
  
   let kbilgi = {};

   kbilgi.avatar = user.displayavatarURL
   kbilgi.id = user.id
   kbilgi.kimlik = user.username
   kbilgi.tag = user.discriminator
   kbilgi.oyun = msg.guild.members.get(user.id).user.presence.game || "Şuanda bir oyun oynamıyor."
   kbilgi.sonmesaj = user.lastMessage || "Son yazılan mesajı bulunamadı."

   kbilgi.bot = user.bot.toString()
   .replace("true", `Evet`)
   .replace("false", `Hayır`)

   kbilgi.durum = user.presence.status.toString()
    .replace("online", `Çevrimiçi`)   
    .replace("idle", `Boşta`)
    .replace("dnd", `Rahatsız Etmeyin`)
    .replace("offline", `Çevrimdışı`)
   
   kbilgi.kurulmatarih = moment.utc(msg.guild.members.get(user.id).user.createdAt).format('**YYYY** [Yılında] MMMM [Ayında] dddd [Gününde] (**DD/MM/YYYY**)')
    .replace("January", `**Ocak**`)
    .replace("February", `**Şubat**`)
    .replace("March", `**Mart**`)
    .replace("April", `**Nisan**`)
    .replace("May", `**Mayıs**`)
    .replace("June", `**Haziran**`)
    .replace("July", `**Temmuz**`)
    .replace("August", `**Ağustos**`)
    .replace("September", `**Eylül**`)
    .replace("October", `**Ekim**`)
    .replace("November", `**Kasım**`)
    .replace("December", `**Aralık**`)
    .replace("Monday", `**Pazartesi**`)
    .replace("Tuesday", `**Salı**`)
    .replace("Wednesday", `**Çarşamba**`)
    .replace("Thursday", `**Perşembe**`)
    .replace("Friday", `**Cuma**`)
    .replace("Saturday", `**Cumartesi**`)
    .replace("Sunday", `**Pazar**`)
   let guven;
   if(kbilgi.kurulmatarih < 30) guven = "**Güvenilir değil!**"
   else guven = "**Güvenilir!**" 
   
   kbilgi.sunucukatılma = moment.utc(msg.guild.members.get(user.id).joinedAt).format('**YYYY** [Yılında] MMMM [Ayında] dddd [Gününde] (**DD/MM/YYYY**)')
    .replace("January", `**Ocak**`)
    .replace("February", `**Şubat**`)
    .replace("March", `**Mart**`)
    .replace("April", `**Nisan**`)
    .replace("May", `**Mayıs**`)
    .replace("June", `**Haziran**`)
    .replace("July", `**Temmuz**`)
    .replace("August", `**Ağustos**`)
    .replace("September", `**Eylül**`)
    .replace("October", `**Ekim**`)
    .replace("November", `**Kasım**`)
    .replace("December", `**Aralık**`)
    .replace("Monday", `**Pazartesi**`)
    .replace("Tuesday", `**Salı**`)
    .replace("Wednesday", `**Çarşamba**`)
    .replace("Thursday", `**Perşembe**`)
    .replace("Friday", `**Cuma**`)
    .replace("Saturday", `**Cumartesi**`)
    .replace("Sunday", `**Pazar**`)     


    let embed = new Discord.RichEmbed()
    .setAuthor(user.tag, user.avatarURL)
    .setThumbnail(message.author.avatarURL)
    .setDescription(`
    Kullanıcı Kimliği : ${kbilgi.kimlik}
    Kullanıcı ID : ${kbilgi.id}
    Kullanıcı Bot mu? : ${kbilgi.bot}
    Hesap Oluşturma Tarihi : ${kbilgi.kurulmatarih}
    Sunucuya Katılma Tarihi : ${kbilgi.sunucukatılma}
    Güvenilirlik : ${guven}
    Son gönderdiği mesaj : ${kbilgi.sonmesaj}

    Roller : ${msg.guild.members.get(user.id).roles.filter(r => r.name !== "@everyone").map(r => r).join(' **|** ') || "**Bu kullanıcıda bir rol yok.**"}

      `)
    .setFooter(`Kullanıcı Bilgi Sistemi`)
    .setTimestamp()
    message.channel.send(embed)
 };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["kb"], 
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı-bilgi',
  description: 'taslak', 
  usage: 'seviye'
};