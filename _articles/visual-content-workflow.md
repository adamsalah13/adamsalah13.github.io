---
layout: post
title: "Visual Content Creation Workflow"
date: 2025-07-20
categories: [tutorial, workflow]
tags: [jekyll, workflow, visual-guide, process]
difficulty: "beginner"
estimated_time: "10 minutes"
author: "Adam Salah"
excerpt: "Visual diagrams and flowcharts showing exactly how to add different types of content to your Jekyll blog."
---

## Content Creation Decision Tree

```mermaid
flowchart TD
    A[I want to add content] --> B{What type of content?}
    
    B -->|Personal thoughts, news, updates| C[Blog Post]
    B -->|Technical deep-dive, tutorial| D[Technical Article]
    B -->|Step-by-step instructions| E[How-to Guide]
    B -->|Portfolio item, project showcase| F[Project Page]
    
    C --> G[Create in _posts/]
    D --> H[Create in _articles/]
    E --> I[Create in _howtos/]
    F --> J[Create in projects/]
    
    G --> K[Filename: YYYY-MM-DD-title.md]
    H --> L[Filename: topic-name.md]
    I --> M[Filename: action-description.md]
    J --> N[Filename: project-name.md]
    
    K --> O[Add blog front matter]
    L --> P[Add article front matter]
    M --> Q[Add howto front matter]
    N --> R[Add project front matter]
    
    O --> S[Write content]
    P --> S
    Q --> S
    R --> S
    
    S --> T[Save file]
    T --> U[Jekyll rebuilds automatically]
    U --> V[Preview in browser]
    V --> W{Content looks good?}
    W -->|No| S
    W -->|Yes| X[Commit to Git]
    X --> Y[Push to GitHub]
    Y --> Z[Live on GitHub Pages]
```

## File Creation Process

```mermaid
sequenceDiagram
    participant You
    participant VSCode
    participant Jekyll
    participant Browser
    participant GitHub
    
    You->>VSCode: Open project
    You->>VSCode: Navigate to correct folder
    You->>VSCode: Create new .md file
    You->>VSCode: Add front matter template
    You->>VSCode: Write content
    You->>VSCode: Save file
    VSCode->>Jekyll: File change detected
    Jekyll->>Jekyll: Process Markdown + Liquid
    Jekyll->>Browser: Serve updated content
    You->>Browser: Preview content
    alt Content needs changes
        You->>VSCode: Edit content
        VSCode->>Jekyll: Re-process
        Jekyll->>Browser: Update preview
    else Content is ready
        You->>GitHub: Commit and push
        GitHub->>GitHub: Build and deploy
        GitHub->>Browser: Live site updated
    end
```

## Content Type Comparison

```mermaid
quadrantChart
    title Content Type Matrix
    x-axis Low Structure --> High Structure
    y-axis Personal --> Professional
    
    quadrant-1 Professional & Structured
    quadrant-2 Professional & Flexible  
    quadrant-3 Personal & Flexible
    quadrant-4 Personal & Structured
    
    Blog Posts: [0.2, 0.2]
    Project Showcases: [0.7, 0.8]
    Technical Articles: [0.8, 0.7]
    How-to Guides: [0.9, 0.6]
```

## Front Matter Field Guide

```mermaid
graph TB
    subgraph "Required Fields (All Content)"
        A[layout: post]
        B[title: "Your Title"]
        C[date: YYYY-MM-DD]
        D[author: "Your Name"]
        E[excerpt: "Description"]
    end
    
    subgraph "Blog-Specific Fields"
        F[categories: blog, category]
        G[tags: tag1, tag2]
    end
    
    subgraph "Article-Specific Fields"
        H[difficulty: beginner/intermediate/advanced]
        I[estimated_reading_time: "X minutes"]
        J[toc: true]
        K[categories: technical, category]
    end
    
    subgraph "How-to Specific Fields"
        L[estimated_time: "X minutes"]
        M[requirements: list]
        N[tools_needed: list]
        O[categories: tutorial, category]
    end
    
    A --> P[All Content Types]
    B --> P
    C --> P
    D --> P
    E --> P
    
    F --> Q[Blog Posts]
    G --> Q
    
    H --> R[Technical Articles]
    I --> R
    J --> R
    K --> R
    
    L --> S[How-to Guides]
    M --> S
    N --> S
    O --> S
```

## URL Generation Flow

```mermaid
flowchart LR
    subgraph "Input Files"
        A["_posts/2025-07-20-my-post.md"]
        B["_articles/react-guide.md"]
        C["_howtos/setup-docker.md"]
        D["projects/portfolio-site.md"]
    end
    
    subgraph "Jekyll Processing"
        E[Collection Processing]
        F[Permalink Generation]
        G[HTML Generation]
    end
    
    subgraph "Output URLs"
        H["/blog/2025/07/20/my-post/"]
        I["/articles/react-guide/"]
        J["/howtos/setup-docker/"]
        K["/projects/portfolio-site/"]
    end
    
    A --> E
    B --> E
    C --> E
    D --> E
    
    E --> F
    F --> G
    
    G --> H
    G --> I
    G --> J
    G --> K
```

## Development Workflow States

```mermaid
stateDiagram-v2
    [*] --> Planning: Idea for content
    Planning --> Writing: Choose content type
    Writing --> Drafting: Create file with front matter
    Drafting --> Reviewing: Add content
    Reviewing --> Drafting: Needs improvement
    Reviewing --> Testing: Content complete
    Testing --> Local_Preview: Jekyll build
    Local_Preview --> Testing: Fix issues
    Local_Preview --> Publishing: Looks good
    Publishing --> Live: Push to GitHub
    Live --> Updating: Content needs changes
    Updating --> Testing: Make edits
    Live --> [*]: Content lifecycle complete
```

## Quick Action Guide

### Starting a New Blog Post

```mermaid
flowchart TD
    A[Start Blog Post] --> B[Open _posts folder]
    B --> C[Create: YYYY-MM-DD-title.md]
    C --> D[Copy blog template]
    D --> E[Update title, date, tags]
    E --> F[Write introduction]
    F --> G[Add main content]
    G --> H[Write conclusion]
    H --> I[Save and preview]
    I --> J[Publish when ready]
```

### Starting a Technical Article

```mermaid
flowchart TD
    A[Start Article] --> B[Open _articles folder]
    B --> C[Create: topic-name.md]
    C --> D[Copy article template]
    D --> E[Set difficulty level]
    E --> F[Estimate reading time]
    F --> G[Create outline with headings]
    G --> H[Write detailed sections]
    H --> I[Add code examples]
    I --> J[Include conclusion]
    J --> K[Save and preview]
    K --> L[Publish when ready]
```

### Starting a How-to Guide

```mermaid
flowchart TD
    A[Start How-to] --> B[Open _howtos folder]
    B --> C[Create: how-to-action.md]
    C --> D[Copy howto template]
    D --> E[List requirements]
    E --> F[List needed tools]
    F --> G[Write prerequisites]
    G --> H[Create numbered steps]
    H --> I[Add verification steps]
    I --> J[Include troubleshooting]
    J --> K[Save and preview]
    K --> L[Publish when ready]
```

## Content Discovery Timeline

```mermaid
timeline
    title Content Lifecycle
    
    section Creation
        File Created : New .md file in collection folder
        Front Matter : YAML header with metadata
        Content Added : Markdown content written
    
    section Processing
        Jekyll Scan : Auto-detects new file
        Template Apply : Applies layout template
        HTML Generate : Converts to HTML
    
    section Publishing
        Local Preview : Available on localhost:4000
        Git Commit : Changes committed
        GitHub Push : Deployed to GitHub Pages
        Live Site : Available to public
```

## Troubleshooting Decision Tree

```mermaid
flowchart TD
    A[Content Not Showing] --> B{Check File Location}
    B -->|Wrong folder| C[Move to correct collection folder]
    B -->|Correct folder| D{Check Front Matter}
    D -->|Invalid YAML| E[Fix YAML syntax]
    D -->|Valid YAML| F{Check Jekyll Server}
    F -->|Not running| G[Restart Jekyll server]
    F -->|Running| H{Check File Name}
    H -->|Invalid format| I[Rename file correctly]
    H -->|Valid format| J[Check Jekyll build logs]
    
    C --> K[Content should appear]
    E --> K
    G --> K
    I --> K
    J --> L[Debug specific error]
```

This visual guide provides all the workflows and decision trees you need for effective content management in your Jekyll blog system!
