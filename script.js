document.addEventListener('DOMContentLoaded', () => {
    /* ===== 1. MOBILE NAVIGATION TOGGLE ===== */
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('active');
            navToggle.setAttribute('aria-expanded', String(isOpen));
        });

        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    /* ===== 2. GALLERY INTERACTIVE LIGHTBOX ===== */
    const galleryItems = document.querySelectorAll('.interactive-gallery .item img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxClose = document.querySelector('.lightbox-close');

    if (galleryItems.length > 0 && lightbox && lightboxImg) {
        galleryItems.forEach(img => {
            img.addEventListener('click', () => {
                lightbox.style.display = 'flex';
                lightboxImg.src = img.src;
                lightboxImg.alt = img.alt || 'Enlarged gallery view';
            });
        });

        const closeLightbox = () => {
            lightbox.style.display = 'none';
        };

        if (lightboxClose) {
            lightboxClose.addEventListener('click', closeLightbox);
        }

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }

    /* ===== 3. MENU CATEGORY FILTERING ===== */
    const filterBtns = document.querySelectorAll('.filter-btn');
    const menuSections = document.querySelectorAll('.menu-section');

    if (filterBtns.length > 0 && menuSections.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const category = btn.getAttribute('data-category');

                filterBtns.forEach(b => {
                    b.classList.remove('active');
                    b.setAttribute('aria-pressed', 'false');
                });

                btn.classList.add('active');
                btn.setAttribute('aria-pressed', 'true');

                menuSections.forEach(section => {
                    const sectionCategory = section.getAttribute('data-category');
                    const shouldShow = (category === 'all' || category === sectionCategory);
                    section.classList.toggle('hidden', !shouldShow);
                });
            });
        });
    }

    /* ===== 4. CONTACT FORM FEEDBACK ===== */
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            contactForm.style.display = 'none';
            if (formSuccess) {
                formSuccess.style.display = 'block';
            }
        });
    }
});