const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = "+";
client.on('ready', () => {
    console.log('I am ready!');
});



console.log("BOT ONLINE");
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`بكل حب واحترام وشوق نستقبلك ونتمنى لك قضآء
 أجمل اللحظات والآوقات معنا حياك الله 
 **Link** : https://discord.gg/kxwcbTx`) 
}).catch(console.error)
})






client.login(process.env.BOT_TOKEN);
