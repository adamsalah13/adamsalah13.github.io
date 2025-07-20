---
layout: post
title: "Test Article - Auto Discovery Working!"
date: 2025-07-20
categories: [test, verification]
tags: [jekyll, auto-discovery, collections]
difficulty: "beginner"
estimated_reading_time: "2 minutes"
author: "Adam Salah"
excerpt: "This test article verifies that new markdown files are automatically discovered and displayed on the site."
---

# Test Article - Auto Discovery Working!

This is a **test article** to verify that our Jekyll collections system is working correctly.

## What This Tests

- ✅ Automatic file discovery in `_articles/` folder
- ✅ Front matter processing
- ✅ Collection rendering on homepage
- ✅ Individual article page generation

## How It Works

When you drop a new `.md` file into the `_articles/` folder with proper front matter, Jekyll automatically:

1. **Discovers** the file during build
2. **Processes** the front matter and content
3. **Generates** a dedicated page
4. **Lists** it on the homepage under "Technical Articles"

## Success Criteria

If you can see this article listed on the homepage, then auto-discovery is working perfectly! 🎉

---

*This is a test file created on {{ page.date | date: "%B %d, %Y" }}*
