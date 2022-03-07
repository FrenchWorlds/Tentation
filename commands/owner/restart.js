

module.exports = {

	name: 'restart',

	description: "Redémarre le bot",
    category: "🧑‍💻・owner",

     botPermission: [], 

     authorPermission: [], 

     ownerOnly: true,
    
     aliases: ["rs","rst"],
    
    

	run: async (client, message, args) => {


		await message.channel.send('**Redémarrage..**');
        console.log("Redémarrage..");
        

        
		return process.exit();
        

	},

};