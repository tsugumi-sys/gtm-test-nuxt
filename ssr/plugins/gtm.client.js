export default async ({ app }) => {
  app.router.afterEach(() => {
    if (window.dataLayer === undefined) {
      window.dataLayer = [];
    }
    window.dataLayer.push({ user_id: 123, event: 'login' });
    // window.dataLayer.push({ 'event': 'setUserID', user_id: 123 });
  });
};
