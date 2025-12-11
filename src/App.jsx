import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import whatsappImage from "./assets/whatsapp.png";

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

const App = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default App;
