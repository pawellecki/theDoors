const language = {
  english: {
    header: {
      select_language: "Wybierz język"
    },
    log_in: {
      title: "Log in",
      email: "Email address",
      password: "Password",
      keep_logged: "Keep me logged in",
      button: "Login",
      error_message: "Invalid email or password"
    },
    content: {
      steps: [
        { name: "step", description: "choose door" },
        { name: "step", description: "choose door division" },
        { name: "step", description: "choose color" }
      ],
      params: {
        type: {
          title: "Door type",
          values: ["Single door", "Double door"]
        },
        size: {
          title: "Door size",
          width: "Width",
          height: "Height"
        },
        division: {
          title: "Door division",
          beams: "Number of beams",
          posts: "Number of posts"
        },
        color: {
          title: "Choose color",
          values: [
            { label: "Black", value: "#000" },
            { label: "Gray", value: "#797474" },
            { label: "White", value: "#F4F2F2" }
          ]
        },
        share: "share",
        navigation: [
          { label: "back", value: "back" },
          { label: "next", value: "next" }
        ]
      }
    }
  },
  polski: {
    header: {
      select_language: "Select language"
    },
    log_in: {
      title: "Zaloguj",
      email: "Adres email",
      password: "Hasło",
      keep_logged: "Pozostań zalogowany",
      button: "Zaloguj",
      error_message: "Nieprawidłowy email lub hasło"
    },
    content: {
      steps: [
        { name: "krok", description: "wybierz drzwi" },
        { name: "krok", description: "wybierz podział drzwi" },
        { name: "krok", description: "wybierz kolor" }
      ],
      params: {
        type: {
          title: "Typ drzwi",
          values: ["Pojedyncze drzwi", "Podwójne drzwi"]
        },
        size: {
          title: "Wymiary drzwi",
          width: "Szerokość",
          height: "Wysokość"
        },
        division: {
          title: "Podział drzwi",
          beams: "Liczba poziomów",
          posts: "Liczba pionów"
        },
        color: {
          title: "Wybierz kolor",
          values: [
            { label: "Czarny", value: "#000" },
            { label: "Szary", value: "#797474" },
            { label: "Biały", value: "#F4F2F2" }
          ]
        },
        share: "udostępnij",
        navigation: [
          { label: "powrót", value: "back" },
          { label: "kolejny krok", value: "next" }
        ]
      }
    }
  }
};

export default language;
