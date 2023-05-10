export default async ({ app }) => {
  app.router.afterEach(async () => {
    if (window.dataLayer == undefined) {
      window.dataLayer = []
    }
    window.dataLayer.push({user_id: 123, event: 'setUserId'})
  });
};