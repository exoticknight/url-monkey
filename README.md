# url-monkey

let monkey types url for you

random string provided by [randexp](https://www.npmjs.com/package/randexp)

## Install

```bash
npm i -S url-monkey
```

## Usage

```javascript
import URLMonkey from 'url-monkey'

const monkey = new URLMonkey('www.google.com', {
  path: /^\/greeting\/([^\/]+?)(?:\/)?$/i,
  // protocol: 'https',  // can be regex, too
  // port: 80,  // can be regex, too
})

Array(5).fill(0).forEach(() => console.log(monkey.type()))
// www.google.com/GREeTinG//
// www.google.com/gReetinG/
// www.google.com/GreEtiNg/OzpmeK(vLGPHcdYPlgAE!d(NybsGTl++hBNzEHbl(,+quITlnOXHieEan$prEcY!ywjHRSwl/
// www.google.com/gReEtING/Uno&h@wSAT@O,cAu~HyL:+arerICgnaD~RydS/
// www.google.com/gREETiNg//
```

## License

MIT