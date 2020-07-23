const Discord = require('discord.js');
const ayarlar = require('../../ayarlar.json');
const db = require('quick.db');

exports.run = async(client, message, args) => {

   let kullanıcı = message.mentions.users.first() || client.users.get(args[0]) 
      if(!kullanıcı) return message.channel.send(`<a:iptal:722904688969777202> **Belirttiğin kullanıcı bulunamadı!**`)

 let toplamuyarı = await db.fetch(`uyarı.${kullanıcı.id+message.guild.id}`)
   if (db.fetch(`uyarı.${kullanıcı.id+message.guild.id}`) == null) return  message.channel.send('<a:tik2:722947649728413766>'+kullanıcı+' **isimli kullanıcının toplam uyarısı:** `0`')
    message.channel.send('<a:tik2:722947649728413766>'+kullanıcı+' **isimli kullanıcının toplam uyarısı:** `'+toplamuyarı+'`')
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['u-b','warns','uyarılar'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'uyarı-bak',
    description: 'Türkiyenin Saatini Gösterir',
    usage: 'gç'
  };