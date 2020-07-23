const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../../ayarlar.json');
const ms = require('ms')
exports.run = async (client, message, args) => { 

if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send('<a:iptal:722904688969777202> Bu özelliği kullanabilmek için `Yönetici` yetkisine sahip olmalısınız')
if(message.author.id === "693870704021602355") return message.channel.send('<a:iptal:722904688969777202> Maalesef bu komutu kullanmanız engellenmiş.')
let kullanıcı = message.mentions.users.first() || client.users.get(args[0])
if (!kullanıcı) return message.channel.send('<a:iptal:722904688969777202> Kime ceza atacağını yazmadın !')
let mutezaman = args[1]
let sebep = args.slice(2).join(' ')
if (!mutezaman) return message.channel.send('<a:iptal:722904688969777202> Ceza zamanını yazmadın !')
if (!sebep) return message.channel.send('<a:iptal:722904688969777202> Ceza sebebini yazmadın !')
/*if(kullanıcı = ayarlar.sahip) return message.channel.send('aynen şuan ceza atıldı aynen')*/
let logk = await db.fetch(`codemingmutelogkanal_${message.guild.id}`)
let verilecekrol = await db.fetch(`codemingmuteverilecekrol_${message.guild.id}`)  

  let ceza = new Discord.RichEmbed()
  .setTitle('CEZA')
  .setAuthor(message.guild.name, message.guild.userURL)
  .addField('Cezalı kişi\n',`${kullanıcı.tag}`, false)
  .addField('Ceza süresi\n', mutezaman, false) 
  .addField('Ceza veren yetkili\n',`${message.author.tag}`, false)
  .addField('Ceza Sebebi', sebep) 
  .setTimestamp()
  .setFooter('Beyefendi | Ceza Sistemi')
  .setColor('BLACK');
await message.react('👌')
if(verilecekrol) message.guild.member(kullanıcı).addRole(verilecekrol)
if (logk) client.channels.get(logk).send(ceza)

let muze_zaman = mutezaman
  .replace(`sn`, `s`)
  .replace(`dk`, `m`)
  .replace(`sa`, `h`)
  .replace(`g`, `d`)

  setTimeout(function(){
    message.guild.member(kullanıcı).removeRole(verilecekrol);
    message.channel.send(`**<@${kullanıcı.id}>** adlı kullanıcısının ceza süresi **sona erdi!**`);
  }, ms(mutezaman));
  

}

exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'ceza',
  description: 'taslak', 
  usage: 'taslak'
};