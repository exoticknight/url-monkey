"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const randexp_1 = __importDefault(require("randexp"));
function pcharRegex(path) {
    const randexp = new randexp_1.default(path);
    // clear
    randexp.defaultRange.subtract(0, 65535);
    '-._~!$&\'()*+;=:@,abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(c => randexp.defaultRange.add(c.charCodeAt(0)));
    return randexp;
}
class URLMonkey {
    constructor(domain, { protocol = false, port = false, path = false } = {}) {
        if (domain === undefined) {
            throw new Error('provide at least one domain to monkey!');
        }
        this.url = [];
        if (protocol !== false) {
            this.url.push(typeof protocol === 'string' ? protocol : new randexp_1.default(protocol), '://');
        }
        this.url.push(typeof domain === 'string' ? domain : new randexp_1.default(domain));
        if (port !== false) {
            this.url.push(':', typeof port === 'number' ? `${port}` : new randexp_1.default(port));
        }
        if (path !== false) {
            this.url.push(typeof path === 'string' ? path : pcharRegex(path));
        }
    }
    type() {
        return this.url.map(p => typeof p === 'string' ? p : p.gen()).join('');
    }
}
exports.default = URLMonkey;
