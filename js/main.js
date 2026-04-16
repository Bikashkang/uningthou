/* ═══════════════════════════════════════════════════════════
   Uningthou Woodworks — Main JavaScript
   File: js/main.js
   ═══════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

    /* ── Mobile Nav ─────────────────────────────────────────── */
    const hamburgerBtn = document.getElementById('hamburger');
    const mobileNav    = document.getElementById('mobileNav');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    if (hamburgerBtn && mobileNav) {
        hamburgerBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileNav.classList.toggle('open');
            hamburgerBtn.classList.toggle('open');
            document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
        });
    }

    if (mobileNavLinks.length) {
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.remove('open');
                hamburgerBtn.classList.remove('open');
                document.body.style.overflow = '';
            });
        });
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
        header.style.boxShadow = window.scrollY > 40
            ? '0 4px 24px rgba(61,36,9,0.12)'
            : '0 1px 0 rgba(92,58,33,0.12), 0 4px 20px rgba(0,0,0,0.04)';
    });

});
