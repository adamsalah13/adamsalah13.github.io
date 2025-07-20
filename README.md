# Adam Salah's Developer Blog

[![Jekyll](https://img.shields.io/badge/Jekyll-4.3.0-red)](https://jekyllrb.com/)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Deployed-green)](https://pages.github.com/)
[![Ruby](https://img.shields.io/badge/Ruby-3.4.0-red)](https://ruby-lang.org/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A modern, responsive Jekyll blog hosted on GitHub Pages featuring automatic content discovery and organized collections for different content types.

🌐 **Live Site**: [teamworx365.com](https://teamworx365.com)

## 🚀 Features

- **Automatic Content Discovery**: New markdown files are automatically detected and displayed
- **Multiple Content Types**: Organized into Blog Posts, Technical Articles, and How-to Guides
- **Responsive Design**: Professional, mobile-first design with modern CSS Grid/Flexbox
- **SEO Optimized**: Jekyll SEO tag integration with proper metadata
- **GitHub Pages Ready**: Zero-config deployment with GitHub Pages
- **Collection-Based Architecture**: Organized content structure using Jekyll collections
- **Fast Loading**: Optimized static site generation
- **Clean URLs**: Semantic permalink structure

## 📁 Content Structure

### Blog Posts (`_posts/`)
Regular blog posts and thoughts on development and technology.
- Format: `YYYY-MM-DD-title.md`
- Categories: announcements, tutorials, thoughts
- Accessible at: `/blog/`

### Technical Articles (`_articles/`)
In-depth technical guides, tutorials, and documentation.
- Advanced topics and comprehensive guides
- Code examples and technical deep-dives
- Accessible at: `/articles/`

### How-to Guides (`_howtos/`)
Quick, practical step-by-step instructions for common tasks.
- Difficulty levels: Beginner, Intermediate, Advanced
- Estimated completion times
- Accessible at: `/howtos/`

## 🛠️ Technology Stack

- **Static Site Generator**: Jekyll 4.3.0
- **Hosting**: GitHub Pages
- **Language**: Ruby 3.4.0
- **Styling**: Custom CSS with Grid/Flexbox
- **Markup**: Markdown with Kramdown
- **Syntax Highlighting**: Rouge
- **Feed Generation**: Jekyll Feed plugin
- **SEO**: Jekyll SEO Tag plugin

## 🏗️ Project Structure

```
├── _articles/           # Technical articles collection
├── _howtos/             # How-to guides collection  
├── _posts/              # Blog posts collection
├── _layouts/            # Jekyll layout templates
│   ├── default.html     # Main site layout
│   └── post.html        # Individual post layout
├── assets/
│   └── css/
│       └── main.css     # Custom stylesheet
├── _config.yml          # Jekyll configuration
├── index.html           # Homepage template
├── about.md             # About page
├── articles.md          # Articles listing page
├── blog.md              # Blog listing page
├── howtos.md            # How-tos listing page
├── Gemfile              # Ruby dependencies
└── CNAME               # Custom domain configuration
```

## 🚀 Quick Start

### Prerequisites
- Ruby 3.4.0 or higher
- Bundler gem
- Git

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/adamsalah13/adamsalah13.github.io.git
   cd adamsalah13.github.io
   ```

2. **Install dependencies**:
   ```bash
   bundle install
   ```

3. **Start development server**:
   ```bash
   bundle exec jekyll serve
   ```

4. **View locally**: Open [http://localhost:4000](http://localhost:4000)

### Adding Content

#### New Blog Post
Create a file in `_posts/` with format: `YYYY-MM-DD-title.md`

```markdown
---
layout: post
title: "Your Post Title"
date: 2025-07-20
categories: [category1, category2]
tags: [tag1, tag2]
---

Your content here...
```

#### New Technical Article
Create a file in `_articles/` with format: `title.md`

```markdown
---
layout: post
title: "Your Article Title"
date: 2025-07-20
category: "Technical"
difficulty: "Intermediate"
tags: [programming, tutorial]
---

Your article content here...
```

#### New How-to Guide
Create a file in `_howtos/` with format: `title.md`

```markdown
---
layout: post
title: "How to Do Something"
date: 2025-07-20
difficulty: "Beginner"
estimated_time: "10 minutes"
tags: [guide, quick-start]
---

Your step-by-step guide here...
```

## 🔧 Configuration

Key configuration options in `_config.yml`:

```yaml
title: "Adam Salah"
description: "Full-Stack Developer & Technical Writer"
url: "https://teamworx365.com"
baseurl: ""

# Collections
collections:
  articles:
    output: true
    permalink: /:collection/:name/
  howtos:
    output: true
    permalink: /:collection/:name/

# Plugins
plugins:
  - jekyll-feed
  - jekyll-seo-tag
  - jekyll-sitemap
```

## 🎨 Customization

### Styling
- Main stylesheet: `assets/css/main.css`
- Responsive design with CSS Grid and Flexbox
- Custom color scheme and typography
- Mobile-first approach

### Layout Templates
- `_layouts/default.html`: Main site template with navigation
- `_layouts/post.html`: Individual content item template

### Navigation
Navigation is automatically generated in the default layout and includes:
- Home
- Blog
- Articles  
- How-tos
- About

## 📈 SEO & Performance

- **SEO Tags**: Automatic meta tags, Open Graph, and Twitter Cards
- **XML Sitemap**: Auto-generated sitemap for search engines
- **RSS Feed**: Available at `/feed.xml`
- **Fast Loading**: Optimized static files and minimal dependencies
- **Mobile Responsive**: Mobile-first design approach

## 🚀 Deployment

### GitHub Pages (Automatic)
1. Push changes to the `main` branch
2. GitHub Pages automatically builds and deploys
3. Site is available at your custom domain

### Manual Deployment
```bash
# Build the site
bundle exec jekyll build

# Files are generated in _site/ directory
# Upload contents to your hosting provider
```

## 🔍 SEO Features

- Semantic HTML structure
- Proper heading hierarchy (H1-H6)
- Meta descriptions and keywords
- Open Graph and Twitter Card support
- XML sitemap generation
- Robots.txt optimization
- Canonical URLs

## 📊 Analytics & Monitoring

To add Google Analytics, add your tracking ID to `_config.yml`:

```yaml
google_analytics: "G-XXXXXXXXXX"
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and commit: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Website**: [teamworx365.com](https://teamworx365.com)
- **GitHub**: [@adamsalah13](https://github.com/adamsalah13)
- **Email**: Available through the website contact form

## 🙏 Acknowledgments

- Jekyll team for the excellent static site generator
- GitHub for free hosting via GitHub Pages
- The open-source community for inspiration and resources

---

**Last Updated**: July 2025
