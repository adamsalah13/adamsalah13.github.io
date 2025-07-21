# Required Image Files

To complete the headshot and favicon setup, add these image files to the `assets/images/` directory:

## 1. Headshot Image
- **File**: `AS_headshot.JPG`
- **Size**: Recommended 200x200px or larger (will be resized automatically)
- **Format**: JPG, PNG, or WebP
- **Usage**: Displays in the site header next to your name
- **Responsive sizing**: 
  - Desktop: 50px diameter
  - Tablet: 45px diameter  
  - Mobile: 40px diameter
- **Features**: Round border, hover effects, professional styling

## 2. Favicon
- **File**: `twxlogo.ico`
- **Size**: 32x32px (standard favicon size)
- **Format**: ICO file
- **Usage**: Shows in browser tabs and bookmarks
- **Fallback**: Uses Apple touch icon format as well

## Current Setup Status
✅ HTML layout updated with headshot and favicon links  
✅ CSS styles added for responsive headshot display  
✅ Hover animations and professional styling implemented  
✅ Mobile-responsive breakpoints configured  
✅ Site builds successfully with graceful fallbacks  
✅ Single CSS file architecture maintained  

## CSS Integration
The headshot styling is integrated into the main CSS file with:
- `.site-brand` class for layout
- `.site-headshot` class for the image styling
- Responsive breakpoints for all screen sizes
- Smooth hover transitions and effects
- Professional border styling with theme colors

## What to do next
1. Add your `AS_headshot.JPG` file to `assets/images/`
2. Add your `twxlogo.ico` file to `assets/images/`
3. The site will automatically display them with full responsive styling!

## File Structure
```
assets/images/
├── IMAGE_SETUP.md      # This documentation
├── AS_headshot.JPG     # Your headshot (add this file)
└── twxlogo.ico         # Your favicon (add this file)
```

## Troubleshooting
- If images don't appear, check file names match exactly
- Ensure files are in the correct `assets/images/` directory
- Headshot will gracefully hide if file is missing
- Favicon will use browser default if file is missing
