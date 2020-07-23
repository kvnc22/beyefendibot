const Discord = require("discord.js")
const client = new Discord.Client()
const ayarlar = require('../../ayarlar.json');
const db = require('quick.db');

const moment = require('moment');

exports.run = async (client, message, args, func, msg) => {
             if (!message.member.hasPermission("ADMINISTRATOR")) {
  const bilgi = new Discord.RichEmbed()
  .setDescription('Bu komutu kullanabilmek için **Yönetici** iznine sahip olman gerek.')
  .setColor('RANDOM')
return message.channel.sendEmbed(bilgi).then(m => m.delete(150000)); return
       }
  let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
  let rolx = message.mentions.roles.first() || message.guild.roles.find(s => s.name === args[1]) || message.guild.roles.find(s => s.id === args[1])
    let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  if (!user) return message.reply('<a:iptal:722904688969777202> Hata! Rol alınacak kullanıcıyı etiketlemelisin veya idsini girmelisin. ')
  if (!rolx) return message.reply('<a:iptal:722904688969777202> Hata! Kullanıcıya verilecek rolü etiketlemelisin veya ismini girmelisin. ');
  
      if (user.highestRole.calculatedPosition > message.member.highestRole.calculatedPosition - 1) {
			return message.reply(`Kullanıcının rolleri senin rollerinden daha yüksek.`);
		}
  
  user.removeRole(rolx.id);
  
            
  
               const embed = new Discord.RichEmbed()
            .setColor("BLUE")
            .setAuthor(`${user.user.username} kullanıcısından rol alındı`, user.user.avatarURL)
            .setDescription(`<a:tik2:722947649728413766> **${user.user.tag}** isimli kullanıcıdan ${rolx} rolü alındı! <a:tik2:722947649728413766>`)
            .setThumbnail(message.author.avatarURL)
            .setTimestamp()
            .setFooter(client.user.username, client.user.avatarURL)
            return message.channel.send(embed)
 };

exports.conf = {
  enabled: true,
  guildOnly: true,
  kategori: 'yetkili',
  aliases: ['rolal'],
  permLevel: 0
};

exports.help = {
  name: 'rol-al',
  description: 'İstediğiniz kişiyi istediğiniz rolü verir.',
  usage: 'rol-ver [kullanıcı] [@rol]'
};