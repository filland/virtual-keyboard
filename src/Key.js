const keyConfigTemplate = {
    defaultLang: "ru",
    langs: [
      {
        lang: "ru",
        keyText: "2",
        keyValue: "2",
        shiftKeyText: '"',
        shiftKeyValue: '"',
      },
      {
        lang: "en",
        keyText: "2",
        keyValue: "2",
        shiftKeyText: "@",
        shiftKeyValue: "@",
      },
    ],
    eventCode: "Enter",
    type: "text",
    class: null,
    handler: () => {}
  };
  
  export class Key {
    constructor(keyConfig, parentElement, output) {
      this.keyConfig = keyConfig;
      this.parentElement = parentElement;
      this.keyState = {
        self: null,
        keySelf: null,
        keyShiftSelf: null,
        keyText: null,
        keyValue: null,
        shiftKeyText: null,
        shiftKeyValue: null,
        langs: [],
        currentLang: null,
        output: output
      };
      this.init();
    }
  
    init() {
      // create div for the key
      let keyDiv = document.createElement("div");
      keyDiv.classList.add("text-button");
      this.parentElement.appendChild(keyDiv);
      if(this.keyConfig.class) {
        keyDiv.classList.add(this.keyConfig.class);
      } else {
        keyDiv.style.flex = "1";
      }
      this.setState({ self: keyDiv });
  
      // init state
      this.initState();
  
      // create span for key
      let keySpan = document.createElement("span");
      keySpan.classList.add("text-button__key");
      keySpan.innerText = this.keyState.keyText;
      this.keyState.self.appendChild(keySpan);
      this.setState({ keySelf: keySpan });
  
      // create span for shift key
      let shiftKeySpan = document.createElement("span");
      shiftKeySpan.classList.add("text-button__shift-key");
      this.keyState.self.appendChild(shiftKeySpan);
      this.setState({ keyShiftSelf: shiftKeySpan });
  
      if (this.keyState.shiftKeyText) {
        shiftKeySpan.innerText = this.keyState.shiftKeyText;
      } else {
        shiftKeySpan.innerText = "";
      }
  
      this.updateKey();
  
      this.initListeners();
    }
  
    initState() {
      const langList = this.keyConfig.langs ? this.keyConfig.langs.map(langSettings => langSettings.lang) : [];
  
      this.setState({ langs: langList });
      this.setState({ currentLang: langList[0] });
  
      this.updateState();
    }
  
    initListeners() {
      let output = this.keyState.output;
      let eventCode = this.keyConfig.eventCode;
  
      let self = this.keyState.self;
  
      self.addEventListener("click", () => {
        output.value = output.value + this.keyState.keyValue;
        if (this.keyConfig.handler) {
          this.keyConfig.handler(this.keyState.output);
        }
      });
  
      document.addEventListener("keydown", (e) => {
        // key pressed not when cursor is in the textarea
        if (e.code === eventCode) {
          self.classList.add("text-button__pressed");
  
          if (e.target !== output) {
            output.value = output.value + this.keyState.keyValue;
  
            if (this.keyConfig.handler) {
              this.keyConfig.handler(output);
            }
          }
        }
      });
  
      document.addEventListener("keyup", (e) => {
        if (e.code === eventCode) {
          self.classList.remove("text-button__pressed");
        }
      });
    }
  
    updateState() {
      let langsSettings = this.keyConfig.langs;
      for (let i = 0; i < langsSettings.length; i++) {
        const langSettings = langsSettings[i];
  
        if (this.keyState.currentLang === langSettings.lang) {

          let { keyText, keyValue, shiftKeyText, shiftKeyValue } = langSettings;

          if(this.keyConfig.type === 'text') {
            keyValue = keyText;
            shiftKeyValue = shiftKeyText;
          }

          this.setState({ 
            keyText, 
            keyValue, 
            shiftKeyText: shiftKeyText || "",
            shiftKeyValue 
          });
          break;
        }
      }
    }
  
    // udpate the key according to the current lang
    updateKey() {
      this.updateState();
  
      this.keyState.keySelf.innerText = this.keyState.keyText;
      this.keyState.keyShiftSelf.innerText = this.keyState.shiftKeyText;
    }
  
    toggleLang() {
      // change current lang
      let langs = this.keyState.langs;
      this.setState({
        currentLang: this.keyState.currentLang === langs[0] ? langs[1] : langs[0],
      });
  
      this.updateKey();
    }
  
    setState(obj) {
      this.keyState = { ...this.keyState, ...obj };
    }
  }