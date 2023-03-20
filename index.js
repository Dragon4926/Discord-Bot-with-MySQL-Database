const mysql = require('mysql');
const { Client, IntentsBitField } = require('discord.js');
require('dotenv/config');

// Discord bot credentials
const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.MessageContent,
  ],
});

// MySQL database credentials
const db = mysql.createConnection({
  host: 'ryuga',
  user: 'Ryuga',
  password: process.env.PASSWORD ,
  database: 'Ryu'
});


// Connect to MySQL database
db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

// Discord bot ready event
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand()) return;
  if (interaction.commandName === "show") {
    const id = interaction.options.get("id").value;

    const sql = 'SELECT * FROM images WHERE id = ?';
      db.query(sql, [id], (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
          const url = results[0].url;
          interaction.reply(url);
        } else {
          interaction.reply(`Image with ID ${id} not found.`);
        }
      });
  }

});

// Log in to Discord bot
client.login(process.env.TOKEN);
