###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page "/path/to/file.html", layout: :otherlayout

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", locals: {
#  which_fake_page: "Rendering a fake page with a local variable" }

###
# Helpers
###

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload, port: 35730
end

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

config[:css_dir] = "assets/stylesheets"
config[:fonts_dir] = "assets/fonts"
config[:js_dir] = "assets/javascripts"
config[:images_dir] = "assets/images"
config[:relative_links] = true

# Build-specific configuration
configure :build do
  # Minify CSS on build
  # activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript
end

# Use relative URLs
activate :relative_assets

activate :autoprefixer do |config|
  config.browsers = "last 2 versions"
end

# middleman-deploy configuration
head = `git log --pretty="%h" -n1`.strip
commit_message = "Site updated to #{head}"

# github deploy
activate :deploy do |deploy|
  deploy.deploy_method = :git
  deploy.commit_message = commit_message      # commit message (can be empty), default: Automated commit at `timestamp` by middleman-deploy `version`
end

activate :sprockets
