export default {
  async logout() {
    try {
      await logoutSession.run();
    } finally {
      await clearStore();
      navigateTo("Logowanie");
    }
  }
}