const chatbot = document.querySelector("[data-chatbot]");
const toggle = document.querySelector("[data-chat-toggle]");
const form = document.querySelector("[data-chat-form]");
const input = document.querySelector("[data-chat-input]");
const body = document.querySelector("[data-chat-body]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const siteHeader = document.querySelector(".site-header");
const navLinks = document.querySelector(".nav-links");
const languageLinks = document.querySelectorAll("[data-translate-language]");
const newsletterArchive = document.querySelector("[data-newsletter-archive]");
const newsletterToggle = document.querySelector("[data-newsletter-toggle]");
const sleuthSignup = document.querySelector("[data-sleuth-signup]");
const sleuthSignupLabel = document.querySelector("[data-sleuth-signup-label]");
const policyTabs = document.querySelectorAll("[data-policy-tab]");
const policyPanels = document.querySelectorAll("[data-policy-panel]");
const testimonialCarousel = document.querySelector("[data-testimonial-carousel]");
const chatNudge = document.querySelector("[data-chat-nudge]");
const chatNudgeOpen = document.querySelector("[data-chat-nudge-open]");
const chatNudgeClose = document.querySelector("[data-chat-nudge-close]");
const quickQuestionPanel = document.querySelector(".chat-quick-questions");
const quickQuestionButtons = document.querySelectorAll("[data-chat-question]");
const styledServiceMap = document.querySelector("[data-styled-service-map]");
const serviceMapCityButtons = document.querySelectorAll("[data-map-city]");
const chatNudgeDismissedKey = "bdsSleuthyNudgeDismissed";
const chatCarryoverKey = "bdsSleuthyCarryover";
const chatCarryoverPendingKey = "bdsSleuthyCarryoverPending";

const answers = [
  {
    keys: ["service", "offer", "investigation", "investigations"],
    text: "Blackman Detective Services offers Private Investigation Services including background checks, litigation support, surveillance, workers' compensation investigations, domestic investigations, locating persons, process serving, and insurance-related investigations."
  },
  {
    keys: ["licensed", "license", "state", "states"],
    text: "Blackman Detective Services is licensed in North Carolina and works with reciprocal agreements and affiliations for matters beyond North Carolina when appropriate."
  },
  {
    keys: ["consult", "consultation", "cost", "charge", "price"],
    text: "Initial consultations are free. Each case is evaluated and priced individually based on the scope and needs of the investigation."
  },
  {
    keys: ["police", "Private Investigator"],
    text: "Police generally respond to criminal matters for the public. A Private Investigator focuses on a client's specific needs and works with confidentiality on the client's behalf."
  },
  {
    keys: ["payment", "pay", "invoice", "retainer"],
    text: "You can use the Make a Payment page to continue to the secure payment provider. Payments are processed through the existing secure payment system."
  },
  {
    keys: ["phone", "call", "contact", "email"],
    text: "You can call (919) 821-0016 or email Investigator@blackmanpi.com. Please do not send sensitive case details through the chatbot."
  },
  {
    keys: ["hours", "open", "weekend"],
    text: "Office hours are Monday through Friday, 8:00 a.m. to 5:00 p.m. The inquiry form connects to a 24/7 answering service on weekends and after hours. Investigations may be conducted outside normal business hours."
  },
  {
    keys: ["spanish", "español", "language"],
    text: "Use the Español link at the top of the page to translate the site. You can also work with a Spanish-speaking team member when discussing your needs or scheduling a consultation."
  },
  {
    keys: ["address", "location", "where"],
    text: "Blackman Detective Services is located at 4208 Six Forks Rd Suite 1000, Raleigh, NC 27609, and serves clients across North Carolina."
  }
];

const siteKnowledge = [
  {
    title: "Services overview",
    page: "Services",
    keywords: ["services", "offer", "investigations", "Private Investigator", "investigative services"],
    text: "Blackman Detective Services is a multi-disciplined Private Investigation Firm offering liability investigations, background checks, litigation support, asset research, child custody and special investigations, criminal defense investigations, criminal investigations, disability claims investigations, domestic investigations, due diligence, insurance case surveillance, jury panel research, locating persons, personal injury investigations, process serving, property and casualty insurance claims investigation, statements, surveillance, telephone number identification, and workers' compensation investigations."
  },
  {
    title: "Asset research",
    page: "Services",
    keywords: ["asset", "property", "vehicle", "bankruptcy", "lien", "judgment"],
    text: "Asset research can include property and vehicle information, plus research into bankruptcies, liens, and judgments."
  },
  {
    title: "Background checks",
    page: "Services",
    keywords: ["background", "civil", "criminal", "dmv", "employment", "education", "credit", "resume"],
    text: "Background checks may include civil and criminal checks, North Carolina and nationwide searches, DMV record searches, resume, education, and employment verification, credit histories with authorization, social security number verification, death index searches, marriage records, and corporation or partnership affiliations."
  },
  {
    title: "Child custody and special investigations",
    page: "Services",
    keywords: ["child custody", "custody", "special investigation"],
    text: "Blackman Detective Services provides thorough investigations relevant to custody matters and comprehensive special investigations tailored to the client's needs."
  },
  {
    title: "Court testimony",
    page: "Services",
    keywords: ["court", "testimony", "legal proceeding", "trial"],
    text: "Investigators can make appearances for court testimony at legal proceedings."
  },
  {
    title: "Criminal defense investigations",
    page: "Services",
    keywords: ["criminal defense", "misdemeanor", "felony", "criminal case"],
    text: "The firm has experience with criminal defense investigations, from simple misdemeanors to complex felony cases."
  },
  {
    title: "Criminal investigations",
    page: "Services",
    keywords: ["criminal", "witness", "evidence", "prosecution"],
    text: "Criminal investigation work can include searching for potential witnesses, testing witness reliability, examining the histories of people involved in crimes, and assisting in determining the strength of evidence for prosecution."
  },
  {
    title: "Disability claims investigations",
    page: "Services",
    keywords: ["disability", "claim", "claimant", "condition"],
    text: "Disability claims investigations can provide information on a claimant's present activities, recovery, and progress."
  },
  {
    title: "Domestic investigations",
    page: "Services",
    keywords: ["domestic", "spouse", "cheating", "family"],
    text: "Domestic investigations are handled with sensitivity, discretion, and an understanding of the legal issues involved."
  },
  {
    title: "Due diligence",
    page: "Services",
    keywords: ["due diligence", "partnership", "acquisition", "business"],
    text: "Due diligence work can support partnerships, acquisitions, and other business research needs."
  },
  {
    title: "Insurance case surveillance",
    page: "Services",
    keywords: ["insurance", "surveillance", "claim", "video", "camcorder"],
    text: "Insurance case surveillance is handled with proven methods designed to maximize results and minimize costs."
  },
  {
    title: "Jury panel research",
    page: "Services",
    keywords: ["jury", "panel", "trial attorney", "juror"],
    text: "Jury panel research can compile background information on jury panel members, including affiliations, memberships, police or arrest records, accident histories, lawsuit histories, and other information depending on the case."
  },
  {
    title: "Liability investigations",
    page: "Services",
    keywords: ["liability", "accident", "medical malpractice", "product liability", "fire", "explosion", "injury"],
    text: "Liability investigations can involve accidents related to automobiles, medical malpractice, airplanes, product liability, fires, explosions, falls, falling objects, gunshots, motorcycles, and other injury or property matters."
  },
  {
    title: "Litigation support",
    page: "Services",
    keywords: ["litigation", "attorney", "legal support", "anti-trust"],
    text: "Litigation support ranges from simple due diligence matters to complex litigation support needs."
  },
  {
    title: "Locating persons",
    page: "Services",
    keywords: ["locate person", "locating persons", "missing person", "find someone", "witness", "debtor", "victim", "old friend", "serve"],
    text: "The firm can help locate victims, missing persons, witnesses, debtors, old friends, college sweethearts, and others. Once a person is located, the firm can serve legal documents."
  },
  {
    title: "Personal injury investigations",
    page: "Services",
    keywords: ["personal injury", "injury", "loss of earnings", "physical loss"],
    text: "Personal injury investigations can address loss of earnings, personality changes, physical losses, and other losses."
  },
  {
    title: "Process serving",
    page: "Services",
    keywords: ["process serving", "serve", "civil papers", "legal papers", "documents"],
    text: "Blackman Detective Services can serve civil and legal papers pursuant to North Carolina Rules of Civil Procedure and can coordinate service of process worldwide."
  },
  {
    title: "Property and casualty insurance claims",
    page: "Services",
    keywords: ["property", "casualty", "insurance claim"],
    text: "Property and casualty insurance claims investigations go beyond basic checks to uncover details that may have been overlooked in an initial investigation."
  },
  {
    title: "Statements",
    page: "Services",
    keywords: ["statement", "interview", "audio", "video", "recording"],
    text: "The firm provides interviews documented through written, audio, and/or video recording of statements for legal or other proceedings."
  },
  {
    title: "Surveillance",
    page: "Services",
    keywords: ["surveillance", "gps", "tracking", "physical surveillance"],
    text: "Surveillance services use proven methods ranging from physical surveillance to GPS tracking to maximize results and help with cost containment."
  },
  {
    title: "Telephone number identification",
    page: "Services",
    keywords: ["telephone", "phone bill", "cell phone bill", "number", "calling"],
    text: "Telephone services can help identify unknown numbers appearing on a telephone or cell phone bill."
  },
  {
    title: "Workers' compensation investigations",
    page: "Services",
    keywords: ["workers compensation", "worker's compensation", "claimant", "accident", "claim history"],
    text: "Workers' compensation investigations can include background investigation profiles, accident-circumstance investigation, verification of activities, previous claim histories where available, interviews, written/audio/video statements, documentation, and testimony in legal proceedings."
  },
  {
    title: "What is a Private Investigator?",
    page: "FAQ",
    keywords: ["what is Private Investigator", "Private Investigator", "definition"],
    text: "A Private Investigator makes inquiries or investigations on a contractual basis concerning crimes or wrongs, identity and conduct, location or recovery of property, causes of losses or injuries, evidence for proceedings, and protection of individuals from serious harm."
  },
  {
    title: "Licensing and reciprocity",
    page: "FAQ",
    keywords: ["licensed", "license", "reciprocity", "temporary permit", "state"],
    text: "Blackman Detective Services is licensed in North Carolina. Reciprocity may allow licensed private protective services work in other states when requirements are met, and temporary permits may apply for specific cases originating in another state."
  },
  {
    title: "Private Investigator versus police",
    page: "FAQ",
    keywords: ["police", "Private Investigator", "confidential", "civil"],
    text: "Police do not normally get involved in civil matters unless a crime has been committed. A Private Investigator focuses on the client's particular needs and operates with complete confidentiality on the client's behalf."
  },
  {
    title: "When to hire a Private Investigator",
    page: "FAQ",
    keywords: ["hire", "situations", "warrant", "domestic", "missing", "background", "workers compensation"],
    text: "Situations that may warrant hiring a Private Investigator include domestic investigations, missing persons, criminal activity, employment background checks, DMV record checks, and workers' compensation investigations."
  },
  {
    title: "Consultation and pricing",
    page: "FAQ",
    keywords: ["price", "pricing", "charge", "cost", "consultation", "free"],
    text: "Each case is evaluated and priced on an individual basis. The initial consultation is free."
  },
  {
    title: "Contact and answering service",
    page: "Contact",
    keywords: ["contact", "phone", "email", "answering service", "after hours", "weekend", "hours"],
    text: "Call (919) 821-0016 or email Investigator@blackmanpi.com. Office hours are Monday-Friday, 8:00 a.m.-5:00 p.m. The inquiry form connects to a 24/7 answering service on weekends and after hours. Investigations are conducted as needed beyond normal business hours."
  },
  {
    title: "Address and service area",
    page: "Contact",
    keywords: ["address", "location", "located", "office", "where are they", "raleigh", "service area", "durham", "cary", "chapel hill", "apex", "wake forest"],
    text: "Blackman Detective Services is located at 4208 Six Forks Rd Suite 1000, Raleigh, NC 27609. The firm serves Raleigh, Durham, Cary, Chapel Hill, Apex, Wake Forest, and clients across North Carolina."
  },
  {
    title: "Payments",
    page: "Payments",
    keywords: ["payment", "pay", "invoice", "credit card", "ach", "bank account"],
    text: "Use the payment page to pay an invoice for Blackman Detective Services. Payment options include credit card and ACH through the firm's existing secure payment provider."
  },
  {
    title: "Payment privacy",
    page: "Payments",
    keywords: ["payment privacy", "privacy", "personally identifiable information", "sell"],
    text: "Blackman Detective Services respects and is committed to protecting your privacy. The site will not sell personally identifiable information."
  },
  {
    title: "Payment security",
    page: "Payments",
    keywords: ["payment security", "security", "tls", "credit card", "encrypted"],
    text: "Payment and personal information is protected by Transport Layer Security (TLS), and credit card information is encrypted when sent over the Internet."
  },
  {
    title: "Refund policy",
    page: "Payments",
    keywords: ["refund", "refund policy", "money back"],
    text: "Blackman Detective Services does not offer refunds, and contact information is provided for feedback."
  },
  {
    title: "The Sleuth",
    page: "The Sleuth",
    keywords: ["sleuth", "podcast", "newsletter", "archive", "little red flags", "subscribe"],
    text: "The Sleuth page includes the podcast, newsletter signup, newsletter archive, links to podcast platforms, and a featured video interview with BDS investigators on The Guys Who Do Stuff Podcast."
  },
  {
    title: "Ownership",
    page: "About",
    keywords: ["minority owned", "minority-owned", "woman owned", "woman-owned", "female owned", "owner", "jamie mitchell"],
    text: "Blackman Detective Services was re-introduced as woman- and minority-owned in 2019 when it was purchased by licensed Private Investigator and bondsman Jamie Mitchell."
  },
  {
    title: "Privacy policy",
    page: "Privacy Policy",
    keywords: ["privacy policy", "cookies", "third party links", "children privacy"],
    text: "The privacy policy explains collection of information, use of information, protection of information, disclosure of information, cookies, third-party links, children's privacy, and policy updates."
  }
];

window.googleTranslateElementInit = function googleTranslateElementInit() {
  if (!window.google || !window.google.translate) return;
  new window.google.translate.TranslateElement({
    pageLanguage: "en",
    includedLanguages: "en,es",
    autoDisplay: false
  }, "google_translate_element");
};

function getTranslationLanguage() {
  const match = document.cookie.match(/(?:^|; )googtrans=([^;]+)/);
  if (!match) return "en";
  return decodeURIComponent(match[1]).includes("/es") ? "es" : "en";
}

function setTranslationCookie(language) {
  const host = window.location.hostname;
  if (language === "en") {
    document.cookie = "googtrans=; path=/; max-age=0";
    document.cookie = "googtrans=/en/en; path=/; max-age=1";
    if (host && host !== "localhost" && host !== "127.0.0.1") {
      document.cookie = `googtrans=; path=/; domain=.${host}; max-age=0`;
      document.cookie = `googtrans=/en/en; path=/; domain=.${host}; max-age=1`;
    }
    return;
  }

  const value = "/en/es";
  document.cookie = `googtrans=${value}; path=/`;
  if (host && host !== "localhost" && host !== "127.0.0.1") {
    document.cookie = `googtrans=${value}; path=/; domain=.${host}`;
  }
}

function updateLanguageLinks() {
  const currentLanguage = getTranslationLanguage();
  languageLinks.forEach((link) => {
    const label = link.dataset.translateLanguage === "es" ? "Español" : "English";
    if (link.textContent !== label) link.textContent = label;
    link.hidden = link.dataset.translateLanguage === currentLanguage;
  });
}

const pageLinks = {
  "Home": "",
  "Services": "services",
  "About": "about",
  "FAQ": "faq",
  "Contact": "contact",
  "Payments": "payments",
  "The Sleuth": "the-sleuth",
  "Privacy Policy": "privacy-policy"
};

function pageHref(page) {
  const slug = Object.prototype.hasOwnProperty.call(pageLinks, page) ? pageLinks[page] : page;
  if (slug === undefined || slug === null) return "";
  const script = document.currentScript || Array.from(document.scripts).find((item) => {
    const src = item.getAttribute("src") || "";
    return src.includes("script.js");
  });
  const scriptSrc = script ? script.getAttribute("src") || "" : "";
  let prefix = "";
  if (scriptSrc.startsWith("../../")) prefix = "../../";
  else if (scriptSrc.startsWith("../")) prefix = "../";
  if (slug === "") return prefix || "index.html";
  return `${prefix}${slug}`;
}

function addMessage(content, type = "bot") {
  if (!body) return;
  const message = document.createElement("div");
  message.className = `chat-message ${type}`;
  const text = typeof content === "string" ? content : content.text;
  message.textContent = text;

  if (typeof content === "object" && content.href && content.label) {
    const link = document.createElement("a");
    link.className = "chat-message-link";
    link.href = content.href;
    link.textContent = content.label;
    message.appendChild(link);
  }

  body.appendChild(message);
  body.scrollTop = body.scrollHeight;
}

function scrollChatToBottom() {
  if (!body) return;
  window.requestAnimationFrame(() => {
    body.scrollTop = body.scrollHeight;
  });
}

function hasActiveChatConversation() {
  if (!body) return false;
  return body.querySelectorAll(".chat-message").length > 1 || Boolean(body.querySelector(".chat-message.user"));
}

function placeQuickQuestions() {
  if (!body || !quickQuestionPanel) return;
  const firstMessage = body.querySelector(".chat-message");
  if (firstMessage) {
    firstMessage.insertAdjacentElement("afterend", quickQuestionPanel);
    return;
  }
  body.appendChild(quickQuestionPanel);
}

placeQuickQuestions();

function readChatMessages() {
  if (!body) return [];
  return Array.from(body.querySelectorAll(".chat-message")).map((message) => {
    const link = message.querySelector(".chat-message-link");
    const textNode = Array.from(message.childNodes).find((node) => node.nodeType === Node.TEXT_NODE);
    const item = {
      type: message.classList.contains("user") ? "user" : "bot",
      text: textNode ? textNode.textContent : message.textContent
    };

    if (link) {
      item.href = link.getAttribute("href") || "";
      item.label = link.textContent;
    }

    return item;
  });
}

function saveChatCarryover() {
  sessionStorage.setItem(chatCarryoverKey, JSON.stringify(readChatMessages()));
  sessionStorage.setItem(chatCarryoverPendingKey, "true");
}

function restoreChatCarryover() {
  if (!body || sessionStorage.getItem(chatCarryoverPendingKey) !== "true") return;

  const navigationEntry = performance.getEntriesByType("navigation")[0];
  if (navigationEntry && navigationEntry.type === "reload") {
    sessionStorage.removeItem(chatCarryoverKey);
    sessionStorage.removeItem(chatCarryoverPendingKey);
    return;
  }

  try {
    const messages = JSON.parse(sessionStorage.getItem(chatCarryoverKey) || "[]");
    if (!Array.isArray(messages) || !messages.length) return;
    body.innerHTML = "";
    messages.forEach((message) => {
      addMessage(message.href && message.label
        ? { text: message.text, href: message.href, label: message.label }
        : message.text, message.type);
    });
    placeQuickQuestions();
    scrollChatToBottom();
  } catch (error) {
    sessionStorage.removeItem(chatCarryoverKey);
    sessionStorage.removeItem(chatCarryoverPendingKey);
  }
}

restoreChatCarryover();

if (styledServiceMap && window.L) {
  const styledServiceMapOption = styledServiceMap.closest(".service-map-option");
  const serviceCities = [
    ["Raleigh", "Triangle", "Raleigh-based Private Investigation support for law firms, insurers, businesses, and individuals.", 35.7796, -78.6382, "assets/raleigh-skyline-hero.png"],
    ["Cary", "Wake County", "Private Investigation Services available for Cary and nearby Wake County communities.", 35.7915, -78.7811, "assets/cities/cary.jpg"],
    ["Durham", "Triangle", "Professional investigative support for Durham clients, attorneys, insurers, and businesses.", 35.9940, -78.8986, "assets/cities/durham.jpg"],
    ["Chapel Hill", "Triangle", "Discreet Private Investigation support for Chapel Hill and surrounding Orange County communities.", 35.9132, -79.0558, "assets/cities/chapel-hill.webp"],
    ["Wake Forest", "Wake County", "Private Investigation Services for Wake Forest and northern Wake County matters.", 35.9799, -78.5097, "assets/cities/wake-forest.jpg"],
    ["Clayton", "Johnston County", "Investigative support for Clayton, Johnston County, and nearby communities.", 35.6507, -78.4564, "assets/cities/clayton.jpg"],
    ["Wendell", "Wake County", "Private Investigation support for Wendell and eastern Wake County.", 35.7807, -78.3697, "assets/cities/wendell.jpg"],
    ["Zebulon", "Wake County", "Investigative services available for Zebulon and nearby eastern Wake County communities.", 35.8243, -78.3147, "assets/cities/zebulon.webp"],
    ["Greenville", "Eastern North Carolina", "Private Investigation Services for Greenville and eastern North Carolina matters when appropriate.", 35.6127, -77.3664, "assets/cities/greenville.jpg"],
    ["Fayetteville", "Sandhills", "Investigative support for Fayetteville and surrounding Sandhills communities.", 35.0527, -78.8784, "assets/cities/fayetteville.webp"],
    ["Greensboro", "Triad", "Private Investigation support for Greensboro, the Triad, and related legal or insurance matters.", 36.0726, -79.7920, "assets/cities/greensboro.jpg"],
    ["Burlington", "Piedmont", "Investigative services available for Burlington and surrounding Piedmont communities.", 36.0957, -79.4378, "assets/cities/burlington.jpg"],
    ["Rocky Mount", "Eastern North Carolina", "Private Investigation support for Rocky Mount and nearby eastern North Carolina communities.", 35.9382, -77.7905, "assets/cities/rocky-mount.jpg"],
    ["Henderson", "Northern North Carolina", "Investigative services available for Henderson and surrounding northern North Carolina communities.", 36.3296, -78.3992, "assets/cities/henderson.jpg"]
  ];

  const serviceMarkers = new Map();
  const serviceIcon = window.L.divIcon({
    className: "service-map-marker",
    html: "<span></span>",
    iconSize: [34, 34],
    iconAnchor: [17, 17],
    popupAnchor: [0, -18]
  });

  const addServiceMarkers = (map) => {
    serviceCities.forEach(([city, region, copy, lat, lng, image]) => {
      const marker = window.L.marker([lat, lng], { icon: serviceIcon, title: city })
        .addTo(map)
        .bindPopup(`
        <div class="service-map-popup">
          ${image ? `<img class="map-city-photo" src="${image}" alt="${city} city view" loading="lazy">` : `<div class="map-skyline" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span></div>`}
          <small>${region}</small>
          <strong>${city}</strong>
          <p>${copy}</p>
          <a href="${pageHref("Contact")}">Free Consultation</a>
        </div>
      `);
      serviceMarkers.set(city, marker);
    });

    const bounds = window.L.latLngBounds(serviceCities.map((city) => [city[3], city[4]]));
    map.fitBounds(bounds, { padding: [32, 32] });
    return bounds;
  };

  if (styledServiceMap && window.L.maplibreGL) {
    const styledMap = window.L.map(styledServiceMap, {
      scrollWheelZoom: false,
      zoomControl: true,
      attributionControl: false
    }).setView([35.72, -78.58], 7);

    window.L.control.attribution({
      prefix: false
    }).addTo(styledMap);

    window.L.maplibreGL({
      style: "https://tiles.openfreemap.org/styles/liberty",
      attribution: "OpenFreeMap | OpenStreetMap contributors"
    }).addTo(styledMap);

    const initialBounds = addServiceMarkers(styledMap);
    let resetMapTimeout;
    let popupIsOpen = false;
    const makeMapAttributionPlainText = () => {
      styledServiceMap.querySelectorAll(".leaflet-control-attribution a").forEach((link) => {
        link.replaceWith(document.createTextNode(link.textContent || ""));
      });
    };
    const attributionObserver = new MutationObserver(makeMapAttributionPlainText);

    makeMapAttributionPlainText();
    attributionObserver.observe(styledServiceMap, { childList: true, subtree: true });
    styledMap.on("layeradd moveend zoomend", makeMapAttributionPlainText);

    const setActiveMapCity = (cityName = "") => {
      serviceMapCityButtons.forEach((button) => {
        const isActive = button.dataset.mapCity === cityName;
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-pressed", isActive ? "true" : "false");
      });
    };

    setActiveMapCity();

    const resetStyledMap = (delay = 80) => {
      window.clearTimeout(resetMapTimeout);
      resetMapTimeout = window.setTimeout(() => {
        styledMap.fitBounds(initialBounds, { padding: [32, 32], animate: true, duration: 0.45 });
      }, delay);
    };

    styledMap.on("popupopen", (event) => {
      const popupSource = event.popup && event.popup._source;
      popupIsOpen = true;
      if (styledServiceMapOption) styledServiceMapOption.classList.add("is-popup-open");
      setActiveMapCity((popupSource && popupSource.options && popupSource.options.title) || "");
      window.clearTimeout(resetMapTimeout);
    });

    styledMap.on("popupclose", () => {
      popupIsOpen = false;
      if (styledServiceMapOption) styledServiceMapOption.classList.remove("is-popup-open");
      window.clearTimeout(resetMapTimeout);
      resetMapTimeout = window.setTimeout(() => {
        if (!popupIsOpen) {
          setActiveMapCity();
          resetStyledMap(0);
        }
      }, 140);
    });

    styledMap.on("click", (event) => {
      const originalTarget = event.originalEvent && event.originalEvent.target;
      if (
        originalTarget &&
        (originalTarget.closest(".leaflet-marker-icon") || originalTarget.closest(".leaflet-popup"))
      ) {
        return;
      }
      styledMap.closePopup();
      popupIsOpen = false;
      if (styledServiceMapOption) styledServiceMapOption.classList.remove("is-popup-open");
      setActiveMapCity();
      resetStyledMap();
    });

    serviceMapCityButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        const marker = serviceMarkers.get(button.dataset.mapCity);
        if (!marker) return;
        popupIsOpen = true;
        setActiveMapCity(button.dataset.mapCity);
        window.clearTimeout(resetMapTimeout);
        styledMap.setView(marker.getLatLng(), Math.max(styledMap.getZoom(), 8), { animate: true });
        marker.openPopup();
      });
    });

    document.addEventListener("click", (event) => {
      if (!styledServiceMap.contains(event.target) && !event.target.closest("[data-map-city]")) {
        styledMap.closePopup();
        popupIsOpen = false;
        if (styledServiceMapOption) styledServiceMapOption.classList.remove("is-popup-open");
        setActiveMapCity();
        resetStyledMap();
      }
    });
  }
}

function normalizeText(value) {
  return value
    .toLowerCase()
    .replace(/[^\w\s'-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenize(value) {
  const stopwords = new Set([
    "a", "about", "an", "and", "are", "as", "at", "be", "by", "can", "could", "do", "does", "for", "from", "how", "i", "in", "is", "it", "me", "my", "of", "on", "or", "should", "that", "the", "their", "they", "this", "to", "what", "when", "where", "who", "why", "with", "you", "your"
  ]);
  return normalizeText(value)
    .split(" ")
    .filter((word) => word.length > 2 && !stopwords.has(word));
}

function scoreKnowledgeItem(question, item) {
  const normalizedQuestion = normalizeText(question);
  const tokens = tokenize(question);
  const searchableTitle = normalizeText(item.title);
  const searchableKeywords = normalizeText((item.keywords || []).join(" "));
  const searchableText = normalizeText(item.text);
  let score = 0;

  (item.keywords || []).forEach((keyword) => {
    if (normalizedQuestion.includes(normalizeText(keyword))) score += 6;
  });

  tokens.forEach((token) => {
    if (searchableTitle.includes(token)) score += 4;
    if (searchableKeywords.includes(token)) score += 3;
    if (searchableText.includes(token)) score += 1;
  });

  return score;
}

function searchSiteKnowledge(question) {
  const generatedIndex = Array.isArray(window.BDS_SEARCH_INDEX) ? window.BDS_SEARCH_INDEX : [];
  const searchableKnowledge = generatedIndex.length ? generatedIndex.concat(siteKnowledge) : siteKnowledge;

  return searchableKnowledge
    .map((item) => ({ ...item, score: scoreKnowledgeItem(question, item) }))
    .filter((item) => item.score >= 5)
    .sort((a, b) => b.score - a.score)[0];
}

function hasAny(value, terms) {
  return terms.some((term) => value.includes(term));
}

function answerFor(value) {
  const question = value.toLowerCase();
  const unsafe = ["ssn", "social security", "case details", "case number", "credit card number", "card number", "home address", "date of birth", "bank account"];
  if (unsafe.some((word) => question.includes(word))) {
    return "For privacy, please do not share personal information or case details here. Call (919) 821-0016 or email Investigator@blackmanpi.com for next steps.";
  }

  const asksAboutUnknownNumber = hasAny(question, ["phone bill", "cell phone", "unknown number", "identify", "telephone number"]);

  if (hasAny(question, ["license", "licensed", "license number"])) {
    return {
      text: "Blackman Detective Services is a licensed North Carolina Private Investigation Firm. License #5388.",
      href: pageHref("About"),
      label: "View About"
    };
  }

  if (asksAboutUnknownNumber) {
    return {
      text: "Blackman Detective Services can help identify unknown numbers appearing on a telephone or cell phone bill.",
      href: pageHref("Services"),
      label: "View Services"
    };
  }

  if (hasAny(question, ["phone", "phone number", "call", "number"])) {
    return {
      text: "Blackman Detective Services phone number is (919) 821-0016. Please do not share sensitive case details through the chatbot.",
      href: pageHref("Contact"),
      label: "Free Consultation"
    };
  }

  if (question.includes("email")) {
    return {
      text: "You can email Blackman Detective Services at Investigator@blackmanpi.com. Please do not send sensitive case details through the chatbot.",
      href: pageHref("Contact"),
      label: "Free Consultation"
    };
  }

  if (hasAny(question, ["contact", "consultation", "consult"])) {
    return {
      text: "You can call (919) 821-0016, email Investigator@blackmanpi.com, or use the inquiry form to request a free consultation.",
      href: pageHref("Contact"),
      label: "Free Consultation"
    };
  }

  if (hasAny(question, ["hours", "open", "weekend", "after hours", "after-hours"])) {
    return {
      text: "Office hours are Monday through Friday, 8:00 a.m. to 5:00 p.m. The inquiry form connects to a 24/7 answering service on weekends and after hours.",
      href: pageHref("Contact"),
      label: "Free Consultation"
    };
  }

  if (hasAny(question, ["address", "location", "where are you", "where is"])) {
    return {
      text: "Blackman Detective Services is located at 4208 Six Forks Rd Suite 1000, Raleigh, NC 27609.",
      href: pageHref("Contact"),
      label: "Free Consultation"
    };
  }

  if (hasAny(question, ["out of state", "out-of-state", "outside north carolina", "outside of north carolina", "another state", "other state", "other states", "different state", "south carolina", "sc", "virginia", "georgia", "tennessee", "cases in other states", "case in another state", "work in other states", "work outside nc", "reciprocity", "subcontract", "subcontractor", "subcontractors", "case originates", "case originated", "originates in north carolina", "originated in north carolina"])) {
    return {
      text: "If a case originates in North Carolina, Blackman Detective Services may be able to continue supporting that matter beyond North Carolina. For matters based in another state, the team may coordinate with or subcontract an investigator where appropriate.",
      href: pageHref("Contact"),
      label: "Free Consultation"
    };
  }

  if (hasAny(question, ["service area", "service areas", "serving area", "areas do you serve", "area do you serve", "where do you serve", "where do you service", "areas served", "cities", "raleigh", "durham", "cary", "chapel hill", "wake forest", "clayton", "wendell", "zebulon", "greenville", "fayetteville", "greensboro", "burlington", "rocky mount", "henderson", "north carolina"])) {
    return {
      text: "Blackman Detective Services is based in Raleigh and serves Cary, Durham, Chapel Hill, Wake Forest, Clayton, Wendell, Zebulon, Greenville, Fayetteville, Greensboro, Burlington, Rocky Mount, Henderson, and surrounding North Carolina communities.",
      href: pageHref("Contact"),
      label: "Free Consultation"
    };
  }

  if (hasAny(question, ["cost", "price", "pricing", "rate", "rates", "fee", "fees", "quote", "estimate"])) {
    return {
      text: "Initial consultations are free. Each case is evaluated and priced individually based on the scope and needs of the investigation.",
      href: pageHref("Contact"),
      label: "Free Consultation"
    };
  }

  if (hasAny(question, ["pay", "payment", "invoice", "retainer", "credit card", "card payment", "ach", "bank account"])) {
    return {
      text: "Use the payments page to pay an invoice for Blackman Detective Services by credit card or ACH.",
      href: pageHref("Payments"),
      label: "View Payments"
    };
  }

  if (hasAny(question, ["refund", "refunds", "money back"])) {
    return {
      text: "Blackman Detective Services does not offer refunds, and contact information is provided for feedback.",
      href: pageHref("Payments"),
      label: "View Payments"
    };
  }

  if (hasAny(question, ["privacy", "privacy policy", "personal information", "cookies"])) {
    return {
      text: "The privacy policy explains how Blackman Detective Services handles personal information, cookies, third-party links, children's privacy, and policy updates.",
      href: pageHref("Privacy Policy"),
      label: "View Privacy Policy"
    };
  }

  if (hasAny(question, ["spanish", "español", "espanol", "translate", "language"])) {
    return {
      text: "Use the Español link at the top of the page to translate the site. You can also work with a Spanish-speaking team member when discussing your needs or scheduling a consultation.",
      href: pageHref("Contact"),
      label: "Free Consultation"
    };
  }

  if (hasAny(question, ["faq", "frequently asked", "common questions"])) {
    return {
      text: "The FAQ page answers common questions about Private Investigators, consultations, confidentiality, licensing, case timing, and payment options.",
      href: pageHref("FAQ"),
      label: "View FAQ"
    };
  }

  if (hasAny(question, ["podcast", "the sleuth", "newsletter", "archive", "little red flags", "subscribe", "apple podcast", "spotify", "amazon music"])) {
    return {
      text: "The Sleuth page includes the podcast, newsletter signup, newsletter archive, podcast platform links, and a featured video interview.",
      href: pageHref("The Sleuth"),
      label: "View The Sleuth"
    };
  }

  if (hasAny(question, ["review", "reviews", "testimonial", "testimonials"])) {
    return {
      text: "Client testimonials are featured on the website once approved review text is available.",
      href: pageHref("Home"),
      label: "View Home"
    };
  }

  if (hasAny(question, ["background check", "background checks", "criminal check", "criminal checks", "record search", "dmv", "employment verification", "education verification"])) {
    return {
      text: "Blackman Detective Services provides background checks, including civil and criminal checks, DMV record searches, employment verification, education verification, and related research where appropriate.",
      href: pageHref("Services"),
      label: "View Services"
    };
  }

  if (hasAny(question, ["surveillance", "gps", "tracking", "watch someone"])) {
    return {
      text: "Blackman Detective Services conducts surveillance using proven methods, including physical surveillance and GPS tracking where appropriate.",
      href: pageHref("Services"),
      label: "View Services"
    };
  }

  if (hasAny(question, ["workers compensation", "worker's compensation", "workers comp", "claimant", "claim history"])) {
    return {
      text: "Workers' compensation investigations can include background profiles, accident-circumstance investigation, activity verification, previous claim histories where available, statements, documentation, and testimony.",
      href: pageHref("Services"),
      label: "View Services"
    };
  }

  if (hasAny(question, ["child custody", "domestic", "infidelity", "cheating", "spouse"])) {
    return {
      text: "Blackman Detective Services handles domestic investigations, including child custody matters and other sensitive personal investigations, with discretion.",
      href: pageHref("Services"),
      label: "View Services"
    };
  }

  if (hasAny(question, ["missing person", "missing persons", "locate", "find someone", "find a person", "witness", "debtor"])) {
    return {
      text: "Blackman Detective Services can help locate victims, missing persons, witnesses, debtors, old friends, and others.",
      href: pageHref("Services"),
      label: "View Services"
    };
  }

  if (hasAny(question, ["process serving", "serve papers", "serve documents", "legal papers", "civil papers"])) {
    return {
      text: "Blackman Detective Services can serve civil and legal papers pursuant to North Carolina Rules of Civil Procedure and can coordinate service of process worldwide.",
      href: pageHref("Services"),
      label: "View Services"
    };
  }

  if (hasAny(question, ["litigation", "attorney", "law firm", "court", "statement", "statements", "jury", "trial"])) {
    return {
      text: "Blackman Detective Services provides litigation support, statements, jury panel research, court testimony, and other investigative support for legal matters.",
      href: pageHref("Services"),
      label: "View Services"
    };
  }

  if (hasAny(question, ["insurance", "liability", "claim", "claims", "accident", "injury", "property", "casualty"])) {
    return {
      text: "Blackman Detective Services handles insurance-related investigations, including liability matters, property and casualty claims, workers' compensation issues, and related research.",
      href: pageHref("Services"),
      label: "View Services"
    };
  }

  if (hasAny(question, ["services", "service", "offer", "do you do", "what do you do"])) {
    return {
      text: "Blackman Detective Services offers Private Investigation Services including background checks, litigation support, surveillance, workers' compensation investigations, domestic investigations, locating persons, process serving, and insurance-related investigations.",
      href: pageHref("Services"),
      label: "View Services"
    };
  }

  if (question.includes("minority owned") || question.includes("minority-owned") || question.includes("woman owned") || question.includes("woman-owned")) {
    return {
      text: "Blackman Detective Services was re-introduced as woman- and minority-owned in 2019 when it was purchased by licensed Private Investigator and bondsman Jamie Mitchell.",
      href: pageHref("About"),
      label: "View About"
    };
  }

  const knowledgeMatch = searchSiteKnowledge(value);
  if (knowledgeMatch) {
    return {
      text: knowledgeMatch.text,
      href: pageHref(Object.prototype.hasOwnProperty.call(knowledgeMatch, "path") ? knowledgeMatch.path : knowledgeMatch.page),
      label: knowledgeMatch.label || `View ${knowledgeMatch.page}`
    };
  }

  const match = answers.find((item) => item.keys.some((key) => question.includes(key)));
  return match ? match.text : "I can answer general questions about services, payments, FAQs, hours, licensing, and contact options. For specific case guidance, please call or email Blackman Detective Services directly.";
}

if (toggle && chatbot) {
  const dismissChatNudge = () => {
    if (chatNudge) chatNudge.hidden = true;
    sessionStorage.setItem(chatNudgeDismissedKey, "true");
  };

  if (chatNudge) {
    const navigationEntry = performance.getEntriesByType("navigation")[0];
    if (navigationEntry && navigationEntry.type === "reload") {
      sessionStorage.removeItem(chatNudgeDismissedKey);
    } else if (sessionStorage.getItem(chatNudgeDismissedKey) === "true") {
      chatNudge.hidden = true;
    }

    window.addEventListener("pagehide", () => {
      sessionStorage.setItem(chatNudgeDismissedKey, "true");
    });
  }

  toggle.addEventListener("click", (event) => {
    event.stopPropagation();
    dismissChatNudge();
    chatbot.classList.toggle("open");
    if (chatbot.classList.contains("open") && hasActiveChatConversation()) scrollChatToBottom();
  });

  if (chatNudgeOpen) {
    chatNudgeOpen.addEventListener("click", (event) => {
      event.stopPropagation();
      dismissChatNudge();
      chatbot.classList.add("open");
      if (hasActiveChatConversation()) scrollChatToBottom();
      if (input) input.focus();
    });
  }

  if (chatNudgeClose) {
    chatNudgeClose.addEventListener("click", (event) => {
      event.stopPropagation();
      dismissChatNudge();
    });
  }

  chatbot.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  document.addEventListener("click", () => {
    chatbot.classList.remove("open");
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      chatbot.classList.remove("open");
    }
  });
}

if (navLinks) {
  const currentPath = window.location.pathname.replace(/\/$/, "");
  navLinks.querySelectorAll("a[href]").forEach((link) => {
    const linkPath = new URL(link.getAttribute("href"), window.location.href).pathname.replace(/\/$/, "");
    if (linkPath === currentPath) {
      link.classList.add("is-current");
      link.setAttribute("aria-current", "page");
    }
  });
}

if (menuToggle && siteHeader && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteHeader.classList.toggle("nav-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      siteHeader.classList.remove("nav-open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      siteHeader.classList.remove("nav-open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

const revealCards = document.querySelectorAll(".reveal-card");
if (revealCards.length) {
  const prefersReducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!("IntersectionObserver" in window) || prefersReducedMotion) {
    revealCards.forEach((card) => card.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });

    revealCards.forEach((card) => revealObserver.observe(card));
  }
}

const serviceIndexLinks = document.querySelectorAll(".service-index a[href^='#']");
const serviceGroups = document.querySelectorAll(".service-group[id]");
if (serviceIndexLinks.length && serviceGroups.length) {
  const setActiveService = (id) => {
    serviceIndexLinks.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
    });
  };

  setActiveService(serviceGroups[0].id);

  serviceIndexLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const id = link.getAttribute("href").slice(1);
      if (id) setActiveService(id);
    });
  });

  const updateActiveService = () => {
    const activationLine = window.innerHeight * 0.34;
    let activeGroup = serviceGroups[0];

    serviceGroups.forEach((group) => {
      if (group.getBoundingClientRect().top <= activationLine) {
        activeGroup = group;
      }
    });

    setActiveService(activeGroup.id);
  };

  updateActiveService();
  window.addEventListener("scroll", updateActiveService, { passive: true });
  window.addEventListener("resize", updateActiveService);

  const mobileServiceHeaders = window.matchMedia("(max-width: 920px)");
  const siteHeader = document.querySelector(".site-header");
  const updateServiceHeaders = () => {
    const isMobileLayout = mobileServiceHeaders.matches;
    const headerOffset = isMobileLayout && siteHeader
      ? Math.ceil(siteHeader.getBoundingClientRect().height + 2)
      : 0;

    document.documentElement.style.setProperty("--service-heading-top", `${headerOffset}px`);

    serviceGroups.forEach((group) => {
      const groupHead = group.querySelector(".service-group-head");
      const serviceItems = group.querySelectorAll(".service-item");
      const lastItem = serviceItems[serviceItems.length - 1];

      if (!isMobileLayout || !groupHead || !lastItem) {
        group.classList.remove("service-head-released");
        group.style.removeProperty("--service-head-release-top");
        return;
      }

      const groupHeadHeight = groupHead.offsetHeight;
      const releaseTop = Math.max(0, lastItem.offsetTop - groupHeadHeight);
      const releaseLine = headerOffset + groupHeadHeight;
      const shouldRelease = lastItem.getBoundingClientRect().top <= releaseLine;

      group.style.setProperty("--service-head-height", `${groupHeadHeight}px`);
      group.style.setProperty("--service-head-release-top", `${releaseTop}px`);
      group.classList.toggle("service-head-released", shouldRelease);
    });
  };

  updateServiceHeaders();
  window.addEventListener("scroll", updateServiceHeaders, { passive: true });
  window.addEventListener("resize", updateServiceHeaders);
  if (mobileServiceHeaders.addEventListener) {
    mobileServiceHeaders.addEventListener("change", updateServiceHeaders);
  }
}

if (languageLinks.length) {
  updateLanguageLinks();
  window.setTimeout(updateLanguageLinks, 800);
  window.setTimeout(updateLanguageLinks, 1800);
  window.setTimeout(updateLanguageLinks, 3200);
  languageLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      setTranslationCookie(link.dataset.translateLanguage);
      updateLanguageLinks();
      window.location.href = window.location.pathname + window.location.search + window.location.hash;
    });
  });
}

if (newsletterArchive && newsletterToggle) {
  newsletterToggle.addEventListener("click", () => {
    const isExpanded = newsletterArchive.classList.toggle("expanded");
    newsletterToggle.setAttribute("aria-expanded", String(isExpanded));
    newsletterToggle.textContent = isExpanded ? "Show Fewer Newsletters" : "View More Newsletters";
  });
}

if (sleuthSignup && sleuthSignupLabel) {
  const updateSleuthSignupLabel = () => {
    sleuthSignupLabel.setAttribute("aria-expanded", String(sleuthSignup.open));
  };

  sleuthSignupLabel.addEventListener("click", () => {
    sleuthSignup.open = !sleuthSignup.open;
    updateSleuthSignupLabel();
  });

  sleuthSignup.addEventListener("toggle", updateSleuthSignupLabel);
  updateSleuthSignupLabel();
}

if (testimonialCarousel) {
  const track = testimonialCarousel.querySelector("[data-testimonial-track]");
  const previous = testimonialCarousel.querySelector("[data-testimonial-prev]");
  const next = testimonialCarousel.querySelector("[data-testimonial-next]");

  const scrollTestimonials = (direction) => {
    if (!track) return;
    const card = track.querySelector(".home-testimonial");
    const cardWidth = card ? card.getBoundingClientRect().width + 16 : 0;
    const distance = Math.max(track.clientWidth * 0.9, cardWidth * 2);
    const maxScroll = track.scrollWidth - track.clientWidth;
    const atEnd = track.scrollLeft >= maxScroll - 8;
    const atStart = track.scrollLeft <= 8;

    if (direction > 0 && atEnd) {
      track.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }

    if (direction < 0 && atStart) {
      track.scrollTo({ left: maxScroll, behavior: "smooth" });
      return;
    }

    track.scrollBy({ left: direction * distance, behavior: "smooth" });
  };

  if (previous) {
    previous.addEventListener("click", () => scrollTestimonials(-1));
  }

  if (next) {
    next.addEventListener("click", () => scrollTestimonials(1));
  }
}

if (policyTabs.length) {
  const mobilePolicyQuery = window.matchMedia("(max-width: 760px)");

  function closePolicyPanels() {
    policyTabs.forEach((tab) => {
      tab.setAttribute("aria-expanded", "false");
    });
    policyPanels.forEach((panel) => {
      panel.hidden = true;
      panel.classList.remove("active");
    });
  }

  function placePolicyPanel(tab, panel) {
    if (mobilePolicyQuery.matches) {
      tab.insertAdjacentElement("afterend", panel);
      return;
    }

    policyTabs[policyTabs.length - 1].insertAdjacentElement("afterend", panel);
  }

  policyTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const key = tab.dataset.policyTab;
      const panel = document.querySelector(`[data-policy-panel="${key}"]`);
      const shouldOpen = tab.getAttribute("aria-expanded") !== "true";
      closePolicyPanels();
      if (!shouldOpen || !panel) return;
      placePolicyPanel(tab, panel);
      tab.setAttribute("aria-expanded", "true");
      panel.hidden = false;
      panel.classList.add("active");
    });
  });

  mobilePolicyQuery.addEventListener("change", () => {
    const openTab = Array.from(policyTabs).find((tab) => tab.getAttribute("aria-expanded") === "true");
    if (!openTab) return;
    const panel = document.querySelector(`[data-policy-panel="${openTab.dataset.policyTab}"]`);
    if (panel) placePolicyPanel(openTab, panel);
  });

  document.addEventListener("click", (event) => {
    if (event.target.closest(".policy-tabs")) return;
    closePolicyPanels();
  });
}

function askChatQuestion(value, showUserMessage = true) {
  const question = value.trim();
  if (!question) return;
  if (showUserMessage) addMessage(question, "user");
  addMessage(answerFor(question));
}

if (form && input) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    askChatQuestion(input.value);
    input.value = "";
  });
}

quickQuestionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    askChatQuestion(button.dataset.chatQuestion || button.textContent || "");
  });
});

if (body) {
  body.addEventListener("click", (event) => {
    const link = event.target.closest(".chat-message-link");
    if (!link) return;
    saveChatCarryover();
  });
}
