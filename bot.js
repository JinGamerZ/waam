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
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
