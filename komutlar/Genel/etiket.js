const Discord = require('discord.js')
const ayarlar = require('../../ayarlar.json')
const db = require('quick.db')
exports.run = (client,message,args ) => {
    if(message.author.id !== "306499839305187329") return message.reply(`**Bu özellik yalnızca sahibime özeldir.**`)
    kivanc = args[0]
    eda = args.slice(1).join(' ');
    if(!eda) eda = "Sebep Belirtilmedi!"
    if(kivanc === "aç") {
        let beyefendi = new Discord.RichEmbed()
    .setTitle('Etiket Engel')
    .setDescription(`**Kurucum şuanda etiket istemiyor özelliğini açtı!\nSebep: _${eda}_**\n Lütfen etiket atmayınız.`)
    .setTimestamp()
    .setColor('RED')
        db.set(`anaetiket_${message.author.id}`, kivanc)
        message.channel.send(beyefendi)
        db.set(`etiketsebep_${message.author.id}`, eda)
    }
    if(kivanc === "kapat") {
    let beyefendi = new Discord.RichEmbed()
    .setTitle('Etiket Engel')
    .setDescription(`**Etiket engel kapatıldı.\n Artık herkes etiket atabilecek.**`)
    .setTimestamp()
    .setColor('RED')
        db.delete(`anaetiket_${message.author.id}`)
        message.channel.send(beyefendi)
    }
}

exports.conf = {
    enabled: true,
    guildOnly: false, 
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: 'etiket',
    description: 'Yazdığınız Mesajı Supreme Yapar',
    usage: '!!supreme <yazı>'
}