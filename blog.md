---
layout: default
title: Blog
permalink: /blog/
---

# Blog Posts

Personal thoughts, updates, and insights on development and technology.

<div class="content-grid">
  {% for post in site.posts %}
    <article class="content-item">
      <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      <p class="meta">{{ post.date | date: "%B %d, %Y" }}</p>
      {% if post.category %}<span class="category">{{ post.category }}</span>{% endif %}
      <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
      {% if post.tags %}
        <div class="tags">
          {% for tag in post.tags %}
            <span class="tag">{{ tag }}</span>
          {% endfor %}
        </div>
      {% endif %}
    </article>
  {% else %}
    <p>No blog posts yet. Check back soon!</p>
  {% endfor %}
</div>
