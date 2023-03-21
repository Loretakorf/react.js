import "./App.css";
import { useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout.js";
import Navbar from "./components/Navbar/Navbar.js";
import HomePage from "./pages/HomePage/HomePage.js";
import GalleryPage from "./pages/GalleryPage/GalleryPage.js";
import CustomerSupportPage from "./pages/CustomerSupportPage/CustomerSupportPage.js";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { routes } from "./constants/routes.js";
import ArtworkPage from "./pages/ArtworkPage/ArtworkPage";

function App() {
  const headerLinks = useMemo(() => {
    return [
      {
        to: routes.homePage,
        label: "Home",
      },
      {
        to: routes.galleryPage,
        label: "Gallery",
      },
      {
        to: routes.customerSupportPage,
        label: " Customer Support",
      },
    ];
  }, []);

  return (
    <div className="App">
      <Navbar pages={headerLinks} />
      <Layout>
        <Routes>
          <Route path={routes.artworkPage} element={<ArtworkPage/>}/>
          <Route path={routes.homePage} element={<HomePage />} />
          <Route path={routes.galleryPage} element={<GalleryPage />} />
          <Route
            path={routes.customerSupportPage}
            element={<CustomerSupportPage />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
