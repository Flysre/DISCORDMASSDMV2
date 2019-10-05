console.clear()
process.title = "[XPSHOP.TK] xPMassDM V1 - Most powerfull bypassing MassDM BOT Script"
const readline = require('readline');
const Discord = require("discord.js");
const client = new Discord.Client();
var sleep = require('system-sleep');
console.log("\u001b[0mConnecting to tokens.. \u001b[35mSoftware will start in 10s\u001b[0m")
const fs = require("fs");
var term = require( 'terminal-kit' ).terminal ;

// tokens[Math.floor(Math.random() * tokens.length)] Random

process.on('uncaughtException', function(err) {
});

const ez = readline.createInterface({
    input: fs.createReadStream('tokens.txt'),
    console: true
})
ez.on('line', function(line) {
    const bot = new Discord.Client();

    bot.login(line).catch(O_o => {})
    bot.on('ready', () => {

        console.log("\u001b[31mdiscordapp.com/api/oauth2/authorize?client_id=" + bot.user.id + "&permissions=8&scope=bot\u001b[0m   " + bot.user.username + "#" + bot.user.discriminator);
        bot.destroy()
    })
})
sleep(10000);
console.log("\u001b[31mMake sure to invite each token on the selected server(s)\u001b[0m")
console.log("\u001b[32mAny exception will drasticly the DM SUCCEES RATE of the bot.")

console.log("\nWelcome to \u001b[36xxPMassDM V1\u001b[0m")
console.log("The Most powerfull bypassing MassDM BOT Script ever created.")

let tokens = fs.readFileSync('tokens.txt', 'utf-8').replace(/\r/g, '').split('\n');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('\u001b[0mMessage to mass DM : ', (answer) => {
    meg2spam = answer
    myFunc()

    function myFunc() {

        const bot = new Discord.Client();

        console.log(fs.readFileSync('tokens.txt', 'utf-8').split('\n', 1)[0])
        var ez = tokens[Math.floor(Math.random() * tokens.length)];
        bot.login(ez).catch(O_o => {})

        bot.on('ready', () => {
            gg()
        })

        function gg() {
            bot.users.forEach((member) => {
                var line = tokens[Math.floor(Math.random() * tokens.length)];

                client.login(line).catch(O_o => {})


                client.on('ready', () => {
                    member.send(answer).catch(O_o => {})
                    console.log(client.user.username + "#" + client.user.discriminator + " just send message to :" + member.username + "#" + member.discriminator)

                })

            })
        }

    }
})
