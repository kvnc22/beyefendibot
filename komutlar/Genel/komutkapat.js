const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require("../../ayarlar.json")
const db = require("quick.db")
const ms = require('parse-ms')
exports.run = async(client, codeming, args) => {

if(codeming.author.id !== ayarlar.sahip) return codeming.reply("**Bu komutu sadece sahibim kullanabilir!**")


let cmd = args[0]
let neden = args.slice(1).join(" ")
if(!cmd) return codeming.channel.send("**Lütfen bir komut ismi gir.**")
if(!client.commands.get(cmd))  return codeming.channel.send("**Doğru bir komut ismi girdiğine emin ol!**")

let veri = await db.fetch(`kbakım_${cmd}`)
  
 if(veri) {
   
codeming.channel.send("`"+cmd+"` **adlı komut bakım modundan çıkarıldı!**") 

 db.delete(`kbakım_${cmd}`)  
     
 } else {
   
if(!neden) neden = "Sebep belirtilmedi."   

codeming.channel.send("`"+cmd+"` **adlı komutum ** `"+neden+"` ** sebebi ile bakıma alındı! Artık kimse bu komutu siz açana kadar kullanamayacak.**")   

db.set(`kbakım_${cmd}`, neden)   
 } 
  
  
  
} 


// CODEMİNG!
exports.conf = {
enabled: true, //Komutun Aktif Olup Olmamasını Ayarlarsınız! true: Aktif | false: Kapalı
guildOnly: false, //Komutun Sunucu Dışında Aktif Olup Olmamasını Ayarlarsınız! true: Aktif | false: Kapalı
aliases: [], //Ekstra Komut Anahtarları Gire Bilirsiniz! ["Anahtar-ismi"] Gibi
permLevel: 0 //Kullanım Seviyelerini Ayarlarsınız 0 Herkes Kullana Bilir Demektir!
};

exports.help = {
name: 'komut-bakım',
description: 'Komutun Açıklaması',
usage: 'komut-bakım'
}