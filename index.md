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

  <div class="wrapper">
    <div class="page-content align-items">

      <div class="page-box-full markdown-body">
      
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

    <div class="page-content">
      <div class="page-box">

        <div class="page-heading"> Getting Started </div>

        <div class="instructions"> After creating </div>
        <div class="instructions reg-code">hello.js</div>
        <div class="instructions"> start with the following code to get you going: </div>
        
        <div class="reg-code">
          <pre>
            <code>
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
            </code>
          </pre>
        </div>

        <div class="instructions"> And in your terminal run: </div>

        <div class="reg-code">
          <pre>
            <code>
              $ node example.js --help
            </code>
          </pre>
        </div>

        <div class="instructions"> To get this output: </div>

        <div class="reg-code">
          <pre>
            <code>
              test <cmd> [args]

              Commands:
                hello  welcome ter yargs!

              Options:
                --name, -n  provide yer name!
                --help      Show help                                                [boolean]
            </code>
          </pre>
        </div>

        <div class="instructions"> Run </div>
        <div class="instructions reg-code"> hello </div>
        <div class="instruction"> command: </div>

        <pre>
          <code class="reg-code">
            $ node example.js hello --name Parrot 
            hello Parrot welcome to yargs!
          </code>
        </pre>

      </div>
    </div>

  </div>
</div>




