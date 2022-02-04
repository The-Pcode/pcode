import { ReactNode } from "react";
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

export default Layout;
