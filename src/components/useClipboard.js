import { useState } from "react";

export default function useClipboard({
  clipboard = window.navigator.clipboard,
  delay = 3000
} = {}) {
  const [isCopied, setIsCopied] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  function copy(content) {
    if (!!clipboard && !!content) {
      clipboard
        .writeText(content)
        .then(() => {
          setIsCopied(true);
          setTimeout(() => {
            setIsCopied(false);
          }, delay);
        })
        .catch(error => {
          setIsCopied(false);
          setErrorMessage(error);
        });
    } else {
      const textarea = document.createElement("textarea");
      textarea.setAttribute(
        "style",
        "position: absolute; left: -10000px; top: auto; width: 1px; height: 1px; overflow: hidden; transform: translateZ(0)"
      );
      textarea.textContent = content;
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand("copy");
        document.body.removeChild(textarea);
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, delay);
      } catch (error) {
        setIsCopied(false);
        setErrorMessage(error);
      }
    }
  }
  return [copy, isCopied, errorMessage];
}
