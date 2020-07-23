const Discord = require('discord.js');
const { stripIndents } = require('common-tags');

exports.run = (client, msg, args) => {
  let iyi = '<:yesil:725081515431559238>'
  let kötü = '<:kirmizi:725081658444742677>'
let x;
    let x2;
    let x3;
    let x4;
    let x5;
    let x6;
    let x7;
    let x8;
    let x9;
    let x10;
    let x11;
    
    //yönetici
    if (msg.member.hasPermission("ADMINISTRATOR")) x = iyi
    if (!msg.member.hasPermission("ADMINISTRATOR")) x = kötü
    
    //Denetim kaydı
    if (msg.member.hasPermission("VIEW_AUDIT_LOG")) x2 = iyi
    if (!msg.member.hasPermission("VIEW_AUDIT_LOG")) x2 = kötü
    
    //Sunucuyu yönet
    if (msg.member.hasPermission("MANAGE_GUILD")) x3 = iyi
    if (!msg.member.hasPermission("MANAGE_GUILD")) x3 = kötü
    
    //Rolleri yönet
    if (msg.member.hasPermission("MANAGE_ROLES")) x4 = iyi
    if (!msg.member.hasPermission("MANAGE_ROLES")) x4 = kötü
    
    //Kanalları yönet
    if (msg.member.hasPermission("MANAGE_CHANNELS")) x5 = iyi
    if (!msg.member.hasPermission("MANAGE_CHANNELS")) x5 = kötü
    
    //üyeleri at
    if (msg.member.hasPermission("KICK_MEMBERS")) x6 = iyi
    if (!msg.member.hasPermission("KICK_MEMBERS")) x6 = kötü
    
    //üyeleri yasakla
    if (msg.member.hasPermission("BAN_MEMBERS")) x7 = iyi
    if (!msg.member.hasPermission("BAN_MEMBERS")) x7 = kötü
    
    //mesajları yönet
    if (msg.member.hasPermission("MANAGE_MESSAGES")) x8 = iyi
    if (!msg.member.hasPermission("MANAGE_MESSAGES")) x8 = kötü
    
    //kullanıcı adlarını yönet
    if (msg.member.hasPermission("MANAGE_NICKNAMES")) x9 = iyi
    if (!msg.member.hasPermission("MANAGE_NICKNAMES")) x9 = kötü
    
    //emojileri yönet
    if (msg.member.hasPermission("MANAGE_EMOJIS")) x10 = iyi
    if (!msg.member.hasPermission("MANAGE_EMOJIS")) x10 = kötü
    
    //webhookları yönet
    if (msg.member.hasPermission("MANAGE_WEBHOOKS")) x11 = iyi
    if (!msg.member.hasPermission("MANAGE_WEBHOOKS")) x11 = kötü
    
  
const embed = new Discord.RichEmbed()
.setDescription(`
${x} Yönetici\n
${x2} Denetim Kaydını Görüntüle\n
${x3} Sunucuyu Yönet\n
${x4} Rolleri Yönet\n
${x5} Kanalları Yönet\n
${x6} Üyeleri At\n
${x7} Üyeleri Yasakla\n
${x8} Mesajları Yönet\n
${x9} Kullanıcı Adlarını Yönet\n
${x10} Emojileri Yönet\n
${x11} Webhook'ları Yönet\n
`)
    msg.channel.send(embed)
      /*stripIndents`
    \`\`\`diff
    ${x} Yönetici
${x2} Denetim Kaydını Görüntüle
${x3} Sunucuyu Yönet
${x4} Rolleri Yönet
${x5} Kanalları Yönet
${x6} Üyeleri At
${x7} Üyeleri Yasakla
${x8} Mesajları Yönet
${x9} Kullanıcı Adlarını Yönet
${x10} Emojileri Yönet
${x11} Webhook'ları Yönet
\`\`\`
   `)*/
  msg.channel.send("```md\n# Başında \"-\" olanlar o yetkiye sahip olunmadığını gösterir. \n# Başında \"+\" olanlar o yetkiye sahip olunduğunu gösterir. \n```")
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['izinlerim'],
  permLevel: 0,
    kategori: "kullanıcı"
};

exports.help = {
  name: 'yetkilerim',
  description: 'Komutu kullandığınız sunucudaki yetkilerinizi/izinlerinizi gösterir.',
  usage: 'yetkilerim'
};