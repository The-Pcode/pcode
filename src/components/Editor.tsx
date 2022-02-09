
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

const Editor = () => {

  const value = `import { ReactNode } from "react";
  import Footer from "../components/footer";
  import Navigation from "../components/navigation";
  
  const Layout = ({ children }: { children: ReactNode }) => {
    return (
      <div className="max-w-7xl min-h-screen mx-auto relative">
        <Navigation />
          {children}
        <Footer />
      </div>
    );
  };
  
  export default Layout;`

  return (
    <div className="h-auto px-2 pb-2">
      <CodeMirror
        value={value}
        height="auto"
        className="codemirror"
        extensions={[javascript({ jsx: true })] }
        theme='dark'
        onChange={(value, viewUpdate) => {
          console.log("value:", value);
        }}
      />
    </div>
  );
};

export default Editor;
