// src/components/Header.jsx
import { AppBar, Toolbar, Box, Button, Typography } from "@mui/material";

/* ============ PALETA (igual à WikiPage; HEX de 6 dígitos) ============ */
const PRIMARIA = "#a8454f";
const TEXTO = "#efe4cc";
const TEXTO_SUAVE = "#b9ab8e";
// const FUNDO = "#120e0c";
/* ===================================================================== */

const NAV_HEIGHT = { xs: "70px", md: "55px" };

export default function Header() {
  const navItems = ["Home", "Autores", "Wiki", "Feedback"];

  return (
    <AppBar
      position="fixed"
      sx={{
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        height: NAV_HEIGHT,
        borderRadius: 0,
        backgroundImage: `linear-gradient(to right, #050505 0%, #1c1714 50%, #050505 100%)`,
        borderBottom: `1px solid ${PRIMARIA}59`,
        boxShadow: `0 4px 24px rgba(0,0,0,.6)`,
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          height: NAV_HEIGHT,
          minHeight: { xs: "76px !important", md: "55px !important" },
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "center", md: "space-between" },
          gap: { xs: "0px", md: 0 },
          mx: { xs: "8px", md: "30px" },
        }}
      >
        {/* Logo */}
        <Box>
          <Typography
            sx={{
              color: TEXTO,
              fontSize: { xs: "26px", md: "33px" },
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
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          {navItems.map((item) => (
            <Button
              key={item}
              href={`/#${item.toLowerCase()}`}
              sx={{
                color: TEXTO,
                textTransform: "none",
                fontSize: { xs: "18px", md: "25px" },
                fontFamily: "Perandory",
                fontWeight: 500,
                letterSpacing: "1px",
                minHeight: { xs: "28px", md: "auto" },
                minWidth: 0,
                px: { xs: "10px", md: "16px" },
                py: { xs: 0, md: "6px" },
                position: "relative",
                transition: "color .3s, text-shadow .3s",
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "#fff",
                  textShadow: `0 0 14px ${PRIMARIA}`,
                },
                // linha que cresce do centro
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: "2px",
                  left: "50%",
                  width: "0%",
                  height: "1.5px",
                  backgroundColor: PRIMARIA,
                  transform: "translateX(-50%)",
                  transition: "width .4s ease",
                },
                "&:hover::after": { width: "70%" },
                // losango que aparece embaixo
                "&::before": {
                  content: '""',
                  position: "absolute",
                  bottom: "-1px",
                  left: "50%",
                  width: 6,
                  height: 6,
                  backgroundColor: PRIMARIA,
                  transform: "translateX(-50%) rotate(45deg) scale(0)",
                  transition: "transform .3s ease .1s",
                },
                "&:hover::before": {
                  transform: "translateX(-50%) rotate(45deg) scale(1)",
                },
              }}
            >
              {item}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}