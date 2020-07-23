const Discord = require('discord.js');

exports.run = (client, message, args) => {

     if(!message.member.hasPermission("MANAGE_EMOJIS")) return message.channel.send("Bu komutu kullanabilmek için `Emojileri yönet yetkisine sahip olmalısın`")

     let emojiAd = args[0]
     let emojiUrl = args[1]


     if(!emojiAd) return message.reply("Lütfen kaydedilecek emoji adı belirtin")
     if(!emojiUrl) return message.reply("Lütfen kaydedilecek emojinin urlsini girin")

     message.guild.createEmoji(args[1], args[0], null ,`${message.author.tag}Emoji oluşturuldu ${emojiAd}`)
     .then(emo => {
        const basari = new Discord.RichEmbed()
        .setDescription(`:white_check_mark: **\`${emo.name}\`** ${emo} Adlı emoji başarıyla oluşturuldu`)
        return message.channel.send(basari)
     })
     .catch((err) => {message.channel.send(`:x: Hata \n ${err}`)})
    }

    exports.conf = {
       enabled: true,
       guildOnly: false,
       aliases : [],
       permlevel: 0
    };

    exports.help = {
      name: 'emoji-oluştur'
    }