const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const moderation = require('./moderation');

client.once('ready', () => {
    console.log('Bot is ready!');
});

client.on('message', message => {
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        message.channel.send('Pong!');
    } else if (command === 'kick') {
        moderation.kickUser(message, args);
    } else if (command === 'ban') {
        moderation.banUser(message, args);
    }
    // Add more commands as needed

});

client.login(config.token);
