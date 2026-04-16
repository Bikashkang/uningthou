/* ═══════════════════════════════════════════════════════════
   Uningthou Woodworks — Main JavaScript
   File: js/main.js
   ═══════════════════════════════════════════════════════════ */

/* ── Mobile Nav ─────────────────────────────────────────── */
function toggleMobileNav() {
    const nav = document.getElementById('mobileNav');
    const btn = document.getElementById('hamburger');
    nav.classList.toggle('open');
    btn.classList.toggle('open');
    document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
}

function closeMobileNav() {
    const nav = document.getElementById('mobileNav');
    const btn = document.getElementById('hamburger');
    nav.classList.remove('open');
    btn.classList.remove('open');
    document.body.style.overflow = '';
}

/* ── Scroll Reveal ──────────────────────────────────────── */
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── Header shadow on scroll ────────────────────────────── */
window.addEventListener('scroll', () => {
    const header = document.getElementById('site-header');
    if (!header) return;
    if (window.scrollY > 40) {
        header.style.boxShadow = '0 4px 24px rgba(61,36,9,0.12)';
    } else {
        header.style.boxShadow = '0 1px 0 rgba(92,58,33,0.12), 0 4px 20px rgba(0,0,0,0.04)';
    }
});
