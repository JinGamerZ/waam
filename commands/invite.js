module.exports = {
     main: function(bot, msg) {
		var start = Date.now();
		var stop, diff;
		msg.channel.sendMessage("Invite me!").then(function(newMsg) {
			var stop = Date.now();
			var diff = (stop - start);
			newMsg.edit("Invite me! https://discordapp.com/api/oauth2/authorize?client_id=415709298048499714&permissions=8&scope=bot");
		});
    },
    help: 'Invitation Link.'
};
