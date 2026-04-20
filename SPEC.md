# SPEC.md — Личный сайт Юрия

## 1. Концепция и видение

Минималистичный сайт-визитка с японской эстетикой ваби-саби — красота простоты, несовершенства и недолговечности. Референс: линкбилд-подобная структура, но серьёзнее, с акцентом на типографику и пространство. Ощущение — как страница из качественного журнала о дизайне: много воздуха, точные шрифты, спокойные анимации. Никакого визуального шума.

## 2. Дизайн-система

### Эстетика
- Направление: ваби-саби + швейцарский минимализм
- Много негативного пространства, асимметричная сетка в отдельных секциях
- Референсы: monographic.co, rauno.me

### Цветовая палитра

**Тёмная тема:**
- `--bg`: #0d0d0d (глубокий чёрный)
- `--bg-secondary`: #141414
- `--bg-card`: #1a1a1a
- `--text-primary`: #e8e4df (тёплый белый)
- `--text-secondary`: #7a7672
- `--accent`: #c8a97e (песочно-золотой)
- `--accent-hover`: #d4bc96
- `--border`: #2a2a2a

**Светлая тема:**
- `--bg`: #f5f2ed (тёплый слоновая кость)
- `--bg-secondary`: #ebe7e0
- `--bg-card`: #e8e4df
- `--text-primary`: #1a1918
- `--text-secondary`: #6b6560
- `--accent`: #b8956a
- `--accent-hover`: #a68355
- `--border`: #d4cfc7

### Типографика
- Заголовки: `Playfair Display` (serif с характером, Google Fonts)
- Текст: `Inter` (читаемый, нейтральный, Google Fonts)
- Моноширинный акцент: `JetBrains Mono` (для кода и эффекта печатной машинки)
- Размеры: 14/16/18/24/32/48/64px по шкале
- Межстрочный: 1.6 для текста, 1.2 для заголовков

### Пространственная система
- Базовый модуль: 8px
- Секции: 120px padding вертикально (desktop), 64px (mobile)
- Контейнер: max-width 1200px, padding 24px
- Карточки: border-radius 2px (почти без скругления — ваби-саби)

### Философия анимаций
- Всё медленное и плавное: 400–600ms ease-out
- Появление элементов: fade + translate-y 24px → 0
- Hover: мягкое изменение цвета, никаких резких трансформаций
- Скелетон не нужен — первый экран загружается без JS
- Предпочтение: CSS transitions, JS только для scroll-triggered

### Визуальные ассеты
- Иконки: Lucide Icons (CDN, SVG inline)
- Аватар: placeholder через ui-avatars.com или локальный /images/avatar.webp
- Проекты: placeholder-изображения 600×400px
- Декор: тонкие линии-разделители, редкие акценты песочным цветом

## 3. Структура и лейаут

### Навигация (header)
- Логотип: "Y" или "Юрий" — слева
- Пункты: Обо мне / Навыки / Проекты / Опыт / Контакты — справа (desktop)
- Бургер: три линии → X (mobile, <768px)
- При скролле: backdrop-blur + border-bottom
- Язык: RU | EN переключатель (верхний правый угол)

### Секция Hero (#hero)
- ��евая часть (60%): имя h1, должность, текст печатной машинки
- Правая часть (40%): аватар в круге с песочной обводкой
- Под заголовком: кнопки "Скачать резюме" (primary) + "Связаться" (ghost)
- Фон: тонкий градиент или паттерн из тонких линий

### Секция Обо мне (#about)
- Двухколоночный лейаут: текст слева (60%), фото справа (40%)
- Текст: 2-3 абзаца, пара фактов в виде списка с иконками
- Фото: стилизация под японскую эстетику (рамка, фильтр)

### Секция Навыки (#skills)
- Заголовок + подзаголовок
- Сетка 3 колонки (desktop), 2 (tablet), 1 (mobile)
- Каждый навык: иконка + название + прогресс-бар (анимированный)
- Технологии: HTML, CSS, JavaScript, React, Git, Figma, TypeScript, Node.js

### Секция Проекты (#projects)
- Фильтры: Все / Веб / Мобильные / Другое
- Сетка 2 колонки (desktop), 1 (mobile)
- Карточки: превью-изображение + название + описание + теги
- Hover: overlay с кнопками "GitHub" и "Demo"
- Минимум 4 проекта (2 веб, 1 мобильный, 1 другое)

### Секция Опыт (#experience)
- Вертикальный таймлайн (центральная линия)
- Левая сторона: период, правая — описание
- Чередование сторон на desktop, всё слева на mobile
- Элементы: место, должность, годы, краткое описание

### Секция Книги (#books) — по желанию
- Компактная секция: 3-4 книги с обложками
- Минималистичные карточки: обложка + название + автор

### Секция Контакты (#contact)
- Двухколоночный: форма слева, контакты/соцсети справа
- Поля: Имя, Email, Сообщение (textarea)
- Кнопка отправки с состояниями загрузки и успеха
- Соцсети: GitHub, Telegram, LinkedIn — иконки + текст

### Footer
- Копирайт, год, краткие соц-ссылки
- Кнопка "наверх"

## 4. Функции и взаимодействия

### Навигация
- Плавный скролл: `scroll-behavior: smooth` + JS для anchor fallback
- Активный пункт меню: подчёркивание песочным цветом при скролле
- Бургер: анимация линий → X, меню выезжает справа (slide-in)
- Закрытие меню: по клику на пункт, по клику вне

### Hero — печатная машинка
- Массив фраз: "Frontend Developer", "React Enthusiast", "Minimalism Lover"
- Эффект: печать вперёд, пауза, удаление, следующая фраза
- Курсор: мерцающий `|` после текста
- Скорость: 80ms печать, 2000ms пауза, 40ms удаление

### Прогресс-бары навыков
- IntersectionObserver: когда секция в viewport → запуск анимации
- Ширина от 0 до значения (%): 1200ms ease-out
- Число % появляется после завершения анимации

### Карточки проектов
- Hover: overlay opacity 0 → 1 (300ms), scale изображения 1 → 1.05
- Фильтр: JS-фильтрация, fade out/fade in при переключении
- Анимация: `opacity 0 → 1, translateY 16px → 0`

### Форма контактов
- Валидация: имя ≥2 символа, email по regex, сообщение ≥10 символов
- Ошибки: красная граница + текст под полем
- Submit: кнопка меняет текст → "Отправка..." → "Отправлено ✓"
- После успеха: форма очищается, показывается toast 3 секунды

### Темовая переключатель
- Иконка: sun/moon
- Transition: `transition: background 400ms, color 400ms` на всём сайте
- Сохранение в localStorage
- При первом визите: проверка `prefers-color-scheme`

### Языковой переключатель
- RU / EN
- Все тексты в data-атрибутах или JS-объекте
- Переключение без перезагрузки
- Сохранение в localStorage

## 5. Компоненты

### Button Primary
- Default: bg accent, text dark, border-radius 2px, padding 12px 28px
- Hover: bg accent-hover, subtle shadow
- Active: scale 0.98
- Disabled: opacity 0.4, cursor not-allowed
- Loading: spinner replacing text

### Button Ghost
- Default: border 1px solid border-color, text text-primary, bg transparent
- Hover: border accent, text accent
- Active/Disabled/Loading: аналогично primary

### Input / Textarea
- Default: bg bg-secondary, border border-color, border-radius 2px
- Focus: border accent, outline none
- Error: border red, helper text red
- Placeholder: text-secondary, italic

### Card Project
- bg bg-card, border border-color, border-radius 2px
- Hover: border accent, shadow
- States: default, hovered (overlay visible)

### Navigation Link
- Default: text-secondary
- Hover: text-primary
- Active: text accent, underline accent

### Badge / Tag
- Small: padding 4px 10px, font-size 12px, border-radius 99px
- Цвета: нейтральный (border), accent (filled)

### Toast Notification
- Fixed bottom-right
- bg bg-card, border-left accent 4px
- Auto-dismiss 3 секунды
- Close button

## 6. Технический подход

### Архитектура файлов
```
/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── images/
│   ├── avatar.webp
│   └── projects/
└── README.md
```

### HTML
- Семантические теги: header, nav, main, section, article, footer
- Идентификаторы: id для anchor-секций
- ARIA: aria-label, aria-current, role="navigation"
- Язык документа: lang="ru", data-i18n на всех переводимых элементах

### CSS
- Custom Properties для тёмной/светлой темы
- Mobile-first: базовые стили → @media (min-width: 768px) → (min-width: 1024px)
- Никаких @import Google Fonts в CSS — preconnect + link в head
- CSS-переменные переключаются через data-theme атрибут на <html>

### JavaScript (ES6+, без сборки)
- Модульность: IIFE для изоляции
- IntersectionObserver для scroll-анимаций
- Event delegation где возможно
- localStorage для theme + language

### Изображения
- Формат: WebP где поддерживается, fallback JPEG
- Адаптивность: `loading="lazy"`, `srcset` для аватара
- Размеры: аватар 300×300, превью проектов 600×400

### SEO и мета
- Title, description, og:image, og:title
- Favicon: SVG "AG" в accent цвете
- canonical URL

### Lighthouse targets
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+
