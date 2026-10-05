import Header from "./Header";
import bookCover from "../assets/imgs/book-cover.jpeg";
import brasilia from "../assets/imgs/brasilia.png";

import { Box, Container } from "@mui/material";

export default function HeroSection() {
  return (
    <Box
      sx={{
        minHeight: "90vh",
        backgroundImage: `url(${brasilia})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "relative",
      }}
    >

      <Header />

      {/* AboutBookSection */}

      <Container
        maxWidth="lg"
        sx={{ py: 6, display: "flex", alignItems: "center" }}
      >
        <Box sx={{ display: "flex", gap: 6, alignItems: "stretch" }}>
          {/* Texto esquerda */}
          <Box
            sx={{
              flex: 1,
              padding: "48px 40px",
              backgroundColor: "transparent",
              borderRadius: "8px",
              border: (theme) => `2px solid ${theme.palette.primary.light}`,
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                mb: 2,
                fontSize: "12px",
                fontWeight: "bold",
                letterSpacing: "2px",
                color: (theme) => theme.palette.primary.primary,
              }}
            >
              Gláucio Augsue e seus filhos
            </Box>
            <Box
              sx={{
                fontSize: "32px",
                fontWeight: "bold",
                mb: 3,
                lineHeight: 1.3,
                color: (theme) => theme.palette.text.primary,
              }}
            >
              Hugo Lugardi e a Ordem Magoi
            </Box>
            <Box
              sx={{
                fontSize: "16px",
                lineHeight: 1.8,
                color: (theme) => theme.palette.text.secondary,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Odit earum
              ipsum enim soluta! Distinctio aliquid iste dolor maiores, ipsum
              earum sunt blanditiis aliquam doloribus voluptate. Rem consectetur
              omnis accusamus quas! Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. A facere quibusdam, numquam praesentium adipisci
              sed consecteturs officia, iste modi aliquam suscipit dicta
              voluptates eveniet. Perferendis modi praesentium delectus dolorem
              a!
            </Box>
          </Box>

          {/* Imagem direita */}
          <Box sx={{ flex: 1 }}>
            <Box
              component="img"
              src={bookCover}
              alt="Book Cover"
              sx={{
                width: "100%",
                aspectRatio: "3/4",
                objectFit: "cover",
                border: (theme) => `8px solid ${theme.palette.primary.light}`,
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
                borderRadius: "2px",
                transform: "perspective(1000px) rotateY(-5deg)",
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
