const Discord = require('discord.js')
const ayarlar = require('../../ayarlar.json')
const db = require('quick.db')
exports.run = (client,message,args ) => {
    
    let prefix = ayarlar.prefix
    user = message.author
    let yazı1 = args[0]
    let yazı2 = args[1]
    let gold = db.fetch(`${user.id}.golduye`)
    if(!gold) return message.channel.send('**<a:iptal:722904688969777202> Bu komut yalnızca gold üyeler içindir.**')
    if(!yazı1) return message.channel.send(new Discord.RichEmbed().setColor('RED').setDescription(`Yazıyı Yazmayı Unuttunuz! Doğru Kullanım Şekli ${prefix}hubyazı <yazı1> <yazı2>`))
    if(!yazı2) return message.channel.send(new Discord.RichEmbed().setColor('RED').setDescription(`Yazıyı Yazmayı Unuttunuz! Doğru Kullanım Şekli ${prefix}hubyazı <yazı> <yazı2>`))
   let hakan = `https://api.alexflipnote.dev/pornhub?text=${yazı1}&text2=${yazı2}`
    
    message.channel.send(new Discord.Attachment(hakan, "hakansupreme.png"))
    
}

exports.conf = {
    enabled: true,
    guildOnly: false, 
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: 'hubyazı',
    description: 'Yazdığınız Mesajı Supreme Yapar',
    usage: '!!supreme <yazı>'
}