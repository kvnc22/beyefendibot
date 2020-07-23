const Discord = require('discord.js');
const ayarlar = require('../../ayarlar.json');
const db = require('quick.db');

exports.run = async(client, message, args) => {
  
  if(message.author.id !== ayarlar.sahip) return message.channel.send("❌ Bu komutu sahibim kullanabilir.")
  
  if(!args[0]) return message.channel.send("❌ Lütfen bir komut belirt!")
  let komut = client.commands.get(args[0])
  if(!komut) return message.channel.send("❌ Böyle bir komut bulunamadı!")
  if(db.fetch(`komut-süre_${komut.help.name}`)) {
  message.channel.send("✅ **"+komut.help.name+"** isimli komuttaki **"+db.fetch(`komut-süre_${komut.help.name}`)/1000+"** saniyelik süre kaldırıldı.") 
  db.delete(`komut-süre_${komut.help.name}`)
  return  
  }
  let süre = args[1]
  if(!süre) return message.channel.send("❌ Lütfen bir süre belirt")
  if(isNaN(süre)) return message.channel.send("❌ Süreyi saniye olarak girer misin?")
  
  db.set(`komut-süre_${komut.help.name}`, süre*1000)
  message.channel.send("✅ **"+komut.help.name+"** isimli komuta **"+süre+"** saniyelik cooldown uygulandı. ")
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['süre'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'cooldown',
    description: 'Türkiyenin Saatini Gösterir',
    usage: 'gç'
  };