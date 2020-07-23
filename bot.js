const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
client.queue = new Map()
const chalk = require('chalk');
const fs = require('fs');
const Jimp = require('jimp');
const db = require('quick.db');
const moment = require('moment');
const request = require('node-superfetch');
require('./util/eventLoader')(client);

///////////
const http = require('http');
const path = require('path');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200)
  //response.sendFile(path.join(__dirname+'/index.html'))
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://beyefendi.glitch.me`);
}, 10000);
///////////HG

var cassieload = {
  adana:
    "https://cdn.discordapp.com/attachments/676052036734812170/676063512753340426/download.gif",
  bursa:
    "https://cdn.discordapp.com/attachments/676052036734812170/676062624336838676/download.gif"
};

//fake ayrıl katıl
client.on("message", async message => {
  if (message.content === "-fakegir") {
    // - yerine prefixi yaz
    client.emit(
      "guildMemberAdd",
      message.member || (await message.guild.fetchMember(message.author))
    );
  }
});
client.on("message", async message => {
  if (message.content === "-fakeçık") {
    // - yerine prefixi yaz
    client.emit(
      "guildMemberRemove",
      message.member || (await message.guild.fetchMember(message.author))
    );
  }
});
//TAG
client.on('guildMemberAdd', async member => {
  
  let tag = await db.fetch(`tagK_${member.guild.id}`)
  let kanal = await db.fetch(`kanalK_${member.guild.id}`)
  
 if (!tag) return
  if (!kanal) return
 member.setNickname(`${tag} | ${member.user.username}  `); 
  client.channels.get(kanal).send(`:inbox_tray: ${member} Sunucuya katıldı! **${tag}** Tagı Başarıyla verildi.`)
})
//GÜVENLİK
client.on("guildMemberAdd", async member => {
  let user = client.users.get(member.id);
  let chan = client.channels.get(db.fetch(`guvenlik${member.guild.id}`));
  if(!chan) return;
  const Canvas = require("canvas");
  const canvas = Canvas.createCanvas(360, 100);
  const ctx = canvas.getContext("2d");

  const resim1 = await Canvas.loadImage(
    "https://cdn.discordapp.com/attachments/591299755976425493/614151181752860672/yhosgeldirrn.png"
  );
  const resim2 = await Canvas.loadImage(
    "https://cdn.discordapp.com/attachments/591299755976425493/614164419768877056/yhosgeldirrn.png"
  );
  const kurulus = new Date().getTime() - user.createdAt.getTime();
  const gün = require("moment-duration-format");
  var kontrol;
  if (kurulus > 2629800000) kontrol = resim2;
  if (kurulus < 2629800000) kontrol = resim1;

  const background = await Canvas.loadImage(
    "https://cdn.discordapp.com/attachments/591299755976425493/614164413318168606/Adsz.png"
  );
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
  ctx.drawImage(kontrol, 0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.fill();
  ctx.lineWidth = 4;
  ctx.arc(180, 46, 36, 0, 2 * Math.PI);
  ctx.clip();
  ctx.drawImage(avatar, 143, 10, 73, 72);

  const attachment = new Discord.Attachment(
    canvas.toBuffer(),
    "STARKs-güvenlik.png"
  );
  chan.send(attachment);
});
//eklendimatıldım
client.on("guildCreate", guild => {
  let codeming1 = client.channels.get("723581102555398174")

 const codeming = new Discord.RichEmbed()
.setTitle("SUNUCUYA EKLENDİM")
.setColor("GREEN")
.addField('** Sunucu ID**', `\`${guild.id}\``)
.addField('** Sunucu İsmi**', `\`${guild.name}\``)
.addField('** Üye Sayısı**', `\`${guild.members.size}\``)
.addField('** Kurucu**', `\`${guild.owner.user.tag}\``)
.addField('** Kurucu ID**', `\`${guild.owner.user.id}\``)
codeming1.send(codeming)
});

client.on("guildDelete", guild => {
  let codeming2 = client.channels.get("723581102555398174")

 const codeming3 = new Discord.RichEmbed()
.setTitle("SUNUCUDAN ATILDIM")
.setColor("RED")
.addField('** Sunucu ID**', `\`${guild.id}\``)
.addField('** Sunucu İsmi**', `\`${guild.name}\``)
.addField('** Üye Sayısı**', `\`${guild.members.size}\``)
.addField('** Kurucu**', `\`${guild.owner.user.tag}\``)
.addField('** Kurucu ID**', `\`${guild.owner.user.id}\``)
codeming2.send(codeming3)
});
//FORCEBAN
  client.on("guildMemberAdd", member => {
  let cveri = db.fetch(`cforceban_${member.id}`)
  if(!cveri) return;
  
  member.guild.member(member).kick("Forceban aktif!")
  member.guild.owner.user.send("**"+member.user.tag+"** isimli kullanıcı forcebanlı olduğu için atıldı!").catch(e => console.log(e.catch))
  })
//gold
client.on('guildMemberAdd', async member => {
  
  let sayi = await db.fetch(`sayıK_${member.guild.id}`)
  let kanal = await db.fetch(`kanalK_${member.guild.id}`)
  
 if (!sayi) return
  if (!kanal) return
  
  client.channels.get(kanal).send(`:inbox_tray: ${member} Sunucuya katıldı! **${sayi}** kişi olmamıza **${sayi - member.guild.members.size}** üye kaldı!`)
})

client.on('guildMemberRemove', async member => {
  let sayi = await db.fetch(`sayıK_${member.guild.id}`)
  let kanal = await db.fetch(`kanalK_${member.guild.id}`)
  
  if (!sayi) return
  if (!kanal) return
  
  client.channels.get(kanal).send(`:outbox_tray: ${member} Sunucudan ayrıldı! **${sayi}** kişi olmamıza **${sayi - member.guild.members.size}** üye kaldı!`)
})
//sayaç
client.on('message', async message => {

var goldveri = db.fetch(`${message.author.id}.golduye`)
if(!goldveri) return;
  
if (!db.has(`${message.author.id}.goldmsg`)) {
  db.set(`${message.author.id}.goldmsg`, (Date.now() + 3000000))
}

var time = db.fetch(`${message.author.id}.goldmsg`)

if (Date.now() > time) {

message.channel.send(new Discord.RichEmbed() 

.setColor("RANDOM") 
.setTitle('') 
.setDescription(`<a:elmas:722953497355485316> Gold üyeliğe sahip <@!${message.author.id}> artık burada!`) 
) .then(m => m.delete(15000))

 
db.delete(`${message.author.id}.goldmsg`)
  
 }
});
//
var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();


fs.readdir('./komutlar/Müzik/', (err, files) => {
if (err) console.error(err);
log(`${files.length} komut yüklenecek.`);
files.forEach(f => {
let props = require(`./komutlar/Müzik/${f}`);
 log(`Yüklenen komutlar: ${props.help.name}.`);
client.commands.set(props.help.name, props);
props.conf.aliases.forEach(alias => {
client.aliases.set(alias, props.help.name);
});
});
});
fs.readdir('./komutlar/Koruma/', (err, files) => {
if (err) console.error(err);
log(`${files.length} komut yüklenecek.`);
files.forEach(f => {
let props = require(`./komutlar/Koruma/${f}`);
 log(`Yüklenen komutlar: ${props.help.name}.`);
client.commands.set(props.help.name, props);
props.conf.aliases.forEach(alias => {
client.aliases.set(alias, props.help.name);
});
});
});
fs.readdir('./komutlar/Sistemler/', (err, files) => {
if (err) console.error(err);
log(`${files.length} komut yüklenecek.`);
files.forEach(f => {
let props = require(`./komutlar/Sistemler/${f}`);
 log(`Yüklenen komutlar: ${props.help.name}.`);
client.commands.set(props.help.name, props);
props.conf.aliases.forEach(alias => {
client.aliases.set(alias, props.help.name);
});
});
});
fs.readdir('./komutlar/Genel/', (err, files) => {
if (err) console.error(err);
log(`${files.length} komut yüklenecek.`);
files.forEach(f => {
let props = require(`./komutlar/Genel/${f}`);
 log(`Yüklenen komutlar: ${props.help.name}.`);
client.commands.set(props.help.name, props);
props.conf.aliases.forEach(alias => {
client.aliases.set(alias, props.help.name);
});
});
});
fs.readdir('./komutlar/moderasyon/', (err, files) => {
if (err) console.error(err);
log(`${files.length} komut yüklenecek.`);
files.forEach(f => {
let props = require(`./komutlar/moderasyon/${f}`);
 log(`Yüklenen komutlar: ${props.help.name}.`);
client.commands.set(props.help.name, props);
props.conf.aliases.forEach(alias => {
client.aliases.set(alias, props.help.name);
});
});
});
fs.readdir('./komutlar/Eğlence/', (err, files) => {
if (err) console.error(err);
log(`${files.length} komut yüklenecek.`);
files.forEach(f => {
let props = require(`./komutlar/Eğlence/${f}`);
 log(`Yüklenen komutlar: ${props.help.name}.`);
client.commands.set(props.help.name, props);
props.conf.aliases.forEach(alias => {
client.aliases.set(alias, props.help.name);
});
});
});
fs.readdir('./komutlar/Kayıt/', (err, files) => {
if (err) console.error(err);
log(`${files.length} komut yüklenecek.`);
files.forEach(f => {
let props = require(`./komutlar/Kayıt/${f}`);
 log(`Yüklenen komutlar: ${props.help.name}.`);
client.commands.set(props.help.name, props);
props.conf.aliases.forEach(alias => {
client.aliases.set(alias, props.help.name);
});
});
});
// DM
client.on("message", codeming => {
  var miran = client.channels.get("722932724930707536");
  if (codeming.channel.type === "dm") {
    if (codeming.author.id === client.user.id) return;
    const berkcim = new Discord.RichEmbed()
      .setTitle(`${client.user.username} Dm`)
      .setTimestamp()
      .setColor("RANDOM")
      .setThumbnail(`${codeming.author.avatarURL}`)
      .addField("Gönderen Kişi", codeming.author.tag)
      .addField("Gönderen Kişinin ID", codeming.author.id)
      .addField("Gönderilen Mesaj", codeming.content);

    miran.send(berkcim);
  }
  if (codeming.channel.bot) return;
});

// Müzik
client.on("message", async message => {
let prefix = ayarlar.prefix 
  
    var id = message.author.id;
  var gid = message.guild.id;

  let hm = await db.fetch(`seviyeacik_${gid}`)
  let kanal = await db.fetch(`svlog_${gid}`)
  let xps = await db.fetch(`verilecekxp_${gid}`)
  let seviyerol = await db.fetch(`seviyerol_${gid}`)
  let rollvl = await db.fetch(`rollevel_${gid}`)
  
  if(!hm) return
  if(message.content.startsWith(prefix)) return
  if(message.author.bot) return
 

  
  var xp = await db.fetch(`xp_${id}_${gid}`);
  var lvl = await db.fetch(`lvl_${id}_${gid}`);
  var xpToLvl = await db.fetch(`xpToLvl_${id}_${gid}`);
  
  if(!lvl) {
      
    if(xps) {
      db.set(`xp_${id}_${gid}`, xps);
    }
    db.set(`xp_${id}_${gid}`, 4);
    db.set(`lvl_${id}_${gid}`, 1);
    db.set(`xpToLvl_${id}_${gid}`, 100);
    
  } else {
    db.add(`xp_${id}_${gid}`, 4);

    
    if(xp > xpToLvl) {
      
      db.add(`lvl_${id}_${gid}`, 1);
      db.add(`xpToLvl_${id}_${gid}`, await db.fetch(`lvl_${id}_${gid}`) * 100);
    if(kanal) {
      let yenilevel = (lvl + 1)
    client.channels.get(kanal.id).send(`${message.author}` + ' Seviye Atladı! Yeni seviyesi; `'+yenilevel+'` Tebrikler! <a:tik2:722947649728413766>')  
    
 
    
    }
    
    }
    

      if(lvl >= rollvl) {
    message.guild.member(message.author.id).addRole(seviyerol)
        if(message.member.roles.has(seviyerol)) return
        db.set(`${id.id}.golduye`, Date.now()) 
   if(kanal) {
        client.channels.get(kanal.id).send(`${message.author}` + ' Seviyesi '+ rollvl +' ulaştı ve rolünü kazandı!  <a:elmas:722953497355485316>')
   }  
   }
  if(lvl < rollvl){
    message.guild.member(message.author.id).removeRole(seviyerol)
    db.delete(`${id.id}.golduye`)
  }
  
  }
  

})
//BOT DURUM
client.on("ready", message => {
 let log = client.channels.get('722945684176896060')
let embed = new Discord.RichEmbed()
.setTitle('Beyefendi aktif ! ') 
.setColor('RANDOM')
.setDescription(`
○ Sunucular : ${client.guilds.size}
○ Kanallar : ${client.channels.size}
○ Kullanıcı : ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}

**Detaylı bilgi için -istatistik **

`)
log.send(embed)
});
//otorol
client.on('guildMemberAdd', async (member) => {
let otorol = db.fetch(`${member.guild.id}_otorol`)
let otorolkanal = db.fetch(`${member.guild.id}_otorolkanal`)
let kanal = member.guild.channels.get(otorolkanal)
if(!otorol) return
if(!otorolkanal) return

kanal.send(':inbox_tray: Sunucuya yeni katılan **'+member.user.username+'** kullanıcısına otorol verildi !')
member.addRole(otorol)
})
client.on('guildMemberRemove', async (member) => {
let otorolkanal = db.fetch(`${member.guild.id}_otorolkanal`)
let kanal = member.guild.channels.get(otorolkanal)
if(!otorolkanal) return

kanal.send(':outbox_tray: **'+member.user.username+'** kullanıcısı sunucumuzdan ayrıldı. Tekrar görüşmek dileğiyle!')
})
//LOG
client.on('channelCreate', async channel => {
  const c = channel.guild.channels.get(db.fetch(`codeminglog_${channel.guild.id}`));
  if (!c) return;
  var embed = new Discord.RichEmbed()
                    .addField(`Kanal oluşturuldu`, ` İsmi: \`${channel.name}\`\n Türü: **${channel.type}**\n► ID: ${channel.id}`)
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter(`${channel.client.user.username}#${channel.client.user.discriminator}`, channel.client.user.avatarURL)
    c.send(embed)
});

client.on('channelDelete', async channel => {
  const c = channel.guild.channels.get(db.fetch(`codeminglog_${channel.guild.id}`));
  if (!c) return;
    let embed = new Discord.RichEmbed()
                    .addField(`Kanal silindi`, ` İsmi: \`${channel.name}\`\n Türü: **${channel.type}**\n��� ID: ${channel.id}`)
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter(`${channel.client.user.username}#${channel.client.user.discriminator}`, channel.client.user.avatarURL)

    c.send(embed)
});

   client.on('channelNameUpdate', async channel => {
  const c = channel.guild.channels.get(db.fetch(`codeminglog_${channel.guild.id}`));
  if (!c) return;
    var embed = new Discord.RichEmbed()
                    .addField(`Kanal İsmi değiştirildi`, ` Yeni İsmi: \`${channel.name}\`\n► ID: ${channel.id}`)
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter(`${channel.client.user.username}#${channel.client.user.discriminator}`, channel.client.user.avatarURL)
    c.send(embed)
});




client.on('emojiCreate', emoji => {
  const c = emoji.guild.channels.get(db.fetch(`codeminglog_${emoji.guild.id}`));
  if (!c) return;

    let embed = new Discord.RichEmbed()
                    .addField(`Emoji oluşturuldu`, ` İsmi: \`${emoji.name}\`\n GIF?: **${emoji.animated}**\n► ID: ${emoji.id}`)
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter(`${emoji.client.user.username}#${emoji.client.user.discriminator}`, emoji.client.user.avatarURL)

    c.send(embed)
    });
client.on('emojiDelete', emoji => {
  const c = emoji.guild.channels.get(db.fetch(`codeminglog_${emoji.guild.id}`));
  if (!c) return;

    let embed = new Discord.RichEmbed()
                    .addField(`Emoji silindi`, ` İsmi: \`${emoji.name}\`\n GIF? : **${emoji.animated}**\n► ID: ${emoji.id}`)
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter(`${emoji.client.user.username}#${emoji.client.user.discriminator}`, emoji.client.user.avatarURL)

    c.send(embed)
    });
client.on('emojiUpdate', (oldEmoji, newEmoji) => {
  const c = newEmoji.guild.channels.get(db.fetch(`codeminglog_${newEmoji.guild.id}`));
  if (!c) return;

    let embed = new Discord.RichEmbed()
                    .addField(`Emoji güncellendi`, ` Eski ismi: \`${oldEmoji.name}\`\n Yeni ismi: \`${newEmoji.name}\`\n► ID: ${oldEmoji.id}`)
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter(`${newEmoji.client.user.username}#${newEmoji.client.user.discriminator}`, newEmoji.client.user.avatarURL)

    c.send(embed)
    });

client.on('guildBanAdd', async (guild, user) => {    
    const channel = guild.channels.get(db.fetch(`codeminglog_${guild.id}`));
  if (!channel) return;
  
  const entry = await guild.fetchAuditLogs({type: 'MEMBER_BAN_ADD'}).then(audit => audit.entries.first())

    let embed = new Discord.RichEmbed()
                    .setAuthor(`${user.username}#${user.discriminator}`, user.avatarURL)
                    .addField(`Kullanıcı banlandı`, ` İsmi: \`${user.username}\`\n ID: **${user.id}**\n Sebep: **${entry.reason || 'Belirtmedi'}**\n Banlayan: **${entry.executor.username}#${entry.executor.discriminator}**`)
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter(`${entry.executor.username}#${entry.executor.discriminator} tarafından`, entry.executor.avatarURL)

    channel.send(embed)
});


client.on('guildBanRemove', async (guild, user) => {    
    const channel = guild.channels.get(db.fetch(`codeminglog_${guild.id}`));
  if (!channel) return;
  
  const entry = await guild.fetchAuditLogs({type: 'MEMBER_BAN_ADD'}).then(audit => audit.entries.first())

    let embed = new Discord.RichEmbed()
                    .setAuthor(`${user.username}#${user.discriminator}`, user.avatarURL)
                    .addField(`Kullanıcının banı açıldı`, ` İsmi: \`${user.username}\`\n ID: **${user.id}**\n Banı Kaldıran: **${entry.executor.username}#${entry.executor.discriminator}**`)
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter(`${entry.executor.username}#${entry.executor.discriminator} tarafından`, entry.executor.avatarURL)

    channel.send(embed)
});
client.on('messageDelete', async message => {    
  if(message.author.bot) return

    const channel = message.guild.channels.get(db.fetch(`codeminglog_${message.guild.id}`));
  if (!channel) return;
  
    let embed = new Discord.RichEmbed()
                    .setAuthor(`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
                    .setTitle("Mesaj silindi")                
                    .addField(`Silinen mesaj : ${message.content}`,`Kanal: ${message.channel.name}`)
                  //  .addField(`Kanal:`,`${message.channel.name}`)
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter(`${message.client.user.username}#${message.client.user.discriminator}`, message.client.user.avatarURL)

    channel.send(embed)
});

client.on('messageUpdate', async(oldMessage, newMessage) => {
    if(oldMessage.author.bot) return;
    if(oldMessage.content == newMessage.content) return;

    const channel = oldMessage.guild.channels.get(db.fetch(`codeminglog_${oldMessage.guild.id}`));
    if(!channel) return;

    let embed = new Discord.RichEmbed()
    .setAuthor(`${oldMessage.author.username}#${oldMessage.author.discriminator}`, oldMessage.author.avatarURL)
    .setTitle("Mesaj güncellendi!")
    .addField("Eski mesaj : ",`${oldMessage.content}`)
    .addField("Yeni mesaj : ",`${newMessage.content}`)
    .addField("Kanal : ",`${oldMessage.channel.name}`)
    .setTimestamp()
    .setColor("RANDOM")
    .setFooter(`${oldMessage.client.user.username}#${oldMessage.client.user.discriminator}`,`${oldMessage.client.user.avatarURL}`)

    channel.send(embed)
});

client.on('roleCreate', async (role) => {    

    const channel = role.guild.channels.get(db.fetch(`codeminglog_${role.guild.id}`));
  if (!channel) return;
  
    let embed = new Discord.RichEmbed()
.addField(`Rol oluşturuldu`, ` ismi: \`${role.name}\`\n ID: ${role.id}`)                    
.setTimestamp()
.setColor("RANDOM")
.addField("Rol renk kodu : ",`${role.hexColor}`)
.setFooter(`${role.client.user.username}#${role.client.user.discriminator}`, role.client.user.avatarURL)

    channel.send(embed)
});

client.on('roleDelete', async (role) => {    

    const channel = role.guild.channels.get(db.fetch(`codeminglog_${role.guild.id}`));
  if (!channel) return;
  
    let embed = new Discord.RichEmbed()
.addField(`Rol silindi`, ` ismi: \`${role.name}\`\n ID: ${role.id}`)                    
.setTimestamp()
.setColor("RANDOM")
    .addField("Rol renk kodu : ",`${role.hexColor}`)
.setFooter(`${role.client.user.username}#${role.client.user.discriminator}`, role.client.user.avatarURL)

    channel.send(embed)
})
client.on('voiceStateUpdate', (oldMember, newMember) => {
  
 // if (!logA[oldMember.guild.id]) return;
  
  if (db.has(`codeminglog_${oldMember.guild.id}`) === false) return;
  
  var kanal = oldMember.guild.channels.get(db.fetch(`codeminglog_${oldMember.guild.id}`).replace("<#", "").replace(">", ""))
  if (!kanal) return;
  
  let newUserChannel = newMember.voiceChannel
  let oldUserChannel = oldMember.voiceChannel

  if(oldUserChannel === undefined && newUserChannel !== undefined) {

    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`${newMember.user.tag} adlı kullanıcı \`${newUserChannel.name}\` isimli sesli kanala giriş yaptı!`)
    kanal.send(embed);
    
  } else if(newUserChannel === undefined){

    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`${newMember.user.tag} adlı kullanıcı sesli kanaldan çıkış yaptı!`)
    kanal.send(embed);
    
  }
});
//
  client.on("message", async msg => {
  
  if(msg.author.bot) return;
  if(msg.channel.type === "dm") return;
  let i = await db.fetch(`küfürE_${msg.guild.id}`)
    //if (kufur.some(word => msg.content.startWith(word))) {}
  if (i == 'açık') {
            const kufur = ["am","amcık","yarrak","oç","oc","orospu çocuğu","orospu çocu","orospu evladı","orospu","amk","siktir","siktir git","yarram","sikik","piç","gavat","ibne","aq","sik","awk"]

   
if (msg.content.includes(" ")) {
      if (kufur.some(word => msg.content.toLowerCase().includes(" " + word))) {
          try {
            if (!msg.member.hasPermission("ADMINISTRATOR")) {
            msg.delete();  
const embed1 = new Discord.RichEmbed()
        .setColor("BLUE")
        .setDescription(`${msg.author}** bu sunucuda küfüre izin verilmiyor!**`)
                  return msg.channel.send(embed1).then(msg => msg.delete(3000));           
            }              
          } catch(err) {
            console.log(err);
          }
        }
        } else {
         if (kufur.some(word => msg.content == word)) {
          try {
            if (!msg.member.hasPermission("ADMINISTRATOR")) {
                  msg.delete();  
const embed1 = new Discord.RichEmbed()
        .setColor("BLUE")
        .setDescription(`${msg.author} **bu sunucuda küfüre izin verilmiyor!**`)
                  return msg.channel.send(embed1).then(msg => msg.delete(3000));           
            }              
          } catch(err) {
            console.log(err);
          }
        } 
        }
    }
    
    if (!i) return;
    });
////////////////////////KORUMA
client.on("guildMemberAdd", async (codeming) => {
  
let ce = await db.fetch(`bot-koruma_${codeming.guild.id}`)  
if(!ce) return   
  
if(!codeming.user.bot) return   
  
codeming.guild.ban(codeming, 2)  

let log = await db.fetch(`log_${codeming.guild.id}`)  
  
if(log) {  
 client.channels.get(log).send("**"+codeming.username+"** adlı **BOT** sunucuya giriş sağlamaya çalıştı.Ancak koruma engeline takıldı.")   
}

})


client.on("channelDelete", async(codeming) => {
let veri = await db.fetch(`kanalkoruma_${codeming.guild.id}`)
if(!veri) return
let entry = await codeming.guild.fetchAuditLogs({type: 'CHANNEL_DELETE'}).then(audit => audit.entries.first())
let user = client.users.get(entry.executor.id)

if(user.id === codeming.guild.owner.id) return
if(user.id === client.user.id) return  
  
codeming.guild.createChannel(codeming.name, {type: codeming.type, parent: codeming.parentID, userLimit: codeming.userLimit, topic: codeming.topic, position: codeming.position})
  
let member = codeming.guild.members.get(user.id)  

member.roles.forEach(ce => {
member.removeRole(ce)    
}) 
let log = await db.fetch(`log_${codeming.guild.id}`)  

if(log) {  
 client.channels.get(log).send(":warning: **"+user.username+"**,**"+codeming.name+"** Adlı kanalı silmeye çalıştı.Silinen kanal onarıldı! Ve kullanıcının tüm rolleri alındı.")   
} 
  
  
});

client.on("channelCreate", async(codeming) => {
if(!codeming.guild) return
  let veri = await db.fetch(`kanalkoruma_${codeming.guild.id}`)
if(!veri) return
let entry = await codeming.guild.fetchAuditLogs({type: 'CHANNEL_CREATE'}).then(audit => audit.entries.first())
let user = client.users.get(entry.executor.id)

if(user.id === codeming.guild.owner.id) return
if(user.id === client.user.id) return  
  
codeming.delete()
  
let member = codeming.guild.members.get(user.id)  

member.roles.forEach(ce => {
member.removeRole(ce)    
}) 
let log = await db.fetch(`log_${codeming.guild.id}`)  

if(log) {  
 client.channels.get(log).send(":warning: **"+user.username+"**,**"+codeming.name+"** Adlı kanalı açmaya çalıştı.Açılan kanal silindi! Ve kullanıcının tüm rolleri alındı.")   
} 
  
  
});

 client.on("message", async msg => {
  
  if(msg.author.bot) return;
  if(msg.channel.type === "dm") return;
  let is = await db.fetch(`reklamE_${msg.guild.id}`)
    //if (kufur.some(word => msg.content.startWith(word))) {}
  if (is == 'açık') {
            const reklam = ["https","/","gg","net","com","https://discord.gg/","xyz"]

   
if (msg.content.includes(" ")) {
      if (reklam.some(word => msg.content.toLowerCase().includes(" " + word))) {
          try {
            if (!msg.member.hasPermission("ADMINISTRATOR")) {
            msg.delete();  
const embed1 = new Discord.RichEmbed()
        .setColor("BLUE")
               .setDescription(`${msg.author} **reklam engellendi!**`)
                  return msg.channel.send(embed1).then(msg => msg.delete(3000));           
            }              
          } catch(err) {
            console.log(err);
          }
        }
        } else {
         if (reklam.some(word => msg.content == word)) {
          try {
            if (!msg.member.hasPermission("ADMINISTRATOR")) {
                  msg.delete();  
const embed1 = new Discord.RichEmbed()
        .setColor("BLUE")
        .setDescription(`${msg.author}  **reklam engellendi!**`)
                  return msg.channel.send(embed1).then(msg => msg.delete(3000));           
            }              
          } catch(err) {
            console.log(err);
          }
        } 
        }
    }
    
    if (!is) return;
    });


client.on("message", async msg => {
  if (msg.channel.type === "dm") return;
  if (msg.author.bot) return;
  if (msg.content.length > 4) {
    if (db.fetch(`capslock_${msg.guild.id}`)) {
      let caps = msg.content.toUpperCase();
      if (msg.content == caps) {
        if (!msg.member.hasPermission("ADMINISTRATOR")) {
          if (!msg.mentions.users.first()) {
            msg.delete();
            return msg.channel
              .send(`✋ Lütfen Büyük Harf Kullanma!`)
              .then(m => m.delete(5000));
          }
        }
      }
    }
  }
});
client.on("roleCreate", async(codeming) => {
let veri = await db.fetch(`rolkoruma_${codeming.guild.id}`)  
if(!veri) return  
let entry = await codeming.guild.fetchAuditLogs({type: 'ROLE_CREATE'}).then(audit => audit.entries.first())
let user = client.users.get(entry.executor.id)
if(user.id === codeming.guild.owner.id) return
if(user.id === client.user.id) return
codeming.delete()


  
 let log = await db.fetch(`log_${codeming.guild.id}`)  

if(log) {  
 client.channels.get(log).send(":warning: **"+user.username+"**,**"+codeming.username+"** adlı rolü açmaya çalıştı.Rol silindi! ")   
}   
  
});



client.on("roleDelete", async(codeming) => {
let veri = await db.fetch(`rolkoruma_${codeming.guild.id}`)  
if(!veri) return  
let entry = await codeming.guild.fetchAuditLogs({type: 'ROLE_DELETE'}).then(audit => audit.entries.first())
let user = client.users.get(entry.executor.id)
if(user.id === codeming.guild.owner.id) return
if(user.id === client.user.id) return

  codeming.guild.createRole({name: codeming.name, color: codeming.color, position: codeming.position, permissions: codeming.permissions})
 let log = await db.fetch(`log_${codeming.guild.id}`)  

if(log) {  
 client.channels.get(log).send(":warning: **"+user.username+"**,**"+codeming.name+"** adlı rolü silmeye çalıştı.Rol tekrar açıldı! ")   
}   
  
});



client.on("guildMemberUpdate", async(oldMember, codeming) => {
let veri = await db.fetch(`rol-verme-koruma_${oldMember.guild.id}`)  
if(!veri) return  
let entry = await codeming.guild.fetchAuditLogs({type: 'MEMBER_ROLE_UPDATE'}).then(audit => audit.entries.first())
let user = client.users.get(entry.executor.id)
if(user.id === oldMember.guild.owner.id) return


  let eski = oldMember.roles.map(s => s.id).slice("\n")
let yeni = codeming.roles.map(s => s.id).slice("\n")
  
if(eski === yeni) return
if(eski.length > yeni.length) return  
  
codeming.roles.forEach(s => {
  
codeming.removeRole(s)

oldMember.roles.forEach(ce => {
  
codeming.addRole(ce)
  
})  
  
  
})

 let log = await db.fetch(`log_${codeming.guild.id}`)  

if(log) {  
 client.channels.get(log).send(":warning: **"+user.username+"**, rol vermeye çalıştı.verilen rol alındı!")   
} 

  
});

//////////////////////////////////ÖZEL ODASİSTEMİ
client.on('message', async message => {
  const ms = require('ms');
  const prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  let u = message.mentions.users.first() || message.author;
  if (command === "özelodasistemi") {
  if (message.guild.channels.find(channel => channel.name === "Bot Kullanımı")) return message.channel.send(" Zaten kurulu.")
  if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(" Bu Kodu `Yönetici` Yetkisi Olan Kişi Kullanabilir.");
    message.channel.send(`Özel Oda Sistemi Kuruluyor`)
    .then((collected) => {

message.guild.createChannel('2 Kişilik Odalar', 'category', [{
  id: message.guild.id,
}]);

message.guild.createChannel(`➕│2 Kişilik Oda`, 'voice')
.then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "2 Kişilik Odalar")))

message.guild.createChannel('3 Kişilik Odalar ', 'category', [{
  id: message.guild.id,
}]);

message.guild.createChannel(`➕│3 Kişilik Oda`, 'voice')
.then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "3 Kişilik Odalar")))

message.guild.createChannel('4 Kişilik Odalar', 'category', [{
  id: message.guild.id,
}]);

message.guild.createChannel(`➕│4 Kişilik Oda`, 'voice')
.then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "4 Kişilik Odalar")))


            })
 
}
});
////////////////////////
client.on('voiceStateUpdate', (oldMember, newMember) => {
    // todo create channel
    if (newMember.voiceChannel != null && newMember.voiceChannel.name.startsWith('➕│2 Kişilik Oda')) {
        newMember.guild.createChannel(`║💳 ${newMember.displayName}`, {
            type: 'voice',
            parent: newMember.voiceChannel.parent
       }).then(cloneChannel => {
        newMember.setVoiceChannel(cloneChannel)
        cloneChannel.setUserLimit(2)
      })
    }
    // ! leave
    if (oldMember.voiceChannel != undefined) {
        if (oldMember.voiceChannel.name.startsWith('║💳 ')) {
            if (oldMember.voiceChannel.members.size == 0) {
                oldMember.voiceChannel.delete()
            }
            else { // change name
                let matchMember = oldMember.voiceChannel.members.find(x => `║💳 ${x.displayName}` == oldMember.voiceChannel.name);
                if (matchMember == null) {
                    oldMember.voiceChannel.setName(`║💳 ${oldMember.voiceChannel.members.random().displayName}`)
                }
            }
        }
    }
});

client.on('voiceStateUpdate', (oldMember, newMember) => {
    // todo create channel
    if (newMember.voiceChannel != null && newMember.voiceChannel.name.startsWith('➕│3 Kişilik Oda')) {
        newMember.guild.createChannel(`║💳 ${newMember.displayName}`, {
            type: 'voice',
            parent: newMember.voiceChannel.parent
       }).then(cloneChannel => {
        newMember.setVoiceChannel(cloneChannel)
        cloneChannel.setUserLimit(3)
      })
    }
    // ! leave
    if (oldMember.voiceChannel != undefined) {
        if (oldMember.voiceChannel.name.startsWith('║💳 ')) {
            if (oldMember.voiceChannel.members.size == 0) {
                oldMember.voiceChannel.delete()
            }
            else { // change name
                let matchMember = oldMember.voiceChannel.members.find(x => `║💳 ${x.displayName}` == oldMember.voiceChannel.name);
                if (matchMember == null) {
                    oldMember.voiceChannel.setName(`║💳 ${oldMember.voiceChannel.members.random().displayName}`)
                }
            }
        }
    }
});

client.on('voiceStateUpdate', (oldMember, newMember) => {
    // todo create channel
    if (newMember.voiceChannel != null && newMember.voiceChannel.name.startsWith('➕│4 Kişilik Oda')) {
        newMember.guild.createChannel(`║💳 ${newMember.displayName}`, {
            type: 'voice',
            parent: newMember.voiceChannel.parent
       }).then(cloneChannel => {
        newMember.setVoiceChannel(cloneChannel)
        cloneChannel.setUserLimit(4)
      })
    }
    // ! leave
    if (oldMember.voiceChannel != undefined) {
        if (oldMember.voiceChannel.name.startsWith('║💳 ')) {
            if (oldMember.voiceChannel.members.size == 0) {
                oldMember.voiceChannel.delete()
            }
            else { // change name
                let matchMember = oldMember.voiceChannel.members.find(x => `║💳 ${x.displayName}` == oldMember.voiceChannel.name);
                if (matchMember == null) {
                    oldMember.voiceChannel.setName(`║💳 ${oldMember.voiceChannel.members.random().displayName}`)
                }
            }
        }
    }
});
////afk
client.on("message", message => {
  var miran = db.get(`miranafk2.${message.author.id}.afk`);  // miran CodEming
  if (!miran) return;
  var afkb = JSON.parse(miran);
  if (new Date().getTime() - afkb.zaman < 1000) return;
  db.delete(`miranafk2.${message.author.id}.afk`);
  var süre = new Date().getTime() - afkb.zaman;

  var sürem = moment
    .duration(süre)
    .format("Y [yıl], M [ay], D [gün], H [saat], m [dakika], s [saniye]");
 let embed2 = new Discord.RichEmbed()
    .setColor('RED')
    .setAuthor(client.user.username, client.user.avatarURL)
    .setDescription(`<@`+message.author.id+`> \nAFK modundan ayrıldınız.\nAFK kaldığınız süre \n**`+sürem+`**`)
    .setFooter(`${message.author.username}`,`${message.author.displayAvatarURL}`)

  message.channel.send(embed2)
   /* ":no_bell: AFK modundan ayrıldınız. <@" +
      message.author.id +
      ">. Afk kaldığın süre:** " +
      sürem +
      "**"*/
});
client.on("message", message => {
  let etiket = message.mentions.users.first();
  if (!etiket) return;
  var miranafk = db.fetch(`miranafk2.${etiket.id}.afk`);
  if (!miranafk) return;
  var miran = JSON.parse(miranafk);
  if (!miran) return;   // miran CodEming
  var süre = new Date().getTime() - miran.zaman;
  var sürem = moment
    .duration(süre)
    .format("Y [yıl], M [ay], D [gün], H [saat], m [dakika], s [saniye]");
  if (miran) {
    let embedd = new Discord.RichEmbed()
    .setColor('RED')
    .setAuthor(client.user.username, client.user.avatarURL)
    .setDescription(etiket+` adlı kullanıcı şuan da AFK.\nSebep: **${miran.sebep}**\nNe zamandır: **${sürem}**`)
    .setFooter(`${message.author.username}`,`${message.author.displayAvatarURL}`)
    return message.channel.send(embedd)
    message.delete(100)
     

     /* `:x: | **${etiket.tag}** adlı kullanıcı **${sürem}**dir **${miran.sebep}** sebebiyle afk!`  // miran CodEming
    );*/
  }
});
////
client.on("roleUpdate", async(oldRole, newRole) => {

  let codeming = await db.fetch(`ceyöneticiengel_${oldRole.guild.id}`)
  if(!codeming) return
  if (oldRole.hasPermission("ADMINISTRATOR"))  return
   if (!oldRole.hasPermission("ADMINISTRATOR")) 
    if (newRole.hasPermission("ADMINISTRATOR")) {
      
      
   newRole.setPermissions(oldRole.permissions)   
      
      
    } else {
      return
    }  
    
  
  
});
client.on('message', msg => {
  if(msg.author.id !== "689495341682393128") return;
  if (msg.content.toLowerCase() === 'ok') {
    msg.channel.send(`ok`)
    msg.channel.send(`ok`)
    msg.channel.send(`ok`)
  }
});

///etiket
/*
client.on("message",async(codeming) => {
if(codeming.author.bot) return
if(codeming.author.id === ayarlar.sahip) return
let ilayda = codeming.content

if(!ilayda.includes("<@"+ayarlar.sahip+">")) {
if(!ilayda.includes("<@!"+ayarlar.sahip+">")) {
return

// CODEMİNG :/\:

}
}
let veri2 = db.fetch(`anaetiket_${codeming.author.id}`)
if(!veri2) return
let veri = db.fetch(`ketiket_${codeming.author.id}`)

if(veri) {

let susturuldu = codeming.guild.roles.find(s => s.name === "Beyefendi - Susturuldu")

if(!susturuldu) {

codeming.guild.createRole({
        name: 'Beyefendi - Susturuldu',
        permissions: [],
        mentionable: false
    }).then(s => {

codeming.guild.channels.forEach(kanallar => {

kanallar.overwritePermissions(s.id, { SEND_MESSAGES: false, READ_MESSAGES: false});

codeming.delete()
codeming.member.addRole(s.id)
codeming.channel.send("<@!"+codeming.author.id+"> Seni uyarmıştım! Susturuldu rolün verildi.")
  db.delete(`ketiket_${codeming.author.id}`)
})

})

} else {

codeming.delete()
codeming.member.addRole(susturuldu.id)
codeming.channel.send("<@!"+codeming.author.id+"> Seni uyarmıştım! Susturuldu rolün verildi.")

let yasin = new Discord.RichEmbed()
.setTitle("Etiketlendin ve susturdum!")
.setDescription("**Etiketleyen:** "+codeming.author.username+"\n\n **Yazdığı Mesaj:**\n ```"+ilayda+"```")
.setColor("RED")
.setFooter("Beyefendi")
client.users.get(ayarlar.sahip).send(yasin)
  db.delete(`ketiket_${codeming.author.id}`)

}
} else {
  sebep = db.fetch(`etiketsebep_${codeming.author.id}`)
let beyefendi = new Discord.RichEmbed()
.setTitle('Etiket ATMA!')
.setDescription(`**Kurucum şuanda etiket istemiyor!**\n\n\nSebep: **${sebep}**\n\n\n**Eğer Tekrardan etiket atarsan seni SUSTURMAK zorunda kalacağım!**`)
.setColor('RED')
codeming.delete()
codeming.channel.send(beyefendi)
db.set(`ketiket_${codeming.author.id}`, "aktif")
}

})*/
/////
client.on('message', msg => {

if (!msg.content.startsWith(prefix)) {
    return;
  }

  });


client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

client.login(ayarlar.token);