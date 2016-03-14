We talked about the history of NodeJS and it's origins in the Google V8 Javascript engine.

What the difference between our synchronous ruby code and asynchronous NodeJS code is. https://www.discovermeteor.com/blog/understanding-sync-async-javascript-node/

NodeJS - Event Loop https://nodesource.com/blog/understanding-the-nodejs-event-loop/

NPM - gem and bundler combined for NodeJS.
- `npm init` for a new project
- `npm install <package> --save` to install and update your package.json
- browse packaged here https://www.npmjs.com/
- more about package.json https://docs.npmjs.com/getting-started/using-a-package.json

NodeJS standard libraries can be found here: https://nodejs.org/api/index.html

We used the `http` module to build a simple server.

Then added a router module to help us handle requests.
https://www.npmjs.com/package/fast-router

Each JS file is a scoped module, but still use `var` for all
your variables. You can control what a `require('./filename.js')` returns by assigning to `module.exports`. More module docs can be found here: https://nodejs.org/api/modules.html

We explored the pit falls of async function calls and worked through the brute force way of dealing with them. More on this in the breakout! 

Desktop Apps with Electron!
http://electron.atom.io/
