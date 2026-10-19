import { Box } from "@mui/material";
import whiteGauze from "../assets/imgs/gauze.png"; // ajuste para o nome real
import HeroSection from "../components/HeroSection";
import ReviewSection from "../components/ReviewSection";
import TeamSection from "../components/TeamSection";
import Wiki from "../components/WikiSection";
import FeedbackForm from "../components/FeedbackForm";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${whiteGauze})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ height: "48px" }}></Box>
      <Header />
      
      <div id="home">
        <HeroSection />
      </div>
      <ReviewSection />
      <div id="autores">
        <TeamSection />
      </div>
      <div id="wiki">
        <Wiki />
      </div>
      <div id="feedback">
        <FeedbackForm />
      </div>
      <Footer />
    </Box>
  );
}