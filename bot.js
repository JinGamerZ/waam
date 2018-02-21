const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

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
    	message.reply('Como te va estupido?');
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
    if (message.content === 'xd') {
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
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
