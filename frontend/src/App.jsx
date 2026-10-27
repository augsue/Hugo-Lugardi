import { ThemeProvider, GlobalStyles, CssBaseline } from "@mui/material";
import { theme } from "./theme";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Wiki from "./pages/Wiki";
import { LoaderProvider } from "./context/LoaderContext";

import carlBrown from "./assets/fonts/CarlBrown.woff2";
import burguesScript from "./assets/fonts/Burgues Script Regular.woff2";
import perandory from "./assets/fonts/perandory-regular.woff2";
import playFair from "./assets/fonts/PlayfairDisplay-Regular.ttf"

const fontStyles = (
  <GlobalStyles
    styles={`
      @font-face {
        font-family: "Eloquence";
        src: url(${carlBrown}) format("woff2");
        font-weight: 400;
        font-style: normal;
        font-display: swap;
      }
      @font-face {
        font-family: "Burgues";
        src: url(${burguesScript}) format("woff2");
        font-weight: 400;
        font-style: normal;
        font-display: swap;
      }
      @font-face {
        font-family: "Perandory";
        src: url(${perandory}) format("woff2");
        font-weight: 400;
        font-style: normal;
        font-display: swap;
      }
        @font-face {
        font-family: "Play Fair";
        src: url(${playFair}) format("woff2");
        font-weight: 400;
        font-style: normal;
        font-display: swap;
      }
    `}
  />
);

export default function App() {
  return (
    <BrowserRouter>
      <LoaderProvider>
        <ThemeProvider theme={theme}>
          {fontStyles}
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wiki/:slug" element={<Wiki />} />
          </Routes>
        </ThemeProvider>
      </LoaderProvider>
    </BrowserRouter>
  );
}
