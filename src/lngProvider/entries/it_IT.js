import antdSA from "antd/lib/locale-provider/it_IT";
import '@formatjs/intl-pluralrules/polyfill';
import appLocaleData from "@formatjs/intl-pluralrules/locale-data/it";
import saMessages from "../locales/it_IT.json";

const saLang = {
  messages: {
    ...saMessages
  },
  antd: antdSA,
  locale: 'it-IT',
  data: appLocaleData
};
export default saLang;
