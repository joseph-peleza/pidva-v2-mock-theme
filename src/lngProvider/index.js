import enLang from "./entries/en-US";
import zhLang from "./entries/zh-Hans-CN";
import arLang from "./entries/ar_SA";
import itLang from "./entries/it_IT";
import esLang from "./entries/es_ES";
import frLang from "./entries/fr_FR";
import PluralRules from "intl-pluralrules";

const AppLocale = {
  en: enLang,
  zh: zhLang,
  ar: arLang,
  it: itLang,
  es: esLang,
  fr: frLang
};
new PluralRules(AppLocale.en.data).select(0);
new PluralRules(AppLocale.zh.data).select(1);
new PluralRules(AppLocale.ar.data).select(2);
new PluralRules(AppLocale.it.data).select(3);
new PluralRules(AppLocale.es.data).select(4);
new PluralRules(AppLocale.fr.data).select(5);

export default AppLocale;
