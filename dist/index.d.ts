export default class URLMonkey {
    private readonly url;
    constructor(domain: RegExp | string, { protocol, port, path }?: {
        protocol?: RegExp | string | false;
        port?: RegExp | number | false;
        path?: RegExp | string | false;
    });
    type(): string;
}
