import "./style.css";
import { Keyboard } from "./Keyboard";

const main = document.createElement("div");
main.id = "main";
document.body.appendChild(main);

const header = document.createElement("div");
main.appendChild(header);

const title = document.createElement("h2");
title.innerText = "Виртуальная клавиатура";
header.appendChild(title);

const instructions = document.createElement("div");
header.appendChild(instructions);

const operationSystem = document.createElement("p");
operationSystem.innerText =
  "Клавиатура разработана для операционной системы Windows";
instructions.appendChild(operationSystem);

const changeLanguage = document.createElement("p");
changeLanguage.innerText =
  "Чтобы изменить язык зажмите комбинацию клавишь Ctrl + Shift";
instructions.appendChild(changeLanguage);

const textarea = document.createElement("textarea");
textarea.classList.add("keyboard-output");
main.appendChild(textarea);






const keyboardConfig = {
  parentDiv: main,
  style: {
    keyboardClass: "keyboard",
  },
  changeLangKeys: ["Control", "Shift"],
  languages: ["ru", "en"],
  defaultLang: "ru",
};


const keysConfig = [
  [
    {
      output: textarea,
      defaultLang: "ru",
      langs: [
        {
          lang: "ru",
          keyText: "ё",
          keyValue: "ё",
        },
        {
          lang: "en",
          keyText: "`",
          keyValue: "`",
          shiftKeyText: "~",
          shiftKeyValue: "~",
        },
      ],
      eventCode: "Backquote",
      type: "text",
    },
    {
      output: textarea,
      defaultLang: "ru",
      langs: [
        {
          lang: "ru",
          keyText: "1",
          keyValue: "1",
          shiftKeyText: "!",
          shiftKeyValue: "!",
        },
        {
          lang: "en",
          keyText: "1",
          keyValue: "1",
          shiftKeyText: "!",
          shiftKeyValue: "!",
        },
      ],
      eventCode: "Digit1",
      type: "text",
    },
    {
      output: textarea,
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
      eventCode: "Digit2",
      type: "text",
    },

    {
      output: textarea,
      defaultLang: "ru",
      langs: [
        {
          lang: "ru",
          keyText: "3",
          keyValue: "3",
          shiftKeyText: "№",
          shiftKeyValue: "№",
        },
        {
          lang: "en",
          keyText: "3",
          keyValue: "3",
          shiftKeyText: "#",
          shiftKeyValue: "#",
        },
      ],
      eventCode: "Digit3",
      type: "text",
    },

    {
      output: textarea,
      defaultLang: "ru",
      langs: [
        {
          lang: "ru",
          keyText: "4",
          keyValue: "4",
          shiftKeyText: ";",
          shiftKeyValue: ";",
        },
        {
          lang: "en",
          keyText: "4",
          keyValue: "4",
          shiftKeyText: "$",
          shiftKeyValue: "$",
        },
      ],
      eventCode: "Digit4",
      type: "text",
    },

    {
      output: textarea,
      defaultLang: "ru",
      langs: [
        {
          lang: "ru",
          keyText: "6",
          keyValue: "6",
          shiftKeyText: ":",
          shiftKeyValue: ":",
        },
        {
          lang: "en",
          keyText: "6",
          keyValue: "6",
          shiftKeyText: "^",
          shiftKeyValue: "^",
        },
      ],
      eventCode: "Digit6",
      type: "text",
    },

    {
      output: textarea,
      defaultLang: "ru",
      langs: [
        {
          lang: "ru",
          keyText: "7",
          keyValue: "7",
          shiftKeyText: "?",
          shiftKeyValue: "?",
        },
        {
          lang: "en",
          keyText: "7",
          keyValue: "7",
          shiftKeyText: "&",
          shiftKeyValue: "&",
        },
      ],
      eventCode: "Digit7",
      type: "text",
    },

    {
      output: textarea,
      defaultLang: "ru",
      langs: [
        {
          lang: "ru",
          keyText: "8",
          keyValue: "8",
          shiftKeyText: "*",
          shiftKeyValue: "*",
        },
        {
          lang: "en",
          keyText: "8",
          keyValue: "8",
          shiftKeyText: "*",
          shiftKeyValue: "*",
        },
      ],
      eventCode: "Digit8",
      type: "text",
    },

    {
      output: textarea,
      defaultLang: "ru",
      langs: [
        {
          lang: "ru",
          keyText: "9",
          keyValue: "9",
          shiftKeyText: "(",
          shiftKeyValue: "(",
        },
        {
          lang: "en",
          keyText: "9",
          keyValue: "9",
          shiftKeyText: "(",
          shiftKeyValue: "(",
        },
      ],
      eventCode: "Digit9",
      type: "text",
    },

    {
      output: textarea,
      defaultLang: "ru",
      langs: [
        {
          lang: "ru",
          keyText: "0",
          keyValue: "0",
          shiftKeyText: ")",
          shiftKeyValue: ")",
        },
        {
          lang: "en",
          keyText: "0",
          keyValue: "0",
          shiftKeyText: ")",
          shiftKeyValue: ")",
        },
      ],
      eventCode: "Digit0",
      type: "text",
    },

    {
      output: textarea,
      defaultLang: "ru",
      langs: [
        {
          lang: "ru",
          keyText: "-",
          keyValue: "-",
          shiftKeyText: "_",
          shiftKeyValue: "_",
        },
        {
          lang: "en",
          keyText: "-",
          keyValue: "-",
          shiftKeyText: "_",
          shiftKeyValue: "_",
        },
      ],
      eventCode: "Minus",
      type: "text",
    },

    {
      output: textarea,
      defaultLang: "ru",
      langs: [
        {
          lang: "ru",
          keyText: "=",
          keyValue: "=",
          shiftKeyText: "+",
          shiftKeyValue: "+",
        },
        {
          lang: "en",
          keyText: "=",
          keyValue: "=",
          shiftKeyText: "+",
          shiftKeyValue: "+",
        },
      ],
      eventCode: "Equal",
      type: "text",
    },
    {
      output: textarea,
      defaultLang: "ru",
      langs: [
        {
          lang: "ru",
          keyText: "Backspace",
          keyValue: "",
        },
        {
          lang: "en",
          keyText: "Backspace",
          keyValue: "",
        },
      ],
      eventCode: "Backspace",
      type: "system",
      class: "backspace",
      handler: (output) => {
        output.value = output.value.substring(0, output.value.length - 1);
      }
    },
  ],

  // row 2
  [
    {
      output: textarea,
      defaultLang: "ru",
      langs: [
        {
          lang: "ru",
          keyText: "Tab",
          keyValue: "",
        },
        {
          lang: "en",
          keyText: "Tab",
          keyValue: "",
        },
      ],
      eventCode: "Tab",
      type: "system",
    },

    {
      output: textarea,
      defaultLang: "ru",
      langs: [
        {
          lang: "ru",
          keyText: "й",
          keyValue: "й",
        },
        {
          lang: "en",
          keyText: "q",
          keyValue: "q",
        },
      ],
      eventCode: "KeyQ",
      type: "text",
    },

    {
      output: textarea,
      defaultLang: "ru",
      langs: [
        {
          lang: "ru",
          keyText: "ц",
          keyValue: "ц",
        },
        {
          lang: "en",
          keyText: "w",
          keyValue: "w",
        },
      ],
      eventCode: "KeyW",
      type: "text",
    },

    {
      output: textarea,
      defaultLang: "ru",
      langs: [
        {
          lang: "ru",
          keyText: "у",
          keyValue: "у",
        },
        {
          lang: "en",
          keyText: "e",
          keyValue: "e",
        },
      ],
      eventCode: "KeyE",
      type: "text",
    },

    {
      output: textarea,
      defaultLang: "ru",
      langs: [
        {
          lang: "ru",
          keyText: "к",
          keyValue: "к",
        },
        {
          lang: "en",
          keyText: "r",
          keyValue: "r",
        },
      ],
      eventCode: "KeyR",
      type: "text",
    },

    {
      output: textarea,
      defaultLang: "ru",
      langs: [
        {
          lang: "ru",
          keyText: "е",
          keyValue: "е",
        },
        {
          lang: "en",
          keyText: "t",
          keyValue: "t",
        },
      ],
      eventCode: "KeyT",
      type: "text",
    },

    {
      output: textarea,
      defaultLang: "ru",
      langs: [
        {
          lang: "ru",
          keyText: "н",
          keyValue: "н",
        },
        {
          lang: "en",
          keyText: "y",
          keyValue: "y",
        },
      ],
      eventCode: "KeyY",
      type: "text",
    },

    {
      output: textarea,
      defaultLang: "ru",
      langs: [
        {
          lang: "ru",
          keyText: "г",
          keyValue: "г",
        },
        {
          lang: "en",
          keyText: "u",
          keyValue: "u",
        },
      ],
      eventCode: "KeyU",
      type: "text",
    },

    {
      output: textarea,
      defaultLang: "ru",
      langs: [
        {
          lang: "ru",
          keyText: "ш",
          keyValue: "ш",
        },
        {
          lang: "en",
          keyText: "u",
          keyValue: "u",
        },
      ],
      eventCode: "KeyI",
      type: "text",
    },

    {
      output: textarea,
      defaultLang: "ru",
      langs: [
        {
          lang: "ru",
          keyText: "щ",
          keyValue: "щ",
        },
        {
          lang: "en",
          keyText: "o",
          keyValue: "o",
        },
      ],
      eventCode: "KeyO",
      type: "text",
    },

    {
      output: textarea,
      defaultLang: "ru",
      langs: [
        {
          lang: "ru",
          keyText: "з",
          keyValue: "з",
        },
        {
          lang: "en",
          keyText: "p",
          keyValue: "p",
        },
      ],
      eventCode: "KeyP",
      type: "text",
    },

    {
      output: textarea,
      defaultLang: "ru",
      langs: [
        {
          lang: "ru",
          keyText: "х",
          keyValue: "х",
        },
        {
          lang: "en",
          keyText: "[",
          keyValue: "[",
        },
      ],
      eventCode: "BracketLeft",
      type: "text",
    },

    {
      output: textarea,
      defaultLang: "ru",
      langs: [
        {
          lang: "ru",
          keyText: "ъ",
          keyValue: "ъ",
        },
        {
          lang: "en",
          keyText: "]",
          keyValue: "]",
        },
      ],
      eventCode: "BracketRight",
      type: "text",
    },

    {
      output: textarea,
      defaultLang: "ru",
      langs: [
        {
          lang: "ru",
          keyText: "\\",
          keyValue: "\\",
          shiftKeyText: "/",
          shiftKeyValue: "/",
        },
        {
          lang: "en",
          keyText: "\\",
          keyValue: "\\",
          shiftKeyText: "/",
          shiftKeyValue: "/",
        },
      ],
      eventCode: "Backslash",
      type: "text",
    },

    {
      output: textarea,
      defaultLang: "ru",
      langs: [
        {
          lang: "ru",
          keyText: "Del",
          keyValue: "",
        },
        {
          lang: "en",
          keyText: "Del",
          keyValue: "",
        },
      ],
      eventCode: "Delete",
      type: "system",
    },
  ],

  // row 3
  [
    {
      output: textarea,
      defaultLang: "ru",
      langs: [
        {
          lang: "ru",
          keyText: "CapsLock",
          keyValue: "",
        },
        {
          lang: "en",
          keyText: "CapsLock",
          keyValue: "",
        },
      ],
      eventCode: "CapsLock",
      type: "system",
      class: "caps-lock",
    },

    {
      output: textarea,
      defaultLang: "ru",
      langs: [
        {
          lang: "ru",
          keyText: "ф",
          keyValue: "ф",
        },
        {
          lang: "en",
          keyText: "a",
          keyValue: "a",
        },
      ],
      eventCode: "KeyA",
      type: "text",
    },

    {
      output: textarea,
      defaultLang: "ru",
      langs: [
        {
          lang: "ru",
          keyText: "ы",
          keyValue: "ы",
        },
        {
          lang: "en",
          keyText: "s",
          keyValue: "s",
        },
      ],
      eventCode: "KeyS",
      type: "text",
    },

    {
      output: textarea,
      defaultLang: "ru",
      langs: [
        {
          lang: "ru",
          keyText: "в",
          keyValue: "в",
        },
        {
          lang: "en",
          keyText: "d",
          keyValue: "d",
        },
      ],
      eventCode: "KeyD",
      type: "text",
    },

    {
      output: textarea,
      defaultLang: "ru",
      langs: [
        {
          lang: "ru",
          keyText: "а",
          keyValue: "а",
        },
        {
          lang: "en",
          keyText: "f",
          keyValue: "f",
        },
      ],
      eventCode: "KeyF",
      type: "text",
    },

    {
      output: textarea,
      defaultLang: "ru",
      langs: [
        {
          lang: "ru",
          keyText: "п",
          keyValue: "п",
        },
        {
          lang: "en",
          keyText: "g",
          keyValue: "g",
        },
      ],
      eventCode: "KeyG",
      type: "text",
    },

    {
      output: textarea,
      defaultLang: "ru",
      langs: [
        {
          lang: "ru",
          keyText: "р",
          keyValue: "р",
        },
        {
          lang: "en",
          keyText: "h",
          keyValue: "h",
        },
      ],
      eventCode: "KeyH",
      type: "text",
    },

    {
      output: textarea,
      defaultLang: "ru",
      langs: [
        {
          lang: "ru",
          keyText: "о",
          keyValue: "о",
        },
        {
          lang: "en",
          keyText: "j",
          keyValue: "j",
        },
      ],
      eventCode: "KeyJ",
      type: "text",
    },

    {
      output: textarea,
      defaultLang: "ru",
      langs: [
        {
          lang: "ru",
          keyText: "л",
          keyValue: "л",
        },
        {
          lang: "en",
          keyText: "k",
          keyValue: "k",
        },
      ],
      eventCode: "KeyK",
      type: "text",
    },

    {
      output: textarea,
      defaultLang: "ru",
      langs: [
        {
          lang: "ru",
          keyText: "д",
          keyValue: "д",
        },
        {
          lang: "en",
          keyText: "l",
          keyValue: "l",
        },
      ],
      eventCode: "KeyL",
      type: "text",
    },

    {
      output: textarea,
      defaultLang: "ru",
      langs: [
        {
          lang: "ru",
          keyText: "ж",
          keyValue: "ж",
        },
        {
          lang: "en",
          keyText: ";",
          keyValue: ";",
        },
      ],
      eventCode: "Semicolon",
      type: "text",
    },

    {
      output: textarea,
      defaultLang: "ru",
      langs: [
        {
          lang: "ru",
          keyText: "э",
          keyValue: "э",
        },
        {
          lang: "en",
          keyText: "'",
          keyValue: "'",
        },
      ],
      eventCode: "Quote",
      type: "text",
    },

    {
      output: textarea,
      defaultLang: "ru",
      langs: [
        {
          lang: "ru",
          keyText: "Enter",
          keyValue: "\r",
        },
        {
          lang: "en",
          keyText: "Enter",
          keyValue: "\r",
        },
      ],
      eventCode: "Enter",
      type: "text",
      class: "enter",
    },
  ],

  //  row 4
  [
    {
      output: textarea,
      defaultLang: "ru",
      langs: [
        {
          lang: "ru",
          keyText: "Shift",
          keyValue: "",
        },
        {
          lang: "en",
          keyText: "Shift",
          keyValue: "",
        },
      ],
      eventCode: "ShiftLeft",
      type: "system",
      class: "left-shift",
    },

    {
      output: textarea,
      defaultLang: "ru",
      langs: [
        {
          lang: "ru",
          keyText: "я",
          keyValue: "я",
        },
        {
          lang: "en",
          keyText: "z",
          keyValue: "z",
        },
      ],
      eventCode: "KeyZ",
      type: "text",
    },

    {
      output: textarea,
      defaultLang: "ru",
      langs: [
        {
          lang: "ru",
          keyText: "ч",
          keyValue: "ч",
        },
        {
          lang: "en",
          keyText: "x",
          keyValue: "x",
        },
      ],
      eventCode: "KeyX",
      type: "text",
    },

    {
      output: textarea,
      defaultLang: "ru",
      langs: [
        {
          lang: "ru",
          keyText: "с",
          keyValue: "с",
        },
        {
          lang: "en",
          keyText: "c",
          keyValue: "c",
        },
      ],
      eventCode: "KeyC",
      type: "text",
    },

    {
      output: textarea,
      defaultLang: "ru",
      langs: [
        {
          lang: "ru",
          keyText: "м",
          keyValue: "м",
        },
        {
          lang: "en",
          keyText: "v",
          keyValue: "v",
        },
      ],
      eventCode: "KeyV",
      type: "text",
    },

    {
      output: textarea,
      defaultLang: "ru",
      langs: [
        {
          lang: "ru",
          keyText: "и",
          keyValue: "и",
        },
        {
          lang: "en",
          keyText: "b",
          keyValue: "b",
        },
      ],
      eventCode: "KeyB",
      type: "text",
    },

    {
      output: textarea,
      defaultLang: "ru",
      langs: [
        {
          lang: "ru",
          keyText: "т",
          keyValue: "т",
        },
        {
          lang: "en",
          keyText: "n",
          keyValue: "n",
        },
      ],
      eventCode: "KeyN",
      type: "text",
    },

    {
      output: textarea,
      defaultLang: "ru",
      langs: [
        {
          lang: "ru",
          keyText: "ь",
          keyValue: "ь",
        },
        {
          lang: "en",
          keyText: "m",
          keyValue: "m",
        },
      ],
      eventCode: "KeyM",
      type: "text",
    },

    {
      output: textarea,
      defaultLang: "ru",
      langs: [
        {
          lang: "ru",
          keyText: "б",
          keyValue: "б",
        },
        {
          lang: "en",
          keyText: ",",
          keyValue: ",",
        },
      ],
      eventCode: "Comma",
      type: "text",
    },

    {
      output: textarea,
      defaultLang: "ru",
      langs: [
        {
          lang: "ru",
          keyText: "ю",
          keyValue: "ю",
        },
        {
          lang: "en",
          keyText: ".",
          keyValue: ".",
        },
      ],
      eventCode: "Period",
      type: "text",
    },

    {
      output: textarea,
      defaultLang: "ru",
      langs: [
        {
          lang: "ru",
          keyText: "/",
          keyValue: "/",
        },
        {
          lang: "en",
          keyText: "/",
          keyValue: "/",
        },
      ],
      eventCode: "Slash",
      type: "text",
    },

    {
      output: textarea,
      defaultLang: "ru",
      langs: [
        {
          lang: "ru",
          keyText: "up",
          keyValue: "🠙",
        },
        {
          lang: "en",
          keyText: "up",
          keyValue: "🠙",
        },
      ],
      eventCode: "ArrowUp",
      type: "system",
    },

    {
      output: textarea,
      defaultLang: "ru",
      langs: [
        {
          lang: "ru",
          keyText: "Shift",
          keyValue: "",
        },
        {
          lang: "en",
          keyText: "Shift",
          keyValue: "",
        },
      ],
      eventCode: "ShiftRight",
      type: "system",
    },
  ],

  // row 5
  [
    {
      output: textarea,
      defaultLang: "ru",
      langs: [
        {
          lang: "ru",
          keyText: "Ctrl",
          keyValue: "",
        },
        {
          lang: "en",
          keyText: "Ctrl",
          keyValue: "",
        },
      ],
      eventCode: "ControlLeft",
      type: "system",
    },

    {
      output: textarea,
      defaultLang: "ru",
      langs: [
        {
          lang: "ru",
          keyText: "Win",
          keyValue: "",
        },
        {
          lang: "en",
          keyText: "Win",
          keyValue: "",
        },
      ],
      eventCode: "MetaLeft",
      type: "system",
    },

    {
      output: textarea,
      defaultLang: "ru",
      langs: [
        {
          lang: "ru",
          keyText: "Alt",
          keyValue: "",
        },
        {
          lang: "en",
          keyText: "Alt",
          keyValue: "",
        },
      ],
      eventCode: "AltLeft",
      type: "system",
    },

    {
      output: textarea,
      defaultLang: "ru",
      langs: [
        {
          lang: "ru",
          keyText: " ",
          keyValue: " ",
        },
        {
          lang: "en",
          keyText: " ",
          keyValue: " ",
        },
      ],
      eventCode: "Space",
      type: "text",
      class: "whitespace",
    },

    {
      output: textarea,
      defaultLang: "ru",
      langs: [
        {
          lang: "ru",
          keyText: "Alt",
          keyValue: "",
        },
        {
          lang: "en",
          keyText: "Alt",
          keyValue: "",
        },
      ],
      eventCode: "AltRight",
      type: "system",
    },

    {
      output: textarea,
      defaultLang: "ru",
      langs: [
        {
          lang: "ru",
          keyText: "Ctrl",
          keyValue: "",
        },
        {
          lang: "en",
          keyText: "Ctrl",
          keyValue: "",
        },
      ],
      eventCode: "ControlRight",
      type: "system",
      class: "ctrl",
    },

    {
      output: textarea,
      defaultLang: "ru",
      langs: [
        {
          lang: "ru",
          keyText: "left",
          keyValue: "🠘",
        },
        {
          lang: "en",
          keyText: "left",
          keyValue: "🠘",
        },
      ],
      eventCode: "ArrowLeft",
      type: "system",
    },

    {
      output: textarea,
      defaultLang: "ru",
      langs: [
        {
          lang: "ru",
          keyText: "down",
          keyValue: "🠛",
        },
        {
          lang: "en",
          keyText: "down",
          keyValue: "🠛",
        },
      ],
      eventCode: "ArrowDown",
      type: "system",
    },

    {
      output: textarea,
      defaultLang: "ru",
      langs: [
        {
          lang: "ru",
          keyText: "right",
          keyValue: "🠚",
        },
        {
          lang: "en",
          keyText: "right",
          keyValue: "🠚",
        },
      ],
      eventCode: "ArrowRight",
      type: "system",
    },
  ],
];



new Keyboard(keyboardConfig, keysConfig);
