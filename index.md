---
layout: default 
---

{% include landing.html %} 

##Yargs helps you parse you arguments and sets examples

```javascript
    // file name: hello.js
    var argv = require('yargs')
      .usage('Usage: $0 [options] <name>')
      .option('t', {
        alias: 'thanks',
        describe: 'Print a "thanks" message too',
        type: 'boolean'
      })
      .help('h').alias('h', 'help')
      .demand(1) // at least one "flagless" argument required for <name>
      .example('$0 Bob', 'Prints: Hello Bob!')
      .example('$0 -t Bob', 'Prints: Hello Bob! Thanks for using yargs!')
      .example('$0 -h', 'Prints this help text')
      .argv 
```

