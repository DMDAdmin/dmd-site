/**
 * ══════════════════════════════════════════════════════════════════
 *  DMD PARENTS GEORGIA — ФАЙЛ НОВОСТЕЙ
 *  news.js
 *
 *  📌 КАК ДОБАВИТЬ НОВОСТЬ — скопируйте блок и вставьте ПЕРВЫМ
 *  в массив NEWS (сразу после строки "const NEWS = [")
 *
 *  {
 *    id: "news-007",        ← уникальный номер (увеличивайте)
 *    date: "2026-04-10",    ← дата ГГГГ-ММ-ДД
 *    category: "event",     ← event / medical / news / media / support
 *    image: "",             ← "images/news/фото.jpg" или ""
 *    youtube: "",           ← ID видео YouTube или ""
 *    emoji: "📢",           ← эмодзи если нет фото и видео
 *    ka: { title:"...", excerpt:"...", body:"..." },
 *    en: { title:"...", excerpt:"...", body:"..." },
 *    ru: { title:"...", excerpt:"...", body:"..." },
 *  },
 *
 *  КАК НАЙТИ YouTube ID:
 *  https://youtu.be/d93uqdilSS4  →  ID = d93uqdilSS4
 *  https://youtube.com/watch?v=d93uqdilSS4  →  ID = d93uqdilSS4
 * ══════════════════════════════════════════════════════════════════
 */

const NEWS = [

  /* ══ НОВЫЕ НОВОСТИ ВСТАВЛЯЙТЕ ЗДЕСЬ — САМАЯ СВЕЖАЯ ПЕРВОЙ ══ */

  {
    id: "news-004",
    date: "2026-04-10",
    category: "media",
    image: "",
    youtube: "d93uqdilSS4",
    emoji: "🎙️",
    ka: {
      title: "დოქტორ დეტერმინისტი — ეპიზოდი 18: თაკო გოგოლაძე",
      excerpt: "პოდკასტის 18-ე ეპიზოდი ეთმობა დუშენის კუნთოვანი დისტროფიის მქონე პაციენტის დედას — თაკო გოგოლაძეს.",
      body: "დოქტორ დეტერმინისტის პოდკასტის 18-ე ეპიზოდი ეთმობა პაციენტის დედას. თაკო გოგოლაძე საუბრობს დუშენის კუნთოვანი დისტროფიის მქონე პაციენტის ცხოვრებაზე. საუბრობს მკურნალობაზე, რომელიც მისთვის ხელმისაწვდომი არ არის. საუბრობს დაავადების პროგრესირების გარდაუვალობაზე. მისი მოსმენისას გიჩნდება კითხვა — სად არის და სად უნდა იყოს სახელმწიფო?"
    },
    en: {
      title: "Dr. Determinist Podcast — Episode 18: Tako Gogoladze",
      excerpt: "Episode 18 features Tako Gogoladze, mother of a child with Duchenne Muscular Dystrophy.",
      body: "Episode 18 of the Dr. Determinist podcast is dedicated to a patient's mother. Tako Gogoladze speaks about life with a child diagnosed with Duchenne Muscular Dystrophy — about treatments that remain out of reach, and about the inevitable progression of the disease. Listening to her story, one question arises: where is the state, and where should it be?"
    },
    ru: {
      title: "Подкаст «Доктор Детерминист» — Эпизод 18: Тако Гоголадзе",
      excerpt: "18-й эпизод посвящён маме ребёнка с мышечной дистрофией Дюшенна — Тако Гоголадзе.",
      body: "18-й эпизод подкаста «Доктор Детерминист» посвящён маме пациента. Тако Гоголадзе рассказывает о жизни с ребёнком, у которого диагностирована мышечная дистрофия Дюшенна. Она говорит о лечении, которое ему недоступно, и о неизбежном прогрессировании болезни. Слушая её, невольно задаёшься вопросом — где государство и где оно должно быть?"
    }
  },

  {
    id: "news-001",
    date: "2026-04-01",
    category: "event",
    image: "",
    youtube: "",
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

  {
    id: "news-002",
    date: "2026-03-15",
    category: "medical",
    image: "",
    youtube: "",
    emoji: "💊",
    ka: {
      title: "FDA-მ 2026 წელს PBGENE-DMD-ს კვლევის ნებართვა გასცა",
      excerpt: "Precision BioSciences-მა მიიღო FDA-ს ნებართვა გენური რედაქტირების პირველი კვლევისთვის.",
      body: "Precision BioSciences-მა მიიღო FDA-ს ნებართვა (IND) 2026 წლის თებერვალში. ეს პირველი in vivo გენური რედაქტირებაა DMD-ისთვის ARCUS ტექნოლოგიის გამოყენებით. PBGENE-DMD ეგზონებს 45–55-ს მიმართავს, რაც DMD-ის პაციენტების 60%-მდე მოიცავს."
    },
    en: {
      title: "FDA clears PBGENE-DMD trial in 2026",
      excerpt: "Precision BioSciences received FDA clearance for the first gene editing trial in DMD.",
      body: "Precision BioSciences received FDA clearance (IND) in February 2026. This is the first in vivo gene editing approach for DMD using ARCUS technology. PBGENE-DMD targets exons 45–55, covering up to 60% of all DMD patients."
    },
    ru: {
      title: "FDA одобрил испытание PBGENE-DMD в 2026 году",
      excerpt: "Precision BioSciences получила разрешение FDA на первое генное редактирование при DMD.",
      body: "Precision BioSciences получила разрешение FDA (IND) в феврале 2026 года. Это первый подход in vivo генного редактирования при DMD с использованием технологии ARCUS. PBGENE-DMD нацелен на экзоны 45–55, охватывая до 60% всех пациентов с DMD."
    }
  },

  {
    id: "news-003",
    date: "2026-02-20",
    category: "support",
    image: "",
    youtube: "",
    emoji: "🤝",
    ka: {
      title: "DMD Georgia — ახალი სერვისები ოჯახებისთვის",
      excerpt: "2025 წლის იანვარში დარეგისტრირებული ორგანიზაცია იწყებს ახალი სერვისების შეთავაზებას.",
      body: "2025 წლის 27 იანვარს დარეგისტრირებული DMD Parents Georgia არაკომერციული ორგანიზაცია იწყებს ოჯახებისთვის ახალი სერვისების შეთავაზებას: კონსულტაციები ექიმებთან, იურიდიული დახმარება სამედიცინო დაზღვევის საკითხებში, ფსიქოლოგიური მხარდაჭერა."
    },
    en: {
      title: "DMD Georgia launches new family services",
      excerpt: "The organization registered in January 2025 begins offering new services to families.",
      body: "DMD Parents Georgia, registered on January 27, 2025, begins offering new services: consultations with doctors, legal support for medical insurance issues, and psychological support."
    },
    ru: {
      title: "DMD Georgia запускает новые услуги для семей",
      excerpt: "Организация, зарегистрированная в январе 2025 года, начинает предлагать новые услуги.",
      body: "DMD Parents Georgia, некоммерческое юридическое лицо, зарегистрированное 27 января 2025 года, начинает предлагать новые услуги для семей: консультации с врачами, юридическая поддержка по вопросам медицинского страхования, психологическая поддержка."
    }
  }

  /* ══ КОНЕЦ МАССИВА — не удаляйте эту строку ══ */

];

/* ════════════════════════════════════════════════════
   СЛУЖЕБНЫЕ ФУНКЦИИ — НЕ ИЗМЕНЯЙТЕ
════════════════════════════════════════════════════ */

const NEWS_CATEGORIES = {
  all:     { ka: "ყველა",        en: "All",     ru: "Все" },
  event:   { ka: "ღონისძიება",  en: "Events",  ru: "События" },
  medical: { ka: "მედიცინა",    en: "Medical", ru: "Медицина" },
  news:    { ka: "სიახლეები",   en: "News",    ru: "Новости" },
  media:   { ka: "მედია",       en: "Media",   ru: "СМИ" },
  support: { ka: "დახმარება",   en: "Support", ru: "Поддержка" },
};

function formatDate(dateStr, lang) {
  const d = new Date(dateStr + 'T00:00:00');
  const opts = { year: 'numeric', month: 'long', day: 'numeric' };
  const locale = { ka: 'ka-GE', en: 'en-US', ru: 'ru-RU' }[lang] || 'en-US';
  try { return d.toLocaleDateString(locale, opts); }
  catch(e) { return dateStr; }
}

function getNewsLang() {
  return localStorage.getItem('dmd_lang') || 'ka';
}

