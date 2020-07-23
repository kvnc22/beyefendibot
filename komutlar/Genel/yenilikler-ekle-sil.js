const Discord = require("discord.js");
const db = require("quick.db")
const bot = new Discord.Client();
const ayarlar = require("../../ayarlar.json");

module.exports.run = async (client, message, args) => {
       
  let codeming = message.channel

    if (message.author.id !== ayarlar.sahip)
      return message.channel.send(
        "`Bu Komutu Sadece Sahibim Kullanabilir`"
      );

 if (!args[0]) return codeming.send("Bir Tür Girmedin")

    if (args[0] == "ekle") {
      let ceadam = args.slice(1).join(" "); 
      if (!ceadam)
        return message.channel.send(
          `Yenilik Girmedin `
        );

     
      const embed = new Discord.RichEmbed()
        .setThumbnail(client.user.avatarURL)
        .setFooter("Beyefendi")
        .setDescription(
          `Yenilik Eklendi Görmek İçin **${ayarlar.prefix}yenilik**`
        );
      codeming.send(embed);

      db.set(`yenilik`, ceadam);
    }

    if (args[0] == "kaldır") {
      const embed = new Discord.RichEmbed()
        .setThumbnail(client.user.avatarURL)
        .setFooter("Beyefendi")
        .setDescription(
          `Bütün Yenilikleri Kaldırdım`
        );
      codeming.send(embed);

      db.delete(`yenilik`);
 }

};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: "yenilikler",
  description: "By Muhammed",
  usage: "taslak"
}; 