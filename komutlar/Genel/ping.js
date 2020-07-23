const Discord = require('discord.js');
const db = require('quick.db');

const moment = require('moment');
require('moment-duration-format');
exports.run = async (client, message, args) => {
  let x;
  let iyi = '<:yesil:725081515431559238>'
  let kötü = '<:kirmizi:725081658444742677>'
  if(Math.round(client.ping) > 100) x = kötü
  if(Math.round(client.ping) < 100) x = iyi
   var olcum = await message.channel.send( '<a:olcum:725055660374491167> Ölçüm yapılıyor, lütfen bekleyiniz...');
 var sonuc = await message.channel.send( "<a:tik:722871613518905354> Veriler alındı...").then(msg => msg.delete(100))
     await olcum.edit( ` **Tepki Gecikmesi** \`${Math.round((sonuc.createdTimestamp - olcum.createdTimestamp - client.ping) )}\`**ms**\n **Bot Gecikmesi** \`${Math.round(client.ping)}\`**ms** ${x}`);
///
  
  
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Ping was here',
  usage: 'ping'
};