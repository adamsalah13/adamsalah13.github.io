// Client-side search functionality using Lunr.js
(function() {
    let searchIndex;
    let searchData;
    let searchInput;
    let searchResults;
    let searchContainer;

    // Initialize search when DOM is loaded
    document.addEventListener('DOMContentLoaded', function() {
        searchInput = document.getElementById('search-input');
        searchResults = document.getElementById('search-results');
        searchContainer = document.getElementById('search-container');

        if (searchInput) {
            // Load search data and initialize
            loadSearchData();
            
            // Add event listeners
            searchInput.addEventListener('input', handleSearch);
            searchInput.addEventListener('focus', showSearchContainer);
            
            // Close search when clicking outside
            document.addEventListener('click', function(e) {
                if (!searchContainer.contains(e.target)) {
                    hideSearchContainer();
                }
            });

            // Handle keyboard navigation
            searchInput.addEventListener('keydown', handleKeyboard);
            
            // Global keyboard shortcuts
            document.addEventListener('keydown', function(e) {
                // Ctrl+K or Cmd+K to focus search
                if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                    e.preventDefault();
                    searchInput.focus();
                    showSearchContainer();
                }
                
                // Escape to close search
                if (e.key === 'Escape') {
                    hideSearchContainer();
                    searchInput.blur();
                }
            });
        }

        // Initialize mobile menu
        initializeMobileMenu();
    });

    function initializeMobileMenu() {
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        
        if (mobileToggle && navLinks) {
            mobileToggle.addEventListener('click', function() {
                navLinks.classList.toggle('active');
                mobileToggle.classList.toggle('active');
            });
            
            // Close mobile menu when clicking a link
            navLinks.addEventListener('click', function(e) {
                if (e.target.classList.contains('page-link')) {
                    navLinks.classList.remove('active');
                    mobileToggle.classList.remove('active');
                }
            });
            
            // Close mobile menu when clicking outside
            document.addEventListener('click', function(e) {
                if (!mobileToggle.contains(e.target) && !navLinks.contains(e.target)) {
                    navLinks.classList.remove('active');
                    mobileToggle.classList.remove('active');
                }
            });
        }
    }

    function loadSearchData() {
        fetch('/search.json')
            .then(response => response.json())
            .then(data => {
                searchData = data;
                buildSearchIndex();
            })
            .catch(error => {
                console.error('Error loading search data:', error);
            });
    }

    function buildSearchIndex() {
        searchIndex = lunr(function() {
            this.field('title', { boost: 10 });
            this.field('content', { boost: 5 });
            this.field('excerpt', { boost: 7 });
            this.field('tags', { boost: 3 });
            this.field('category', { boost: 3 });
            this.ref('id');

            searchData.forEach(function(doc, index) {
                doc.id = index;
                this.add(doc);
            }, this);
        });
    }

    function handleSearch() {
        const query = searchInput.value.trim();
        
        if (query.length < 2) {
            hideSearchContainer();
            return;
        }

        showSearchContainer();
        performSearch(query);
    }

    function performSearch(query) {
        if (!searchIndex) {
            searchResults.innerHTML = '<div class="search-item">Search index not ready...</div>';
            return;
        }

        try {
            // Perform fuzzy search with wildcards
            const searchQuery = query.split(' ').map(term => `${term}*`).join(' ');
            const results = searchIndex.search(searchQuery);

            if (results.length === 0) {
                searchResults.innerHTML = `
                    <div class="search-item no-results">
                        <p>No results found for "<strong>${escapeHtml(query)}</strong>"</p>
                        <p class="search-tip">Try different keywords or check spelling</p>
                    </div>
                `;
            } else {
                displayResults(results, query);
            }
        } catch (error) {
            console.error('Search error:', error);
            searchResults.innerHTML = '<div class="search-item">Search error occurred</div>';
        }
    }

    function displayResults(results, query) {
        const html = results.slice(0, 8).map(result => {
            const item = searchData[result.ref];
            const snippet = createSnippet(item.content, query);
            const highlightedTitle = highlightText(item.title, query);
            
            return `
                <div class="search-item">
                    <h3 class="search-title">
                        <a href="${item.url}">${highlightedTitle}</a>
                    </h3>
                    <div class="search-meta">
                        <span class="search-category">${item.category || 'Article'}</span>
                        <span class="search-date">${formatDate(item.date)}</span>
                        ${item.tags ? `<span class="search-tags">${item.tags.slice(0, 3).join(', ')}</span>` : ''}
                    </div>
                    <p class="search-excerpt">${snippet}</p>
                </div>
            `;
        }).join('');

        searchResults.innerHTML = html;
    }

    function createSnippet(content, query) {
        const words = query.toLowerCase().split(/\s+/);
        const sentences = content.split(/[.!?]+/);
        
        // Find sentence containing query terms
        let bestSentence = '';
        let maxMatches = 0;
        
        sentences.forEach(sentence => {
            const lowerSentence = sentence.toLowerCase();
            const matches = words.filter(word => lowerSentence.includes(word)).length;
            
            if (matches > maxMatches) {
                maxMatches = matches;
                bestSentence = sentence.trim();
            }
        });

        if (bestSentence) {
            return highlightText(bestSentence.substring(0, 200) + '...', query);
        }

        // Fallback to first 200 characters
        return highlightText(content.substring(0, 200) + '...', query);
    }

    function highlightText(text, query) {
        const words = query.split(/\s+/).filter(word => word.length > 1);
        let highlightedText = text;

        words.forEach(word => {
            const regex = new RegExp(`(${escapeRegex(word)})`, 'gi');
            highlightedText = highlightedText.replace(regex, '<mark>$1</mark>');
        });

        return highlightedText;
    }

    function formatDate(dateString) {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
        });
    }

    function showSearchContainer() {
        if (searchContainer) {
            searchContainer.classList.add('active');
        }
    }

    function hideSearchContainer() {
        if (searchContainer) {
            searchContainer.classList.remove('active');
        }
    }

    function handleKeyboard(e) {
        if (e.key === 'Escape') {
            hideSearchContainer();
            searchInput.blur();
        }
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    function escapeRegex(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    // Expose search functions globally for external use
    window.Search = {
        show: showSearchContainer,
        hide: hideSearchContainer,
        focus: function() {
            if (searchInput) {
                searchInput.focus();
            }
        }
    };
})();
