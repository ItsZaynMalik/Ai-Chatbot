const { MessageEmbed, Client, Intents, Message } = require('discord.js')
const { token } = require('./config.json')
const fetch = require('node-fetch')

const client = new Client({
  intents: 32767
})

client.on('ready', () => {
  console.log(`${client.user.tag} Is up!`)
  client.user.setActivity(`Dm me to chat!`, { type: 'WATCHING' });
});



client.on('messageCreate', async (message) => {

       if(message.author.bot) return;  // If the message is from a bot, ignore it.

       let channel = client.channels.cache.get('987759414561886229') // Channel id which you need ai to work

       if(message.channel !== channel) return; // If users send's message in other channel than channel id then return

       let key = 'YOUR_API_KEY' // Your api key - get it from https://brainshop.ai/

       fetch(`http://api.brainshop.ai/get?bid=153868&key=${key}&uid=1&msg=${encodeURIComponent(message.content)}`)
       .then(res => res.json())
       .then(data => {
               channel.send(data.cnt)
       })
});

client.login(token)