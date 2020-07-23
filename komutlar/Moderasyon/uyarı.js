const Discord = require('discord.js');
const ayarlar = require('../../ayarlar.json');
const db = require('quick.db');

exports.run = async(client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('**Uygun yetki bulunamadı!**')
   let kullanıcı = message.mentions.users.first() || client.users.get(args[0]) 
   let sebep = args.slice(1).join(' ');
   if(!kullanıcı) return message.channel.send(`<a:iptal:722904688969777202> **Belirttiğin kullanıcı bulunamadı!**`)
    if(!sebep) return message.channel.send(`<a:iptal:722904688969777202> **Lütfen sebep giriniz!**`)
      let uyarı = await db.add(`uyarı.${kullanıcı.id+message.guild.id}`, 1) 
    let toplamuyarı = await db.fetch(`uyarı.${kullanıcı.id+message.guild.id}`)
       let kanal = await db.fetch((`uyarıkanal_${message.guild.id}`))
    client.channels.get(kanal).send('<a:tik2:722947649728413766>'+kullanıcı+' **isimli kullanıcı '+message.author+' adlı yetkili tarafından `'+sebep+'` sebebiyle uyarıldı. Toplam uyarısı:**`'+toplamuyarı+'`')
    message.channel.send('<a:tik2:722947649728413766>'+kullanıcı+' **isimli kullanıcı uyarıldı. Toplam uyarısı:** `'+toplamuyarı+'`')
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['u','warn'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'uyar',
    description: 'Türkiyenin Saatini Gösterir',
    usage: 'gç'
  };