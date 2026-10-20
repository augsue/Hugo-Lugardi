import { ThemeProvider, GlobalStyles, CssBaseline } from "@mui/material";
import { theme } from "./theme";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Wiki from "./pages/Wiki";
import fontFile from "./assets/fonts/CarlBrown.woff2"; // Ajuste para o caminho correto da fonte

const fontStyles = (
  <GlobalStyles
    styles={{
      "@font-face": {
        fontFamily: "Eloquence",
        src: `url(${fontFile}) format('woff2')`,
        fontWeight: 400,
        fontStyle: "normal",
        fontDisplay: "swap",
      },
    }}
  />
);

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        {fontStyles}
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wiki/:slug" element={<Wiki />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}
