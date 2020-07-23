const Discord = require("discord.js");
const db = require('quick.db');
const ayarlar = require('../../ayarlar.json');

exports.run = async(client, msg, args) => {

 //let prefix = await db.fetch(`prefix_${msg.guild.id}`);
  //let p_prefix;
  //if (prefix == null) p_prefix = ayarlar.prefix
  //else p_prefix = `${prefix}`

if (msg.channel.type !== "text") return;
if (!msg.channel.permissionsFor(msg.member).has("MANAGE_GUILD")) return msg.channel.send("Bu komutu sadece `MANAGE_GUILD` yetkisine sahip olanlar kullanabilir.");
const limit = args[0] ? args[0] : 0;
if (limit > 120) return msg.channel.send("Süre limiti maksimum 120 saniye olabilir.");

var request = require('request');
request({
    url: `https://discordapp.com/api/v6/channels/${msg.channel.id}`,
    method: "PATCH",
    json: {
        rate_limit_per_user: limit
    },
    headers: {
        "Authorization": `Bot ${client.token}`
    },
});

if (limit == 0) return msg.channel.send("Yavaş mod kaldırıldı :ok_hand: \nTekrar açabilmek için "+ayarlar.prefix+"slowmode **<miktar>**");
return msg.channel.send(`Üyeler bundan sonra **${limit}** saniye aralıklarla mesaj gönderebilecek.`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["slowmode" ,"yavaş mod"],
  permLevel: 0
};

exports.help = {
  name: 'slowmode',
  description: 'İstediğiniz Kişiye sarılırsınız.',
  usage: 'sarıl'
};