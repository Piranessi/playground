export function log(message: string, level: 'info' | 'warn' | 'error' = 'info'): void {
    // if (process.env.NODE_ENV === 'development') {
        if (level === 'info') {
            console.log(message);
        } else if (level === 'warn') {
            console.warn(message);
        } else if (level === 'error') {
            console.error(message);
        }
    //
}