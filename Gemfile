source "https://rubygems.org"

# GitHub Pages gem
gem "github-pages", group: :jekyll_plugins

# Fix for Ruby 3.4.0 compatibility
gem "bigdecimal"

# Minimal plugins for GitHub Pages
group :jekyll_plugins do
  gem "jekyll-feed"
end

# Performance-booster for watching directories on Windows
#gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
# do not have a Java counterpart.
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
