import { Box, Link, Typography, Divider } from "@mui/material";
import blackGauze from "../assets/imgs/blackGauze.png";
import CubeWhite from "../assets/cube_white.svg?react";

const linkSx = {
  color: "#fff",
  textDecoration: "none",
  fontWeight: 700,
  fontSize: 13,
  "&:hover": { opacity: 0.7 },
};

// // Gera os pontos do rasgado (mesma seed = mesmo rasgado)
// function buildTornPoints(seed = 7, steps = 60) {
//   let s = seed;
//   const rand = () => ((s = (s * 9301 + 49297) % 233280) / 233280);
//   const pts = [];
//   for (let i = 0; i <= steps; i++) {
//     const x = (i / steps) * 100;
//     const y = 12 + (rand() - 0.5) * 2; // em % da altura da faixa
//     pts.push([x, y]);
//   }
//   return pts;
// }

// // Área do footer que fica visível: começa na linha rasgada e vai até a base
// const tornPts = buildTornPoints(7);
// const footerClip = `polygon(0% 100%, ${tornPts
//   .map(([x, y]) => `${x}% ${y}%`)
//   .join(", ")}, 100% 100%)`;

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: "100vw",
        position: "relative",
        backgroundImage: `url(${blackGauze})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        pt: 8,
        pb: 6,
        minHeight: 220,
        // clipPath: footerClip,
        mt: "-24px", // sobe o footer para o rasgado encostar na seção de cima
      }}
    >
      <Box sx={{ maxWidth: 1000, mx: "auto", px: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", height: 30 }}>
            <CubeWhite
              style={{
                width: "auto",
                height: "100%",
                filter: "brightness(0) invert(1)",
              }}
            />
          </Box>

          <Box component="nav" sx={{ display: "flex", gap: 2.5 }}>
            <Link href="#" sx={linkSx}>HOME</Link>
            <Link href="#" sx={linkSx}>PERSONAGENS</Link>
            <Link href="#" sx={linkSx}>LIVRO</Link>
            <Link href="#" sx={linkSx}>INSTAGRAM</Link>
          </Box>
        </Box>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.2)", my: 3.5 }} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ fontSize: 12 }}>
            © 2026 Hugo Lugardi. Todos os direitos reservados.
          </Typography>
          <Link href="#" sx={{ ...linkSx, fontWeight: 400 }}>
            Política de Privacidade
          </Link>
        </Box>
      </Box>
    </Box>
  );
}