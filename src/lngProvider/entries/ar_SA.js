import antdSA from "antd/lib/locale-provider/en_US";
import '@formatjs/intl-pluralrules/polyfill';
import appLocaleData from "@formatjs/intl-pluralrules/locale-data/ar";
import saMessages from "../locales/ar_SA.json";

const saLang = {
  messages: {
    ...saMessages
  },
  antd: antdSA,
  locale: 'ar',
  data: appLocaleData
};
export default saLang;
