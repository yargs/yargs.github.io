#[yargs.js.org](yargs.js.org)

www for [Yargs](github.com/bcoe/yargs), your favourite CLI option parser


### Setup

This site is built with [jekyll](http://jekyllrb.com/). To get started ensure you have [ruby](https://www.ruby-lang.org/en/documentation/installation/). Then:

1. Install bundler.

``` shell
$ [sudo] gem install bundler
```

2. `cd` into this repository

2. Install the dependencies.

``` shell
$ bundle install
```

3. Run jekyll:

  ``` shell
  $ bundle exec jekyll serve
  ```

4. Make changes && view them on http://localhost:4000

### Directory structure:

Jekyll compiles directories in this repo to its own `_site` directory. You will see it when you run `jekyll serve` locally. Page files can be written in either `.html` or `.md`.

`_includes/` -- These are you header/footer/head. They are then included in our basic layout.

`docs/` -- Our docs page. Currently running using [Flatdoc](https://github.com/rstacruz/flatdoc).

`community/` -- Our community page. It is to be built out.

`css/main.scss` -- basic sass variables used accross site

`_sass/` -- sass layouts and other files.

`js/` -- our basic js. They are not automatically compiled, and need to be included under `_includes/head.html`


### License

ISC
