const isDebugMode = process.env.NODE_ENV !== 'produciton';

export function log(...messages: string[]) {
    if (isDebugMode) {
        console.log(...messages);
    }
}

export default log;
