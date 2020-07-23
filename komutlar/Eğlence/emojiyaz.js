exports.run = function(bot, msg, args) {
    if (args.length === 0) return msg.delete()

    let text = args.join(' ').toLowerCase().split('')

    let message = ''
    for (let i = 0; i < text.length; i++) {
        if (text[i] === ' ') message += text[i]
        else message = `${message} :regional_indicator_${text[i]}:`
    }

    msg.channel.send(message)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'emojiyaz',
    description: 'Emoji ile yazar.',
    usage: 'emojiyaz'
};