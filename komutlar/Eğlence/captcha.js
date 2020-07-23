const Discord = require('discord.js')
const ayarlar = require('../../ayarlar.json')
const db = require('quick.db')
exports.run = (client,message,args ) => {
    
    let prefix = ayarlar.prefix
    user = message.author
    let yazı1 = args.slice(0).join(' ');
    let gold = db.fetch(`${user.id}.golduye`)
    if(!gold) return message.channel.send('**<a:iptal:722904688969777202> Bu komut yalnızca gold üyeler içindir.**')
    if(!yazı1) return message.channel.send(new Discord.RichEmbed().setColor('RED').setDescription(`Yazıyı Yazmayı Unuttunuz! Doğru Kullanım Şekli ${prefix}captcha <yazı1> <yazı2>`))
   let hakan = `https://api.alexflipnote.dev/captcha?text=${yazı1}`
    
    message.channel.send(new Discord.Attachment(hakan, "hakansupreme.png"))
    
}

exports.conf = {
    enabled: true,
    guildOnly: false, 
    aliases: ['robotdoğrulaması'],
    permLevel: 0
}

exports.help = {
    name: 'captcha',
    description: 'Yazdığınız Mesajı Supreme Yapar',
    usage: '!!supreme <yazı>'
}