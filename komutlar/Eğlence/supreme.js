const Discord = require('discord.js')
const ayarlar = require('../../ayarlar.json')
const db = require('quick.db')
exports.run = (client,message,args ) => {
    
    let prefix = ayarlar.prefix
    user = message.author
    let hakanyazı = args[0]
    let gold = db.fetch(`${user.id}.golduye`)
    if(!gold) return message.channel.send('**<a:iptal:722904688969777202> Bu komut yalnızca gold üyeler içindir.**')
    if(!hakanyazı) return message.channel.send(new Discord.RichEmbed().setColor('RED').setDescription(`Yazıyı Yazmayı Unuttunuz! Doğru Kullanım Şekli ${prefix}supreme <yazı>`))
    
   let hakan = `https://api.alexflipnote.dev/supreme?text=${hakanyazı}`
    
    message.channel.send(new Discord.Attachment(hakan, "hakansupreme.png"))
    
}

exports.conf = {
    enabled: true,
    guildOnly: false, 
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: 'supreme',
    description: 'Yazdığınız Mesajı Supreme Yapar',
    usage: '!!supreme <yazı>'
}