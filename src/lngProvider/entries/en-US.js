import antdEn from "antd/lib/locale-provider/en_US";
import '@formatjs/intl-pluralrules/polyfill';
import appLocaleData from "@formatjs/intl-pluralrules/locale-data/en";
import enMessages from "../locales/en_US.json";

const EnLang = {
  messages: {
    ...enMessages
  },
  antd: antdEn,
  locale: 'en-US',
  data: appLocaleData
};
export default EnLang;
