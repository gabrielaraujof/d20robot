import { TelegrafContext } from 'telegraf/typings/context';
import { DiceRoll } from 'rpg-dice-roller/lib/umd/bundle';

import { log } from './logger';
import { tokenize } from './command';


export function roll(ctx: TelegrafContext, next?: () => any) {
    const { message, replyWithMarkdown, reply } = ctx;
    try {
        const { exp, text } = tokenize(message.text);
        const diceRoll = new DiceRoll(exp);
        const [, diceRollResult] = diceRoll.output.split(/:\s+/);
        const [dices, total] = diceRollResult.split(/\s+=\s+/);
        const replyMessageRoll = text ? `*${text}*` : `Rolling ${exp}`;
        const replyText = `${replyMessageRoll}\n_${exp}: ${dices}_\nTotal: *${total}*`;
        replyWithMarkdown(replyText);
    } catch (e) {
        reply("Oh no! This one I can't understand 😔");
        log('Error:', e);
    }
    return next();
}
