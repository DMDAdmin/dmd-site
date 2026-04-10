/**
 * ══════════════════════════════════════════════════════════════════
 *  DMD PARENTS GEORGIA — ФАЙЛ НОВОСТЕЙ
 *  news.js
 * 
 *  📌 КАК ДОБАВИТЬ НОВОСТЬ:
 *  1. Скопируйте блок { ... } ниже
 *  2. Вставьте его ПЕРВЫМ в массив NEWS (перед остальными)
 *  3. Заполните поля (объяснение каждого поля — ниже)
 *  4. Если есть фото — положите его в папку /images/news/
 *     и укажите путь в поле "image"
 *  5. Сохраните файл
 * 
 *  ПРИМЕР НОВОЙ НОВОСТИ:
 *  {
 *    id: "news-006",               // уникальный ID (увеличивайте число)
 *    date: "2026-04-10",           // дата в формате ГГГГ-ММ-ДД
 *    category: "event",            // категория (см. список ниже)
 *    image: "images/news/photo.jpg", // путь к фото (или "" если нет фото)
 *    emoji: "📢",                  // эмодзи (если нет фото)
 *    ka: {                         // текст на грузинском
 *      title: "სათაური",
 *      excerpt: "მოკლე აღწერა...",
 *      body: "სრული ტექსტი..."
 *    },
 *    en: {                         // текст на английском
 *      title: "Title",
 *      excerpt: "Short description...",
 *      body: "Full text..."
 *    },
 *    ru: {                         // текст на русском
 *      title: "Заголовок",
 *      excerpt: "Краткое описание...",
 *      body: "Полный текст..."
 *    }
 *  }
 * 
 *  КАТЕГОРИИ:
 *  "event"    — мероприятие / ღონისძიება
 *  "medical"  — медицина / მედიცინა
 *  "news"     — новость / სიახლე
 *  "media"    — СМИ / მედია
 *  "support"  — помощь / დახმარება
 * ══════════════════════════════════════════════════════════════════
 */

const NEWS = [

  /* ── ПРИМЕР 1 ─────────────────────────────────────────────── */
  {
    id: "news-001",
    date: "2026-04-01",
    category: "event",
    image: "",
    emoji: "🎗️",
    ka: {
      title: "DMD Georgia-ს შეხვედრა 2026",
      excerpt: "ამ წელს ჩვენ ჩავატარეთ ოჯახების პირველი გაერთიანებული შეხვედრა თბილისში.",
      body: "ამ წელს ჩვენ ჩავატარეთ ოჯახების პირველი გაერთიანებული შეხვედრა თბილისში. შეხვედრაზე დაესწრნენ 20-ზე მეტი ოჯახი, ექიმები და ორგანიზაციის წევრები. განვიხილეთ მიმდინარე კვლევები, ხელმისაწვდომი პრეპარატები და საქართველოში DMD-ის მართვის გამოწვევები."
    },
    en: {
      title: "DMD Georgia Family Meeting 2026",
      excerpt: "This year we held our first united family meeting in Tbilisi.",
      body: "This year we held our first united family meeting in Tbilisi. Over 20 families, doctors, and organization members attended. We discussed ongoing research, available treatments, and challenges in managing DMD in Georgia."
    },
    ru: {
      title: "Встреча семей DMD Georgia 2026",
      excerpt: "В этом году мы провели первую объединённую встречу семей в Тбилиси.",
      body: "В этом году мы провели первую объединённую встречу семей в Тбилиси. На встрече присутствовали более 20 семей, врачи и члены организации. Мы обсудили текущие исследования, доступные препараты и проблемы управления DMD в Грузии."
    }
  },

  /* ── ПРИМЕР 2 ─────────────────────────────────────────────── */
  {
    id: "news-002",
    date: "2026-03-15",
    category: "medical",
    image: "",
    emoji: "💊",
    ka: {
      title: "FDA-მ 2026 წელს PBGENE-DMD-ს კვლევის ნებართვა გასცა",
      excerpt: "Precision BioSciences-მა მიიღო FDA-ს ნებართვა გენური რედაქტირების პირველი კვლევისთვის.",
      body: "Precision BioSciences-მა მიიღო FDA-ს ნებართვა (IND) 2026 წლის თებერვალში. ეს პირველი in vivo გენური რედაქტირებაა DMD-ისთვის ARCUS ტექნოლოგიის გამოყენებით. PBGENE-DMD ეგზონებს 45–55-ს მიმართავს, რაც DMD-ის პაციენტების 60%-მდე მოიცავს."
    },
    en: {
      title: "FDA clears PBGENE-DMD trial in 2026",
      excerpt: "Precision BioSciences received FDA clearance for the first gene editing trial in DMD.",
      body: "Precision BioSciences received an FDA Study May Proceed (IND) clearance in February 2026. This is the first in vivo gene editing approach for DMD using ARCUS technology. PBGENE-DMD targets exons 45–55, covering up to 60% of all DMD patients."
    },
    ru: {
      title: "FDA одобрил испытание PBGENE-DMD в 2026 году",
      excerpt: "Precision BioSciences получила разрешение FDA на первое генное редактирование при DMD.",
      body: "Precision BioSciences получила разрешение FDA (IND) в феврале 2026 года. Это первый подход in vivo генного редактирования при DMD с использованием технологии ARCUS. PBGENE-DMD нацелен на экзоны 45–55, охватывая до 60% всех пациентов с DMD."
    }
  },

  /* ── ПРИМЕР 3 ─────────────────────────────────────────────── */
  {
    id: "news-003",
    date: "2026-02-20",
    category: "support",
    image: "",
    emoji: "🤝",
    ka: {
      title: "DMD Georgia-ს გახსნა — ოჯახებისთვის ახალი სერვისები",
      excerpt: "2025 წლის იანვარში დარეგისტრირებული ორგანიზაცია იწყებს ახალი სერვისების შეთავაზებას.",
      body: "2025 წლის 27 იანვარს დარეგისტრირებული DMD Parents Georgia არაკომერციული ორგანიზაცია იწყებს ოჯახებისთვის ახალი სერვისების შეთავაზებას: კონსულტაციები ექიმებთან, იურიდიული დახმარება სამედიცინო დაზღვევის საკითხებში, ფსიქოლოგიური მხარდაჭერა."
    },
    en: {
      title: "DMD Georgia launches new family services",
      excerpt: "The organization registered in January 2025 begins offering new services to families.",
      body: "DMD Parents Georgia, a non-commercial legal entity registered on January 27, 2025, begins offering new services to families: consultations with doctors, legal support for medical insurance issues, and psychological support."
    },
    ru: {
      title: "DMD Georgia запускает новые услуги для семей",
      excerpt: "Организация, зарегистрированная в январе 2025 года, начинает предлагать новые услуги.",
      body: "DMD Parents Georgia, некоммерческое юридическое лицо, зарегистрированное 27 января 2025 года, начинает предлагать новые услуги для семей: консультации с врачами, юридическая поддержка по вопросам медицинского страхования, психологическая поддержка."
    }
  }

  /* ── СЮДА ДОБАВЛЯЙТЕ НОВЫЕ НОВОСТИ (вставляйте ПЕРЕД этой строкой) ── */

];

/* ════════════════════════════════════
   ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
   (не изменяйте этот раздел)
════════════════════════════════════ */

const NEWS_CATEGORIES = {
  all:     { ka: "ყველა",       en: "All",     ru: "Все" },
  event:   { ka: "ღონისძიება", en: "Events",  ru: "События" },
  medical: { ka: "მედიცინა",   en: "Medical", ru: "Медицина" },
  news:    { ka: "სიახლეები",  en: "News",    ru: "Новости" },
  media:   { ka: "მედია",      en: "Media",   ru: "СМИ" },
  support: { ka: "დახმარება",  en: "Support", ru: "Поддержка" },
};

function formatDate(dateStr, lang) {
  const d = new Date(dateStr);
  const opts = { year: 'numeric', month: 'long', day: 'numeric' };
  const locale = { ka: 'ka-GE', en: 'en-US', ru: 'ru-RU' }[lang] || 'en-US';
  return d.toLocaleDateString(locale, opts);
}

function getNewsLang() {
  return localStorage.getItem('dmd_lang') || 'ka';
}
