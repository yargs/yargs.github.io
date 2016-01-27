---
layout: default 
---

<div class="landing-wrapper">
  <div class="wrapper">
    <div class="title">
      <h1 class="pink-highlight">Yargs be a node.js library fer hearties tryin' ter parse optstrings.</h1>
    </div>
  </div>
</div>


#Getting Started


    #!/usr/bin/env node

    require('yargs')
      .usage('$0 <cmd> [args]')
      .option('name', {
        alias: 'n',
        describe: 'provide yer name!'
      })
      .command('hello', 'welcome ter yargs!', function (yargs, argv) {
        console.log('hello', argv.name, 'welcome to yargs!')
      })
      .help('help')
      .argv

    node example.js --help

    test <cmd> [args]

    Commands:
      hello  welcome ter yargs!

    Options:
      --name, -n  provide yer name!
      --help      Show help                                                [boolean]

    node example.js hello --name Parrot 
    hello Parrot welcome to yargs!
