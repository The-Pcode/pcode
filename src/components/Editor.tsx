import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { python } from "@codemirror/lang-python";
import { useEffect, useState } from "react";


const Editor = ({ isDark, lang }: { isDark: boolean; lang: string }) => {
  const [value, setValue] = useState<string>(``);

  useEffect(() => {
    switch (lang) {
      case "javascript":
        setValue(_js);
        break;
      case "css":
        setValue(_css);
        break;
      case "html":
        setValue(_html);
        break;
      case "python":
        setValue(_python);
        break;

      default:
        setValue(_jsx);
        break;
    }
  }, [lang]);

  return (
    <div className="h-auto px-2 pb-2">
      <CodeMirror
        value={value}
        height="auto"
        className="codemirror"
        extensions={[
          lang === "javascript"
            ? javascript()
            : lang === "css"
            ? css()
            : lang === "html"
            ? html()
            : lang === "python"
            ? python()
            : javascript({ jsx: true }),
        ]}
        theme={isDark ? "dark" : "light"}
        onChange={(value, viewUpdate) => {
          // console.log("value:", value);
        }}
      />
    </div>
  );
};

export default Editor;


export const _js = `console.log("javascript");`

export const _css = `#text {
    font-size: 40px
}`

export const _html = `<h1>hello world</h1>`

export const _python = `print("hello world")`

export const _jsx = `import React from "react";

const App = () => {
  return (
    <div>hello world</div>
  )
}
          
export default App;`