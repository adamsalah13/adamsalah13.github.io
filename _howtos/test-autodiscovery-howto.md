---
layout: post
title: "How to Test Auto-Discovery Feature"
date: 2025-07-20
category: "testing"
tags: [jekyll, how-to, testing]
estimated_time: "3 minutes"
author: "Adam Salah"
excerpt: "Quick guide showing how to test that Jekyll automatically picks up new markdown files."
---

## How to Test Auto-Discovery Feature

This how-to guide demonstrates that new files in the `_howtos/` folder are automatically discovered.

### Step 1: Create a New File
1. Navigate to the `_howtos/` folder
2. Create a new `.md` file
3. Add proper front matter (like this file)

### Step 2: Add Content
Write your how-to content using standard markdown:

```markdown
## Step-by-step instructions
- Use bullet points
- Include code examples
- Add screenshots if needed
```

### Step 3: Verify Auto-Discovery
1. Build the site locally: `bundle exec jekyll build`
2. Check the homepage for your new how-to
3. Verify the individual page loads correctly

### Expected Results
✅ New file appears in "How-to Guides" section  
✅ Individual page is accessible  
✅ Metadata displays correctly  
✅ Navigation works properly  

### Troubleshooting
If your file doesn't appear:
- Check front matter syntax
- Ensure file is in correct folder
- Verify Jekyll is configured for collections
- Rebuild the site

**Success!** If you're reading this on the website, auto-discovery is working perfectly!
