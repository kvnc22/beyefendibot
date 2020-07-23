const Discord = require('discord.js');
const ayarlar = require('../../ayarlar.json');
const db = require('quick.db');

exports.run = async(client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('**Uygun yetki bulunamadı!**')
   let kullanıcı = message.mentions.users.first() || client.users.get(args[0]) 
   let sebep = args[1]
   if(isNaN(sebep)) return message.channel.send('**Lütfen sayı dışında başka bir değer girmeyiniz!**')
   if(!kullanıcı) return message.channel.send(`<a:iptal:722904688969777202> **Belirttiğin kullanıcı bulunamadı!**`)
    if(!sebep) return message.channel.send(`<a:iptal:722904688969777202> **Lütfen sayı giriniz!**`)
      let uyarı = await db.add(`uyarı.${kullanıcı.id+message.guild.id}`, -sebep) 
    let toplamuyarı = await db.fetch(`uyarı.${kullanıcı.id+message.guild.id}`)
    message.channel.send('<a:tik2:722947649728413766>'+kullanıcı+' **isimli kullanıcıdan `'+sebep+'` uyarı silindi. Toplam uyarısı:** `'+toplamuyarı+'`')
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['u-s','warndelete'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'uyarı-sil',
    description: 'Türkiyenin Saatini Gösterir',
    usage: 'gç'
  };