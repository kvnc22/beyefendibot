const Discord = require('discord.js')
const ayarlar = require('../../ayarlar.json')
const db = require('quick.db')
exports.run = (client,message,args ) => {

if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**Uygun yetki bulunamadı**`)
let kanal = message.mentions.channels.first();
//let kanal2 = kanal.id
let kullanıcı = message.mentions.users.first() || message.author
let link = args[1]
let platform = args[2]
let resim;
let twitch = 'https://blog.twitch.tv/assets/uploads/01-twitch-logo.jpg'
let dlive = 'https://www.pngitem.com/pimgs/m/622-6229188_watch-us-at-dlive-here-dlive-logo-transparent.png'
let youtube = 'https://etapes.com/app/uploads/2017/08/1504100047.jpg'
let instagram = 'https://www.elcedrobarcelona.com/wp-content/uploads/instagram-logo.png'
let uyarı = new Discord.RichEmbed()
  .setTitle('Yayın Duyuru Nasıl Kullanılır?')
  .setDescription(`**-yayın @kullanıcı <yayın linki> <platform>**`)
  .addField(`Aktif Platformlar`,`twitch\ndlive\nyoutube\ninstagram\n\n\n**DİKKAT! Platformları düzgün bir şekilde ve belirtilen biçimde yazmanız gerekir aksi takdirde olmaz!**`)
  .setColor("RED")
  .setFooter(`Beyefendi Yayın Sistemi`)  
  /*if(!kanal) return message.channel.send(uyarı)*/
    if(!kullanıcı) return message.channel.send(uyarı)
        if(!link) return message.channel.send(uyarı)
            if(!platform) return message.channel.send(uyarı)
if(platform === "twitch") resim = twitch
    if(platform === "dlive") resim = dlive
        if(platform === "youtube") resim = youtube
            if(platform === "instagram") resim = instagram
  let yayın = new Discord.RichEmbed()
  .setTitle(`**Şu anda yayındayız! Hemen Katıl!**`)
  .setDescription(`**Yayın Adresi\n${link}**\n**Hemen izlemek için [TIKLA](${link})**`)
  .setImage(resim)
  .setTimestamp()
  .setColor('PURPLE')
  .setFooter(`Beyefendi Yayın Sistemi`)
  message.channel.send(yayın)
}

exports.conf = {
    enabled: true,
    guildOnly: false, 
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: 'yayın',
    description: 'magik',
    usage: 'magik <yazı>'
}