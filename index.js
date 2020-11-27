const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`); 
  client.user.setActivity(`Moderando Infinite E-Sports /help`);
});

command(client, 'help', (message) => {
  message.channel.send(`
  Comandos de Infinite Support:

  
`)
})

client.login('NzcxNzUxODA1MjE4MzI0NDgw.X5wr4A.IPC7hXyBV51JTHQAtIzNxvCSAYY');