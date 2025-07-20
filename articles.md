---
layout: default
title: Articles
permalink: /articles/
---

# Technical Articles

In-depth technical guides and tutorials covering various technologies, frameworks, and development practices.

<div class="content-grid">
  {% for article in site.articles %}
    <article class="content-item">
      <h3><a href="{{ article.url | relative_url }}">{{ article.title }}</a></h3>
      {% if article.date %}<p class="meta">{{ article.date | date: "%B %d, %Y" }}</p>{% endif %}
      {% if article.category %}<span class="category">{{ article.category }}</span>{% endif %}
      {% if article.difficulty %}<span class="difficulty">{{ article.difficulty }}</span>{% endif %}
      <p>{{ article.excerpt | strip_html | truncatewords: 30 }}</p>
      {% if article.tags %}
        <div class="tags">
          {% for tag in article.tags %}
            <span class="tag">{{ tag }}</span>
          {% endfor %}
        </div>
      {% endif %}
    </article>
  {% else %}
    <p>No articles available yet. Check back soon!</p>
  {% endfor %}
</div>
