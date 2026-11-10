// src/components/WikiSection.jsx
import { Box, Container, Button, Typography } from "@mui/material";
import Carousel from "./Carousel";

import { useEffect, useState } from "react";
import { getFixedWikiPages } from "../services/adminApi";

/* ============ PALETA (igual à WikiPage; HEX de 6 dígitos) ============ */
const PRIMARIA = "#a8454f";
const TEXTO = "#efe4cc";
const TEXTO_SUAVE = "#b9ab8e";
const FUNDO = "#120e0c";
/* ===================================================================== */

function Ornamento({ direcao = "right" }) {
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        flexDirection: direcao === "right" ? "row" : "row-reverse",
        gap: 1,
      }}
    >
      <Box
        sx={{
          width: 7,
          height: 7,
          bgcolor: PRIMARIA,
          transform: "rotate(45deg)",
          flexShrink: 0,
        }}
      />
      <Box
        sx={{
          flex: 1,
          height: "1px",
          background: `linear-gradient(${
            direcao === "right" ? "90deg" : "270deg"
          }, ${PRIMARIA} 0%, ${PRIMARIA}00 100%)`,
        }}
      />
    </Box>
  );
}

export default function WikiSection() {
  const [itens, setItens] = useState([]);

  useEffect(() => {
    getFixedWikiPages()
      .then((pages) =>
        setItens(
          pages.map((p) => ({
            image: p.imageUrl,
            title: p.title,
            subtitle: p.subtitle,
            href: `/wiki/${p.slug}`,
          })),
        ),
      )
      .catch((err) => {
        console.error("Erro ao carregar wiki:", err);
        setItens([]);
      });
  }, []);

  if (itens.length === 0) return null;

  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: { xs: `calc(100svh - 45px)`, md: "96vh" },
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        py: { xs: 3, md: 4 },
        position: "relative",
        overflow: "hidden",
        background: `radial-gradient(ellipse at 50% 0%, ${PRIMARIA}26 0%, ${FUNDO}00 60%), linear-gradient(to right, #050505 0%, #1c1714 50%, #050505 100%)`,
        borderTop: `1px solid ${PRIMARIA}40`,
        borderBottom: `1px solid ${PRIMARIA}40`,
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.03,
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        },
      }}
    >
      <Container
        sx={{
          position: "relative",
          height: "100%",
          p: 0,
          maxWidth: "85% !important",
        }}
      >
        {/* Título da seção */}
        <Box sx={{ textAlign: "center", mt: 1, mb: { xs: 2, md: 5 } }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Ornamento direcao="right" />
            <Typography
              sx={{
                fontFamily: "Perandory",
                color: TEXTO,
                fontSize: { xs: "32px", md: "44px" },
                letterSpacing: { xs: 6, md: 10 },
                lineHeight: 1.1,
                textTransform: "uppercase",
                textShadow: `0 0 24px ${PRIMARIA}99, 0 2px 6px rgba(0,0,0,.8)`,
              }}
            >
              Wiki
            </Typography>
            <Ornamento direcao="left" />
          </Box>

          <Typography
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              color: TEXTO_SUAVE,
              fontSize: { xs: 13, md: 16 },
              mt: 1.5,
            }}
          >
            Os segredos, lugares e figuras do universo de Hugo Lugardi.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 4,
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
          }}
        >
          <Carousel itens={itens} />
        </Box>
      </Container>

      {/* Botão */}
      <Button
        href="/wiki"
        sx={{
          position: { xs: "absolute", md: "relative" },
          bottom: { xs: "36px", md: "10px" },
          left: {xs: "50%", md: "auto"},
          transform: { xs: "translateX(-50%)", md: "none" },
          mt: { xs: 0, md: 4 },
          py: 1.2,
          minWidth: { xs: 240, md: 300 },
          borderRadius: "4px",
          color: TEXTO,
          fontFamily: "Perandory",
          whiteSpace: "nowrap",
          px: { xs: 2, md: 5 },
          letterSpacing: { xs: 1.5, md: 3 },
          fontSize: { xs: "16px", md: "26px" },
          bgcolor: `${FUNDO}cc`,
          border: `1px solid ${PRIMARIA}`,
          boxShadow: `inset 0 0 0 3px ${FUNDO}, inset 0 0 0 4px ${PRIMARIA}66, 0 0 22px ${PRIMARIA}33`,
          transition: "all .3s",
          "&:hover": {
            bgcolor: PRIMARIA,
            transform: {
              xs: "translateX(-50%) translateY(-3px)",
              md: "translateY(-3px)",
            },
            boxShadow: `inset 0 0 0 3px ${PRIMARIA}, inset 0 0 0 4px ${TEXTO}66, 0 10px 28px ${PRIMARIA}66`,
          },
        }}
      >
        Veja a Wiki completa
      </Button>
    </Box>
  );
}
