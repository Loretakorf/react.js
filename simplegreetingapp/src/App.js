import { useMemo } from "react";
import Container from "./components/Container";
import { Routes, Route } from "react-router-dom";
import Heading from "./components/Heading";
import Footer from "./components/Footer";
import Pages from "./components/Pages";
import ContactUsPage from "./components/ContactUsPage";
import Catalog from "./components/Catalog";
import NotFoundPage from "./components/NotFoundPage";
import { routes } from "./constants/routes.js";

function App() {
  const headerButtons = useMemo(() => {
    return [
      {
        to: routes.pages,
        label: "Home",
      },
      {
        to: routes.catalog,
        label: "Cataloge",
      },
      {
        to: routes.contactUsPage,
        label: "Contact Us!",
      },
    ];
  }, []);
  return (
    <Container>
      <Heading pages={headerButtons} />
      <Routes>
        <Route path={routes.pages} element={<Pages />} />
        <Route path={routes.catalog} element={<Catalog />} />
        <Route path={routes.contactUsPage} element={<ContactUsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </Container>
  );
}

export default App;
