import { Box, Container } from "@mui/material";
import Carousel from "./Carousel";

export default function Wiki() {
  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "80vh",
        py: 3,
        position: "relative",
        background: "linear-gradient(to right, #050505 0%, #0f0f0f 50%, #050505 100%)",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.02,
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        },
      }}
    >
      <Container
        sx={{
          height: "100%",
          p: 0,
          maxWidth: "85% !important",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            mb: 6,
            opacity: 0.3,
          }}
        >
          <Box sx={{ flex: 1, height: "1px", backgroundColor: "#FFF" }} />
          <Box sx={{ fontSize: "20px", color: "#FFF", fontWeight: 500 }}>
            Wiki
          </Box>
          <Box sx={{ flex: 1, height: "1px", backgroundColor: "#FFF" }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 4,
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Carousel />
        </Box>
      </Container>
    </Box>
  );
}
