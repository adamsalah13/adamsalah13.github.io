---
layout: default
---

<div class="hero-section">
  <div class="hero-content">
    <h1>Adam Salah</h1>
    <p class="hero-subtitle">Full-Stack Developer & Technical Writer</p>
    <p class="hero-description">Building modern web applications and sharing technical insights through in-depth articles and tutorials.</p>
    <div class="hero-buttons">
      <a href="#recent-posts" class="btn-primary">Read My Work</a>
      <a href="/about/" class="btn-secondary">About Me</a>
    </div>
  </div>
</div>

<section class="content-section" id="recent-posts">
  <div class="container">
    <h2>Latest Posts</h2>
    <div class="posts-grid">
      {% for post in site.posts limit:6 %}
        <article class="post-card">
          <div class="post-meta">{{ post.date | date: "%B %d, %Y" }}</div>
          <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
          <p>{{ post.excerpt | strip_html | truncatewords: 20 }}</p>
          <a href="{{ post.url | relative_url }}" class="read-more">Read more →</a>
        </article>
      {% else %}
        <p>No posts yet. Check back soon!</p>
      {% endfor %}
    </div>
  </div>
</section>
