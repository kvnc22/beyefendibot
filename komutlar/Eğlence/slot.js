const Discord = require('discord.js');
exports.run = async (client, message, args) => {
    if (!message.guild.member(client.user).hasPermission("SEND_MESSAGES")) return message.author.send('Mesaj gönderme yetkim yok!');

    let slots = ["🍎", "🍌", "🍒", "🍓", "🍈","🍑"];
    let result1 = Math.floor((Math.random() * slots.length));
    let result2 = Math.floor((Math.random() * slots.length));
    let result3 = Math.floor((Math.random() * slots.length));
    let name = message.author.displayName;
    let aicon = message.author.displayAvatarURL;

    if (slots[result1] === slots[result2] && slots[result3]) {
        let wEmbed = new Discord.RichEmbed()
            .setFooter("Kazandın zenginsin!", aicon)
            .setTitle('🎰 Slots 🎰')
            .addField('Result:', slots[result1] + slots[result2] + slots[result3], true)
            .setColor("#f4e842");
        message.channel.send(wEmbed);
    } else {
        let embed = new Discord.RichEmbed()
            .setFooter('Kaybettin!', aicon)
            .setTitle('🎰Slots🎰')
            .addField('Sonuç', slots[result1] + slots[result2] + slots[result3], true)
            .setColor("#f4e842");
        message.channel.send(embed);
    }

}

exports.conf = {
    aliases: []
};

exports.help = {
    name: 'kumar',
    description: 'Slot Machine',
    usage: 'kumar'
}