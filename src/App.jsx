import React from "react";
import Routing from "./utils/Routing.jsx";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Box } from "@mui/system";
import "./App.css";
import NavSection from "./components/navSection/NavSection.jsx";
import isAuth from "./utilsFunctions/isAuth.js";

const App = () => {
  const navigate = ["Home", "Login", "Send email", "Drafts"];
  const helmetContext = {};
  return (
    <>
      <HelmetProvider context={helmetContext}>
        <BrowserRouter>
          {isAuth(navigate).includes("Login") ? null : <NavSection />}
          <main>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <Routing />
            </Box>
          </main>
        </BrowserRouter>
      </HelmetProvider>
    </>
  );
};

export default App;
