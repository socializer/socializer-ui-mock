# If you do not have OpenSSL installed, change
# the following line to use 'http://'
source "https://rubygems.org"

ruby file: ".ruby-version"

# Middleman Gems
gem 'middleman', '~> 4.4'
gem 'middleman-livereload'
gem "middleman-sprockets", "~> 4.0.0"

# Easy deployment of Middleman sites
#  TODO: Middleman -deploy doesn't seem to work with Ruby 3.x
# gem 'middleman-deploy', '~> 2.0.0.pre.alpha'
# gem 'middleman-deploy', github: 'karlfreeman/middleman-deploy'

# gem 'middleman-autoprefixer'
# For faster file watcher updates on Windows:
gem 'wdm', '~> 0.1.1', platforms: [:mswin, :mingw]

# Windows does not come with time zone data
gem 'tzinfo-data', platforms: [:mswin, :mingw, :jruby]


# Bootstrap v4-dev
gem 'bootstrap-sass'
# gem 'bootstrap', '~> 4.5.3'

source 'https://rails-assets.org' do
  gem 'rails-assets-tether', '>= 1.3.8'
end
