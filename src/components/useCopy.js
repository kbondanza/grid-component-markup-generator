import React from "react";

function useCopy({ text, onSuccess, onError }) {
  function copy() {
    const navigator = window.navigator.clipboard;
    console.error(!!navigator, "nav");
    if (!!navigator) {
      navigator
        .writeText(text)
        .then(onSuccess)
        .catch(onError);
    } else {
      const textarea = document.createElement("textarea");
      textarea.textContent = text;
      document.body.appendChild(textarea);
      textarea.select();
      try {
        console.error("exec successful");
        return document.execCommand("copy");
      } catch (error) {
        console.error("error");
      }
      return document.body.removeChild(textarea);
    }
  }
}
