
import crypto from 'crypto';

import Telegraf from 'telegraf';
import dotenv from 'dotenv';

import { roll } from './roll';
import { extractCommand } from './command';

dotenv.config();

const TOKEN = process.env.TOKEN || '';
const PORT = parseInt(process.env.PORT || '');
const DOMAIN = process.env.DOMAIN;
const USERNAME = process.env.BOT_USERNAME || 'd20robot';
const SECRET = crypto.randomBytes(64).toString('hex');


const bot = new Telegraf(TOKEN);

bot.command([`roll@${USERNAME}`, 'roll'], extractCommand, roll);

bot.telegram.setWebhook(`${DOMAIN}/${SECRET}`);
bot.startWebhook(`/${SECRET}`, null, PORT);
