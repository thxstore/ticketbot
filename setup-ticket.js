const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('setup-ticket')
    .setDescription('Configura o sistema de tickets'),
  async execute(interaction) {
    // Lógica para criar a embed com botão de abrir ticket
    await interaction.reply('Comando de setup do ticket funcionando!');
  }
};
