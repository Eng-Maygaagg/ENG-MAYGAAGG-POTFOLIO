import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./Pages/Home";
import AboutePage from "./Pages/About";
import SkillsPage from "./Pages/Skills";
import ProjectsPage from "./Pages/Projects";
import ResumePage from "./Pages/Resume";
import ContactPage from "./Pages/Contacts";
import LayOut from "./Layout";
import ThemeProvider from "./ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LayOut />}>
              <Route index element={<HomePage />}/>
              <Route path="/about" element={<AboutePage />}/>
              <Route path="/skills" element={<SkillsPage />}/>
              <Route path="/projects" element={<ProjectsPage />}/>
              <Route path="/resume" element={<ResumePage />}/>
              <Route path="/contact" element={<ContactPage />}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;