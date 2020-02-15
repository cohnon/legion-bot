const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
    console.log(message.content);
    if(message.author.bot) return;

    message.channel.send(message.content);

    message.delete();
});

client.login(process.env.BOT_TOKEN);
