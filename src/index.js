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
  output: textarea,
  parentDiv: main,
  style: {
    keyboardClass: "keyboard",
  },
  changeLangKeys: ["Control", "Shift"],
  languages: ["ru", "en"],
  defaultLang: 0,
};

const keysConfig = [
  [
    {
      langs: [
        {
          lang: "ru",
          keyText: "ё",
        },
        {
          lang: "en",
          keyText: "`",
          shiftKeyText: "~",
        },
      ],
      eventCode: "Backquote",
      type: "text",
    },
    {
      langs: [
        {
          lang: "ru",
          keyText: "1",
          shiftKeyText: "!",
        },
        {
          lang: "en",
          keyText: "1",
          shiftKeyText: "!",
        },
      ],
      eventCode: "Digit1",
      type: "text",
    },
    {
      langs: [
        {
          lang: "ru",
          keyText: "2",
          shiftKeyText: '"',
        },
        {
          lang: "en",
          keyText: "2",
          shiftKeyText: "@",
        },
      ],
      eventCode: "Digit2",
      type: "text",
    },

    {
      langs: [
        {
          lang: "ru",
          keyText: "3",
          shiftKeyText: "№",
        },
        {
          lang: "en",
          keyText: "3",
          shiftKeyText: "#",
        },
      ],
      eventCode: "Digit3",
      type: "text",
    },

    {
      langs: [
        {
          lang: "ru",
          keyText: "4",
          shiftKeyText: ";",
        },
        {
          lang: "en",
          keyText: "4",
          shiftKeyText: "$",
        },
      ],
      eventCode: "Digit4",
      type: "text",
    },
    {
      langs: [
        {
          lang: "ru",
          keyText: "5",
          shiftKeyText: "%",
        },
        {
          lang: "en",
          keyText: "5",
          shiftKeyText: "%",
        },
      ],
      eventCode: "Digit5",
      type: "text",
    },
    {
      langs: [
        {
          lang: "ru",
          keyText: "6",
          shiftKeyText: ":",
        },
        {
          lang: "en",
          keyText: "6",
          shiftKeyText: "^",
        },
      ],
      eventCode: "Digit6",
      type: "text",
    },

    {
      langs: [
        {
          lang: "ru",
          keyText: "7",
          shiftKeyText: "?",
        },
        {
          lang: "en",
          keyText: "7",
          shiftKeyText: "&",
        },
      ],
      eventCode: "Digit7",
      type: "text",
    },

    {
      langs: [
        {
          lang: "ru",
          keyText: "8",
          shiftKeyText: "*",
        },
        {
          lang: "en",
          keyText: "8",
          shiftKeyText: "*",
        },
      ],
      eventCode: "Digit8",
      type: "text",
    },

    {
      langs: [
        {
          lang: "ru",
          keyText: "9",
          shiftKeyText: "(",
        },
        {
          lang: "en",
          keyText: "9",
          shiftKeyText: "(",
        },
      ],
      eventCode: "Digit9",
      type: "text",
    },

    {
      langs: [
        {
          lang: "ru",
          keyText: "0",
          shiftKeyText: ")",
        },
        {
          lang: "en",
          keyText: "0",
          shiftKeyText: ")",
        },
      ],
      eventCode: "Digit0",
      type: "text",
    },

    {
      langs: [
        {
          lang: "ru",
          keyText: "-",
          shiftKeyText: "_",
        },
        {
          lang: "en",
          keyText: "-",
          shiftKeyText: "_",
        },
      ],
      eventCode: "Minus",
      type: "text",
    },

    {
      langs: [
        {
          lang: "ru",
          keyText: "=",
          shiftKeyText: "+",
        },
        {
          lang: "en",
          keyText: "=",
          shiftKeyText: "+",
        },
      ],
      eventCode: "Equal",
      type: "text",
    },
    {
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
      },
    },
  ],

  // row 2
  [
    {
      langs: [
        {
          lang: "ru",
          keyText: "Tab",
          keyValue: "  ",
        },
        {
          lang: "en",
          keyText: "Tab",
          keyValue: "  ",
        },
      ],
      eventCode: "Tab",
      type: "system",
    },

    {
      langs: [
        {
          lang: "ru",
          keyText: "й",
        },
        {
          lang: "en",
          keyText: "q",
        },
      ],
      eventCode: "KeyQ",
      type: "text",
    },

    {
      langs: [
        {
          lang: "ru",
          keyText: "ц",
        },
        {
          lang: "en",
          keyText: "w",
        },
      ],
      eventCode: "KeyW",
      type: "text",
    },

    {
      langs: [
        {
          lang: "ru",
          keyText: "у",
        },
        {
          lang: "en",
          keyText: "e",
        },
      ],
      eventCode: "KeyE",
      type: "text",
    },

    {
      langs: [
        {
          lang: "ru",
          keyText: "к",
        },
        {
          lang: "en",
          keyText: "r",
        },
      ],
      eventCode: "KeyR",
      type: "text",
    },

    {
      langs: [
        {
          lang: "ru",
          keyText: "е",
        },
        {
          lang: "en",
          keyText: "t",
        },
      ],
      eventCode: "KeyT",
      type: "text",
    },

    {
      langs: [
        {
          lang: "ru",
          keyText: "н",
        },
        {
          lang: "en",
          keyText: "y",
        },
      ],
      eventCode: "KeyY",
      type: "text",
    },

    {
      langs: [
        {
          lang: "ru",
          keyText: "г",
        },
        {
          lang: "en",
          keyText: "u",
        },
      ],
      eventCode: "KeyU",
      type: "text",
    },

    {
      langs: [
        {
          lang: "ru",
          keyText: "ш",
        },
        {
          lang: "en",
          keyText: "i",
        },
      ],
      eventCode: "KeyI",
      type: "text",
    },

    {
      langs: [
        {
          lang: "ru",
          keyText: "щ",
        },
        {
          lang: "en",
          keyText: "o",
        },
      ],
      eventCode: "KeyO",
      type: "text",
    },

    {
      langs: [
        {
          lang: "ru",
          keyText: "з",
        },
        {
          lang: "en",
          keyText: "p",
        },
      ],
      eventCode: "KeyP",
      type: "text",
    },

    {
      langs: [
        {
          lang: "ru",
          keyText: "х",
        },
        {
          lang: "en",
          keyText: "[",
        },
      ],
      eventCode: "BracketLeft",
      type: "text",
    },

    {
      langs: [
        {
          lang: "ru",
          keyText: "ъ",
        },
        {
          lang: "en",
          keyText: "]",
        },
      ],
      eventCode: "BracketRight",
      type: "text",
    },

    {
      langs: [
        {
          lang: "ru",
          keyText: "\\",
          shiftKeyText: "/",
        },
        {
          lang: "en",
          keyText: "\\",
          shiftKeyText: "/",
        },
      ],
      eventCode: "Backslash",
      type: "text",
    },

    {
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
      langs: [
        {
          lang: "ru",
          keyText: "ф",
        },
        {
          lang: "en",
          keyText: "a",
        },
      ],
      eventCode: "KeyA",
      type: "text",
    },

    {
      langs: [
        {
          lang: "ru",
          keyText: "ы",
        },
        {
          lang: "en",
          keyText: "s",
        },
      ],
      eventCode: "KeyS",
      type: "text",
    },

    {
      langs: [
        {
          lang: "ru",
          keyText: "в",
        },
        {
          lang: "en",
          keyText: "d",
        },
      ],
      eventCode: "KeyD",
      type: "text",
    },

    {
      langs: [
        {
          lang: "ru",
          keyText: "а",
        },
        {
          lang: "en",
          keyText: "f",
        },
      ],
      eventCode: "KeyF",
      type: "text",
    },

    {
      langs: [
        {
          lang: "ru",
          keyText: "п",
        },
        {
          lang: "en",
          keyText: "g",
        },
      ],
      eventCode: "KeyG",
      type: "text",
    },

    {
      langs: [
        {
          lang: "ru",
          keyText: "р",
        },
        {
          lang: "en",
          keyText: "h",
        },
      ],
      eventCode: "KeyH",
      type: "text",
    },

    {
      langs: [
        {
          lang: "ru",
          keyText: "о",
        },
        {
          lang: "en",
          keyText: "j",
        },
      ],
      eventCode: "KeyJ",
      type: "text",
    },

    {
      langs: [
        {
          lang: "ru",
          keyText: "л",
        },
        {
          lang: "en",
          keyText: "k",
        },
      ],
      eventCode: "KeyK",
      type: "text",
    },

    {
      langs: [
        {
          lang: "ru",
          keyText: "д",
        },
        {
          lang: "en",
          keyText: "l",
        },
      ],
      eventCode: "KeyL",
      type: "text",
    },

    {
      langs: [
        {
          lang: "ru",
          keyText: "ж",
        },
        {
          lang: "en",
          keyText: ";",
        },
      ],
      eventCode: "Semicolon",
      type: "text",
    },

    {
      langs: [
        {
          lang: "ru",
          keyText: "э",
        },
        {
          lang: "en",
          keyText: "'",
        },
      ],
      eventCode: "Quote",
      type: "text",
    },

    {
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
      type: "system",
      class: "enter",
    },
  ],

  //  row 4
  [
    {
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
      langs: [
        {
          lang: "ru",
          keyText: "я",
        },
        {
          lang: "en",
          keyText: "z",
        },
      ],
      eventCode: "KeyZ",
      type: "text",
    },

    {
      langs: [
        {
          lang: "ru",
          keyText: "ч",
        },
        {
          lang: "en",
          keyText: "x",
        },
      ],
      eventCode: "KeyX",
      type: "text",
    },

    {
      langs: [
        {
          lang: "ru",
          keyText: "с",
        },
        {
          lang: "en",
          keyText: "c",
        },
      ],
      eventCode: "KeyC",
      type: "text",
    },

    {
      langs: [
        {
          lang: "ru",
          keyText: "м",
        },
        {
          lang: "en",
          keyText: "v",
        },
      ],
      eventCode: "KeyV",
      type: "text",
    },

    {
      langs: [
        {
          lang: "ru",
          keyText: "и",
        },
        {
          lang: "en",
          keyText: "b",
        },
      ],
      eventCode: "KeyB",
      type: "text",
    },

    {
      langs: [
        {
          lang: "ru",
          keyText: "т",
        },
        {
          lang: "en",
          keyText: "n",
        },
      ],
      eventCode: "KeyN",
      type: "text",
    },

    {
      langs: [
        {
          lang: "ru",
          keyText: "ь",
        },
        {
          lang: "en",
          keyText: "m",
        },
      ],
      eventCode: "KeyM",
      type: "text",
    },

    {
      langs: [
        {
          lang: "ru",
          keyText: "б",
        },
        {
          lang: "en",
          keyText: ",",
        },
      ],
      eventCode: "Comma",
      type: "text",
    },

    {
      langs: [
        {
          lang: "ru",
          keyText: "ю",
        },
        {
          lang: "en",
          keyText: ".",
        },
      ],
      eventCode: "Period",
      type: "text",
    },

    {
      langs: [
        {
          lang: "ru",
          keyText: "/",
        },
        {
          lang: "en",
          keyText: "/",
        },
      ],
      eventCode: "Slash",
      type: "text",
    },

    {
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
