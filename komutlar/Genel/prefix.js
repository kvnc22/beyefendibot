const db = require('quick.db');

exports.run = (client, message, args, func) => {
  
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
  let preffix = db.fetch(`prefix_${message.guild.id}`)
  
    if(args[0] === "sıfırla") {
    if(!preffix) {
      message.channel.send(`**<a:iptal:722904688969777202> Prefix ayarlanmamış!**`)
      return
    }
    
    db.delete(`prefix_${message.guild.id}`)
    message.channel.send(`**<a:iptal:722904688969777202> Prefix başarıyla sıfırlandı. Mevcut prefix \`-\`**`)
    return
  }
  
  if (!args[0])
    return message.channel.send(`**<a:iptal:722904688969777202> Bir prefix girmelisin.**`)
  db.set(`prefix_${message.guild.id}`, args[0])
    message.channel.send(`**<a:iptal:722904688969777202> Prefix başarıyla \`${args[0]}\` olarak ayarlandı.**`)
  
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['prefix-ayarla'],
    permLevel: 0
};
  
  exports.help = {
    name: 'prefix',
    description: 'sunucunuza özel prefixinizi ayarlarsınız.',
    usage: 'prefix <prefix>'
};