const Discord = require("discord.js");
exports.run = (client, message, args) => {
  //komut dosyasının içindeki bileşenler

  let kullanıcı = message.mentions.users.first();
  let yetkili = message.member.user.username;
  let kanal = message.channel.id;
  var hata1 = new Discord.RichEmbed()
    .setTitle("**Hata** :warning:")
    .setDescription("Lütfen ismi belirlenecek kullanıcıyı seçin.")
    .setFooter("-isim @kullanıcı <isim> <yaş>")
    .setColor("RED");

  var hata2 = new Discord.RichEmbed()
    .setTitle("**Hata** :warning:")
    .setDescription(
      "Lütfen **" + kullanıcı + "** adlı kullanıcıya verilecek ismi belirtin."
    )
    .setFooter(".isim @kullanıcı <isim> <yaş>")
    .setColor("RED");
  var hata3 = new Discord.RichEmbed()
    .setTitle("**Hata** :warning:")
    .setDescription(
      '**"isim"** adlı komutu kullanabilmek için,"Kullanıcıları Yönet" yetkisine sahip olman gerekiyor'
    )
    .setColor("RED");
  var hata4 = new Discord.RichEmbed()
    .setTitle("**Hata** :warning:")
    .setDescription(
      "Lütfen **" + kullanıcı + "** adlı kullanıcıya verilecek yaşı belirtin."
    )
    .setFooter("-isim @kullanıcı <isim> <yaş>")
    .setColor("RED");
  message.guild.member(kullanıcı).setNickname(args[1] + " | " + args[2]);
  if (!kullanıcı) return message.channel.sendEmbed(hata1);
  if (!args[1]) return message.channel.sendEmbed(hata2);
  if (!args[2]) return message.channel.sendEmbed(hata4);
};
exports.conf = {
  enabled: true, //komut aktif mi?
  guildOnly: false,
  aliases: [], //başka kullanım şekilleri
  permLevel: 0 //prem leveli
};

exports.help = {
  name: "isim", // komut ismi
  description: "isim ayarla", //komut açıklaması
  usage: "isim" //komut kullanım şekili
};
