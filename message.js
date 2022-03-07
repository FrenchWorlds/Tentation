 

 const {default_prefix, owners} = require ('../config.json');
const config = require('../config.json');

const db = require("quick.db");
  

 module.exports.run = async (client, message) => { 

   if (message.author.bot) return; 

   if (!message.guild) return; 

   if (!message.member.hasPermission ('ADMINISTRATOR')) { 

     message.content.split (' ').forEach (m => { 

 /*       if (is_url(m)) { 

         message.delete().catch(err => {}) 

        return message.channel.send("You are not allowed to send links :/") 

       } */
                                          // else if (badwords.find(x => x.toLowerCase() === m.toLowerCase())) { 

       //message.delete().catch(err => {}); 

       //return message.channel.send( 

       // "You are not allowed to use (**" + m + "**) word here" 

       // YOU CAN IMPLEMENT YOUR OWN URL CHECK/BAD WORDS CHECK FUNCTIONS 

     }); 

   } 

  

   let prefix = db.get(`prefix_${message.guild.id}`), default_prefix; 

  

// Vérifie que guild est défini

  if (!message.guild) return



// Renvoie le préfixe par défaut s'il n'y a rien

  if (prefix === null) prefix = config.default_prefix

   if (!message.content.startsWith (prefix)) return; 

  

   if (!message.member) 

     message.member = await message.guild.members.fetch (message); 

  

   const args = message.content.slice (prefix.length).trim ().split (/ +/g); 

   const cmd = args.shift ().toLowerCase (); 

  

   if (cmd.length === 0) return; 

  

   let command = client.commands.get (cmd); 

   if (!command) command = client.commands.get (client.aliases.get (cmd)); 

  

   if (!command) return; 

   if (command.botPermission) { 

     let neededPerms = []; 

  

     command.botPermission.forEach (p => { 

       if (!message.guild.me.hasPermission (p)) neededPerms.push ('`' + p + '`'); 

     }); 

  

     if (neededPerms.length) 

       return message.channel.send ( 

         `J\'ai besoin de la ou des permissions ${neededPerms.join (', ')} pour exécuter cette commande !` 

       ); 

   } 

   if(command.authorPermission) { 

     let neededPerms = []; 

  

     command.authorPermission.forEach (p => { 

       if (!message.member.hasPermission (p)) neededPerms.push ('`' + p + '`'); 

     }); 

  

     if (neededPerms.length) 

       return message.channel.send ( 

         `Tu n\'as pas la ou les permission ${neededPerms.join} pour exécuter cette commande (', ')!` 

       ); 

   } 

  

   if (command.ownerOnly) { 

     if (!owners.includes (message.author.id)) 

       return message.channel.send ( 

         'Cette commande ne peut être utilisée que par le **propriétaire** du bot.' 

       ); 

   } 

  

   if (command) command.run (client, message, args); 

 };