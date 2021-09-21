import enLang from "./entries/en-US";
import zhLang from "./entries/zh-Hans-CN";
import arLang from "./entries/ar_SA";
import itLang from "./entries/it_IT";
import esLang from "./entries/es_ES";
import frLang from "./entries/fr_FR";
// import {addLocaleData} from "react-intl";
require('@formatjs/intl-pluralrules/polyfill')
require('@formatjs/intl-relativetimeformat/polyfill')

const AppLocale = {
  en: enLang,
  zh: zhLang,
  ar: arLang,
  it: itLang,
  es: esLang,
  fr: frLang
};
// addLocaleData(AppLocale.en.data);
// addLocaleData(AppLocale.zh.data);
// addLocaleData(AppLocale.ar.data);
// addLocaleData(AppLocale.it.data);
// addLocaleData(AppLocale.es.data);
// addLocaleData(AppLocale.fr.data);

const rule0 = new Intl.PluralRules(AppLocale.en.data, {localeMatcher: 'lookup' });
console.log(rule0)

const rule2 = new Intl.PluralRules(AppLocale.zh.data, {localeMatcher: 'lookup'});
console.log(rule2);

const rule3 = new Intl.PluralRules(AppLocale.ar.data, {localeMatcher: 'lookup'});
console.log(rule3);

const rule4 = new Intl.PluralRules(AppLocale.it.data, {localeMatcher: 'lookup'});
console.log(rule4);

const rule5 = new Intl.PluralRules(AppLocale.es.data, {localeMatcher: 'lookup'});
console.log(rule5);

const rule6 = new Intl.PluralRules(AppLocale.fr.data, {localeMatcher: 'lookup'});
console.log(rule6);

export default AppLocale;
