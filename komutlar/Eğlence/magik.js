const Discord = require('discord.js')
const ayarlar = require('../../ayarlar.json')
const db = require('quick.db')
exports.run = (client,message,args ) => {
    
    let prefix = ayarlar.prefix
    let user = message.mentions.users.first() || message.author
    let resim = user.avatarURL
    let gold = db.fetch(`${user.id}.golduye`)
    if(!gold) return message.channel.send('**<a:iptal:722904688969777202> Bu komut yalnızca gold üyeler içindir.**')
   let beyefendi = `https://api.alexflipnote.dev/filter/magik?image=${resim}`
    
    message.channel.send(new Discord.Attachment(beyefendi, "beyefendimagik.png"))
    
}

exports.conf = {
    enabled: true,
    guildOnly: false, 
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: 'magik',
    description: 'magik',
    usage: 'magik <yazı>'
}