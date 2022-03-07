  

 module.exports = { 

     

     name: "setnsfw", 

     description: "Modifie le channel en le rendant nsfw.", 

     category: "🧑‍⚖️・modération", 

     botPermission: ["MANAGE_CHANNELS"], 

     authorPermission: ["MANAGE_CHANNELS"], 

     ownerOnly: false,

     

     usage: "",

     aliases: [],
              
              

 run: async(client, message) => {
     let channel = message.channel; channel.edit({ nsfw: !channel.nsfw })  
     if (message.channel.nsfw === false) {

    return message.channel.send(" Le channel est bien devenus nsfw !");}

    if (message.channel.nsfw === true) {

    return message.channel.send(" Le channel est bien redevenue normale !");}
    }
 
 }