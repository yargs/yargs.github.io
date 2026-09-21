source "http://rubygems.org"

gem 'json', git: 'https://github.com/ruby/json.git', branch: 'v1.8'
gem 'jekyll', '4.0.1'
gem 'jekyll-redirect-from'
gem 'html-proofer'
# pin ffi past 1.13.1: that version can't resolve size_t against modern Xcode CLT libffi headers
# (capped below 1.16 since this project still runs on Ruby 2.6, which newer ffi releases dropped support for)
gem 'ffi', '~> 1.15.5'
