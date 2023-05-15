export default async ({ app }) => {
  app.router.afterEach(async () => {
    if (window.dataLayer === undefined) {
      window.dataLayer = [];
    }
    await new Promise(resolve => setTimeout(resolve, 500))
    window.dataLayer.push({ user_id: 123, event: 'login' });
  })
  // window.dataLayer.push({ 'event': 'setUserID', user_id: 123 });
};
