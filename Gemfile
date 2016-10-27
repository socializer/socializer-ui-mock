# If you do not have OpenSSL installed, change
# the following line to use 'http://'
source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

# For faster file watcher updates on Windows:
gem 'wdm', '~> 0.1.1', platforms: [:mswin, :mingw]

# Windows does not come with time zone data
gem 'tzinfo-data', platforms: [:mswin, :mingw, :jruby]

# Middleman Gems
gem 'middleman-sprockets', '>= 4.1.0'
gem 'middleman', '~> 4.1.10'
gem 'middleman-livereload'

# Easy deployment of Middleman sites
# gem 'middleman-deploy', '~> 2.0', '>= 2.0.0.pre.alpha'
gem 'middleman-deploy', github: 'middleman-contrib/middleman-deploy'

gem 'middleman-autoprefixer'

# Bootstrap v4-dev
gem 'bootstrap', github: 'twbs/bootstrap-rubygem'

source 'https://rails-assets.org' do
  gem 'rails-assets-tether', '>= 1.3.7'
end
