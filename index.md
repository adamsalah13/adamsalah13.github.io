---
layout: default
---

<div class="hero-section">
  <div class="hero-content">
    <h1>{{ site.title }}</h1>
    <p class="hero-subtitle">{{ site.description }}</p>
    <p class="hero-description">Explore technical articles, step-by-step guides, and development insights. All content automatically generated from Markdown files.</p>
  </div>
</div>

<section class="content-section">
  <div class="container">
    
    <div class="content-grid">
      
      <!-- Recent Blog Posts -->
      <div class="content-block">
        <h2>📝 Recent Posts</h2>
        {% for post in site.posts limit:3 %}
          <article class="content-item">
            <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
            <p class="meta">{{ post.date | date: "%B %d, %Y" }}</p>
            <p>{{ post.excerpt | strip_html | truncatewords: 20 }}</p>
          </article>
        {% else %}
          <p>No posts yet. Coming soon!</p>
        {% endfor %}
        <a href="/blog/" class="view-all">View all posts →</a>
      </div>

      <!-- Technical Articles -->
      <div class="content-block">
        <h2>📚 Technical Articles</h2>
        {% for article in site.articles limit:3 %}
          <article class="content-item">
            <h3><a href="{{ article.url | relative_url }}">{{ article.title }}</a></h3>
            {% if article.date %}<p class="meta">{{ article.date | date: "%B %d, %Y" }}</p>{% endif %}
            <p>{{ article.excerpt | strip_html | truncatewords: 20 }}</p>
          </article>
        {% else %}
          <p>No articles yet. Coming soon!</p>
        {% endfor %}
        <a href="/articles/" class="view-all">View all articles →</a>
      </div>

      <!-- How-to Guides -->
      <div class="content-block">
        <h2>🛠️ How-to Guides</h2>
        {% for howto in site.howtos limit:3 %}
          <article class="content-item">
            <h3><a href="{{ howto.url | relative_url }}">{{ howto.title }}</a></h3>
            {% if howto.date %}<p class="meta">{{ howto.date | date: "%B %d, %Y" }}</p>{% endif %}
            {% if howto.difficulty %}<span class="difficulty">{{ howto.difficulty }}</span>{% endif %}
            <p>{{ howto.excerpt | strip_html | truncatewords: 20 }}</p>
          </article>
        {% else %}
          <p>No guides yet. Coming soon!</p>
        {% endfor %}
        <a href="/howtos/" class="view-all">View all guides →</a>
      </div>

      <!-- Projects -->
      <div class="content-block">
        <h2>🚀 Projects</h2>
        <article class="content-item">
          <h3>Personal Website & Blog</h3>
          <p>This Jekyll-powered site with automatic Markdown processing, collections, and GitHub Pages deployment.</p>
        </article>
        <article class="content-item">
          <h3>Development Tools</h3>
          <p>Various scripts and utilities for streamlining development workflows.</p>
        </article>
        <a href="/projects/" class="view-all">View all projects →</a>
      </div>

    </div>

    <!-- Content Stats -->
    <div class="stats-section">
      <h2>Content Library</h2>
      <div class="stats-grid">
        <div class="stat-item">
          <span class="stat-number">{{ site.posts | size }}</span>
          <span class="stat-label">Blog Posts</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">{{ site.articles | size }}</span>
          <span class="stat-label">Articles</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">{{ site.howtos | size }}</span>
          <span class="stat-label">How-to Guides</span>
        </div>
      </div>
    </div>

  </div>
</section>
