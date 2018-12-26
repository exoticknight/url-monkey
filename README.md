# url-monkey

let monkey types url for you

## Install

```bash
npm i -S url-monkey
```

## Usage

```javascript
import URLMonkey from 'monkey-url'

const monkey = new URLMonkey('www.google.com', {
  path: /^\/greeting\/([^\/]+?)(?:\/)?$/i
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