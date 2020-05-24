import { TelegrafContext } from 'telegraf/typings/context';
import { log } from './logger';

export interface ContextCommandUpdate extends TelegrafContext {
    command: string;
}

export function extractCommand(ctx: ContextCommandUpdate, next?: () => any) {
    const text = ctx.update.message?.text || '';
    log('Input text:', text);
    const [, textCommand] = text.split(new RegExp('[ ]+'), 2);
    ctx.command = textCommand;
    log('Command:', textCommand);
    next();
}
