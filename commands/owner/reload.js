 

 const Discord = require("discord.js");
 

        

  

 module.exports = {
     

           name: "reload", 

          description: "Recharge une commande.", 

            

           ownerOnly: true, 

           category: "🧑‍💻・owner",

           

           usage: "< commande >",

     

          aliases: ["r"],

 run: async (client, message, args) => { 
      const { readdirSync } = require("fs"); 

    const { join } = require("path");
  

 if (!args[0]) return message.channel.send("Veuillez fournir une commande pour recharger !"); 

  

 const commandName = args[0].toLowerCase(); 

          

 const command = client.commands.get(commandName) 

                         || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(commandName)); 

  

 if (!command) return message.channel.send("Cette commande n'existe pas.  Réessayer."); 

          

         readdirSync(join(__dirname, "..")).forEach(f => { 

                 const files = readdirSync(join(__dirname, "..", f)); 

                 if (files.includes(`${commandName}.js`)) { 

                         const file = `../${f}/${commandName}.js`; 

                         try { 

                                 delete require.cache[require.resolve(file)]; 

                                 client.commands.delete(commandName); 

                                 const pull = require(file); 

                                 client.commands.set(commandName, pull); 

                                 return message.channel.send(`Rechargé avec succès : \`${commandName}.js\` !`); 

                         } 

                         catch (err) { 

                                 message.channel.send(`Erreur dans : \`${args[0].toUpperCase()}\` `); 

                                 return console.log(err.stack || err); 

                         } 

                 } 

         }); 

 }};