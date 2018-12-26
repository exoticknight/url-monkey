import Randexp from 'randexp'

function pcharRegex(path:RegExp) {
  const randexp = new Randexp(path)
  // clear
  randexp.defaultRange.subtract(0, 65535)
  '-._~!$&\'()*+;=:@,abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(c => randexp.defaultRange.add(c.charCodeAt(0)))

  return randexp
}

export default class URLMonkey {
  private readonly url:(string|Randexp)[]

  constructor(domain:RegExp | string,
    {
      protocol=false,
      port=false,
      path=false
    }:{
      protocol?:RegExp | string | false,
      port?:RegExp | number | false,
      path?:RegExp | string | false
    }={}
  ) {
    if (domain === undefined) {
      throw new Error('provide at least one domain to monkey!')
    }
    this.url = []

    if (protocol !== false) {
      this.url.push(typeof protocol === 'string' ? protocol : new Randexp(protocol), '://')
    }
    this.url.push(typeof domain === 'string' ? domain : new Randexp(domain))
    if (port !== false) {
      this.url.push(':', typeof port === 'number' ? `${port}` : new Randexp(port))
    }
    if (path !== false) {
      this.url.push(typeof path === 'string' ? path : pcharRegex(path))
    }
  }

  type() {
    return this.url.map(p => typeof p === 'string' ? p : p.gen()).join('')
  }
}