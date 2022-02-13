import { ReactNode } from "react";
import Footer from "../components/footer";
import Navigation from "../components/navigation";

const Layout = ({ children }: { children: ReactNode }) : JSX.Element => {
  return (
    <div className="max-w-7xl min-h-screen mx-auto relative pt-2  flex flex-col items-center">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
