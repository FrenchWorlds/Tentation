const { MessageEmbed } = require("discord.js");

const { color } = require('../../config.json') 

const ms = require('ms');  

 module.exports = { 

     name: "tempban", 

     description: "Tempban l'utilisateur avec son id.", 

     category: "🧑‍⚖️・modération", 

     botPermission: ["BAN_MEBERS"], 

     authorPermission: ["BAN_MEMBERS"], 

     ownerOnly: false,

     

     usage: "< ID >",

     aliases: ["banid"],

     

   run: async(bot, message, args) => {
   let toBan = message.mentions.members.first();

      let reason = args.slice(2).join(" ");

      let member = message.guild.member(toBan)

      if(!args[0]) return  message.channel.send('Please mention some to ban, so I can ban that fooly!');

      if(!toBan)  return  message.channel.send(`${args[0]} is not a member of this guild, fooly.`);

      if(!reason)  return  message.channel.send('Please specify a reason for the ban fooly!');

      

      if(!toBan.bannable){

        return message.channel.send("This dude has super powers, fooly. I can't ban this person.")

      }

    if(member) {

        toBan.ban({

          reason: `${reason}`

        })

      }

        let bantime = args[1];
if(!bantime) return message.reply("Fooly! You need to provide a time!");
message.reply(`Fooly has been banned for ${ms(ms(bantime))}`);

        await(bantime(ban));

        message.reply(`Fooly has been banned for ${ms(ms(bantime))}`);

      if(toBan.bannable){

        const messageEmbed = new Discord.MessageEmbed()

        .setTitle('Fooly was banned')

        .addField('Person that was banned:', toBan)

        .addField('Banned by:', message.author)

        .addField('Reason:', reason)

        .setTimestamp(Date.now())

        .setColor('#FF0000')

        .setFooter('Fooly Discord Bot');

        message.channel.send(messageEmbed);

        toBan.ban();

        }

        setTimeout(function(){

          message.guild.members.unban(toBan)

          message.channel.send(`<@${toBan.id}> has been unbanned (temporary ban is finished).`);

        }, ms(bantime)); 

        

    }

};
   