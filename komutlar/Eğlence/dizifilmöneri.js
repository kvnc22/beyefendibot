const Discord = require('discord.js');
const ayarlar = require('../../ayarlar.json');


exports.run = (client, message, params) => {
   var sans = ["https://tr.web.img4.acsta.net/pictures/18/07/23/11/38/1675928.jpg","https://d19502wuiaq9sa.cloudfront.net/1200x800/images/9778/skam-izlemek-icin-6-neden_131400097008039307.jpg","https://tr.web.img4.acsta.net/pictures/17/10/09/10/43/3021888.jpg","https://www.filmanalizi.net/wp-content/uploads/Elite-netflix-poster-1.jpg","https://tr.web.img2.acsta.net/pictures/19/10/08/11/04/2148033.jpg","https://upload.wikimedia.org/wikipedia/tr/b/b5/Hakan_Muhaf%C4%B1z_afi%C5%9Fi.jpg","https://www.bunlardanistiyorum.com/images_buyuk/f26/Maxi-Poster-Rick-And-Morty-Porta_70926_1.jpg","https://m.media-amazon.com/images/M/MV5BMTI0NTMwMDgtYTMzZC00YmJhLTg4NzMtMTc1NjI4MWY4NmQ4XkEyXkFqcGdeQXVyNTY3MTYzOTA@._V1_.jpg","https://wowfilmizle.com/uploads/series/prison-break-izle.jpg","https://blog.konusarakogren.com/wp-content/uploads/2020/04/breaking-bad.jpg.png","https://www.gstatic.com/tv/thumb/tvbanners/15981357/p15981357_b_v8_ab.jpg","https://tr.web.img4.acsta.net/pictures/17/09/13/13/12/0694513.jpg","https://lh3.googleusercontent.com/proxy/SqaUSc5f_nYDgKgtSJ9fKzlowotfTuQqAodmY-YdzydTvqVLu8sNQIgK2v15U45QZgsjj7f820JSpF-2SRzu403XGNXs0GFXJaJCpwWu9Ju3jDJLFkRx8zCVUCV9w9b0jjq83CVM0n6-bfveBilERHNkPfVxqEA5uCXY1A","https://tr.web.img4.acsta.net/pictures/19/09/11/16/43/1511539.jpg","https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg"]
  var sonuc = sans[Math.floor(Math.random() * sans.length)];
    const embed = new Discord.RichEmbed()
    .setImage(`${sonuc}`)
    .setTimestamp()
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["dizifilm","dizi","film"],
  permLevel: 0
};

exports.help = {
  name: 'dizifilmöneri',
  description: '',
  usage: 'dizifilmöneri'
};