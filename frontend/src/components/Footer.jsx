// src/components/Footer.jsx
import { Box, Link, Typography } from "@mui/material";
import blackGauze from "../assets/imgs/blackGauze.png";

/* ============ PALETA (igual à WikiPage; HEX de 6 dígitos) ============ */
const PRIMARIA = "#a8454f";
const TEXTO = "#efe4cc";
const TEXTO_SUAVE = "#b9ab8e";
const FUNDO = "#120e0c";
/* ===================================================================== */

const linkSx = {
  position: "relative",
  color: TEXTO,
  textDecoration: "none",
  fontFamily: "Perandory",
  fontSize: 20,
  letterSpacing: 2,
  textTransform: "uppercase",
  transition: "color .3s, text-shadow .3s",
  "&::after": {
    content: '""',
    position: "absolute",
    left: "50%",
    bottom: -4,
    width: 0,
    height: "1.5px",
    bgcolor: PRIMARIA,
    transform: "translateX(-50%)",
    transition: "width .4s ease",
  },
  "&:hover": { color: "#fff", textShadow: `0 0 14px ${PRIMARIA}` },
  "&:hover::after": { width: "100%" },
};

function Divisor() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, my: 3 }}>
      <Box
        sx={{
          flex: 1,
          height: "1px",
          background: `linear-gradient(90deg, ${PRIMARIA}00, ${PRIMARIA}99)`,
        }}
      />
      <Box
        sx={{ width: 7, height: 7, bgcolor: PRIMARIA, transform: "rotate(45deg)" }}
      />
      <Box
        sx={{
          flex: 1,
          height: "1px",
          background: `linear-gradient(90deg, ${PRIMARIA}99, ${PRIMARIA}00)`,
        }}
      />
    </Box>
  );
}

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: "100vw",
        position: "relative",
        backgroundImage: `linear-gradient(180deg, ${FUNDO}cc 0%, ${FUNDO}f2 100%), url(${blackGauze})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: TEXTO,
        py: { xs: 4, md: 5 },
        borderTop: `1px solid ${PRIMARIA}59`,
        boxShadow: "0 -4px 24px rgba(0,0,0,.6)",
        // fio vinho com degradê no topo
        "&::before": {
          content: '""',
          position: "absolute",
          left: 0,
          right: 0,
          top: -1,
          height: "1px",
          background: `linear-gradient(90deg, ${PRIMARIA}00 0%, ${PRIMARIA} 50%, ${PRIMARIA}00 100%)`,
          pointerEvents: "none",
        },
      }}
    >
      <Box sx={{ maxWidth: 1000, mx: "auto", px: 3 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: { xs: 2.5, md: 2 },
          }}
        >
          {/* Logo */}
          <Box sx={{alignItems: "center "}}>
            <Typography
              sx={{
                color: TEXTO,
                fontSize: { xs: "28px", md: "34px" },
                fontFamily: "Perandory",
                lineHeight: { xs: 0.9, md: 0.7 },
                textAlign: "center",
                letterSpacing: "3px",
                textShadow: `0 0 18px ${PRIMARIA}66`,
              }}
            >
              Hugo Lugardi
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "14px", md: "17px" },
                color: TEXTO_SUAVE,
                fontFamily: "Burgues",
                lineHeight: 0.8,
                textAlign: "center",
                mt: { xs: "-4px", md: 0 },
              }}
            >
              E a Ordem Magoi
            </Typography>
          </Box>

          {/* Links */}
          <Box
            component="nav"
            sx={{
              display: "flex",
              gap: 3,
              flex: { md: 1 },
              justifyContent: "flex-end",
            }}
          >
            <Link href="/#home" sx={linkSx}>
              Home
            </Link>
            <Link
              href="https://www.instagram.com/hugolugardi/"
              target="_blank"
              rel="noopener noreferrer"
              sx={linkSx}
            >
              Instagram
            </Link>
          </Box>
        </Box>

        <Divisor />

        <Typography
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontSize: 13,
            color: TEXTO_SUAVE,
            textAlign: "center",
          }}
        >
          © 2026 Hugo Lugardi. Todos os direitos reservados.
        </Typography>
      </Box>
    </Box>
  );
}