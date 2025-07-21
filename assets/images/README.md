# Assets Images Directory

This directory contains the visual assets for the Jekyll site.

## Required Files

### Favicon
- **File**: `twxlogo.ico`
- **Purpose**: Browser tab icon and bookmarks
- **Size**: 16x16, 32x32, 48x48 pixels (ICO format supports multiple sizes)
- **Format**: ICO file

### Profile Photo
- **File**: `as_headshot.jpg`
- **Purpose**: Personal branding in site header
- **Recommended Size**: 200x200 pixels minimum (will be displayed at 50px but high-res for retina displays)
- **Format**: JPG or PNG
- **Style**: Professional headshot with good contrast

## File Placement

```
assets/
  images/
    ├── twxlogo.ico          # Favicon for browser tabs
    ├── as_headshot.jpg      # Your professional headshot
    └── README.md            # This file
```

## Usage

These files are automatically referenced in the Jekyll layout:

- **Favicon**: Added to `<head>` section for browser compatibility
- **Headshot**: Displayed in site header next to site title
- **Responsive**: Both images scale appropriately on mobile devices

## Optimization Tips

### For the Favicon (`twxlogo.ico`)
- Use simple, recognizable design
- Ensure visibility at 16x16 pixels
- Include multiple sizes in the ICO file

### For the Headshot (`as_headshot.jpg`)
- Professional appearance
- Good lighting and contrast
- Square aspect ratio works best
- Compress for web (aim for <100KB)

## Fallbacks

If files are missing:
- **Favicon**: Browser will show default icon
- **Headshot**: CSS will gracefully hide the image element
