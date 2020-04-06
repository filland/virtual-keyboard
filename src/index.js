import "./style.css";

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

const russian = "ru";
const english = "en";

let keyboardState = {
  ctrlPressed: false,
  shiftPressed: false,
  lang: russian,
};

function toggleCtrl() {
  setState({ ctrlPressed: !keyboardState.ctrlPressed });
  tryChangeLang();
}

function toggleShift() {
  setState({ shiftPressed: !keyboardState.shiftPressed });
  tryChangeLang();
}

function setState(objct) {
  keyboardState = { ...keyboardState, ...objct };
}

function tryChangeLang() {
  if (keyboardState.ctrlPressed && keyboardState.shiftPressed) {
    keyboardState.lang = keyboardState.lang === russian ? english : russian;
    // update keyboard...
  }
}

const keyboardConfig = [
  [
    {
      key: {
        ru: {
          key: "ё",
        },
        en: {
          key: "`",
          shiftKey: "~",
        },
      },
      eventCode: "Backquote",
      type: "text",
    },
    { key: "1", shiftKey: "!", eventCode: "Digit1", type: "text" },
    {
      key: {
        ru: {
          key: "2",
          shiftKey: '"',
        },
        en: {
          key: "2",
          shiftKey: "@",
        },
      },
      eventCode: "Digit2",
      type: "text",
    },
    {
      key: {
        ru: {
          key: "3",
          shiftKey: "№",
        },
        en: {
          key: "3",
          shiftKey: "#",
        },
      },
      eventCode: "Digit3",
      type: "text",
    },
    {
      key: {
        ru: {
          key: "4",
          shiftKey: ";",
        },
        en: {
          key: "4",
          shiftKey: "$",
        },
      },
      eventCode: "Digit4",
      type: "text",
    },
    { key: "5", shiftKey: "%", eventCode: "Digit5", type: "text" },
    {
      key: {
        ru: {
          key: "6",
          shiftKey: ":",
        },
        en: {
          key: "6",
          shiftKey: "^",
        },
      },
      eventCode: "Digit6",
      type: "text",
    },
    {
      key: {
        ru: {
          key: "7",
          shiftKey: "?",
        },
        en: {
          key: "7",
          shiftKey: "&",
        },
      },
      eventCode: "Digit7",
      type: "text",
    },
    { key: "8", shiftKey: "*", eventCode: "Digit8", type: "text" },
    { key: "9", shiftKey: "(", eventCode: "Digit9", type: "text" },
    { key: "0", shiftKey: ")", eventCode: "Digit0", type: "text" },
    { key: "-", shiftKey: "_", eventCode: "Minus", type: "text" },
    { key: "=", shiftKey: "+", eventCode: "Equal", type: "text" },
    {
      key: "Backspace",
      value: "",
      handler: () => {
        textarea.value = textarea.value.substring(0, textarea.value.length - 1);
      },
      class: "backspace",
      type: "system",
    },
  ],
  [
    { key: "Tab", value: "   ", type: "system" },
    {
      key: {
        ru: {
          key: "й",
        },
        en: {
          key: "q",
        },
      },
      eventCode: "KeyQ",
      type: "text",
    },
    {
      key: {
        ru: {
          key: "ц",
        },
        en: {
          key: "w",
        },
      },
      eventCode: "KeyW",
      type: "text",
    },
    {
      key: {
        ru: {
          key: "у",
        },
        en: {
          key: "e",
        },
      },
      eventCode: "KeyE",
      type: "text",
    },
    {
      key: {
        ru: {
          key: "к",
        },
        en: {
          key: "r",
        },
      },
      eventCode: "KeyR",
      type: "text",
    },
    {
      key: {
        ru: {
          key: "е",
        },
        en: {
          key: "t",
        },
      },
      eventCode: "KeyT",
      type: "text",
    },
    {
      key: {
        ru: {
          key: "н",
        },
        en: {
          key: "y",
        },
      },
      eventCode: "KeyY",
      type: "text",
    },
    {
      key: {
        ru: {
          key: "г",
        },
        en: { key: "u" },
      },
      eventCode: "KeyU",
      type: "text",
    },
    {
      key: {
        ru: {
          key: "ш",
        },
        en: {
          key: "u",
        },
      },
      eventCode: "KeyI",
      type: "text",
    },
    {
      key: {
        ru: {
          key: "щ",
        },
        en: {
          key: "o",
        },
      },
      eventCode: "KeyO",
      type: "text",
    },
    {
      key: {
        ru: {
          key: "з",
        },
        en: {
          key: "p",
        },
      },
      eventCode: "KeyP",
      type: "text",
    },
    {
      key: {
        ru: {
          key: "х",
        },
        en: {
          key: "[",
        },
      },
      eventCode: "BracketLeft",
      type: "text",
    },
    {
      key: {
        ru: {
          key: "ъ",
        },
        en: {
          key: "]",
        },
      },
      eventCode: "BracketRight",
      type: "text",
    },
    { key: "\\", shiftKey: "/", type: "text" },
    { key: "Del", value: "", eventCode: "Delete", type: "system" },
  ],
  [
    {
      key: "CapsLock",
      value: "",
      class: "caps-lock",
      handler: () => {},
      type: "system",
    },
    {
      key: {
        ru: {
          key: "ф",
        },
        en: {
          key: "a",
        },
      },
      eventCode: "KeyA",
      type: "text",
    },
    {
      key: {
        ru: {
          key: "ы",
        },
        en: {
          key: "s",
        },
      },
      eventCode: "KeyS",
      type: "text",
    },
    {
      key: {
        ru: {
          key: "в",
        },
        en: {
          key: "d",
        },
      },
      eventCode: "KeyD",
      type: "text",
    },
    {
      key: {
        ru: {
          key: "а",
        },
        en: {
          key: "f",
        },
      },
      eventCode: "KeyF",
      type: "text",
    },
    {
      key: {
        ru: {
          key: "п",
        },
        en: {
          key: "g",
        },
      },
      eventCode: "KeyG",
      type: "text",
    },
    {
      key: {
        ru: {
          key: "р",
        },
        en: {
          key: "h",
        },
      },
      eventCode: "KeyH",
      type: "text",
    },
    {
      key: {
        ru: {
          key: "о",
        },
        en: {
          key: "j",
        },
      },
      eventCode: "KeyJ",
      type: "text",
    },
    {
      key: {
        ru: {
          key: "л",
        },
        en: {
          key: "k",
        },
      },
      eventCode: "KeyK",
      type: "text",
    },
    {
      key: {
        ru: {
          key: "д",
        },
        en: {
          key: "l",
        },
      },
      eventCode: "KeyL",
      type: "text",
    },
    {
      key: {
        ru: {
          key: "ж",
        },
        en: {
          key: ";",
        },
      },
      eventCode: "Semicolon",
      type: "text",
    },
    {
      key: {
        ru: {
          key: "э",
        },
        en: {
          key: "'",
        },
      },
      eventCode: "Quote",
      type: "text",
    },
    { key: "Enter", value: "\r", class: "enter", type: "system" },
  ],
  [
    {
      key: "Shift",
      value: "",
      class: "left-shift",
      eventCode: "ShiftLeft",
      type: "system",
    },
    {
      key: {
        ru: {
          key: "я",
        },
        en: {
          key: "z",
        },
      },
      eventCode: "KeyZ",
      type: "text",
    },
    {
      key: {
        ru: {
          key: "ч",
        },
        en: {
          key: "x",
        },
      },
      eventCode: "KeyX",
      type: "text",
    },
    {
      key: {
        ru: {
          key: "с",
        },
        en: {
          key: "c",
        },
      },
      eventCode: "KeyC",
      type: "text",
    },
    {
      key: {
        ru: {
          key: "м",
        },
        en: {
          key: "v",
        },
      },
      eventCode: "KeyV",
      type: "text",
    },
    {
      key: {
        ru: {
          key: "и",
        },
        en: {
          key: "b",
        },
      },
      eventCode: "KeyB",
      type: "text",
    },
    {
      key: {
        ru: {
          key: "т",
        },
        en: {
          key: "n",
        },
      },
      eventCode: "KeyN",
      type: "text",
    },
    {
      key: {
        ru: {
          key: "ь",
        },
        en: {
          key: "m",
        },
      },
      eventCode: "KeyM",
      type: "text",
    },
    {
      key: {
        ru: {
          key: "б",
        },
        en: {
          key: ",",
        },
      },
      eventCode: "Comma",
      type: "text",
    },
    {
      key: {
        ru: {
          key: "ю",
        },
        en: {
          key: ".",
        },
      },
      eventCode: "Period",
      type: "text",
    },
    { key: "/", eventCode: "Slash", type: "text" },
    { key: "up", value: "🠙", eventCode: "ArrowUp", type: "system" },
    { key: "Shift", value: "", eventCode: "ShiftRight", type: "system" },
  ],
  [
    {
      key: "Ctrl",
      value: "",
      class: "ctrl",
      eventCode: "ControlLeft",
      type: "system",
    },
    { key: "Win", value: "", eventCode: "MetaLeft", type: "system" },
    { key: "Alt", value: "", eventCode: "AltLeft", type: "system" },
    {
      key: "Whitespace",
      displayName: " ",
      value: " ",
      class: "whitespace",
      type: "system",
    },
    { key: "Alt", value: "", eventCode: "AltRight", type: "system" },
    {
      key: "Ctrl",
      value: "",
      class: "ctrl",
      eventCode: "ControlRight",
      type: "system",
    },
    { key: "left", value: "🠘", eventCode: "ArrowLeft", type: "system" },
    { key: "down", value: "🠛", eventCode: "ArrowDown", type: "system" },
    { key: "right", value: "🠚", eventCode: "ArrowRight", type: "system" },
  ],
];

//  init keyboard html elements

const keyboard = document.createElement("div");
keyboard.classList.add("keyboard");

main.appendChild(keyboard);

for (let i = 0; i < keyboardConfig.length; i++) {
  const row = keyboardConfig[i];

  let rowDiv = document.createElement("div");
  rowDiv.classList.add("row");

  for (let y = 0; y < row.length; y++) {
    const key = row[y];

    // create div for the key
    let keyDiv = document.createElement("div");
    keyDiv.classList.add("text-button");

    // visible text of key
    let keyDisplayName;

    // key value that shoud be added to the textarea
    let keyValue;

    // visible text of shift key
    let keyShiftValue;

    if (key.type === "system") {
      keyValue = key.key;
      keyDisplayName = key.key;

      // set key in the top left corner
      if (key.shiftKey) {
        keyShiftValue = key.shiftKey;
      }
    } else if ((key.type = "text")) {
      // case when text key same in ru and in en
      if (typeof key.key !== "object") {
        keyValue = key.key;
        keyDisplayName = key.key;
        if (key.shiftKey) {
          keyShiftValue = key.shiftKey;
        }
      } else if (typeof key.key === "object") {
        let tempKey;

        switch (keyboardState.lang) {
          case russian:
            tempKey = key.key.ru;
            break;
          case english:
            tempKey = key.key.en;
            break;
        }

        if (tempKey.key) {
          keyValue = tempKey.key;
          keyDisplayName = tempKey.key;
        }

        // set key in the top left corner
        if (tempKey.shiftKey) {
          keyShiftValue = tempKey.shiftKey;
        }
      } else {
        throw new Error("such key type not supported!");
      }
    } else {
      throw new Error("key type not specified!");
    }

    // if key has the value property then it should be used as text that will be added
    // to the textarea on click on this key
    if (key.hasOwnProperty("value")) {
      keyValue = key.value;
    }

    // if key has the displayName property then it should be used as key display text
    if (key.hasOwnProperty("displayName")) {
      keyDisplayName = key.displayName;
    }

    // create key
    let keyValueSpan = document.createElement("span");
    keyValueSpan.classList.add("text-button__key");
    keyValueSpan.innerText = keyDisplayName;
    keyDiv.appendChild(keyValueSpan);

    if (keyShiftValue) {
      let shiftKeyValueSpan = document.createElement("span");
      shiftKeyValueSpan.classList.add("text-button__shift-key");
      shiftKeyValueSpan.innerText = keyShiftValue;
      keyDiv.appendChild(shiftKeyValueSpan);
    }

    // set width of key
    if (key.class) {
      keyDiv.classList.add(key.class);
    } else {
      keyDiv.style.flex = "1";
    }

    keyDiv.addEventListener("click", (e) => {
      textarea.value = textarea.value + keyValue;
      if (key.handler) {
        key.handler();
      }
    });

    document.addEventListener("keydown", (e) => {
      // key pressed not when cursor is in the textarea
      if (key.eventCode && e.code === key.eventCode) {
        keyDiv.classList.add("text-button__pressed");

        if (e.target !== textarea) {
          textarea.value = textarea.value + keyValue;
          if (key.handler) {
            key.handler();
          }
        }
      } else if (e.key === keyDisplayName && !key.eventCode) {
        keyDiv.classList.add("text-button__pressed");
        if (e.target !== textarea) {
          textarea.value = textarea.value + keyValue;
          if (key.handler) {
            key.handler();
          }
        }
      }
    });

    document.addEventListener("keyup", (e) => {
      if (key.eventCode && e.code === key.eventCode) {
        keyDiv.classList.remove("text-button__pressed");
      } else if (e.key === keyDisplayName) {
        keyDiv.classList.remove("text-button__pressed");
      }
    });

    rowDiv.appendChild(keyDiv);
  }

  keyboard.appendChild(rowDiv);
}

document.addEventListener("keydown", (e) => {
  tryToggleLangKeys(e);
});

document.addEventListener("keyup", (e) => {
  tryToggleLangKeys(e);
});

function tryToggleLangKeys(e) {
  if (e.key === "Shift") {
    toggleShift();
  }
  if (e.key === "Control") {
    toggleCtrl();
  }
}
