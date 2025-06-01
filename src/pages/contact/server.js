
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const app = express();
app.use(cors());
app.use(express.json());

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN);
app.post('/contact', async (req, res) => {
  const { name, email, company, budget, services, description } = req.body;

  const message = `
*New Form Submission*

*Client Name:* ${name}
*Email Address:* ${email}
${company ? `*Company:* ${company}\n` : ''}
*Budget:* ${budget}

*Services:*
${services.map(s => `- ${s}`).join('\n')}

*Project Description:*
${description}
  `;

  console.log('Sending message to Telegram:', message);

  try {
    await bot.sendMessage(process.env.TELEGRAM_CHAT_ID, message, { parse_mode: 'Markdown' });
    res.status(200).json({ message: 'Message sent successfully via Telegram.' });
  } catch (error) {
    console.error('Telegram error:', error);
    res.status(500).json({ message: 'Failed to send message via Telegram.' });
  }
});


app.listen(5000, () => console.log('Server running on http://localhost:5000'));
