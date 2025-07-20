---
layout: default
title: How-Tos
permalink: /howtos/
---

## Quick How-To Guides

Practical step-by-step guides for common tasks and solutions.

<div class="content-grid">
  {% for howto in site.howtos %}
    <article class="content-item">
      <h3><a href="{{ howto.url | relative_url }}">{{ howto.title }}</a></h3>
      {% if howto.date %}<p class="meta">{{ howto.date | date: "%B %d, %Y" }}</p>{% endif %}
      {% if howto.category %}<span class="category">{{ howto.category }}</span>{% endif %}
      {% if howto.estimated_time %}<span class="time">{{ howto.estimated_time }}</span>{% endif %}
      <p>{{ howto.excerpt | strip_html | truncatewords: 30 }}</p>
      {% if howto.tags %}
        <div class="tags">
          {% for tag in howto.tags %}
            <span class="tag">{{ tag }}</span>
          {% endfor %}
        </div>
      {% endif %}
    </article>
  {% else %}
    <p>No how-to guides available yet. Check back soon!</p>
  {% endfor %}
</div>
