
//if ([ayarlar.token].includes(code)) return message.channel.send('**Bu komutu sadece "Sahibim" kullanabilir!**')
/*const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db');
exports.run = (client, message, args) => {
	if(message.author.id !== "306499839305187329") return message.channel.send('**Bu komutu sadece "Sahibim" kullanabilir!**')
  if (message.author.id === "306499839305187329") {
		try {
let codein = args.join(" ");
let code = eval(codein)
      
      if (codein.length < 1) return message.channel.send(`:x: Bir kod girmelisin.`)
    if (typeof code !== 'string')    
      code = require('util').inspect(code, { depth: 0 });
  
   message.channel.send('Belirttiğin, '+`\`\`\`js\n${codein}\`\`\``+' Kodunu uyguladım.')   
  } catch(e) {
    let embed2 = new Discord.RichEmbed()
    .setColor('BLUE')
    .addField('Hata', "\`\`\`js\n"+e+"\n\`\`\`")
    message.channel.send(embed2);
  }
}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'eval',
  description: 'Kod denemek için kullanılır.',
  usage: 'eval [kod]'
};
*/
/*const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
      if(message.author.id !== "348097494548348940") return;
    if (args[0] === "client.token") 
    return message.channel.sendMessage('\`\`\`Bu komutu sadece Sahibim kullanabilir. \`\`\`');
    try {
      var code = args.join(" ");
      var evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.sendCode("xl", clean(evaled));
    } catch (err) {
      message.channel.sendMessage(`\`HATA\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
    }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'eval',
  description: 'Kod denemek için kullanılır.',
  usage: 'eval [kod]'
};
*/
const Discord = require("discord.js");
const db = require('quick.db');
exports.run = async (client, message, args, color, prefix) => {
    if (message.author.id !== '306499839305187329')  return;
    try {
        let codein = args.join(" ");
        let code = eval(codein);

        if (typeof code !== 'string')
            code = require('util').inspect(code, { depth: 0 });
        let embed = new Discord.RichEmbed()
        .setAuthor('Eval Sonucu;')
        .setColor('RANDOM')
        .addField('📥 Giriş:', `\`\`\`js\n${codein}\`\`\``)
        .addField('📤 Çıkış', `\`\`\`js\n${code}\n\`\`\``)
        message.channel.send(`\`\`\`js\n${code}\n\`\`\``)
    } catch(e) {
        message.channel.send(`\`\`\`js\n${e}\n\`\`\``);
    }
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['evalma', 'evsat'],
  permLevel: 0
};

exports.help = {
  name: 'eval',
  description: 'Kod denersiniz.',
  usage: 'eval <kod>'
};