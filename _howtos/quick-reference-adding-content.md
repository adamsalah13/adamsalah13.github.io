---
layout: post
title: "Quick Reference: Adding Content to Your Jekyll Blog"
date: 2025-07-20
categories: [tutorial, reference]
tags: [jekyll, content-creation, workflow, quick-reference]
difficulty: "beginner"
estimated_time: "5 minutes"
author: "Adam Salah"
excerpt: "A quick reference guide for adding new blog posts, articles, and how-to guides to your Jekyll site."
---

# Quick Reference: Adding Content

## 🚀 Quick Start

**Want to add content? Follow these simple steps:**

1. **Choose your content type** (Blog, Article, or How-to)
2. **Create a new `.md` file** in the right directory
3. **Copy the appropriate template** (see below)
4. **Write your content**
5. **Save and preview**

## 📁 Directory Structure

```
_posts/        → Blog posts (personal thoughts, news)
_articles/     → Technical articles (in-depth guides)
_howtos/       → How-to guides (step-by-step tutorials)
projects/      → Project showcases (portfolio items)
```

## 📝 Content Templates

### Blog Post Template

**File:** `_posts/2025-07-20-your-title.md`

```markdown
---
layout: post
title: "Your Blog Post Title"
date: 2025-07-20
categories: [blog, category-name]
tags: [tag1, tag2, tag3]
author: "Your Name"
excerpt: "Brief description that appears in previews"
---

Write your blog post content here using Markdown.

## Subheading

Your content...
```

### Technical Article Template

**File:** `_articles/your-topic-name.md`

```markdown
---
layout: post
title: "Understanding Your Topic"
date: 2025-07-20
categories: [technical, category-name]
tags: [tag1, tag2, tag3]
difficulty: "intermediate"
estimated_reading_time: "15 minutes"
author: "Your Name"
toc: true
excerpt: "In-depth explanation of your topic with examples and best practices."
---

Write your detailed technical content here.

## Introduction

Your content...

## Main Concepts

Your content...

## Conclusion

Your content...
```

### How-to Guide Template

**File:** `_howtos/how-to-do-something.md`

```markdown
---
layout: post
title: "How to Do Something Specific"
date: 2025-07-20
categories: [tutorial, category-name]
tags: [tag1, tag2, tag3]
difficulty: "beginner"
estimated_time: "20 minutes"
requirements: 
  - "Requirement 1"
  - "Requirement 2"
tools_needed:
  - "Tool 1"
  - "Tool 2"
author: "Your Name"
excerpt: "Step-by-step guide to accomplish a specific task."
---

Brief introduction to what you'll accomplish.

## Prerequisites

Before you start:
- [ ] Requirement 1
- [ ] Requirement 2

## Step 1: First Action

Detailed instructions...

## Step 2: Second Action

Detailed instructions...

## Verification

How to confirm it worked...

## Troubleshooting

Common issues and solutions...
```

## 🎯 Quick Tips

### File Naming Rules

- **Blog posts:** `YYYY-MM-DD-title.md` (date required)
- **Articles:** `topic-name.md` (descriptive, no date)
- **How-tos:** `action-description.md` (starts with action verb)

### Content Guidelines

- **Use descriptive titles** that clearly indicate the content
- **Add relevant tags** to help readers find related content
- **Include excerpts** for better previews on index pages
- **Set appropriate difficulty levels** (beginner, intermediate, advanced)

### Markdown Basics

```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold text**
*Italic text*
`Code snippet`

[Link text](https://example.com)

- Bullet point
- Another point

1. Numbered list
2. Second item

```code
Code block
```

> Blockquote
```

## 🔄 Workflow

1. **Create file** with proper name and location
2. **Add front matter** (the YAML block at the top)
3. **Write content** in Markdown
4. **Save file** - Jekyll auto-rebuilds
5. **Preview** at appropriate URL:
   - Blog: `http://localhost:4000/blog/`
   - Articles: `http://localhost:4000/articles/`
   - How-tos: `http://localhost:4000/howtos/`
6. **Commit and push** to GitHub when ready

## 🌐 URLs

Your content will be available at:

- **Blog posts:** `/blog/YYYY/MM/DD/title/`
- **Articles:** `/articles/title/`
- **How-tos:** `/howtos/title/`
- **Projects:** `/projects/title/`

## ✅ Checklist Before Publishing

- [ ] Front matter is complete and correct
- [ ] Title is descriptive and SEO-friendly
- [ ] Excerpt summarizes the content well
- [ ] Tags and categories are relevant
- [ ] Content is well-structured with headings
- [ ] Links work and open correctly
- [ ] Content previews correctly locally
- [ ] Spelling and grammar checked

## 🆘 Common Issues

**Content not showing up?**
- Check front matter syntax (YAML must be valid)
- Ensure file is in correct directory
- Restart Jekyll server

**Wrong URL structure?**
- Check filename format
- Verify permalink settings in `_config.yml`

**Styling looks wrong?**
- Ensure `layout: post` is in front matter
- Check for typos in layout name

## 🎨 Next Steps

Once you're comfortable with basic content creation:

1. **Explore advanced formatting** with Mermaid diagrams
2. **Add images** to your content
3. **Cross-reference** between different content types
4. **Optimize for SEO** with better titles and descriptions
5. **Engage readers** with calls-to-action

---

**Pro Tip:** Keep this reference guide bookmarked for quick access when creating new content!
