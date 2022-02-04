import { Routes, Route } from "react-router-dom";
import Layout from "./layout/layout";
import AboutPage from "./pages/aboutPage";
import HomePage from "./pages/homePage";
import TemplatePage from "./pages/templatePage";

function App() {
  return (
      <Layout>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/template" element={<TemplatePage />} />
        <Route path="/about" element={<AboutPage />} />
    </Routes>
      </Layout>
  );
}

export default App;
