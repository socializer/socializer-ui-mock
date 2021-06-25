# If you do not have OpenSSL installed, change
# the following line to use 'http://'
source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

# For faster file watcher updates on Windows:
gem 'wdm', '~> 0.1.1', platforms: [:mswin, :mingw]

# Windows does not come with time zone data
gem 'tzinfo-data', platforms: [:mswin, :mingw, :jruby]

# Middleman Gems
gem 'middleman', '~> 4.4.0'
gem 'middleman-livereload'
gem 'middleman-sprockets', '>= 4.1.1'

# Easy deployment of Middleman sites
# gem 'middleman-deploy', '~> 2.0', '>= 2.0.0.pre.alpha'
gem 'middleman-deploy', '~> 2.0.0.pre.alpha'
# gem 'middleman-deploy', github: 'karlfreeman/middleman-deploy'

gem 'middleman-autoprefixer'

# Bootstrap v4-dev
gem 'bootstrap-sass'

source 'https://rails-assets.org' do
  gem 'rails-assets-tether', '>= 1.3.8'
end
