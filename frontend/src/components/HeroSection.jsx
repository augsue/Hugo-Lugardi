import bookCover from "../assets/imgs/book-cover.jpeg";
// import brasilia from "../assets/imgs/bsbBridge.jpg";
import bsb from "../assets/imgs/arch.png"

import { Box, Container } from "@mui/material";

export default function HeroSection() {
  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "97vh",
        backgroundImage: `url(${bsb})`,
        backgroundSize: "cover",
        backgroundAttachment: "relative",
      }}
    >
      {/* AboutBookSection */}

      <Container
        maxWidth="lg"
        sx={{ py: 12, display: "flex", alignItems: "center" }}
      >
        <Box sx={{ display: "flex", gap: 6, alignItems: "stretch" }}>
          {/* Texto esquerda */}
          <Box
            sx={{
              flex: 1,
              padding: "48px 40px",
              backgroundColor: "rgba(255, 255, 255, 0.12)",
              backdropFilter: "blur(10px) saturate(110%)",
              WebkitBackdropFilter: "blur(16px) saturate(110%)",
              borderRadius: "1px",
              border: "1px solid #0d1b2a",
              boxShadow:
                "0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              color: "#0d1b2a",
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
                fontSize: "17px",
                lineHeight: 1.7,
                color: "#0a0908",
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
              a! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam voluptatibus, quod, quia, voluptates quibusdam quos
              voluptatem quidem volupta. Quisquam, quod, quia, voluptates
              quibusdam quos voluptatem quidem volupta. Quisquam, quod, quia,
              voluptates quibusdam quos voluptatem quidem volupta.
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
                border: (theme) => `8px solid ${theme.palette.primary.main}`,
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
                borderRadius: "2px",
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
