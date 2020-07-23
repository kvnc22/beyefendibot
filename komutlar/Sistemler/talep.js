const Discord = require('discord.js');

exports.run = (client, message, args) => {
 message.delete();
    message.guild.createChannel(`talep-${message.author.username}`, 'text').then(ch => {
        ch.overwritePermissions(message.member.roles.first(),{
            VIEW_CHANNEL: false,
        }).catch()
        message.guild.roles.forEach((role) => {
            if (role.hasPermission("ADMINISTRATOR")) {
                ch.overwritePermissions(role,{
                    VIEW_CHANNEL: true,
                }).catch()
                ch.overwritePermissions(message.author.id,{
                    VIEW_CHANNEL: true,
                }).catch()
            }
        })

        const embed = new Discord.RichEmbed()
        .setTitle(`» Hey ${message.author.username} !`)
        .setAuthor("» Beyefendi | Destek Sistemi")
        .setDescription("**Ekipimiz en kısa sürede sizinle beraber olacaktır !kapat yazarak destek talebini iptal edebilirsin. !**")
        .setFooter(' Beyefendi | Destek Sistemi', client.user.avatarURL)
        .setTimestamp()
        ch.send(embed).catch()
        ch.send("@everyone")
        ch.send("@here")
        ch.awaitMessages((msg)=> {
            if (msg.content === "!kapat") {
                ch.send("`Talebiniz iptal ediliyor...`").then(()=>{
                    setTimeout(()=> {
                        ch.delete().catch()
                    },1000)
                });
            }
        },{time:86400000})
    })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['talep'],
  permLevel: 0
};

exports.help = {
  name: 'talep',
  description: 'Destek talebi açar.',
  usage: 'prefix + talep'
};