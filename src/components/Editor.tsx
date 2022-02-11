import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

const Editor = ({ isDark }: { isDark: any }) => {
  const value = `import React from "react";

const App = () => {
  return (
    <div>hello world</div>
  )
}

export default App;  `;

  return (
    <div className="h-auto px-2 pb-2">
      <CodeMirror
        value={value}
        height="auto"
        className="codemirror"
        extensions={[javascript({ jsx: true })]}
        theme={isDark ? "dark" : "light"}
        onChange={(value, viewUpdate) => {
          console.log("value:", value);
        }}
      />
    </div>
  );
};

export default Editor;
