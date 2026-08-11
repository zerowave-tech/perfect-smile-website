window.PS_DATA = (function () {
    const T = {
      hu: {
        chatTitle: "Perfect Smile AI Asszisztens", chatStatus: "Perfect Smile · online",
        chatTeaser: "Kérdezze AI asszisztensünket!",
        chatPlaceholder: "Gépeld be ide kérdésed!",
        chatPowered: "Powered by MedHubAI",
        chatGreeting: "Miben segíthetek? • How can I help?",
        brandSub: "Fogászat · Budapest", navTreat: "Kezelések", navTeam: "Munkatársak", navFees: "Árak",
        navPatients: "Rólunk mondták", navAbout: "Rólunk", navJournal: "Blog", navContact: "Kapcsolat",
        cta: "Ingyenes konzultáció kérése", heroCta2: "Szolgáltatásaink",
        heroTitle: "Megnyugtató környezet, tapasztalt fogorvosok",
        heroText: "A Perfect Smile fogászat nagy szakmai tapasztalattal rendelkező klinika, amely több mint két évtizedes múltat és több ezer elégedett pácienst tudhat magáénak.",
        tourEyebrow: "A rendelő", bookingEyebrow: "Időpont",
        reviewsEyebrow: "Vélemények", reviewsTitle: "Amit a pácienseink írnak", reviewsStat: "90% ajánlja · 129 értékelés Google-on", streetView: "Utcanézet a rendelőről",
        callbackTitle: "Fogászati rendelés",
        callbackText: "Felhívjuk szíves figyelmüket, hogy kizárólag telefonon előre egyeztetett időpontban várjuk fogorvosi rendelésünkre. Időpontfoglalásukat hétköznaponként a következő telefonszámon várjuk:",
        fFull: "Teljes név", fPhone: "Telefonszám", fTreat: "Érdeklődés tárgya (nem kötelező)", fTime: "Mikor hívhatjuk?",
        fFirst: "Keresztnév", fLast: "Vezetéknév", fEmail: "E-mail",
        privacyNote: "Adatait kizárólag a visszahívás egyeztetésére használjuk.",
        servTitle: "A Perfect Smile Fogászat szolgáltatásai",
        servText: "Fogászati kezeléseink során a legmodernebb technikát alkalmazva kínálunk megoldást problémájára és alakítjuk ki az Ön tökéletes mosolyát.",
        from: "Ártól:",
        trEyebrow: "Implantológia", trTitle: "Fog implantátum beültetés",
        trLead: "A fog implantátum titániumból készült mesterséges foggyökér, melyeket a fogorvos szájsebészeti eljárással a csontba helyez. Az implantátumok a szükséges gyógyulási idő alatt tökéletesen beágyazódnak a csontba, és alkalmasak koronák, hidak, illetve protézisek biztonságos megtartására.",
        trBody: "Kitűnő szájsebész szakorvosaink több ezer elégedett páciens kezelését végezték már el fájdalommentesen, teljes érzéstelenítéssel vagy bizonyos esetekben akár altatással. Az ingyenes konzultáció alkalmával részletes felvilágosítást adunk az implantátumokról és a kezelés menetéről.",
        trSteps: "A kezelés menete", trGlance: "Röviden", trPriceNote: "SGS-Dental implantátum",
        phPortrait: "Portré", phArticle: "Cikk képe", phMap: "Húzzon ide egy térképképet", phTreat: "Kezelés fotója",
        teamTitle: "Munkatársaink",
        feesTitle: "Fogászati árak",
        feesText: "Pácienseink számára személyre szóló, előzetesen egyeztetett tervet készítünk, amely az orvosi szempontok figyelembevétele mellett maximálisan az Ön igényeihez igazítunk.",
        revTitle: "Rólunk mondták", videoLabel: "Videó ajánló",
        aboutTitle: "Megnyugtató környezet, tapasztalt fogorvosok",
        aboutP1: "Budapesten, az egyik legszebb, legmodernebb és innovatív berendezésekkel felszerelt rendelőjébe várjuk kedves Betegeinket. Magasan képzett, nemzetközi tapasztalattal rendelkező fogorvosaink a leghatékonyabb módszerek alkalmazásával segítenek bármilyen típusú fogászati problémája precíz és gyors megoldásában, mindezt megfizethető áron.",
        aboutP2: "A praxist Dr. Balsai Tamás fogorvos igazgató vezeti, aki már 30 esztendeje áll a Perfect Smile élén. Ez idő alatt a rendelő a Fő utcán egyetlen kabinetből nőtt a mai, több szakterületet átfogó klinikává, amely több mint két évtizedes múltat és több ezer elégedett pácienst tudhat magáénak.",
        aboutP3: "A névhez köteleztetés is társul: célunk, hogy a tökéletes mosoly valóban tökéletes legyen, ezért minden esetben komplex, holisztikus odafigyeléssel kezeljük a felmerülő problémákat — nem csak a tünetet, hanem az egészet.",
        aboutQuote: "Megfogadtam, hogy ha a Holdról kell odautaznom, akkor is csak őhozzá megyek: ritkán találkozni ilyen lelkiismeretes és nagy tudású orvossal! A stáb is fantasztikus, mindenki végtelenül kedves és figyelmes, szóval szuper a hely, már rengeteg családtagomat és barátomat „beutaltam” ide.",
        aboutQuoteWho: "Bárdi Katalin",
        galleryTitle: "A rendelő", galleryHint: "Húzza oldalra a további képekhez",
        blogTitle: "Fogászati hírek, újdonságok",
        podcastTitle: "Dr. Balsai Tamás podcast csatornája", podcastText: "Hanganyagainkat azzal a szándékkal indítottuk, hogy a gyógyítás holisztikus szemléletét közelebb hozzuk az emberekhez — Spotify-on és YouTube-on egyaránt elérhető.",
        cAddress: "Cím", cReception: "Recepció", cHours: "Nyitvatartás",
        cHours1: "Hétfő – Péntek 8:00 – 12:00 és 13:00 – 17:00", cHours2: "Szombat, vasárnap zárva",
        cStation: "Legközelebbi megálló", cStationText: "Batthyány tér, 6 perc gyalog", cDistrict: "Budapest II. kerület",
        bookText: "Felhívjuk szíves figyelmüket, hogy kizárólag telefonon előre egyeztetett időpontban várjuk fogorvosi rendelésünkre. Időpontfoglalásukat hétköznaponként várjuk.",
        bookCall: "Vagy hívja közvetlenül a recepciót:",
        footBlurb: "Magánfogászat Budapest II. kerületében, Dr. Balsai Tamás vezetésével. Digitális tervezés, helyben készülő CBCT és írásos garancia minden kezelésre.",
        fImplants: "Implantátum", fOrtho: "Fogszabályozás", fCosmetic: "Esztétikai fogászat", fHygiene: "Szájhigiénia",
        footPractice: "Rendelő", footFees: "Árak és garancia", footVisit: "Látogatás",
        footPrivacy: "Adatkezelés", footComplaints: "Panaszkezelés", footGuarantee: "Garancia"
      },
      en: {
        chatTitle: "Perfect Smile AI Assistant", chatStatus: "Perfect Smile · online",
        chatTeaser: "Ask our AI assistant!",
        chatPlaceholder: "Type your question here!",
        chatPowered: "Powered by MedHubAI",
        chatGreeting: "Miben segíthetek? • How can I help?",
        brandSub: "Dental Studio · Budapest", navTreat: "Treatments", navTeam: "Team", navFees: "Fees",
        navPatients: "Patients", navAbout: "About", navJournal: "Journal", navContact: "Contact",
        cta: "Request a free consultation", heroCta2: "Our services",
        heroTitle: "A reassuring setting, experienced dentists",
        heroText: "Perfect Smile is a clinic with deep professional experience: more than two decades of practice and several thousand satisfied patients.",
        tourEyebrow: "The studio", bookingEyebrow: "Booking",
        reviewsEyebrow: "Reviews", reviewsTitle: "What our patients write", reviewsStat: "90% recommend · 129 reviews on Google", streetView: "Street View of the practice",
        callbackTitle: "Dental appointments",
        callbackText: "Please note that we see patients strictly by appointment arranged in advance by telephone. Appointments can be booked on weekdays on:",
        fFull: "Full name", fPhone: "Phone number", fTreat: "Treatment of interest (optional)", fTime: "Best time to call",
        fFirst: "First name", fLast: "Last name", fEmail: "Email",
        privacyNote: "We use your details only to arrange the call.",
        servTitle: "Perfect Smile services",
        servText: "In our treatments we apply the most modern techniques available to solve your problem and shape your perfect smile.",
        from: "From",
        trEyebrow: "Implantology", trTitle: "Dental implant placement",
        trLead: "A dental implant is an artificial tooth root made of titanium, placed into the bone by the dentist in an oral surgical procedure. During the healing period implants integrate perfectly into the bone and are able to hold crowns, bridges and dentures securely.",
        trBody: "Our excellent oral surgeons have already treated several thousand satisfied patients painlessly, under full local anaesthetic or, in certain cases, under sedation. At the free consultation we explain the implants, the course of treatment and what to expect afterwards in detail.",
        trSteps: "How the treatment runs", trGlance: "At a glance", trPriceNote: "SGS-Dental implant",
        phPortrait: "Portrait", phArticle: "Article image", phMap: "Drop a map image of the clinic location", phTreat: "Treatment photograph",
        teamTitle: "Our team",
        feesTitle: "Dental fees",
        feesText: "We prepare a personal plan agreed in advance, which alongside the clinical considerations is tailored as far as possible to your own needs.",
        revTitle: "What they said about us", videoLabel: "Video testimonial",
        aboutTitle: "A reassuring setting, experienced dentists",
        aboutP1: "We welcome our patients to one of the most beautiful, most modern practices in Budapest, fitted with innovative equipment. Our highly trained, internationally experienced dentists apply the most effective methods to solve any kind of dental problem precisely and quickly, and at an affordable price.",
        aboutP2: "The practice is led by Dr. Balsai Tamás, who has headed Perfect Smile for 30 years. In that time it grew from a single surgery on Fő utca into today's multi-disciplinary clinic, with more than two decades of history and several thousand satisfied patients.",
        aboutP3: "The name is also a commitment: our aim is for a perfect smile to genuinely be perfect, so we treat every problem with complex, holistic attention — not just the symptom, but the whole picture.",
        aboutQuote: "I promised myself that even if I had to travel from the Moon, I would still only go to him — it's rare to meet such a conscientious, highly skilled doctor. The team is fantastic too, everyone is endlessly kind and attentive, so it's a wonderful place — I've already sent many family members and friends here.",
        aboutQuoteWho: "Bárdi Katalin",
        galleryTitle: "The practice", galleryHint: "Drag sideways for more photos",
        blogTitle: "Dental news and updates",
        podcastTitle: "Dr. Balsai Tamás's podcast channel", podcastText: "We started these audio episodes to bring a holistic view of healing closer to people — available on both Spotify and YouTube.",
        cAddress: "Address", cReception: "Reception", cHours: "Opening hours",
        cHours1: "Monday – Friday 8:00 – 12:00 and 13:00 – 17:00", cHours2: "Saturday, Sunday closed",
        cStation: "Nearest station", cStationText: "Batthyány tér, 6 minutes on foot", cDistrict: "Budapest II. district",
        bookText: "Please note that we see patients strictly by appointment arranged in advance by telephone. Appointments can be booked on weekdays.",
        bookCall: "Or call reception directly on",
        footBlurb: "Private dental studio in Budapest II., led by Dr. Balsai Tamás. Digital planning, in-house CBCT and a written guarantee on every treatment.",
        fImplants: "Implants", fOrtho: "Orthodontics", fCosmetic: "Cosmetic dentistry", fHygiene: "Hygiene",
        footPractice: "Practice", footFees: "Fees & guarantee", footVisit: "Visit",
        footPrivacy: "Privacy", footComplaints: "Complaints", footGuarantee: "Guarantee"
      }
    };
    const D = {
      hu: {
        rooms: [
          { src: "./assets/room-entrance.png", title: "Belépés a Fő utcáról", text: "Rendelőnk a Budapest II. kerületi Fő utca 71. szám alatt található." },
          { src: "./assets/room-lounge.png", title: "A váró", text: "Igényes, megnyugtató környezet, barátságos, kedves személyzettel." },
          { src: "./assets/room-surgery-1.png", title: "Kezelő", text: "Az egyik legszebb, legmodernebb és innovatív berendezésekkel felszerelt rendelő Budapesten." },
          { src: "./assets/room-surgery-2.png", title: "Szájsebészeti kezelő", text: "Innovatív eszközök, amelyekkel szájsebész szakorvosaink dolgoznak." }
        ],
        services: [
          { num: "01", name: "Fogkő eltávolítás", desc: "A fogkő eltávolítás az egyik legfontosabb fogászati beavatkozás, mely elősegíti a megfelelő szájhigiénia fenntartását, és megelőzi a különböző fogászati problémák kialakulását.", price: "25.000 Ft" },
          { num: "02", name: "Fogtömés", desc: "Nagyon sok okból kifolyólag alakulhat ki lyukas fog, ami nem csak esztétikailag teszi kellemetlenné a hétköznapokat, hanem akár nagy fájdalmakat is okozhat.", price: "30.000 Ft" },
          { num: "03", name: "Fogfehérítés", desc: "A mai legmodernebb fogászati technológiával dolgozunk, így kevesebb mint egy óra alatt, akár 4-5 árnyalattal világosabb fogszínt érhetünk el.", price: "80.000 Ft" },
          { num: "04", name: "Fogpótlások", desc: "Porcelán és cirkon koronák, hidak, inlay, onlay fogpótlás – több tekintetben sem előnyös, ha hiányos fogazattal élünk tovább.", price: "100.000 Ft" },
          { num: "05", name: "Fog implantátum", desc: "Az implantátumok a szükséges gyógyulási idő alatt tökéletesen beágyazódnak a csontba, és alkalmasak koronák, hidak, illetve protézisek biztonságos megtartására.", price: "170.000 Ft" },
          { num: "06", name: "Szájsebészet", desc: "Szájsebész szakorvosaink innovatív eszközök segítségével végzik a bölcsességfog eltávolítást, gyökércsúcs rezekciót, ciszta eltávolítást és a bonyolultabb foghúzásokat.", price: "20.000 Ft" }
        ],
        extra: [
          { num: "07", name: "Gyökérkezelés", desc: "A lyukas, sérült fog gyökerében lévő ideg fertőtlenítése és kezelése, hogy a felépülő korona vagy tömés alatt a fog ne pusztuljon tovább.", price: "75.000 Ft" },
          { num: "08", name: "Parodontológia", desc: "A fogágybetegség, fogínysorvadás, azaz a fogat körülvevő szövetek baktériumok okozta gyulladásos megbetegedéseinek kezelése.", price: "100.000 Ft" },
          { num: "09", name: "Fogászati CT", desc: "A CBCT-nek köszönhetően több összetett probléma válik orvosolhatóvá, a beavatkozások jobban tervezhetőek, így csökken a kockázati faktor.", price: "20.000 Ft" },
          { num: "10", name: "Fogszabályozás", desc: "Célunk, hogy egyenletesebb, rendezettebb fogíveket, fogív illeszkedést érjünk el, az egyéni adottságok figyelembe vétele mellett.", price: "300.000 Ft" },
          { num: "11", name: "Altatásos fogászat", desc: "Az altatásban történő kezelést elsősorban műtétekhez, szájsebészeti beavatkozások esetében javasoljuk.", price: "200.000 Ft" },
          { num: "12", name: "Gyermekfogászat", desc: "Gyakori tévhit, hogy a tejfogakra kevesebb figyelmet kell fordítani, mint a maradandó fogakra.", price: "10.000 Ft" }
        ],
        aboutFacts: [
          { n: "30", label: "éve vezeti a praxist Dr. Balsai Tamás" },
          { n: "20+", label: "év szakmai múlt a Fő utcán" },
          { n: "több ezer", label: "elégedett páciens" },
          { n: "12", label: "fogorvos, asszisztens és munkatárs" }
        ],
        gallery: [
          { src: "./assets/hero-reception.png", cap: "Recepció a Fő utca 71-ben" },
          { src: "./assets/room-entrance.png", cap: "Bejárat" },
          { src: "./assets/room-lounge.png", cap: "Váró" },
          { src: "./assets/room-surgery-1.png", cap: "Kezelő" },
          { src: "./assets/room-surgery-2.png", cap: "Szájsebészeti kezelő" }
        ],
        teamGroups: [
          { title: "Vezetés", people: [
            { photo: "./assets/team-balsai.png", name: "Dr. Balsai Tamás", role: "Igazgató, fogszakorvos, implantológus" },
            { photo: "./assets/team-kasza.png", name: "Kasza Margó", role: "Irodavezető" }
          ] },
          { title: "Fogorvosok", people: [
            { photo: "./assets/team-hulik.png", name: "Dr. Hulik Emese", role: "parodontológus szakorvos" },
            { photo: "./assets/team-csernak.png", name: "Dr. Csernák Ádám", role: "fogszakorvos" },
            { photo: "./assets/team-varga.png", name: "Dr. Varga Márton", role: "fogorvos" },
            { photo: "./assets/team-borsos.png", name: "Dr. Borsos Gabriella", role: "fogszabályozó szakorvos" },
            { photo: "./assets/team-meszarics.png", name: "Dr Meszarics Réka", role: "fogorvos" }
          ] },
          { title: "Asszisztensek", people: [
            { photo: "./assets/team-szotak.png", name: "Szoták Marietta", role: "Vezető asszisztens" },
            { photo: "./assets/team-deme.png", name: "Deme Johanna", role: "fogászati asszisztens" },
            { photo: "./assets/team-brosko.png", name: "Broskó Nikolett", role: "fogászati asszisztens" }
          ] },
          { title: "Recepció", people: [
            { photo: "./assets/team-horvath.png", name: "Horváth Nicolas", role: "Recepciós" },
            { photo: "./assets/team-soltesz.png", name: "Soltész Nola Rea", role: "Recepciós" }
          ] }
        ],
        team: [
          { slot: "ps-dr1", name: "Dr. Balsai Tamás", role: "Igazgató, fogszakorvos, implantológus", quals: "Implantológia" },
          { slot: "ps-dr2", name: "Dr. Hulik Emese", role: "parodontológus szakorvos", quals: "Parodontológia" },
          { slot: "ps-dr3", name: "Dr. Csernák Ádám", role: "fogszakorvos", quals: "Fogszakorvos" },
          { slot: "ps-dr4", name: "Dr. Varga Márton", role: "fogorvos", quals: "Fogorvos" },
          { slot: "ps-dr5", name: "Dr. Borsos Gabriella", role: "fogszabályozó szakorvos", quals: "Fogszabályozás" },
          { slot: "ps-dr6", name: "Dr Meszarics Réka", role: "fogorvos", quals: "Fogorvos" },
          { slot: "ps-dr7", name: "Dr. Sipos Lili", role: "Paradontológus fogszakorvos", quals: "Parodontológia" },
          { slot: "ps-dr8", name: "Kasza Margó", role: "Irodavezető", quals: "Iroda" },
          { slot: "ps-dr9", name: "Szoták Marietta", role: "Vezető asszisztens", quals: "Asszisztencia" },
          { slot: "ps-dr10", name: "Deme Johanna", role: "fogászati asszisztens", quals: "Asszisztencia" },
          { slot: "ps-dr11", name: "Horváth Nicolas", role: "Recepciós", quals: "Recepció" },
          { slot: "ps-dr12", name: "Soltész Nola Rea", role: "Recepciós", quals: "Recepció" }
        ],
        trFacts: [
          { k: "Beavatkozás ideje", v: "Egyszerű esetben fél óra" },
          { k: "Érzéstelenítés", v: "Teljes érzéstelenítés, igény esetén altatás" },
          { k: "Rendszerek", v: "SGS-Dental, All on Four/Six, Branemark, Nobel Biocare" },
          { k: "Garancia", v: "SGS implantátum: 5 év (anyagra)" }
        ],
        steps: [
          { n: "01", title: "Ingyenes konzultáció", text: "Az ingyenes konzultáció alkalmával részletes felvilágosítást adunk az implantátumokról és a kezelés menetéről, valamint a beavatkozás utáni tudnivalókról." },
          { n: "02", title: "Csontpótlás, ha szükséges", text: "A régen eltávolított vagy fogágybetegség miatt elveszített fogak helyén gyakran nem áll rendelkezésre elegendő csont. A hiányzó részt korszerű eljárásokkal pótolni lehet, és a hosszú távú stabil alátámasztás érdekében szükséges is." },
          { n: "03", title: "Beültetés", text: "A beavatkozás fájdalommentesen, teljes érzéstelenítéssel vagy bizonyos esetekben akár altatással történik. A legegyszerűbb helyzetben fél óra alatt át is eshetünk rajta." },
          { n: "04", title: "Gyógyulás és pótlás", text: "Az implantátumok a szükséges gyógyulási idő alatt tökéletesen beágyazódnak a csontba, és alkalmasak koronák, hidak, illetve protézisek biztonságos megtartására." }
        ],
        reviews: [
          { initial: "S", who: "Szilvia Szuromi", meta: "Google-vélemény · 4 hónapja", quote: "Végre egy orvos, akivel lehet életmóddal kapcsatos tényezőkről beszélni! Balsai doki közvetlen, barátságos és kifejezetten informatív volt a szolgáltatása során, maximálisan elégedett vagyok. A rendelő szép, igazán kellemes miliővel." },
          { initial: "I", who: "Ildikó Révai", meta: "Google-vélemény · egy éve", quote: "A legjobb fogorvosi rendelő! Hollywood smilet csináltattam náluk, Ádám doktor volt az orvosom. Mivel elég problémás páciens vagyok, altatásban történt az összes beavatkozás. A végeredmény annyira szép lett, hogy nem győzök gyönyörködni benne." },
          { initial: "A", who: "Anna Jázmin Csukas", meta: "Google-vélemény · 4 hónapja", quote: "Csak ajánlani tudom. Bár előbb találtam volna rá erre a fogászatra." },
          { initial: "S", who: "Sándor Saortay", meta: "Google-vélemény · egy éve", quote: "Pompás rendelő remek és mindig segítőkész orvosokkal, asszisztensekkel, munkatársakkal. Csak hálával tudok rájuk gondolni, sürgős esetekben is." },
          { initial: "I", who: "Ildiko Ocsenas", meta: "Google-vélemény · 2 éve", quote: "Köszönöm a profi ellátást! Dr. Balsai Tamás 30 éve hűséges páciense vagyok, már a család többi tagja is a Perfect Smile rendelőbe jár. Margó kiválóan vezeti a kiszolgáló személyzetet és magasszínvonalú az ügyfélkezelése!" },
          { initial: "S", who: "Sándor Szeberényi", meta: "Google-vélemény · egy éve", quote: "30 éve járok Balsai doktorhoz. Rengeteg ismerősömnek ajánlottam ezidő alatt a rendelőjét. Minden esetben a legjobb ellátást kaptuk. A holisztikus szemlélete sokat segít egyéb problémák feltárásában is." }
        ],
        values: [
          { title: "Tömések: 2 év", text: "Garanciát vállalunk a töméseinkre, féléves kontroll mellett." },
          { title: "Cirkónium korona: 3 év", text: "Fém-kerámia korona és kerámia héjak: 2 év, inlay: 2 év." },
          { title: "SGS implantátum: 5 év", text: "Az implantátum anyagára, teljes és részleges fogsorra 1 év." }
        ],
        posts: [
          { url: "https://drbalsai.hu/rendezveny/rocdumaroc/", cover: "./assets/blog-1.png", cat: "Rendezvény", date: "2024-10-14", title: "Őrült kihívást teljesített Dr. Balsai Tamás", excerpt: "A RocDuMaroc MTB versenyen Dr. Balsai Tamás 9 napon át, 6 szakaszon keresztül összesen 666Km-t teker le bicajjal – Most kezdem felfogni! Valami olyan érzés volt, mint amikor bekerülsz egy tornádóba és 6 napod van kijönni." },
          { url: "https://drbalsai.hu/altatasos-fogaszat/gyakori-kerdesek-altatasos-fogaszat/", cover: "./assets/blog-2.png", cat: "Altatásos fogászat blog", date: "2024-03-11", title: "Gyakori kérdések az altatásos fogászat kapcsán", excerpt: "A mai fogászati technológiáknak és a folyamatosan fejlődő szakmai háttérnek köszönhetően minden esetben a fog megmentése az elsődleges cél. Mégis vannak olyan helyzetek, amikor muszáj az adott fogat vagy fogakat kihúzni." },
          { url: "https://drbalsai.hu/fog-implantatum/fog-implantalas-utan/", cover: "./assets/blog-3.png", cat: "Fog implantátum blog", date: "2024-02-08", title: "Mire számíthatunk fog implantálás után?", excerpt: "Előző cikkünkben választ adtunk néhány gyakori kérdésre a fogászati implantálás kapcsán. Most ugyancsak egy olyan témakörről lesz szó, mely mindenki számára nagyon fontos, aki fog implantátumot szeretne behelyeztetni." },
          { url: "https://drbalsai.hu/fog-implantatum/fogaszati-implantalas-kerdesek/", cover: "./assets/blog-4.png", cat: "Fog implantátum blog", date: "2023-12-11", title: "Fogászati implantálást övező kérdések", excerpt: "A fogászati implantátum egy stabil és egyben esztétikus megoldást kínál, amennyiben valakinek fogpótlásra van szüksége. Ráadásul olyan esetekben is segíthet, amikor más nem jöhetne szóba." },
          { url: "https://drbalsai.hu/fog-implantatum/mutet-nelkuli-fog-implantalas/", cover: "./assets/blog-5.png", cat: "Fog implantátum blog", date: "2023-10-11", title: "Fog implantátum műtét nélkül", excerpt: "A Perfect Smile Fogászati Klinikában az úgynevezett flapless, vagyis műtét nélküli fog implantálás is régóta elérhető. Dr. Balsai Tamás minden olyan páciens esetén ezt a fajta beavatkozást ajánlja, akinél lehetséges." },
          { url: "https://drbalsai.hu/fogaszati-hirek/perfect-smile-uj-muto-altatasos-fogaszat/", cover: "./assets/blog-6.png", cat: "Hírek", date: "2023-08-24", title: "A Perfect Smile Fogászati Klinika új műtővel bővült", excerpt: "Nemrég megnyitotta új műtőjét a Perfect Smile Fogászati Klinika, ahol az altatásos beavatkozások különlegesen komfortos teret nyertek. A bővítés keretein belül a műtőhöz saját szoba, illetve fürdőszoba tartozik." },
          { url: "https://drbalsai.hu/fogaszati-hirek/bator-mosoly-onbizalom/", cover: "./assets/blog-7.png", cat: "Hírek", date: "2023-07-17", title: "Bátor mosoly nélkül nincs önbizalom", excerpt: "Elérkeztünk a mostanában mindig emlegetett webináriumhoz köthető utolsó témánkhoz. Ezen cikksorozatunk befejező részében ismét egy nagyon fontos és sokakat érintő problémáról lesz szó, méghozzá az önbizalom hiányáról." },
          { url: "https://drbalsai.hu/fogaszati-hirek/cirkadian-ritmus-fogaszati-problemak/", cover: "./assets/blog-8.png", cat: "Hírek", date: "2023-06-20", title: "A fogászati problémák időszakosan váltakozhatnak", excerpt: "Dr. Balsai Tamás nem csak azért kitűnő fogorvos, mert jól végzi a munkáját, hanem azért is, mert kicsit másképp látja azokat az összefüggéseket, melyekre más talán nem is gondolna." },
          { url: "https://drbalsai.hu/gyermekfogaszat/gyermek-fogmosas/", cover: "./assets/blog-9.png", cat: "Gyermekfogászat blog", date: "2023-05-23", title: "Gyerekek és a fogmosás", excerpt: "Talán az alcím még helyesebb lenne, ha így tennénk fel a kérdést: hogyan tanítsuk meg gyermekünket és magunkat is helyesen fogat mosni?" }
        ],
        podcasts: [
          { title: "A böjt, ami Nobel-díjat kapott – és Neked is meg fogja változtatni a testedet", source: "Spotify · #balsaidoki", url: "https://open.spotify.com/show/7abizCjzwKncZAB4FozbCj", bg: "#7A1220" },
          { title: "Így lett az ünnepi kenyérből mindennapi méreg", source: "Spotify · #balsaidoki", url: "https://open.spotify.com/show/7abizCjzwKncZAB4FozbCj", bg: "#7A1220" },
          { title: "Ezért betegszik meg a fél ország, és mégis kevesen értik, miért", source: "Spotify · #balsaidoki", url: "https://open.spotify.com/show/7abizCjzwKncZAB4FozbCj", bg: "#7A1220" },
          { title: "A böjt, ami félmillió embert ébresztett fel", source: "Spotify · #balsaidoki", url: "https://open.spotify.com/show/7abizCjzwKncZAB4FozbCj", bg: "#7A1220" },
          { title: "„Imádok személyesen találkozni azokkal, akik hallgatják a podcastot”", source: "Spotify · #balsaidoki", url: "https://open.spotify.com/show/7abizCjzwKncZAB4FozbCj", bg: "#1A1613" },
          { title: "Öt nap evés nélkül, és minden megváltozik", source: "Spotify · #balsaidoki", url: "https://open.spotify.com/show/7abizCjzwKncZAB4FozbCj", bg: "#1A1613" },
          { title: "„Arcon vágott a diagnózis: tüdőbeteg vagyok”", source: "Spotify · #balsaidoki", url: "https://open.spotify.com/show/7abizCjzwKncZAB4FozbCj", bg: "#1A1613" },
          { title: "„Nem szégyellem, igen elsírtam magam!”", source: "Spotify · #balsaidoki", url: "https://open.spotify.com/show/7abizCjzwKncZAB4FozbCj", bg: "#1A1613" }
        ],
        tech: [
          { tag: "CT", text: "CBCT felvétel helyben, így ritkán kell máshová küldenünk." },
          { tag: "MIK", text: "Gyökérkezelés sebészi mikroszkóppal." },
          { tag: "PRF", text: "A-PRF és I-PRF: csont és membrán a páciens saját véréből." },
          { tag: "ALT", text: "Altatásos háttér aneszteziológussal a félős pácienseknek." }
        ],
        awards: [
          { name: "CBCT helyben", year: "3D felvétel, 20.000 Ft" },
          { name: "Mikroszkópos endodoncia", year: "2016 óta" },
          { name: "A-PRF és I-PRF", year: "Csont saját vérből" },
          { name: "Írásos garancia", year: "Minden pótlásra" },
          { name: "Altatásos háttér", year: "Aneszteziológussal" }
        ],
        priceGroups: [
          { title: "Röntgen és konzultáció", rows: [
            { name: "Fogászati CT felvétel (CBCT)", price: "20.000 Ft" },
            { name: "Panoráma röntgen", price: "5.000 Ft" },
            { name: "Fogszabályozás konzultáció, első alkalom", price: "10.000 Ft" },
            { name: "Fogszabályozás kezelési terv", price: "30.000 Ft" }
          ] },
          { title: "Konzerváló fogászat", rows: [
            { name: "Fogkőeltávolítás", price: "25.000 Ft" },
            { name: "Esztétikus tömés", price: "30.000 Ft" },
            { name: "Esztétikus tömés, több felszínű", price: "40.000 Ft" },
            { name: "Fogfehérítés", price: "80.000 Ft" },
            { name: "Homokfúvás", price: "10.000 Ft" },
            { name: "Gyökértömés", price: "60.000 – 75.000 Ft" },
            { name: "Mikroszkópos gyökérkezelés", price: "75.000 – 120.000 Ft" }
          ] },
          { title: "Fogpótlás", rows: [
            { name: "Porcelán inlay / onlay", price: "100.000 Ft" },
            { name: "Porcelán héj", price: "120.000 Ft" },
            { name: "E-max korona, héj", price: "120.000 Ft" },
            { name: "Fém-kerámia korona", price: "100.000 Ft" },
            { name: "Cirkon korona", price: "120.000 Ft" },
            { name: "Teljes fogsor, állcsontonként", price: "150.000 Ft" }
          ] },
          { title: "Szájsebészet és implantátum", rows: [
            { name: "Foghúzás", price: "20.000 Ft" },
            { name: "Bölcsességfog operálás", price: "60.000 Ft" },
            { name: "A-PRF membrán saját vérből", price: "150.000 Ft" },
            { name: "SGS-Dental implantátum", price: "170.000 Ft" },
            { name: "All-on-4 / six implantátum", price: "220.000 Ft" },
            { name: "Branemark implantátum", price: "250.000 Ft" },
            { name: "Sinus lifting", price: "200.000 Ft" },
            { name: "Altatás", price: "200.000 Ft" }
          ] },
          { title: "Fogszabályozás", rows: [
            { name: "Rögzített készülék, fém, állcsontonként", price: "300.000 Ft" },
            { name: "Rögzített készülék, esztétikus, állcsontonként", price: "350.000 Ft" },
            { name: "Egyszerű lemez", price: "60.000 Ft" },
            { name: "Trainer", price: "50.000 Ft" },
            { name: "Invisalign", price: "1.100.000 – 1.500.000 Ft" },
            { name: "Éjszakai harapásemelő sín", price: "25.000 Ft" }
          ] }
        ]
      },
      en: {
        rooms: [
          { src: "./assets/room-entrance.png", title: "You step in from Fő utca", text: "The practice is at Fő utca 71 in Budapest's second district." },
          { src: "./assets/room-lounge.png", title: "The waiting lounge", text: "A refined, reassuring setting with friendly, welcoming staff." },
          { src: "./assets/room-surgery-1.png", title: "Treatment room", text: "One of the most beautiful and modern practices in Budapest, fitted with innovative equipment." },
          { src: "./assets/room-surgery-2.png", title: "Oral surgery room", text: "The innovative instruments our oral surgeons work with." }
        ],
        services: [
          { num: "01", name: "Scaling", desc: "Scaling is one of the most important treatments: it keeps oral hygiene in order and prevents dental problems from developing.", price: "25.000 Ft" },
          { num: "02", name: "Fillings", desc: "Cavities form for many reasons, and they are not only an aesthetic nuisance — they can cause considerable pain.", price: "30.000 Ft" },
          { num: "03", name: "Whitening", desc: "We work with the most modern technology available, reaching a shade 4–5 steps lighter in under an hour.", price: "80.000 Ft" },
          { num: "04", name: "Prosthetics", desc: "Porcelain and zirconia crowns, bridges, inlays and onlays — living with an incomplete dentition carries several disadvantages.", price: "100.000 Ft" },
          { num: "05", name: "Dental implants", desc: "Implants integrate fully into the bone during healing and hold crowns, bridges and dentures securely.", price: "170.000 Ft" },
          { num: "06", name: "Oral surgery", desc: "Our oral surgeons use innovative instruments for wisdom tooth removal, apicoectomy, cyst removal and complex extractions.", price: "20.000 Ft" }
        ],
        extra: [
          { num: "07", name: "Root canal treatment", desc: "Disinfecting and treating the nerve inside a damaged tooth so it does not deteriorate under the crown or filling.", price: "75.000 Ft" },
          { num: "08", name: "Periodontology", desc: "Treatment of gum disease and receding gums — bacterial inflammation of the tissues surrounding the tooth.", price: "100.000 Ft" },
          { num: "09", name: "Dental CT", desc: "CBCT makes complex problems treatable and procedures far easier to plan, lowering the risk factor overall.", price: "20.000 Ft" },
          { num: "10", name: "Orthodontics", desc: "Our aim is a more even arch and a better bite, always accounting for individual anatomy.", price: "300.000 Ft" },
          { num: "11", name: "Sedation dentistry", desc: "We recommend treatment under sedation primarily for surgery and oral surgical procedures.", price: "200.000 Ft" },
          { num: "12", name: "Children", desc: "It is a common misconception that milk teeth need less attention than permanent ones.", price: "10.000 Ft" }
        ],
        aboutFacts: [
          { n: "30", label: "years with Dr. Balsai Tamás at the head of the practice" },
          { n: "20+", label: "years of professional history on Fő utca" },
          { n: "thousands", label: "of satisfied patients" },
          { n: "12", label: "dentists, assistants and staff" }
        ],
        gallery: [
          { src: "./assets/hero-reception.png", cap: "Reception at Fő utca 71" },
          { src: "./assets/room-entrance.png", cap: "Entrance" },
          { src: "./assets/room-lounge.png", cap: "Waiting lounge" },
          { src: "./assets/room-surgery-1.png", cap: "Treatment room" },
          { src: "./assets/room-surgery-2.png", cap: "Oral surgery room" }
        ],
        teamGroups: [
          { title: "Management", people: [
            { photo: "./assets/team-balsai.png", name: "Dr. Balsai Tamás", role: "Director, dental specialist, implantologist" },
            { photo: "./assets/team-kasza.png", name: "Kasza Margó", role: "Office manager" }
          ] },
          { title: "Dentists", people: [
            { photo: "./assets/team-hulik.png", name: "Dr. Hulik Emese", role: "periodontology specialist" },
            { photo: "./assets/team-csernak.png", name: "Dr. Csernák Ádám", role: "dental specialist" },
            { photo: "./assets/team-varga.png", name: "Dr. Varga Márton", role: "dentist" },
            { photo: "./assets/team-borsos.png", name: "Dr. Borsos Gabriella", role: "orthodontic specialist" },
            { photo: "./assets/team-meszarics.png", name: "Dr Meszarics Réka", role: "dentist" }
          ] },
          { title: "Assistants", people: [
            { photo: "./assets/team-szotak.png", name: "Szoták Marietta", role: "Lead dental assistant" },
            { photo: "./assets/team-deme.png", name: "Deme Johanna", role: "dental assistant" },
            { photo: "./assets/team-brosko.png", name: "Broskó Nikolett", role: "dental assistant" }
          ] },
          { title: "Reception", people: [
            { photo: "./assets/team-horvath.png", name: "Horváth Nicolas", role: "Receptionist" },
            { photo: "./assets/team-soltesz.png", name: "Soltész Nola Rea", role: "Receptionist" }
          ] }
        ],
        team: [
          { slot: "ps-dr1", name: "Dr. Balsai Tamás", role: "Director, dental specialist, implantologist", quals: "Implantology" },
          { slot: "ps-dr2", name: "Dr. Hulik Emese", role: "Periodontology specialist", quals: "Periodontology" },
          { slot: "ps-dr3", name: "Dr. Csernák Ádám", role: "Dental specialist", quals: "Dental specialist" },
          { slot: "ps-dr4", name: "Dr. Varga Márton", role: "Dentist", quals: "Dentist" },
          { slot: "ps-dr5", name: "Dr. Borsos Gabriella", role: "Orthodontic specialist", quals: "Orthodontics" },
          { slot: "ps-dr6", name: "Dr Meszarics Réka", role: "Dentist", quals: "Dentist" },
          { slot: "ps-dr7", name: "Dr. Sipos Lili", role: "Periodontology specialist", quals: "Periodontology" },
          { slot: "ps-dr8", name: "Kasza Margó", role: "Office manager", quals: "Office" },
          { slot: "ps-dr9", name: "Szoták Marietta", role: "Lead dental assistant", quals: "Assistant team" },
          { slot: "ps-dr10", name: "Deme Johanna", role: "Dental assistant", quals: "Assistant team" },
          { slot: "ps-dr11", name: "Horváth Nicolas", role: "Receptionist", quals: "Reception" },
          { slot: "ps-dr12", name: "Soltész Nola Rea", role: "Receptionist", quals: "Reception" }
        ],
        trFacts: [
          { k: "Procedure time", v: "Half an hour in simple cases" },
          { k: "Anaesthetic", v: "Full local anaesthetic, sedation on request" },
          { k: "Systems", v: "SGS-Dental, All on Four/Six, Branemark, Nobel Biocare" },
          { k: "Guarantee", v: "SGS implant: 5 years on the material" }
        ],
        steps: [
          { n: "01", title: "Free consultation", text: "At the free consultation we explain the implants, the course of treatment and what to expect afterwards in detail." },
          { n: "02", title: "Bone grafting where needed", text: "Where a tooth was removed long ago or lost to gum disease, there is often not enough bone for the implant. Modern procedures can replace what is missing, and it is necessary for long-term stable support." },
          { n: "03", title: "Placement", text: "The procedure is painless, under full local anaesthetic or, in certain cases, under sedation. In the simplest situation it can be over within half an hour." },
          { n: "04", title: "Healing and restoration", text: "During the healing period implants integrate perfectly into the bone and are able to hold crowns, bridges and dentures securely." }
        ],
        reviews: [
          { initial: "S", who: "Szilvia Szuromi", meta: "Google review · 4 months ago", quote: "Finally a doctor I can talk to about lifestyle factors! Dr. Balsai was direct, friendly and genuinely informative — I'm fully satisfied. The practice is beautiful, with a really pleasant atmosphere." },
          { initial: "I", who: "Ildikó Révai", meta: "Google review · a year ago", quote: "The best dental practice! I had a Hollywood smile done, Dr. Ádám was my dentist. As I'm a fairly difficult patient, every procedure was done under sedation. The result turned out so beautiful I can't stop admiring it." },
          { initial: "A", who: "Anna Jázmin Csukas", meta: "Google review · 4 months ago", quote: "I can only recommend it. I just wish I'd found this practice sooner." },
          { initial: "S", who: "Sándor Saortay", meta: "Google review · a year ago", quote: "A wonderful practice with great, always helpful doctors, assistants and staff. I can only be grateful to them, even in urgent cases." },
          { initial: "I", who: "Ildiko Ocsenas", meta: "Google review · 2 years ago", quote: "Thank you for the professional care! I've been a loyal patient of Dr. Balsai Tamás for 30 years, and the rest of my family now comes to Perfect Smile too. Margó runs the front-of-house team excellently, with a very high standard of service." },
          { initial: "S", who: "Sándor Szeberényi", meta: "Google review · a year ago", quote: "I've been going to Dr. Balsai for 30 years and have recommended his practice to many friends over that time. We always received the best care. His holistic approach also helps uncover other problems." }
        ],
        values: [
          { title: "Fillings: 2 years", text: "Guaranteed, provided you attend the six-monthly check-up." },
          { title: "Zirconia crown: 3 years", text: "Metal-ceramic crowns and ceramic veneers: 2 years, inlays: 2 years." },
          { title: "SGS implant: 5 years", text: "On the implant material; full and partial dentures: 1 year." }
        ],
        posts: [
          { url: "https://drbalsai.hu/rendezveny/rocdumaroc/", cover: "./assets/blog-1.png", cat: "Events", date: "2024-10-14", title: "Dr. Balsai Tamás completed an extreme challenge", excerpt: "At the RocDuMaroc MTB race Dr. Balsai Tamás rode 666 km over six stages in nine days. \"It's only sinking in now — it felt like being pulled into a tornado with six days to get out.\"" },
          { url: "https://drbalsai.hu/altatasos-fogaszat/gyakori-kerdesek-altatasos-fogaszat/", cover: "./assets/blog-2.png", cat: "Sedation blog", date: "2024-03-11", title: "Common questions about sedation dentistry", excerpt: "Thanks to today's dental technology and a constantly developing professional background, saving the tooth is always the first goal. Yet there are situations where a tooth has to be removed." },
          { url: "https://drbalsai.hu/fog-implantatum/fog-implantalas-utan/", cover: "./assets/blog-3.png", cat: "Implant blog", date: "2024-02-08", title: "What to expect after implant placement", excerpt: "In our previous article we answered common questions about implant placement. This time the subject matters to everyone considering an implant: how the wound heals." },
          { url: "https://drbalsai.hu/fog-implantatum/fogaszati-implantalas-kerdesek/", cover: "./assets/blog-4.png", cat: "Implant blog", date: "2023-12-11", title: "Questions surrounding dental implants", excerpt: "An implant offers a stable and aesthetic solution when a tooth needs replacing. It can also help in cases where nothing else would be an option." },
          { url: "https://drbalsai.hu/fog-implantatum/mutet-nelkuli-fog-implantalas/", cover: "./assets/blog-5.png", cat: "Implant blog", date: "2023-10-11", title: "Implant placement without surgery", excerpt: "Flapless — that is, surgery-free — implant placement has long been available at the Perfect Smile clinic. Dr. Balsai Tamás recommends it for every patient where it is possible." },
          { url: "https://drbalsai.hu/fogaszati-hirek/perfect-smile-uj-muto-altatasos-fogaszat/", cover: "./assets/blog-6.png", cat: "News", date: "2023-08-24", title: "Perfect Smile has opened a new operating room", excerpt: "The Perfect Smile clinic recently opened its new operating room, giving treatments under sedation a particularly comfortable setting, with its own room and bathroom." },
          { url: "https://drbalsai.hu/fogaszati-hirek/bator-mosoly-onbizalom/", cover: "./assets/blog-7.png", cat: "News", date: "2023-07-17", title: "Without a confident smile there is no self-confidence", excerpt: "We have reached the last topic tied to the webinar we keep mentioning. This closing part of the series is about another important, widely shared problem: a lack of self-confidence." },
          { url: "https://drbalsai.hu/fogaszati-hirek/cirkadian-ritmus-fogaszati-problemak/", cover: "./assets/blog-8.png", cat: "News", date: "2023-06-20", title: "Dental problems can come and go in phases", excerpt: "Dr. Balsai Tamás is an excellent dentist not only because he does his work well, but because he sees connections a little differently than others might." },
          { url: "https://drbalsai.hu/gyermekfogaszat/gyermek-fogmosas/", cover: "./assets/blog-9.png", cat: "Children's blog", date: "2023-05-23", title: "Children and brushing teeth", excerpt: "Perhaps the subtitle would be more accurate as a question: how do we teach our children — and ourselves — to brush properly?" }
        ],
        podcasts: [
          { title: "The fast that won a Nobel Prize — and will change your body too", source: "Spotify · #balsaidoki", url: "https://open.spotify.com/show/7abizCjzwKncZAB4FozbCj", bg: "#7A1220" },
          { title: "How festive bread became an everyday poison", source: "Spotify · #balsaidoki", url: "https://open.spotify.com/show/7abizCjzwKncZAB4FozbCj", bg: "#7A1220" },
          { title: "Why half the country falls ill, and so few understand why", source: "Spotify · #balsaidoki", url: "https://open.spotify.com/show/7abizCjzwKncZAB4FozbCj", bg: "#7A1220" },
          { title: "The fast that woke up half a million people", source: "Spotify · #balsaidoki", url: "https://open.spotify.com/show/7abizCjzwKncZAB4FozbCj", bg: "#7A1220" },
          { title: "\u201cI love meeting the people who listen to the podcast in person\u201d", source: "Spotify · #balsaidoki", url: "https://open.spotify.com/show/7abizCjzwKncZAB4FozbCj", bg: "#1A1613" },
          { title: "Five days without food, and everything changes", source: "Spotify · #balsaidoki", url: "https://open.spotify.com/show/7abizCjzwKncZAB4FozbCj", bg: "#1A1613" },
          { title: "\u201cThe diagnosis hit me in the face: I have a lung disease\u201d", source: "Spotify · #balsaidoki", url: "https://open.spotify.com/show/7abizCjzwKncZAB4FozbCj", bg: "#1A1613" },
          { title: "\u201cI'm not ashamed — yes, I cried\u201d", source: "Spotify · #balsaidoki", url: "https://open.spotify.com/show/7abizCjzwKncZAB4FozbCj", bg: "#1A1613" }
        ],
        tech: [
          { tag: "CT", text: "CBCT scanning on site, so imaging referrals are rare." },
          { tag: "MIC", text: "Root canal treatment performed under a surgical microscope." },
          { tag: "PRF", text: "A-PRF and I-PRF: bone and membrane grown from your own blood." },
          { tag: "GA", text: "A sedation suite with an anaesthetist for anxious patients." }
        ],
        awards: [
          { name: "CBCT on site", year: "3D imaging, 20.000 Ft" },
          { name: "Microscope endodontics", year: "Since 2016" },
          { name: "A-PRF & I-PRF", year: "Bone from your own blood" },
          { name: "Written guarantee", year: "On every restoration" },
          { name: "Sedation suite", year: "Anaesthetist on call" }
        ],
        priceGroups: [
          { title: "Imaging & consultation", rows: [
            { name: "Dental CT scan (CBCT)", price: "20.000 Ft" },
            { name: "Panoramic X-ray", price: "5.000 Ft" },
            { name: "Orthodontic consultation, first visit", price: "10.000 Ft" },
            { name: "Orthodontic treatment plan", price: "30.000 Ft" }
          ] },
          { title: "Conservative dentistry", rows: [
            { name: "Scaling", price: "25.000 Ft" },
            { name: "Aesthetic filling", price: "30.000 Ft" },
            { name: "Aesthetic filling, multiple surfaces", price: "40.000 Ft" },
            { name: "Teeth whitening", price: "80.000 Ft" },
            { name: "Airflow", price: "10.000 Ft" },
            { name: "Root canal filling", price: "60.000 – 75.000 Ft" },
            { name: "Microscope root canal treatment", price: "75.000 – 120.000 Ft" }
          ] },
          { title: "Prosthetics", rows: [
            { name: "Porcelain inlay / onlay", price: "100.000 Ft" },
            { name: "Porcelain veneer", price: "120.000 Ft" },
            { name: "E-max crown or veneer", price: "120.000 Ft" },
            { name: "Metal-ceramic crown", price: "100.000 Ft" },
            { name: "Zirconia crown", price: "120.000 Ft" },
            { name: "Full denture, per jaw", price: "150.000 Ft" }
          ] },
          { title: "Oral surgery & implants", rows: [
            { name: "Extraction", price: "20.000 Ft" },
            { name: "Wisdom tooth surgery", price: "60.000 Ft" },
            { name: "A-PRF membrane from own blood", price: "150.000 Ft" },
            { name: "SGS-Dental implant", price: "170.000 Ft" },
            { name: "All-on-4 / six implant", price: "220.000 Ft" },
            { name: "Branemark implant", price: "250.000 Ft" },
            { name: "Sinus lifting", price: "200.000 Ft" },
            { name: "General anaesthetic", price: "200.000 Ft" }
          ] },
          { title: "Orthodontics", rows: [
            { name: "Fixed appliance, metal, per jaw", price: "300.000 Ft" },
            { name: "Fixed appliance, aesthetic, per jaw", price: "350.000 Ft" },
            { name: "Simple removable plate", price: "60.000 Ft" },
            { name: "Trainer", price: "50.000 Ft" },
            { name: "Invisalign", price: "1.100.000 – 1.500.000 Ft" },
            { name: "Night bite-raising splint", price: "25.000 Ft" }
          ] }
        ]
      }
    };

  return { T: T, D: D };
})();
