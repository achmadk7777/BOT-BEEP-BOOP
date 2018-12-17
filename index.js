const Discord = require('discord.js');

const TOKEN = 'NTI0MTI2MDI2MDM3NTkyMDY0.DvjrQw.W-_rDUdIjsTyNS37WM0chW0zVV8';

const fs = require("fs");

// global setting
const prefix = '</';

var bot = new Discord.Client();

var bot = new Discord.Client();
 
var btrue = new Boolean(true);

var btrueString = new Boolean('true');

var bfalseString = new Boolean('false');

var bSuLin = new Boolean('Su Lin');

var bArrayProto = new Boolean([]);

var bObjProto = new Boolean({});

bot.on('message', async message => {

    let msg = message.content.toUpperCase();
    let sender = message.author;
    let args = message.content.slice(prefix.length).trim().split(/ + /g);
    let command = args.shift().toLowerCase();


    if (msg === prefix + 'PING') {
        message.channel.send('PONG')
    }

    var dogs  = ["321321321", "565665655", "21323232323", "4564564311231", "2121548787", "98798989898"]
    var throwdog = dogs[Math.floor(Math.random() * dogs.length)]

    if (msg === prefix + 'DOG') {
        message.channel.send(`nah ini dia randomnya! \n${throwdog}`);
    }

})

bot.on("ready", function() {
    console.log('Ready');
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    
    if (message.content == "Hello") {
        message.channel.sendMessage("Hai juga");
    }
});

bot.login(process.env.BOT_TOKEN); 
