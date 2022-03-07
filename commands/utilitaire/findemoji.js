 

 const discord = require('discord.js') 

 const fetch = require("node-fetch") 

const { color } = require('../../config.json');

    

 module.exports = { 

     name: "findemoji", 

     aliases: ["fe"], 

     category: "⚙️・Utilitaire", 

     description: "Vole Emoji d'autres serveurs vers votre serveur.", 

     authorPermission: ["MANAGE_EMOJIS"],
     
     botPermission: ["MANAGE_EMOJIS"], 

   

     run: async (client, message, args) => { 

       if (!message.member.hasPermission("MANAGE_EMOJIS")) { 

             return message.channel.send("Vous n'êtes pas autorisé à utiliser cette commande ! Il vous faut la permission MANAGE_EMOJIS.") 

         } 

 let emojis = await fetch("https://emoji.gg/api/").then(res => res.json()); 

      const q = args.join(" ").toLowerCase().trim().split(" ").join("_"); 

      let matches = emojis.filter(s => s.title == q || s.title.includes(q)); 

       

      let noResult = new discord.MessageEmbed() 

         .setDescription(`| :x: Aucun résultats trouvés pour : ${args.join(" ")}!`) 

         .setColor(color) 

       

      if (!matches.length) return message.channel.send(noResult) 

      let page = 0; 

      let embed = new discord.MessageEmbed() 

      .setTitle(matches[page].title) 

      .setURL("https://discordemoji.com/emoji/" + matches[page].slug) 

      .setColor(color) 

      .setImage(matches[page].image) 

      .setFooter(`Emoji ${page + 1}/${matches.length}`); 

      const msg = await message.channel.send(embed); 

      emojis = ["◀️", "▶️", "✅", "❌"]; 

      msg.react(emojis[0]); 

      msg.react(emojis[1]); 

      msg.react(emojis[2]); 

      msg.react(emojis[3]); 

      const filter = (r, u) => emojis.includes(r.emoji.name.trim()) && u.id == message.author.id; 

      let doing = true; 

      while (doing) { 

      let reaction; 

      try { reaction = await msg.awaitReactions(filter, { max: 1, time: 120000, errors: ["time"] })} 

      catch { message.channel.send(message.author.toString() + ", Vous avez pris trop de temps."); msg.reactions.removeAll() ; doing = false; return; }; 

      reaction = reaction.first(); 

      const rmsg = reaction.message; 

      if (reaction.emoji.name == emojis[0]) { 

      page--; 

      if (!matches[page]) { 

      page++; 

      rmsg.reactions.resolve(reaction.emoji.name).users.remove(message.author.id).catch(err => {}) 

      } else { 

      let newembed = new discord.MessageEmbed() 

      .setTitle(matches[page].title) 

      .setURL("https://discordemoji.com/emoji/" + matches[page].slug) 

      .setColor(color) 

      .setImage(matches[page].image) 

      .setFooter(`Emoji ${page + 1}/${matches.length}`); 

      msg.edit(newembed); 

      rmsg.reactions.resolve(reaction.emoji.name).users.remove(message.author.id).catch(err => {}) 

      } 

      } else if (reaction.emoji.name == emojis[1]) { 

      page++; 

      if (!matches[page]) { 

      page--; 

      rmsg.reactions.resolve(reaction.emoji.name).users.remove(message.author.id).catch(err => {}) 

      } else { 

      let newembed = new discord.MessageEmbed() 

      .setTitle(matches[page].title) 

      .setURL("https://discordemoji.com/emoji/" + matches[page].slug) 

      .setColor(color) 

      .setImage(matches[page].image) 

      .setFooter(`Emoji ${page + 1}/${matches.length}`); 

      msg.edit(newembed); 

 rmsg.reactions.resolve(reaction.emoji.name).users.remove(message.author.id).catch(err => {}) 

      } 

      } else if (reaction.emoji.name == emojis[2]) { 

       const res = matches[page]; 

       let created; 

       message.channel.startTyping(); 

       try {  

         created = await message.guild.emojis.create(res.image, res.title); 

         message.channel.stopTyping(); 

        } catch { 

         message.channel.stopTyping(); 

         message.channel.send(`Impossible d'ajouter: ${res.title}.`); 

         rmsg.reactions.resolve(reaction.emoji.name).users.remove(message.author.id).catch(err => {}) 

         doing = false; 

         break; 

        } 

        message.channel.send(`Ajouté avec succès: ${created}!`); 

       rmsg.reactions.resolve(reaction.emoji.name).users.remove(message.author.id).catch(err => {}) 

        doing = false; 

        break; 

   

      } else if (reaction.emoji.name == emojis[3]) { 

        message.channel.send("Commande annulée."); 

        msg.reactions.removeAll(); 

        return; 

      }}; 

       

     } 

 }