import { supportedLanguages, commonContactLinks } from './shared.js';
import { site as frSite } from './fr/site.js';
import { homePage as frHomePage, homeEvent as frHomeEvent } from './fr/home.js';
import { page as frPage } from './fr/page.js';
import { site as enSite } from './en/site.js';
import { homePage as enHomePage, homeEvent as enHomeEvent } from './en/home.js';
import { page as enPage } from './en/page.js';
import { site as itSite } from './it/site.js';
import { homePage as itHomePage, homeEvent as itHomeEvent } from './it/home.js';
import { page as itPage } from './it/page.js';
import { site as deSite } from './de/site.js';
import { homePage as deHomePage, homeEvent as deHomeEvent } from './de/home.js';
import { page as dePage } from './de/page.js';
import { site as nlSite } from './nl/site.js';
import { homePage as nlHomePage, homeEvent as nlHomeEvent } from './nl/home.js';
import { page as nlPage } from './nl/page.js';
import { site as esSite } from './es/site.js';
import { homePage as esHomePage, homeEvent as esHomeEvent } from './es/home.js';
import { page as esPage } from './es/page.js';
import { site as ruSite } from './ru/site.js';
import { homePage as ruHomePage, homeEvent as ruHomeEvent } from './ru/home.js';
import { page as ruPage } from './ru/page.js';
import { site as ukSite } from './uk/site.js';
import { homePage as ukHomePage, homeEvent as ukHomeEvent } from './uk/home.js';
import { page as ukPage } from './uk/page.js';
import { site as zhSite } from './zh/site.js';
import { homePage as zhHomePage, homeEvent as zhHomeEvent } from './zh/home.js';
import { page as zhPage } from './zh/page.js';
import { site as jaSite } from './ja/site.js';
import { homePage as jaHomePage, homeEvent as jaHomeEvent } from './ja/home.js';
import { page as jaPage } from './ja/page.js';
import { site as koSite } from './ko/site.js';
import { homePage as koHomePage, homeEvent as koHomeEvent } from './ko/home.js';
import { page as koPage } from './ko/page.js';
import { menuPage } from './menu-placeholder.js';

export { supportedLanguages };

export const nativeLanguageLabels = {
  fr: frSite.localeName,
  en: enSite.localeName,
  it: itSite.localeName,
  de: deSite.localeName,
  nl: nlSite.localeName,
  es: esSite.localeName,
  ru: ruSite.localeName,
  uk: ukSite.localeName,
  zh: zhSite.localeName,
  ja: jaSite.localeName,
  ko: koSite.localeName,
};

export const siteContent = {
  fr: { ...frSite, alternateLanguages: nativeLanguageLabels, contactLinks: commonContactLinks, menuPage },
  en: { ...enSite, alternateLanguages: nativeLanguageLabels, contactLinks: commonContactLinks, menuPage },
  it: { ...itSite, alternateLanguages: nativeLanguageLabels, contactLinks: commonContactLinks, menuPage },
  de: { ...deSite, alternateLanguages: nativeLanguageLabels, contactLinks: commonContactLinks, menuPage },
  nl: { ...nlSite, alternateLanguages: nativeLanguageLabels, contactLinks: commonContactLinks, menuPage },
  es: { ...esSite, alternateLanguages: nativeLanguageLabels, contactLinks: commonContactLinks, menuPage },
  ru: { ...ruSite, alternateLanguages: nativeLanguageLabels, contactLinks: commonContactLinks, menuPage },
  uk: { ...ukSite, alternateLanguages: nativeLanguageLabels, contactLinks: commonContactLinks, menuPage },
  zh: { ...zhSite, alternateLanguages: nativeLanguageLabels, contactLinks: commonContactLinks, menuPage },
  ja: { ...jaSite, alternateLanguages: nativeLanguageLabels, contactLinks: commonContactLinks, menuPage },
  ko: { ...koSite, alternateLanguages: nativeLanguageLabels, contactLinks: commonContactLinks, menuPage },
};

export const homePageContent = {
  fr: frHomePage,
  en: enHomePage,
  it: itHomePage,
  de: deHomePage,
  nl: nlHomePage,
  es: esHomePage,
  ru: ruHomePage,
  uk: ukHomePage,
  zh: zhHomePage,
  ja: jaHomePage,
  ko: koHomePage,
};

export const homeEventContent = {
  fr: frHomeEvent,
  en: enHomeEvent,
  it: itHomeEvent,
  de: deHomeEvent,
  nl: nlHomeEvent,
  es: esHomeEvent,
  ru: ruHomeEvent,
  uk: ukHomeEvent,
  zh: zhHomeEvent,
  ja: jaHomeEvent,
  ko: koHomeEvent,
};

export const pageContent = {
  fr: frPage,
  en: enPage,
  it: itPage,
  de: dePage,
  nl: nlPage,
  es: esPage,
  ru: ruPage,
  uk: ukPage,
  zh: zhPage,
  ja: jaPage,
  ko: koPage,
};
