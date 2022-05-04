 const fs = require('fs');

 const db = require('quick.db')
 
 const config = require('./config.json')
 
 const { color, token, default_prefix } = require('./config.json')
 
 const Discord = require('discord.js');
// Création du client
 const client = new Discord.Client(); 

const bot = client;

const { MessageEmbed } = require('discord.js');


client.commands = new Discord.Collection(); 

 client.aliases = new Discord.Collection(); 

  

 ["command", "events"].forEach(handler => { 

     require(`./handlers/${handler}`)(client); 

 });

client.on('message', message => {
    
    
       
    
    
  let user = message.author;

    

    

  let bal = db.fetch(`money_${user.id}`)

  

  let amount = bal =+ 10;

   

    

    db.add(`money_${user.id}`, amount)
    
  let prefix = db.get(`prefix_${message.guild.id}`) || default_prefix
  
   if (message.mentions.has(client.user)) {
     message.channel.send(`Mon prefix sur ce serveur est : \`${prefix}\`\nVous pouvez faire : \`${prefix}help\``);
   }

    
});

client.on('messageDelete', async (message) => { 

     db.set(`snipemsg_${message.channel.id}`, message.content) 

     db.set(`snipesender_${message.channel.id}`, message.author.id) 

 }); 

const { GiveawaysManager } = require('discord-giveaways');

// Starts updating currents giveaways

const manager = new GiveawaysManager(client, {

    storage: './giveaways.json',

    updateCountdownEvery: 10000,

    hasGuildMembersIntent: false,

    default: {

        botsCanWin: false,

        exemptPermissions: ['MANAGE_MESSAGES', 'ADMINISTRATOR'],

        embedColor: color,

        embedColorEnd: '#DEB887',

        reaction: '🎉'

    }

});

client.giveawaysManager = manager; 

client.login(token);
