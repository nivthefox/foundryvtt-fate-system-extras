export const LogLevels = Object.freeze({
    Error: 0,
    Warn: 1,
    Info: 2,
    Debug: 3,
});

export class Logger {
    name;
    level;
    facility = console;

    constructor(name, level) {

        if (typeof name !== 'string' || name.length === 0) {
            throw new Error('Logger must have a name');
        }

        if (!Object.values(LogLevels).includes(level)) {
            throw new Error('Logger must have a level');
        }

        this.name = name;
        this.level = level;
    }

    debug(format, ...args) {
        if (this.level >= LogLevels.Debug) {
            const error = new Error;
            this.facility.debug(`${this.name} | ${format}`, ...args, error.stack);
        }
    }

    info(format, ...args) {
        if (this.level >= LogLevels.Info) {
            this.facility.info(`${this.name} | ${format}`, ...args);
        }
    }

    warn(format, ...args) {
        if (this.level >= LogLevels.Warn) {
            this.facility.warn(`${this.name} | ${format}`, ...args);
        }
    }

    error(format, ...args) {
        if (this.level >= LogLevels.Error) {
            this.facility.error(`${this.name} | ${format}`, ...args);
        }
    }
}