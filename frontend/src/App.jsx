import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import { BrowserRouter } from "react-router-dom";

import HeroSection from "./components/HeroSection";
import ReviewSection from "./components/ReviewSection";
import TeamSection from "./components/TeamSection";
import Wiki from "./components/Wiki";

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <HeroSection />

        <ReviewSection />

        <TeamSection />

        <Wiki />
        
      </ThemeProvider>
    </BrowserRouter>
  );
}
