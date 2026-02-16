
// Smooth scrolling for navigation
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Update active state
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');

        // Scroll to target
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Mobile sidebar close handling could go here if implemented
    });
});

// Enhanced search with highlighting
const searchInput = document.getElementById('searchInput');
let searchTimeout;

if (searchInput) {
    searchInput.addEventListener('input', function (e) {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            const searchTerm = e.target.value.toLowerCase();

            document.querySelectorAll('.nav-link').forEach(link => {
                const text = link.textContent.toLowerCase();
                const match = text.includes(searchTerm);
                link.style.display = match || searchTerm === '' ? 'block' : 'none';

                // Highlight matching text
                if (match && searchTerm !== '') {
                    const regex = new RegExp(`(${searchTerm})`, 'gi');
                    link.innerHTML = link.textContent.replace(regex, '<mark style="background: #58a6ff; color: #0d1117; padding: 0 2px;">$1</mark>');
                } else {
                    link.textContent = link.textContent; // Reset
                }
            });

            // Hide empty sections
            document.querySelectorAll('.nav-section').forEach(section => {
                const visibleLinks = Array.from(section.querySelectorAll('.nav-link'))
                    .filter(link => link.style.display !== 'none');
                section.style.display = visibleLinks.length > 0 ? 'block' : 'none';
            });
        }, 150);
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', function (e) {
        // Ctrl/Cmd + K to focus search
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            searchInput.focus();
        }

        // Escape to clear search
        if (e.key === 'Escape' && document.activeElement === searchInput) {
            searchInput.value = '';
            searchInput.dispatchEvent(new Event('input'));
        }
    });
}

// Highlight current section while scrolling
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';

    // Find the current section
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 150)) { // 150 offset for better triggering
            current = section.getAttribute('id');
        }
    });

    // Update active class on nav links
    if (current) {
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }
});

// Copy code blocks on click (Enhanced with Tooltip)
document.querySelectorAll('pre').forEach(pre => {
    pre.style.cursor = 'pointer';
    pre.title = 'Click to copy';
    pre.addEventListener('click', function () {
        const code = this.querySelector('code').textContent;
        navigator.clipboard.writeText(code).then(() => {
            // Visual feedback - Border
            const original = this.style.border;
            this.style.border = '1px solid #58a6ff';

            // Visual feedback - Tooltip
            const tooltip = document.createElement('div');
            tooltip.textContent = 'Copied!';
            tooltip.style.cssText = `
                position: absolute;
                background: var(--accent);
                color: white;
                padding: 4px 8px;
                border-radius: 4px;
                font-size: 12px;
                pointer-events: none;
                z-index: 1000;
            `;

            const rect = this.getBoundingClientRect();
            // Calculate absolute position including scroll
            const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            tooltip.style.left = (rect.left + scrollLeft + rect.width / 2) + 'px';
            tooltip.style.top = (rect.top + scrollTop - 30) + 'px';

            document.body.appendChild(tooltip);

            setTimeout(() => {
                this.style.border = original;
                tooltip.remove();
            }, 1000);
        });
    });
});

// Persist scroll position
window.addEventListener('beforeunload', function () {
    localStorage.setItem('scrollPos', window.scrollY);
});

window.addEventListener('load', function () {
    const scrollPos = localStorage.getItem('scrollPos');
    if (scrollPos) {
        window.scrollTo(0, parseInt(scrollPos));
    }
});

// Add reading progress indicator
const progressBar = document.createElement('div');
progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 2px;
        background: var(--accent);
        width: 0%;
        z-index: 9999;
        transition: width 0.1s;
    `;
document.body.appendChild(progressBar);

window.addEventListener('scroll', function () {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + '%';
});
// Bookmark Feature Logic
let bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');

function initBookmarks() {
    // Inject bookmark buttons into all h2 and h3 sections
    document.querySelectorAll('section h2, section h3').forEach(header => {
        const sectionId = header.closest('section').id;
        const sectionTitle = header.innerText.replace('#', '').trim();

        const btn = document.createElement('button');
        btn.className = 'bookmark-btn';
        btn.title = 'Bookmark this section';
        btn.dataset.section = sectionId;
        btn.dataset.title = sectionTitle;

        const isBookmarked = bookmarks.some(b => b.id === sectionId);
        if (isBookmarked) btn.classList.add('active');

        btn.innerHTML = `
            <svg viewBox="0 0 24 24" fill="${isBookmarked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
        `;

        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleBookmark(sectionId, sectionTitle);
        });

        header.appendChild(btn);
    });

    renderBookmarks();
}

function toggleBookmark(id, title) {
    const index = bookmarks.findIndex(b => b.id === id);
    if (index === -1) {
        bookmarks.push({ id, title });
    } else {
        bookmarks.splice(index, 1);
    }

    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    // Update all buttons for this section (if multiple)
    document.querySelectorAll(`.bookmark-btn[data-section="${id}"]`).forEach(btn => {
        const active = bookmarks.some(b => b.id === id);
        btn.classList.toggle('active', active);
        btn.querySelector('svg').setAttribute('fill', active ? 'currentColor' : 'none');
    });

    renderBookmarks();
}

function renderBookmarks() {
    const container = document.getElementById('bookmarksSection');
    const list = document.getElementById('bookmarksList');

    if (bookmarks.length === 0) {
        container.style.display = 'none';
        return;
    }

    container.style.display = 'block';
    list.innerHTML = bookmarks.map(b => `
        <div class="bookmark-link-wrapper" style="position: relative;">
            <a href="#${b.id}" class="bookmark-link" data-id="${b.id}">
                ${b.title}
                <span class="remove-bookmark" onclick="event.preventDefault(); event.stopPropagation(); window.toggleBookmark('${b.id}', '${b.title}')">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 6L6 18M6 6l12 12"></path>
                    </svg>
                </span>
            </a>
        </div>
    `).join('');

    // Add click listeners to new bookmark links
    list.querySelectorAll('.bookmark-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // Update active state in main nav if applicable
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                const mainNavLink = document.querySelector(`.nav-link[href="${targetId}"]`);
                if (mainNavLink) mainNavLink.classList.add('active');
            }
        });
    });
}

// Make toggleBookmark global so it can be called from inline onclick
window.toggleBookmark = toggleBookmark;

// Initialize on load
window.addEventListener('load', initBookmarks);
