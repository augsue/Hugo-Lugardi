import { Box, Container } from "@mui/material";
import Carousel from "./Carousel";

import bible from "../assets/imgs/bible.jpg";
import bsb from "../assets/imgs/bsb.jpg";
import art from "../assets/imgs/art.jpg";
import rcube from "../assets/imgs/RCube.jpg";
import people from "../assets/imgs/people.png";
import castle from "../assets/imgs/castel.jpg";

const itens = [
  { image: bible, title: "Referências Bíblicas", subtitle: "Bases bíblicas para a escrita", href: "/wiki/referencias-biblicas" },
  { image: art, title: "Aventura", subtitle: "Explore o mundo espiritual", href: "/wiki/aventura" },
  { image: bsb, title: "Ambientação", subtitle: "Brasília - Águas Claras", href: "/wiki/ambientacao" },
  { image: rcube, title: "Poderes", subtitle: "Definição dos poderes", href: "/wiki/poderes" },
  { image: people, title: "Reino Espiritual", subtitle: "O Reino invisível", href: "/wiki/reino-espiritual" },
  { image: castle, title: "A Ordem Magoi", subtitle: "O esconderijo da ordem", href: "/wiki/a-ordem-magoi" },
];

export default function WikiSection() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "90vh",
        overflow: "hidden",
        py: 6,
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
      <Container sx={{ height: "100%", p: 0, maxWidth: "85% !important" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 6, opacity: 0.3 }}>
          <Box sx={{ flex: 1, height: "1px", backgroundColor: "#FFF" }} />
          <Box sx={{ fontSize: "20px", color: "#FFF", fontWeight: 500 }}>Wiki</Box>
          <Box sx={{ flex: 1, height: "1px", backgroundColor: "#FFF" }} />
        </Box>
        <Box sx={{ display: "flex", gap: 4, justifyContent: "space-between", width: "100%", height: "100%" }}>
          <Carousel itens={itens} />
        </Box>
      </Container>
    </Box>
  );
}