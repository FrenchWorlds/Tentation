// Définit le module

  const db = require("quick.db")

module.exports = { 

     name: "setprefix", 

     description: "Configure le prefix.", 

     category: "🤖・bot", 

     botPermission: [], 

     authorPermission: [], 

     ownerOnly: false,

     aliases: ["prefix"],

     usage: "< prefix >",

         run: async (client, message, args) => {
// Récupère le préfixe dans la db

  let prefix = db.get(`prefix_${message.guild.id}`) || "&"

  

// S'il envoie la commande sans argument il envoie un message d'erreur

  if (!args[0]) return message.channel.send("Veuillez spécifier un nouveau préfixe")

// Si le préfixe contient des espaces le préfixe est invalide donc il renvoie un message d'erreur

  if (args[1]) return message.channel.send("Préfixe invalide")

// Si le préfixe est trop grand (+ de 4 caractères) il renvoie un message d'erreur

  if (args[0].length > 4) return message.channel.send("Le préfixe ne peut pas dépasser 4 caractères")

// On définit le nouveau préfixe avec args[0]

  db.set(`prefix_${message.guild.id}`, args[0])

  message.channel.send(`Le nouveau préfixe est : \`${args[0]}\``)
             }
    };