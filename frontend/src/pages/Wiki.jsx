import { useParams, Link } from "react-router-dom";
import { Box, Typography, Button, Container } from "@mui/material";
import whiteGauze from "../assets/imgs/gauze.png"; // ajuste para o nome real

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Wiki() {
  const { slug } = useParams();
  const title = slug ? slug.replace(/-/g, " ") : "Wiki Page";
  const formattedTitle = title.charAt(0).toUpperCase() + title.slice(1);
  const displayTitle = formattedTitle.replace(/\b\w/g, (char) => char.toUpperCase());
  return (
    <Box
      sx={{
        backgroundImage: `url(${whiteGauze})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "relative",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />

      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            border: "1px solid #000",
            height: "80%",
            width: "80%",
          }}
        >
          {/* Titulo do card */}
          <Box
            sx={{
              border: "1px solid #000",
              width: "100%",
              justifyContent: "center",
              pl: 4,
              pt: 4,
              backgroundImage:
                "linear-gradient(to right, #0a0908 0%, #161a1d 50%, #0a0908 100%)",
              backgroundSize: "auto, auto",
              backgroundRepeat: "no-repeat, repeat",
              borderBottom: "2px solid #000000",
            }}
          >
            <Typography
              gutterBottom
              sx={{ fontSize: 34, fontWeight: "500", color: "#e8e4dc" }}
            >
              {displayTitle}
            </Typography>
          </Box>

          {/* Conteúdo do card */}
          <Container
            sx={{
              border: "1px solid #000",
              width: "100%",
              height: "80%",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              mt: 2,
            }}
          >
            <Typography variant="body1" gutterBottom>
              Placeholder para o slug: "{slug}".
            </Typography>
            <Button component={Link} to="/" variant="contained">
              Voltar a Home
            </Button>
          </Container>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
