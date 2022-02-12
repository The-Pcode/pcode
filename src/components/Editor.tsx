import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";

const value = `import React from "react";

const App = () => {
  return (
    <div>hello world</div>
  )
}

export default App;`;

const Editor = ({ isDark, lang }: { isDark: any; lang: any }) => {

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
