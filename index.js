// Discord.js bot
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity('Use -help', {type: 'Playing'});
});

client.on('message', msg => {
    if (!msg.content.startsWith(process.env.PREFIX) || !msg.guild) return;
    const command = msg.content.split(' ')[0].substr(process.env.PREFIX.length);
    const args = msg.content.split(' ').slice(1).join(' ');
    if (command === 'guide') return msg.channel.send('https://git.io/d.js-heroku');
    else if (command === 'invite') return msg.channel.send(process.env.INVITE);
});

// BOT ANSWERS
client.on('message', message => {
    if (message.content === '-help') {
    	message.reply('**Commands** **-credits, -invite**');
  	}
});
client.on('message', message => {
    if (message.content === '-credits') {
    	message.reply('Wiim is being created by @JinGamerZ and @SrWitherHD.');
  	}
});
client.on('message', message => {
    if (message.content === '-invite') {
    	message.reply('Invite me! https://discordapp.com/api/oauth2/authorize?client_id=415709298048499714&permissions=8&scope=bot');
  	}
});

// BOT TOKEN
client.login(process.env.TOKEN);
