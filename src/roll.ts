import { DiceRoller, DiceRoll } from 'rpg-dice-roller/lib/umd/bundle';

import { ContextCommandUpdate } from './command';
import { log } from './logger';


function executeRoll(rollCommand): DiceRoll {
    const roller = new DiceRoller();
    return roller.roll(rollCommand || 'd20') as DiceRoll;
}

export function roll(ctx: ContextCommandUpdate, next?: () => any) {
    const { command, replyWithMarkdown, reply } = ctx;
    try {
        const diceRoll = executeRoll(command);
        const [, diceRollResult] = diceRoll.output.split(/:\s+/);
        const [dices, total] = diceRollResult.split(/\s+=\s+/);
        const replyText = `_${dices} =_ *${total}*`;
        log('Replying with: ', replyText);
        replyWithMarkdown(replyText);
    } catch (e) {
        log('Error:', e);
        reply("Oh no! This one I can't understand 😔");
    }
    return next();
}
