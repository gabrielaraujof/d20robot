import { tokenize } from "./command";

describe('Simple Command', () => {
    test('extract with no text', () => {
        const textMessage = '/r   ';
        const { exp, text } = tokenize(textMessage);
        expect(exp).toBe('1d20');
        expect(text).toBe('');
    });

    test('extract with no text', () => {
        const textMessage = '/roll Perception check!';
        const { exp, text } = tokenize(textMessage);
        expect(exp).toBe('1d20');
        expect(text).toBe('Perception check!');
    });
    
    test('extract with no text', () => {
        const textMessage = '/r 3d8';
        const { exp, text } = tokenize(textMessage);
        expect(exp).toBe('3d8');
        expect(text).toBe('');
    });

    test('extract with no text', () => {
        const textMessage = '/roll d4';
        const { exp, text } = tokenize(textMessage);
        expect(exp).toBe('d4');
        expect(text).toBe('');
    });

    test('extract with text', () => {
        const textMessage = '/r 4d6 Attack with advantage!!';
        const { exp, text } = tokenize(textMessage);
        expect(exp).toBe('4d6');
        expect(text).toBe('Attack with advantage!!');
    });

    test('extract with text', () => {
        const textMessage = '/roll d8 Piercing damage!!';
        const { exp, text } = tokenize(textMessage);
        expect(exp).toBe('d8');
        expect(text).toBe('Piercing damage!!');
    });
});
