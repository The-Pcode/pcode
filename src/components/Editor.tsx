import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";
import "codemirror/theme/material.css";
import "codemirror/theme/duotone-dark.css";
import "codemirror/theme/yonce.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/jsx/jsx";
import { Controlled as ControlledEditor } from "react-codemirror2";
import { useState } from "react";

const Editor = () => {
  const [value, setValue] = useState("");

  const handleChange = (editor: any, data: any, value:any) => {
    setValue(value)
  }

  return (
    <div className="h-auto">
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"

        options={{
          lineWrapping: true,
          line: true,
          mode: "jsx",
          theme: "material",
          lineNumbers: true,
        }}
      />
    </div>
  );
};

export default Editor;
