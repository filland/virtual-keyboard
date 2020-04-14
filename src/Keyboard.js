import { Key } from "./Key";

const keyboardConfigTemplate = {
  parentDiv: null,
  output: null,
  style: {
    keyboardClass: null,
  },
  changeLangKeys: ["Control", "Shift"],
  languages: ["ru", "en"],
  defaultLang: 0,
};

export class Keyboard {
  constructor(keyboardConfig, keysConfig) {
    this.keyboardConfig = keyboardConfig;
    this.keysConfig = keysConfig;
    this.keyboardState = {
      self: null,
      changeLangKeyOnePressed: false,
      changeLangKeyTwoPressed: false,
      lang: keyboardConfig.languages[keyboardConfig.defaultLang],
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

        let key = new Key(keyConfig, rowDiv, this.keyboardConfig.output);
        this.keyboardState.keys.push(key);
      }
    }

    // add listeners to document to change current lang
    document.addEventListener("keydown", e => this.tryToggleLangKeys(e));
    document.addEventListener("keyup", e => this.tryToggleLangKeys(e));
  }

  tryToggleLangKeys(e) {
    const [changeLangKeyOne, changeLangKeyTwo] = this.keyboardConfig.changeLangKeys;
    let isKeyOne = e.key === changeLangKeyOne;
    let isKeyTwo = e.key === changeLangKeyTwo;
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
    this.tryChangeLang();
  }

  tryChangeLang() {
    if (
      this.keyboardState.changeLangKeyOnePressed &&
      this.keyboardState.changeLangKeyTwoPressed
    ) {
      const [ languageOne, languageTwo ] = this.keyboardConfig.languages;
      this.keyboardState.lang =
        this.keyboardState.lang === languageOne ? languageTwo : languageOne;

      this.keyboardState.keys.forEach((key) => key.toggleLang());
    }
  }

  setState(obj) {
    this.keyboardState = { ...this.keyboardState, ...obj };
  }
}
