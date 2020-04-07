import { Key } from "./Key";

const keyboardConfigTemplate = {
  parentDiv: null,
  style: {
    keyboardClass: null,
  },
  changeLangKeys: ["Control", "Shift"],
  languages: ["ru", "en"],
  defaultLang: "ru",
};

export class Keyboard {
  constructor(keyboardConfig, keysConfig) {
    this.keyboardConfig = keyboardConfig;
    this.keysConfig = keysConfig;
    this.keyboardState = {
      self: null,
      changeLangKeyOnePressed: false,
      changeLangKeyTwoPressed: false,
      lang: keyboardConfig.defaultLang,
      keys: [],
    };
    this.init();
  }

  init() {
    let keyboard = document.createElement("div");
    keyboard.classList.add(this.keyboardConfig.style.keyboardClass);
    this.keyboardConfig.parentDiv.appendChild(keyboard);
    this.setState({ self: keyboard });

    // init keys
    for (let i = 0; i < this.keysConfig.length; i++) {
      const row = this.keysConfig[i];

      let rowDiv = document.createElement("div");
      rowDiv.classList.add("row");

      this.keyboardState.self.appendChild(rowDiv);

      for (let y = 0; y < row.length; y++) {
        const keyConfig = row[y];

        let key = new Key(keyConfig, rowDiv);
        this.keyboardState.keys.push(key);
      }
    }

    // add listeners to document to change current lang
    document.addEventListener("keydown", (e) => {
      this.tryToggleLangKeys(e);
    });
    document.addEventListener("keyup", (e) => {
      this.tryToggleLangKeys(e);
    });
  }

  tryToggleLangKeys(e) {
    let isKeyOne = e.key === this.keyboardConfig.changeLangKeys[0];
    let isKeyTwo = e.key === this.keyboardConfig.changeLangKeys[1];
    if (isKeyOne || isKeyTwo) {
      if (isKeyOne) {
        this.setState({
          changeLangKeyOnePressed: !this.keyboardState.changeLangKeyOnePressed,
        });
      }

      if (isKeyTwo) {
        this.setState({
          changeLangKeyTwoPressed: !this.keyboardState.changeLangKeyTwoPressed,
        });
      }
    }
    this.tryChangeLang();
  }

  tryChangeLang() {
    if (
      this.keyboardState.changeLangKeyOnePressed &&
      this.keyboardState.changeLangKeyTwoPressed
    ) {
      let lang1 = this.keyboardConfig.languages[0];
      let lang2 = this.keyboardConfig.languages[1];
      this.keyboardState.lang =
        this.keyboardState.lang === lang1 ? lang2 : lang1;

      for (let i = 0; i < this.keyboardState.keys.length; i++) {
        const key = this.keyboardState.keys[i];
        key.toggleLang();
      }
    }
  }

  setState(obj) {
    this.keyboardState = { ...this.keyboardState, ...obj };
  }
}
