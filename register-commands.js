require("dotenv").config();
const { REST, Routes, ApplicationCommandOptionType } = require("discord.js");

const commands = [
  {
    name: "show",
    description: "Shows images..",
    options: [
        {
          name: "id",
          description: "Enter the id",
          type: ApplicationCommandOptionType.Number,
          required: true,
        }
    ]
  }
];

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log("Registering slash commands.....");

    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID
      ),
      { body: commands }
    );

    console.log("Slash commands Registered successfully..");
  } catch (error) {
    console.log(`Error found: ${error}`);
  }
})();
