import {
  SUPPORTED_LANGUAGES,
  getStoredLanguage,
  isOpenAt,
  nextLanguage,
  normalizeLanguage,
  selectLanguage
} from './site-config.js';

export const translations = {
  de: {
    'home.meta.title': 'Haus des Kiosks – Hallo. Servus. Merhaba.',
    'home.meta.description': 'Haus des Kiosks in München: DHL Paketshop, kalte Getränke, Snacks, Tabak und Vapes. Täglich 8–22 Uhr in der Ungsteiner Str. 3.',
    'home.meta.ogDescription': 'Klein der Laden. Draußen groß. Täglich 8–22 Uhr in Giesing/Ramersdorf.',
    'skip': 'Zum Inhalt springen',
    'brand.home': 'Haus des Kiosks Startseite',
    'nav.aria': 'Hauptnavigation',
    'nav.offer': 'Angebot',
    'nav.outside': 'Draußen',
    'nav.location': 'Hierher',
    'language.switch': 'Sprache wechseln',
    'menu.open': 'Menü öffnen',
    'menu.close': 'Menü schließen',
    'ticker.drinks': 'KALTE GETRÄNKE',
    'ticker.tobacco': 'TABAK',
    'ticker.hours': '8–22 UHR',
    'status.open': 'Jetzt offen',
    'status.closed': 'Täglich 8–22 Uhr',
    'hero.punch': 'Klein der Laden. Draußen groß.',
    'hero.text': 'Kalte Dose, Zigaretten, Vape, Snack oder DHL-Paket. Rein, raus – und vor der Tür kurz jemanden treffen.',
    'hero.sticker': 'ECHTER KIOSK.<br>KEIN KONZEPT.',
    'hero.caption': 'Der Laden. So wie er ist.',
    'quick.aria': 'Schnelles Angebot',
    'quick.drinks': 'Getränke',
    'quick.snacks': 'Snacks',
    'quick.tobacco': 'Tabak',
    'action.route': 'Route starten',
    'action.call': 'Anrufen',
    'sound.label': 'Ton',
    'sound.on': 'Ton einschalten',
    'sound.off': 'Ton ausschalten',
    'offer.label': 'ANGEBOT',
    'offer.title': 'Einmal alles.<br><span>Schnell.</span>',
    'offer.intro': 'Fürs Paket, den Heimweg, die Pause oder fünf Minuten vor Ladenschluss.',
    'offer.dhl': 'Pakete abgeben, abholen und versenden.',
    'offer.drinks.title': 'Kalte Getränke',
    'offer.drinks.text': 'Dosen, Softdrinks, Bier und mehr – direkt aus dem Kühlschrank.',
    'offer.snacks.title': 'Snacks & Süßes',
    'offer.snacks.text': 'Salzig, süß, kalt. Für jetzt und unterwegs.',
    'offer.tobacco.title': 'Tabak & Zigaretten',
    'offer.tobacco.text': 'Die gängigen Sorten. Verkauf nur an Erwachsene.',
    'offer.vapes': 'Verschiedene Sorten. Verkauf nur an Erwachsene.',
    'offer.more.title': 'Und noch mehr',
    'offer.more.text': 'Kaffee to-go, Kopieren, Drucken, Western Union, Schreibwaren und Kleinkram.',
    'offer.age': 'Tabak, Vapes und Alkohol gibt’s natürlich erst ab dem gesetzlichen Mindestalter.',
    'outside.label': 'VOR DER TÜR',
    'outside.title': 'Drinnen drei Schritte.<br><span>Draußen die ganze Straße.</span>',
    'outside.lead': 'Hier kommt niemand zum Loungen. Dafür ist gar kein Platz.',
    'outside.text': 'Man holt eine kalte Dose, Zigaretten, einen Snack oder ein Paket. Vor der Tür steht schon jemand aus der Nachbarschaft. Kurz Hallo sagen. Zwei Minuten reden. Dann weiter.',
    'outside.noLounge': 'KEINE SITZPLÄTZE. KEIN CAFÉ. EINFACH KIOSK.',
    'outside.caption': 'Vor der Tür, irgendwo zwischen Paket und Heimweg.',
    'outside.alt': 'Illustration einer gemischten Nachbarschaft vor einem kleinen Kiosk',
    'visit.label': 'HIERHER',
    'visit.title': 'Du weißt, was du brauchst.<br><span>Wir sind da.</span>',
    'visit.daily': 'Jeden Tag',
    'visit.sunday': 'Auch sonntags.',
    'visit.address': 'Adresse',
    'visit.phone': 'Telefon',
    'map.title': 'Karte: Haus des Kiosks, Ungsteiner Str. 3, München',
    'map.open': 'In Maps öffnen ↗',
    'social.text': 'Neues aus dem Laden. Direkt aufs Handy.',
    'footer.claim': 'Klein der Laden. Draußen groß.',
    'footer.imprint': 'Impressum',
    'footer.privacy': 'Datenschutz',
    'legal.label': 'Rechtliches',
    'back.home': '← Zur Startseite',
    'imprint.meta.title': 'Impressum – Haus des Kiosks',
    'imprint.title': 'Impressum',
    'imprint.legalBasis': 'Angaben gemäß § 5 TMG',
    'imprint.contact': 'Kontakt',
    'imprint.responsible': 'Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV',
    'imprint.check': 'Vor Veröffentlichung prüfen',
    'imprint.checkText': 'Bitte Umsatzsteuer-ID (falls vorhanden) sowie ggf. Gewerbeanmeldung/zuständige Aufsichtsbehörde ergänzen, sofern gesetzlich erforderlich.',
    'privacy.meta.title': 'Datenschutz – Haus des Kiosks',
    'privacy.title': 'Datenschutz',
    'privacy.controller': 'Verantwortlich für die Datenverarbeitung auf dieser Website ist Zekeriya Karatas, Haus des Kiosks, Ungsteiner Str. 3, 81539 München.',
    'privacy.static': 'Diese Website ist statisch und speichert selbst keine Cookies und betreibt kein eigenes Tracking. Beim Aufruf verarbeitet der Hosting-Anbieter GitHub Pages (GitHub Inc.) technisch notwendige Zugriffsdaten (z. B. IP-Adresse) zur Auslieferung der Seite; Details siehe die Datenschutzhinweise von GitHub.',
    'privacy.map': 'Auf der Startseite ist eine Karte von OpenStreetMap eingebunden. Beim Laden der Karte wird eine Verbindung zu Servern der OpenStreetMap Foundation aufgebaut, wobei deine IP-Adresse übertragen werden kann.',
    'privacy.social': 'Verlinkungen zu unseren Profilen bei Instagram (Meta Platforms Ireland Ltd.) und TikTok (TikTok Technology Limited, Irland) führen auf die jeweilige Plattform. Erst mit dem Klick auf einen solchen Link verlässt du diese Seite; es werden dabei keine Daten übermittelt, solange du den Link nicht anklickst.',
    'privacy.contact': 'Wenn du uns per E-Mail oder Telefon kontaktierst, werden deine Angaben zur Bearbeitung der Anfrage verarbeitet und nicht ohne deine Einwilligung weitergegeben.',
    'privacy.rights': 'Du hast das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung deiner personenbezogenen Daten sowie ein Beschwerderecht bei der zuständigen Aufsichtsbehörde.',
    'notFound.meta.title': 'Nicht gefunden – Haus des Kiosks',
    'notFound.title': 'Hier gibt’s nichts zu kaufen.',
    'notFound.text': 'Die gesuchte Seite existiert nicht. Aber der Kiosk ist täglich von 8 bis 22 Uhr geöffnet.',
    'notFound.back': 'Zur Startseite'
  },
  tr: {
    'home.meta.title': 'Haus des Kiosks – Hallo. Servus. Merhaba.',
    'home.meta.description': 'Münih’te Haus des Kiosks: DHL Paketshop, soğuk içecekler, atıştırmalıklar, tütün ve vape. Ungsteiner Str. 3’te her gün 08–22.',
    'home.meta.ogDescription': 'Dükkan küçük. Dışarısı büyük. Giesing/Ramersdorf’ta her gün 08–22.',
    'skip': 'İçeriğe geç',
    'brand.home': 'Haus des Kiosks ana sayfa',
    'nav.aria': 'Ana menü',
    'nav.offer': 'Ürünler',
    'nav.outside': 'Kapının önü',
    'nav.location': 'Yol tarifi',
    'language.switch': 'Dili değiştir',
    'menu.open': 'Menüyü aç',
    'menu.close': 'Menüyü kapat',
    'ticker.drinks': 'SOĞUK İÇECEKLER',
    'ticker.tobacco': 'TÜTÜN',
    'ticker.hours': '08–22',
    'status.open': 'Şimdi açık',
    'status.closed': 'Her gün 08–22',
    'hero.punch': 'Dükkan küçük. Dışarısı büyük.',
    'hero.text': 'Soğuk içecek, sigara, vape, atıştırmalık ya da DHL paketi. Gir, çık – kapının önünde tanıdık biriyle iki laf et.',
    'hero.sticker': 'GERÇEK BÜFE.<br>KONSEPT DEĞİL.',
    'hero.caption': 'Dükkan. Olduğu gibi.',
    'quick.aria': 'Kısa ürün özeti',
    'quick.drinks': 'İçecek',
    'quick.snacks': 'Atıştırmalık',
    'quick.tobacco': 'Tütün',
    'action.route': 'Yol tarifi',
    'action.call': 'Ara',
    'sound.label': 'Ses',
    'sound.on': 'Sesi aç',
    'sound.off': 'Sesi kapat',
    'offer.label': 'ÜRÜNLER',
    'offer.title': 'Ne lazımsa var.<br><span>Hemen.</span>',
    'offer.intro': 'Paket için, eve giderken, molada ya da kapanışa beş kala.',
    'offer.dhl': 'Paket gönder, teslim et veya teslim al.',
    'offer.drinks.title': 'Soğuk içecekler',
    'offer.drinks.text': 'Kutu içecekler, meşrubat, bira ve daha fazlası – dolaptan buz gibi.',
    'offer.snacks.title': 'Atıştırmalık & tatlı',
    'offer.snacks.text': 'Tuzlu, tatlı, soğuk. Şimdi veya yol için.',
    'offer.tobacco.title': 'Tütün & sigara',
    'offer.tobacco.text': 'Bilinen çeşitler. Yalnızca yetişkinlere satış.',
    'offer.vapes': 'Farklı çeşitler. Yalnızca yetişkinlere satış.',
    'offer.more.title': 'Dahası da var',
    'offer.more.text': 'Paket kahve, fotokopi, çıktı, Western Union, kırtasiye ve ufak tefek ihtiyaçlar.',
    'offer.age': 'Tütün, vape ve alkollü içecekler yalnızca yasal yaş sınırının üzerindekilere satılır.',
    'outside.label': 'KAPININ ÖNÜ',
    'outside.title': 'İçerisi üç adım.<br><span>Dışarısı bütün mahalle.</span>',
    'outside.lead': 'Buraya lounge keyfi için gelinmez. Zaten yer de yok.',
    'outside.text': 'Soğuk bir içecek, sigara, atıştırmalık ya da paket alırsın. Kapının önünde mahalleden biri çoktan vardır. Kısa bir selam. İki dakika sohbet. Sonra yola devam.',
    'outside.noLounge': 'OTURACAK YER YOK. KAFE DEĞİL. BÜFE İŞTE.',
    'outside.caption': 'Kapının önünde, paket ile eve dönüş arasında.',
    'outside.alt': 'Küçük bir büfenin önündeki karışık mahalleyi gösteren illüstrasyon',
    'visit.label': 'BURAYA GEL',
    'visit.title': 'Ne istediğini biliyorsun.<br><span>Biz buradayız.</span>',
    'visit.daily': 'Her gün',
    'visit.sunday': 'Pazar dahil.',
    'visit.address': 'Adres',
    'visit.phone': 'Telefon',
    'map.title': 'Harita: Haus des Kiosks, Ungsteiner Str. 3, Münih',
    'map.open': 'Haritada aç ↗',
    'social.text': 'Dükkandan yenilikler. Doğrudan telefonunda.',
    'footer.claim': 'Dükkan küçük. Dışarısı büyük.',
    'footer.imprint': 'Künye',
    'footer.privacy': 'Gizlilik',
    'legal.label': 'Yasal bilgiler',
    'back.home': '← Ana sayfaya dön',
    'imprint.meta.title': 'Künye – Haus des Kiosks',
    'imprint.title': 'Künye',
    'imprint.legalBasis': 'Alman TMG § 5 uyarınca bilgiler',
    'imprint.contact': 'İletişim',
    'imprint.responsible': 'MStV § 18 fıkra 2 uyarınca içerikten sorumlu kişi',
    'imprint.check': 'Yayınlamadan önce kontrol',
    'imprint.checkText': 'Yasal olarak gerekliyse KDV kimlik numarası (mevcutsa), işletme kaydı ve yetkili denetim makamı eklenmelidir.',
    'privacy.meta.title': 'Gizlilik – Haus des Kiosks',
    'privacy.title': 'Gizlilik',
    'privacy.controller': 'Bu web sitesindeki veri işlemeden Zekeriya Karatas, Haus des Kiosks, Ungsteiner Str. 3, 81539 Münih sorumludur.',
    'privacy.static': 'Bu web sitesi statiktir; kendi çerezlerini kaydetmez ve kendi takip sistemini kullanmaz. Sayfa açıldığında barındırma sağlayıcısı GitHub Pages (GitHub Inc.), sayfayı sunmak için teknik olarak gerekli erişim verilerini (ör. IP adresi) işler. Ayrıntılar GitHub’ın gizlilik bildiriminde yer alır.',
    'privacy.map': 'Ana sayfada OpenStreetMap haritası gömülüdür. Harita yüklenirken OpenStreetMap Foundation sunucularına bağlantı kurulur ve IP adresiniz aktarılabilir.',
    'privacy.social': 'Instagram (Meta Platforms Ireland Ltd.) ve TikTok (TikTok Technology Limited, İrlanda) profillerimize verilen bağlantılar ilgili platforma yönlendirir. Bu sayfadan yalnızca bağlantıya tıkladığınızda ayrılırsınız; tıklamadığınız sürece bu yolla veri aktarılmaz.',
    'privacy.contact': 'Bize e-posta veya telefonla ulaştığınızda bilgileriniz talebinizi işlemek için kullanılır ve izniniz olmadan başkalarıyla paylaşılmaz.',
    'privacy.rights': 'Kişisel verileriniz hakkında bilgi alma, düzeltme, silme ve işlemeyi kısıtlama haklarına ve yetkili denetim makamına şikâyet hakkına sahipsiniz.',
    'notFound.meta.title': 'Sayfa bulunamadı – Haus des Kiosks',
    'notFound.title': 'Burada satacak bir şey yok.',
    'notFound.text': 'Aradığın sayfa yok. Ama büfe her gün 08–22 arası açık.',
    'notFound.back': 'Ana sayfaya dön'
  },
  en: {
    'home.meta.title': 'Haus des Kiosks – Hello. Servus. Merhaba.',
    'home.meta.description': 'Haus des Kiosks in Munich: DHL parcel shop, cold drinks, snacks, tobacco and vapes. Open daily 8 am–10 pm at Ungsteiner Str. 3.',
    'home.meta.ogDescription': 'Tiny shop. Big outside. Open daily 8 am–10 pm in Giesing/Ramersdorf.',
    'skip': 'Skip to content',
    'brand.home': 'Haus des Kiosks home page',
    'nav.aria': 'Main navigation',
    'nav.offer': 'What we have',
    'nav.outside': 'Outside',
    'nav.location': 'Find us',
    'language.switch': 'Change language',
    'menu.open': 'Open menu',
    'menu.close': 'Close menu',
    'ticker.drinks': 'COLD DRINKS',
    'ticker.tobacco': 'TOBACCO',
    'ticker.hours': '8 AM–10 PM',
    'status.open': 'Open now',
    'status.closed': 'Daily 8 am–10 pm',
    'hero.punch': 'Tiny shop. Big outside.',
    'hero.text': 'A cold can, cigarettes, a vape, a snack or a DHL parcel. In, out – and a quick chat with someone you know by the door.',
    'hero.sticker': 'REAL KIOSK.<br>NO CONCEPT.',
    'hero.caption': 'The shop. Just as it is.',
    'quick.aria': 'Quick product overview',
    'quick.drinks': 'Drinks',
    'quick.snacks': 'Snacks',
    'quick.tobacco': 'Tobacco',
    'action.route': 'Get directions',
    'action.call': 'Call us',
    'sound.label': 'Sound',
    'sound.on': 'Turn sound on',
    'sound.off': 'Turn sound off',
    'offer.label': 'WHAT WE HAVE',
    'offer.title': 'All the essentials.<br><span>Quick.</span>',
    'offer.intro': 'For your parcel, the walk home, a quick break or five minutes before closing.',
    'offer.dhl': 'Drop off, collect and send parcels.',
    'offer.drinks.title': 'Cold drinks',
    'offer.drinks.text': 'Cans, soft drinks, beer and more – straight from the fridge.',
    'offer.snacks.title': 'Snacks & sweets',
    'offer.snacks.text': 'Salty, sweet, cold. For now or for the road.',
    'offer.tobacco.title': 'Tobacco & cigarettes',
    'offer.tobacco.text': 'The usual brands. Adults only.',
    'offer.vapes': 'A range of flavours. Adults only.',
    'offer.more.title': 'And more',
    'offer.more.text': 'Coffee to go, copies, printing, Western Union, stationery and everyday bits.',
    'offer.age': 'Tobacco, vapes and alcohol are only sold to customers of legal age.',
    'outside.label': 'OUT FRONT',
    'outside.title': 'Three steps inside.<br><span>The whole street outside.</span>',
    'outside.lead': 'Nobody comes here to lounge. There isn’t even room for it.',
    'outside.text': 'You grab a cold can, cigarettes, a snack or a parcel. Someone from the neighbourhood is already by the door. Say hello. Talk for two minutes. Then carry on.',
    'outside.noLounge': 'NO SEATS. NOT A CAFÉ. JUST A KIOSK.',
    'outside.caption': 'Out front, somewhere between a parcel and the walk home.',
    'outside.alt': 'Illustration of a mixed neighbourhood outside a small kiosk',
    'visit.label': 'FIND US',
    'visit.title': 'You know what you need.<br><span>We’re here.</span>',
    'visit.daily': 'Every day',
    'visit.sunday': 'Sundays too.',
    'visit.address': 'Address',
    'visit.phone': 'Phone',
    'map.title': 'Map: Haus des Kiosks, Ungsteiner Str. 3, Munich',
    'map.open': 'Open in Maps ↗',
    'social.text': 'What’s new in the shop. Straight to your phone.',
    'footer.claim': 'Tiny shop. Big outside.',
    'footer.imprint': 'Legal notice',
    'footer.privacy': 'Privacy',
    'legal.label': 'Legal',
    'back.home': '← Back to home',
    'imprint.meta.title': 'Legal notice – Haus des Kiosks',
    'imprint.title': 'Legal notice',
    'imprint.legalBasis': 'Information pursuant to Section 5 of the German TMG',
    'imprint.contact': 'Contact',
    'imprint.responsible': 'Responsible for content pursuant to Section 18(2) MStV',
    'imprint.check': 'Check before publication',
    'imprint.checkText': 'Add the VAT identification number (if available) and, where legally required, business registration or the competent supervisory authority.',
    'privacy.meta.title': 'Privacy – Haus des Kiosks',
    'privacy.title': 'Privacy',
    'privacy.controller': 'The controller responsible for data processing on this website is Zekeriya Karatas, Haus des Kiosks, Ungsteiner Str. 3, 81539 Munich.',
    'privacy.static': 'This is a static website. It does not set its own cookies and does not operate its own tracking. When the site is accessed, the hosting provider GitHub Pages (GitHub Inc.) processes technically necessary access data (such as the IP address) to deliver the page. See GitHub’s privacy notice for details.',
    'privacy.map': 'The home page embeds a map from OpenStreetMap. Loading the map connects to servers operated by the OpenStreetMap Foundation and may transmit your IP address.',
    'privacy.social': 'Links to our Instagram (Meta Platforms Ireland Ltd.) and TikTok (TikTok Technology Limited, Ireland) profiles take you to the respective platform. You only leave this site when you click such a link; no data is transferred this way until you click it.',
    'privacy.contact': 'If you contact us by email or telephone, your details are processed to handle your request and are not shared without your consent.',
    'privacy.rights': 'You have the right to access, rectify, erase and restrict the processing of your personal data, as well as the right to lodge a complaint with the competent supervisory authority.',
    'notFound.meta.title': 'Page not found – Haus des Kiosks',
    'notFound.title': 'Nothing to buy here.',
    'notFound.text': 'That page doesn’t exist. The kiosk is open daily from 8 am to 10 pm, though.',
    'notFound.back': 'Back to home'
  }
};

let activeLanguage = 'de';

function storedLanguage() {
  return getStoredLanguage(localStorage);
}

function browserLanguage() {
  const requested = [...(navigator.languages || []), navigator.language].filter(Boolean);
  return selectLanguage(null, requested);
}

function translate(key, language = activeLanguage) {
  return translations[language]?.[key] ?? translations.de[key] ?? key;
}

function renderOpenStatus() {
  const status = document.querySelector('#open-status');
  if (!status) return;
  const isOpen = isOpenAt();
  status.textContent = translate(isOpen ? 'status.open' : 'status.closed');
  document.querySelector('.status-dot')?.classList.toggle('is-open', isOpen);
}

function renderMenuLabel() {
  const menuButton = document.querySelector('.menu-toggle');
  if (!menuButton) return;
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-label', translate(isOpen ? 'menu.close' : 'menu.open'));
}

function renderSoundLabel() {
  const soundButton = document.querySelector('.teaser-sound');
  if (!soundButton) return;
  const isPlaying = soundButton.getAttribute('aria-pressed') === 'true';
  soundButton.setAttribute('aria-label', translate(isPlaying ? 'sound.off' : 'sound.on'));
}

function applyLanguage(language, { persist = false } = {}) {
  activeLanguage = normalizeLanguage(language) ?? 'de';
  document.documentElement.lang = activeLanguage;

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.textContent = translate(element.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    element.innerHTML = translate(element.dataset.i18nHtml);
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
    element.setAttribute('aria-label', translate(element.dataset.i18nAria));
  });
  document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
    element.setAttribute('alt', translate(element.dataset.i18nAlt));
  });
  document.querySelectorAll('[data-i18n-title]').forEach((element) => {
    element.setAttribute('title', translate(element.dataset.i18nTitle));
  });

  const languageButton = document.querySelector('.language-toggle');
  if (languageButton) languageButton.textContent = activeLanguage.toUpperCase();

  const page = document.body.dataset.page;
  const title = translations[activeLanguage]?.[`${page}.meta.title`];
  const description = translations[activeLanguage]?.[`${page}.meta.description`];
  const ogDescription = translations[activeLanguage]?.[`${page}.meta.ogDescription`];
  if (title) document.title = title;
  if (description) document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  if (ogDescription) document.querySelector('meta[property="og:description"]')?.setAttribute('content', ogDescription);

  renderOpenStatus();
  renderMenuLabel();
  renderSoundLabel();
  document.documentElement.classList.remove('i18n-pending');

  if (persist) {
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, activeLanguage);
    } catch {
      // The language still changes for this visit when storage is unavailable.
    }
  }
}

function initializeSite() {
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#main-nav');

  function closeMenu() {
    if (!menuButton || !navigation) return;
    navigation.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    renderMenuLabel();
  }

  if (menuButton && navigation) {
    menuButton.addEventListener('click', () => {
      const isOpen = navigation.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
      renderMenuLabel();
    });
    navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });
  }

  document.querySelector('.language-toggle')?.addEventListener('click', () => {
    applyLanguage(nextLanguage(activeLanguage), { persist: true });
    closeMenu();
  });

  const soundButton = document.querySelector('.teaser-sound');
  const teaserAudio = document.querySelector('.teaser-audio');

  if (soundButton && teaserAudio) {
    soundButton.addEventListener('click', async () => {
      if (!teaserAudio.paused) {
        teaserAudio.pause();
        teaserAudio.currentTime = 0;
        soundButton.setAttribute('aria-pressed', 'false');
        soundButton.setAttribute('aria-label', translate('sound.on'));
        return;
      }

      try {
        await teaserAudio.play();
        soundButton.setAttribute('aria-pressed', 'true');
        soundButton.setAttribute('aria-label', translate('sound.off'));
      } catch {
        soundButton.setAttribute('aria-pressed', 'false');
      }
    });
    teaserAudio.addEventListener('ended', () => {
      soundButton.setAttribute('aria-pressed', 'false');
      soundButton.setAttribute('aria-label', translate('sound.on'));
    });
  }

  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();

  applyLanguage(storedLanguage() || browserLanguage());

  window.HausDesKiosksI18n = Object.freeze({
    languages: [...SUPPORTED_LANGUAGES],
    setLanguage: (language) => applyLanguage(language, { persist: true })
  });
}

if (typeof document !== 'undefined') initializeSite();
