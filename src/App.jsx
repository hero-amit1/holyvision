<<<<<<< HEAD
import React, { Suspense } from "react";
=======
import React from "react";
>>>>>>> bc45de04a9e2df21854d4342e6432f2845819771
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import whatsappImage from "./assets/whatsapp.png";

<<<<<<< HEAD
/* --------------------------
   LAZY LOADED PAGES
--------------------------- */
const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const PclGeneralMedicinePage = React.lazy(() =>
  import("./pages/GeneralMedicine")
);
const PclNursingPage = React.lazy(() => import("./pages/PCLNursing"));
const DiplomaInPharmacyPage = React.lazy(() =>
  import("./pages/DiplomaPharmacy")
);
const GalleryContent = React.lazy(() => import("./pages/Gallery"));
const ContactPage = React.lazy(() => import("./pages/ContactPage"));
const CaregiverProgramPage = React.lazy(() => import("./pages/Caregiver"));
const Scholarship = React.lazy(() => import("./pages/Scholarship"));
const Notice = React.lazy(() => import("./pages/Notice"));
const ApplyPage = React.lazy(() => import("./components/ApplyPage"));

/* NEW PAGES */
const Introduction = React.lazy(() => import("./pages/Introduction"));
const BoardOfDirector = React.lazy(() =>
  import("./pages/BoardOfDirector")
);
const Team = React.lazy(() => import("./pages/Team"));
=======
// Existing Pages
import Home from "./pages/Home";
import About from "./pages/About";
import PclGeneralMedicinePage from "./pages/GeneralMedicine";
import PclNursingPage from "./pages/PCLNursing";
import DiplomaInPharmacyPage from "./pages/DiplomaPharmacy";
import GalleryContent from "./pages/Gallery";
import ContactPage from "./pages/ContactPage";
import CaregiverProgramPage from "./pages/Caregiver";
import Scholarship from "./pages/Scholarship";
import Notice from "./pages/Notice";
import ApplyPage from "./components/ApplyPage";

// NEW PAGES
import Introduction from "./pages/Introduction";
import BoardOfDirector from "./pages/BoardOfDirector";   // ✔ correct
import Team from "./pages/Team";
>>>>>>> bc45de04a9e2df21854d4342e6432f2845819771

const App = () => {
  return (
    <BrowserRouter>
<<<<<<< HEAD
      <Suspense fallback={<div className="loading-screen">Loading...</div>}>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/holyvision" element={<Home />} />

            {/* Academic Programs */}
            <Route
              path="/pcl-in-general-medicine"
              element={<PclGeneralMedicinePage />}
            />
            <Route path="/pcl-in-nursing" element={<PclNursingPage />} />
            <Route
              path="/diploma-in-pharmacy"
              element={<DiplomaInPharmacyPage />}
            />
            <Route
              path="/caregiver-program"
              element={<CaregiverProgramPage />}
            />

            {/* General Pages */}
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<GalleryContent />} />
            <Route path="/scholarship" element={<Scholarship />} />
            <Route path="/notice" element={<Notice />} />
            <Route path="/apply" element={<ApplyPage />} />

            {/* NEW PAGES */}
            <Route path="/introduction" element={<Introduction />} />
            <Route
              path="/board-of-directors"
              element={<BoardOfDirector />}
            />
            <Route path="/team" element={<Team />} />
          </Routes>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/+9779851380074"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
          >
            <img src={whatsappImage} alt="WhatsApp" />
          </a>
        </div>
      </Suspense>
=======
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/holyvision" element={<Home />} />

          {/* Academic Programs */}
          <Route path="/pcl-in-general-medicine" element={<PclGeneralMedicinePage />} />
          <Route path="/pcl-in-nursing" element={<PclNursingPage />} />
          <Route path="/diploma-in-pharmacy" element={<DiplomaInPharmacyPage />} />
          <Route path="/caregiver-program" element={<CaregiverProgramPage />} />

          {/* General Pages */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<GalleryContent />} />
          <Route path="/scholarship" element={<Scholarship />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/apply" element={<ApplyPage />} />

          {/* NEW PAGES */}
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/board-of-directors" element={<BoardOfDirector />} />  {/* ✔ FIXED */}
          <Route path="/team" element={<Team />} />
        </Routes>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/+9779851380074"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          <img src={whatsappImage} alt="WhatsApp" />
        </a>
      </div>
>>>>>>> bc45de04a9e2df21854d4342e6432f2845819771
    </BrowserRouter>
  );
};

export default App;
