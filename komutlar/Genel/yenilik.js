const Discord = require("discord.js");
const db = require("quick.db")
const bot = new Discord.Client();
const ayarlar = require("../../ayarlar.json");

module.exports.run = async (client, message, args) => {



  var yenilik = await db.fetch(`yenilik`);   
let y1;
if(yenilik === null) y1 = 'Beyefendi Ekibi yenilik Getirmedi'
else y1 = yenilik
    

    let codeming = message.channel

const embed = new Discord.RichEmbed()
.setTitle("Beyefendi Yenilikler")
.setDescription(`\n\n \`Yenilikler\` \n\n **${y1}** `)
.setTimestamp()
.setThumbnail(client.user.avatarURL)
.addBlankField()
.addField(`Bağlantılar ®`,` [Destek Sunucusu](https://discord.gg/5TcGRH9) • [Destekle](https://beyefendi.glitch.me)`)
.setFooter(`${message.author.username} tarafından istendi.`,`${message.author.displayAvatarURL}`)
codeming.send(embed)



};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: "yenilik",
  description: "By Muhammed",
  usage: "taslak"
}; 