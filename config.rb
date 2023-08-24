activate :sprockets
# activate :sprockets do |c|
#   c.expose_middleman_helpers = true
# end

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

# activate :autoprefixer do |config|
#   config.browsers = "last 2 versions"
# end

# middleman-deploy configuration
head = `git log --pretty="%h" -n1`.strip
commit_message = "Site updated to #{head}"

# Build-specific configuration

# github deploy
activate :deploy do |deploy|
  deploy.deploy_method = :git
  deploy.commit_message = commit_message      # commit message (can be empty), default: Automated commit at `timestamp` by middleman-deploy `version`
end

configure :development do
  activate :livereload, port: 35730
end


configure :build do
#   activate :minify_css
#   activate :minify_javascript
    activate :relative_assets
end
