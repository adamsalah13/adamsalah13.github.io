---
layout: post
title: "Fixing Mermaid Diagrams in GitHub Pages Jekyll: A Step-by-Step Solution"
date: 2025-07-20
category: "Technical"
difficulty: "Beginner"
tags: [mermaid, github-pages, jekyll, diagrams, visualization, web-development]
excerpt: "How to enable Mermaid diagram rendering in GitHub Pages Jekyll sites when the standard markdown syntax doesn't work. Includes client-side rendering setup and styling tips."
---

If you've ever tried to add beautiful flowcharts or sequence diagrams to your GitHub Pages Jekyll site using Mermaid, you've probably discovered a frustrating truth: **GitHub Pages Jekyll doesn't natively support Mermaid diagram rendering**.

This article documents the exact solution we implemented to get Mermaid diagrams working perfectly on our Jekyll site, complete with professional styling and responsive design.

## The Problem: Mermaid + GitHub Pages = Broken Diagrams

### What We Expected

```markdown
graph TD
    A[Start] --> B[Process]
    B --> C[End]
```

Should render as a beautiful flowchart.

### What Actually Happened

The diagram appeared as a plain text code block instead of rendering visually. This happens because:

1. **GitHub Pages uses Jekyll 3.9.x** with limited plugin support
2. **Standard Mermaid plugins** like `jekyll-mermaid` aren't whitelisted
3. **Markdown processors** don't recognize `mermaid` as a renderable format

## The Solution: Client-Side Rendering with Mermaid.js

Instead of relying on Jekyll plugins, we'll use JavaScript to render diagrams in the browser after the page loads.

### Step 1: Add Mermaid.js to Your Layout

First, we need to include the Mermaid.js library in our Jekyll layout. Edit your `_layouts/default.html` file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Your existing head content -->
</head>
<body>
    <!-- Your existing body content -->
    
    <!-- Add this before closing </body> tag -->
    <script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>
    <script>
        mermaid.initialize({ 
            startOnLoad: true,
            theme: 'default',
            securityLevel: 'loose'
        });
    </script>
</body>
</html>
```

**Key Configuration Options:**

- `startOnLoad: true` - Automatically renders diagrams when page loads
- `theme: 'default'` - Uses the standard Mermaid theme (other options: 'forest', 'dark', 'neutral')
- `securityLevel: 'loose'` - Allows more flexible diagram syntax

### Step 2: Convert Markdown Syntax to HTML

This is the crucial step most tutorials miss. Instead of using markdown code blocks, we need to use HTML div elements:

**❌ This won't work in GitHub Pages:**

```markdown
graph TD
    A[Start] --> B[Process]
```

**✅ This will work:**

```html
<div class="mermaid">
graph TD
    A[Start] --> B[Process]
    B --> C[End]
</div>
```

### Step 3: Add Professional Styling

To make your diagrams look polished, add CSS styling to your `assets/css/main.css`:

```css
/* Mermaid Diagram Styling */
.mermaid {
  margin: 2rem 0;
  text-align: center;
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 1rem;
  overflow-x: auto;
}

.mermaid svg {
  max-width: 100%;
  height: auto;
}
```

This styling provides:

- **Proper spacing** around diagrams
- **Light background** for better contrast
- **Responsive design** that works on mobile
- **Scroll handling** for wide diagrams

## Real-World Example: Before and After

### Before Implementation

Our GitHub blogging article had three diagrams that appeared as plain text:

```text
graph TB
    subgraph "Traditional CMS"
        DB[Database]
        SERVER[Web Server]
    end
```

### After Implementation

The same content now renders as interactive diagrams:

<div class="mermaid">
graph TB
    subgraph "Traditional CMS"
        DB[Database]
        SERVER[Web Server]
        ADMIN[Admin Panel]
    end
    
    subgraph "GitHub-Based System"
        REPO[Git Repository]
        MARKDOWN[Markdown Files]
        PAGES[GitHub Pages]
    end
    
    DB --> ADMIN
    REPO --> MARKDOWN
    MARKDOWN --> PAGES
</div>

## Different Diagram Types That Work

### Flowcharts
<div class="mermaid">
flowchart TD
    A[New Article Idea] --> B{Research Required?}
    B -->|Yes| C[Gather Information]
    B -->|No| D[Start Writing]
    C --> D
    D --> E[Review & Edit]
    E --> F[Publish]
</div>

### Sequence Diagrams
<div class="mermaid">
sequenceDiagram
    participant Writer
    participant Git
    participant GitHub
    participant Reader
    
    Writer->>Git: git commit -m "New article"
    Git->>GitHub: git push origin main
    GitHub->>GitHub: Build Jekyll site
    GitHub->>Reader: Serve updated content
    Reader-->>Writer: Feedback via issues
</div>

### Git Graphs
<div class="mermaid">
gitgraph
    commit id: "Initial setup"
    commit id: "Add Mermaid support"
    branch feature
    checkout feature
    commit id: "Update article"
    commit id: "Add diagrams"
    checkout main
    merge feature
    commit id: "Deploy to production"
</div>

## Troubleshooting Common Issues

### Issue 1: Diagrams Not Rendering
**Symptoms**: Still seeing text instead of diagrams
**Solutions**:
1. Check browser console for JavaScript errors
2. Verify Mermaid.js is loading (check Network tab)
3. Ensure you're using `<div class="mermaid">` not code blocks

### Issue 2: Syntax Errors
**Symptoms**: Blank space where diagram should be
**Solutions**:
1. Validate your Mermaid syntax at [mermaid.live](https://mermaid.live)
2. Check for missing quotes around labels
3. Ensure proper indentation

### Issue 3: Mobile Display Issues
**Symptoms**: Diagrams cut off on mobile devices
**Solutions**:
1. Add `overflow-x: auto` to `.mermaid` CSS
2. Use shorter node labels
3. Consider vertical layouts for complex diagrams

## Alternative Solutions (For Reference)

If client-side rendering doesn't work for your use case, here are other approaches:

### 1. Pre-rendered Images
Convert diagrams to SVG/PNG before committing:

```bash
# Using mermaid-cli
mmdc -i diagram.mmd -o diagram.svg
```

### 2. GitHub Actions Workflow

Automate diagram generation during build:

```yaml
name: Generate Diagrams
on: [push]
jobs:
  diagrams:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Generate diagrams
        run: # Script to convert mermaid to images
```

### 3. External Services

Use services like Kroki or PlantUML for server-side rendering.

## Performance Considerations

### Loading Time
- **Mermaid.js size**: ~200KB gzipped
- **Render time**: Minimal impact on page load
- **CDN benefits**: Fast global delivery

### Optimization Tips
1. **Lazy loading**: Only load Mermaid.js on pages with diagrams
2. **Selective inclusion**: Create a separate layout for diagram-heavy pages
3. **Local hosting**: Download and host Mermaid.js yourself for better control

## Implementation Checklist

Here's your step-by-step implementation guide:

- [ ] Add Mermaid.js script to `_layouts/default.html`
- [ ] Configure initialization with appropriate settings
- [ ] Convert existing `mermaid` code blocks to `<div class="mermaid">`
- [ ] Add CSS styling for professional appearance
- [ ] Test diagrams locally with `jekyll serve`
- [ ] Commit and push changes to GitHub
- [ ] Verify diagrams render on live site (allow 5-10 minutes for build)
- [ ] Test on mobile devices for responsive behavior

## The Results: Worth the Effort

After implementing this solution, our technical articles now feature:

✅ **Professional visual diagrams** that enhance understanding  
✅ **Interactive elements** readers can zoom and inspect  
✅ **Responsive design** that works across all devices  
✅ **No plugin dependencies** - works with standard GitHub Pages  
✅ **Easy maintenance** - edit diagrams as simple text  

## Lessons Learned

### What Worked Well
- **Client-side rendering** is more reliable than Jekyll plugins
- **HTML div approach** gives consistent results
- **Professional styling** makes a huge difference in presentation

### What We'd Do Differently
- **Test mobile first** - some diagrams needed layout adjustments
- **Validate syntax early** - use mermaid.live before publishing
- **Consider performance** - large diagrams can slow rendering

## Conclusion: Diagrams That Actually Work

Getting Mermaid diagrams working in GitHub Pages Jekyll requires a different approach than standard markdown, but the results are worth it. The client-side rendering solution provides:

- **Universal compatibility** with GitHub Pages
- **Professional presentation** with custom styling  
- **Future flexibility** as Mermaid.js continues evolving

Whether you're documenting software architecture, explaining workflows, or creating educational content, visual diagrams significantly improve reader comprehension.

**Ready to add diagrams to your Jekyll site?** Follow the steps above, and you'll have beautiful, interactive diagrams rendering perfectly on GitHub Pages.

## Next Steps

Want to take your Jekyll site further? Check out these related articles:

- [GitHub as a Document Management Platform](./github-document-management-blogging.md) - Our complete Jekyll setup story
- [Advanced Jekyll Collections](./sample-article.md) - Organizing content beyond basic posts

---

*Have questions about implementing Mermaid diagrams? Found a better solution? Share your experience in the comments or reach out on [GitHub](https://github.com/adamsalah13) to continue the conversation.*
