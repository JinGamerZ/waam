module.exports = {
     main: function(bot, msg) {
		var start = Date.now();
		var stop, diff;
		msg.channel.sendMessage("Loading...").then(function(newMsg) {
			var stop = Date.now();
			var diff = (stop - start);
			newMsg.edit("Your server has been **promoted.**");
		});
    },
    help: 'Promote your server.'
};
