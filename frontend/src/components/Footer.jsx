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

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: "100vw",
        maxHeight: {xs: "170px", md: "200px"},
        position: "relative",
        backgroundImage: `url(${blackGauze})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        py: 5,
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
            <Link href="/#home" sx={linkSx}>HOME</Link>
            <Link href="www.instagram.com/hugolugardi/" sx={linkSx}>INSTAGRAM</Link>
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
        </Box>
      </Box>
    </Box>
  );
}