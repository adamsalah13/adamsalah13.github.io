---
layout: default
title: "Search"
permalink: /search/
---

<div class="container" style="padding: 2rem 0;">
    <h1>Search Articles</h1>
    <p>Find articles, blog posts, and how-to guides across the entire site.</p>
    
    <div class="mobile-search">
        <div class="search-wrapper">
            <div id="search-container" class="search-container">
                <input type="text" id="search-input" placeholder="Search for articles, tutorials, or topics..." autocomplete="off">
                <div id="search-results" class="search-results"></div>
            </div>
        </div>
    </div>

    <div class="search-tips" style="margin-top: 2rem;">
        <h3>Search Tips:</h3>
        <ul>
            <li><strong>Use multiple keywords</strong> - "jekyll github pages" finds articles about both</li>
            <li><strong>Search by category</strong> - "technical", "beginner", "advanced"</li>
            <li><strong>Find by tags</strong> - "mermaid", "diagrams", "git", "blogging"</li>
            <li><strong>Partial matches work</strong> - "merm" will find "mermaid" content</li>
        </ul>
    </div>

    <div class="popular-content" style="margin-top: 2rem;">
        <h3>Popular Articles:</h3>
        <div class="content-grid">
            {% for article in site.articles limit:3 %}
                <div class="content-card">
                    <h4><a href="{{ article.url | relative_url }}">{{ article.title }}</a></h4>
                    <p>{{ article.excerpt | strip_html | truncate: 120 }}</p>
                    <div class="meta">
                        <span class="category">{{ article.category }}</span>
                        <span class="date">{{ article.date | date: "%B %d, %Y" }}</span>
                    </div>
                </div>
            {% endfor %}
        </div>
    </div>

    <div class="recent-posts" style="margin-top: 2rem;">
        <h3>Recent Blog Posts:</h3>
        <div class="content-grid">
            {% for post in site.posts limit:3 %}
                <div class="content-card">
                    <h4><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h4>
                    <p>{{ post.excerpt | strip_html | truncate: 120 }}</p>
                    <div class="meta">
                        <span class="category">{{ post.category }}</span>
                        <span class="date">{{ post.date | date: "%B %d, %Y" }}</span>
                    </div>
                </div>
            {% endfor %}
        </div>
    </div>
</div>

<style>
.content-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    margin-top: 1rem;
}

.content-card {
    background: var(--bg-light);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 1.5rem;
    transition: var(--transition);
}

.content-card:hover {
    box-shadow: var(--shadow);
    transform: translateY(-2px);
}

.content-card h4 {
    margin: 0 0 0.5rem 0;
    font-size: 1.1rem;
}

.content-card h4 a {
    color: var(--primary);
    text-decoration: none;
}

.content-card h4 a:hover {
    color: var(--accent);
}

.content-card p {
    margin: 0 0 1rem 0;
    color: var(--text);
    line-height: 1.5;
}

.meta {
    display: flex;
    gap: 1rem;
    align-items: center;
    font-size: 0.85rem;
    color: var(--text-muted);
}

.meta .category {
    background: var(--accent);
    color: white;
    padding: 0.2rem 0.5rem;
    border-radius: 3px;
    font-weight: 500;
}

.search-tips ul {
    list-style-type: disc;
    margin-left: 1.5rem;
}

.search-tips li {
    margin-bottom: 0.5rem;
    line-height: 1.5;
}

@media (max-width: 768px) {
    .content-grid {
        grid-template-columns: 1fr;
    }
    
    .mobile-search .search-wrapper {
        display: block !important;
    }
}
</style>
