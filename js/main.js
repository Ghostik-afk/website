/**
 * main.js — Юрий, Portfolio
 * Чистый JS, ES6+, IIFE pattern
 */

(function() {
  'use strict';

  /* ================================
     TRANSLATIONS
  ================================ */
  const translations = {
    ru: {
      'hero.greeting': 'Привет, меня зовут',
      'hero.bio': 'Начинающий frontend-разработчик. Перегоняю макеты из Figma в код. Люблю чистый CSS, простой дизайн и хороший кофе.',
      'hero.download': 'Скачать резюме',
      'hero.contact': 'Связаться',
      'nav.about': 'Обо мне',
      'nav.skills': 'Навыки',
      'nav.projects': 'Проекты',
      'nav.experience': 'Опыт',
      'nav.contact': 'Контакты',
      'about.label': '01',
      'about.title': 'Обо мне',
      'about.p1': 'Меня зовут Юрий , мне 17 лет. Живу в России, учусь на программиста и параллельно изучаю frontend-разработку. На данный момент специализируюсь на вёрстке сайтов по готовым макетам.',
      'about.p2': 'Беру макеты из Figma, Tilda, Adobe XD — перегоняю их в чистый HTML и CSS. Умею работать с адаптивностью и стараюсь писать код, который легко читать и поддерживать.',
      'about.p3': 'Ищу возможность делать реальные проекты и набираться опыта. Готов помочь с вёрсткой для вашего сайта — от простого лендинга до небольшого интернет-магазина.',
      'about.fact1': 'Вёрстка по макетам Figma, Tilda, Adobe XD',
      'about.fact2': 'Адаптивная вёрстка (мобильные, планшеты, десктоп)',
      'about.fact3': 'Английский — читаю документацию и статьи',
      'skills.label': '02',
      'skills.title': 'Навыки',
      'skills.desc': 'Что я умею и что постоянно изучаю',
      'projects.label': '03',
      'projects.title': 'Проекты',
      'projects.desc': 'Моя первая работа — пока одна, но зато своя',
      'projects.filter.all': 'Все',
      'projects.filter.web': 'Веб',
      'projects.filter.mobile': 'Мобильные',
      'projects.filter.other': 'Другое',
      'projects.first.desc': 'Вёрстка лендинга по макету из Figma. Адаптивность, hover-эффекты, чистый CSS.',
      'experience.label': '04',
      'experience.title': 'Опыт',
      'experience.desc': 'Чем я занимаюсь',
      'experience.present': 'наст. время',
      'experience.job1.title': 'Изучаю frontend-разработку',
      'experience.job1.desc': 'HTML, CSS, JavaScript — каждый день пишу код и разбираюсь в деталях. Параллельно учусь в колледже на программиста.',
      'experience.job2.title': 'Начал изучать программирование',
      'experience.job2.desc': 'Первые шаги в IT. Начал с Python, потом перешёл на веб-разработку и понял, что это моё.',
      'experience.edu': 'Школа',
      'experience.edu.desc': 'Базовые знания информатики, первые проекты',
      'contact.label': '05',
      'contact.title': 'Контакты',
      'contact.desc': 'Напиши мне — отвечу в течение дня',
      'contact.form.name': 'Имя',
      'contact.form.email': 'Email',
      'contact.form.message': 'Сообщение',
      'contact.form.nameError': 'Имя должно содержать минимум 2 символа',
      'contact.form.emailError': 'Введите корректный email',
      'contact.form.messageError': 'Сообщение должно содержать минимум 10 символов',
      'contact.form.submit': 'Отправить',
      'contact.form.submitting': 'Отправка…',
      'contact.form.submitted': 'Отправлено',
      'contact.info.text': 'Если вам нужна вёрстка сайта по макету — напишите. Рассмотрю любой проект, от простого лендинга до чего-то посерьёзнее.',
      'toast.success': 'Спасибо! Я свяжусь с вами в ближайшее время.',
      'logo': 'YK'
    },
    en: {
      'hero.greeting': "Hello, I'm",
      'hero.bio': 'Junior frontend developer. I convert Figma layouts into clean code. Love pure CSS, simple design, and good coffee.',
      'hero.download': 'Download Resume',
      'hero.contact': 'Contact Me',
      'nav.about': 'About',
      'nav.skills': 'Skills',
      'nav.projects': 'Projects',
      'nav.experience': 'Experience',
      'nav.contact': 'Contact',
      'about.label': '01',
      'about.title': 'About Me',
      'about.p1': "My name is Yuri Kovalchuk, I'm 17 years old. I live in Russia, studying to be a programmer and learning frontend development on the side. Right now I specialize in layout from ready-made designs.",
      'about.p2': "I take designs from Figma, Tilda, Adobe XD — and convert them into clean HTML and CSS. I can work with responsiveness and try to write code that's easy to read and maintain.",
      'about.p3': "Looking for opportunities to work on real projects and gain experience. Ready to help with layout — from a simple landing page to a small online store.",
      'about.fact1': 'Layout from Figma, Tilda, Adobe XD designs',
      'about.fact2': 'Responsive layout (mobile, tablet, desktop)',
      'about.fact3': 'English — read documentation and articles',
      'skills.label': '02',
      'skills.title': 'Skills',
      'skills.desc': 'What I know and what I constantly learn',
      'projects.label': '03',
      'projects.title': 'Projects',
      'projects.desc': 'My first work — just one so far, but it is my own',
      'projects.filter.all': 'All',
      'projects.filter.web': 'Web',
      'projects.filter.mobile': 'Mobile',
      'projects.filter.other': 'Other',
      'projects.first.desc': 'Landing page layout from Figma. Responsive, hover effects, clean CSS.',
      'experience.label': '04',
      'experience.title': 'Experience',
      'experience.desc': 'What I do',
      'experience.present': 'present',
      'experience.job1.title': 'Learning frontend development',
      'experience.job1.desc': 'HTML, CSS, JavaScript — write code every day and dive into details. Also studying at college to become a programmer.',
      'experience.job2.title': 'Started learning programming',
      'experience.job2.desc': 'First steps in IT. Started with Python, then moved to web development and realized it is for me.',
      'experience.edu': 'School',
      'experience.edu.desc': 'Basic computer science knowledge, first projects',
      'contact.label': '05',
      'contact.title': 'Contact',
      'contact.desc': 'Write to me — I will respond within a day',
      'contact.form.name': 'Name',
      'contact.form.email': 'Email',
      'contact.form.message': 'Message',
      'contact.form.nameError': 'Name must be at least 2 characters',
      'contact.form.emailError': 'Please enter a valid email',
      'contact.form.messageError': 'Message must be at least 10 characters',
      'contact.form.submit': 'Send',
      'contact.form.submitting': 'Sending…',
      'contact.form.submitted': 'Sent',
      'contact.info.text': "If you need a website layout from a design — write to me. I'll consider any project, from a simple landing page to something more serious.",
      'toast.success': 'Thank you! I will get back to you soon.',
      'logo': 'YK'
    }
  };

  const typewriterPhrases = {
    ru: ['Frontend Developer', 'React Enthusiast', 'Minimalism Lover'],
    en: ['Frontend Developer', 'React Enthusiast', 'Minimalism Lover']
  };

  /* ================================
     DOM HELPERS
  ================================ */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  /* ================================
     THEME TOGGLE
  ================================ */
  function initTheme() {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = saved || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);

    $('#themeToggle').addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  }

  /* ================================
     LANGUAGE TOGGLE
  ================================ */
  let currentLang = localStorage.getItem('lang') || 'ru';

  function applyTranslations(lang) {
    $$('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key] !== undefined) {
        el.textContent = translations[lang][key];
      }
    });
  }

  function initLanguage() {
    applyTranslations(currentLang);

    const langToggle = $('#langToggle');
    if (!langToggle) return;

    langToggle.addEventListener('click', () => {
      currentLang = currentLang === 'ru' ? 'en' : 'ru';
      localStorage.setItem('lang', currentLang);
      applyTranslations(currentLang);
    });
  }

  /* ================================
     TYPEWRITER EFFECT
  ================================ */
  function initTypewriter() {
    const el = $('#typewriter');
    if (!el) return;

    const phrases = typewriterPhrases[currentLang] || typewriterPhrases.ru;
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let pauseTimer = null;

    function type() {
      const current = phrases[phraseIndex];
      const speed = isDeleting ? 40 : 80;

      if (!isDeleting && charIndex <= current.length) {
        el.textContent = current.substring(0, charIndex);
        charIndex++;
        pauseTimer = setTimeout(type, speed);
      } else if (!isDeleting && charIndex > current.length) {
        isDeleting = true;
        pauseTimer = setTimeout(type, 2000);
      } else if (isDeleting && charIndex >= 0) {
        el.textContent = current.substring(0, charIndex);
        charIndex--;
        pauseTimer = setTimeout(type, speed);
      } else if (isDeleting && charIndex < 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        pauseTimer = setTimeout(type, 400);
      }
    }

    type();
  }

  /* ================================
     MOBILE MENU
  ================================ */
  function initMobileMenu() {
    const burger = $('#burgerBtn');
    const mobileMenu = $('#mobileMenu');
    if (!burger || !mobileMenu) return;

    let overlay = $('.mobile-menu-overlay');

    if (!overlay) {
      overlay = document.createElement('div');
      overlay.className = 'mobile-menu-overlay';
      document.body.appendChild(overlay);
    }

    function openMenu() {
      burger.classList.add('burger--open');
      burger.setAttribute('aria-expanded', 'true');
      mobileMenu.classList.add('mobile-menu--open');
      overlay.classList.add('mobile-menu-overlay--visible');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      burger.classList.remove('burger--open');
      burger.setAttribute('aria-expanded', 'false');
      mobileMenu.classList.remove('mobile-menu--open');
      overlay.classList.remove('mobile-menu-overlay--visible');
      document.body.style.overflow = '';
    }

    burger.addEventListener('click', () => {
      if (mobileMenu.classList.contains('mobile-menu--open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    overlay.addEventListener('click', closeMenu);

    $$('.mobile-menu__link').forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }

  /* ================================
     HEADER SCROLL EFFECT
  ================================ */
  function initHeaderScroll() {
    const header = $('#header');
    if (!header) return;

    const onScroll = () => {
      header.classList.toggle('header--scrolled', window.scrollY > 60);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ================================
     ACTIVE NAV LINK ON SCROLL
  ================================ */
  function initActiveNav() {
    const sections = $$('section[id]');
    const navLinks = $$('.header__nav-link');

    function updateActive() {
      const scrollPos = window.scrollY + window.innerHeight / 3;

      let current = '';
      sections.forEach(section => {
        if (scrollPos >= section.offsetTop) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        const href = link.getAttribute('href').slice(1);
        link.classList.toggle('active', href === current);
      });
    }

    window.addEventListener('scroll', updateActive, { passive: true });
    updateActive();
  }

  /* ================================
     SCROLL REVEAL
  ================================ */
  function initScrollReveal() {
    const elements = $$('.scroll-reveal');
    if (!elements.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = Array.from(elements).indexOf(el) % 4;
          setTimeout(() => {
            el.classList.add('scroll-reveal--visible');
          }, delay * 100);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    elements.forEach(el => observer.observe(el));
  }

  /* ================================
     SKILL BARS ANIMATION
  ================================ */
  function initSkillBars() {
    const cards = $$('.skill-card');
    if (!cards.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const card = entry.target;
          const bar = $('.skill-card__bar-fill', card);
          const targetWidth = bar ? bar.getAttribute('data-width') : 0;

          setTimeout(() => {
            if (bar) bar.style.width = targetWidth + '%';
            card.classList.add('skill-card--animated');
          }, 200);

          observer.unobserve(card);
        }
      });
    }, { threshold: 0.3 });

    cards.forEach(card => observer.observe(card));
  }

  /* ================================
     PROJECT FILTERING
  ================================ */
  function initProjectFilter() {
    const filters = $$('.filter-btn');
    const cards = $$('.project-card');
    if (!filters.length || !cards.length) return;

    filters.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');

        filters.forEach(f => f.classList.remove('filter-btn--active'));
        btn.classList.add('filter-btn--active');

        cards.forEach(card => {
          const category = card.getAttribute('data-category');
          const visible = filter === 'all' || category === filter;
          card.classList.toggle('hidden', !visible);
        });
      });
    });
  }

  /* ================================
     CONTACT FORM
  ================================ */
  function initContactForm() {
    const form = $('#contactForm');
    if (!form) return;

    const nameInput = $('#name');
    const emailInput = $('#email');
    const messageInput = $('#message');
    const submitBtn = $('#submitBtn');
    const btnText = submitBtn ? $('.btn__text', submitBtn) : null;

    function showError(input, errorId) {
      const group = input.closest('.form-group');
      if (group) group.classList.add('form-group--error');
      if (input) input.classList.add('form-input--error');
    }

    function clearError(input) {
      const group = input.closest('.form-group');
      if (group) group.classList.remove('form-group--error');
      if (input) input.classList.remove('form-input--error');
    }

    function validateEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    [nameInput, emailInput, messageInput].forEach(input => {
      if (!input) return;
      input.addEventListener('input', () => clearError(input));
    });

    form.addEventListener('submit', e => {
      e.preventDefault();

      let valid = true;

      if (!nameInput || nameInput.value.trim().length < 2) {
        showError(nameInput, 'nameError');
        valid = false;
      } else {
        clearError(nameInput);
      }

      if (!emailInput || !validateEmail(emailInput.value.trim())) {
        showError(emailInput, 'emailError');
        valid = false;
      } else {
        clearError(emailInput);
      }

      if (!messageInput || messageInput.value.trim().length < 10) {
        showError(messageInput, 'messageError');
        valid = false;
      } else {
        clearError(messageInput);
      }

      if (!valid) return;

      // Simulate sending
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.classList.add('btn--loading');
        if (btnText) btnText.textContent = translations[currentLang]['contact.form.submitting'];
      }

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.classList.remove('btn--loading');
          if (btnText) btnText.textContent = translations[currentLang]['contact.form.submitted'];
        }

        form.reset();
        showToast();

        setTimeout(() => {
          if (btnText) btnText.textContent = translations[currentLang]['contact.form.submit'];
        }, 3000);
      }, 1200);
    });
  }

  /* ================================
     TOAST
  ================================ */
  function showToast() {
    const toast = $('#toast');
    if (!toast) return;

    toast.classList.add('toast--visible');

    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => {
      toast.classList.remove('toast--visible');
    }, 4000);
  }

  function initToast() {
    const closeBtn = $('#toastClose');
    if (!closeBtn) return;

    closeBtn.addEventListener('click', () => {
      const toast = $('#toast');
      if (toast) toast.classList.remove('toast--visible');
    });
  }

  /* ================================
     SMOOTH SCROLL
  ================================ */
  function initSmoothScroll() {
    $$('a[href^="#"]').forEach(link => {
      link.addEventListener('click', e => {
        const href = link.getAttribute('href');
        if (href === '#') return;

        const target = $(href);
        if (!target) return;

        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    const scrollTopBtn = $('#scrollTop');
    if (scrollTopBtn) {
      scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  /* ================================
     RESUME DOWNLOAD (placeholder)
  ================================ */
  function initResumeDownload() {
    const btn = $('#downloadResume');
    if (!btn) return;

    btn.addEventListener('click', e => {
      e.preventDefault();
      showToast();
    });
  }

  /* ================================
     INIT ALL
  ================================ */
  function init() {
    initTheme();
    initLanguage();
    initTypewriter();
    initMobileMenu();
    initHeaderScroll();
    initActiveNav();
    initScrollReveal();
    initSkillBars();
    initProjectFilter();
    initContactForm();
    initToast();
    initSmoothScroll();
    initResumeDownload();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
