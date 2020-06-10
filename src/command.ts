const COMMAND_REGEX = /^\/(?:r|roll)\s+(\d*d\d+)?\s*/;

export function tokenize(message: string) {
    const [, exp, text] = message.split(COMMAND_REGEX);
    return { exp: exp || '1d20', text };
}
