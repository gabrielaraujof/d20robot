
import Telegraf from 'telegraf';
import express from 'express';
import dotenv from 'dotenv';
import crypto from 'crypto';

dotenv.config();

const TOKEN = process.env.TOKEN || '';
const PORT = parseInt(process.env.PORT || '');
const WEBHOOK_URL = process.env.WEBHOOK_URL;
const WEBHOOK_SECRET = crypto.randomBytes(64).toString('hex');


const bot = new Telegraf(TOKEN);

bot.telegram.setWebhook(`${WEBHOOK_URL}/${WEBHOOK_SECRET}`);


bot.command('roll', ctx => {
    ctx.reply('i\'m alive');
});

const app = express();
app.use(bot.webhookCallback(`/${WEBHOOK_SECRET}`));
app.listen(PORT, () => {
  console.log(`Bot webhook listening on ${PORT || 80}!`)
});