module.exports = {
  locales: ["en", "ar"],
  defaultLocale: "en",
  pages: {
    "/": ["home"],
  },
  // chnaging this wont fix it
  //   loadLocaleFrom: (lang, ns) =>
  //    import(`./locales/${lang}/${ns}.json`).then((m) => m.default)
};
