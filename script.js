const translations = { 
    en: { 
        lang: 'FA', explore: 'Explore', login: 'Log In', signup: 'Get Started', 
        heroTitle: 'Where creators <span class="highlight">connect</span> with fans.', 
        heroSub: 'Support your favorite artists, writers, and makers with a neobrutalist twist.', 
        searchPlaceholder: 'Find a creator...', searchBtn: 'Search', 
        featuredTitle: 'Featured Creators', patrons: 'Patrons', viewProfile: 'View Profile', 
        about: 'About', recentPosts: 'Recent Posts', membership: 'Select a membership', 
        joinNow: 'Join Now', footerTagline: 'Designed with raw attitude.', 
        footerAbout: 'About', footerCareers: 'Careers', footerPrivacy: 'Privacy', 
        footerCopy: '&copy; 2023 PATREON NEO - Not a real site.', perMonth: '/ mo' 
    }, 
    fa: { 
        lang: 'EN', explore: 'گشت و گذار', login: 'ورود', signup: 'شروع کنید', 
        heroTitle: 'جایی که <span class="highlight">ارتباط</span> سازندگان با طرفداران برقرار می‌شود.', 
        heroSub: 'از هنرمندان، نویسندگان و سازندگان مورد علاقه خود با سبک نئوبروتالیسم حمایت کنید.', 
        searchPlaceholder: 'جستجوی سازنده...', searchBtn: 'جستجو', 
        featuredTitle: 'سازندگان برتر', patrons: 'حامی', viewProfile: 'مشاهده پروفایل', 
        about: 'درباره', recentPosts: 'پست‌های اخیر', membership: 'انتخاب عضویت', 
        joinNow: 'عضویت', footerTagline: 'طراحی شده با نگرش خام.', 
        footerAbout: 'درباره ما', footerCareers: 'فرصت‌های شغلی', footerPrivacy: 'حریم خصوصی', 
        footerCopy: '&copy; ۲۰۲۳ پاترئون نئو - یک سایت واقعی نیست.', perMonth: '/ ماهانه' 
    } 
}; 
 
const creators = [ 
    { 
        id: '1', name: 'The Radical Artist', tagline: 'Painting the world in bold strokes.', 
        patrons: 120, avatar: '🎨', cover: '#ffde03', 
        about: 'I create large-scale murals and digital art that challenges the status quo. Your support helps me buy more paint and keep the rebellion alive.', 
        tiers: [{ name: 'Dabbler', price: 5, description: 'Get access to feed.' }, { name: 'True Believer', price: 15, description: 'Downloads.', featured: true }], 
        posts: [{ title: 'New Mural', date: 'Oct 12, 2023', excerpt: 'Just finished this piece.' }] 
    }, 
    { 
        id: '2', name: 'Cyberpunk Soundscapes', tagline: 'Electronic beats for a neon future.', 
        patrons: 450, avatar: '🎹', cover: '#00d1ff', 
        about: 'Creating immersive audio experiences.', 
        tiers: [{ name: 'Producer', price: 10, description: 'Project files.', featured: true }], 
        posts: [{ title: 'Neon Nights LP', date: 'Oct 15, 2023', excerpt: 'Out now!' }] 
    } 
]; 

const dashboardPosts = [
    {
        creator: 'The Radical Artist',
        creatorAvatar: '🎨',
        title: 'New Mural in Downtown',
        date: 'Aug 20, 2023',
        likes: 778,
        imageContent: '🖼️',
        excerpt: 'Finally finished this piece after 3 weeks of work! Hope you guys like it.'
    },
    {
        creator: 'Cyberpunk Soundscapes',
        creatorAvatar: '🎹',
        title: 'August Mix is out!',
        date: 'Aug 18, 2023',
        likes: 1205,
        imageContent: '🎧',
        excerpt: 'Check out the latest beats for your neon nights.'
    }
];
 
let currentLang = 'en'; 
let selectedCreator = null; 
 
function init() { 
    setupEventListeners(); 
    updateTranslations(); 
} 
 
function updateTranslations() { 
    const t = translations[currentLang]; 
    document.getElementById('lang-toggle').textContent = t.lang; 
    document.getElementById('nav-explore').textContent = t.explore; 
    document.getElementById('nav-login').textContent = t.login; 
    document.getElementById('nav-signup').textContent = t.signup; 
    document.getElementById('hero-title').innerHTML = t.heroTitle; 
    document.getElementById('hero-sub').textContent = t.heroSub; 
    document.getElementById('search-input').placeholder = t.searchPlaceholder; 
    document.getElementById('search-btn').textContent = t.searchBtn; 
    document.getElementById('featured-title').textContent = t.featuredTitle; 
    document.getElementById('about-title').textContent = t.about; 
    document.getElementById('posts-title').textContent = t.recentPosts; 
    document.getElementById('membership-title').textContent = t.membership; 
     
    // Footer translations 
    document.getElementById('footer-tagline').textContent = t.footerTagline; 
    document.getElementById('footer-about').textContent = t.footerAbout; 
    document.getElementById('footer-careers').textContent = t.footerCareers; 
    document.getElementById('footer-privacy').textContent = t.footerPrivacy; 
    document.getElementById('footer-copy').innerHTML = t.footerCopy; 
     
    renderCreators(); 
    if (selectedCreator) { 
        window.navigateToProfile(selectedCreator.id); 
    } 
} 
 
function renderCreators(data = creators) { 
    const t = translations[currentLang]; 
    const creatorList = document.getElementById('creator-list'); 
    if (data.length === 0) { 
        creatorList.innerHTML = `<div class="card" style="grid-column: 1/-1; text-align: center;"><h3>${currentLang === 'en' ? 'No creators found' : 'سازنده‌ای پیدا نشد'}</h3></div>`; 
        return; 
    } 
    creatorList.innerHTML = ''; 
    data.forEach(creator => { 
        const card = document.createElement('div'); 
        card.className = 'card creator-card'; 
        card.onclick = () => window.navigateToProfile(creator.id); 
        card.innerHTML = ` 
            <div class="image-placeholder" style="background-color: ${creator.cover}">${creator.avatar}</div> 
            <span class="badge">${creator.patrons} ${t.patrons}</span> 
            <h3>${creator.name}</h3> 
            <p>${creator.tagline}</p> 
            <button class="btn btn-primary" style="margin-top: auto;">${t.viewProfile}</button> 
        `; 
        creatorList.appendChild(card); 
    }); 
} 
 
function setupEventListeners() { 
    document.getElementById('lang-toggle').addEventListener('click', () => { 
        currentLang = currentLang === 'en' ? 'fa' : 'en'; 
        document.documentElement.lang = currentLang; 
        document.documentElement.dir = currentLang === 'fa' ? 'rtl' : 'ltr'; 
        updateTranslations(); 
    }); 
    document.getElementById('nav-home').addEventListener('click', () => showView('home')); 
    document.getElementById('nav-explore').addEventListener('click', () => alert('Explore clicked!')); 
    document.getElementById('nav-login').addEventListener('click', () => showView('dashboard')); 
    document.getElementById('nav-signup').addEventListener('click', () => alert('Signup clicked!')); 
    document.getElementById('search-input').addEventListener('input', (e) => filterCreators(e.target.value)); 
    document.getElementById('dash-home').addEventListener('click', (e) => {
        e.preventDefault();
        showView('home');
    });
} 
 
function filterCreators(query) { 
    const filtered = creators.filter(c => c.name.toLowerCase().includes(query.toLowerCase())); 
    renderCreators(filtered); 
} 
 
function showView(view) { 
    document.getElementById('view-home').style.display = view === 'home' ? 'block' : 'none'; 
    document.getElementById('view-profile').style.display = view === 'profile' ? 'block' : 'none'; 
    document.getElementById('view-dashboard').style.display = view === 'dashboard' ? 'block' : 'none'; 
    
    // Manage navbar visibility
    const navbar = document.querySelector('.navbar');
    const footer = document.querySelector('.footer');
    if (view === 'dashboard') {
        navbar.style.display = 'none';
        footer.style.display = 'none';
        renderDashboard();
    } else {
        navbar.style.display = 'block';
        footer.style.display = 'block';
    }

    if (view === 'home') selectedCreator = null; 
} 

function renderDashboard() {
    const feed = document.getElementById('dashboard-feed');
    feed.innerHTML = dashboardPosts.map(post => `
        <div class="dashboard-post">
            <div class="post-header">
                <div class="mini-avatar" style="background: var(--primary);">${post.creatorAvatar}</div>
                <div class="post-creator-info">
                    ${post.creator}
                    <small>${post.date}</small>
                </div>
                <button class="btn-more" style="margin-left: auto;">⋮</button>
            </div>
            <div class="post-image">${post.imageContent}</div>
            <div class="post-content">
                <h3>${post.title}</h3>
                <p>${post.excerpt}</p>
                <a href="#" style="color: var(--accent); font-weight: 700;">Show more</a>
            </div>
            <div class="post-actions">
                <div class="action-item">❤️ ${post.likes}</div>
                <div class="action-item">💬 Comment</div>
                <div class="action-item">🔗 Share</div>
            </div>
        </div>
    `).join('');
}
 
window.navigateToProfile = (id) => { 
    selectedCreator = creators.find(c => c.id === id); 
    if (!selectedCreator) return; 
    const t = translations[currentLang]; 
    document.getElementById('creator-name').textContent = selectedCreator.name; 
    document.getElementById('creator-tagline').textContent = selectedCreator.tagline; 
    document.getElementById('creator-patrons').textContent = `${selectedCreator.patrons} ${t.patrons}`; 
    document.getElementById('creator-about').textContent = selectedCreator.about; 
    document.getElementById('creator-cover').style.backgroundColor = selectedCreator.cover; 
    document.getElementById('creator-avatar').textContent = selectedCreator.avatar; 
     
    const tierList = document.getElementById('tier-list'); 
    tierList.innerHTML = ''; 
    selectedCreator.tiers.forEach(tier => { 
        const tierCard = document.createElement('div'); 
        tierCard.className = `tier-card ${tier.featured ? 'featured' : ''}`; 
        tierCard.innerHTML = ` 
            <h3>${tier.name}</h3> 
            <div class="tier-price">$${tier.price} <small>${t.perMonth}</small></div> 
            <button class="btn btn-black">${t.joinNow}</button> 
        `; 
        tierList.appendChild(tierCard); 
    }); 
     
    const postList = document.getElementById('creator-posts'); 
    postList.innerHTML = ''; 
    selectedCreator.posts.forEach(post => { 
        const postCard = document.createElement('div'); 
        postCard.className = 'post-card'; 
        postCard.innerHTML = ` 
            <div class="post-date">${post.date}</div> 
            <h3>${post.title}</h3> 
            <p>${post.excerpt}</p> 
        `; 
        postList.appendChild(postCard); 
    }); 
     
    showView('profile'); 
    window.scrollTo(0, 0); 
}; 
 
init(); 
