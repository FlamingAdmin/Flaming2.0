export default {
  async login() {
    try {

      // 1. Sprawdzenie loginu i hasła
      await loginUser.run();

      if (loginUser.data.length === 0) {
        showAlert("Niepoprawny login lub hasło", "error");
        return;
      }

      // 2. Usunięcie poprzednich sesji użytkownika
      await deleteOldSessions.run();

      // 3. Utworzenie nowej sesji
      await createSession.run();

      // 4. Wyczyszczenie store
      await clearStore();

      // 5. Zapis sesji
      await storeValue("session", {
        token: createSession.data[0].token,
        createdAt: createSession.data[0].created_at,
        expiresAt: createSession.data[0].expires_at,

        user: {
          id: loginUser.data[0].id,
          name: loginUser.data[0].name,
          mail: loginUser.data[0].mail,

          role: {
            id: loginUser.data[0].role_id,
            code: loginUser.data[0].role_code,
            name: loginUser.data[0].role_name
          }
        }
      });

      // 6. Przejście do strony głównej
      navigateTo("Home");

    } catch (e) {
      console.error(e);
      showAlert("Błąd logowania", "error");
    }
  }
}