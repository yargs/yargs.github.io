---
layout: default 
---

<div class="landing-wrapper">
  <div class="wrapper">
    <div class="title">
      <h1 class="pink-highlight">Yargs be a node.js library fer hearties tryin' ter parse optstrings.</h1>
    </div>
  </div>

  <div class="wrapper">
    <div class="page-content align-items">

      <div class="page-box">
      
        <div class="page-heading">What's Yargs?</div>
        <p class="description">
          Yargs is a command line argument parsing library. It helps you define options, arguments, and commands you want to accept in your application. In the meantime, you can focus on building out your program's functionality. As you build out your application, you are able to access the arguments from the object yargs created for you. 
        </p>

      </div>

      <div class="page-box">

        <div class="page-heading">Install</div>
        <p class="description">
          Open your terminal, navigate to your project, and run using npm: 
        </p>
        <div class="sh-code">
          $ npm install --save yargs 
        </div>

      </div>
      
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
