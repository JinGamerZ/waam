// Discord.js bot
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity('Usa ?help', {type: 'Playing'});
});

client.on('message', msg => {
    if (!msg.content.startsWith(process.env.PREFIX) || !msg.guild) return;
    const command = msg.content.split(' ')[0].substr(process.env.PREFIX.length);
    const args = msg.content.split(' ').slice(1).join(' ');
    if (command === 'guide') return msg.channel.send('https://git.io/d.js-heroku');
    else if (command === 'invite') return msg.channel.send(process.env.INVITE);
});

// USER INFO
bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "online") return;

  let messageArray = message.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);

  if(!command.startsWith(prefix)) return;

  let cmd = bot.commands.get(command.slice(prefix.length));
  if(cmd) cmd.run(bot, message, args);

  if(command === `?userinfo`) {
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");

    let embed = new Discord.RichEmbed()
      .setDescription(`**Userinfo from: ${member.user}**`)
      .addField("***User ID:***", member.user.id)
      .setColor(Math.floor(Math.random() * 16777214) + 1,)
      .addField("***Discord Tag:***", member.user.tag)
      .addField("***Nickname:***", member.user.username)
      .addField("***Status:***", member.user.status)
      .addField("***Account Created At:***", member.user.createdAt)
      .setFooter(`Userinfo created by Nep`);
      

      message.channel.sendEmbed(embed);

      return;
    
    console.log(`[Command Log] ${message.author.username} has used the userinfo Command!`)
  }

// BOT ANSWERS
client.on('message', message => {
    if (message.content === '?creadores') {
    	message.reply('Wiim esta creado por @JinGamerZ Y @SrWitherHD.');
  	}
});
client.on('message', message => {
    if (message.content === '?creditos') {
    	message.reply('Wiim esta creado por @JinGamerZ Y @SrWitherHD.');
  	}
});
client.on('message', message => {
    if (message.content === 'hola') {
    	message.reply('Como te va estupid@?');
  	}
});
client.on('message', message => {
    if (message.content === 'Hola') {
    	message.reply('Como te va estupid@?');
  	}
});
client.on('message', message => {
    if (message.content === ':v') {
    	message.reply('Hey, esa carita metetela en el culo!');
  	}
});
client.on('message', message => {
    if (message.content === ':V') {
    	message.reply('Hey, esa carita metetela en el culo!');
  	}
});
client.on('message', message => {
    if (message.content === 'v:') {
    	message.reply('Hey, esa carita metetela en el culo!');
  	}
});
client.on('message', message => {
    if (message.content === 'V:') {
    	message.reply('Hey, esa carita metetela en el culo!');
  	}
});
client.on('message', message => {
    if (message.content === ';v') {
    	message.reply('Hey, esa carita metetela en el culo!');
  	}
});
client.on('message', message => {
    if (message.content === 'v;') {
    	message.reply('Hey, esa carita metetela en el culo!');
  	}
});
client.on('message', message => {
    if (message.content === ':u') {
    	message.reply('Hey, esa carita metetela en el culo! (:');
  	}
});
client.on('message', message => {
    if (message.content === 'xd') {
    	message.reply('La x es de XXX y la d es de tu verga doblada rata.');
  	}
});
client.on('message', message => {
    if (message.content === 'XD') {
    	message.reply('La x es de XXX y la d es de tu verga doblada rata.');
  	}
});
client.on('message', message => {
    if (message.content === 'Xd') {
    	message.reply('La x es de XXX y la d es de tu verga doblada rata.');
  	}
});
client.on('message', message => {
    if (message.content === 'xD') {
    	message.reply('La x es de XXX y la d es de tu verga doblada rata.');
  	}
});
client.on('message', message => {
    if (message.content === '@Wiim') {
    	message.reply('Que verga quieres niño retrasad@!');
  	}
});
client.on('message', message => {
    if (message.content === 'vida') {
    	message.reply('Comele la verga entera.');
  	}
});
client.on('message', message => {
    if (message.content === 'Vida') {
    	message.reply('Comele la verga entera.');
  	}
});
client.on('message', message => {
    if (message.content === 'noob') {
    	message.reply('Lo eres tu estupido noob');
  	}
});
client.on('message', message => {
    if (message.content === 'Noob') {
    	message.reply('Lo eres tu estupido noob');
  	}
});
client.on('message', message => {
    if (message.content === 'Alv') {
    	message.reply('Comete unas bolas peludas!');
  	}
});
client.on('message', message => {
    if (message.content === 'alv') {
    	message.reply('Comete unas bolas peludas!');
  	}
});
client.on('message', message => {
    if (message.content === 'hack') {
    	message.reply('Solo los usan ratas como tu.');
  	}
});
client.on('message', message => {
    if (message.content === 'hacks') {
    	message.reply('Solo los usan ratas como tu.');
  	}
});
client.on('message', message => {
    if (message.content === 'Hacks') {
    	message.reply('Solo los usan ratas como tu.');
  	}
});
client.on('message', message => {
    if (message.content === 'hax') {
    	message.reply('Solo los usan ratas como tu.');
  	}
});
client.on('message', message => {
    if (message.content === 'roblox') {
    	message.reply('Un juego famoso.');
  	}
});
client.on('message', message => {
    if (message.content === 'Roblox') {
    	message.reply('Un juego famoso.');
  	}
});
client.on('message', message => {
    if (message.content === 'Robux') {
    	message.reply('Comprate una vida con tu dinero!');
  	}
});
client.on('message', message => {
    if (message.content === 'robux') {
    	message.reply('Comprate una vida con tu dinero!');
  	}
});
client.on('message', message => {
    if (message.content === 'robux') {
    	message.reply('Comprate una vida con tu dinero!');
  	}
});
client.on('message', message => {
    if (message.content === '?help') {
    	message.reply('Necesitas ayuda? Pues metete una dedo en el culo!');
  	}
});
client.on('message', message => {
    if (message.content === '!help') {
    	message.reply('Necesitas ayuda? Pues metete una dedo en el culo!');
  	}
});
client.on('message', message => {
    if (message.content === '.help') {
    	message.reply('Necesitas ayuda? Pues metete una dedo en el culo!');
  	}
});
client.on('message', message => {
    if (message.content === '=help') {
    	message.reply('Necesitas ayuda? Pues metete una dedo en el culo!');
  	}
});
client.on('message', message => {
    if (message.content === '+help') {
    	message.reply('Necesitas ayuda? Pues metete una dedo en el culo!');
  	}
});
client.on('message', message => {
    if (message.content === '!rank') {
    	message.reply('Tu rank es el de los estupidos porque tu lo eres!');
  	}
});
client.on('message', message => {
    if (message.content === 't!credits') {
    	message.reply('Dile a tu madre que te los compre idiota!');
  	}
});
client.on('message', message => {
    if (message.content === '!play') {
    	message.reply('Para que mierda quieres musica si necesitas una vida primero!');
  	}
});
client.on('message', message => {
    if (message.content === '!p') {
    	message.reply('Para que mierda quieres musica si necesitas una vida primero!');
  	}
});
client.on('message', message => {
    if (message.content === 'jailbreak') {
    	message.reply('Tu eres un prisionero pero uno muy rata.');
  	}
});
client.on('message', message => {
    if (message.content === 'Jailbreak') {
    	message.reply('Tu eres un prisionero pero uno muy rata.');
  	}
});
client.on('message', message => {
    if (message.content === 'rata') {
    	message.reply('La rata de este server eres tu!');
  	}
});
client.on('message', message => {
    if (message.content === 'Rata') {
    	message.reply('La rata de este server eres tu!');
  	}
});
client.on('message', message => {
    if (message.content === 'sr') {
    	message.reply('Te suscribiste a su canal? Es gratis.');
  	}
});
client.on('message', message => {
    if (message.content === 'wither') {
    	message.reply('Te suscribiste a su canal? Es gratis.');
  	}
});
client.on('message', message => {
    if (message.content === 'srwitherhd') {
    	message.reply('Te suscribiste a su canal? Es gratis.');
  	}
});
client.on('message', message => {
    if (message.content === 'SrWitherHD') {
    	message.reply('Te suscribiste a su canal? Es gratis.');
  	}
});
client.on('message', message => {
    if (message.content === 'srwither') {
    	message.reply('Te suscribiste a su canal? Es gratis.');
  	}
});
client.on('message', message => {
    if (message.content === 'jin') {
    	message.reply('El es el puto amo, y tu eres una verga.');
  	}
});
client.on('message', message => {
    if (message.content === 'jinz') {
    	message.reply('El es el puto amo, y tu eres una verga.');
  	}
});
client.on('message', message => {
    if (message.content === 'jingamerz') {
    	message.reply('El es el puto amo, y tu eres una verga.');
  	}
});
client.on('message', message => {
    if (message.content === 'JinGamerZ') {
    	message.reply('El es el puto amo, y tu eres una verga.');
  	}
});
client.on('message', message => {
    if (message.content === 'puto') {
    	message.reply('Eres tu y toda tu familia.');
  	}
});
client.on('message', message => {
    if (message.content === 'Puto') {
    	message.reply('Eres tu y toda tu familia.');
  	}
});
client.on('message', message => {
    if (message.content === 'gay') {
    	message.reply('Lo eres tu pedaso de rata!');
  	}
});
client.on('message', message => {
    if (message.content === 'Gay') {
    	message.reply('Lo eres tu pedaso de rata!');
  	}
});
client.on('message', message => {
    if (message.content === 'Oye') {
    	message.reply('Escuchame esta trolo.');
  	}
});
client.on('message', message => {
    if (message.content === 'oye') {
    	message.reply('Escuchame esta trolo.');
  	}
});
client.on('message', message => {
    if (message.content === 'adios') {
    	message.reply('Bueno adios pedaso de rata!');
  	}
});
client.on('message', message => {
    if (message.content === 'Adios') {
    	message.reply('Bueno adios pedaso de rata!');
  	}
});
client.on('message', message => {
    if (message.content === ':3') {
    	message.reply('No eres kawaii, tu eres una rata.');
  	}
});
client.on('message', message => {
    if (message.content === '!skip') {
    	message.reply('Para que la saltas pedaso de estupido.');
  	}
});
client.on('message', message => {
    if (message.content === 'Lel') {
    	message.reply('De que te impresionas estupido?');
  	}
});
client.on('message', message => {
    if (message.content === 'lel') {
    	message.reply('De que te impresionas estupido?');
  	}
});
client.on('message', message => {
    if (message.content === 'LEL') {
    	message.reply('De que te impresionas estupido?');
  	}
});
client.on('message', message => {
    if (message.content === 'Lol') {
    	message.reply('De que te impresionas estupido?');
  	}
});
client.on('message', message => {
    if (message.content === 'lol') {
    	message.reply('De que te impresionas estupido?');
  	}
});
client.on('message', message => {
    if (message.content === 'No') {
    	message.reply('De que verga te negas rata?');
  	}
});
client.on('message', message => {
    if (message.content === 'no') {
    	message.reply('De que verga te negas rata?');
  	}
});
client.on('message', message => {
    if (message.content === 'Si') {
    	message.reply('Si que, no hagas nada tonto.');
  	}
});
client.on('message', message => {
    if (message.content === 'si') {
    	message.reply('Si que, no hagas nada tonto.');
  	}
});
client.on('message', message => {
    if (message.content === '>:V') {
    	message.reply('Comete una verga entera.');
  	}
});
client.on('message', message => {
    if (message.content === '>:v') {
    	message.reply('Comete una verga entera.');
  	}
});
client.on('message', message => {
    if (message.content === '-.-') {
    	message.reply('No me mires con esa carita estupido.');
  	}
});
client.on('message', message => {
    if (message.content === '-_-') {
    	message.reply('No me mires con esa carita estupido.');
  	}
});
client.on('message', message => {
    if (message.content === '-_-') {
    	message.reply('No me mires con esa carita estupido.');
  	}
});
client.on('message', message => {
    if (message.content === 't!profile') {
    	message.reply('Para que quieres ver tu perfil de rata?');
  	}
});
client.on('message', message => {
    if (message.content === 'negro') {
    	message.reply('Eres tu y toda tu verga de familia.');
  	}
});
client.on('message', message => {
    if (message.content === 'Negro') {
    	message.reply('Eres tu y toda tu verga de familia.');
  	}
});
client.on('message', message => {
    if (message.content === 'negros') {
    	message.reply('Eres tu y toda tu verga de familia.');
  	}
});
client.on('message', message => {
    if (message.content === 'Negros') {
    	message.reply('Eres tu y toda tu verga de familia.');
  	}
});
client.on('message', message => {
    if (message.content === 'de nada') {
    	message.reply('No agradezcas a alguien rata.');
  	}
});
client.on('message', message => {
    if (message.content === 'De nada') {
    	message.reply('No agradezcas a alguien rata.');
  	}
});
client.on('message', message => {
    if (message.content === 'De Nada') {
    	message.reply('No agradezcas a alguien rata.');
  	}
});
client.on('message', message => {
    if (message.content === 'nada') {
    	message.reply('Ya ahora lo decis estupido.');
  	}
});
client.on('message', message => {
    if (message.content === 'Nada') {
    	message.reply('Ya ahora lo decis estupido.');
  	}
});
client.on('message', message => {
    if (message.content === 'okno') {
    	message.reply('No mientas la concha de tu tia!');
  	}
});
client.on('message', message => {
    if (message.content === 'Okno') {
    	message.reply('No mientas la concha de tu tia!');
  	}
});
client.on('message', message => {
    if (message.content === 'OkNo') {
    	message.reply('No mientas la concha de tu tia!');
  	}
});
client.on('message', message => {
    if (message.content === 'OkNo') {
    	message.reply('No mientas la concha de tu tia!');
  	}
});
client.on('message', message => {
    if (message.content === 'C Mamo') {
    	message.reply('Ce mamo tu hermana.');
  	}
});
client.on('message', message => {
    if (message.content === 'C mamo') {
    	message.reply('Ce mamo tu hermana.');
  	}
});
client.on('message', message => {
    if (message.content === 'c mamo') {
    	message.reply('Ce mamo tu hermana.');
  	}
});
client.on('message', message => {
    if (message.content === 'c mamut') {
    	message.reply('Ce mamo tu hermana.');
  	}
});
client.on('message', message => {
    if (message.content === 'Ce mamo') {
    	message.reply('Ce mamo tu hermana.');
  	}
});
client.on('message', message => {
    if (message.content === 'ce mamo') {
    	message.reply('Ce mamo tu hermana.');
  	}
});
client.on('message', message => {
    if (message.content === 'mmg') {
    	message.reply('Mama guevo tu padre :))');
  	}
});
client.on('message', message => {
    if (message.content === 'mainkra') {
    	message.reply('Tu cagas los cuadrados viciado de mierda.');
  	}
});
client.on('message', message => {
    if (message.content === 'minecraft') {
    	message.reply('Tu cagas los cuadrados viciado de mierda.');
  	}
});
client.on('message', message => {
    if (message.content === ';-;') {
    	message.reply('Para que mierda pones esa carita!');
  	}
});
client.on('message', message => {
    if (message.content === 't!top') {
    	message.reply('Estas en el puesto mas rata del server!');
  	}
});
client.on('message', message => {
    if (message.content === 'plz') {
    	message.reply('Por que verga pides por favor algo consiguelo tu!');
  	}
});
client.on('message', message => {
    if (message.content === 'please') {
    	message.reply('Por que verga pides por favor algo consiguelo tu!');
  	}
});
client.on('message', message => {
    if (message.content === 'we') {
    	message.reply('Para pinche weon culeado cabeza de pija.');
  	}
});
client.on('message', message => {
    if (message.content === 'bye') {
    	message.reply('Adios estupido del orto!');
  	}
});
client.on('message', message => {
    if (message.content === 'bay') {
    	message.reply('Adios estupido del orto!');
  	}
});
client.on('message', message => {
    if (message.content === 'q sad') {
    	message.reply('Tu tienes una vida sad estupido!');
  	}
});
client.on('message', message => {
    if (message.content === 'sad') {
    	message.reply('Tu tienes una vida sad estupido!');
  	}
});
client.on('message', message => {
    if (message.content === 'e.e') {
    	message.reply('De que verga miras tu vete a ver video de nopor!');
  	}
});
client.on('message', message => {
    if (message.content === 'de ti') {
    	message.reply('Si tu verga rata!');
  	}
});
client.on('message', message => {
    if (message.content === 'De ti') {
    	message.reply('Si tu verga rata!');
  	}
});
client.on('message', message => {
    if (message.content === '+join') {
    	message.reply('Porque en vez de entrar no te vas del server?');
  	}
});
client.on('message', message => {
    if (message.content === 't!daily') {
    	message.reply('No vas a recivir nada por put*');
  	}
});
client.on('message', message => {
    if (message.content === 'no c') {
    	message.reply('No sabes que? >:|');
  	}
});

// BOT TOKEN
client.login(process.env.TOKEN);
