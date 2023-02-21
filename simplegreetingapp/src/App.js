import { useMemo, useState } from "react";
import Container from "./components/Container";
import Heading from "./components/Heading";
import Footer from "./components/Footer";
import Pages from "./components/Pages";
import ContactUsPage from "./components/contactUsPage/ContactUsPage";
import Catalog from "./components/Catalog";

function App() {
  const [activePage, setActivePage] = useState("home");

  const headerButtons = useMemo(() => {
    return [
      {
        onClick: () => {
          setActivePage("home");
        },
        label: "Home",
      },
      {
        onClick: () => {
          setActivePage("catalog");
        },
        label: "Cataloge",
      },
      {
        onClick: () => {
          setActivePage("Contact us");
        },
        label: "Contact Us!",
      },
    ];
  }, []);
  return (
    <Container>
      <Heading pages={headerButtons} />
      {activePage === 'home' && <Pages />}
      {activePage === "catalog" && <ContactUsPage />}
      {activePage === 'contact us' && <Catalog />}
      
      <Footer />
    </Container>
  );
}

export default App;
