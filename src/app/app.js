import {Logger, LogLevels} from "../internal/domain/Logger.js";

export class App {
    logger;
    name;
    version;

    constructor(name, version) {
        this.name = name;
        this.version = version;
        this.logger = new Logger(this.name, LogLevels.Debug);

        Hooks.once('ready', () => this.ready());
    }

    async ready() {
        this.logger.info('Version %s Ready', this.version);
    }
}
