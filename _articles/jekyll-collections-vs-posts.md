---
layout: post
title: "Understanding Jekyll Collections vs Posts"
date: 2025-07-20
categories: [technical, jekyll]
tags: [jekyll, collections, posts, static-sites, web-development]
difficulty: "intermediate"
estimated_reading_time: "12 minutes"
author: "Adam Salah"
toc: true
excerpt: "A deep dive into Jekyll's collections feature and how it differs from traditional posts, with practical examples and best practices."
---

Jekyll offers two main ways to organize content: Posts and Collections. Understanding when and how to use each is crucial for building well-structured static sites.

## What Are Jekyll Posts?

Posts are Jekyll's original content type, designed for chronological content like blog entries.

### Characteristics of Posts

- **Date-based**: Filenames must include dates (`YYYY-MM-DD-title.md`)
- **Chronological ordering**: Automatically sorted by date
- **Built-in pagination**: Easy to paginate through posts
- **RSS feeds**: Automatically included in site feeds
- **Categories and tags**: Built-in taxonomy support

### Example Post Structure

```yaml
---
layout: post
title: "My Blog Post"
date: 2025-07-20
categories: [blogging, jekyll]
tags: [tutorial, web-development]
---
```

## What Are Jekyll Collections?

Collections are groups of related documents that don't need to follow chronological order.

### Characteristics of Collections

- **Flexible naming**: No date requirements in filenames
- **Custom organization**: Organize by topic, not time
- **Custom metadata**: Define your own front matter fields
- **Flexible URLs**: Control permalink structure
- **Queryable**: Easy to filter and sort programmatically

### Example Collection Structure

```yaml
---
layout: post
title: "API Documentation"
category: "technical"
difficulty: "advanced"
version: "2.1"
last_updated: 2025-07-20
---
```

## When to Use Each

### Use Posts For:

- **Blog entries** - Personal thoughts, announcements, news
- **Time-sensitive content** - Updates, releases, events
- **Chronological narratives** - Project progress, learning journeys
- **Regular publishing** - Weekly updates, monthly reviews

### Use Collections For:

- **Documentation** - API docs, user guides, tutorials
- **Portfolio items** - Projects, case studies, work samples
- **Reference material** - Recipes, tools, resources
- **Structured content** - Team members, products, services

## Setting Up Collections

### 1. Configure in `_config.yml`

```yaml
collections:
  tutorials:
    output: true
    permalink: /tutorials/:name/
  projects:
    output: true
    permalink: /work/:name/
```

### 2. Create Collection Directories

```
_tutorials/
  getting-started.md
  advanced-techniques.md
_projects/
  project-alpha.md
  project-beta.md
```

### 3. Set Default Layouts

```yaml
defaults:
  - scope:
      path: "_tutorials"
      type: "tutorials"
    values:
      layout: "tutorial"
      category: "learning"
```

## Practical Examples

### Blog Post Example

```markdown
---
layout: post
title: "Why I Switched to Jekyll"
date: 2025-07-20
categories: [blogging, tools]
tags: [jekyll, static-sites, productivity]
---

Last month, I decided to migrate my blog from WordPress to Jekyll...
```

### Collection Item Example

```markdown
---
layout: project
title: "E-commerce Platform"
technology: ["React", "Node.js", "MongoDB"]
status: "completed"
client: "TechCorp"
duration: "6 months"
featured: true
---

This project involved building a scalable e-commerce platform...
```

## Advanced Techniques

### Querying Collections

```liquid
{% assign featured_articles = site.articles | where: "featured", true %}
{% for article in featured_articles %}
  <!-- Display featured articles -->
{% endfor %}
```

### Cross-referencing Content

```liquid
<!-- In a blog post, reference related how-tos -->
{% assign related = site.howtos | where: "tags", page.primary_tag %}
```

### Custom Sorting

```liquid
{% assign articles = site.articles | sort: "date" | reverse %}
{% assign howtos = site.howtos | sort: "title" %}
```

## Best Practices

### Content Organization

1. **Use descriptive filenames**: `advanced-git-workflows.md` not `tutorial1.md`
2. **Consistent front matter**: Define standard fields for each collection
3. **Logical grouping**: Group related content in the same collection

### Performance Considerations

1. **Limit collection size**: Large collections can slow build times
2. **Use pagination**: For collections with many items
3. **Optimize images**: Compress images in collection items

### SEO Optimization

1. **Unique titles**: Each item should have a distinct title
2. **Meta descriptions**: Use excerpts or custom descriptions
3. **Structured data**: Add schema markup for better search visibility

## Conclusion

Choose posts for time-based content and collections for everything else. This approach gives you the flexibility to organize content logically while maintaining Jekyll's simplicity and power.

The key is understanding your content's nature and choosing the right tool for the job. Most sites benefit from using both: posts for regular updates and collections for structured, reference material.
