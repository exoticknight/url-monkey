import URLMonkey from '../src'

const monkey = new URLMonkey('www.google.com', {
  path: /^\/greeting\/([^\/]+?)(?:\/)?$/i
})

Array(5).fill(0).forEach(() => console.log(monkey.type()))