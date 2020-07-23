const Discord = require('discord.js');

exports.run = (client, message, args) => {

    let user = message.mentions.users.first() || message.author

    const avatar = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(user.username + "'in profil fotoğrafı (avatarı):")
    .setTitle("Linke gitmek için tıkla")
    .setURL(user.avatarURL)
    .setImage(user.avatarURL)
    .setFooter(client.user.username + " | Avatar")
    .setTimestamp()
    message.channel.send(avatar)
console.log(`Avatar ${message.author.username} Tarafından kullanıldı`)
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ["pp","profil-foto","profil-fotoğraf"],
	permLevel: 0,
	kategori: 'kullanıcı'
}

exports.help = {
	name: 'avatar',
	description: 'Etiketlediğiniz kullanıcının avatarını gösterir.',
	usage: 'avatar'
}